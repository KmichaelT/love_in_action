import type { CollectionConfig } from 'payload'
import { authenticated } from '@/access/authenticated'
import { isAdminFieldLevel } from '@/access/isAdmin'

async function findRole(payload: any, slug: string) {
  const { docs } = await payload.find({
    collection: 'roles',
    where: {
      slug: {
        equals: slug,
      },
    },
  })
  return docs[0] || null
}

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    defaultColumns: ['name', 'email'],
    useAsTitle: 'name',
  },
  access: {
    create: () => true,
    read: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  hooks: {
    beforeValidate: [
      async ({ req, data = {}, operation }) => {
        if (operation === 'create') {
          try {
            const { totalDocs } = await req.payload.find({
              collection: 'users',
              limit: 0,
            })

            // Determine which role to assign. First user should be admin
            const isAdmin =
              totalDocs === 0 ||
              (data.email &&
                process.env.ALLOWED_EMAIL_DOMAINS?.split(',').includes(data.email.split('@')[1]))

            // Find the appropriate role
            const role = await findRole(req.payload, isAdmin ? 'admin' : 'editor')

            if (role?.id) {
              req.payload.logger.info(`Assigning ${role.name} role to new user`)
              return {
                ...data,
                roles: [role.id],
              }
            } else {
              req.payload.logger.error('No suitable role found for user')
            }
          } catch (error) {
            req.payload.logger.error(`Error in beforeValidate hook: ${error}`)
          }
        }
        return data
      },
    ],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'roles',
      type: 'relationship',
      relationTo: 'roles',
      hasMany: true,
      required: false,
      saveToJWT: true,
      access: {
        create: () => true,
        update: isAdminFieldLevel,
      },
      admin: {
        position: 'sidebar',
        description: {
          en: 'User roles. Admin has full access. Editor is the most common role, with limited access. First user is always admin.',
          de: 'Benutzerrollen. Admin hat vollständigen Zugriff. Editor ist der allgemeine Benutzer, mit begrenztem Zugriff. Erster Benutzer ist immer Admin.',
        },
      },
    },
    {
      name: 'sub',
      type: 'text',
      admin: {
        description: 'This is the Oauth2 sub field',
        hidden: true,
      },
      index: true,
    },
  ],
  timestamps: true,
}

export default Users
