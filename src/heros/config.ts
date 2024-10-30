import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'
import { link } from '@/fields/link'


/* TODO:
13 -> X
30 -> X
16 -> X




29 -> rating
31 -> 3 images
37 -> 3 images
38 -> 3 images
15 -> rating
27 -> tagline
26 -> tagline, badge-link
55 -> tagline, badge-link
21 -> tagline, badge-link (+ dritter button checken ob neues feld oder array aufteilen?)
53 -> headline aus richtext rauslösen, icons (faces mit textinfo), tagline
28 -> 5 icons
32 -> 14 icons
12 -> 1 - 5 icons, tagline
51 -> 4 icons, tagline
57 -> 4 icons, tagline
50 -> 2 icons, badge-link
24 -> icon, 4 USPs: icon, headline, description
25 -> icon, 3-4 USPs: icon, headline
20 -> 2-5 USPs: icon, headline, description, time
45 -> badge, 3 USPs: icon, headline, description

33 -> pricing: headline, price, description


What should happen with the two big boxes? Image or Tex?
18 -> 2 images + 14 icons



pricing
*/

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
        },"1",
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
        "18",
        "20",
        "21",
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
        "45",
        "50",
        "51",
        "53",
        "55",
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
      name: 'tagline',
      type: "text",
      admin: {
        condition: (_, { designVersion } = {}) => ["27","26","55","21","53","12","51","57"].includes(designVersion),
      }
    },
    link({
      appearances: false,
      disableLabel: true,
      overrides: {
        name: "badgeLink",
        admin: {
          condition: (_, { designVersion } = { designVersion: "" }) => ["26","55","21","50"].includes(designVersion),
        }
      }
    }),
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
      name: 'images',
      type: 'upload',
      admin: {
        condition: (_, { designVersion } = {}) => ['1','2', '3','4', '5','6', '31', '37', '38'].includes(designVersion),
      },
      relationTo: 'media',
      hasMany: true,
      maxRows: 3,
    },
    {
      name: 'icons',
      type: 'upload',
      admin: {
        condition: (_, { designVersion } = {}) => ["53", "28","32","12","51","57","50"].includes(designVersion),  
      },
      relationTo: 'media',
      hasMany: true,
      maxRows: 14,
    },
    {
      name: 'USPs',
      type: 'group',
      admin: {
        condition: (_, { designVersion } = {}) => ["24","25","20","45"].includes(designVersion),  
      },
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: "headline",
          type: "text",
        },
        {
          name: "description",
          type: "text",
        },
      ]
    },
    {
      name: 'pricing',
      type: 'group',
      admin: {
        condition: (_, { designVersion } = {}) => ["33"].includes(designVersion),  
      },
      fields: [
        {
          name: "headline",
          type: "text",
        },
        {
          name: "price",
          type: "text",
        },
        {
          name: "description",
          type: "text",
        },
      ]
    },
    {
      name: "rating",
      type: "number",
      max: 5,
      min: 1,
      admin: {
        condition: (_, { designVersion } = {}) => ["3", "4", "7", "15"].includes(designVersion),
      },
    }
  ],
  label: false,
}
