import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload, LocalizationConfig } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'

import type { Page as PageType, Config } from '@/payload-types'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    locale: 'all',
    overrideAccess: false,
  })

  const { locales } = payload.config.localization as LocalizationConfig;
  const localCodes = locales.map((locale) => locale.code);

  if (pages.docs.length === 0) {
    return []
  }

  const params = pages.docs
    // ?.filter((doc) => {
    //   return doc.slug !== 'home'
    // })
    .flatMap(({ slug }) => {
      return localCodes.map((locale) => ({ locale, slug }))
    })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
    locale: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { slug = 'home', locale } = await paramsPromise
  const url = '/' + slug

  let page: PageType | null

  page = await queryPageBySlug({
    slug,
    locale
  })

  if (!page) {
    return <PayloadRedirects url={url} />
  }

  const { hero, layout } = page

  return (
    <article className="">
      <PageClient />
      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      <RenderHero {...hero} />
      <RenderBlocks blocks={layout} />
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }): Promise<Metadata> {
  const { slug = 'home', locale } = await paramsPromise
  const page = await queryPageBySlug({
    slug,
    locale
  })
  return generateMeta({ doc: page })
}

const queryPageBySlug = cache(async ({ slug, locale }: { slug: string, locale: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  // Check if locale is supported
  const { locales } = payload.config.localization as LocalizationConfig;
  if (!locales.map((locale) => locale.code).includes(locale)) {
    notFound();
  }

  const result = await payload.find({
    collection: 'pages',
    draft,
    limit: 1,
    overrideAccess: draft,
    locale: locale as Config["locale"],
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})