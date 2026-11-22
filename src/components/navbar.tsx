"use client"

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react"
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { useEffect, useState, useSyncExternalStore } from "react"
import { navigation, restaurant } from "@/lib/restaurant"

function subscribeToHydration() {
  return () => {}
}

function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme()
  const hydrated = useSyncExternalStore(subscribeToHydration, () => true, () => false)

  return (
    <button
      className="icon-button theme-button"
      type="button"
      aria-label="Toggle color theme"
      aria-pressed={hydrated ? resolvedTheme === "dark" : undefined}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Moon className="theme-moon" aria-hidden="true" />
      <Sun className="theme-sun" aria-hidden="true" />
    </button>
  )
}

function MobileNavigation({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 951px)")
    function closeOnDesktop(event: MediaQueryListEvent) {
      if (event.matches) setOpen(false)
    }
    desktop.addEventListener("change", closeOnDesktop)
    return () => desktop.removeEventListener("change", closeOnDesktop)
  }, [])

  return (
    <>
      <button
        className="icon-button mobile-toggle"
        type="button"
        aria-label="Open navigation"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <Menu aria-hidden="true" />
      </button>
      <Dialog open={open} onClose={setOpen} className="mobile-dialog">
        <DialogBackdrop className="mobile-backdrop" transition />
        <DialogPanel className="mobile-panel" transition>
          <div className="mobile-top">
            <DialogTitle className="sr-only">Pista Express navigation</DialogTitle>
            <span className="wordmark">
              <Image src="/PistaExpress.png" alt="" width={1024} height={464} unoptimized />
            </span>
            <button className="icon-button" type="button" aria-label="Close navigation" onClick={() => setOpen(false)}>
              <X aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            {navigation.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {label} <ArrowUpRight aria-hidden="true" />
              </Link>
            ))}
          </nav>
          <a className="button" href={restaurant.order} onClick={() => setOpen(false)}>
            Order pickup <ArrowUpRight aria-hidden="true" />
          </a>
        </DialogPanel>
      </Dialog>
    </>
  )
}

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="wordmark" href="/" aria-label="Pista Express home">
          <Image src="/PistaExpress.png" alt="" width={1024} height={464} preload unoptimized />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(({ href, label }) => (
            <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <ThemeButton />
          <a className="button header-order" href={restaurant.order}>
            Order pickup <ArrowUpRight aria-hidden="true" />
          </a>
          <MobileNavigation key={pathname} pathname={pathname} />
        </div>
      </div>
    </header>
  )
}
