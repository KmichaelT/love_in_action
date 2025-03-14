import { icon } from '@/components/Icon/config'
import { linkGroup } from '@/fields/linkGroup'
import { link } from '@/fields/link'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
  OrderedListFeature,
  ParagraphFeature,
  UnorderedListFeature,
} from '@payloadcms/richtext-lexical'
import { Block } from 'payload'
import { designVersionDescription } from '@/components/AdminDashboard/DesignVersionDescription'
import { backgroundColor } from '@/fields/color'

export const allFeatureDesignVersions = [
  'FEATURE1',
  // 'FEATURE2',
  // 'FEATURE3',
  // 'FEATURE4',
  // 'FEATURE5',
  // 'FEATURE6',
  // 'FEATURE7',
  // 'FEATURE8',
  // 'FEATURE9',
  // 'FEATURE10',
  // 'FEATURE11',
  // 'FEATURE12',
  // 'FEATURE13',
  // 'FEATURE14',
  // 'FEATURE15',
  // 'FEATURE16',
  // 'FEATURE17',
  // 'FEATURE18',
  // 'FEATURE19',
  // 'FEATURE20',
  // 'FEATURE21',
  // 'FEATURE22',
  // 'FEATURE23',
  // 'FEATURE24',
  'FEATURE25',
  // 'FEATURE26',
  // 'FEATURE27',
  // 'FEATURE28',
  // 'FEATURE29',
  // 'FEATURE30',
  // 'FEATURE31',
  // 'FEATURE32',
  // 'FEATURE33',
  // 'FEATURE34',
  // 'FEATURE35',
  // 'FEATURE36',
  // 'FEATURE37',
  // 'FEATURE38',
  // 'FEATURE39',
  // 'FEATURE41',
  // 'FEATURE42',
  // 'FEATURE43',
  // 'FEATURE44',
  'FEATURE50',
  // 'FEATURE51',
  // 'FEATURE52',
  'FEATURE53',
  // 'FEATURE54',
  // 'FEATURE55',
  // 'FEATURE56',
  // 'FEATURE57',
  // 'FEATURE58',
  // 'FEATURE59',
  // 'FEATURE60',
  // 'FEATURE61',
  // 'FEATURE62',
  // 'FEATURE63',
  // 'FEATURE64',
  // 'FEATURE65',
  // 'FEATURE66',
  // 'FEATURE67',
  // 'FEATURE68',
  // 'FEATURE69',
  'FEATURE70',
  // 'FEATURE71',
  'FEATURE72',
  // 'FEATURE73',
  // 'FEATURE74',
  // 'FEATURE75',
  // 'FEATURE76',
  // 'FEATURE77',
  // 'FEATURE78',
  // 'FEATURE79',
  // 'FEATURE80',
  // 'FEATURE81',
  // 'FEATURE82',
  // 'FEATURE83',
  // 'FEATURE85',
  // 'FEATURE86',
  // 'FEATURE87',
  // 'FEATURE89',
  // 'FEATURE90',
  'FEATURE91',
  // 'FEATURE92',
  // 'FEATURE93',
  // 'FEATURE94',
  // 'FEATURE95',
  'FEATURE97',
  // 'FEATURE98',
  'FEATURE99',
  // 'FEATURE101',
  'FEATURE102',
  'FEATURE103',
  // 'FEATURE104',
  // 'FEATURE105',
  // 'FEATURE106',
  // 'FEATURE107',
  // 'FEATURE108',
  // 'FEATURE109',
  'FEATURE117',
  'FEATURE126',
  'FEATURE170',
] as const

export type FeatureDesignVersion = (typeof allFeatureDesignVersions)[number]

/**
 * mutable copy of allFeatureDesignVersions as payload needs this type and
 * we need a const for other purposes
 */
const mutableFeatureDesignVersions = [...allFeatureDesignVersions]

/**
 * The Feature block is the shadcnblocks.com feature block integrated in payload.
 * It is using the same field namings as the heros -> PageHero
 */
export const FeatureBlock: Block = {
  slug: 'feature',
  interfaceName: 'FeatureBlock',
  fields: [
    backgroundColor,
    {
      name: 'designVersion',
      type: 'select',
      options: mutableFeatureDesignVersions,
      defaultValue: 'FEATURE1',
      required: true,
      // admin: {
      //   description: {
      //     en: 'Choose your block design version. Naming and grouping is the same as here: https://www.shadcnblocks.com/blocks. If you want to use a block that is not integrated yet in the CMS, check out the docs: TODO add link for docs of how to add data/cms binding to existing blocks',
      //     de: 'Wählen Sie die Hintergrundfarbe für diese Sektion. Bei einem leeren Feld wird die Standardfarbe verwendet.'
      //   }
      // }
    },
    {
      name: 'badge',
      type: 'text',
      localized: true,
      admin: {
        condition: (_, { designVersion = "" } = {}) =>
          ['FEATURE1', 'FEATURE2', 'FEATURE3', 'FEATURE4', 'FEATURE5', 'FEATURE6', 'FEATURE126'].includes(
            designVersion,
          ),
      },
    },
    {
      name: 'tagline',
      type: 'text',
      localized: true,
      admin: {
        condition: (_, { designVersion = "" } = {}) =>
          ['FEATURE99', 'FEATURE103',  'FEATURE25'].includes(designVersion),
      },
    },
    icon({
      admin: {
        condition: (_, { designVersion = "" } = {}) =>
          [
            'FEATURE1',
            'FEATURE2',
            'FEATURE20',
            'FEATURE21',
            'FEATURE24',
            'FEATURE38',
            'FEATURE6',
            'FEATURE7', 
          ].includes(designVersion),
      },
    }),
    {
      name: 'richText',
      type: 'richText',
      localized: true,
      admin: {
        condition: (_, { designVersion = "" } = {}) =>
          ![
            'FEATURE14',
            'FEATURE28',
            'FEATURE37',
            'FEATURE5',
            'FEATURE51',
            'FEATURE52',
            'FEATURE53',
            'FEATURE56',
            'FEATURE57',
            'FEATURE58',
            'FEATURE59',
            'FEATURE62',
            'FEATURE106',
            'FEATURE91',
          ].includes(designVersion),
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
          condition: (_, { designVersion = "" } = {}) =>
            [
              'FEATURE1',
              'FEATURE2',
              'FEATURE11',
              'FEATURE38',
              'FEATURE50',
              'FEATURE71',
              'FEATURE72',
              'FEATURE73',
              'FEATURE74',
              'FEATURE78',
              'FEATURE80',
              'FEATURE82',
              'FEATURE86',
              'FEATURE90',
              'FEATURE94',
              'FEATURE97',
              'FEATURE98',
              'FEATURE109',
              'FEATURE126',
            ].includes(designVersion),
        },
      },
    }),
    {
      /**
       * some Features have just one single image
       */
      name: 'image',
      type: 'upload',
      admin: {
        condition: (_, { designVersion = "" } = {}) =>
          [
            'FEATURE1',
            'FEATURE95',
            'FEATURE87',
            'FEATURE11',
            'FEATURE2',
            'FEATURE24',
            'FEATURE33',
            'FEATURE38',
            'FEATURE58',
          ].includes(designVersion),
      },
      relationTo: 'media',
      hasMany: false,
    },

    designVersionDescription(
      'description3',
      (_, { designVersion } = {}) => ['FEATURE3'].includes(designVersion),
      {
        en: 'You have feature 3 selected',
        de: 'Du hast feature 3 ausgewählt',
      },
    ),
    designVersionDescription(
      'description91',
      (_, { designVersion } = {}) => ['FEATURE91'].includes(designVersion),
      {
        en: 'You need to have exactly two USPs for FEATURE 91 block to work',
        de: 'Du musst genau zwei USPs haben, damit dieser Block funktioniert',
      },
    ),

    {
      name: 'USPs',
      type: 'array',
      admin: {
        condition: (_, { designVersion = "" } = {}) =>
          ![
            'FEATURE1',
            'FEATURE2',
            'FEATURE6',
            'FEATURE7',
            'FEATURE11',
            'FEATURE24',
            'FEATURE30',
            'FEATURE38',
            'FEATURE55',
            'FEATURE60',
            'FEATURE80',
            'FEATURE86',
            'FEATURE90',
          ].includes(designVersion),
      },
      fields: [
        icon({
          label: 'Icon',
          name: 'uspIcon',
          admin: {
            condition: (data, _) => {
              const designVersion = data.layout.find(
                (block) => block.blockType === 'feature',
              ).designVersion
              return [
                'FEATURE4',
                'FEATURE5',
                'FEATURE15',
                'FEATURE16',
                'FEATURE26',
                'FEATURE51',
                'FEATURE52',
                'FEATURE57',
                'FEATURE58',
                'FEATURE67',
                'FEATURE76',
                'FEATURE83',
                'FEATURE85',
                'FEATURE89',
                'FEATURE93',
                'FEATURE97',
                'FEATURE101',
                'FEATURE104',
                'FEATURE105',
                'FEATURE106',
                'FEATURE107',
                'FEATURE108',
                'FEATURE117',
                'FEATURE170',
              ].includes(designVersion)
            },
          },
        }),
        /**
         * Single tagline per USP, for example for feature117
         */
        {
          name: 'tagline',
          type: 'text',
          localized: true,
          admin: {
            // conditions on sibling fields are unfortunatly currently not possible in payload

          },
        },
        {
          name: 'richText',
          type: 'richText',
          localized: true,
          admin: {

          },
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
                FixedToolbarFeature(),
                InlineToolbarFeature(),
                ParagraphFeature(),
                OrderedListFeature(),
                UnorderedListFeature(),
              ]
            },
          }),
          label: false,
        },
        /**
         * USPs can have 1 or many features, with icon and richText. only features 19, 22, 25, 91 have this
         */
        {
          name: 'USPFeatures',
          type: 'array',
          admin: {
            description: 'USPs can feature 1 or many features, with icon and richText',
            condition: (data, siblingData) => {
              // Get all feature blocks
              const featureBlocks = data.layout?.filter(
                (block) => block.blockType === 'feature'
              ) || []

              // Find the feature block that contains our current USP
              const currentFeatureBlock = featureBlocks.find(block =>
                block.USPs?.some(usp =>
                  // Compare USP fields to identify the current one
                  usp.tagline === siblingData.tagline &&
                  usp.image === siblingData.image
                )
              )

              return currentFeatureBlock && ['FEATURE19', 'FEATURE22', 'FEATURE25','FEATURE170' ,'FEATURE91'].includes(currentFeatureBlock.designVersion)
            },
          },
          fields: [
            icon({
              admin: {
                condition: (data, siblingData) => {
                  // Get all feature blocks
                  const featureBlocks = data.layout?.filter(
                    (block) => block.blockType === 'feature'
                  ) || []

                  // Find the feature block that contains our current USP
                  const currentFeatureBlock = featureBlocks.find(block =>
                    block.USPs?.some(usp =>
                      // Compare USP fields to identify the current one
                      usp.tagline === siblingData.tagline &&
                      usp.image === siblingData.image
                    )
                  )

                  // Show icon for all features except feature25
                  return currentFeatureBlock && !['FEATURE25'].includes(currentFeatureBlock.designVersion)
                },
              },
            }),
            {
              name: 'richText',
              type: 'richText',
              localized: true,
            },
          ],
        },
        linkGroup({
          overrides: {
            maxRows: 2,
            admin: {
              condition: (data, _) => {
                const designVersion = data.layout.find(
                  (block) => block.blockType === 'feature',
                ).designVersion
                return ['FEATURE70', 'FEATURE91'].includes(designVersion)
              },
            },
          },
        }),
        /**
         * Just a single link
         */
        link({
          appearances: false,
          overrides: {
            admin: {
              description:
                'Single link for this USP. Icons might be set automatically, depending on the design version',
              condition: (data, _) => {
                const designVersion = data.layout.find(
                  (block) => block.blockType === 'feature',
                ).designVersion
                return ['FEATURE103', 'FEATURE117'].includes(designVersion)
              },
            },
          },
        }),
        /**
         * USP images
         */
        {
          name: 'image',
          type: 'upload',
          admin: {
            condition: (data, _) => {
              const designVersion = data.layout.find(
                (block) => block.blockType === 'feature',
              ).designVersion
              return [
                'FEATURE3',
                'FEATURE50',
                'FEATURE51',
                'FEATURE53',
                'FEATURE102',
                'FEATURE66',
                'FEATURE70',
                'FEATURE72',
                'FEATURE78',
                'FEATURE81',
                'FEATURE117',
                'FEATURE126',
              ].includes(designVersion)
            },
          },
          relationTo: 'media',
          hasMany: false,
        },
      ],
      minRows: 1,
    },
  ],
  labels: {
    singular: 'Feature',
    plural: 'Features',
  },
}
