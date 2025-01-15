import { TextField } from 'payload';

export const icon: TextField = {
  type: 'text', // or 'text' if you have dynamic options
  name: "icon",
  admin: {
    components: {
      Field: {
        path: '@/components/AdminDashboard/IconSelect',
      }
    },
  },

  // options: Object.keys(lucide).filter((v) => !["default", "icons"].includes(v) && !v.startsWith("Lucide") && !v.endsWith("Icon")),
  // TODO add components to show Icon in admin dashboard once docs for this are ready
  // admin: {
  //   components: {
  //     Cell,
  //     Field
  //   }
  // }
}