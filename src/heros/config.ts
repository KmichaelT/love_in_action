import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'designVersion',
      type: 'select',
      options: [
        {
          "label": "no Hero",
          "value": "none"
        },
        "1",
        "2",
        "3",
        "4",
        "5",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
        "32",
        "33",
        "34",
        "35",
        "36",
        "37",
        "38",
        "39",
        "40",
        "41",
        "42",
        "43",
        "44",
        "45",
        "46",
        "47",
        "48",
        "49",
        "50",
        "51",
        "52",
        "53",
        "54",
        "55",
        "56",
        "57",
      ],
      defaultValue: "1",
      required: true,
    },
    {
      name: 'badge',
      type: "text",
      admin: {
        condition: (_, { designVersion } = {}) => ['1','2', '3','4', '5','6'].includes(designVersion),
      }
    },
    {
      name: 'richText',
      type: 'richText',
      admin: {
        condition: (_, { designVersion } = {}) => ['1','2', '3','4', '5','6'].includes(designVersion),
      },
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
    },
    linkGroup({
      overrides: {
        maxRows: 2,
        admin: {
          condition: (_, { designVersion } = {}) => ['1','2', '3','4', '5','6'].includes(designVersion),
        }
      },
    }),
    {
      name: 'media',
      type: 'upload',
      admin: {
        condition: (_, { designVersion } = {}) => ['1','2', '3','4', '5','6'].includes(designVersion),
      },
      relationTo: 'media',
      required: true,
    },
  ],
  label: false,
}
