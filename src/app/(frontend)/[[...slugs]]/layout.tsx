import type { Metadata } from 'next'

import { specifyBlack, specifyBold, specifyMedium } from '@/fonts'
import React from 'react'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { serverUrl as NEXT_PUBLIC_SERVER_URL } from '@/config/server'

import { cn } from 'src/utilities/cn'
import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/globals/Footer/Component'
import { Header } from '@/globals/Header/Component'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { draftMode } from 'next/headers'
import { Analytics } from "@vercel/analytics/react"

import { ThemeConfig } from '@/globals/ThemeConfig/Component'
import { resolveSlugs } from '@/utilities/resolveSlugs'
import localization from '@/localization.config'
import { PublicContextProps } from '@/utilities/publicContextProps'

import './globals.css' 

// Custom fonts are defined in the fonts.ts file

export const metadata: Metadata = {
  metadataBase: new URL(NEXT_PUBLIC_SERVER_URL || 'https://trieb.work'),
  openGraph: mergeOpenGraph(),
  // twitter: {
  //   card: 'summary_large_image',
  //   creator: '@payloadcms',
  // },
}

export default async function RootLayout({ children, params }: { children: React.ReactNode, params: any }) {
  const paramsR = await params;
  const { slugs } = paramsR;
  const slugData = resolveSlugs(slugs || []);
  const { isEnabled } = await draftMode()

  const publicContext: PublicContextProps = {
    ...slugData,
  }

  return (
    <html
      lang={slugData.locale || localization.defaultLocale}
      data-theme="light"
      suppressHydrationWarning
      className={cn(
        specifyBlack.variable,
        specifyBold.variable, 
        specifyMedium.variable,
        'test-styles-loaded' // Add test class to check if styles are applied
      )}
    >
      <head>
        <ThemeConfig />
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />

      </head>
      <body>
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />
          <LivePreviewListener />
          <Analytics />
          <Header publicContext={publicContext} />
          {children}
          <Footer publicContext={publicContext} />
        </Providers>
      </body>
    </html>
  )
}
