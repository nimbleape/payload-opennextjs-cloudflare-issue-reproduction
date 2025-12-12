import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'title',
      type: 'relationship',
      relationTo: 'titles',
      required: false,
   }
  ],
}
