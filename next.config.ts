import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'
import { serverUrl } from './src/config/server'

/**
 * Set NEXT_PUBLIC_SERVER_URL to the URL of the server.
 * If NEXT_PUBLIC_SERVER_URL is not set, it will default to the URL of the Vercel deployment.
 * If Vercel URL is not set, it will default to http://localhost:3000.
 */
export const NEXT_PUBLIC_SERVER_URL = serverUrl

const nextConfig: NextConfig = {
  experimental: {
    staticGenerationRetryCount: 1,
    staticGenerationMaxConcurrency: 8,
    staticGenerationMinPagesPerWorker: 25,
  },
  images: {
    remotePatterns: [
      ...[new URL(serverUrl)].map((item) => {
        const url = new URL(item)

        return {
          hostname: url.hostname,
          protocol: url.protocol.replace(':', '') as 'http' | 'https',
        }
      }),
      {
        hostname: '*.vercel.app',
        protocol: 'https',
      },
    ],
  },
  reactStrictMode: true,
  poweredByHeader: false,

}

export default withPayload(nextConfig)
