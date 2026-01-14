"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, Tag, ArrowRight, ShoppingBag, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

interface Product {
  id?: string | number;
  name: string;
  category?: string;
  price?: string | number; // Handling both formats potentially
  rate?: string; // For the list view items
  description?: string;
  image?: string;
  tags?: string[];
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!product) return null;

  // Determine display values based on available data
  const displayName = product.name;
  const displayCategory = product.category || "Premium Quality";
  const displayPrice = product.price || product.rate || "Contact for Price";
  const displayDescription = product.description || `Experience the finest quality ${product.name}. Carefully sourced and processed to ensure maximum purity and potency. Ideal for pharmaceutical, cosmetic, and therapeutic applications. Contact us for bulk orders and synthesis reports.`;
  const displayImage = product.image || "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=2574&auto=format&fit=crop"; // Abstract texture placeholder
  const displayTags = product.tags || ["Premium", "Organic", "Wholesale"];

  const handleEnquire = () => {
    const message = `Hi, I am interested in ${displayName}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/919930282855?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleAddToCart = () => {
      addToCart({
          id: product.id || product.name,
          name: displayName,
          price: displayPrice,
          image: displayImage,
          category: displayCategory
      });
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 bg-black/5 hover:bg-black/10 rounded-full transition-colors backdrop-blur-md"
            >
              <X size={20} className="text-gray-700" />
            </button>

            {/* Image Section */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-gray-100 overflow-hidden">
               <motion.img
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  src={displayImage}
                  alt={displayName}
                  className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r" />
               
               <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white/90 text-xs font-medium border border-white/20 mb-2">
                     <Sparkles size={12} className="text-[#d4af37]" />
                     <span>Verified Excellence</span>
                  </div>
               </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col overflow-y-auto">
              <div>
                <span className="text-[#1A3C2F]/60 text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
                  {displayCategory}
                </span>
                <h2 className="text-3xl md:text-4xl font-serif text-[#1A3C2F] mb-4 leading-tight">
                  {displayName}
                </h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {displayTags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-[#1A3C2F]/5 text-[#1A3C2F]/70 text-xs rounded-full font-medium border border-[#1A3C2F]/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-6 flex-grow">
                <div>
                   <h3 className="text-sm font-bold text-[#1A3C2F] uppercase tracking-wide mb-2 opacity-80">Description</h3>
                   <p className="text-gray-600 leading-relaxed font-light text-base">
                     {displayDescription}
                   </p>
                </div>
                
                <div>
                   <h3 className="text-sm font-bold text-[#1A3C2F] uppercase tracking-wide mb-2 opacity-80">Pricing</h3>
                   <p className="text-2xl font-serif text-[#1A3C2F]">
                     {displayPrice} <span className="text-base text-gray-400 font-sans font-normal">/ unit (Base Rate)</span>
                   </p>
                   <p className="text-xs text-gray-400 mt-1">*Prices subject to market fluctuation and bulk quantity.</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <div className="flex flex-col gap-3">
                    <button
                        onClick={handleAddToCart}
                        disabled={isAdded}
                        className="w-full py-4 bg-white border-2 border-[#1A3C2F] text-[#1A3C2F] rounded-xl font-bold uppercase tracking-widest hover:bg-[#1A3C2F]/5 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
                    >
                         {isAdded ? (
                             <>
                                <Check size={18} /> Added to Cart
                             </>
                         ) : (
                             <>
                                <ShoppingBag size={18} /> Add to Order Request
                             </>
                         )}
                    </button>
                    <button
                    onClick={handleEnquire}
                    className="w-full py-4 bg-[#1A3C2F] text-white rounded-xl font-bold uppercase tracking-widest hover:bg-[#142e24] transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#1A3C2F]/20 group active:scale-[0.98]"
                    >
                    <Send size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    Enquire Now
                    </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
