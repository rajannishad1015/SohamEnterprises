"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

export default function AboutPage() {
  const valuesScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = valuesScrollRef.current;
    if (!scrollContainer) return;

    const cardWidth = 304; // 280px min-width + 24px gap (approx)

    const scrollInterval = setInterval(() => {
      // Strictly restrict to mobile screens (less than 768px)
      if (window.innerWidth >= 768) return;

      // Only run if the container is actually scrollable
      if (scrollContainer.scrollWidth <= scrollContainer.clientWidth) return;

      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      
      // If we're at the end (or close), reset to start
      if (scrollContainer.scrollLeft >= maxScroll - 10) {
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Otherwise scroll to next card
        scrollContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }, 3000); // Change every 3 seconds

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section with Indian Patterns */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#1a3c2f] via-[#0f2419] to-[#1a3c2f] overflow-hidden">
        {/* Decorative Border Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 right-0 h-32 bg-repeat-x" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 Q60 20 50 30 Q40 20 50 10 M50 30 Q60 40 50 50 Q40 40 50 30' fill='none' stroke='%23d4af37' stroke-width='1'/%3E%3Ccircle cx='50' cy='50' r='3' fill='%23d4af37'/%3E%3C/svg%3E")` }} 
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-repeat-x rotate-180" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 Q60 20 50 30 Q40 20 50 10 M50 30 Q60 40 50 50 Q40 40 50 30' fill='none' stroke='%23d4af37' stroke-width='1'/%3E%3Ccircle cx='50' cy='50' r='3' fill='%23d4af37'/%3E%3C/svg%3E")` }} 
          />
        </div>

        {/* Mandala Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <svg width="800" height="800" viewBox="0 0 200 200" className="text-[#d4af37]">
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            {[...Array(12)].map((_, i) => (
              <g key={i} transform={`rotate(${i * 30} 100 100)`}>
                <path d="M100 20 Q110 40 100 60 Q90 40 100 20" fill="currentColor" opacity="0.3" />
                <circle cx="100" cy="20" r="3" fill="currentColor" />
              </g>
            ))}
          </svg>
        </div>
        
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1541595180-b2dd99318a47?q=80&w=1965&auto=format&fit=crop" 
            alt="Nature" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative Top */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#d4af37]" />
              <svg width="40" height="40" viewBox="0 0 40 40" className="text-[#d4af37]">
                <path d="M20 5 L25 15 L35 15 L27 22 L30 32 L20 25 L10 32 L13 22 L5 15 L15 15 Z" fill="currentColor" />
              </svg>
              <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#d4af37]" />
            </div>

            <p className="text-[#d4af37] text-xs md:text-sm tracking-[0.3em] uppercase mb-4 md:mb-6">Est. 1998 • Gujarat, India</p>
            <h1 className="text-4xl md:text-8xl font-serif text-white mb-6 md:mb-8 leading-tight">
              Crafting Purity<br />
              <span className="text-[#d4af37]">Since 1998</span>
            </h1>
            <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
              From the heart of Gujarat to the world, we distill nature's finest essences with unwavering commitment to quality.
            </p>

            {/* Decorative Bottom */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <div className="h-[1px] w-8 bg-[#d4af37]" />
              <div className="w-2 h-2 rotate-45 bg-[#d4af37]" />
              <div className="h-[1px] w-8 bg-[#d4af37]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section with Paisley Accent */}
      <section className="py-16 md:py-32 px-6 relative">
        {/* Paisley Corner Decoration */}
        <div className="absolute top-4 right-4 md:top-10 md:right-10 opacity-10">
          <svg width="80" height="80" viewBox="0 0 100 100" className="text-[#1a3c2f] md:w-[150px] md:h-[150px]">
            <path d="M50 10 Q70 20 80 40 Q90 60 70 80 Q50 90 30 80 Q20 70 20 50 Q20 30 40 20 Q50 15 50 10 Z M50 20 Q60 25 65 35 Q70 50 60 65 Q50 70 40 65 Q30 55 35 40 Q40 25 50 20 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Decorative Header */}
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-12 h-[2px] bg-[#d4af37]" />
                <svg width="20" height="20" viewBox="0 0 20 20" className="text-[#d4af37]">
                  <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="10" cy="10" r="3" fill="currentColor" />
                </svg>
              </div>

              <h2 className="text-3xl md:text-5xl font-serif text-[#1a3c2f] mb-6 md:mb-8">Our Story</h2>
              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded in 1998, Soham Enterprise began with a simple vision: to bring the purest essential oils from India to the world. What started as a small family operation has grown into a trusted name in the industry.
                </p>
                <p>
                  Every drop we produce carries the legacy of traditional Indian wisdom combined with modern scientific precision. Our commitment to purity is not just a promise—it's our heritage.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[300px] md:h-[500px]"
            >
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border-2 border-[#d4af37]/30 rounded-lg" />
              <div className="absolute -inset-2 border border-[#d4af37]/20 rounded-lg" />
              
              <img 
                src="https://images.unsplash.com/photo-1595079676339-1534801fafde?q=80&w=2070&auto=format&fit=crop" 
                alt="Distillation" 
                className="w-full h-full object-cover rounded-lg shadow-2xl relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section with Indian Motifs */}
      <section className="py-16 md:py-32 bg-[#f8f8f6] px-6 relative overflow-hidden">
        {/* Lotus Pattern Background */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 20 Q50 25 50 35 Q50 45 40 50 Q30 45 30 35 Q30 25 40 20 M40 30 Q45 32 45 38 Q45 44 40 46 Q35 44 35 38 Q35 32 40 30' fill='%231a3c2f'/%3E%3C/svg%3E")` }} 
        />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-10 md:mb-20">
            {/* Decorative Title */}
            <div className="flex items-center justify-center gap-4 mb-4 md:mb-6">
              <svg width="20" height="20" viewBox="0 0 30 30" className="text-[#d4af37] md:w-[30px] md:h-[30px]">
                <path d="M15 5 L18 12 L25 12 L19 17 L22 24 L15 19 L8 24 L11 17 L5 12 L12 12 Z" fill="currentColor" />
              </svg>
              <div className="w-12 md:w-24 h-[2px] bg-[#d4af37]" />
              <svg width="20" height="20" viewBox="0 0 30 30" className="text-[#d4af37] md:w-[30px] md:h-[30px]">
                <path d="M15 5 L18 12 L25 12 L19 17 L22 24 L15 19 L8 24 L11 17 L5 12 L12 12 Z" fill="currentColor" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-[#1a3c2f] mb-4">Our Values</h2>
          </div>

          {/* Values Container - Horizontal Scroll on Mobile, Grid on Desktop */}
          <style jsx global>{`
            .scrollbar-hide::-webkit-scrollbar {
                display: none;
            }
            .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
            }
          `}</style>
          <div 
            ref={valuesScrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:grid md:grid-cols-3 md:gap-12 pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide md:overflow-visible"
          >
            {[
              { title: "Purity", desc: "100% natural essential oils with no additives or synthetic compounds.", color: "from-[#1a3c2f] to-[#2d5a45]" },
              { title: "Quality", desc: "Every batch is rigorously tested to meet international standards.", color: "from-[#d4af37] to-[#b8941f]" },
              { title: "Trust", desc: "Building lasting relationships through transparency and reliability.", color: "from-[#1a3c2f] to-[#2d5a45]" }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="relative group min-w-[280px] snap-center"
              >
                {/* Decorative Corner */}
                <div className="absolute -top-3 -left-3 w-6 h-6 border-l-2 border-t-2 border-[#d4af37] opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r-2 border-b-2 border-[#d4af37] opacity-50 group-hover:opacity-100 transition-opacity" />

                <div className="bg-white p-10 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${value.color} mx-auto mb-6 flex items-center justify-center shadow-lg`}>
                    <span className="text-2xl text-white font-serif">{idx + 1}</span>
                  </div>
                  <h3 className="text-2xl font-serif text-[#1a3c2f] mb-4 text-center">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-center">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Rich Decoration */}
      <section className="py-16 md:py-32 px-6 bg-gradient-to-br from-[#1a3c2f] via-[#0f2419] to-[#1a3c2f] text-white relative overflow-hidden">
        {/* Decorative Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L35 15 L50 20 L35 25 L30 40 L25 25 L10 20 L25 15 Z' fill='%23d4af37'/%3E%3C/svg%3E")` }} 
          />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-row justify-between md:grid md:grid-cols-3 gap-2 md:gap-16 text-center">
            {[
              { num: "25+", label: "Years of Excellence" },
              { num: "15+", label: "Countries Served" },
              { num: "100%", label: "Pure & Natural" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="relative flex-1"
              >
                {/* Decorative Circle (Hidden on Mobile) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 hidden md:flex">
                  <svg width="200" height="200" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#d4af37" strokeWidth="0.5" />
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#d4af37" strokeWidth="0.5" />
                  </svg>
                </div>
                
                <div className="relative">
                  <p className="text-3xl md:text-6xl font-serif text-[#d4af37] mb-1 md:mb-4">{stat.num}</p>
                  <div className="flex items-center justify-center gap-2 mb-1 md:mb-2 opacity-50 md:opacity-100">
                    <div className="w-4 md:w-8 h-[1px] bg-[#d4af37]/50" />
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rotate-45 bg-[#d4af37]" />
                    <div className="w-4 md:w-8 h-[1px] bg-[#d4af37]/50" />
                  </div>
                  <p className="text-[10px] md:text-lg text-white/80 uppercase tracking-widest leading-tight px-1">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
