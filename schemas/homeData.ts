import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      description: 'Title of the page (EX: Fast & Authentic Food)',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle of the page (EX: in Just Minutes)',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'homeImage',
      title: 'Home Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
