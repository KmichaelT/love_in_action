import type { GlobalConfig } from 'payload'

import { revalidateHeader } from './hooks/revalidateHeader'
import { navbar } from './navbar/navbar.config'
import { generatePreviewPath } from '@/utilities/generatePreviewPath'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  admin: {
    description: 'Theme configuration (For live preview config has to be saved)',
    livePreview: {
      url: () => {
        const path = generatePreviewPath({
          slug: 'home',
          collection: 'pages',
        })

        return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`
      },
    },
    preview: () => {
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
      options: [
        {
          label: "1 (left aligned)",
          value: "1"
        },

        // '3' is not implemented yet because of the complex mobile menu
        // { 
        //   label: "3 (centered)",
        //   value: "3"
        // },

        // '4' Version 4 is the same as version 1 with only difference of more advance sub menu. Therefore we want to migrate the advance submenu as block options into v1
      ],
      defaultValue: '1',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    ...navbar,
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
