export const menuCategories = [
  { key: "appetizerssides", name: "Appetizers & sides" },
  { key: "entrees", name: "Entrées" },
  { key: "ricedish", name: "Biryani & rice" },
  { key: "pulav", name: "Pulav" },
  { key: "kebabstandoor", name: "Kebabs & tandoor" },
  { key: "noodles", name: "Indo-Chinese noodles & rice" },
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

type PickupDish = [title: string, type?: "Vegetarian" | "Non-vegetarian"]

// DoorDash pickup listings fill gaps in Sanity. Verified Nov 21, 2026.
const pickupDishes: Partial<Record<CategoryKey, PickupDish[]>> = {
  appetizerssides: [["Samosa Chaat", "Vegetarian"]],
  noodles: [
    ["Chicken Noodles", "Non-vegetarian"],
    ["Egg Noodles", "Non-vegetarian"],
    ["Paneer Noodles", "Vegetarian"],
    ["Veg Noodles", "Vegetarian"],
    ["Chicken Fried Rice", "Non-vegetarian"],
    ["Egg Fried Rice", "Non-vegetarian"],
    ["Paneer Fried Rice", "Vegetarian"],
    ["Shrimp Fried Rice", "Non-vegetarian"],
    ["Veg Fried Rice", "Vegetarian"],
  ],
  pulav: [
    ["Vijayawada Chicken Pulav", "Non-vegetarian"],
    ["Egg Pulav", "Non-vegetarian"],
    ["Fish Pulav", "Non-vegetarian"],
    ["Goat Pulav", "Non-vegetarian"],
    ["Gutti Vankaya Pulav", "Vegetarian"],
    ["Lamb Pulav", "Non-vegetarian"],
    ["Paneer Pulav", "Vegetarian"],
    ["Shrimp Pulav", "Non-vegetarian"],
    ["Vegetable Pulav", "Vegetarian"],
  ],
  drinks: [["Badam Shake"], ["Chikoo Shake"], ["Masala Jeera Soda"]],
}

export type SanityDish = MenuItem & { _type: CategoryKey }

function dishKey(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]/g, "")
}

export function buildMenuSections(items: SanityDish[]): MenuSection[] {
  if (items.length === 0) return []

  const existing = new Set(items.map(({ title }) => dishKey(title)))

  return menuCategories.map((section) => {
    const extraItems = (pickupDishes[section.key] ?? [])
      .filter(([title]) => !existing.has(dishKey(title)))
      .map(([title, type]): MenuItem => ({ _id: "pickup-" + dishKey(title), title, type }))

    return {
      ...section,
      items: [
        ...items.filter((item) => item._type === section.key),
        ...extraItems,
      ],
    }
  }).filter(({ items }) => items.length > 0)
}
