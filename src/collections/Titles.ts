import type { CollectionConfig } from 'payload'

export const Titles: CollectionConfig = {
  slug: 'titles',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'users',
      type: 'join',
      collection: 'users',
      on: 'title',
      maxDepth: 2,
    },
  ],
}
