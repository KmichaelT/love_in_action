import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
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
