import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'entrees',
  title: 'Entrees',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title of Entree',
      description: '(EX: Malai Kofta)',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Type of Entree',
      description: '(EX: Vegetarian, etc.)',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price of Entree',
      description: '(EX: 9.99)',
      type: 'number',
    }),
  ],
})
