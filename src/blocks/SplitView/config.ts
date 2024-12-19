import type { Block, Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
  AlignFeature,
} from '@payloadcms/richtext-lexical'

import { link } from '@/fields/link'
import { GalleryBlock } from '../Gallery/Component'
import { CtaBlock } from '../Cta/config'
import { TextBlock } from '../TextBlock/config'
import { MediaBlock } from '../MediaBlock/config'

const sizeField: Field =
  {
    name: 'size',
    type: 'select',
    defaultValue: 'oneThird',
    options: [
      {
        label: 'One Third',
        value: 'oneThird',
      },
      {
        label: 'Half',
        value: 'half',
      },
      {
        label: 'Two Thirds',
        value: 'twoThirds',
      },
    ],
  }

const appendSizeFieldToBlock = (block: Block, sizeField: Field): Block => {
  return {
    ...block,
    fields: [
      sizeField,
      ...block.fields,
    ],
  }
}

export const SplitViewBlock: Block = {
  slug: 'splitView',
  interfaceName: 'SplitViewBlock',
  fields: [
    {
      name: 'columns',
      label: {
        en: 'Columns',
        de: 'Spalten',
      },
      type: 'blocks',
      /**
       * All blocks, that should be supported by the split view
       */
      blocks: [
        appendSizeFieldToBlock(TextBlock, sizeField),
        appendSizeFieldToBlock(MediaBlock, sizeField),
      ],
    },
  ],
}
