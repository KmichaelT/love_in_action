import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

import redirects from './redirects.js'

export const NEXT_PUBLIC_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

const nextConfig: NextConfig = {
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
  redirects,
  poweredByHeader: false,
  
}

export default withPayload(nextConfig)
