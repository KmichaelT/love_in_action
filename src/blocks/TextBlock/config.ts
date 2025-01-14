import {
  lexicalEditor,
  HeadingFeature,
  AlignFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'
import { Block } from 'payload'
import { backgroundColor } from '@/fields/color'

export const TextBlock: Block = {
  slug: 'text',
  interfaceName: 'TextBlock',
  fields: [
    backgroundColor,
    {
      name: 'content',
      type: 'richText',
      localized: true,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            AlignFeature(),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
    },
    linkGroup(),
  ],
}
