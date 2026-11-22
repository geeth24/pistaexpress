import type { Metadata } from "next"
import { ArrowUpRight, Clock, ShoppingBag } from "lucide-react"
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
        <p>{restaurant.location}, about a mile from Midland International Air &amp; Space Port.</p>
      </section>
      <section className="contact-grid" aria-label="Contact and directions">
        <div>
          <dl className="contact-list">
            <div><dt>Address</dt><dd><a href={restaurant.directions}>{restaurant.street}<br />{restaurant.city}</a></dd></div>
            <div><dt>Phone</dt><dd><a href={restaurant.tel}>{restaurant.phone}</a></dd></div>
            <div><dt>Email</dt><dd><a href={`mailto:${restaurant.email}`}>{restaurant.email}</a></dd></div>
          </dl>
          <p className="contact-note">Look for the <a href={restaurant.hotel}>Baymont Midland Airport hotel</a> at the same address.</p>
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
      <section className="visit-notes" aria-labelledby="before-you-go">
        <h2 id="before-you-go">Before you head over</h2>
        <div className="story-notes">
          <article>
            <span className="section-icon"><Clock size={22} aria-hidden="true" /></span>
            <h3>Dining hours</h3>
            <p>Check Google Maps or call the restaurant for today’s hours, especially on holidays.</p>
            <a className="text-link" href={restaurant.reviews}>See the Google listing <ArrowUpRight aria-hidden="true" /></a>
          </article>
          <article>
            <span className="section-icon"><ShoppingBag size={22} aria-hidden="true" /></span>
            <h3>Order ahead</h3>
            <p>See current pickup times and availability before you leave for Fortress Drive.</p>
            <a className="text-link" href={restaurant.order}>Open DoorDash <ArrowUpRight aria-hidden="true" /></a>
          </article>
        </div>
      </section>
    </div>
  )
}
