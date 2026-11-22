"use client"

import { Search } from "lucide-react"
import { useState } from "react"
import { pickupSnapshot, type MenuItem, type MenuSection } from "@/lib/menu"
import { restaurant } from "@/lib/restaurant"

const diets = ["All dishes", "Vegetarian", "Non-vegetarian"] as const
type Diet = typeof diets[number]

function matchesDiet(type: string, diet: Diet) {
  const normalized = type.toLowerCase()
  if (diet === "Vegetarian") return normalized.includes("veg") && !normalized.includes("non")
  if (diet === "Non-vegetarian") return /non|chicken|mutton|goat|lamb|seafood|fish|egg/.test(normalized)
  return true
}

function MenuItems({ items }: { items: MenuItem[] }) {
  if (items.length === 0) return null

  return (
    <ul className="menu-items">
      {items.map(({ _id, title, type }) => (
        <li key={_id}><h3>{title}</h3>{type && <small>{type}</small>}</li>
      ))}
    </ul>
  )
}

export function MenuCatalog({ sections }: { sections: MenuSection[] }) {
  const [search, setSearch] = useState("")
  const [diet, setDiet] = useState<Diet>("All dishes")
  const keyword = search.trim().toLowerCase()
  const matches = sections.map((section) => ({
    ...section,
    items: section.items.filter((item) => item.title.toLowerCase().includes(keyword) && matchesDiet(item.type ?? "", diet)),
  })).filter(({ items }) => items.length > 0)

  return (
    <>
      <section className="menu-tools" aria-label="Menu filters">
        <div className="wrap">
          <label className="menu-search">
            <Search aria-hidden="true" size={18} />
            <span className="sr-only">Search for a dish</span>
            <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search for a dish" />
          </label>
          <div className="menu-filters" aria-label="Dietary preference" role="group">
            {diets.map((option) => (
              <button key={option} type="button" aria-pressed={option === diet} onClick={() => setDiet(option)}>{option}</button>
            ))}
          </div>
        </div>
      </section>
      <div className="wrap menu-content">
        {matches.length > 0 ? (
          <>
            <nav className="menu-category" aria-label="Menu sections">
              <p>Menu sections</p>
              {matches.map(({ key, name }) => <a href={`#${key}`} key={key}>{name}</a>)}
            </nav>
            <div className="menu-sections">
              {matches.map(({ key, name, items }) => {
                const restaurantItems = items.filter(({ source }) => source !== "pickup")
                const pickupItems = items.filter(({ source }) => source === "pickup")

                return (
                  <section id={key} className="menu-section" key={key} aria-labelledby={`${key}-heading`}>
                    <h2 id={`${key}-heading`}>{name}</h2>
                    <MenuItems items={restaurantItems} />
                    {pickupItems.length > 0 && (
                      <>
                        <p className="menu-source-note">
                          <a href={restaurant.order}>DoorDash pickup examples</a> · checked <time dateTime={pickupSnapshot.date}>{pickupSnapshot.label}</time>
                        </p>
                        <MenuItems items={pickupItems} />
                      </>
                    )}
                  </section>
                )
              })}
            </div>
          </>
        ) : (
          <div role="status" className="menu-message">
            <p>No dishes match your search.</p>
            <button type="button" className="text-link" onClick={() => { setSearch(""); setDiet("All dishes") }}>Clear filters</button>
          </div>
        )}
      </div>
    </>
  )
}
