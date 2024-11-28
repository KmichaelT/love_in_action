import { link } from '@/fields/link'
import {
  HeadingFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

// Testimonal 2: headline, link, testimonials: { authorAvatar }
// Testimonal 3: testimonials: { icon, richText, authorName, authorDescription }
// Testimonal 4: testimonials: { richText, authorName, authorAvatar, authorDescription }
// Testimonal 6: headline richText, testimonials: { richText, authorName, authorAvatar, authorDescription }
// Testimonal 7: headline richText, link, testimonials: { richText, authorName, authorAvatar, authorDescription }

// Testimonal 13: headline, tagline, testimonials: { authorAvatar }
// Testimonal 10: { richText, authorName, authorAvatar, authorDescription }

// Testimonal 16: headline richText, tagline string, testimonials: { richText, authorAvatar }
// Testimonal 17: headline richText, tagline string, link, testimonials: { icon, richText, authorName, authorAvatar, authorDescription }
// Testimonal 18: headline richText, tagline string, testimonials: { richText, authorName, authorAvatar, authorDescription, stars }
// Testimonal 19: headline richText, tagline string, link, testimonials: { richText, authorName, authorAvatar, authorDescription, stars }


export const allAboutDesignVersions = [
  'ABOUT1',
  'ABOUT2',
  'ABOUT3',
  'ABOUT4',
  'ABOUT5',
] as const

export type AboutDesignVersion = typeof allAboutDesignVersions[number]

export const AboutBlock: Block = {
  slug: 'about',
  interfaceName: 'AboutBlock',
  labels: {
    singular: 'About',
    plural: 'multiple About',
  },
  fields: [
    {
      name: 'designVersion',
      type: 'select',
      required: true,
      options: allAboutDesignVersions.map(version => ({ label: version, value: version })),
    },

    {
      name: 'headline',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3'] })
        ],
      }),
    },
    {
      name: 'text1',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] })
        ],
      }),
    },
    {
      name: 'text2',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] })
        ],
      }),
    },
    {
      name: 'text3',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h3', 'h4'] })
        ],
      }),
    },


    link({
      overrides: {
        admin: {
          condition: (_, { designVersion } = { designVersion: '' }) =>
            ['ABOUT3', 'ABOUT4'].includes(designVersion),
        },
      }
    }),

    {
      name: 'images',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
    },
    {
      name: 'logos',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      admin: {
        condition: (_, { designVersion } = { designVersion: '' }) =>
          ['ABOUT3', 'ABOUT2', 'ABOUT5'].includes(designVersion),
      },
    },

    {
      name: 'counter',
      type: 'array',
      fields: [
        { name: 'value', type: 'text', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'text', required: false },
      ],
      admin: {
        condition: (_, { designVersion } = { designVersion: '' }) =>
          ['ABOUT5', 'ABOUT2', 'ABOUT3'].includes(designVersion),
      },
    }
  ],
}