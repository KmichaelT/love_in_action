import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'
import { generatePreviewPath } from '@/utilities/generatePreviewPath'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  admin: {
    description: 'Theme configuration (For live preview config has to be saved)',
    livePreview: {
      url: () => {
        console.log('live preview')
        const path = generatePreviewPath({
          slug: 'home',
          collection: 'pages',
        })

        return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`
      },
    },
    preview: () => {
      console.log('preview')
      const path = generatePreviewPath({
        slug: 'home',
        collection: 'pages',
      })

      return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`
    },
  },
  fields: [
    {
      name: 'designVersion',
      type: 'select',
      options: ['1', '2', '3', '4', '5', '6', '7', '8'],
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'copyright',
      type: 'text',
      label: 'Copyright',
      defaultValue: 'Company Name. All rights reserved.',
    },
    /**
     * A subline to display under the logo. Only design options 6,7,8 have this field.
     */
    {
      name: 'subline',
      type: 'text',
      label: 'Subline',
      defaultValue: 'Components made easy. This cool starter template will help you get started with your next project.',
      admin: {
        condition: (_, siblingData) => siblingData.designVersion === '6' || siblingData.designVersion === '7' || siblingData.designVersion === '8',
      },
    },
    {
      name: 'navItems',
      type: 'array',
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: 'subNavItems',
          type: 'array',
          fields: [
            link({
              appearances: false,
            }),
          ],
          maxRows: 6,
        },
      ],
      maxRows: 3,
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
