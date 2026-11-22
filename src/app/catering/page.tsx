import type { Metadata } from "next"
import Image from "next/image"
import { ArrowRight, Phone } from "lucide-react"
import { restaurant } from "@/lib/restaurant"

export const metadata: Metadata = {
  title: "Catering inquiries in Midland",
  description: "Contact Pista Express on Fortress Drive to ask about catering availability for your event in Midland, Texas.",
  alternates: { canonical: "/catering" },
}

export default function CateringPage() {
  return (
    <section className="wrap page-intro split-section">
      <div>
        <p className="eyebrow"><span /> Pista Express · Midland</p>
        <h1>Ask about catering.</h1>
        <p>Call or email the Midland team to check what’s available for your event. Share your date, venue, guest count, and any dietary needs.</p>
        <div className="actions">
          <a className="button" href={restaurant.tel}><Phone aria-hidden="true" /> {restaurant.phone}</a>
          <a className="text-link" href={`mailto:${restaurant.email}?subject=Pista%20Express%20catering`}>Email an inquiry <ArrowRight aria-hidden="true" /></a>
        </div>
      </div>
      <figure>
        <div className="photo-frame">
          <Image src="/images/express-catering.webp" alt="Illustration of biryani and tandoori chicken in serving trays" fill preload sizes="(max-width: 760px) 92vw, 46vw" />
        </div>
        <figcaption className="photo-note">Serving illustration</figcaption>
      </figure>
    </section>
  )
}
