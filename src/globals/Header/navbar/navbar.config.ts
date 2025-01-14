import type { Field } from 'payload'
import { link } from '@/fields/link'
import { icon } from '@/components/Icon/config';


export const navbar: Field[] = [
  {
    type: "blocks",
    name: "items",
    blocks: [
      {
        slug: "sub",
        labels: {
          plural: "Sub Navigation Menus",
          singular: "Sub Navigation Menu"
        },
        fields: [
          icon,
          {
            type: "text",
            name: "label",
            localized: true,
            required: true,
          },
          {
            type: "array",
            name: "subitems",
            label: "Sub Navigation Items",
            required: true,
            minRows: 2,
            maxRows: 10,
            fields: [
              link({
                appearances: false,
              }),
              {
                type: "text",
                localized: true,
                name: "Description",
              },
            ]
          }
        ]
      },
      {
        slug: "link",
        labels: {
          plural: "Links",
          singular: "Link"
        },
        fields: [
          link({
            appearances: false,
          })
        ]
      }
    ],

  }, {
    type: "array",
    name: "buttons",
    fields: [
      link()
    ]
  }
];