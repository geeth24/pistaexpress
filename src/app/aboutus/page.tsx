import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { restaurant } from "@/lib/restaurant"

export const metadata: Metadata = {
  title: "Our story",
  description: "Get to know Pista Express, a Hyderabadi kitchen on Fortress Drive in Midland, Texas.",
  alternates: { canonical: "/aboutus" },
}

export default function AboutPage() {
  return (
    <>
      <section className="wrap editorial-opening story-opening">
        <div className="editorial-copy">
          <p className="eyebrow">Our story</p>
          <h1>A little Hyderabad in Midland.</h1>
          <p>On Fortress Drive, Pista Express serves the Hyderabadi dishes you might come in for on a lunch break or order for a table of friends.</p>
          <div className="actions"><Link className="text-link" href="/menu">Browse the menu <ArrowRight aria-hidden="true" /></Link></div>
        </div>
        <aside className="editorial-aside">
          <p className="eyebrow">Find us</p>
          <h2>On Fortress Drive</h2>
          <p>{restaurant.location}, at {restaurant.street} in Midland.</p>
          <a className="text-link" href={restaurant.directions}>Get directions <ArrowUpRight aria-hidden="true" /></a>
        </aside>
      </section>
      <section className="wrap editorial-section">
        <h2>What to try first</h2>
        <div className="editorial-notes">
          <article>
            <h3>From the dum pot</h3>
            <p>Dum is a slow-cooking technique. Layers of basmati rice, meat or vegetables, and spices cook together in a sealed pot.</p>
            <Link className="text-link" href="/menu#ricedish">Browse biryani <ArrowRight aria-hidden="true" /></Link>
          </article>
          <article>
            <h3>From the tandoor</h3>
            <p>A tandoor cooks at high heat. Try tandoori chicken or kebabs with warm naan and an entrée for the table.</p>
            <Link className="text-link" href="/menu#kebabstandoor">Browse kebabs <ArrowRight aria-hidden="true" /></Link>
          </article>
        </div>
      </section>
    </>
  )
}
