import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { restaurant } from "@/lib/restaurant"

export const metadata: Metadata = {
  title: "Find us",
  description: "Get directions to Pista Express at 3312 Fortress Dr in Midland, Texas, or call the restaurant for pickup and catering questions.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <div className="wrap">
      <section className="page-intro">
        <p className="eyebrow"><span /> Midland, Texas</p>
        <h1>Find us on<br />Fortress Drive.</h1>
        <p>{restaurant.location}. Call ahead to check today’s dining hours or ask about your order.</p>
      </section>
      <section className="contact-grid" aria-label="Contact and directions">
        <div>
          <dl className="contact-list">
            <div><dt>Address</dt><dd><a href={restaurant.directions}>{restaurant.street}<br />{restaurant.city}</a></dd></div>
            <div><dt>Phone</dt><dd><a href={restaurant.tel}>{restaurant.phone}</a></dd></div>
            <div><dt>Email</dt><dd><a href={`mailto:${restaurant.email}`}>{restaurant.email}</a></dd></div>
          </dl>
          <div className="actions contact-actions">
            <a className="button" href={restaurant.directions}>Get directions <ArrowUpRight aria-hidden="true" /></a>
            <a className="text-link" href={restaurant.reviews}>Read Google reviews <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
        <iframe
          className="contact-map"
          src={restaurant.map}
          title="Map of Pista Express on Fortress Drive"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  )
}
