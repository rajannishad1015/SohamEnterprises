"use client";

import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Globe, Droplet } from "lucide-react";

const benefits = [
  {
    id: 1,
    title: "100% Pure & Natural",
    description: "Sourced directly from nature without any additives or synthetic fillers.",
    icon: Leaf,
  },
  {
    id: 2,
    title: "Lab Tested Quality",
    description: "Every batch undergoes rigorous GC/MS analysis to ensure pharmaceutical grade purity.",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Global Standards",
    description: "Trusted by pharmaceutical and cosmetic giants across 15+ countries.",
    icon: Globe,
  },
  {
    id: 4,
    title: "Sustainable Processing",
    description: "Eco-friendly extraction methods that preserve both potency and the planet.",
    icon: Droplet,
  },
];

export function Benefits() {
  return (
    <section className="py-16 bg-[#F5F5F0] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
                 <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[#1A3C2F]/60 font-bold uppercase tracking-[0.2em] text-xs block mb-4"
                 >
                    Why Choose Us
                 </motion.span>
                 <motion.h2 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl lg:text-5xl font-serif font-medium text-[#1A3C2F]"
                 >
                    Uncompromising <span className="italic opacity-50">Purity.</span>
                 </motion.h2>
            </div>
            
            <motion.p 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-[#1A3C2F]/70 max-w-md leading-relaxed"
            >
                We refine nature's rawest elements into their most potent forms, setting the benchmark for industrial and therapeutic excellence.
            </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="group p-8 border border-[#1A3C2F]/5 bg-white hover:border-[#1A3C2F]/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1A3C2F]/5"
            >
              <div className="w-12 h-12 rounded-full bg-[#F5F5F0] flex items-center justify-center text-[#1A3C2F] mb-6 group-hover:bg-[#1A3C2F] group-hover:text-white transition-colors duration-500">
                <item.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif text-[#1A3C2F] mb-3">{item.title}</h3>
              <p className="text-[#1A3C2F]/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
