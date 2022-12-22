import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ricedish',
  title: 'Rice Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title of Rice Dish',
      description: '(EX: Panner Biryani)',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Type of Rice Dish',
      description: '(EX: Vegetarian, etc.)',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price of Rice Dish',
      description: '(EX: 9.99)',
      type: 'number',
    }),
  ],
})
