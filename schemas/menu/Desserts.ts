import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'desserts',
  title: 'Desserts',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title of Dessert',
      description: '(EX: Gulab Jamun)',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Type of Dessert',
      description: '(EX: Vegetarian, etc.)',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price of Dessert',
      description: '(EX: 9.99)',
      type: 'number',
    }),
  ],
})
