import { TextField } from 'payload';

export const icon: TextField = {
  type: 'text',
  name: "icon",
  admin: {
    width: '50%',
    components: {
      Field: {
        path: '@/components/AdminDashboard/IconSelect',
      }
    },
  },
}