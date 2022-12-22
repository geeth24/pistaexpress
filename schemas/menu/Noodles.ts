import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'noodles',
  title: 'Noodles',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title of Noodles',
      description: '(EX: Chicken Noodles)',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Type of Noodles',
      description: '(EX: Vegetarian, etc.)',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price of Noodles',
      description: '(EX: 9.99)',
      type: 'number',
    }),
  ],
})
