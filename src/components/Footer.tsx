"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"
import { FaYelp } from "react-icons/fa"

function Footer() {
    const currentYear = new Date().getFullYear()
    
    return (
        <footer className="relative bg-background-dark overflow-hidden">
            {/* decorative elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            
            <div className="container-padding mx-auto pt-20 pb-8 relative">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                src="/PistaExpress.png"
                                alt="Pista Express Logo"
                                width={160}
                                height={53}
                            />
                        </Link>
                        <p className="text-text-light leading-relaxed mb-6">
                            Authentic Indian cuisine delivered fast and fresh. Experience the true flavors of Hyderabad with our specialty dishes and warm hospitality.
                        </p>
{/*                         <div className="flex gap-3">
                            {[
                                { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
                                { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
                                { icon: <FaYelp size={20} />, href: "#", label: "Yelp" },
                            ].map((social) => (
                                <Link 
                                    key={social.label}
                                    href={social.href} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/5 hover:bg-primary rounded-xl flex items-center justify-center text-text-light hover:text-white transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div> */}
                    </div>

                    {/* quick links */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: "Home", href: "/" },
                                { name: "Menu", href: "/menu" },
                                { name: "Catering", href: "/catering" },
                                { name: "About Us", href: "/aboutus" },
                                { name: "Contact Us", href: "/contact" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link 
                                        href={link.href} 
                                        className="group flex items-center gap-2 text-text-light hover:text-primary transition-colors"
                                    >
                                        <ArrowRight size={12} className="text-primary/50 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

{/*                     <div>
                        <h3 className="text-lg font-bold text-white mb-6">Opening Hours</h3>
                        <div className="bg-white/5 rounded-xl p-5 border border-white/5">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                    <Clock size={18} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-white font-medium">Daily</p>
                                    <p className="text-text-light text-sm">11:00 AM - 10:00 PM</p>
                                </div>
                            </div>
                            <p className="text-text-light text-sm">
                                Open all week for your convenience. Takeout and catering available.
                            </p>
                        </div>
                    </div> */}

                    {/* contact */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link 
                                    href="https://www.google.com/maps/search/?api=1&query=Pista+Express+Midland" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-3 text-text-light hover:text-primary transition-colors group"
                                >
                                    <span className="w-10 h-10 bg-white/5 group-hover:bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                                        <MapPin size={18} className="text-primary" />
                                    </span>
                                    <span className="pt-2 text-sm">3312 Fortress Dr, Midland, TX 79706</span>
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="tel:+14328974533" 
                                    className="flex items-center gap-3 text-text-light hover:text-primary transition-colors group"
                                >
                                    <span className="w-10 h-10 bg-white/5 group-hover:bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                                        <Phone size={18} className="text-primary" />
                                    </span>
                                    <span className="text-sm">+1 (432) 897-4533</span>
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="mailto:pistamidland@gmail.com" 
                                    className="flex items-center gap-3 text-text-light hover:text-primary transition-colors group"
                                >
                                    <span className="w-10 h-10 bg-white/5 group-hover:bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                                        <Mail size={18} className="text-primary" />
                                    </span>
                                    <span className="text-sm">pistamidland@gmail.com</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* bottom */}
                <div className="mt-16 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <p className="text-sm text-text-light">
                            © {currentYear} Pista Express. All rights reserved.
                        </p>
                        <p className="text-sm text-text-light">
                            Built by{" "}
                            <Link 
                                href="https://geeth.co" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary-light transition-colors"
                            >
                                Geeth
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
