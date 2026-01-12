"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf, Droplets, Sparkles } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row bg-[#fdfcf8]">
      {/* LEFT CONTENT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 xl:p-20 pt-32 lg:pt-20 relative z-10">
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
            className="text-5xl lg:text-7xl font-serif font-bold text-primary mb-6 leading-[1.1]"
          >
            Pure Nature <br />
            <span className="italic font-light text-primary/80">Distilled.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg"
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
            <button className="bg-primary text-white px-8 py-4 rounded-none border border-primary text-base font-medium transition-all hover:bg-primary/90 hover:shadow-xl flex items-center gap-3">
              Explore Collection
              <ArrowRight size={18} />
            </button>
          </motion.div>

          {/* Quick Stats / Trust */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 flex items-center gap-8 border-t border-gray-200 pt-8"
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
      <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-auto">
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
                className="object-cover"
                priority
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
    </section>
  );
}
