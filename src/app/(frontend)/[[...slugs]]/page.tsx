import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

import type { Page as PageType } from '@/payload-types'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { notFound } from 'next/navigation'
import { resolveSlugs } from '@/utilities/resolveSlugs'
import localization, { locales } from '@/localization.config'
import { queryPageBySlug } from './data'
import { PublicContextProps } from '@/utilities/publicContextProps'
import { Breadcrumbs } from '@/components/Breadcrumbs'

type Params = {
  slugs?: Array<string>
}

export type Args = {
  params: Promise<Params>
}

function generateUrl(locale: string, cleanSlugs: string[]) {
  return locale !== localization.defaultLocale ? `/${locale}/` : '/' + cleanSlugs.join('/');
}

export async function generateStaticParams(): Promise<Array<Params>> {
  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    locale: 'all',
    overrideAccess: false,
  })

  if (pages.docs.length === 0) {
    return []
  }

  return pages.docs.flatMap(({ slug }) => {
    return locales.map((locale) => {
      // order of array pushes matters here so be careful restructuring it
      const slugs: string[] = [];
      if (locale !== localization.defaultLocale) {
        slugs.push(locale);
      }
      if (slug !== 'home' && slug) {
        slugs.push(slug);
      }
      return { slugs };
    })
  })
}

export default async function Page(props: Args) {
  const { slugs } = await props.params;
  const res = resolveSlugs(slugs || []);
  if (res.isNotFound) {
    notFound();
  }
  const { locale, cleanSlugs } = res;

  const publicContext: PublicContextProps = {
    ...res,
  }

  const url = generateUrl(locale, cleanSlugs);

  let page: PageType | null

  page = await queryPageBySlug({
    cleanSlugs,
    locale
  })

  if (!page) {
    return <PayloadRedirects url={url} />
  }

  const { hero, layout, breadcrumbs: breadcrumbData, enableBreadcrumbs } = page

  return (
    <article className="">
      <PageClient />
      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      <RenderHero {...hero} publicContext={publicContext} />
      {enableBreadcrumbs && breadcrumbData && <Breadcrumbs items={breadcrumbData} publicContext={publicContext} />}
      <RenderBlocks blocks={layout} publicContext={publicContext} />
    </article>
  )
}

export async function generateMetadata(props: Args): Promise<Metadata> {
  const { slugs } = await props.params;
  const res = resolveSlugs(slugs || []);
  if (res.isNotFound) {
    notFound();
  }
  const { locale, cleanSlugs } = res;

  const page = await queryPageBySlug({
    cleanSlugs,
    locale
  })
  const url = generateUrl(locale, cleanSlugs);
  return generateMeta({ doc: page, url })
}