import { defineType, defineField } from "sanity"

export default defineType({
    name: "menuItem",
    title: "Menu Item",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),
        defineField({
            name: "price",
            title: "Price",
            type: "string",
        }),
        defineField({
            name: "category",
            title: "Category",
            type: "string",
            options: {
                list: [
                    { title: "Appetizers", value: "appetizers" },
                    { title: "Main Course", value: "main" },
                    { title: "Desserts", value: "desserts" },
                    { title: "Drinks", value: "drinks" },
                ],
            },
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "isVeg",
            title: "Is Vegetarian?",
            type: "boolean",
            initialValue: false,
        }),
    ],
})
