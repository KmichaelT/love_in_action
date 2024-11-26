import { Block } from 'payload'
import {
  HeadingFeature,
  ParagraphFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { link } from '@/fields/link'

export const allGalleryDesignVersions = [
  'GALLERY1',
  'GALLERY2',
  'GALLERY3',
  'GALLERY4',
  'GALLERY5',
  'GALLERY6',
] as const

type GalleryDesignVersion = typeof allGalleryDesignVersions[number]

/**
 * mutable copy of allGalleryDesignVersions as payload needs this type
 */
const galleryDesignVersions: string[] = [...allGalleryDesignVersions]

export const Gallery: Block = {
  slug: 'gallery',
  labels: {
    singular: 'Gallery',
    plural: 'Gallery Blocks',
  },
  fields: [
    {
      name: 'designVersion',
      type: 'select',
      defaultValue: 'GALLERY1',
      options: [
        { label: 'Gallery 1 (Grid Layout)', value: 'GALLERY1' },
        { label: 'Gallery 2 (Basic Gallery with just images and fullscreen modal)', value: 'GALLERY2' },
        { label: 'Gallery 3 (Masonry Layout)', value: 'GALLERY3' },
        { label: 'Gallery 4 (Large Images with Overlay)', value: 'GALLERY4' },
        { label: 'Gallery 5 (Carousel)', value: 'GALLERY5' },
        { label: 'Gallery 6 (Card Layout)', value: 'GALLERY6' },
      ],
      admin: {
        description: 'Choose the design version for this gallery block',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      admin: {
        description: 'Optional heading and description for the gallery',
        condition: (_, { designVersion } = {}) => galleryDesignVersions.includes(designVersion),
      },
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HeadingFeature(),
          ParagraphFeature(),
        ],
      }),
    },
    {
      name: 'elements',
      label: "Gallery Items",
      type: 'array',
      required: true,
      minRows: 1,
      admin: {
        description: 'Add images to the gallery',
        condition: (_, { designVersion } = {}) => galleryDesignVersions.includes(designVersion),
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
            name: 'richText',
            type: 'richText',
            editor: lexicalEditor({
              features: ({ defaultFeatures }) => [
                ...defaultFeatures,
                HeadingFeature(),
                ParagraphFeature(),
              ],
            }),
        },
        link({
          appearances: false,
        }),
      ],
    }
  ],
};