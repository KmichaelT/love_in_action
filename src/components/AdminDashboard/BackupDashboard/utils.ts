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

const SEPARATOR = '---';

export function transformBlobName(blobName: string) {
  const [type = "", dbName = "", hostname = "", date = ""] = (blobName.replace('.json', '')).split(SEPARATOR);
  return {
    type,
    date,
    dbName,
    hostname
  }
}

export function createBlobName(type: string, dbName: string, hostname: string, date: string) {
  return `${type}${SEPARATOR}${dbName}${SEPARATOR}${hostname}${SEPARATOR}${date}.json`;
}