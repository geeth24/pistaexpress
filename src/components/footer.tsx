import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { navigation, restaurant } from "@/lib/restaurant"

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-main">
          <div>
            <Link className="wordmark" href="/">
              <Image src="/images/express-logo.webp" alt="Pista Express home" width={172} height={69} />
            </Link>
            <p>Hyderabadi Indian kitchen in Midland, Texas.</p>
          </div>
          <address>
            <a href={restaurant.directions}>{restaurant.street}<br />{restaurant.city}</a>
            <a href={restaurant.tel}>{restaurant.phone}</a>
            <a href={`mailto:${restaurant.email}`}>{restaurant.email}</a>
          </address>
          <nav aria-label="Footer navigation">
            {navigation.map(({ href, label }) => <Link key={href} href={href}>{label}</Link>)}
          </nav>
        </div>
        <div className="footer-base">
          <span>© {new Date().getFullYear()} Pista Express</span>
          <a href="https://geeth.co">Built by Geeth <ArrowUpRight aria-hidden="true" size={14} /></a>
        </div>
      </div>
    </footer>
  )
}
