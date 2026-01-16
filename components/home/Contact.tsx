"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, ArrowUpRight, Sparkles } from "lucide-react";
import React from 'react';
import { ContactForm } from "./ContactForm";
import { MandalaIcon } from "@/components/ui/MandalaIcon";

export function Contact() {
  return (
    <section className="relative py-12 lg:py-28 bg-[#1A3C2F] overflow-hidden" id="contact">
        {/* Pattern Background */}
        <div className="absolute inset-0 bg-ganesh-pattern-royal opacity-[0.05] pointer-events-none mix-blend-plus-lighter" />
        
        {/* Large Gradient Blobs */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] lg:w-[800px] lg:h-[800px] bg-[#d4af37]/5 rounded-full blur-[80px] lg:blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] bg-[#0F231B] rounded-full blur-[60px] lg:blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 lg:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-stretch">
                {/* Brand/Info Side (Left) */}
                <div className="flex flex-col justify-center text-left">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-4 lg:mb-6"
                    >
                        <div className="h-[1px] w-8 lg:w-12 bg-[#d4af37]" />
                        <span className="text-[#d4af37] font-bold uppercase tracking-[0.2em] lg:tracking-[0.3em] text-[10px] lg:text-xs">
                            Get in Touch
                        </span>
                    </motion.div>

                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl lg:text-6xl font-serif font-medium text-white mb-4 lg:mb-6 leading-tight"
                    >
                        Let's Create <br />
                        <span className="text-[#d4af37] italic">Something Pure.</span>
                    </motion.h2>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/70 text-sm lg:text-lg font-light leading-relaxed mb-8 lg:mb-12 max-w-md"
                    >
                        Whether for bulk inquiries or custom formulations, our team is ready to deliver excellence.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-8"
                    >
                        <ContactRow icon={MapPin} text="Gujarat, India" />
                        <ContactRow icon={Mail} text="info@sohamenterprise.com" />
                        <ContactRow icon={Phone} text="+91 99302 82855" />
                    </motion.div>

                    {/* Decorative Mandala - Hidden on mobile to save space */}
                    <div className="hidden lg:block absolute left-[-100px] bottom-[-100px] text-[#d4af37] opacity-5 pointer-events-none animate-[spin_60s_linear_infinite]">
                        <MandalaIcon className="w-[400px] h-[400px]" />
                    </div>
                </div>

                {/* Form Side (Right) */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-6 lg:p-12 rounded-[1.5rem] lg:rounded-[2rem] relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 bg-[#d4af37]/10 rounded-bl-[80px] lg:rounded-bl-[100px] -mr-6 -mt-6 lg:-mr-8 lg:-mt-8 pointer-events-none" />
                    <ContactForm />
                </motion.div>
            </div>
        </div>
    </section>
  );
}

function ContactRow({ icon: Icon, text }: { icon: any, text: string }) {
    return (
        <div className="flex items-center gap-3 lg:gap-6 group cursor-default">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#1A3C2F] transition-all duration-300 shrink-0">
                <Icon size={18} className="lg:w-5 lg:h-5" />
            </div>
            <div>
                <p className="text-white/80 text-sm lg:text-lg font-light group-hover:text-white transition-colors">{text}</p>
            </div>
        </div>
    );
}
