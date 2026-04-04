"use client";

import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Globe, Droplet, Microscope, Sprout, BadgeCheck, Scale } from "lucide-react";
import { useState, useEffect } from "react";
import { MandalaIcon } from "@/components/ui/MandalaIcon"; // Assuming created or will replace with generic SVG code here if file not exists

const benefits = [
  {
    id: 1,
    title: "100% Pure & Natural",
    description: "Sourced directly from nature without any additives or synthetic fillers. We guarantee absolute purity in every drop.",
    icon: Leaf,
    colSpan: "md:col-span-2",
    delay: 0.1
  },
  {
    id: 2,
    title: "Lab Tested Quality",
    description: "Rigorous GC/MS analysis ensures pharmaceutical grade standards.",
    icon: Microscope,
    colSpan: "md:col-span-1",
    delay: 0.2
  },
  {
    id: 3,
    title: "Global Standards",
    description: "Trusted by giants across 15+ countries.",
    icon: Globe,
    colSpan: "md:col-span-1",
    delay: 0.3
  },
  {
    id: 4,
    title: "Sustainable Processing",
    description: "Eco-friendly extraction methods that preserve both potency and the planet.",
    icon: Sprout,
    colSpan: "md:col-span-2",
    delay: 0.4
  },
];

export function Benefits() {
  return (
    <section className="py-12 lg:py-24 bg-[#F5F5F0] relative overflow-hidden" id="benefits">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {/* Royal Pattern Background */}
          <div className="absolute inset-0 bg-ganesh-pattern-royal opacity-[0.03] mix-blend-multiply" />
          
          {/* Large Gradient Blobs */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-[#1A3C2F]/5 rounded-full blur-[80px] lg:blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] bg-[#d4af37]/5 rounded-full blur-[80px] lg:blur-[100px] translate-y-1/2 -translate-x-1/2" />
          
          {/* Floating Particles/Shapes - Client Side Only */}
          <Particles />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-6 relative z-10">
        <div className="flex flex-col items-center text-center justify-center mb-10 lg:mb-16 gap-3 lg:gap-4">
             <motion.div 
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
             >
                <div className="h-[1px] w-8 lg:w-12 bg-[#d4af37]/50" />
                <span className="text-[#d4af37] font-bold uppercase tracking-[0.2em] lg:tracking-[0.4em] text-[10px] lg:text-xs">
                    Why Choose Us
                </span>
                <div className="h-[1px] w-8 lg:w-12 bg-[#d4af37]/50" />
             </motion.div>

             <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl lg:text-6xl font-serif font-medium text-[#1A3C2F] leading-tight"
             >
                Uncompromising <span className="text-[#d4af37] italic font-serif">Purity.</span>
             </motion.h2>

             <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="w-16 lg:w-24 h-1 bg-[#d4af37] mt-1 lg:mt-2 mb-2 lg:mb-4"
             />

             <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-[#1A3C2F]/70 max-w-2xl text-sm lg:text-lg font-light leading-relaxed px-4"
             >
                We refine nature's rawest elements into their most potent forms, combining traditional wisdom with modern scientific excellence.
             </motion.p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8"
        >
          {benefits.map((item, index) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 40, damping: 20 } }
              }}
              whileHover={{ y: -8 }}
              className={`col-span-1 ${item.colSpan} group relative bg-white p-5 lg:p-10 rounded-t-[2rem] lg:rounded-t-[3rem] rounded-b-[1rem] border-2 lg:border-4 border-double border-[#d4af37]/20 hover:border-[#d4af37]/40 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-4 lg:gap-6`}
            >
              <div className="relative shrink-0">
                  <motion.div 
                    className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-[#1A3C2F]/5 flex items-center justify-center text-[#1A3C2F] group-hover:bg-[#1A3C2F] group-hover:text-[#d4af37] transition-colors duration-500 relative z-10"
                  >
                    <item.icon className="w-6 h-6 lg:w-8 lg:h-8" strokeWidth={1.5} />
                  </motion.div>
                  {/* Decorative Mandala Ring behind icon */}
                  <div className="absolute inset-0 -m-1 lg:-m-2 opacity-20 group-hover:opacity-40 group-hover:rotate-180 transition-all duration-700 pointer-events-none">
                      <MandalaIcon className="w-14 h-14 lg:w-20 lg:h-20 text-[#d4af37]" />
                  </div>
              </div>
              
              <div className="text-center md:text-left relative z-10 flex-1">
                  <h3 className="text-base lg:text-2xl font-serif text-[#1A3C2F] mb-2 lg:mb-3 font-medium group-hover:text-[#d4af37] transition-colors leading-tight">
                      {item.title}
                  </h3>
                  
                  <p className="text-[#1A3C2F]/70 text-xs lg:text-base leading-relaxed font-light hidden sm:block">
                    {item.description}
                  </p>
                  
                  {/* Mobile Shortened Description */}
                  <p className="text-[#1A3C2F]/70 text-[10px] leading-snug font-light sm:hidden line-clamp-2">
                    {item.description}
                  </p>
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-0 right-0 w-12 h-12 lg:w-16 lg:h-16 opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
                  <svg viewBox="0 0 100 100" fill="currentColor" className="text-[#d4af37] w-full h-full">
                      <path d="M0 0 L100 0 L100 100 C100 50 50 0 0 0 Z" />
                  </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Metrics Stripe */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-10 lg:mt-20 border-t border-[#1A3C2F]/10 pt-8 lg:pt-16"
        >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                {[
                    { label: "Years Exp.", value: "25+" },
                    { label: "Products", value: "100+" },
                    { label: "Global Reach", value: "15+" },
                    { label: "Partners", value: "500+" }
                ].map((stat, i) => (
                    <div key={i} className="text-center group relative p-2 lg:p-4">
                        {/* Decorative side borders for mid elements */}
                        {i !== 0 && (
                            <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-12 w-[1px] bg-[#d4af37]/30" />
                        )}
                        <h4 className="text-2xl lg:text-5xl font-serif text-[#1A3C2F] mb-1 lg:mb-2 group-hover:text-[#d4af37] transition-colors duration-300">{stat.value}</h4>
                        <p className="text-[#1A3C2F]/60 text-[10px] lg:text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                    </div>
                ))}
            </div>
        </motion.div>
      </div>
    </section>
  );
}

function Particles() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    // Only mount on client
    const newItems = [];
    
    // ... (Keep existing particle logic logic or simplify for performance if needed)
    // For brevity, keeping it lighter or similar to original but strictly client side
    // Using a simpler static set for demonstration to ensure no hydration mismatch, 
    // but fully dynamic is fine if wrapped in useEffect properly as before.
     
     // 1. Organic Blobs (Background)
     for (let i = 0; i < 4; i++) {
        newItems.push({
          id: `blob-${i}`,
          type: 'blob',
          left: `${Math.random() * 90}%`,
          top: `${Math.random() * 90}%`,
          width: `${150 + Math.random() * 150}px`,
          height: `${150 + Math.random() * 150}px`,
          color: i % 2 === 0 ? 'rgba(212, 175, 55, 0.03)' : 'rgba(26, 60, 47, 0.02)',
          duration: 25 + Math.random() * 10
        });
      }
      
      setItems(newItems);
  }, []);

  return (
    <>
      {items.map((item) => (
         <motion.div
           key={item.id}
           animate={{ 
             y: [0, -30, 0],
             scale: [1, 1.05, 1],
           }}
           transition={{ 
             duration: item.duration, 
             repeat: Infinity, 
             ease: "easeInOut" 
           }}
           className="absolute mix-blend-multiply blur-3xl rounded-full"
           style={{
             left: item.left,
             top: item.top,
             width: item.width,
             height: item.height,
             background: item.color,
           }}
         />
      ))}
    </>
  );
}
