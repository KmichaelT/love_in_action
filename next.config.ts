import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'
import localization from './src/localization.config'


export const NEXT_PUBLIC_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

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
  redirects: async () => {
    return [
      {
        destination: '/ie-incompatible.html',
        has: [
          {
            type: 'header',
            key: 'user-agent',
            value: '(.*Trident.*)', // all ie browsers
          },
        ],
        permanent: false,
        source: '/:path((?!ie-incompatible.html$).*)', // all pages except the incompatibility page
      },
      // {
      //   source: '/:locale/home',
      //   destination: `/:locale`,
      //   permanent: true,
      // },
    ]
  },
  rewrites: async () => {
    const { locales, defaultLocale } = localization;
    const nonDefaultLocales = locales.filter(locale => locale !== defaultLocale);
    const protectedPath = [...nonDefaultLocales, 'home', 'api', 'admin', '_next'];
    if (nonDefaultLocales.length > 0) {
      return [
        {
          source: '/',
          destination: `/${defaultLocale}/home`,
        },
        {
          source: `/:locale(${nonDefaultLocales.join('|')})`,
          destination: `/:locale/home`,
        },
        {
          source: `/:path((?!${protectedPath.join('|')}).*)`,
          destination: `/${defaultLocale}/:path`,
        },
      ]
    } else {
      return [
        {
          source: '/',
          destination: `/${defaultLocale}/home`,
        },
        {
          source: `/:path.*`,
          destination: `/${defaultLocale}/:path`,
        },
      ]
    }
  },
  poweredByHeader: false,

}

export default withPayload(nextConfig)
