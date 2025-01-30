import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'


export const NEXT_PUBLIC_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')
console.log("NEXT_PUBLIC_SERVER_URL", NEXT_PUBLIC_SERVER_URL, "Vercel URL", process.env.VERCEL_URL)

const nextConfig: NextConfig = {
  experimental: {
    staticGenerationRetryCount: 1,
    staticGenerationMaxConcurrency: 8,
    staticGenerationMinPagesPerWorker: 25,
  },
  images: {
    remotePatterns: [
      ...[new URL(NEXT_PUBLIC_SERVER_URL)].map((item) => {
        const url = new URL(item)

        return {
          hostname: url.hostname,
          protocol: url.protocol.replace(':', '') as 'http' | 'https',
        }
      }),
    ],
  },
  reactStrictMode: true,
  poweredByHeader: false,

}

export default withPayload(nextConfig)
