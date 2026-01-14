"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { ProductModal } from "@/components/ui/ProductModal";
import Link from "next/link";
import { products } from "@/lib/products";

export function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Select top 4 products for the featured section
  const featured = products.slice(0, 4);

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <section className="py-16 lg:py-20 bg-white" id="products">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-[#1A3C2F]/10 pb-8">
            <div className="max-w-2xl">
                <span className="text-[#d4af37] font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
                    Curated Collection
                </span>
                <h2 className="text-4xl lg:text-5xl font-serif text-[#1A3C2F]">
                    Signature Extracts
                </h2>
            </div>
            <Link href="/products" className="group flex items-center gap-2 text-[#1A3C2F] text-sm font-bold uppercase tracking-widest hover:text-[#d4af37] transition-colors">
                View All Products
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-8 md:gap-y-12">
            {featured.map((product, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    className="group cursor-pointer"
                    onClick={() => handleProductClick(product)}
                >
                    {/* Image Container */}
                    <div className="relative aspect-[3/4] overflow-hidden bg-[#F5F5F0] mb-4 md:mb-6">
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Overlay on Hover */}
                        <div className="absolute inset-0 bg-[#1A3C2F]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Quick View Button - Desktop Only */}
                        <div className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <span className="bg-white text-[#1A3C2F] px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#1A3C2F] hover:text-white transition-colors shadow-lg whitespace-nowrap">
                                Quick View
                            </span>
                        </div>

                         {/* Tag */}
                         <div className="absolute top-2 left-2 md:top-4 md:left-4">
                            {index === 0 && (
                                <span className="bg-[#d4af37] text-white px-2 py-1 md:px-3 text-[8px] md:text-[10px] font-bold uppercase tracking-widest">
                                    Best Seller
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="text-center md:text-left">
                        <h3 className="text-base md:text-2xl font-serif text-[#1A3C2F] mb-1 md:mb-2 group-hover:text-[#d4af37] transition-colors line-clamp-1">
                            {product.name}
                        </h3>
                        <div className="flex flex-row items-center justify-between gap-2 border-t border-[#1A3C2F]/5 pt-3 mt-3">
                             <span className="text-[10px] md:text-xs text-[#1A3C2F]/50 uppercase tracking-wider font-medium">
                                {product.category || "Essential Oil"}
                            </span>
                            <span className="text-sm md:text-base text-[#1A3C2F] font-bold">
                                {product.rate}
                            </span>
                        </div>
                    </div>
                </motion.div>
            ))}
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
