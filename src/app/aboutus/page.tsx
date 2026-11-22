import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Our story",
  description: "Get to know Pista Express, a Hyderabadi kitchen on Fortress Drive in Midland, Texas.",
  alternates: { canonical: "/aboutus" },
}

export default function AboutPage() {
  return (
    <>
      <section className="wrap page-intro">
        <div>
          <p className="eyebrow"><span /> About Pista Express</p>
          <h1>A little Hyderabad in Midland.</h1>
          <p>We serve Hyderabadi Indian food on Fortress Drive, from slow-cooked dum biryani to tandoori dishes and curries for the table.</p>
          <div className="actions"><Link className="button" href="/menu">Browse the menu <ArrowRight aria-hidden="true" /></Link></div>
        </div>
      </section>
      <section className="page-band">
        <div className="wrap section-space story-copy">
          <h2>From a quick lunch to a family table.</h2>
          <p>A plate of biryani can be lunch on its own. Order kebabs, breads, and a vegetable curry when you have a table to feed.</p>
          <div className="actions">
            <Link className="button" href="/contact">Find us <ArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
