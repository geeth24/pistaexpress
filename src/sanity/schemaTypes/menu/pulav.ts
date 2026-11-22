import { defineField, defineType } from "sanity"

export default defineType({
  name: "pulav",
  title: "Pulav",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Dish name", type: "string" }),
    defineField({ name: "type", title: "Dietary preference", type: "string" }),
    defineField({ name: "price", title: "Price", type: "number" }),
  ],
})
