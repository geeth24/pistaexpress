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
    <>
      <section className="wrap editorial-opening contact-opening">
        <div className="editorial-copy">
          <p className="eyebrow">Visit Pista Express</p>
          <h1>Find us on Fortress Drive.</h1>
          <p>{restaurant.location}, about a mile from Midland International Air &amp; Space Port.</p>
          <dl className="contact-list">
            <div><dt>Address</dt><dd><a href={restaurant.directions}>{restaurant.street}, {restaurant.city}</a></dd></div>
            <div><dt>Phone</dt><dd><a href={restaurant.tel}>{restaurant.phone}</a></dd></div>
            <div><dt>Email</dt><dd><a href={`mailto:${restaurant.email}`}>{restaurant.email}</a></dd></div>
          </dl>
        </div>
        <figure className="editorial-figure">
          <iframe
            className="contact-map"
            src={restaurant.map}
            title="Map of Pista Express on Fortress Drive"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          <figcaption className="map-caption">
            <a className="text-link" href={restaurant.directions}>Get directions <ArrowUpRight aria-hidden="true" /></a>
            <a className="text-link" href={restaurant.hotel}>Visit the Baymont website <ArrowUpRight aria-hidden="true" /></a>
          </figcaption>
        </figure>
      </section>
      <section className="wrap editorial-section" aria-labelledby="before-you-go">
        <h2 id="before-you-go">Before you head over</h2>
        <div className="editorial-notes">
          <article>
            <h3>Dining hours</h3>
            <p>Check Google Maps or call the restaurant for today’s hours, especially on holidays.</p>
            <a className="text-link" href={restaurant.reviews}>See the Google listing <ArrowUpRight aria-hidden="true" /></a>
          </article>
          <article>
            <h3>Order ahead</h3>
            <p>Check current pickup times and availability before you leave for Fortress Drive.</p>
            <a className="text-link" href={restaurant.order}>Open DoorDash <ArrowUpRight aria-hidden="true" /></a>
          </article>
        </div>
      </section>
    </>
  )
}
