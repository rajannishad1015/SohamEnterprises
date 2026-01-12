"use client";
import { Leaf, Droplet, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: <Leaf className="w-8 h-8 text-primary" />,
        title: "100% Organic",
        description: "Sourced from the finest organic farms, ensuring no pesticides or harmful chemicals."
    },
    {
        icon: <Droplet className="w-8 h-8 text-primary" />,
        title: "Pure & Potent",
        description: "Steam-distilled to preserve the full therapeutic properties of every plant."
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        title: "Certified Quality",
        description: "Rigorously tested for purity and potency throughout the process."
    }
];

export function Benefits() {
    return (
        <section className="py-24 bg-accent/30">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4"
                    >
                        Why Choose Soham?
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-muted-foreground max-w-2xl mx-auto"
                    >
                        We believe in the power of nature to heal and rejuvenate.
                    </motion.p>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:scale-105 border border-gray-100 flex flex-col items-center text-center group"
                        >
                            <div className="mb-6 bg-accent p-4 rounded-full group-hover:bg-primary/10 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                 </div>
            </div>
        </section>
    )
}
