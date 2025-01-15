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
import localization, { Locale, locales } from '@/localization.config'

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

type Args = {
  params: Promise<{
    slug?: string
    localeOrSlug: string
  }>
}

async function resolveParams(props: Args) {
  const { slug: slugRaw, localeOrSlug } = await props.params;
  // We do not want to serve under default locale. Default locale should run directly under /
  if (localeOrSlug === localization.defaultLocale) {
    notFound();
  }

  let locale: Locale = localization.defaultLocale as Locale;
  let slug: string = "home";

  if (locales.includes(localeOrSlug as Locale)) {
    // localeOrSlug is a locale
    locale = localeOrSlug as Locale;
    if (slugRaw === "home") {
      // We do not want to serve under /de/home. This route should be served directly under /de
      notFound();
    }
    // If no slug is provided, we want to serve page saved under slug "home" under /de url
    slug = slugRaw || "home";
  } else {
    // localeOrSlug is a slug

    if (localeOrSlug === "home") {
      // We do not want to serve under /home. This route should be served directly under /
      notFound();
    }
    // If localeOrSlug is not a locale, we want to serve page with default locale
    locale = localization.defaultLocale as Locale;
    // If no slug is provided, we want to serve page saved under slug "home" under / url
    slug = localeOrSlug || "home";
  }
  return { locale, slug }
}

export default async function Page(props: Args) {
  const { locale, slug } = await resolveParams(props);

  const url = '/' + slug

  let page: PageType | null

  page = await queryPageByParams({
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
  const { locale, slug } = await resolveParams(props);
  const page = await queryPageByParams({
    slug,
    locale
  })
  return generateMeta({ doc: page })
}

const queryPageByParams = cache(async ({ slug, locale }: { slug: string, locale: string }) => {
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