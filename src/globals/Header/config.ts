import type { GlobalConfig } from 'payload'

import { revalidateHeader } from './hooks/revalidateHeader'
import { navbar } from './navbar/navbar.config'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
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
        {
          label: "2 (centered)",
          value: "2"
        },
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
