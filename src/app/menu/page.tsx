import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { MenuCatalog } from "@/components/menu-catalog"
import { menuCategories, type CategoryKey, type MenuItem } from "@/lib/menu"
import { restaurant } from "@/lib/restaurant"
import { client } from "@/sanity/lib/client"

export const metadata: Metadata = {
  title: "Menu",
  description: "Browse biryani, tandoori specialties, curries, and vegetarian dishes on the Pista Express menu in Midland, Texas.",
  alternates: { canonical: "/menu" },
}

const menuQuery = '*[_type in $categories && defined(title)]{_id, title, type, _type}'
type SanityDish = MenuItem & { _type: CategoryKey }

async function loadMenu() {
  try {
    const items = await client.fetch<SanityDish[]>(
      menuQuery,
      { categories: menuCategories.map(({ key }) => key) },
      { next: { revalidate: 300 }, signal: AbortSignal.timeout(8000) },
    )
    return menuCategories.map((section) => ({
      ...section,
      items: items.filter((item) => item._type === section.key),
    })).filter(({ items }) => items.length > 0)
  } catch {
    return []
  }
}

export default async function MenuPage() {
  const sections = await loadMenu()

  return (
    <>
      <section className="wrap page-intro">
        <p className="eyebrow"><span /> Pista Express · Midland</p>
        <h1>Find your next order.</h1>
        <p>Browse the menu by dish, section, or dietary preference. Check DoorDash for current prices and pickup availability.</p>
        <div className="actions">
          <a className="button" href={restaurant.order}>Order pickup <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </section>
      {sections.length > 0 ? (
        <MenuCatalog sections={sections} />
      ) : (
        <section className="wrap section-space menu-message">
          <h2>Menu temporarily unavailable</h2>
          <p>See the current menu on DoorDash or call us at {restaurant.phone}.</p>
          <div className="actions">
            <a className="button" href={restaurant.order}>View on DoorDash <ArrowUpRight aria-hidden="true" /></a>
            <a className="text-link" href={restaurant.tel}>Call the restaurant</a>
          </div>
        </section>
      )}
    </>
  )
}
