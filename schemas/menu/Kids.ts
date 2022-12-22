import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'kids',
  title: 'Kids',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title of Kids Item',
      description: '(EX: Kids Veg Fried Rice)',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Type of Kids Item',
      description: '(EX: Vegetarian, etc.)',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price of Kids Item',
      description: '(EX: 9.99)',
      type: 'number',
    }),
  ],
})
