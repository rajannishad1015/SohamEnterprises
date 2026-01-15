"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf, Droplets, Sparkles } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative lg:min-h-screen flex flex-col lg:flex-row bg-[#fdfcf8] overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-ganesh-pattern opacity-100 mix-blend-multiply z-0" />
      
      {/* LEFT CONTENT SIDE */}
      <div className="w-full lg:w-[55%] flex items-center justify-start p-6 lg:p-12 xl:p-20 pt-32 lg:pt-28 relative z-10">
        <div className="max-w-xl text-left">
          
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
             className="flex items-center gap-3 mb-6"
          >
            <div className="h-[2px] w-12 bg-secondary" />
            <span className="text-secondary font-bold uppercase tracking-[0.2em] text-xs">
              Est. 2024
            </span>
          </motion.div>


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-primary mb-6 leading-[1.1]"
          >
            Pure Nature <br />
            <span className="italic font-light text-primary/80">Distilled.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg"
          >
            Experience the profound healing power of 100% organic essential oils. 
            Ethically sourced from the world's most pristine environments.
          </motion.p>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.6 }}
             className="flex flex-wrap gap-4"
          >
            <button className="bg-primary text-white px-8 py-4 rounded-none border border-primary text-sm md:text-base font-medium transition-all hover:bg-primary/90 hover:shadow-xl flex items-center gap-3 w-full md:w-auto justify-center">
              Explore Collection
              <ArrowRight size={18} />
            </button>
          </motion.div>

          {/* Quick Stats / Trust */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 md:mt-16 flex items-center gap-8 border-t border-gray-200 pt-8"
          >
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-primary font-semibold">
                    <Leaf size={18} />
                    <span>Organic</span>
                </div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Certified Pure</span>
            </div>
            <div className="w-[1px] h-8 bg-gray-200" />
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-primary font-semibold">
                    <Droplets size={18} />
                    <span>Potent</span>
                </div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Therapeutic Grade</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* RIGHT IMAGE SIDE */}
      <div className="hidden lg:block w-full lg:w-1/2 relative h-auto">
        <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 overflow-hidden"
        >
            <Image
                src="/hero-bg.png"
                alt="Organic Essential Oil Bottle"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
            />
            {/* Divine Ganesh Pattern Overlay */}
            <div className="absolute inset-0 z-10 opacity-20 pointer-events-none mix-blend-overlay" 
                 style={{ 
                     backgroundImage: "url('/patterns/ganesh-pattern.png')",
                     backgroundRepeat: "repeat",
                     backgroundSize: "300px"
                 }}
            />

             {/* Gradient Overlay for better blend on mobile */}
             <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#fdfcf8] to-transparent lg:hidden" />
        </motion.div>

        {/* Floating Badge - Absolute Center */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 z-30 hidden lg:flex items-center justify-center pointer-events-none"
        >
            <div className="relative bg-white/30 backdrop-blur-md p-3 rounded-full border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
                {/* Rotating Border */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-secondary/60"
                />
                
                <div className="w-32 h-32 bg-[#fdfcf8] rounded-full flex flex-col items-center justify-center text-center shadow-inner relative z-10">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Sparkles size={20} className="text-secondary mb-2" />
                    </motion.div>
                    <span className="text-xs uppercase font-serif font-bold text-primary tracking-widest leading-relaxed">
                        Premium<br/>Quality
                    </span>
                    <span className="text-[10px] text-muted-foreground tracking-wide mt-1">100% Pure</span>
                </div>
            </div>
        </motion.div>
      </div>

      {/* Stats Strip Overlay - Grid on Mobile, Absolute Bottom on Desktop */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative lg:absolute lg:bottom-0 left-0 w-full z-40 bg-[#d4af37] text-[#1A3C2F] py-3 mt-0 lg:mt-0 shadow-[-10px_-10px_30px_rgba(0,0,0,0.1)]"
      >
          <div className="max-w-6xl mx-auto px-6">
              <div className="grid grid-cols-3 md:flex md:justify-center md:items-center gap-4 md:gap-12 xl:gap-24 text-center md:divide-x divide-[#1A3C2F]/10">
                  <div className="px-2 md:px-8 first:pl-0">
                      <p className="text-xl md:text-2xl font-serif font-bold mb-0.5">1998</p>
                      <p className="text-[8px] md:text-[10px] uppercase tracking-widest opacity-80 font-semibold">Established</p>
                  </div>
                  <div className="px-2 md:px-8 border-l border-[#1A3C2F]/10 md:border-l-0">
                      <p className="text-xl md:text-2xl font-serif font-bold mb-0.5">1M+</p>
                      <p className="text-[8px] md:text-[10px] uppercase tracking-widest opacity-80 font-semibold">Vol. Exported</p>
                  </div>
                  <div className="px-2 md:px-8 border-l border-[#1A3C2F]/10 md:border-l-0 last:pr-0">
                      <p className="text-xl md:text-2xl font-serif font-bold mb-0.5">ISO</p>
                      <p className="text-[8px] md:text-[10px] uppercase tracking-widest opacity-80 font-semibold">Certified</p>
                  </div>
              </div>
          </div>
      </motion.div>
    </section>
  );
}
