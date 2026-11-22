import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, MapPin, Quote, ShoppingBag } from "lucide-react"
import { restaurant } from "@/lib/restaurant"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "/", siteName: restaurant.name, images: ["/images/midland-biryani.webp"] },
}

const dishes = [
  {
    name: "Biryani",
    detail: "Find chicken dum biryani, Vijayawada chicken biryani, and vegetable rice dishes.",
    category: "ricedish",
  },
  {
    name: "Tandoor & kebabs",
    detail: "Start with tandoori chicken or look through the kebabs and other dishes from the tandoor.",
    category: "kebabstandoor",
  },
  {
    name: "Curries & breads",
    detail: "Pair butter chicken or a vegetable entrée with warm garlic naan.",
    category: "entrees",
  },
]

const reviews = [
  { quote: "The Butter Chicken Masala is to die for.", author: "Cara B.", date: "Aug 18, 2023", published: "2023-08-18" },
  { quote: "Great flavor and level of spice.", author: "Savannah Z.", date: "May 29, 2026", published: "2026-05-29" },
  { quote: "The chicken was tender as well!", author: "Beth R.", date: "Jun 13, 2024", published: "2024-06-13" },
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
          <figure className="hero-figure">
            <div className="hero-art">
              <div className="hero-ring" aria-hidden="true" />
              <Image
                src="/images/midland-biryani.webp"
                alt="Illustration of Hyderabadi chicken dum biryani with fried onions, herbs, and lemon"
                fill
                preload
                unoptimized
              />
            </div>
            <figcaption>Dum biryani <span aria-hidden="true" /> A Hyderabadi staple</figcaption>
          </figure>
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
          <div>
            <h2>From the Midland kitchen</h2>
            <p>Start with a Hyderabadi favorite or find a new dish in the full menu.</p>
          </div>
          <Link className="text-link" href="/menu">Full menu <ArrowRight aria-hidden="true" /></Link>
        </div>
        <ul className="dish-index">
          {dishes.map(({ name, detail, category }) => (
            <li key={name}>
              <Link href={`/menu#${category}`}>
                <h3>{name}</h3>
                <p>{detail}</p>
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="wrap breakfast-feature">
        <figure>
          <div className="photo-frame">
            <Image src="/images/mysore-dosa.webp" alt="Illustration of a folded Mysore masala dosa with chutney and sambar" fill sizes="(max-width: 760px) 92vw, 46vw" />
          </div>
          <figcaption className="photo-note">Dosa illustration</figcaption>
        </figure>
        <div className="breakfast-copy">
          <p className="eyebrow"><span /> From the breakfast menu</p>
          <h2>Start with a dosa.</h2>
          <p>Look for Mysore masala dosa, onion dosa, and sambar idly. The pickup listing shows what’s available to order.</p>
          <Link className="text-link" href="/menu#breakfast">Browse breakfast <ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>
      <section className="location-band">
        <div className="wrap pickup-layout">
          <div className="pickup-copy">
            <span className="section-icon"><ShoppingBag size={24} aria-hidden="true" /></span>
            <h2>Pick up on Fortress Drive.</h2>
            <p>Order through DoorDash for current pickup availability. Head to the Baymont Hotel at {restaurant.street} when your order is ready.</p>
            <div className="actions">
              <a className="button" href={restaurant.order}>Order pickup <ArrowUpRight aria-hidden="true" /></a>
              <Link className="text-link" href="/contact">See visit details <ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
          <a className="direction-sign" href={restaurant.directions}>
            <span className="direction-top"><MapPin size={20} aria-hidden="true" /> Midland, TX</span>
            <strong>3312</strong>
            <span>Fortress Drive</span>
            <small>{restaurant.location}</small>
            <span className="direction-action">Get directions <ArrowUpRight size={18} aria-hidden="true" /></span>
          </a>
        </div>
      </section>
      <section className="wrap section-space review-section" aria-labelledby="guest-reviews">
        <div className="section-lead">
          <h2 id="guest-reviews">From Midland guests</h2>
          <a className="text-link" href={restaurant.deliveryReviews}>Read reviews on DoorDash <ArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="review-grid">
          {reviews.map(({ quote, author, date, published }) => (
            <figure key={author}>
              <Quote aria-hidden="true" size={22} />
              <blockquote>{quote}</blockquote>
              <figcaption>{author} <span aria-hidden="true">·</span> <time dateTime={published}>{date}</time></figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  )
}
