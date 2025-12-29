"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Utensils, Calendar, Users, MapPin, Star, Quote, ArrowRight, Phone } from "lucide-react"
import { FaGoogle } from "react-icons/fa"

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const heroSlides = [
        { image: "/slides/1.jpg", alt: "Delicious Biryani" },
        { image: "/slides/3.jpg", alt: "Fresh Kebabs" },
        { image: "/slides/5.jpg", alt: "Indian Cuisine" },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [heroSlides.length])

    const features = [
        {
            icon: <Utensils size={32} />,
            title: "Authentic Recipes",
            description: "Traditional Hyderabadi flavors passed down through generations"
        },
        {
            icon: <Calendar size={32} />,
            title: "Event Catering",
            description: "From intimate gatherings to grand celebrations"
        },
        {
            icon: <Users size={32} />,
            title: "Family Dining",
            description: "Warm ambiance perfect for memorable meals"
        },
        {
            icon: <MapPin size={32} />,
            title: "Convenient Delivery",
            description: "Fast and fresh delivery to your doorstep"
        }
    ]

    const testimonials = [
        {
            name: "Mercy N.",
            rating: 5,
            text: "Pista Express is hands down one of the best Indian restaurants on the entire I-20 stretch! The food is always delicious, fresh, and satisfying."
        },
        {
            name: "Michael H.",
            rating: 5,
            text: "I ordered the samosas and the garlic naan and couldn't be happier. The garlic naan definitely tastes very fresh. The staff couldn't have been nicer or more helpful."
        },
        {
            name: "Neal B.",
            rating: 5,
            text: "This place rocks. The food comes out HOT and delicious. This is authentic Indian food at its finest."
        }
    ]

    return (
        <>
            {/* hero */}
            <section className="relative h-[90vh] overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2 }}
                    >
                        <Image
                            src={heroSlides[currentSlide].image}
                            alt={heroSlides[currentSlide].alt}
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>
                
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="relative container-padding mx-auto flex h-full items-center">
                    <div className="max-w-2xl">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <span className="inline-block mb-4 px-4 py-2 bg-primary/20 border border-primary/40 rounded-full text-primary text-sm font-medium backdrop-blur-sm">
                                Fast & Authentic Indian Cuisine
                            </span>
                            
                            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                                Fresh Flavors, <span className="text-primary">Express</span> Service
                            </h1>
                            
                            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
                                Experience the finest Hyderabadi dishes delivered with speed and passion. From our signature Biryanis to sizzling Tandoori specialties.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link 
                                    href="/menu" 
                                    className="group primary-button"
                                >
                                    Explore Menu
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link 
                                    href="/catering" 
                                    className="outline-button !text-white !border-white/20 bg-white/10 backdrop-blur-sm"
                                >
                                    Book Catering
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* slide indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                currentSlide === index ? "w-8 bg-primary" : "w-2 bg-white/50"
                            }`}
                        />
                    ))}
                </div>
            </section>

            {/* features */}
            <section className="py-20 bg-background-dark relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                </div>
                
                <div className="container-padding mx-auto relative">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-medium mb-2 block">Why Choose Us</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The Pista Express Difference</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <motion.div 
                                key={index}
                                className="group relative bg-gradient-to-br from-background-card to-background-card/50 p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-500"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="relative">
                                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                    <p className="text-text-light leading-relaxed">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* popular dishes preview */}
            <section className="py-20 bg-background relative">
                <div className="container-padding mx-auto relative">
                    <motion.div 
                        className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <span className="text-primary font-medium mb-2 block">Our Favorites</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white">Signature Dishes</h2>
                        </div>
                        <Link 
                            href="/menu" 
                            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-primary hover:text-primary-light font-medium transition-colors group"
                        >
                            View Full Menu 
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Hyderabadi Dum Biryani", img: "/Biryani.jpeg", tag: "Signature", description: "Slow-cooked aromatic rice layered with tender meat and exotic spices" },
                            { name: "Seekh Kebabs", img: "/Kebabs.jpeg", tag: "Popular", description: "Succulent minced meat skewers grilled to perfection" },
                            { name: "Haleem", img: "/haleem.png", tag: "Specialty", description: "Rich, slow-cooked delicacy with wheat, lentils and meat" },
                        ].map((dish, i) => (
                            <motion.div
                                key={i}
                                className="group bg-background-card rounded-2xl overflow-hidden border border-white/5"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image src={dish.img} alt={dish.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute top-4 right-4 bg-primary px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg">
                                        {dish.tag}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">{dish.name}</h3>
                                    <p className="text-text-light text-sm mb-4">{dish.description}</p>
                                    <Link href="/menu" className="text-primary font-medium inline-flex items-center gap-2 group/link">
                                        Order Now <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* testimonials */}
            <section className="py-20 bg-background-dark relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
                
                <div className="container-padding mx-auto relative">
                    <div className="text-center mb-16">
                        <span className="text-primary font-medium mb-2 block">Testimonials</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Guests Say</h2>
                        <a 
                            href="https://maps.app.goo.gl/rAMEQgu1kanFSXu28"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#4285f4]/10 hover:bg-[#4285f4]/20 text-[#4285f4] px-4 py-2 rounded-full border border-[#4285f4]/20 transition-all text-sm font-medium"
                        >
                            <FaGoogle />
                            Read more on Google
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="relative bg-background-card p-8 rounded-2xl border border-white/5"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Quote className="text-primary/20 size-10 absolute top-6 right-6" />
                                <div className="mb-6">
                                    <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                                    <div className="flex gap-1 mt-1 text-primary">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} size={14} fill="currentColor" />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-text-light leading-relaxed italic">"{testimonial.text}"</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* catering cta */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary shadow-inner" />
                <div className="absolute inset-0 opacity-20 bg-[url('/food.svg')] bg-repeat" />
                
                <div className="container-padding mx-auto relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Elevate Your Next Event
                            </h2>
                            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                                Whether it's a corporate lunch or a grand wedding, Pista Express Catering brings the authentic Hyderabadi experience to you.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link 
                                    href="/catering" 
                                    className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
                                >
                                    Catering Menu
                                    <ArrowRight size={18} />
                                </Link>
                                <Link 
                                    href="/contact" 
                                    className="bg-transparent text-white px-8 py-4 rounded-full font-semibold border-2 border-white hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}
