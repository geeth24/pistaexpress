"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Users, Clock, Heart } from "lucide-react"

const values = [
    {
        icon: <Award size={32} />,
        title: "Authenticity",
        description: "We stay true to traditional Hyderabadi recipes passed down through generations."
    },
    {
        icon: <Users size={32} />,
        title: "Community",
        description: "We believe in bringing people together through the joy of shared meals."
    },
    {
        icon: <Clock size={32} />,
        title: "Speed",
        description: "Express service without compromising on quality or taste."
    },
    {
        icon: <Heart size={32} />,
        title: "Passion",
        description: "Every dish is prepared with love and dedication to culinary excellence."
    }
]

export default function AboutPage() {
    return (
        <>
            {/* hero */}
            <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
                <Image
                    src="/slides/5.jpg"
                    alt="About Us"
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
                        <span className="text-primary font-medium mb-2 block">Our Story</span>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">About Us</h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
                    </motion.div>
                </div>
            </section>

            {/* story */}
            <section className="py-20 bg-background">
                <div className="container-padding mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-primary font-medium mb-2 block">Who We Are</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">A Legacy of Flavor</h2>
                            <div className="space-y-4 text-text-light leading-relaxed">
                                <p>
                                    Pista Express was born from a simple dream: to bring the authentic flavors of Hyderabad to everyone, fast and fresh. Our journey began with a passion for the rich culinary traditions of India's City of Pearls.
                                </p>
                                <p>
                                    Every dish we serve tells a story - of aromatic spices carefully blended, of recipes perfected over generations, and of our commitment to delivering restaurant-quality meals with express convenience.
                                </p>
                                <p>
                                    From our signature biryanis to our sizzling kebabs, we take pride in using only the finest ingredients and time-honored cooking techniques that make Hyderabadi cuisine world-renowned.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative h-[500px] rounded-2xl overflow-hidden">
                                <Image
                                    src="/slides/3.jpg"
                                    alt="Our Kitchen"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-2xl shadow-xl">
                                <div className="text-4xl font-bold">10+</div>
                                <div className="text-sm opacity-90">Years of Excellence</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* values */}
            <section className="py-20 bg-background-dark">
                <div className="container-padding mx-auto">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-medium mb-2 block">What Drives Us</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Values</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="bg-background-card p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-all text-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-6">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                                <p className="text-text-light">{value.description}</p>
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
                        <span className="text-primary font-medium mb-2 block">Glimpse Into</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our World</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {["/slides/1.jpg", "/slides/3.jpg", "/slides/5.jpg", "/slides/8.jpg", "/slides/1.jpg", "/slides/3.jpg"].map((src, i) => (
                            <motion.div
                                key={i}
                                className="relative aspect-square rounded-2xl overflow-hidden group"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <Image
                                    src={src}
                                    alt={`Gallery ${i + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
