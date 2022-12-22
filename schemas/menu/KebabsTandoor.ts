import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'kebabstandoor',
  title: 'Kebabs & Tandoor',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title of Kebabs & Tandoor',
      description: '(EX: Chicken Kebabs)',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Type of Kebabs & Tandoor',
      description: '(EX: Vegetarian, etc.)',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price of Kebabs & Tandoor',
      description: '(EX: 9.99)',
      type: 'number',
    }),
  ],
})
