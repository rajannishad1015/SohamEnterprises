"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const products = [
  {
    id: 1,
    name: "Menthol Crystals",
    category: "Pharmaceutical Grade",
    description: "Pure, crystalline structures derived from Mentha arvensis. Cooling, soothing, and potent.",
    image: "https://images.unsplash.com/photo-1628188554988-466fa850209c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Peppermint Oil",
    category: "Premium Essential Oil",
    description: "Steam-distilled from fresh peppermint leaves. A refreshing aroma with high menthol content.",
    image: "https://images.unsplash.com/photo-1615486511484-92e172cc416d?q=80&w=2072&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Spearmint Oil",
    category: "Therapeutic Grade",
    description: "Sweet, minty, and refreshing. A milder alternative to peppermint, perfect for aromatherapy.",
    image: "https://images.unsplash.com/photo-1595079676339-1534801fafde?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Eucalyptus Oil",
    category: "Pure Extract",
    description: "Sourced from the finest leaves, offering powerful respiratory support and a clean scent.",
    image: "https://images.unsplash.com/photo-1541595180-b2dd99318a47?q=80&w=1965&auto=format&fit=crop", 
  },
  {
    id: 5,
    name: "Lavender Oil",
    category: "Floral Essence",
    description: "The essence of calm. Sourced from Himalayan blooming fields for maximum purity.",
    image: "https://images.unsplash.com/photo-1596436098020-f57134440598?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Lemongrass Oil",
    category: "Citrus Note",
    description: "Vibrant and energizing. Distilled for a crisp, lemon-fresh aroma that awakens the senses.",
    image: "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?q=80&w=1972&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Rosemary Oil",
    category: "Herbal Distillate",
    description: "Woody and evergreen. A stimulant for the mind and a proven restorative for hair care.",
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=1935&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Tea Tree Oil",
    category: "Antimicrobial",
    description: "Nature's purifier. Renowned for its cleansing properties and potent, medicinal scent.",
    image: "https://images.unsplash.com/photo-1632806592233-3d027208d13e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 9,
    name: "Basil Oil",
    category: "Sacred Herb",
    description: "Spicy and warm. Known as the 'Royal Herb', offering clarity and mental strength.",
    image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1935&auto=format&fit=crop",
  },
  {
    id: 10,
    name: "Orange Oil",
    category: "Cold Pressed",
    description: "Sweet and cheerful. Extracted from the fresh peel of sun-ripened oranges.",
    image: "https://images.unsplash.com/photo-1611105637889-33f20166989c?q=80&w=1974&auto=format&fit=crop",
  }
];

export function FeaturedProducts() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const scaleX = useSpring(scrollXProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section className="py-16 bg-[#F5F5F0] overflow-hidden" id="products">
      <div className="container mx-auto px-6 mb-12 flex items-end justify-between">
         <div className="max-w-2xl">
            <motion.span 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-[#1A3C2F] font-bold uppercase tracking-[0.3em] text-xs block mb-6 border-b border-[#1A3C2F]/10 pb-4 w-fit"
            >
              Curated Collection
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-serif font-medium text-[#1A3C2F] leading-[1.1]"
            >
              Nature's Finest <br/> <span className="italic text-[#1A3C2F]/40">Rare Extracts.</span>
            </motion.h2>
         </div>
         
         <div className="hidden lg:flex gap-4 mb-4">
            <button 
                onClick={() => containerRef.current?.scrollBy({ left: -500, behavior: 'smooth' })}
                className="w-14 h-14 rounded-full border border-[#1A3C2F]/10 flex items-center justify-center text-[#1A3C2F] hover:bg-[#1A3C2F] hover:text-white transition-all hover:scale-105"
            >
                <ArrowRight className="rotate-180" size={24} />
            </button>
            <button 
                onClick={() => containerRef.current?.scrollBy({ left: 500, behavior: 'smooth' })}
                className="w-14 h-14 rounded-full border border-[#1A3C2F]/10 flex items-center justify-center text-[#1A3C2F] hover:bg-[#1A3C2F] hover:text-white transition-all hover:scale-105"
            >
                <ArrowRight size={24} />
            </button>
         </div>
      </div>

      {/* Horizontal Scroll Container - Aligned perfectly with container padding */}
      <div className="relative w-full">
          <div 
            ref={containerRef}
            className="flex gap-6 lg:gap-10 overflow-x-auto pb-12 px-6 lg:px-[calc((100vw-1536px)/2+1.5rem)] 2xl:px-[calc((100vw-1536px)/2+3rem)] scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Left Spacer for alignment on large screens if needed, mostly handled by padding calculation above */}
            {products.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
            ))}
            
            {/* View All Card */}
            <div className="min-w-[320px] lg:min-w-[450px] aspect-[3/4] flex items-center justify-center bg-[#1A3C2F] text-white snap-center shrink-0 group cursor-pointer transition-colors hover:bg-[#142e24]">
                <div className="text-center group-hover:scale-105 transition-transform duration-500">
                    <span className="block text-6xl font-serif mb-4 italic">Index</span>
                    <span className="text-xs uppercase tracking-[0.5em] flex items-center gap-3 justify-center">
                        View Full Catalog <ArrowRight size={14} />
                    </span>
                </div>
            </div>
          </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="container mx-auto px-6 mt-4">
        <div className="w-full h-[1px] bg-[#1A3C2F]/10 relative overflow-hidden">
            <motion.div 
                style={{ scaleX }}
                className="absolute inset-y-0 left-0 w-full bg-[#1A3C2F] origin-left"
            />
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, index }: { product: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
            className="group relative min-w-[320px] lg:min-w-[450px] aspect-[3/4] bg-white cursor-pointer snap-center shrink-0 overflow-hidden"
        >
            {/* Image Layer */}
            <div className="absolute inset-0 z-0 bg-[#e5e5e5] overflow-hidden">
                <div className="absolute inset-0 bg-[#1A3C2F]/0 group-hover:bg-[#1A3C2F]/10 transition-colors duration-500 z-10" />
                <motion.img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[0.2,0,0,1] group-hover:scale-110"
                />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-20 p-8 lg:p-12 flex flex-col justify-between pointer-events-none">
                <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="bg-white/90 backdrop-blur-sm text-[#1A3C2F] px-4 py-2 text-[10px] font-bold uppercase tracking-widest border border-[#1A3C2F]/5">
                        {product.category}
                    </span>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1A3C2F] shadow-lg">
                        <ArrowUpRight size={20} />
                    </div>
                </div>

                <div className="bg-white/95 backdrop-blur-md p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out border border-[#1A3C2F]/5 shadow-xl">
                     <h3 className="text-3xl lg:text-4xl font-serif text-[#1A3C2F] mb-3 leading-none">{product.name}</h3>
                     <p className="text-[#1A3C2F]/60 text-sm leading-relaxed line-clamp-2 mb-6 font-light">
                        {product.description}
                     </p>
                     <div className="w-full h-[1px] bg-[#1A3C2F]/10 group-hover:bg-[#1A3C2F]/30 transition-colors" />
                     <div className="pt-4 flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-widest text-[#1A3C2F]/40 font-bold">0{product.id}</span>
                        <span className="text-xs font-bold text-[#1A3C2F] uppercase tracking-wider group-hover:translate-x-1 transition-transform flex items-center gap-2">
                            Product Specs
                        </span>
                     </div>
                </div>
            </div>
        </motion.div>
    )
}
