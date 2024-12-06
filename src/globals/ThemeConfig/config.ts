import type { GlobalConfig, TextFieldSingleValidation } from 'payload'

import { revalidateThemeConfig } from './hooks/revalidateThemeConfig'
import { generatePreviewPath } from '@/utilities/generatePreviewPath'
import { revalidateTag } from 'next/cache'
import { NEXT_PUBLIC_SERVER_URL } from 'next.config'

const validateCssColor: TextFieldSingleValidation = (value: string) => {
  const cssColorRegex = /^#(?:[\da-f]{3}){1,2}$|^#(?:[\da-f]{4}){1,2}$|(rgb|hsl)a?\((\s*-?\d+(?:\.\d+)?%?\s*,){2}(\s*-?\d+(?:\.\d+)?%?\s*)\)|(rgb|hsl)a?\((\s*-?\d+(?:\.\d+)?%?\s*,){3}\s*(0|(0?\.\d+)|1)\)/gmi
  if (!cssColorRegex.test(value)) {
    return 'Please enter a valid css color (e.g. #FF0000, #F00, rgb(255, 0, 0), hsl(0, 100%, 50%), rgba(255, 0, 0, 0.5), hsla(0, 100%, 50%, 0.5))'
  }
  return true
}

const validateCssSize: TextFieldSingleValidation = (value: string) => {
  const cssSizeRegex = /^(-?\d*\.?\d+)(px|em|rem|%|vh|vw|vmin|vmax|pt|pc|in|cm|mm|ex|ch)$/i
  if (!cssSizeRegex.test(value)) {
    return 'Please enter a valid CSS size (e.g. 10px, 1.5rem, 50%, 100vh)'
  }
  return true
}

export const ThemeConfig: GlobalConfig = {
  slug: 'themeConfig',
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

        return `${NEXT_PUBLIC_SERVER_URL}${path}`
      },
    },
    preview: () => {
      const path = generatePreviewPath({
        slug: 'home',
        collection: 'pages',
      })

      return `${NEXT_PUBLIC_SERVER_URL}${path}`
    },
  },
  fields: [
    {
      name: "radius",
      type: "text",
      validate: validateCssSize,
      defaultValue: "0.2rem",
    },
    {
      name: 'regularColors',
      label: 'Regular Colors',
      type: 'group',
      fields: [
        {
          name: "background",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(0, 0%, 100%)",
        }, {
          name: "foreground",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(222.2, 84%, 4.9%)",
        }, {

          name: "card",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(240, 5%, 96%)",
        }, {
          name: "card-foreground",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(222.2, 84%, 4.9%)",
        }, {

          name: "popover",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(0, 0%, 100%)",
        }, {
          name: "popover-foreground",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(222.2, 84%, 4.9%)",
        }, {

          name: "primary",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(222.2, 47.4%, 11.2%)",
        }, {
          name: "primary-foreground",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(210, 40%, 98%)",
        }, {

          name: "secondary",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(210, 40%, 96.1%)",
        }, {
          name: "secondary-foreground",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(222.2, 47.4%, 11.2%)",
        }, {

          name: "muted",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(210, 40%, 96.1%)",
        }, {
          name: "muted-foreground",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(215.4, 16.3%, 46.9%)",
        }, {

          name: "accent",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(210, 40%, 96.1%)",
        }, {
          name: "accent-foreground",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(222.2, 47.4%, 11.2%)",
        }, {

          name: "destructive",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(0, 84.2%, 60.2%)",
        }, {
          name: "destructive-foreground",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(210, 40%, 98%)",
        }, {

          name: "border",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(240, 6%, 90%)",
        }, {
          name: "input",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(214.3, 31.8%, 91.4%)",
        }, {
          name: "ring",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(222.2, 84%, 4.9%)",
        }, {
          name: "success",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(196, 52%, 74%)",
        }, {
          name: "warning",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(34, 89%, 85%)",
        }, {
          name: "error",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(10, 100%, 86%)",
        }, {
          name: "chart-1",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(12, 76%, 61%)",
        }, {
          name: "chart-2",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(173, 58%, 39%)",
        }, {
          name: "chart-3",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(197, 37%, 24%)",
        }, {
          name: "chart-4",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(43, 74%, 66%)",
        }, {
          name: "chart-5",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(27, 87%, 67%)",
        }, {

          name: "muted2",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(0, 0%, 91%)",
        }, {
          name: "muted2-foreground",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(240, 3.8%, 46.1%)",
        }
      ],
    },
    {
      name: 'darkmodeColors',
      label: 'Darkmode Colors',
      type: 'group',
      fields: [
        {
          name: 'enableDarkMode',
          label: 'Enable Darkmode',
          type: 'checkbox',
        },
        {
          name: "background",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(0, 0%, 0%)",
          admin: {
            condition: (_, { enableDarkMode } = {}) => enableDarkMode,
          },
        }, {
          name: "foreground",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(210, 40%, 98%)",
          admin: {
            condition: (_, { enableDarkMode } = {}) => enableDarkMode,
          },
        }, {

          name: "card",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(240, 6%, 10%)",
          admin: {
            condition: (_, { enableDarkMode } = {}) => enableDarkMode,
          },
        }, {
          name: "card-foreground",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(210, 40%, 98%)",
          admin: {
            condition: (_, { enableDarkMode } = {}) => enableDarkMode,
          },
        }, {

          name: "popover",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(222.2 84%, 4.9%)",
          admin: {
            condition: (_, { enableDarkMode } = {}) => enableDarkMode,
          },
        }, {
          name: "popover-foreground",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(210, 40%, 98%)",
          admin: {
            condition: (_, { enableDarkMode } = {}) => enableDarkMode,
          },
        }, {

          name: "primary",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(210, 40%, 98%)",
          admin: {
            condition: (_, { enableDarkMode } = {}) => enableDarkMode,
          },
        }, {
          name: "primary-foreground",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(222.2 47.4%, 11.2%)",
          admin: {
            condition: (_, { enableDarkMode } = {}) => enableDarkMode,
          },
        }, {

          name: "secondary",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(217.2 32.6%, 17.5%)",
          admin: {
            condition: (_, { enableDarkMode } = {}) => enableDarkMode,
          },
        }, {
          name: "secondary-foreground",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(210, 40%, 98%)",
          admin: {
            condition: (_, { enableDarkMode } = {}) => enableDarkMode,
          },
        }, {

          name: "muted",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(217.2 32.6%, 17.5%)",
          admin: {
            condition: (_, { enableDarkMode } = {}) => enableDarkMode,
          },
        }, {
          name: "muted-foreground",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(215, 20.2%, 65.1%)",
          admin: {
            condition: (_, { enableDarkMode } = {}) => enableDarkMode,
          },
        }, {

          name: "accent",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(217.2 32.6%, 17.5%)",
          admin: {
            condition: (_, { enableDarkMode } = {}) => enableDarkMode,
          },
        }, {
          name: "accent-foreground",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(210, 40%, 98%)",
          admin: {
            condition: (_, { enableDarkMode } = {}) => enableDarkMode,
          },
        }, {

          name: "destructive",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(0, 62.8%, 30.6%)",
          admin: {
            condition: (_, { enableDarkMode } = {}) => enableDarkMode,
          },
        }, {
          name: "destructive-foreground",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(210, 40%, 98%)",
          admin: {
            condition: (_, { enableDarkMode } = {}) => enableDarkMode,
          },
        }, {

          name: "border",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(240, 4%, 16%)",
          admin: {
            condition: (_, { enableDarkMode } = {}) => enableDarkMode,
          },
        }, {
          name: "input",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(217.2 32.6%, 17.5%)",
          admin: {
            condition: (_, { enableDarkMode } = {}) => enableDarkMode,
          },
        }, {
          name: "ring",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(212,.7 26.8%, 83.9%)",
          admin: {
            condition: (_, { enableDarkMode } = {}) => enableDarkMode,
          },
        }, {

          name: "success",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(196, 100%, 14%)",
          admin: {
            condition: (_, { enableDarkMode } = {}) => enableDarkMode,
          },
        }, {
          name: "warning",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(34, 51%, 25%)",
          admin: {
            condition: (_, { enableDarkMode } = {}) => enableDarkMode,
          },
        }, {
          name: "error",
          type: "text",
          validate: validateCssColor,
          defaultValue: "hsl(10, 39%, 43%)",
          admin: {
            condition: (_, { enableDarkMode } = {}) => enableDarkMode,
          },
        }
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateThemeConfig],
  }
}
