import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Pista Express Content')
    .items([
      // Home Page
      S.listItem()
        .title('Home Page')
        .child(
          S.editor()
            .id('home')
            .schemaType('home')
            .documentId('home')
            .title('Home Page')
        ),

      S.divider(),

      // Menu Categories
      S.listItem()
        .title('Menu')
        .child(
          S.list()
            .title('Menu Categories')
            .items([
              S.documentTypeListItem('appetizerssides').title('Appetizers & Sides'),
              S.documentTypeListItem('bread').title('Breads'),
              S.documentTypeListItem('breakfast').title('Breakfast'),
              S.documentTypeListItem('desserts').title('Desserts'),
              S.documentTypeListItem('drinks').title('Drinks'),
              S.documentTypeListItem('entrees').title('Entrees'),
              S.documentTypeListItem('kebabstandoor').title('Kebabs & Tandoor'),
              S.documentTypeListItem('kids').title('Kids'),
              S.documentTypeListItem('noodles').title('Noodles'),
              S.documentTypeListItem('ricedish').title('Rice Dishes'),
            ])
        ),
    ])
