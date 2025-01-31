import type { Metadata } from 'next'

import { cn } from 'src/utilities/cn'
import { Geist_Mono, Geist } from 'next/font/google'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/globals/Footer/Component'
import { Header } from '@/globals/Header/Component'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'
import { Analytics } from "@vercel/analytics/react"

import './globals.css'
import { ThemeConfig } from '@/globals/ThemeConfig/Component'
import { NEXT_PUBLIC_SERVER_URL } from 'next.config'
import { resolveSlugs } from '@/utilities/resolveSlugs'
import localization from '@/localization.config'
import { PublicContextProps } from '@/utilities/publicContextProps'

// Change fonts by changing class Geist_Mono or Geist. 
// No change in tailwind.config.mjs needed (Because it's already synced via --font-mono and --font-sans variables). Just make sure, that these variables stay.
const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' })
const sans = Geist({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  metadataBase: new URL(NEXT_PUBLIC_SERVER_URL || 'https://trieb.work'),
  openGraph: mergeOpenGraph(),
  // twitter: {
  //   card: 'summary_large_image',
  //   creator: '@payloadcms',
  // },
}

export default async function RootLayout({ children, params }: { children: React.ReactNode, params: any }) {
  const { slugs } = await params;
  const slugData = resolveSlugs(slugs || []);
  const { isEnabled } = await draftMode()

  const publicContext: PublicContextProps = {
    ...slugData,
  }

  return (
    <html className={cn(mono.variable, sans.variable)} lang={slugData.locale || localization.defaultLocale} suppressHydrationWarning>
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
          <Analytics/>
          <Header publicContext={publicContext} />
          {children}
          <Footer publicContext={publicContext} />
        </Providers>
      </body>
    </html>
  )
}
