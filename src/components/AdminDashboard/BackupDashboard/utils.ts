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
  const fileType = blobName.includes("json") ? 'json' : (blobName.includes("tar.gz") ? 'tar.gz' : 'na')
  const [type = "", dbName = "", hostname = "", date = ""] = (blobName.replace('.json', '').replace('.tar.gz', '')).split(SEPARATOR);
  return {
    fileType,
    type,
    date,
    dbName,
    hostname
  }
}

export function createBlobName(type: string, dbName: string, hostname: string, date: string, fileType: 'json' | 'tar.gz') {
  return `${type}${SEPARATOR}${dbName}${SEPARATOR}${hostname}${SEPARATOR}${date}.${fileType}`;
}