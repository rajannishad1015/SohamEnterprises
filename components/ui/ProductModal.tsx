"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, Tag, ArrowRight, ShoppingBag, Check, Share2, Copy, ExternalLink, Info, Activity } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/lib/products";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  relatedProducts?: Product[];
  onRelatedProductClick?: (product: Product) => void;
}

// Mandala Pattern Component for the Modal
const ModalPattern = () => (
  <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.03] pointer-events-none rotate-45 transform translate-x-1/3 -translate-y-1/3">
     <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-[#1A3C2F]">
        <path d="M42.7,-72.2C56.1,-65.8,68.4,-57.1,77.6,-46.1C86.8,-35.1,92.9,-21.8,92.6,-8.7C92.2,4.4,85.5,17.4,76.5,28.6C67.5,39.9,56.2,49.4,44.2,56.6C32.1,63.9,19.3,68.7,6.1,69.7C-7.1,70.8,-20.7,68,-33.4,61.9C-46.1,55.8,-57.9,46.3,-66.6,34.4C-75.3,22.6,-80.9,8.3,-80.2,-5.7C-79.5,-19.7,-72.6,-33.4,-62.4,-44.6C-52.2,-55.8,-38.7,-64.5,-25.2,-70.7C-11.7,-76.9,1.7,-80.5,14.7,-79.8C27.6,-79.1,40.1,-74.1,42.7,-72.2Z" transform="translate(100 100)" />
     </svg>
  </div>
);

export function ProductModal({ product, isOpen, onClose, relatedProducts = [], onRelatedProductClick }: ProductModalProps) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [activeTab, setActiveTab] = useState<'description' | 'specs'>('description');
  const [copied, setCopied] = useState(false);

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

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(`${displayName} - Check this out: ${url}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppShare = () => {
     const url = window.location.href;
     const text = `Check out ${displayName} at Soham Enterprise: ${url}`;
     window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6 py-4">
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
            className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 bg-black/5 hover:bg-black/10 rounded-full transition-colors backdrop-blur-md"
            >
              <X size={20} className="text-gray-700" />
            </button>

            <div className="w-full md:w-1/2 h-48 md:h-auto relative bg-gray-100 overflow-hidden flex-shrink-0">
               <motion.img
                  layoutId={`product-image-${product.name}`}
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

            {/* Right: Content Section */}
            <div className="w-full md:w-1/2 flex flex-col bg-[#FDFCF8] overflow-hidden max-h-[60vh] md:max-h-full relative">
                 <ModalPattern /> {/* Decoration */}
                 <div className="p-5 md:p-10 flex-grow overflow-y-auto no-scrollbar relative z-10">
                     <div className="flex items-center gap-2 mb-2">
                        <div className="h-[1px] w-8 bg-[#D4AF37]" />
                        <span className="text-[#D4AF37] text-[10px] md:text-xs font-bold uppercase tracking-[0.25em]">
                            {displayCategory}
                        </span>
                     </div>
                    <div className="flex justify-between items-start gap-4">
                        <h2 className="text-2xl md:text-4xl font-serif text-[#1A3C2F] mb-3 md:mb-4 leading-tight">
                            {displayName}
                        </h2>
                        
                        <div className="flex items-center gap-2">
                            <button 
                                onClick={handleWhatsAppShare}
                                className="p-1.5 md:p-2 rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
                                title="Share on WhatsApp"
                            >
                                <Send size={18} />
                            </button>
                            <button 
                                onClick={handleShare}
                                className="p-1.5 md:p-2 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors"
                                title="Copy Link"
                            >
                                {copied ? <Check size={18} /> : <Copy size={18} />}
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                        {displayTags.map((tag, i) => (
                            <span key={i} className="px-3 py-1 bg-[#D4AF37]/5 text-[#8a701f] text-[10px] md:text-xs rounded-full font-medium border border-[#D4AF37]/20 uppercase tracking-wide">
                            {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-8 border-b border-[#D4AF37]/10 mb-5 md:mb-7">
                        <button 
                            onClick={() => setActiveTab('description')}
                            className={`pb-3 text-xs md:text-sm font-bold uppercase tracking-widest transition-colors relative ${activeTab === 'description' ? 'text-[#1A3C2F]' : 'text-gray-400 hover:text-[#D4AF37]'}`}
                        >
                            Overview
                            {activeTab === 'description' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37]" />}
                        </button>
                        <button 
                            onClick={() => setActiveTab('specs')}
                            className={`pb-3 text-xs md:text-sm font-bold uppercase tracking-widest transition-colors relative ${activeTab === 'specs' ? 'text-[#1A3C2F]' : 'text-gray-400 hover:text-[#D4AF37]'}`}
                        >
                            Specifications
                            {activeTab === 'specs' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37]" />}
                        </button>
                    </div>

                    <div className="min-h-[100px] md:min-h-[150px]">
                        <AnimatePresence mode="wait">
                            {activeTab === 'description' ? (
                                <motion.div 
                                    key="desc"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                >
                                    <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base mb-4 md:mb-6">
                                        {displayDescription}
                                    </p>
                                    <div>
                                        <h3 className="text-xs md:text-sm font-bold text-[#1A3C2F] uppercase tracking-wide mb-1 md:mb-2 opacity-80">Pricing Model</h3>
                                        <p className="text-xl md:text-2xl font-serif text-[#1A3C2F]">
                                            {displayPrice} <span className="text-sm md:text-base text-gray-400 font-sans font-normal">/ unit</span>
                                        </p>
                                        <p className="text-[10px] md:text-xs text-gray-400 mt-1">*Prices subject to market fluctuation.</p>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div 
                                    key="specs"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="space-y-4"
                                >
                                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                                        <div className="p-2 md:p-3 bg-gray-50 rounded-lg">
                                            <span className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider block mb-1">Purity</span>
                                            <span className="font-semibold text-xs md:text-base text-[#1A3C2F]">Unknown</span>
                                        </div>
                                        <div className="p-2 md:p-3 bg-gray-50 rounded-lg">
                                            <span className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider block mb-1">Grade</span>
                                            <span className="font-semibold text-xs md:text-base text-[#1A3C2F]">Pharma / Cosmetic</span>
                                        </div>
                                        <div className="p-2 md:p-3 bg-gray-50 rounded-lg">
                                            <span className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider block mb-1">Origin</span>
                                            <span className="font-semibold text-xs md:text-base text-[#1A3C2F]">Imported / Indian</span>
                                        </div>
                                        <div className="p-2 md:p-3 bg-gray-50 rounded-lg">
                                            <span className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider block mb-1">Availability</span>
                                            <span className="font-semibold text-xs md:text-base text-green-600">In Stock</span>
                                        </div>
                                    </div>
                                    <div className="p-3 md:p-4 border border-dashed border-gray-200 rounded-lg bg-yellow-50/50">
                                        <div className="flex gap-2 text-yellow-700/80 text-[10px] md:text-xs leading-relaxed">
                                            <Info size={14} className="mt-0.5 flex-shrink-0" />
                                            <p>Technical Data Sheet (TDS) and Certificate of Analysis (COA) available upon request.</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Related Products - Mini Carousel */}
                    {relatedProducts.length > 0 && (
                        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-100">
                             <h3 className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 md:mb-4">You Might Also Like</h3>
                             <div className="grid grid-cols-3 gap-2 md:gap-3">
                                 {relatedProducts.slice(0, 3).map(rp => (
                                     <button 
                                        key={rp.id || rp.name} 
                                        onClick={() => onRelatedProductClick && onRelatedProductClick(rp)}
                                        className="group text-left"
                                     >
                                         <div className="aspect-square rounded-lg bg-gray-100 overflow-hidden mb-2 relative">
                                             {rp.image ? (
                                                 <img src={rp.image} alt={rp.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                             ) : (
                                                 <div className="w-full h-full flex items-center justify-center text-gray-300 text-xs">IMG</div>
                                             )}
                                         </div>
                                         <p className="text-[10px] md:text-xs font-bold text-gray-700 truncate group-hover:text-[#1A3C2F] transition-colors">{rp.name}</p>
                                         <p className="text-[9px] md:text-[10px] text-gray-400">{rp.rate || "Enquire"}</p>
                                     </button>
                                 ))}
                             </div>
                        </div>
                    )}
                </div>


    
                {/* Footer Buttons - Compact Grid on Mobile */}
                <div className="p-4 md:p-8 bg-white/50 backdrop-blur-sm border-t border-[#D4AF37]/10 flex flex-row md:flex-col gap-3 md:gap-3 shrink-0 relative z-20">
                    <button
                        onClick={handleAddToCart}
                        disabled={isAdded}
                        className="flex-1 py-3.5 md:py-4 bg-[#FDFCF8] border border-[#1A3C2F]/10 text-[#1A3C2F] rounded-xl text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                    >
                            {isAdded ? (
                                <>
                                <Check size={16} className="text-green-600" /> <span className="hidden md:inline">Added to Cart</span><span className="md:hidden">Added</span>
                                </>
                            ) : (
                                <>
                                <ShoppingBag size={16} /> <span className="hidden md:inline">Add to Cart</span><span className="md:hidden">Add</span>
                                </>
                            )}
                    </button>
                    <button
                        onClick={handleEnquire}
                        className="flex-[2] py-3.5 md:py-4 bg-[#1A3C2F] text-[#FDFCF8] rounded-xl text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-[#142e24] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#1A3C2F]/20 group active:scale-[0.98] border border-[#1A3C2F]"
                    >
                    <Send size={16} className="text-[#D4AF37] group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    Enquire Now
                    </button>
                </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
