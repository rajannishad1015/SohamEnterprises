"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Send, MapPin, Phone, Mail, ArrowUpRight, Sparkles } from "lucide-react";
import React, { useRef, useState } from 'react';
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section className="min-h-screen py-16 bg-[#020406] text-white relative flex items-center justify-center overflow-hidden" id="contact">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-[#020406]">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#2c4a3b]/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#34d399]/10 rounded-full blur-[120px] animate-pulse delay-1000" />
            <div className="absolute top-[20%] right-[20%] w-[20%] h-[20%] bg-[#d4af37]/10 rounded-full blur-[80px] animate-bounce duration-[10000ms]" />
        </div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
                 backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)`, 
                 backgroundSize: '40px 40px' 
             }} 
        />

        <div className="container mx-auto px-6 relative z-10 perspective-1000">
            <TiltCard>
                <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
                    {/* Brand Side (Left) */}
                    <div className="lg:col-span-2 bg-[#0a1f1c]/80 p-10 lg:p-14 flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                        
                        <div>
                            <div className="flex items-center gap-2 mb-8 text-[#34d399]">
                                <Sparkles size={20} />
                                <span className="text-xs font-bold tracking-[0.3em] uppercase">Premium</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-serif font-medium leading-tight mb-6">
                                Crystal Clear <br/> <span className="text-white/50 italic">Connection.</span>
                            </h2>
                            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                                Experience the purity of our Menthol crystals. Reach out for bulk inquiries or custom formulations.
                            </p>
                        </div>

                        <div className="space-y-8 mt-12">
                            <ContactRow icon={MapPin} text="Gujarat, India" />
                            <ContactRow icon={Mail} text="info@sohamenterprise.com" />
                            <ContactRow icon={Phone} text="+91 99302 82855" />
                        </div>
                    </div>

                    {/* Form Side (Right) */}
                    {/* Form Side (Right) */}
                    <div className="lg:col-span-3 bg-white/5 p-10 lg:p-14 relative backdrop-blur-xl">
                        <ContactForm />
                    </div>
                </div>
            </TiltCard>
        </div>
    </section>
  );
}

function contactRow({ icon: Icon, text }: { icon: any, text: string }) {
    return (
        <div className="flex items-center gap-4 text-white/80 group cursor-default">
            <div className="p-2 border border-white/10 rounded-lg group-hover:border-[#34d399]/50 group-hover:bg-[#34d399]/10 transition-colors">
                <Icon size={16} />
            </div>
            <span className="text-sm tracking-wide font-light">{text}</span>
        </div>
    );
}

// Capitalize helper component name for consistency
const ContactRow = contactRow;

function CrystalInput({ label, type = "text" }: { label: string, type?: string }) {
    return (
        <div className="space-y-2 group">
            <label className="text-xs uppercase font-bold text-white/40 tracking-widest pl-1 group-focus-within:text-[#34d399] transition-colors">{label}</label>
            <input 
                type={type} 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-[#34d399]/50 focus:bg-white/10 transition-all"
            />
        </div>
    );
}

function TiltCard({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#050505]/50 backdrop-blur-md"
        >
            <div style={{ transform: "translateZ(50px)" }}>
                {children}
            </div>
        </motion.div>
    );
}
