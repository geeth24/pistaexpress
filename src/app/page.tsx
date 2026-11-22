import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, MapPin, Phone, ShoppingBag } from "lucide-react"
import { restaurant } from "@/lib/restaurant"
import "./home.css"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: restaurant.name,
    images: ["/images/midland-biryani.webp"],
  },
}

const dishes = [
  {
    name: "Biryani & rice",
    detail: "Chicken dum biryani, Vijayawada chicken biryani, and vegetable rice dishes.",
    category: "ricedish",
  },
  {
    name: "Tandoor & kebabs",
    detail: "Tandoori chicken and marinated kebabs from the clay oven.",
    category: "kebabstandoor",
  },
  {
    name: "Curries & breads",
    detail: "Butter chicken, vegetable entrées, and warm garlic naan.",
    category: "entrees",
  },
  {
    name: "South Indian breakfast",
    detail: "Mysore masala dosa, onion dosa, and sambar idly.",
    category: "breakfast",
  },
]

const reviews = [
  { quote: "The Butter Chicken Masala is to die for.", author: "Cara B.", date: "Aug 18, 2023", published: "2023-08-18" },
  { quote: "Great flavor and level of spice.", author: "Savannah Z.", date: "May 29, 2026", published: "2026-05-29" },
  { quote: "The chicken was tender as well!", author: "Beth R.", date: "Jun 13, 2024", published: "2024-06-13" },
]

export default function Home() {
  return (
    <div className="express-home">
      <section className="express-home-hero" aria-labelledby="home-title">
        <div className="wrap express-home-hero-grid">
          <div className="express-home-opening">
            <p className="express-home-label">Pista Express <span aria-hidden="true" /> Midland, Texas</p>
            <h1 id="home-title">
              From Hyderabad<span> to Midland.</span>
            </h1>
            <p>
              Dum biryani, tandoori favorites, and South Indian breakfast inside
              the Baymont Hotel on Fortress Drive.
            </p>
            <div className="express-home-actions">
              <a className="button" href={restaurant.order}>Order pickup <ArrowUpRight aria-hidden="true" /></a>
              <Link className="text-link" href="/menu">Explore the menu <ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
          <figure className="express-home-plate">
            <div className="express-home-plate-art">
              <div className="express-home-rings" aria-hidden="true" />
              <Image
                src="/images/midland-biryani.webp"
                alt="Illustration of Hyderabadi chicken dum biryani with fried onions, herbs, and lemon"
                fill
                preload
                sizes="(max-width: 740px) 84vw, (max-width: 1100px) 47vw, 585px"
              />
            </div>
            <figcaption>Hyderabadi chicken dum biryani</figcaption>
          </figure>
        </div>
      </section>

      <div className="wrap express-home-service" aria-label="Restaurant information">
        <Link href="/contact">
          <MapPin aria-hidden="true" />
          <span><strong>{restaurant.street}</strong><small>{restaurant.location}</small></span>
        </Link>
        <a href={restaurant.tel}>
          <Phone aria-hidden="true" />
          <span><strong>{restaurant.phone}</strong><small>Call for today’s dining hours</small></span>
        </a>
        <a href={restaurant.directions}>
          <ArrowUpRight aria-hidden="true" />
          <span><strong>Get directions</strong><small>Near Midland International Airport</small></span>
        </a>
      </div>

      <section className="wrap express-home-kitchen" aria-labelledby="kitchen-title">
        <figure className="express-home-dosa">
          <div>
            <Image
              src="/images/mysore-dosa.webp"
              alt="Illustration of a folded Mysore masala dosa with chutney and sambar"
              fill
              sizes="(max-width: 740px) 92vw, (max-width: 1100px) 40vw, 510px"
            />
          </div>
          <figcaption>Mysore masala dosa</figcaption>
        </figure>

        <div className="express-home-menu">
          <h2 id="kitchen-title">From the Midland kitchen</h2>
          <ul>
            {dishes.map(({ name, detail, category }) => (
              <li key={category}>
                <Link href={`/menu#${category}`}>
                  <div><h3>{name}</h3><p>{detail}</p></div>
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          <Link className="text-link" href="/menu">Browse the full menu <ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="express-home-reviews" aria-labelledby="guest-reviews">
        <div className="wrap express-home-review-layout">
          <div className="express-home-review-intro">
            <h2 id="guest-reviews">From Midland guests</h2>
            <a className="text-link" href={restaurant.deliveryReviews}>Read reviews on DoorDash <ArrowUpRight aria-hidden="true" /></a>
          </div>
          <div className="express-home-review-list">
            {reviews.map(({ quote, author, date, published }) => (
              <figure key={author}>
                <blockquote>“{quote}”</blockquote>
                <figcaption>{author} <span aria-hidden="true">·</span> <time dateTime={published}>{date}</time></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap express-home-visit" aria-labelledby="visit-title">
        <div>
          <p className="express-home-label"><ShoppingBag size={17} aria-hidden="true" /> Dine in or pick up</p>
          <h2 id="visit-title">See you on Fortress Drive.</h2>
          <p>
            Find the restaurant inside the Baymont Hotel near Midland
            International Airport. For pickup, check DoorDash for current
            availability before you head over.
          </p>
          <div className="express-home-actions">
            <Link className="button" href="/contact">Plan your visit <ArrowRight aria-hidden="true" /></Link>
            <Link className="text-link" href="/catering">Ask about catering <ArrowUpRight aria-hidden="true" /></Link>
          </div>
        </div>
        <address>
          <MapPin size={24} aria-hidden="true" />
          <strong>{restaurant.street}</strong>
          <span>{restaurant.city}</span>
          <span>{restaurant.location}</span>
          <a className="text-link" href={restaurant.directions}>Get directions <ArrowUpRight aria-hidden="true" /></a>
        </address>
      </section>
    </div>
  )
}
