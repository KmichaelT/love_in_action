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
import { resolveParams } from '@/utilities/resolveParams'

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
    ?.filter((doc) => {
      return doc.slug !== 'home'
    })
    .flatMap(({ slug }) => {
      return localCodes.map((locale) => ({ locale, slug }))
    })

  return params
}

type Params = {
  slug?: string
  localeOrSlug?: string
}

export type Args = {
  params: Promise<Params>
}

export default async function Page(props: Args) {
  const { locale, slug } = resolveParams(await props.params);

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

export async function generateMetadata(props: Args): Promise<Metadata> {
  const { locale, slug } = resolveParams(await props.params);
  const page = await queryPageBySlug({
    slug,
    locale
  })
  return generateMeta({ doc: page, slug })
}

export const queryPageBySlug = cache(async ({ slug, locale }: { slug: string, locale: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  // Check if locale is supported
  const { locales } = payload.config.localization as LocalizationConfig;
  if (!locales.map((locale) => locale.code).includes(locale)) {
    console.log("locale is not supported", locale, locales)
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