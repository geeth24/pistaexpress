"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Search, Leaf, Drumstick, Loader2 } from "lucide-react"
import { useState, useEffect } from "react"
import { client } from "@/sanity/lib/client"

interface MenuItem {
    _id: string
    title: string
    type: string
    price: number
}

interface MenuCollection {
    appetizerssides: MenuItem[]
    bread: MenuItem[]
    breakfast: MenuItem[]
    desserts: MenuItem[]
    drinks: MenuItem[]
    entrees: MenuItem[]
    kebabstandoor: MenuItem[]
    kids: MenuItem[]
    noodles: MenuItem[]
    ricedish: MenuItem[]
}

const categoryConfig = [
    { key: "appetizerssides", name: "Appetizers & Sides" },
    { key: "entrees", name: "Entrees" },
    { key: "ricedish", name: "Rice Dishes" },
    { key: "kebabstandoor", name: "Kebabs & Tandoor" },
    { key: "noodles", name: "Noodles" },
    { key: "bread", name: "Breads" },
    { key: "breakfast", name: "Breakfast" },
    { key: "kids", name: "Kids" },
    { key: "desserts", name: "Desserts" },
    { key: "drinks", name: "Drinks" },
]

export default function MenuPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [dietaryFilter, setDietaryFilter] = useState("All")
    const [collections, setCollections] = useState<MenuCollection | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const query = `
        {
            "appetizerssides": *[_type == "appetizerssides"]{
                _id, title, type, price
            },
            "bread": *[_type == 'bread']{
                _id, title, type, price
            },
            "breakfast": *[_type == 'breakfast']{
                _id, title, type, price
            },
            "desserts": *[_type == 'desserts']{
                _id, title, type, price
            },
            "drinks": *[_type == 'drinks']{
                _id, title, type, price
            },
            "entrees": *[_type == 'entrees']{
                _id, title, type, price
            },
            "kebabstandoor": *[_type == 'kebabstandoor']{
                _id, title, type, price
            },
            "kids": *[_type == 'kids']{
                _id, title, type, price
            },
            "noodles": *[_type == 'noodles']{
                _id, title, type, price
            },
            "ricedish": *[_type == 'ricedish']{
                _id, title, type, price
            }
        }`

        client.fetch(query)
            .then((data) => {
                setCollections(data)
                setLoading(false)
            })
            .catch((err) => {
                console.error("Failed to fetch menu:", err)
                setError("Failed to load menu")
                setLoading(false)
            })
    }, [])

    const filterItems = (items: MenuItem[]) => {
        if (!items) return []
        return items.filter(item => {
            const matchesSearch = item.title?.toLowerCase().includes(searchQuery.toLowerCase())
            const itemType = item.type?.toLowerCase() || ""
            const isVeg = itemType.includes("veg") && !itemType.includes("non")
            const isNonVeg = itemType.includes("non") || itemType.includes("chicken") || itemType.includes("mutton") || itemType.includes("goat") || itemType.includes("lamb") || itemType.includes("fish") || itemType.includes("egg")
            
            const matchesDiet = dietaryFilter === "All" || 
                (dietaryFilter === "Vegetarian" && isVeg) ||
                (dietaryFilter === "Non-Vegetarian" && isNonVeg)
            return matchesSearch && matchesDiet
        })
    }

    const isVegetarian = (type: string) => {
        const t = type?.toLowerCase() || ""
        return t.includes("veg") && !t.includes("non")
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="text-center">
                    <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
                    <p className="text-text-light">Loading menu...</p>
                </div>
            </div>
        )
    }

    if (error || !collections) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="text-center">
                    <p className="text-red-500 mb-4">{error || "Failed to load menu"}</p>
                    <button 
                        onClick={() => window.location.reload()}
                        className="primary-button"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        )
    }

    return (
        <>
            {/* hero */}
            <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
                <Image
                    src="/slides/1.jpg"
                    alt="Menu"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary font-medium mb-2 block">Explore Our</span>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Menu</h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
                    </motion.div>
                </div>
            </section>

            {/* search and filters */}
            <section className="py-8 bg-background-dark sticky top-20 z-30 border-b border-white/5">
                <div className="container-padding mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="relative w-full max-w-md">
                            <input
                                type="text"
                                placeholder="Search for dishes..."
                                className="w-full rounded-full border border-white/10 bg-background-card py-3 pl-12 pr-4 text-white placeholder-text-light focus:border-primary focus:outline-none"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light" size={20} />
                        </div>
                        
                        <div className="flex gap-3">
                            {["All", "Vegetarian", "Non-Vegetarian"].map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setDietaryFilter(filter)}
                                    className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all ${
                                        dietaryFilter === filter
                                            ? "bg-primary text-white shadow-md"
                                            : "bg-background-card text-text-light hover:bg-white/10"
                                    }`}
                                >
                                    {filter === "Vegetarian" && <Leaf size={16} />}
                                    {filter === "Non-Vegetarian" && <Drumstick size={16} />}
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* menu items */}
            <section className="py-16 bg-background">
                <div className="container-padding mx-auto">
                    {categoryConfig.map((category, catIndex) => {
                        const items = filterItems(collections[category.key as keyof MenuCollection] || [])
                        if (items.length === 0) return null
                        
                        return (
                            <motion.div 
                                key={category.key}
                                id={category.key}
                                className="mb-16"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: catIndex * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <h2 className="text-3xl font-bold text-white">{category.name}</h2>
                                    <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                    {items.map((item, index) => (
                                        <motion.div
                                            key={item._id || item.title}
                                            className="group bg-background-card rounded-xl p-5 border border-white/5 hover:border-primary/20 transition-all"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: index * 0.02 }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="flex items-start gap-2 mb-2">
                                                {isVegetarian(item.type) ? (
                                                    <span className="mt-1 flex-shrink-0 w-4 h-4 rounded border border-green-500 flex items-center justify-center">
                                                        <span className="w-2 h-2 rounded-full bg-green-500" />
                                                    </span>
                                                ) : (
                                                    <span className="mt-1 flex-shrink-0 w-4 h-4 rounded border border-red-500 flex items-center justify-center">
                                                        <span className="w-2 h-2 rounded-full bg-red-500" />
                                                    </span>
                                                )}
                                                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                            </div>
                                            {item.type && (
                                                <span className="text-xs text-text-light">{item.type}</span>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )
                    })}
                    
                    {categoryConfig.every(cat => filterItems(collections[cat.key as keyof MenuCollection] || []).length === 0) && (
                        <div className="text-center py-20">
                            <p className="text-text-light text-lg">No dishes found matching your search.</p>
                            <button 
                                onClick={() => { setSearchQuery(""); setDietaryFilter("All"); }}
                                className="mt-4 text-primary hover:underline"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}
