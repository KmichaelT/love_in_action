import type { Metadata } from 'next'
import type { Page, Post } from '../payload-types'
import { mergeOpenGraph } from './mergeOpenGraph'
import { NEXT_PUBLIC_SERVER_URL } from 'next.config'

export const generateMeta = async (args: { doc: Page | Post, slug: string }): Promise<Metadata> => {
  const { doc, slug } = args || {}
  // TODO: build real url using slug and locale

  const ogImage =
    typeof doc?.meta?.image === 'object' &&
    doc.meta.image !== null &&
    'url' in doc.meta.image &&
    `${NEXT_PUBLIC_SERVER_URL}${doc.meta.image.url}`

  const title = doc?.meta?.title || doc?.title || 'PayBlocks'
  const description = doc?.meta?.description || ''

  return {
    title: `${title}`,
    description,
    openGraph: mergeOpenGraph({
      title,
      description,
      url: Array.isArray(doc?.slug) ? doc?.slug.join('/') : '/',
      images: ogImage
      ? [
          {
            url: ogImage,
          },
        ]
      : undefined,
    }),
  }
}
