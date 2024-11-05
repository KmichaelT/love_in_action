import { icon } from "@/components/Icon/config";
import { linkGroup } from "@/fields/linkGroup";
import { FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor, OrderedListFeature, ParagraphFeature, UnorderedListFeature } from "@payloadcms/richtext-lexical";
import { Block } from "payload";


const allFeatureDesignVersions = [
    "FEATURE1",
    "FEATURE2",
    "FEATURE3",
    "FEATURE4",
    "FEATURE5",
    "FEATURE6",
    "FEATURE7",
    "FEATURE8",
    "FEATURE9",
    "FEATURE10",
    "FEATURE11",
    "FEATURE12",
    "FEATURE13",
    "FEATURE14",
    "FEATURE15",
    "FEATURE16",
    "FEATURE17",
    "FEATURE18",
    "FEATURE19",
    "FEATURE20",
    "FEATURE21",
    "FEATURE22",
    "FEATURE23",
    "FEATURE24",
    "FEATURE25",
    "FEATURE26",
    "FEATURE27",
    "FEATURE28",
    "FEATURE29",
    "FEATURE30",
    "FEATURE31",
    "FEATURE32",
    "FEATURE33",
    "FEATURE34",
    "FEATURE35",
    "FEATURE36",
    "FEATURE37",
    "FEATURE38",
    "FEATURE39",
    "FEATURE41",
    "FEATURE42",
    "FEATURE43",
    "FEATURE44",
    "FEATURE50",
    "FEATURE51",
    "FEATURE52",
    "FEATURE53",
    "FEATURE54",
    "FEATURE55",
    "FEATURE56",
    "FEATURE57",
    "FEATURE58",
    "FEATURE59",
    "FEATURE60",
    "FEATURE61",
    "FEATURE62",
    "FEATURE63",
    "FEATURE64",
    "FEATURE65",
    "FEATURE66",
    "FEATURE67",
    "FEATURE68",
    "FEATURE69",
    "FEATURE70",
    "FEATURE71",
    "FEATURE72",
    "FEATURE73",
    "FEATURE74",
    "FEATURE75",
    "FEATURE76",
    "FEATURE77",
    "FEATURE78",
    "FEATURE79",
    "FEATURE80",
    "FEATURE81",
    "FEATURE82",
    "FEATURE83",
    "FEATURE85",
    "FEATURE86",
    "FEATURE87",
    "FEATURE89",
    "FEATURE90",
    "FEATURE91",
    "FEATURE92",
    "FEATURE93",
    "FEATURE94",
    "FEATURE95",
    "FEATURE97",
    "FEATURE98",
    "FEATURE99",
    "FEATURE101",
    "FEATURE102",
    "FEATURE103",
    "FEATURE104",
    "FEATURE105",
    "FEATURE106",
    "FEATURE107",
    "FEATURE108",
    "FEATURE109"
  ];
/**
 * The Feature block is the shadcnblocks.com feature block integrated in payload.
 * It is using the same field namings as the heros -> PageHero
 */
export const FeatureBlock: Block = {
    slug: 'feature',
    interfaceName: 'FeatureBlock',
    fields: [
        {
            name: 'designVersion',
            type: 'select',
            options: allFeatureDesignVersions,
            defaultValue: "FEATURE1",
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
              condition: (_, { designVersion } = {}) => ["FEATURE99"].includes(designVersion),
            }
          },
          {
            ...icon,
            admin: {
              condition: (_, { designVersion } = {}) => ["FEATURE1", "FEATURE2", "FEATURE20", "FEATURE21", "FEATURE24", "FEATURE38", "FEATURE6", "FEATURE7"].includes(designVersion),
            },
          },
          {
            name: 'richText',
            type: 'richText',
            admin: {
              condition: (_, { designVersion } = {}) => !["FEATURE14", "FEATURE28", "FEATURE37", "FEATURE5", "FEATURE51", "FEATURE52", "FEATURE53", "FEATURE56", "FEATURE57", "FEATURE58", "FEATURE59", "FEATURE62", "FEATURE106", "FEATURE91"].includes(designVersion),
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
                condition: (_, { designVersion } = {}) => ["FEATURE1", "FEATURE2", "FEATURE11", "FEATURE38", "FEATURE50", "FEATURE71", "FEATURE72", "FEATURE73", "FEATURE74", "FEATURE78", "FEATURE80", "FEATURE82", "FEATURE86", "FEATURE90", "FEATURE94", "FEATURE97", "FEATURE98", "FEATURE109"].includes(designVersion),
              }
            },
          }),
          {
            /**
             * some Features have just one single image
             */
            name: 'image',
            type: 'upload',
            admin: {
              condition: (_, { designVersion } = {}) => ["FEATURE1", "FEATURE95", "FEATURE87", "FEATURE11", "FEATURE2", "FEATURE24", "FEATURE33", "FEATURE38", "FEATURE58"].includes(designVersion),
            },
            relationTo: 'media',
            hasMany: false,
          },
          {
            name: "USPs",
            type: "array",
            admin: {
              condition: (_, { designVersion } = {}) => !["FEATURE1", "FEATURE2", "FEATURE6", "FEATURE7", "FEATURE11", "FEATURE24", "FEATURE30", "FEATURE38", "FEATURE55", "FEATURE60", "FEATURE80", "FEATURE86", "FEATURE90"].includes(designVersion),
            },
            fields: [
                {
                    ...icon,
                    label: "Icon",
                    name: "usp-icon",
                    admin: {
                      condition: (data, _) => {
                        const designVersion = data.layout.find((block) => block.blockType === "feature").designVersion
                        return ["FEATURE4", "FEATURE5","FEATURE15", "FEATURE16", "FEATURE26", "FEATURE51", "FEATURE52", "FEATURE57", "FEATURE58","FEATURE67", "FEATURE76", "FEATURE83", "FEATURE85", "FEATURE89", "FEATURE91", "FEATURE93", "FEATURE97", "FEATURE101", "FEATURE104", "FEATURE105", "FEATURE106", "FEATURE107", "FEATURE108"].includes(designVersion);
                      },
                    },
                },
                {
                    name: 'richText',
                    type: 'richText',
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
            ],
            minRows: 1,
          }
    ],
    labels: {
        singular: 'Feature',
        plural: 'Features',
    },
}
