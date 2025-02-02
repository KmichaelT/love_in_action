import encryptionHooks from '@/hooks/encryptionHook'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'

export const ChangelogBlock: Block = {
  slug: 'changelog',
  labels: {
    singular: 'Changelog',
    plural: 'Changelogs',
  },
  fields: [
    {
      name: 'designVersion',
      type: 'select',
      required: true,
      options: [{ label: 'Changelog 1', value: 'CHANGELOG1' }],
    },
    {
      name: 'richText',
      type: 'richText',
      localized: true,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures]
        },
      }),
    },
    {
      name: 'fetchFromGithub',
      label: {
        en: 'Automatically fetch changelog updates from GitHub',
        de: 'Automatisch Changelog-Aktualisierung von GitHub abrufen',
      },
      type: 'checkbox',
    },
    {
      name: 'githubSettings',
      admin: {
        condition: (_, { fetchFromGithub }) => fetchFromGithub,
      },
      type: 'group',
      fields: [
        {
          name: 'repository',
          type: 'text',
          required: true,
          admin: {
            placeholder: 'company/repo',
            description: 'The repository to fetch the changelog from',
          },
        },
        {
          name: 'githubToken',
          type: 'text',
          admin: {
            description: 'Optional GitHub token to use for authentication',
          },
          hooks: encryptionHooks,
        },
        {
          name: 'Fetch now',
          type: 'ui',
          admin: {
            components: {
              Field: {
                path: '@/components/AdminDashboard/Changelog/FetchButton',
              }
            }
          }
        }
      ],
    },
    {
      name: 'entries',
      label: {
        en: 'Changelog entries',
        de: 'Changelog-Einträge',
      },
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          admin: {
            description: {
              en: "Describe this release. We will auto-generate it using the version, if not set"
            }
          }
        },
        {
          name: 'description',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [...rootFeatures]
            },
          }),
        },
        {
          name: 'date',
          type: 'date',
          required: true,
        },
        {
          name: 'version',
          type: 'text',
          required: true,
        },
        {
          // If this is a github entry, we store the id here to keep track of it.
          name: 'githubId',
          type: 'text',
          admin: {
            hidden: true,
          },
        },
        {
          // We can optionally add an image for each entry
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: {
              en: 'Optional image for the entry',
              de: 'Optionales Bild für den Eintrag',
            }
          }
        }
      ]
    }
  ],
  interfaceName: 'changelogblock',
}

export default ChangelogBlock
