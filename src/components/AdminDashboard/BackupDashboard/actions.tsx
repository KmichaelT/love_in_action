"use server"
import './index.scss'
import { getPayload } from 'payload';
import configPromise from '@payload-config'
import { del, list, put } from '@vercel/blob';
import { revalidatePath } from 'next/cache';
import { ObjectId } from 'mongodb';

const BACKUPS_TO_KEEP = Number(process.env.BACKUPS_TO_KEEP) || 10;

export async function getDb() {
  const payload = await getPayload({ config: configPromise });
  if (payload.db.name !== "mongoose") {
    throw new Error("Backup failed: Not a mongoose database adapter");
  }
  const db = payload.db.connection.db;
  if (!db) {
    console.error("Backup failed: Database not initialized");
    throw new Error("Backup failed: Database not initialized");
  }
  return db!
}

export function getCurrentDbName() {
  try {
    const { hostname, pathname } = new URL(process.env.MONGODB_URI!);
    return hostname + pathname;
  } catch (e) {
    return "none";
  }
}

export function getCurrentHostname() {
  try {
    return process.env.NEXT_PUBLIC_SERVER_URL ? new URL(process.env.NEXT_PUBLIC_SERVER_URL).hostname : process.env.VERCEL_URL!;
  } catch (e) {
    return process.env.VERCEL_URL! || "none";
  }
}

export async function restoreBackup(downloadUrl: string) {
  "use server"
  const db = await getDb();
  const data = await fetch(downloadUrl);
  const json = await data.json() as Record<string, { _id?: any, email?: string }[]>;
  for (const collectionName of Object.keys(json)) {
    const collectionData = json[collectionName]
    if (collectionData.length > 0) {
      console.log("Restoring collection", collectionName)
      const collection = db.collection(collectionName);
      const indexes = await collection.indexes();
      const uniqueIndexes = indexes.filter(idx => idx.unique).flatMap((idx) => Object.keys(idx.key))
      const res = await collection.bulkWrite(collectionData.map(doc => {
        // const { _id, ...updateData } = doc;
        doc._id = new ObjectId(doc._id as string)
        return {
          updateOne: {
            filter: uniqueIndexes.length > 0 ? {
              $or: [
                { _id: doc._id },
                ...uniqueIndexes.map(field => ({ [field]: doc[field] }))
              ]
            } : { _id: doc._id },
            update: { $set: doc },
            upsert: true
          }
        }
      }));
      console.log("Restoring done", res)
    }
  }
}

export async function createBackup(cron: boolean = false) {
  const currentHostname = getCurrentHostname();
  const currentDbName = getCurrentDbName();

  if (cron) {
    const { blobs } = await list({
      prefix: 'backups/cron-',
      limit: 1000,
    });
    // Only keep the 10(BACKUPS_TO_KEEP) newest backups and delete the rest. Only for cron backups (prefix cron-).
    const sorted = blobs.sort((a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime());
    const oldest = sorted.slice(BACKUPS_TO_KEEP - 1);
    for (const blob of oldest) {
      await del(blob.url);
      console.log("Deleted backup", blob.pathname);
    }
  }

  const db = await getDb();
  const collections = await db.listCollections().toArray();
  const allData = {};
  for (const collection of collections) {
    allData[collection.name] = await db.collection(collection.name).find({}).toArray();
  }
  const name = `backups/${cron ? 'cron' : 'manual'}-${currentDbName}-${currentHostname}-${Date.now()}.json`;
  await put(name, JSON.stringify(allData), { access: 'public' });
  revalidatePath('/admin');
  console.log("Backup created", name);
}
export async function listBackups() {
  "use server"
  const { blobs } = await list({
    prefix: 'backups/',
    limit: 1000,
  });
  return blobs;
}