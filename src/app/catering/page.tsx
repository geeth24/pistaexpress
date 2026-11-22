import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CalendarDays, Phone, UsersRound } from "lucide-react"
import { restaurant } from "@/lib/restaurant"

export const metadata: Metadata = {
  title: "Catering inquiries in Midland",
  description: "Contact Pista Express on Fortress Drive to ask about catering availability for your event in Midland, Texas.",
  alternates: { canonical: "/catering" },
}

const emailSubject = "Pista Express catering inquiry"
const emailBody = ["Event date:", "Venue or pickup:", "Guest count:", "Menu or dietary requests:"].join("\n")
const inquiry = `mailto:${restaurant.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`

export default function CateringPage() {
  return (
    <>
      <section className="page-band catering-hero">
        <div className="wrap page-intro split-section">
          <div>
            <p className="eyebrow"><span /> Pista Express · Midland</p>
            <h1>Ask about catering.</h1>
            <p>Tell the Midland team what you have in mind and check what’s available for your date.</p>
            <div className="actions">
              <a className="button" href={restaurant.tel}><Phone aria-hidden="true" /> {restaurant.phone}</a>
              <a className="text-link" href={inquiry}>Email an inquiry <ArrowRight aria-hidden="true" /></a>
            </div>
          </div>
          <figure>
            <div className="photo-frame">
              <Image src="/images/express-catering.webp" alt="Illustration of biryani and tandoori chicken in serving trays" fill preload sizes="(max-width: 760px) 90vw, (max-width: 1100px) 40vw, 510px" />
            </div>
            <figcaption className="photo-note">Serving illustration</figcaption>
          </figure>
        </div>
      </section>
      <section className="wrap section-space story-section">
        <h2>What to include in your inquiry</h2>
        <div className="story-notes">
          <article>
            <span className="section-icon"><CalendarDays size={22} aria-hidden="true" /></span>
            <h3>Time and place</h3>
            <p>Share the date, your serving time, and the location. Ask the team which pickup or delivery options are available.</p>
          </article>
          <article>
            <span className="section-icon"><UsersRound size={22} aria-hidden="true" /></span>
            <h3>Guests and dishes</h3>
            <p>Tell us how many people are coming, which dishes you have in mind, and any dietary needs.</p>
            <Link className="text-link" href="/menu">Find menu ideas <ArrowRight aria-hidden="true" /></Link>
          </article>
        </div>
      </section>
    </>
  )
}
