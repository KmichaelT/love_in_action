import { Payload } from 'payload'

const defaultRoles = [
  {
    name: 'Admin',
    slug: 'admin',
    description: 'Full access to all features',
    permissions: {
      canManageContent: true,
      canPublish: true,
      canManageUsers: true,
    },
  },
  {
    name: 'Editor',
    slug: 'editor',
    description: 'Can create and edit content',
    permissions: {
      canManageContent: true,
      canPublish: false,
      canManageUsers: false,
    },
  },
]

export async function initializeRoles(payload: Payload): Promise<void> {
  try {
    // Check if any roles exist
    const { totalDocs } = await payload.find({
      collection: 'roles',
      limit: 0,
    })

    // Create default roles if none exist
    if (totalDocs === 0) {
      payload.logger.info('No roles found, creating defaults...')
      for (const role of defaultRoles) {
        try {
          await payload.create({
            collection: 'roles',
            data: role,
          })
          payload.logger.info(`Created role: ${role.name}`)
        } catch (error) {
          payload.logger.error(`Error creating role ${role.name}:`, error)
        }
      }

      // Verify roles were created
      const { docs: createdRoles } = await payload.find({
        collection: 'roles',
        limit: 10,
      })
      payload.logger.info('Created roles:', createdRoles.map(r => r.name))
    }
  } catch (error) {
    payload.logger.error('Error initializing roles:', error)
  }
}
