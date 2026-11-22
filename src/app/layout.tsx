import type { Metadata } from "next"
import localFont from "next/font/local"
import { ThemeProvider } from "next-themes"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { restaurant } from "@/lib/restaurant"
import "./globals.css"

const bodyFont = localFont({
  src: "../../node_modules/@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2",
  variable: "--body-face",
  weight: "100 1000",
})
const displayFont = localFont({
  src: "../../node_modules/@fontsource/barlow-condensed/files/barlow-condensed-latin-700-normal.woff2",
  variable: "--display-face",
  weight: "700",
})

export const metadata: Metadata = {
  metadataBase: new URL(restaurant.origin),
  title: {
    default: "Pista Express | Hyderabadi Indian Restaurant in Midland, TX",
    template: "%s | Pista Express",
  },
  description: "Find Hyderabadi dum biryani, tandoori dishes, and breads at Pista Express on Fortress Drive in Midland, Texas. Browse the menu or order pickup.",
}

const restaurantData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": restaurant.origin + "/#restaurant",
  name: restaurant.name,
  url: restaurant.origin,
  telephone: restaurant.tel.slice(4),
  email: restaurant.email,
  servesCuisine: ["Hyderabadi", "Indian"],
  menu: restaurant.origin + "/menu",
  logo: restaurant.origin + "/PistaExpress.png",
  geo: { "@type": "GeoCoordinates", ...restaurant.coordinates },
  hasMap: restaurant.reviews,
  address: {
    "@type": "PostalAddress",
    streetAddress: restaurant.street,
    addressLocality: "Midland",
    addressRegion: "TX",
    postalCode: "79706",
    addressCountry: "US",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="system" disableTransitionOnChange>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantData) }} />
          <a className="skip-link" href="#main">Skip to content</a>
          <Navbar />
          <main id="main" tabIndex={-1}>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
