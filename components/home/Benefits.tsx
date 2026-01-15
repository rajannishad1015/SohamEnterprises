"use client";

import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Globe, Droplet, Microscope, Sprout, BadgeCheck, Scale } from "lucide-react";
import { useState, useEffect } from "react";

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
    <section className="py-16 lg:py-20 bg-[#F5F5F0] relative overflow-hidden" id="benefits">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {/* Paisley Pattern Background */}
          <div className="absolute inset-0 bg-paisley-pattern opacity-40 mix-blend-multiply" />
          
          {/* Large Gradient Blobs */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1A3C2F]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
          
          {/* Floating Particles/Shapes - Client Side Only */}
          <Particles />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center text-center lg:items-end lg:text-left justify-between mb-12 lg:mb-20 gap-8">
            <div className="max-w-2xl w-full">
                 <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center lg:justify-start gap-3 mb-6"
                 >
                    <span className="h-[1px] w-12 bg-[#d4af37] inline-block"></span>
                    <span className="text-[#d4af37] font-bold uppercase tracking-[0.3em] text-xs">
                        Why Choose Us
                    </span>
                 </motion.div>

                 <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl lg:text-6xl font-serif font-medium text-[#1A3C2F] leading-[1.1]"
                 >
                    Uncompromising <br/> <span className="italic opacity-50">Standards.</span>
                 </motion.h2>
            </div>
            
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-[#1A3C2F]/70 max-w-md text-base lg:text-lg leading-relaxed font-light mx-auto lg:mx-0"
            >
                We refine nature's rawest elements into their most potent forms, setting the benchmark for industrial and therapeutic excellence.
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
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8"
        >
          {benefits.map((item, index) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } }
              }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -5px rgba(26, 60, 47, 0.1)" }}
              className={`col-span-1 ${item.colSpan} group relative bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-stone-100 shadow-sm transition-all duration-300 overflow-hidden flex flex-col items-center text-center md:items-start md:text-left`}
            >
              <div className="relative z-10 w-full flex flex-col items-center md:items-start">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#1A3C2F]/5 flex items-center justify-center text-[#1A3C2F] mb-4 md:mb-6 group-hover:bg-[#1A3C2F] group-hover:text-white transition-colors duration-500"
                  >
                    <item.icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />
                  </motion.div>
                  
                  <h3 className="text-sm md:text-2xl font-serif text-[#1A3C2F] mb-2 md:mb-3 font-semibold md:font-medium group-hover:text-[#d4af37] transition-colors">
                      {item.title}
                  </h3>
                  
                  <p className="text-[#1A3C2F]/70 text-[10px] md:text-base leading-relaxed font-light hidden sm:block">
                    {item.description}
                  </p>
                  {/* Mobile-only short description */}
                  <p className="text-[#1A3C2F]/70 text-[10px] leading-snug font-light sm:hidden">
                    {item.description.split('.')[0]}.
                  </p>
              </div>

              {/* Subtle Decorative Gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150 rotate-12" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Metrics Stripe */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 md:mt-16 border-t border-[#1A3C2F]/10 pt-8 md:pt-12"
        >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {[
                    { label: "Years Exp.", value: "25+" },
                    { label: "Products", value: "100+" },
                    { label: "Global Reach", value: "15+" },
                    { label: "Happy Clients", value: "500+" }
                ].map((stat, i) => (
                    <div key={i} className="text-center group">
                        <h4 className="text-2xl md:text-5xl font-serif text-[#1A3C2F] mb-1 md:mb-2 group-hover:text-[#d4af37] transition-colors duration-300">{stat.value}</h4>
                        <p className="text-[#1A3C2F]/50 text-[10px] md:text-xs font-bold uppercase tracking-widest">{stat.label}</p>
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
    const newItems = [];
    
    // 1. Organic Blobs (Background)
    for (let i = 0; i < 5; i++) {
      newItems.push({
        id: `blob-${i}`,
        type: 'blob',
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        animX: [Math.random() * 200 - 100, Math.random() * 200 - 100, Math.random() * 200 - 100],
        animY: [Math.random() * 200 - 100, Math.random() * 200 - 100, Math.random() * 200 - 100],
        duration: 20 + Math.random() * 10,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${100 + Math.random() * 200}px`,
        height: `${100 + Math.random() * 200}px`,
        color: i % 2 === 0 ? 'rgba(212, 175, 55, 0.05)' : 'rgba(26, 60, 47, 0.04)',
        // Organic random blob shapes
        borderRadius: `${30 + Math.random() * 40}% ${30 + Math.random() * 40}% ${30 + Math.random() * 40}% ${30 + Math.random() * 40}% / ${30 + Math.random() * 40}% ${30 + Math.random() * 40}% ${30 + Math.random() * 40}% ${30 + Math.random() * 40}%`
      });
    }

    // 2. Floating Icons (Shapes)
    const icons = [Leaf, Droplet, Sprout];
    for (let i = 0; i < 4; i++) {
      const Icon = icons[i % icons.length];
      newItems.push({
        id: `icon-${i}`,
        type: 'icon',
        Icon: Icon,
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        animX: [Math.random() * 100 - 50, Math.random() * 100 - 50],
        animY: [Math.random() * 100 - 50, Math.random() * 100 - 50],
        duration: 25 + Math.random() * 15,
        left: `${10 + Math.random() * 80}%`,
        top: `${10 + Math.random() * 80}%`,
        size: 24 + Math.random() * 20,
        color: 'rgba(26, 60, 47, 0.08)',
        rotate: [0, 180, 360],
      });
    }

    setItems(newItems);
  }, []);

  return (
    <>
      {items.map((item) => {
        if (item.type === 'blob') {
          return (
            <motion.div
              key={item.id}
              initial={{ x: item.x, y: item.y, opacity: 0 }}
              animate={{ 
                x: item.animX,
                y: item.animY,
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.1, 1],
                borderRadius: [item.borderRadius, "40% 60% 70% 30% / 40% 50% 60% 50%", item.borderRadius]
              }}
              transition={{ 
                duration: item.duration, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute mix-blend-multiply blur-2xl"
              style={{
                left: item.left,
                top: item.top,
                width: item.width,
                height: item.height,
                background: item.color,
                borderRadius: item.borderRadius
              }}
            />
          );
        } else {
          const Icon = item.Icon;
          return (
            <motion.div
              key={item.id}
              initial={{ x: item.x, y: item.y, opacity: 0, rotate: 0 }}
              animate={{ 
                x: item.animX,
                y: item.animY,
                opacity: [0, 1, 0],
                rotate: item.rotate
              }}
              transition={{ 
                duration: item.duration, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute pointer-events-none"
              style={{
                left: item.left,
                top: item.top,
                color: item.color,
              }}
            >
              <Icon size={item.size} strokeWidth={1.5} />
            </motion.div>
          );
        }
      })}
    </>
  );
}
