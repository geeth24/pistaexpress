import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'bread',
  title: 'Bread',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title of Bread',
      description: '(EX: Butter Naan)',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Type of Bread',
      description: '(EX: Vegetarian, etc.)',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price of Bread',
      description: '(EX: 9.99)',
      type: 'number',
    }),
  ],
})
