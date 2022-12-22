import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'appetizerssides',
  title: 'Appetizers & Sides',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title of Appetizer / Side',
      description: '(EX: Fried Calamari)',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Type of Appetizer / Side',
      description: '(EX: Vegetarian, etc.)',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price of Appetizer / Side',
      description: '(EX: 9.99)',
      type: 'number',
    }),
  ],
})
