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
// Testimonal 17: headline richText, tagline string, testimonials: { icon, richText, authorName, authorAvatar, authorDescription }
// Testimonal 18: headline richText, tagline string, testimonials: { richText, authorName, authorAvatar, authorDescription, stars }
// Testimonal 19: headline richText, tagline string, link, testimonials: { link, richText, authorName, authorAvatar, authorDescription, stars }


export const allTestimonialDesignVersions = [
  "TESTIMONIAL2",
  "TESTIMONIAL3",
  "TESTIMONIAL4",
  "TESTIMONIAL6",
  "TESTIMONIAL7",
  "TESTIMONIAL13",
  "TESTIMONIAL10",
  "TESTIMONIAL16",
  "TESTIMONIAL17",
  "TESTIMONIAL18",
  "TESTIMONIAL19",
] as const

export type TestimonialDesignVersion = typeof allTestimonialDesignVersions[number]

export const TestimonialBlock: Block = {
  slug: 'testimonial',
  interfaceName: 'TestimonialBlock',
  labels: {
    singular: 'Testimonial',
    plural: 'Testimonials',
  },
  fields: [
    {
      name: 'designVersion',
      type: 'select',
      required: true,
      options: allTestimonialDesignVersions.map(version => ({ label: version, value: version })),
    },

    {
      name: 'headline',
      type: 'richText',
      admin: {
        condition: (_, { designVersion } = { designVersion: '' }) =>
          ['TESTIMONIAL2', 'TESTIMONIAL6', 'TESTIMONIAL7', 'TESTIMONIAL13', 'TESTIMONIAL16', 'TESTIMONIAL17', 'TESTIMONIAL18', 'TESTIMONIAL19'].includes(designVersion),
      },
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3'] })
        ],
      }),
    },

    {
      name: 'tagline',
      type: 'text',
      admin: {
        condition: (_, { designVersion } = { designVersion: '' }) =>
          ['TESTIMONIAL13', 'TESTIMONIAL16', 'TESTIMONIAL17', 'TESTIMONIAL18', 'TESTIMONIAL19'].includes(designVersion),
      },
    },

    link({
      overrides: {
        admin: {
          condition: (_, { designVersion } = { designVersion: '' }) =>
            ['TESTIMONIAL2', 'TESTIMONIAL7', 'TESTIMONIAL19'].includes(designVersion),
        },
      }
    }),

    {
      name: 'testimonial',
      label: {
        singular: 'Testimonial',
        plural: 'Testimonials',
      },
      type: 'array',
      fields: [
        {
          name: "author",
          type: "group",
          fields: [
            {
              name: 'name',
              type: 'text',
              admin: {
                condition: (_, { designVersion } = { designVersion: '' }) =>
                  ['TESTIMONIAL3', 'TESTIMONIAL4', 'TESTIMONIAL6', 'TESTIMONIAL7', 'TESTIMONIAL10', 'TESTIMONIAL17', 'TESTIMONIAL18', 'TESTIMONIAL19'].includes(designVersion),
              },
            },
            {
              name: 'description',
              type: 'text',
              admin: {
                condition: (_, { designVersion } = { designVersion: '' }) =>
                  ['TESTIMONIAL3', 'TESTIMONIAL4', 'TESTIMONIAL6', 'TESTIMONIAL7', 'TESTIMONIAL10', 'TESTIMONIAL17', 'TESTIMONIAL18', 'TESTIMONIAL19'].includes(designVersion),
              },
            },
            {
              name: 'avatar',
              type: 'upload',
              relationTo: 'media',
              admin: {
                condition: (_, { designVersion } = { designVersion: '' }) =>
                  ['TESTIMONIAL2', 'TESTIMONIAL4', 'TESTIMONIAL6', 'TESTIMONIAL7', 'TESTIMONIAL13', 'TESTIMONIAL10', 'TESTIMONIAL16', 'TESTIMONIAL17', 'TESTIMONIAL18', 'TESTIMONIAL19'].includes(designVersion),
              },
            },
          ]
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (_, { designVersion } = { designVersion: '' }) =>
              ['TESTIMONIAL3', 'TESTIMONIAL17'].includes(designVersion),
          },
        },
        {
          name: 'stars',
          type: 'number',
          admin: {
            condition: (_, { designVersion } = { designVersion: '' }) =>
              ['TESTIMONIAL18', 'TESTIMONIAL19'].includes(designVersion),
          },
        },
        {
          name: 'text',
          type: 'richText',
          admin: {
            condition: (_, { designVersion } = { designVersion: '' }) =>
              ['TESTIMONIAL3', 'TESTIMONIAL4', 'TESTIMONIAL6', 'TESTIMONIAL7', 'TESTIMONIAL10', 'TESTIMONIAL16', 'TESTIMONIAL17', 'TESTIMONIAL18', 'TESTIMONIAL19'].includes(designVersion),
          },
          editor: lexicalEditor({
            features: ({ rootFeatures }) => [
              ...rootFeatures,
              HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3'] })
            ],
          }),
        },
        link({
          overrides: {
            admin: {
              condition: (_, { designVersion } = { designVersion: '' }) =>
                ['TESTIMONIAL19'].includes(designVersion),
            },
          }
        }),
      ]
    }
  ],
}