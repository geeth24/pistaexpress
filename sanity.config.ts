import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./schemas"
import { myStructure } from "./deskStructure"


export default defineConfig({
    basePath: "/cms",
    name: "default",
    title: "pistaexpress",

    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    plugins: [
        deskTool({
            structure: myStructure,
        }),
        visionTool(),
    ],

    schema: {
        types: schemaTypes,
    },
})
