"use client";

import { motion, useScroll, useSpring, useTransform, useMotionValue, useMotionTemplate } from "framer-motion";
import { ArrowRight, ArrowUpRight, Plus, Droplets, Leaf, Sparkles } from "lucide-react";
import { useRef, useState, MouseEvent } from "react";
import { ProductModal } from "@/components/ui/ProductModal";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Menthol Crystals",
    category: "Pharmaceutical Grade",
    price: "₹1,550",
    description: "Pure, crystalline structures derived from Mentha arvensis. Cooling, soothing, and potent.",
    image: "https://images.unsplash.com/photo-1628188554988-466fa850209c?q=80&w=2070&auto=format&fit=crop",
    tags: ["Purity 99%", "Cooling", "Premium"]
  },
  {
    id: 2,
    name: "Peppermint Oil",
    category: "Premium Essential Oil",
    price: "₹1,350",
    description: "Steam-distilled from fresh peppermint leaves. A refreshing aroma with high menthol content.",
    image: "https://images.unsplash.com/photo-1615486511484-92e172cc416d?q=80&w=2072&auto=format&fit=crop",
    tags: ["Aromatic", "Therapeutic", "Fresh"]
  },
  {
    id: 3,
    name: "Spearmint Oil",
    category: "Therapeutic Grade",
    price: "₹3,800",
    description: "Sweet, minty, and refreshing. A milder alternative to peppermint, perfect for aromatherapy.",
    image: "https://images.unsplash.com/photo-1595079676339-1534801fafde?q=80&w=2070&auto=format&fit=crop",
    tags: ["Gentle", "Sweet", "Calming"]
  },
  {
    id: 4,
    name: "Eucalyptus Oil",
    category: "Pure Extract",
    price: "₹1,200",
    description: "Sourced from the finest leaves, offering powerful respiratory support and a clean scent.",
    image: "https://images.unsplash.com/photo-1541595180-b2dd99318a47?q=80&w=1965&auto=format&fit=crop",
    tags: ["Respiratory", "Clean", "Potent"]
  },
  {
    id: 5,
    name: "Lavender Oil",
    category: "Floral Essence",
    price: "₹1,200",
    description: "The essence of calm. Sourced from Himalayan blooming fields for maximum purity.",
    image: "https://images.unsplash.com/photo-1596436098020-f57134440598?q=80&w=2070&auto=format&fit=crop",
    tags: ["Relaxing", "Floral", "Premium"]
  },
  {
    id: 6,
    name: "Lemongrass Oil",
    category: "Citrus Note",
    price: "₹1,600",
    description: "Vibrant and energizing. Distilled for a crisp, lemon-fresh aroma that awakens the senses.",
    image: "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?q=80&w=1972&auto=format&fit=crop",
    tags: ["Energizing", "Citrus", "Zesty"]
  },
  {
    id: 7,
    name: "Rosemary Oil",
    category: "Herbal Distillate",
    price: "₹1,350",
    description: "Woody and evergreen. A stimulant for the mind and a proven restorative for hair care.",
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=1935&auto=format&fit=crop",
    tags: ["Focus", "Hair Care", "Herbal"]
  },
  {
    id: 8,
    name: "Tea Tree Oil",
    category: "Antimicrobial",
    price: "₹2,600",
    description: "Nature's purifier. Renowned for its cleansing properties and potent, medicinal scent.",
    image: "https://images.unsplash.com/photo-1632806592233-3d027208d13e?q=80&w=2070&auto=format&fit=crop",
    tags: ["Purifying", "Healing", "Potent"]
  }
];

export function FeaturedProducts() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const scaleX = useSpring(scrollXProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <section className="py-24 bg-[#F5F5F0] relative overflow-hidden" id="products">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1A3C2F]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 mb-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8">
           <div className="max-w-3xl">
              <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="flex items-center gap-2 mb-6"
              >
                  <span className="h-[1px] w-12 bg-[#d4af37]"></span>
                  <span className="text-[#d4af37] font-bold uppercase tracking-[0.3em] text-xs">
                    Signatures
                  </span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl lg:text-7xl font-serif font-medium text-[#1A3C2F] leading-[1.1] mb-6"
              >
                Curated Extracts <br/>
                <span className="italic text-[#1A3C2F]/40 font-light">For the Connoisseur.</span>
              </motion.h2>

              <motion.p
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="text-[#1A3C2F]/60 max-w-lg text-lg leading-relaxed font-light"
              >
                 Discover our most sought-after essential oils and derivatives, sourced from the purest origins and refined to perfection.
              </motion.p>
           </div>
           
           <div className="flex gap-4">
              <NavButton direction="left" onClick={() => scroll('left')} />
              <NavButton direction="right" onClick={() => scroll('right')} />
           </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative w-full z-10">
          <div 
            ref={containerRef}
            className="relative flex gap-6 lg:gap-8 overflow-x-auto pb-16 px-6 lg:pl-[calc((100vw-1024px)/2+1.5rem)] xl:pl-[calc((100vw-1280px)/2+1.5rem)] 2xl:pl-[calc((100vw-1536px)/2+1.5rem)] scrollbar-hide snap-x snap-mandatory pt-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', position: 'relative' }}
          >
            {products.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  index={index} 
                  onClick={() => handleProductClick(product)}
                />
            ))}
            
            {/* View All Card - Minimalist */}
            <Link href="/products">
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="min-w-[320px] lg:min-w-[400px] aspect-[4/5] flex flex-col items-center justify-center bg-[#1A3C2F] text-white snap-center shrink-0 group cursor-pointer relative overflow-hidden rounded-[2rem]"
            >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-10 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A3C2F] to-[#0f241c]" />
                
                <div className="relative z-10 text-center p-8 group-hover:scale-105 transition-transform duration-500">
                    <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center mx-auto mb-8 group-hover:bg-white group-hover:text-[#1A3C2F] transition-colors duration-300">
                        <ArrowRight size={32} />
                    </div>
                    <h3 className="text-4xl font-serif mb-4 italic">View Index</h3>
                    <p className="text-white/60 text-sm max-w-[200px] mx-auto leading-relaxed">
                        Explore our complete catalog of 100+ premium extracts.
                    </p>
                </div>
            </motion.div>
            </Link>
          </div>
      </div>

      {/* Progress Bar */}
      <div className="container mx-auto px-6 -mt-8 relative z-20">
        <div className="max-w-md mx-auto h-[2px] bg-[#1A3C2F]/10 relative overflow-hidden rounded-full">
            <motion.div 
                style={{ scaleX }}
                className="absolute inset-y-0 left-0 w-full bg-[#1A3C2F] origin-left rounded-full"
            />
        </div>
      </div>
      <ProductModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}

function NavButton({ direction, onClick }: { direction: 'left' | 'right', onClick: () => void }) {
    return (
        <button 
            onClick={onClick}
            className="w-16 h-16 rounded-full border border-[#1A3C2F]/10 flex items-center justify-center text-[#1A3C2F] hover:bg-[#1A3C2F] hover:text-white transition-all duration-300 hover:scale-110 group bg-white/50 backdrop-blur-sm"
        >
            <ArrowRight className={`group-hover:scale-110 transition-transform ${direction === 'left' ? 'rotate-180' : ''}`} size={24} />
        </button>
    )
}

function ProductCard({ product, index, onClick }: { product: any, index: number, onClick: () => void }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }: MouseEvent) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
            onMouseMove={handleMouseMove}
            onClick={onClick}
            className="group relative min-w-[320px] lg:min-w-[400px] aspect-[4/5] bg-white rounded-[2rem] cursor-pointer snap-center shrink-0 overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500"
        >
            {/* Image Layer with Zoom Effect */}
            <div className="absolute inset-0 z-0 bg-[#e5e5e5] overflow-hidden">
                <motion.img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[0.2,0,0,1] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C2F]/90 via-[#1A3C2F]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
            </div>

            {/* Floating Glass Tag */}
            <div className="absolute top-6 left-6 z-20">
                <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-lg transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <Sparkles size={12} className="text-[#d4af37]" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A3C2F]">{product.price}</span>
                </div>
            </div>

            {/* Quick Action Button */}
            <div className="absolute top-6 right-6 z-20 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1A3C2F] shadow-lg hover:bg-[#1A3C2F] hover:text-white transition-colors">
                    <ArrowUpRight size={20} />
                </div>
            </div>

            {/* Bottom Content Area - Glassmorphism */}
            <div className="absolute bottom-0 inset-x-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                {/* Product Tags */}
                <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 group-hover:transition-opacity duration-500 delay-200 transform translate-y-2 group-hover:translate-y-0">
                    {product.tags.map((tag: string, i: number) => (
                        <span key={i} className="text-[10px] text-white/80 border border-white/20 px-2 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="space-y-3">
                    <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.2em] block mb-1">
                        {product.category}
                    </span>
                    <h3 className="text-3xl font-serif text-white leading-none group-hover:text-white/90 transition-colors">
                        {product.name}
                    </h3>
                    <div className="h-[1px] w-full bg-white/20 my-4 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100" />
                    <p className="text-white/70 text-sm leading-relaxed line-clamp-2 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        {product.description}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}
