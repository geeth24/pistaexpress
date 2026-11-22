import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react"
import { restaurant } from "@/lib/restaurant"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "/", siteName: restaurant.name, images: ["/images/midland-biryani.webp"] },
}

const dishes = [
  { name: "Dum biryani", detail: "Basmati rice layered with spices and cooked together in a sealed pot.", category: "ricedish" },
  { name: "Tandoor & kebabs", detail: "Marinated tandoori chicken and kebabs cooked over high heat.", category: "kebabstandoor" },
  { name: "Curries & breads", detail: "Rich curries, vegetable entrées, and warm breads for the table.", category: "entrees" },
]

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Hyderabadi Indian kitchen</p>
            <h1>Hyderabad.<br /><em>West Texas.</em></h1>
            <p className="lede">
              Dum biryani, tandoori favorites, and warm breads on Fortress Drive in Midland.
            </p>
            <div className="actions">
              <a className="button" href={restaurant.order}>Order pickup <ArrowUpRight aria-hidden="true" /></a>
              <Link className="text-link" href="/menu">Browse the menu <ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
          <div className="hero-art">
            <div className="hero-ring" aria-hidden="true" />
            <Image
              src="/images/midland-biryani.webp"
              alt="Illustration of Hyderabadi chicken dum biryani with fried onions, herbs, and lemon"
              fill
              preload
              sizes="(max-width: 760px) 88vw, (max-width: 1300px) 47vw, 610px"
            />
          </div>
        </div>
      </section>
      <div className="location-strip">
        <div className="wrap">
          <Link href="/contact"><MapPin aria-hidden="true" size={18} /> {restaurant.street} · Midland, TX</Link>
          <a href={restaurant.directions}>Get directions <ArrowUpRight aria-hidden="true" size={18} /></a>
        </div>
      </div>
      <section className="wrap section-space kitchen-section">
        <div className="section-lead">
          <h2>From the kitchen</h2>
          <Link className="text-link" href="/menu">Full menu <ArrowRight aria-hidden="true" /></Link>
        </div>
        <ul className="dish-index">
          {dishes.map(({ name, detail, category }) => (
            <li key={name}>
              <Link href={`/menu#${category}`}>
                <div><h3>{name}</h3><p>{detail}</p></div>
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="location-band">
        <div className="wrap split-section">
          <div className="direction-sign" aria-hidden="true">
            <strong>3312</strong>
            <span>Fortress Drive</span>
            <small>Midland, Texas</small>
          </div>
          <div className="split-copy">
            <p className="eyebrow"><span /> Find us in Midland</p>
            <h2>On Fortress Drive.</h2>
            <p>Find the restaurant at {restaurant.street}, Midland, TX. Check today’s hours by phone before you head over.</p>
            <Link className="button" href="/contact">Plan a visit <ArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
