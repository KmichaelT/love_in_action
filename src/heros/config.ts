import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'
import { link } from '@/fields/link'
import { icon } from '@/components/Icon/config'
import { customHeroFields } from './CustomHero/config'
import { backgroundColor } from '@/fields/color'

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

*/

export const hero: Field = {
  name: 'hero',
  type: 'group',
  interfaceName: 'Hero',
  fields: [
    backgroundColor,
    {
      name: 'designVersion',
      type: 'select',
      options: [
        {
          label: 'no Hero',
          value: 'none',
        },
        {
          label: 'HERO1',
          value: '1',
        },
        {
          label: 'HERO2',
          value: '2',
        },
        {
          label: 'HERO3',
          value: '3',
        },
        {
          label: 'HERO4',
          value: '4',
        },
        {
          label: 'HERO5',
          value: '5',
        },
        {
          label: 'HERO6',
          value: '6',
        },
        // {
        //   label: 'HERO7',
        //   value: '7',
        // },
        // {
        //   label: 'HERO8',
        //   value: '8',
        // },
        // {
        //   label: 'HERO9',
        //   value: '9',
        // },
        // {
        //   label: 'HERO10',
        //   value: '10',
        // },
        // {
        //   label: 'HERO11',
        //   value: '11',
        // },
        {
          label: 'HERO12',
          value: '12',
        },
        // {
        //   label: 'HERO13',
        //   value: '13',
        // },
        // {
        //   label: 'HERO14',
        //   value: '14',
        // },
        // {
        //   label: 'HERO15',
        //   value: '15',
        // },
        // {
        //   label: 'HERO16',
        //   value: '16',
        // },
        // {
        //   label: 'HERO18',
        //   value: '18',
        // },
        // {
        //   label: 'HERO20',
        //   value: '20',
        // },
        // {
        //   label: 'HERO21',
        //   value: '21',
        // },
        // {
        //   label: 'HERO24',
        //   value: '24',
        // },
        // {
        //   label: 'HERO25',
        //   value: '25',
        // },
        // {
        //   label: 'HERO26',
        //   value: '26',
        // },
        // {
        //   label: 'HERO27',
        //   value: '27',
        // },
        // {
        //   label: 'HERO28',
        //   value: '28',
        // },
        // {
        //   label: 'HERO29',
        //   value: '29',
        // },
        // {
        //   label: 'HERO30',
        //   value: '30',
        // },
        {
          label: 'HERO31',
          value: '31',
        },
        // {
        //   label: 'HERO32',
        //   value: '32',
        // },
        // {
        //   label: 'HERO33',
        //   value: '33',
        // },
        // {
        //   label: 'HERO34',
        //   value: '34',
        // },
        // {
        //   label: 'HERO35',
        //   value: '35',
        // },
        // {
        //   label: 'HERO36',
        //   value: '36',
        // },
        // {
        //   label: 'HERO37',
        //   value: '37',
        // },
        // {
        //   label: 'HERO38',
        //   value: '38',
        // },
        // {
        //   label: 'HERO39',
        //   value: '39',
        // },
        // {
        //   label: 'HERO40',
        //   value: '40',
        // },
        // {
        //   label: 'HERO45',
        //   value: '45',
        // },
        // {
        //   label: 'HERO50',
        //   value: '50',
        // },
        // {
        //   label: 'HERO51',
        //   value: '51',
        // },
        // {
        //   label: 'HERO53',
        //   value: '53',
        // },
        // {
        //   label: 'HERO55',
        //   value: '55',
        // },
        // {
        //   label: 'HERO57',
        //   value: '57',
        // },
      ],
      defaultValue: '1',
      required: true,
    },
    {
      name: 'badge',
      type: 'text',
      localized: true,
      admin: {
        condition: (_, { designVersion = "" } = {}) =>
          ['1', '2', '3', '4', '5', '6', '12'].includes(designVersion),
      },
    },
    icon({
      name: 'badgeIcon',
      admin: {
        condition: (_, { designVersion = "" } = {}) =>
          ['1', '2', '3', '4', '5', '6'].includes(designVersion),
      }
    }),
    {
      name: 'tagline',
      type: 'text',
      localized: true,
      admin: {
        condition: (_, { designVersion = "" } = {}) =>
          ['3', '27', '26', '55', '21', '53', '12', '51', '57'].includes(designVersion),
      },
    },
    link({
      appearances: false,
      disableLabel: true,
      overrides: {
        name: 'badgeLink',
        admin: {
          condition: (_, { designVersion } = { designVersion: '' }) =>
            ['26', '55', '21', '50'].includes(designVersion),
        },
      },
    }),
    {
      name: 'richText',
      type: 'richText',
      localized: true,
      admin: {
        condition: (_, { designVersion = "" } = {}) =>
          ['1', '2', '3', '4', '5', '6', '12'].includes(designVersion),
      },
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1'] }),
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
          condition: (_, { designVersion = "" } = {}) =>
            ['1', '2', '3', '4', '5', '6', '12'].includes(designVersion),
        },
      },
    }),
    {
      name: 'images',
      type: 'upload',
      admin: {
        condition: (_, { designVersion = "" } = {}) =>
          ['1', '2', '3', '4', '5', '6', '12', '31', '37', '38', '18'].includes(designVersion),
      },
      relationTo: 'media',
      hasMany: true,
      maxRows: 3,
    },
    {
      name: 'icons',
      type: 'upload',
      admin: {
        condition: (_, { designVersion = "" } = {}) =>
          ['3', '53', '28', '32', '12', '51', '57', '50', '18'].includes(designVersion),
      },
      relationTo: 'media',
      hasMany: true,
      maxRows: 14,
    },
    {
      name: 'USPs',
      type: 'group',
      admin: {
        condition: (_, { designVersion = "" } = {}) => ['24', '25', '20', '45'].includes(designVersion),
      },
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'richText',
          type: 'richText',
          localized: true,
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
                FixedToolbarFeature(),
                InlineToolbarFeature(),
              ]
            },
          }),
          label: false,
        },
      ],
    },
    {
      name: 'pricing',
      type: 'group',
      admin: {
        condition: (_, { designVersion = "" } = {}) => ['33'].includes(designVersion),
      },
      fields: [
        {
          name: 'headline',
          type: 'text',
          localized: true,
        },
        {
          name: 'price',
          type: 'text',
          localized: true,
        },
        {
          name: 'description',
          type: 'text',
          localized: true,
        },
      ],
    },
    {
      name: 'rating',
      type: 'number',
      max: 5,
      min: 1,
      admin: {
        condition: (_, { designVersion = "" } = {}) => ['3', '4', '7', '15'].includes(designVersion),
      },
    },
    ...customHeroFields
  ],
  label: false,
}
