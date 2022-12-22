import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'drinks',
  title: 'Drinks',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title of Drink',
      description: '(EX: Coffee)',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Type of Drink',
      description: '(EX: Cold, etc.)',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price of Drink',
      description: '(EX: 9.99)',
      type: 'number',
    }),
  ],
})
