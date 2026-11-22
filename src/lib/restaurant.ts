export const restaurant = {
  name: "Pista Express",
  origin: "https://pistaexpress.com",
  street: "3312 Fortress Dr",
  city: "Midland, TX 79706",
  location: "Inside the Baymont Hotel",
  coordinates: { latitude: 31.9271771, longitude: -102.2120581 },
  phone: "(432) 897-4533",
  tel: "tel:+14328974533",
  email: "pistamidland@gmail.com",
  directions: "https://www.google.com/maps/dir/?api=1&destination=3312+Fortress+Dr,+Midland,+TX+79706",
  reviews: "https://maps.app.goo.gl/rAMEQgu1kanFSXu28",
  map: "https://www.google.com/maps?q=3312+Fortress+Dr,+Midland,+TX+79706&output=embed",
  deliveryReviews: "https://www.doordash.com/en/store/pista-express-midland-24751280/26491947/",
  hotel: "https://www.wyndhamhotels.com/baymont/midland-texas/baymont-inn-and-suites-midland-airport",
  order: "https://www.doordash.com/store/24751280?pickup=true",
}

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/catering", label: "Catering" },
  { href: "/aboutus", label: "Our story" },
  { href: "/contact", label: "Find us" },
] as const
