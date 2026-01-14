"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, ArrowUpRight, Leaf, Sparkles, AlertCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { products, Product } from "@/lib/products";
import { ProductModal } from "@/components/ui/ProductModal";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Check } from "lucide-react";

const ProductImage = ({ product }: { product: Product }) => {
  const [imageError, setImageError] = useState(false);
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
        id: product.name,
        name: product.name,
        price: product.rate || "Contact for Price",
        image: product.image,
        category: "Premium" // Default or derived
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="w-full aspect-square relative bg-[#f5f5f5] group-hover:bg-[#f0f0f0] transition-colors duration-500 overflow-hidden flex items-center justify-center">
      {product.image && !imageError ? (
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          src={product.image}
          alt={product.name || 'Product Image'}
          className="object-contain w-full h-full mix-blend-multiply"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center border-[12px] border-white/50">
            {/* Elegant Placeholder */}
            <div className="w-full h-full border border-stone-200 flex flex-col items-center justify-center bg-[#fafaf9] p-4 text-center">
                <div className="w-12 h-12 mb-3 rounded-full border border-primary/20 flex items-center justify-center text-primary/40">
                    <Leaf size={20} strokeWidth={1} />
                </div>
                <span className="font-serif text-2xl text-primary/80 leading-none mb-1 opacity-80">
                    {(product.name || "UN").substring(0, 2).toUpperCase()}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400">
                    Pure
                </span>
            </div>
        </div>
      )}
      
      {/* Quick View Overlay */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute top-3 right-3"
      >
         <button className="bg-white text-primary p-2 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors border border-stone-100">
            <ArrowUpRight size={16} />
         </button>
      </motion.div>
      
      {/* Quick Add Button */}
      <motion.button
         initial={{ opacity: 0, y: 10 }}
         whileHover={{ opacity: 1, y: 0, scale: 1.1 }}
         onClick={handleQuickAdd}
         className={`absolute bottom-3 right-3 p-2 rounded-full shadow-lg transition-all border border-stone-100 flex items-center justify-center z-20 ${isAdded ? 'bg-green-500 text-white border-green-500' : 'bg-white text-primary hover:bg-primary hover:text-white'}`}
      >
          {isAdded ? <Check size={16} /> : <ShoppingBag size={16} />}
      </motion.button>
    </div>
  );
};

const ProductCard = ({ product, onClick }: { product: Product; onClick: (product: Product) => void }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      id: product.name,
      name: product.name,
      price: product.rate || "Contact for Price",
      image: product.image,
      category: "Premium",
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { stiffness: 50, damping: 15 }
    },
    exit: { 
        opacity: 0, 
        scale: 0.9, 
        transition: { duration: 0.2 } 
    }
  };

  return (
    <motion.div
      layout
      variants={itemVariants}
      onClick={() => onClick(product)}
      className="bg-white p-3 md:p-6 group hover:z-10 hover:shadow-2xl transition-all duration-300 ease-out relative cursor-pointer flex flex-col h-full min-h-[340px] rounded-xl border border-stone-200 hover:border-primary/40"
    >
      <div className="mb-4 w-full aspect-square relative flex items-center justify-center bg-stone-50 rounded-lg overflow-hidden border border-stone-100">
         <div className="w-full h-full p-4 flex items-center justify-center">
            <ProductImage product={product} />
         </div>
      </div>

      <div className="flex-grow flex flex-col items-center text-center w-full">
        <h3 className="text-sm md:text-lg font-serif text-primary mb-1 md:mb-2 group-hover:text-secondary transition-colors duration-300 line-clamp-2 min-h-[2.5em] md:min-h-[3.5em] leading-tight flex items-end justify-center">
          {product.name || "Unknown Product"}
        </h3>
        <div className="h-px w-8 bg-stone-300 mb-2 md:mb-4 group-hover:w-16 group-hover:bg-secondary transition-all duration-300 opacity-50" />

        <div className="mt-auto w-full">
          <p className="text-[10px] md:text-xs text-stone-400 uppercase tracking-widest mb-0.5 md:mb-1">
            Wholesale
          </p>
          <p className="font-mono text-sm md:text-xl font-bold text-primary mb-2 md:mb-4">
            ₹{product.rate || "N/A"}
          </p>

          <button
            onClick={handleAddToCart}
            className={`w-full py-2 md:py-3 px-2 rounded-lg md:rounded-xl text-[10px] md:text-sm font-bold uppercase tracking-wide transition-all flex items-center justify-center gap-1.5 whitespace-nowrap overflow-hidden ${
              isAdded
                ? "bg-green-500 text-white shadow-green-200"
                : "bg-primary text-white hover:bg-secondary hover:shadow-lg shadow-stone-200"
            }`}
          >
            {isAdded ? (
              <>
                <Check size={14} className="md:w-4 md:h-4" /> <span className="truncate">Added</span>
              </>
            ) : (
              <>
                <ShoppingBag size={14} className="md:w-4 md:h-4" /> <span className="truncate">Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export function ProductGrid() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  
  // Extract unique categories (mock or real)
  const categories = ["All", ...Array.from(new Set((products || []).map((p: Product) => p.category || "Premium")))];

  const featuredNames = ["Lavender Oil", "Peppermint Oil", "Tea Tree Oil", "Rosemary Oil"];
  const featuredProducts = (products || []).filter(p => featuredNames.includes(p?.name));
  
  const filteredProducts = (products || []).filter((product: Product) => {
    const matchesSearch = (product?.name || "").toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || (product?.category || "Premium") === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Helper to safely parse price for display calculation
  const getSafePrice = (rate: string) => {
    try {
        const num = parseInt((rate || "0").split('/')[0]);
        return isNaN(num) ? 0 : num;
    } catch (e) {
        return 0;
    }
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { 
            staggerChildren: 0.05,
            delayChildren: 0.2
        }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { stiffness: 50, damping: 15 }
    },
    exit: { 
        opacity: 0, 
        scale: 0.9, 
        transition: { duration: 0.2 } 
    }
  };

  if (!products) {
    return (
        <div className="min-h-screen flex items-center justify-center text-red-500 gap-2">
            <AlertCircle />
            <span>Unable to load product catalog.</span>
        </div>
    );
  }

  return (
    <section className="bg-white min-h-screen pb-32">
        
      {/* Header Section */}
      <div className="bg-primary text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
        
        <div className="container mx-auto relative z-10 max-w-6xl">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="border-l border-white/20 pl-8 md:pl-12"
            >
                <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="block text-secondary text-xs uppercase tracking-[0.3em] mb-4"
                >
                    Wholesale Catalog
                </motion.span>
                <h1 className="text-5xl md:text-7xl font-serif mb-6 text-[#fdfcf8]">
                    Natural Compounds
                </h1>
                <p className="max-w-xl text-white/70 text-lg font-light leading-relaxed">
                    Premium grade essential oils and raw materials for the pharmaceutical, cosmetic, and fragrance industries.
                </p>
            </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-8 relative z-20 max-w-7xl">
        
        {/* Animated Search Bar - Structural */}
        <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, stiffness: 100, damping: 20 }}
            className={`bg-white p-2 shadow-xl shadow-stone-200/50 rounded-lg border max-w-4xl mx-auto flex items-center gap-4 transition-colors duration-300 ${isFocused ? 'border-primary/30 ring-4 ring-primary/5' : 'border-stone-100'}`}
        >
            <motion.div 
                animate={{ scale: isFocused ? 1.02 : 1 }}
                className="flex-grow flex items-center bg-stone-50 px-4 py-3 rounded-md border border-transparent focus-within:bg-white transition-all relative overflow-hidden"
            >
                <Search className={`mr-3 transition-colors ${isFocused ? 'text-primary' : 'text-stone-400'}`} size={18} />
                <input 
                    type="text" 
                    placeholder="Search catalog (e.g. CAS, Name, Type)..." 
                    className="bg-transparent border-none outline-none w-full text-primary placeholder:text-stone-400 relative z-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                
                {/* Search Pulse Effect */}
                {isFocused && (
                     <motion.div 
                        layoutId="search-highlight"
                        className="absolute inset-0 bg-secondary/5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                     />
                )}
            </motion.div>
            
            <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`p-3 transition-colors border-l border-stone-100 px-6 hidden sm:flex items-center gap-2 ${isFilterOpen ? 'text-primary bg-stone-50' : 'text-stone-500 hover:text-primary'}`}
            >
                <SlidersHorizontal size={16} />
                <span className="text-xs uppercase font-bold tracking-wider">Filters</span>
            </button>
        </motion.div>

        {/* Filter Panel */}
        <AnimatePresence>
            {isFilterOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden max-w-4xl mx-auto"
                >
                    <div className="pt-4 pb-2 flex flex-wrap gap-2 justify-center">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                                    selectedCategory === cat 
                                    ? 'bg-primary text-white shadow-lg shadow-primary/20 transform scale-105' 
                                    : 'bg-white border border-stone-200 text-stone-500 hover:border-primary/50 hover:text-primary'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

        {/* Curator Picks (Compact) */}
        {searchTerm === "" && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-16 mb-12"
            >
                 <div className="flex items-center gap-4 mb-4 md:mb-8 justify-between">
                    <div className="flex items-center gap-4 flex-grow">
                        <h2 className="text-xl md:text-2xl font-serif text-primary whitespace-nowrap">Featured Selection</h2>
                        <div className="h-px bg-stone-200 flex-grow" />
                    </div>
                    <div className="flex gap-2">
                        <button 
                            onClick={() => scroll('left')}
                            className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:bg-primary hover:text-white hover:border-primary transition-all"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button 
                            onClick={() => scroll('right')}
                            className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:bg-primary hover:text-white hover:border-primary transition-all"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
                
                <div 
                    ref={scrollContainerRef}
                    className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto pb-8 pt-4 md:pb-0 snap-x snap-mandatory scrollbar-none -mx-6 px-6 md:mx-0 md:px-0 scroll-smooth"
                >
                    {featuredProducts.length > 0 ? featuredProducts.map((product, idx) => (
                        <motion.div 
                            key={product.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * idx }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            onClick={() => handleProductClick(product)}
                            className="relative group overflow-hidden bg-white h-auto min-h-[400px] border border-stone-200 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all cursor-pointer min-w-[280px] md:min-w-0 flex-shrink-0 snap-center rounded-2xl flex flex-col"
                        >
                            {/* Top Image Section */}
                            <div className="w-full h-64 bg-stone-50 relative flex items-center justify-center p-6 border-b border-stone-100 group-hover:bg-stone-100/50 transition-colors">
                                {/* Badge */}
                                <span className="absolute top-4 left-4 z-20 px-3 py-1 bg-white/90 backdrop-blur border border-stone-200 text-[#B8860B] text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm flex items-center gap-1">
                                    <Sparkles size={10} fill="currentColor" /> Best Seller
                                </span>
                                
                                {/* Wishlist */}
                                <button className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur shadow-sm border border-stone-200 flex items-center justify-center text-stone-400 hover:text-red-500 hover:bg-red-50 transition-colors">
                                   <Leaf size={14} />
                                </button>

                                {/* Image */}
                                {product.image ? (
                                   <motion.img 
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                        src={product.image} 
                                        className="w-full h-full object-contain mix-blend-multiply drop-shadow-sm"
                                        alt={product.name}
                                   />
                                ) : (
                                   <Leaf className="w-1/2 h-1/2 text-primary/20" />
                                )}
                            </div>

                            {/* Content Section */}
                            <div className="p-5 flex-grow flex flex-col">
                                <div className="mb-2">
                                    <div className="flex items-center gap-1 mb-2">
                                        {[1, 2, 3, 4, 5].map((s) => (
                                            <Sparkles key={s} size={10} className="text-[#FFD700] fill-[#FFD700]" />
                                        ))}
                                        <span className="text-[10px] text-stone-400 ml-1 font-medium">(4.9)</span>
                                    </div>
                                    <h3 className="text-xl font-serif text-primary mb-1 group-hover:text-secondary transition-colors duration-300 line-clamp-1">
                                        {product.name}
                                    </h3>
                                </div>
                                
                                {/* Description */}
                                <p className="text-xs text-stone-500 line-clamp-2 mb-4 leading-relaxed">
                                    Premium grade essential oil. 100% pure extraction.
                                </p>

                                <div className="mt-auto flex items-center justify-between">
                                    <div>
                                        <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Wholesale</span>
                                        <span className="text-lg font-bold text-primary">₹{product.rate || "N/A"}</span>
                                    </div>
                                    <button className="px-4 py-2 rounded-lg bg-primary text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20 group-hover:bg-secondary transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                                        <ShoppingBag size={14} /> Add
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )) : null}
                </div>
            </motion.div>
        )}

        {/* Main Products - Grid */}
        <motion.div 
            className="mt-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-px bg-transparent md:bg-stone-200 border-none md:border md:border-stone-200"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <AnimatePresence mode="popLayout">
                {filteredProducts.map((product, index) => (
                    <ProductCard 
                        key={product.name || index} 
                        product={product} 
                        onClick={handleProductClick} 
                    />
                ))}
            </AnimatePresence>
        </motion.div>
        
        {filteredProducts.length === 0 && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-24 text-center border-t border-stone-100 bg-stone-50"
            >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-stone-300">
                    <Search size={24} />
                </div>
                <p className="text-stone-500 text-lg font-serif">No products found matching <span className="text-primary">"{searchTerm}"</span></p>
                <p className="text-xs text-stone-400 mt-2">Try checking for typos or searching for a different category.</p>
            </motion.div>
        )}
        
        <div className="mt-20 text-center">
            <button 
                onClick={() => alert("Catalog PDF will be available soon!")}
                className="px-8 py-3 border border-primary text-primary text-sm font-bold tracking-[0.2em] hover:bg-primary hover:text-white transition-all uppercase"
            >
                Download PDF Catalog
            </button>
        </div>

      </div>
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        relatedProducts={selectedProduct ? (products || []).filter(p => p.category === selectedProduct.category && p.name !== selectedProduct.name) : []}
        onRelatedProductClick={(product) => setSelectedProduct(product)}
      />
    </section>
  );
}
