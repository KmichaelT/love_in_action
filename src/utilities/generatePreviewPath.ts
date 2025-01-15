import localization from '@/localization.config'
import { CollectionSlug } from 'payload'

const collectionPrefixMap: Partial<Record<CollectionSlug, string>> = {
  posts: '/posts',
  pages: '',
}

type Props = {
  collection: keyof typeof collectionPrefixMap
  slug: string
  locale: string
}

export const generatePreviewPath = ({ collection, slug, locale }: Props) => {
  const path = `${locale !== localization.defaultLocale ? `/${locale}` : ''}${collectionPrefixMap[collection]}/${slug === 'home' ? '' : slug}`

  const params = {
    slug,
    collection,
    path,
    locale,
  }

  const encodedParams = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    encodedParams.append(key, value)
  })

  return `/next/preview?${encodedParams.toString()}`
}
