"use client";

import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Globe, Droplet, Microscope, Sprout, BadgeCheck, Scale } from "lucide-react";

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
    <section className="py-24 bg-[#F5F5F0] relative overflow-hidden" id="benefits">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1A3C2F]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-10">
            <div className="max-w-2xl">
                 <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-6"
                 >
                    <span className="h-[1px] w-12 bg-[#d4af37]"></span>
                    <span className="text-[#d4af37] font-bold uppercase tracking-[0.3em] text-xs">
                        Why Choose Us
                    </span>
                 </motion.div>

                 <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl lg:text-6xl font-serif font-medium text-[#1A3C2F] leading-[1.1]"
                 >
                    Uncompromising <br/> <span className="italic opacity-50">Standards.</span>
                 </motion.h2>
            </div>
            
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-[#1A3C2F]/70 max-w-md text-lg leading-relaxed font-light"
            >
                We refine nature's rawest elements into their most potent forms, setting the benchmark for industrial and therapeutic excellence.
            </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay }}
              className={`${item.colSpan} group relative bg-white/50 backdrop-blur-sm border border-white/40 p-10 rounded-[2rem] hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-[#1A3C2F]/5 overflow-hidden`}
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A3C2F]/0 to-[#1A3C2F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-[#1A3C2F]/5 flex items-center justify-center text-[#1A3C2F] mb-8 group-hover:scale-110 group-hover:bg-[#1A3C2F] group-hover:text-white transition-all duration-500">
                    <item.icon size={28} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-2xl font-serif text-[#1A3C2F] mb-4 group-hover:translate-x-1 transition-transform duration-300">
                      {item.title}
                  </h3>
                  
                  <p className="text-[#1A3C2F]/60 leading-relaxed font-light group-hover:text-[#1A3C2F]/80 transition-colors">
                    {item.description}
                  </p>
              </div>

              {/* Decorative Corner Icon */}
              <div className="absolute -bottom-4 -right-4 text-[#1A3C2F]/5 transform rotate-12 scale-[2.5] group-hover:scale-[3] group-hover:-rotate-12 transition-transform duration-700 pointer-events-none">
                  <item.icon />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Metrics Stripe */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
            {[
                { label: "Years Experience", value: "25+" },
                { label: "Products", value: "100+" },
                { label: "Countries Served", value: "15+" },
                { label: "Happy Clients", value: "500+" }
            ].map((stat, i) => (
                <div key={i} className="bg-[#1A3C2F] p-8 rounded-[2rem] text-center text-white group hover:bg-[#142e24] transition-colors">
                    <h4 className="text-3xl lg:text-4xl font-serif mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</h4>
                    <p className="text-white/60 text-xs uppercase tracking-widest">{stat.label}</p>
                </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
