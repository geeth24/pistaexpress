import type { Metadata } from "next"
import { unstable_cache } from "next/cache"
import { connection } from "next/server"
import { ArrowUpRight } from "lucide-react"
import { MenuCatalog } from "@/components/menu-catalog"
import { buildMenuSections, menuCategories, type SanityDish } from "@/lib/menu"
import { restaurant } from "@/lib/restaurant"
import { client } from "@/sanity/lib/client"

export const metadata: Metadata = {
  title: "Menu",
  description: "Browse biryani, tandoori specialties, dosas, noodles, and pulav on the Pista Express menu in Midland, Texas.",
  alternates: { canonical: "/menu" },
}

const menuQuery = '*[_type in $categories && defined(title)]{_id, title, type, _type}'

const fetchMenu = unstable_cache(
  () => client.fetch<SanityDish[]>(
    menuQuery,
    { categories: menuCategories.map(({ key }) => key) },
    { cache: "no-store", signal: AbortSignal.timeout(8000) },
  ),
  ["pista-express-menu"],
  { revalidate: 300 },
)

async function loadMenu() {
  try {
    return buildMenuSections(await fetchMenu())
  } catch {
    return []
  }
}

export default async function MenuPage() {
  await connection()
  const sections = await loadMenu()

  return (
    <>
      <section className="page-band menu-intro">
        <div className="wrap page-intro">
          <div>
            <p className="eyebrow"><span /> Pista Express · Midland</p>
            <h1>Find your next order.</h1>
            <p>Browse by dish, section, or dietary preference. Explore dosas, dum biryani, and pickup favorites like Indo-Chinese noodles and pulav.</p>
          </div>
          <aside className="menu-pickup">
            <h2>Picking up?</h2>
            <p>Check DoorDash for current prices and availability.</p>
            <a className="text-link" href={restaurant.order}>Order pickup <ArrowUpRight aria-hidden="true" /></a>
          </aside>
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
