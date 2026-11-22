import type { Metadata } from "next"
import { Suspense } from "react"
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
  } catch (error) {
    console.error("Unable to load the Pista Express menu", error instanceof Error ? error.name : "UnknownError")
    return []
  }
}

export default async function MenuPage() {
  await connection()

  return (
    <>
      <section className="wrap editorial-opening menu-opening">
        <div className="editorial-copy">
          <p className="eyebrow">Pista Express · Midland</p>
          <h1>The menu</h1>
          <p>Find dum biryani, tandoori favorites, dosas, and dishes from the Midland pickup menu.</p>
        </div>
        <aside className="editorial-aside">
          <p className="eyebrow">Ordering ahead</p>
          <h2>Pickup on Fortress Drive</h2>
          <p>DoorDash lists current prices and pickup availability.</p>
          <a className="text-link" href={restaurant.order}>Order pickup <ArrowUpRight aria-hidden="true" /></a>
        </aside>
      </section>
      <Suspense fallback={<p className="wrap section-space menu-message" role="status">Loading the menu…</p>}>
        <MenuBody />
      </Suspense>
    </>
  )
}

async function MenuBody() {
  const sections = await loadMenu()

  if (sections.length > 0) return <MenuCatalog sections={sections} />

  return (
    <section className="wrap section-space menu-message">
      <h2>Menu temporarily unavailable</h2>
      <p>See the current menu on DoorDash or call us at {restaurant.phone}.</p>
      <div className="actions">
        <a className="button" href={restaurant.order}>View on DoorDash <ArrowUpRight aria-hidden="true" /></a>
        <a className="text-link" href={restaurant.tel}>Call the restaurant</a>
      </div>
    </section>
  )
}
