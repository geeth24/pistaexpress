"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Users, Utensils, Calendar, Phone, Mail, ArrowRight, Check } from "lucide-react"

const cateringFeatures = [
    {
        icon: <Users size={32} />,
        title: "Any Event Size",
        description: "From intimate gatherings of 20 to grand celebrations of 500+"
    },
    {
        icon: <Utensils size={32} />,
        title: "Custom Menus",
        description: "Tailored menu options to match your preferences and budget"
    },
    {
        icon: <Calendar size={32} />,
        title: "Flexible Scheduling",
        description: "Available for breakfast, lunch, dinner, and late-night events"
    }
]

const galleryImages = [
    { src: "/slides/1.jpg", alt: "Biryani Setup" },
    { src: "/slides/3.jpg", alt: "Kebab Station" },
    { src: "/slides/5.jpg", alt: "Tandoor Spread" },
    { src: "/slides/8.jpg", alt: "Event Setup" },
]

export default function CateringPage() {
    return (
        <>
            {/* hero */}
            <section className="relative min-h-[80vh] w-full overflow-hidden flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/slides/1.jpg" 
                        alt="Catering Service" 
                        fill 
                        className="object-cover" 
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
                </div>
                
                <div className="container-padding relative z-10 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block mb-4 px-4 py-2 bg-primary/20 border border-primary/40 rounded-full text-primary text-sm font-medium">
                                Professional Catering
                            </span>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Unforgettable <span className="text-primary">Events</span> Start Here
                            </h1>
                            <p className="text-lg text-white/80 mb-8 max-w-xl leading-relaxed">
                                From weddings to corporate gatherings, our authentic Hyderabadi cuisine transforms any event into a culinary celebration. Let us bring the flavors of India to your special occasion.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a 
                                    href="tel:+14328974533"
                                    className="group primary-button"
                                >
                                    <Phone size={18} />
                                    Get a Quote
                                </a>
                                <Link 
                                    href="/contact"
                                    className="outline-button !text-white !border-white/20 bg-white/10 backdrop-blur-sm"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            className="hidden lg:grid grid-cols-2 gap-4"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="space-y-4">
                                <div className="relative h-48 rounded-2xl overflow-hidden">
                                    <Image src="/slides/3.jpg" alt="Biryani" fill className="object-cover" />
                                </div>
                                <div className="relative h-64 rounded-2xl overflow-hidden">
                                    <Image src="/slides/5.jpg" alt="Kebabs" fill className="object-cover" />
                                </div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="relative h-64 rounded-2xl overflow-hidden">
                                    <Image src="/slides/8.jpg" alt="Event Setup" fill className="object-cover" />
                                </div>
                                <div className="relative h-48 rounded-2xl overflow-hidden">
                                    <Image src="/slides/1.jpg" alt="Desserts" fill className="object-cover" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* features */}
            <section className="py-16 bg-background-dark relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                </div>
                
                <div className="container-padding mx-auto relative">
                    <div className="grid md:grid-cols-3 gap-6">
                        {cateringFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-background-card p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-text-light">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* gallery */}
            <section className="py-20 bg-background">
                <div className="container-padding mx-auto">
                    <motion.div 
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-medium mb-2 block">Our Work</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Catering Gallery</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
                    </motion.div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {galleryImages.map((image, i) => (
                            <motion.div 
                                key={i} 
                                className="group relative aspect-square overflow-hidden rounded-2xl"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <p className="text-white font-semibold">{image.alt}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* cta */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary" />
                
                <div className="container-padding mx-auto relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Ready to Plan Your Event?
                            </h2>
                            <p className="text-white/90 text-lg mb-8">
                                Contact us today to discuss your catering needs. Our team will work with you to create a customized menu that fits your event perfectly.
                            </p>
                            
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    {[
                                        "Customized menu planning",
                                        "Professional setup & service",
                                        "Flexible pricing options",
                                        "Delivery & pickup available"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-white">
                                            <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                                                <Check size={14} />
                                            </span>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a 
                                        href="tel:+14328974533" 
                                        className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105"
                                    >
                                        <Phone size={18} />
                                        Call Us
                                    </a>
                                    <a 
                                        href="mailto:pistamidland@gmail.com" 
                                        className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-4 rounded-full font-semibold border-2 border-white hover:bg-white/10 transition-all duration-300"
                                    >
                                        <Mail size={18} />
                                        Email Us
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}
