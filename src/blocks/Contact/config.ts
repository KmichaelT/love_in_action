import { Block } from 'payload'
import { HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { FormBlock } from '../Form/config'
import { backgroundColor } from '@/fields/color'


export const allContactDesignVersions = ['CONTACT1', 'CONTACT2', 'CONTACT3', 'CONTACT4'] as const
export type ContactDesignVersion = (typeof allContactDesignVersions)[number]


export const ContactBlock: Block = {
  slug: 'contact',
  interfaceName: 'ContactBlock',
  labels: {
    singular: 'Contact',
    plural: 'Contacts'
  },
  fields: [
    backgroundColor,
    {
      name: 'designVersion',
      type: 'select',
      required: true,
      defaultValue: 'CONTACT1',
      options: allContactDesignVersions.map((version) => ({ label: version, value: version })),
    },
    {
      name: 'headlineAndDescription',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
        ],
      }),
    },
    {
      name: 'contactBlocks',
      type: 'array',
      fields: [
        {
          name: 'icon',
          type: 'text'
        },
        {
          name: 'description',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => rootFeatures
          }),
        }
      ]
    },
    {
      name: 'maps',
      type: 'array',
      fields: [
        {
          name: 'iframe',
          type: 'text'
        }
      ]
    },
    {
      name: 'form',
      type: 'blocks',
      blocks: [
        FormBlock
      ],
      maxRows: 1,
    }
  ]
}