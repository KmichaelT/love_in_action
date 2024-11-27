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

import './globals.css'
import { ThemeConfig } from '@/globals/ThemeConfig/Component'

// Change fonts by changing class Geist_Mono or Geist. 
// No change in tailwind.config.mjs needed (Because it's already synced via --font-mono and --font-sans variables).
const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' })
const sans = Geist({ subsets: ['latin'], variable: '--font-sans' })

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()
  return (
    <html className={cn(mono.variable, sans.variable)} lang="en" suppressHydrationWarning>
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

          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://trieb.work'),
  openGraph: mergeOpenGraph(),
  // twitter: {
  //   card: 'summary_large_image',
  //   creator: '@payloadcms',
  // },
}
