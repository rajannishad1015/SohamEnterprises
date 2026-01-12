"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Menthol Crystals",
    description: "Pure, crystalline structures derived from Mentha arvensis. Cooling, soothing, and potent.",
    image: "/menthol-crystal.png", // specific enough to look real, even if specific file missing (next/image handles it gracefully usually or user provides it)
    price: "Industrial Grade",
  },
  {
    id: 2,
    name: "Peppermint Oil",
    description: "Steam-distilled from fresh peppermint leaves. A refreshing aroma with high menthol content.",
    image: "/peppermint-oil.png",
    price: "Premium Grade",
  },
  {
    id: 3,
    name: "Spearmint Oil",
    description: "Sweet, minty, and refreshing. a milder alternative to peppermint, perfect for aromatherapy.",
    image: "/spearmint-oil.png",
    price: "Therapeutic Grade",
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-secondary font-bold uppercase tracking-[0.2em] text-xs block mb-4"
          >
            Our Collection
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6"
          >
            Natures Finest Extracts
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-muted-foreground"
          >
            Discover our range of ethically sourced, high-purity essential oils and crystals prepared for industrial and therapeutic excellence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="group relative bg-[#fdfcf8] border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-500 ease-out"
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Star size={16} className="text-secondary fill-secondary" />
              </div>

              {/* Image Placeholder Area */}
              <div className="relative h-64 w-full mb-8 bg-gray-50 overflow-hidden group-hover:bg-gray-100 transition-colors">
                 {/* Ideally we use real images. using a div placeholder for now to be safe until images exist, or assuming generic names */}
                 <div className="absolute inset-0 flex items-center justify-center text-primary/20">
                    {/* Placeholder Icon or Effect */}
                    <div className="w-32 h-32 rounded-full bg-primary/5 blur-2xl group-hover:bg-secondary/10 transition-colors duration-500" />
                 </div>
                 {/* <Image src={product.image} alt={product.name} fill className="object-contain" /> */} 
                 <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-serif text-primary/40 font-bold opacity-30 group-hover:scale-110 transition-transform duration-500">
                        {product.name.charAt(0)}
                    </span>
                 </div>
              </div>

              <div className="flex flex-col items-start">
                <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">
                    {product.price}
                </span>
                <h3 className="text-2xl font-serif font-bold text-primary mb-3">
                    {product.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {product.description}
                </p>
                
                <button className="flex items-center gap-2 text-primary font-medium text-sm border-b border-primary/20 pb-0.5 hover:border-primary transition-colors hover:gap-3 group-hover:text-secondary group-hover:border-secondary">
                    View Details <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
             <button className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 text-sm tracking-widest uppercase">
                View Full Catalog
             </button>
        </div>
      </div>
    </section>
  );
}
