import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function NotFound() {
  return (
    <section className="wrap page-intro">
      <h1>Page not found</h1>
      <p>Try the menu or head back to the Pista Express homepage.</p>
      <div className="actions">
        <Link className="button" href="/menu">Browse the menu <ArrowRight aria-hidden="true" /></Link>
        <Link className="text-link" href="/">Back to home</Link>
      </div>
    </section>
  )
}
