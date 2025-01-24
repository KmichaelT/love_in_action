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
