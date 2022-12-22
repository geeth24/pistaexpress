import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'breakfast',
  title: 'Breakfast',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title of Breakfast',
      description: '(EX: Butter Naan)',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Type of Breakfast',
      description: '(EX: Vegetarian, etc.)',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price of Breakfast',
      description: '(EX: 9.99)',
      type: 'number',
    }),
  ],
})
