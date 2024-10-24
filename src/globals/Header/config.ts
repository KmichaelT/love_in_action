import type { GlobalConfig } from 'payload'

import { revalidateHeader } from './hooks/revalidateHeader'
import { Navbar1 } from './navbar/navbar1.config'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'designVersion',
      type: 'select',
      options: ['1', '3', '4'],
      defaultValue: '1',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    ...Navbar1,
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
