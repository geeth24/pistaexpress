export const menuCategories = [
  { key: "appetizerssides", name: "Appetizers & sides" },
  { key: "entrees", name: "Entrées" },
  { key: "ricedish", name: "Biryani & rice" },
  { key: "kebabstandoor", name: "Kebabs & tandoor" },
  { key: "noodles", name: "Noodles" },
  { key: "bread", name: "Breads" },
  { key: "breakfast", name: "Breakfast" },
  { key: "kids", name: "Kids" },
  { key: "desserts", name: "Desserts" },
  { key: "drinks", name: "Drinks" },
] as const

export type CategoryKey = (typeof menuCategories)[number]["key"]

export interface MenuItem {
  _id: string
  title: string
  type?: string
}

export interface MenuSection {
  key: CategoryKey
  name: string
  items: MenuItem[]
}
