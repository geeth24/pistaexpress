"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Utensils, Building, Home, BookOpen, Phone, Menu, X } from "lucide-react"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeNav)
        return () => {
            window.removeEventListener("scroll", changeNav)
        }
    }, [])

    const navLinks = [
        { name: "Home", href: "/", icon: <Home size={18} /> },
        { name: "Menu", href: "/menu", icon: <Utensils size={18} /> },
        { name: "Catering", href: "/catering", icon: <BookOpen size={18} /> },
        { name: "About Us", href: "/aboutus", icon: <Building size={18} /> },
    ]

    return (
        <nav
            className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 border-b ${
                scrollNav || isOpen
                    ? "bg-background-dark/95 backdrop-blur-xl shadow-xl border-white/5"
                    : "bg-gradient-to-b from-black/50 to-transparent border-transparent"
            }`}
        >
            <div className="container-padding mx-auto flex h-20 items-center justify-between">
                <Link href="/" className="flex items-center group">
                    <Image
                        src="/PistaExpress.png"
                        alt="Pista Express Logo"
                        width={140}
                        height={46}
                        className="cursor-pointer transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden items-center space-x-2 lg:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative px-4 py-2 text-white/80 hover:text-white transition-colors group"
                        >
                            <span className="flex items-center gap-2">
                                <span className="text-primary/70 group-hover:text-primary transition-colors">{link.icon}</span>
                                <span className="font-medium">{link.name}</span>
                            </span>
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-primary rounded-full transition-all duration-300 group-hover:w-3/4"></span>
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="ml-4 flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                    >
                        <Phone size={16} />
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="relative w-10 h-10 flex flex-col items-center justify-center lg:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="lg:hidden overflow-hidden"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="container-padding flex flex-col py-6 border-t border-white/10">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="flex items-center gap-4 py-4 text-white/80 hover:text-white border-b border-white/5 transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                            {link.icon}
                                        </span>
                                        <span className="text-lg font-medium">{link.name}</span>
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Link
                                    href="/contact"
                                    className="mt-6 flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-medium transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Phone size={18} />
                                    Contact Us
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
