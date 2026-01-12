"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from 'react';
import React from 'react';

export function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#F5F5F0]" id="about">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
            {/* Cinematic Grain Overlay */}
            <div className="absolute inset-0 z-50 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-0 contrast-150"></div>
            
            <div className="relative w-full h-full max-w-[1600px] mx-auto">
                {/* Scene 1: The Beginning (0 - 0.33) */}
                <Scene 
                    range={[0, 0.33]} 
                    progress={smoothProgress} 
                    year="2020"
                    title="The Seed"
                    desc="In the heart of Gujarat, a vision focused on purity was born. We started with a single promise: uncompromised quality."
                    images={[
                        "https://images.unsplash.com/photo-1628188554988-466fa850209c?q=80&w=2070&auto=format&fit=crop", // Main: Farm
                        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1740&auto=format&fit=crop", // Detail: Leaves
                        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1740&auto=format&fit=crop"  // Detail: Nature
                    ]}
                />

                {/* Scene 2: The Expansion (0.33 - 0.66) */}
                <Scene 
                    range={[0.33, 0.66]} 
                    progress={smoothProgress} 
                    year="2022"
                    title="The Refinement"
                    desc="Investing in state-of-the-art steam distillation technology allowed us to reach pharmaceutical-grade mastery."
                     images={[
                        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1740&auto=format&fit=crop", // Main: Lab/Glass
                        "https://images.unsplash.com/photo-1615486511484-92e172cc416d?q=80&w=2072&auto=format&fit=crop", // Detail: Chemicals/Process
                        "https://images.unsplash.com/photo-1579165466741-7f35a4755657?q=80&w=1587&auto=format&fit=crop"  // Detail: Science
                    ]}
                />

                {/* Scene 3: The Future (0.66 - 1) */}
                <Scene 
                    range={[0.66, 1]} 
                    progress={smoothProgress} 
                    year="2024"
                    title="The Global Stage"
                    desc="Today, Soham Enterprise stands as a beacon of trust, exporting India's finest Menthol crystals to the world."
                     images={[
                        "https://images.unsplash.com/photo-1595079676339-1534801fafde?q=80&w=2070&auto=format&fit=crop", // Main: Export/Container
                        "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=1742&auto=format&fit=crop", // Detail: Ship
                        "https://images.unsplash.com/photo-1555447405-4929a8b19171?q=80&w=2070&auto=format&fit=crop"  // Detail: Clean Abstract
                    ]}
                />
            </div>

            {/* Persistent Progress Bar */}
            <div className="absolute bottom-12 left-12 z-40 flex items-center gap-4">
                <span className="text-[10px] uppercase tracking-widest text-[#1A3C2F]/50 font-bold">Timeline</span>
                <div className="w-32 h-[1px] bg-[#1A3C2F]/20 relative overflow-hidden">
                    <motion.div 
                        style={{ scaleX: smoothProgress }}
                        className="absolute inset-y-0 left-0 w-full bg-[#1A3C2F] origin-left"
                    />
                </div>
            </div>
        </div>
    </section>
  );
}

function Scene({ range, progress, year, title, desc, images }: { range: [number, number], progress: any, year: string, title: string, desc: string, images: string[] }) {
    const opacity = useTransform(progress, [range[0], range[0] + 0.05, range[1] - 0.05, range[1]], [0, 1, 1, 0]);
    const blur = useTransform(progress, [range[0], range[0] + 0.1, range[1] - 0.1, range[1]], [10, 0, 0, 10]);
    const scale = useTransform(progress, [range[0], range[1]], [1.05, 1]);
    const yText = useTransform(progress, [range[0], range[0] + 0.1, range[1] - 0.1, range[1]], [50, 0, 0, -50]);
    
    // Parallax for secondary images
    const ySecondary = useTransform(progress, [range[0], range[1]], [100, -50]);
    const yTertiary = useTransform(progress, [range[0], range[1]], [150, -100]);

    return (
        <motion.div 
            style={{ opacity }}
            className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none p-6 lg:p-12"
        >
            <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                
                {/* Text Content */}
                <motion.div style={{ y: yText }} className="relative z-20 flex flex-col justify-center order-2 lg:order-1">
                    <div className="pl-4 lg:pl-12 border-l-2 border-[#1A3C2F]/10">
                        <span className="block text-[#1A3C2F] font-bold tracking-[0.4em] text-xs uppercase mb-6">
                            Our Heritage
                        </span>
                        
                        <div className="relative mb-6">
                            <h2 className="text-[80px] lg:text-[120px] font-serif font-bold text-[#E5E5E0] leading-none absolute -top-10 -left-6 -z-10 select-none">
                                {year}
                            </h2>
                            <h3 className="text-5xl lg:text-7xl font-serif text-[#1A3C2F] relative z-10 leading-tight">
                                {title}
                            </h3>
                        </div>

                        <p className="text-lg text-[#1A3C2F]/70 font-light leading-relaxed max-w-md">
                            {desc}
                        </p>
                    </div>
                </motion.div>

                {/* Image Composition - Collage */}
                <motion.div 
                    style={{ filter: useTransform(blur, (b) => `blur(${b}px)`) }}
                    className="relative w-full h-full order-1 lg:order-2 flex items-center justify-center"
                >
                    {/* Main Image */}
                    <div className="relative w-[80%] aspect-[3/4] shadow-2xl z-10 overflow-hidden rounded-sm">
                         <motion.img 
                            style={{ scale }}
                            src={images[0]} 
                            alt={title} 
                            className="w-full h-full object-cover" 
                        />
                         <div className="absolute inset-0 bg-[#1A3C2F]/5 mix-blend-multiply" />
                    </div>

                    {/* Secondary Image - Top Right Floating */}
                    {images[1] && (
                        <motion.div 
                            style={{ y: ySecondary }}
                            className="absolute -right-4 top-10 w-[40%] aspect-square shadow-xl z-20 border-4 border-[#F5F5F0] overflow-hidden rounded-sm"
                        >
                            <img src={images[1]} alt="Detail" className="w-full h-full object-cover" />
                        </motion.div>
                    )}

                    {/* Tertiary Image - Bottom Left Floating */}
                    {images[2] && (
                        <motion.div 
                            style={{ y: yTertiary }}
                            className="absolute -left-8 bottom-20 w-[35%] aspect-[4/5] shadow-xl z-30 border-4 border-[#F5F5F0] overflow-hidden rounded-sm bg-white p-2"
                        >
                             <div className="w-full h-full overflow-hidden">
                                <img src={images[2]} alt="Detail" className="w-full h-full object-cover grayscale opacity-80" />
                             </div>
                        </motion.div>
                    )}
                </motion.div>

            </div>
        </motion.div>
    );
}
