"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section className="py-24 bg-accent/30 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Text Content */}
            <div className="w-full lg:w-1/2">
                <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-secondary font-bold uppercase tracking-[0.2em] text-xs block mb-4"
                >
                    Our Heritage
                </motion.span>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-8 leading-[1.2]"
                >
                    Crafting Purity Since 2024
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-lg text-muted-foreground mb-6 leading-relaxed"
                >
                    At Soham Enterprise, we believe that nature holds the key to true wellness. Our journey began with a simple mission: to bridge the gap between ancient botanical wisdom and modern purity standards.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="space-y-4 mb-8"
                >
                    <div className="flex items-center gap-4">
                        <CheckCircle2 className="text-secondary" />
                        <span className="text-primary font-medium">100% Organic & Ethically Sourced</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <CheckCircle2 className="text-secondary" />
                        <span className="text-primary font-medium">Advanced Steam Distillation Process</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <CheckCircle2 className="text-secondary" />
                        <span className="text-primary font-medium">Quality Tested for Therapeutic Grade</span>
                    </div>
                </motion.div>

                <motion.button 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="bg-primary text-white px-8 py-3 font-medium hover:bg-primary/90 transition-all rounded-none shadow-lg hover:shadow-xl"
                >
                    Read Our Story
                </motion.button>
            </div>

            {/* Visual Side */}
            <div className="w-full lg:w-1/2 relative lg:h-[600px] flex items-center justify-center">
                 <div className="relative w-full h-[400px] lg:h-[500px]">
                    {/* Artistic Composition of images/shapes since we don't have real assets yet */}
                    <div className="absolute inset-0 bg-white border border-gray-200 p-2 shadow-2xl rotate-3">
                         <div className="w-full h-full bg-gray-100 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply" />
                            <span className="font-serif text-6xl text-primary/10 font-bold italic">Soham</span>
                         </div>
                    </div>
                     <div className="absolute inset-0 bg-secondary/10 border border-secondary/20 -rotate-3 -z-10" />
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
}
