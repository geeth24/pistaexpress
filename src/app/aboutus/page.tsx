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
      <section className="page-band story-hero">
        <div className="wrap page-intro split-section">
          <div>
            <p className="eyebrow"><span /> About Pista Express</p>
            <h1>A little Hyderabad in Midland.</h1>
            <p>We serve Hyderabadi Indian food on Fortress Drive, from slow-cooked dum biryani to tandoori dishes and curries for the table.</p>
            <div className="actions"><Link className="button" href="/menu">Browse the menu <ArrowRight aria-hidden="true" /></Link></div>
          </div>
          <aside className="story-ticket">
            <span>Midland, Texas</span>
            <h2>On Fortress Drive</h2>
            <p>{restaurant.location}, at {restaurant.street}.</p>
            <a className="text-link" href={restaurant.directions}>Get directions <ArrowUpRight aria-hidden="true" /></a>
          </aside>
        </div>
      </section>
      <section className="wrap section-space story-section">
        <h2>What to try first</h2>
        <div className="story-notes">
          <article>
            <h3>From the dum pot</h3>
            <p>Dum is a slow-cooking technique. Layers of basmati rice, meat or vegetables, and spices cook together in a sealed pot.</p>
            <Link className="text-link" href="/menu#ricedish">Browse biryani <ArrowRight aria-hidden="true" /></Link>
          </article>
          <article>
            <h3>From the tandoor</h3>
            <p>A tandoor cooks at high heat. Try a tandoori chicken or kebab with warm naan and an entrée for the table.</p>
            <Link className="text-link" href="/menu#kebabstandoor">Browse kebabs <ArrowRight aria-hidden="true" /></Link>
          </article>
        </div>
      </section>
    </>
  )
}
