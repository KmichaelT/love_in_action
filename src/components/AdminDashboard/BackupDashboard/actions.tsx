"use server"
import { getPayload } from 'payload';
import configPromise from '@payload-config'
import { del, list, put } from '@vercel/blob';
import { revalidatePath, revalidateTag } from 'next/cache';
import { createBlobName, getCurrentHostname } from './utils';
import { getCurrentDbName } from './utils';
import { redirect } from 'next/navigation';
import { EJSON } from 'bson';
import fs from 'node:fs/promises';
import path from 'node:path';
import { revalidateFooter } from '@/globals/Footer/hooks/revalidateFooter';

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

export async function restoreBackup(downloadUrl: string, collectionBlacklist: string[] = [], mergeData = false) {
  "use server"
  const db = await getDb();
  const data = await fetch(downloadUrl);
  const json = EJSON.parse(await data.text()) as Record<string, { _id?: any }[]>;
  for (const collectionName of Object.keys(json)) {
    if (collectionBlacklist.includes(collectionName)) {
      continue;
    }
    const collectionData = json[collectionName]
    if (collectionData.length > 0) {
      console.log("Restoring collection", collectionName)
      const collection = db.collection(collectionName);
      const indexes = await collection.indexes();
      const uniqueIndexes = indexes.filter(idx => idx.unique).flatMap((idx) => Object.keys(idx.key))
      if (!mergeData) {
        await collection.deleteMany({});
      }
      const res = await collection.bulkWrite(collectionData.map(doc => {
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

    if (collectionName === "pages" && (collectionData as any)?.slug) {
      Object.values((collectionData as any).breadcrumbs).map((b: { url: string }[]) => (b[b.length - 1]?.url)).forEach((path) => {
        console.log("revalidate path", path);
        revalidatePath(path)
      })
    }
  }
  revalidateTag('global_footer')
  revalidateTag('global_header')
  revalidateTag('global_page-config')
  revalidateTag('global_pageConfig')
  revalidateTag('global_theme-Config')
  revalidateTag('global_themeConfig')
  revalidatePath('/admin');
  redirect('/admin/logout');
}

export async function restoreSeedMedia() {
  "use server"
  const files = await fs.readdir(path.join(process.cwd(), 'public/seed/media'));
  for (const file of files) {
    const data = await fs.readFile(path.join(process.cwd(), 'public/seed/media', file));
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      // Upload file to vercel blob storage
      const blob = await put(file, data, { access: 'public', addRandomSuffix: false });
      console.log("Restored seed media to vercel blob storage", file, blob);
    } else {
      // Copy file to public media directory
      const folderPath = path.join(process.cwd(), 'public/media');
      const publicPath = path.join(folderPath, file);
      await fs.mkdir(folderPath, { recursive: true });
      await fs.writeFile(publicPath, data);
      console.log("Restored seed media to public directory", file, publicPath);
    }
  }
  console.log("Restored all files");
  return files;
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
  const name = `backups/${createBlobName(cron ? 'cron' : 'manual', currentDbName, currentHostname, Date.now().toString())}`;
  await put(name, EJSON.stringify(allData), { access: 'public' });
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