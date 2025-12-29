"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react"
import { FaYelp } from "react-icons/fa"

const contactMethods = [
    {
        icon: <Phone size={24} />,
        title: "Phone",
        value: "+1 (432) 897-4533",
        href: "tel:+14328974533"
    },
    {
        icon: <Mail size={24} />,
        title: "Email",
        value: "pistamidland@gmail.com",
        href: "mailto:pistamidland@gmail.com"
    },
    {
        icon: <MapPin size={24} />,
        title: "Address",
        value: "3312 Fortress Dr, Midland, TX 79706",
        href: "https://www.google.com/maps/search/?api=1&query=Pista+Express+Midland"
    }
]

export default function ContactPage() {
    return (
        <>
            {/* hero */}
            <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
                <Image
                    src="/slides/8.jpg"
                    alt="Contact Us"
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
                        <span className="text-primary font-medium mb-2 block">Get In Touch</span>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
                    </motion.div>
                </div>
            </section>

            {/* contact info */}
            <section className="py-20 bg-background">
                <div className="container-padding mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* left */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-primary font-medium mb-2 block">Reach Out</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">We'd Love to Hear From You</h2>
                            <p className="text-text-light mb-8 leading-relaxed">
                                Have questions about our menu, catering services, or want to make a reservation? We're here to help. Reach out to us through any of the methods below.
                            </p>

                            <div className="space-y-4 mb-8">
                                {contactMethods.map((method, index) => (
                                    <Link
                                        key={index}
                                        href={method.href}
                                        className="flex items-center gap-4 p-4 bg-background-card rounded-xl border border-white/5 hover:border-primary/20 transition-all group"
                                    >
                                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                            {method.icon}
                                        </div>
                                        <div>
                                            <p className="text-text-light text-sm">{method.title}</p>
                                            <p className="text-white font-medium">{method.value}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>

{/*                             <div className="bg-background-card rounded-xl p-6 border border-white/5">
                                <div className="flex items-center gap-3 mb-4">
                                    <Clock size={20} className="text-primary" />
                                    <h3 className="text-lg font-semibold text-white">Opening Hours</h3>
                                </div>
                                <div className="space-y-2 text-text-light">
                                    <div className="flex justify-between">
                                        <span>Monday - Sunday</span>
                                        <span className="text-white">11:00 AM - 10:00 PM</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <p className="text-text-light mb-4">Follow us on social media</p>
                                <div className="flex gap-3">
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
                                            className="w-12 h-12 bg-white/5 hover:bg-primary rounded-xl flex items-center justify-center text-text-light hover:text-white transition-all"
                                            aria-label={social.label}
                                        >
                                            {social.icon}
                                        </Link>
                                    ))}
                                </div>
                            </div> */}
                        </motion.div>

                        {/* right - map */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="h-full min-h-[500px] bg-background-card rounded-2xl border border-white/5 overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3373.8!2d-102.0!3d31.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDU3JzAwLjAiTiAxMDLCsDAwJzAwLjAiVw!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus&q=3312+Fortress+Dr+Midland+TX+79706"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, minHeight: "500px" }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Pista Express Location"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}
