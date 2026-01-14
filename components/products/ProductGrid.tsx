"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, ArrowUpRight, Leaf, Sparkles, AlertCircle } from "lucide-react";
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
          className="object-cover w-full h-full"
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
      className="bg-white p-6 group hover:z-10 hover:shadow-2xl transition-all duration-300 ease-out relative cursor-pointer flex flex-col h-full rounded-xl border border-transparent hover:border-stone-100"
    >
      <div className="mb-6 w-full max-w-[180px] mx-auto relative">
         <ProductImage product={product} />
      </div>

      <div className="flex-grow flex flex-col items-center text-center">
        <h3 className="text-lg font-serif text-primary mb-2 group-hover:text-secondary transition-colors duration-300 line-clamp-2">
          {product.name || "Unknown Product"}
        </h3>
        <div className="h-px w-8 bg-stone-300 mb-4 group-hover:w-16 group-hover:bg-secondary transition-all duration-300" />

        <div className="mt-auto w-full">
          <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">
            Wholesale Rate
          </p>
          <p className="font-mono text-xl font-bold text-primary mb-4">
            ₹{product.rate || "N/A"}
          </p>

          <button
            onClick={handleAddToCart}
            className={`w-full py-3 px-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wide transition-all flex items-center justify-center gap-1.5 whitespace-nowrap ${
              isAdded
                ? "bg-green-500 text-white shadow-green-200"
                : "bg-primary text-white hover:bg-secondary hover:shadow-lg shadow-stone-200"
            }`}
          >
            {isAdded ? (
              <>
                <Check size={16} /> Added
              </>
            ) : (
              <>
                <ShoppingBag size={16} /> Add to Cart
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
                 <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-2xl font-serif text-primary">Featured Selection</h2>
                    <div className="h-px bg-stone-200 flex-grow" />
                </div>
                
                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory scrollbar-none -mx-6 px-6 md:mx-0 md:px-0">
                    {featuredProducts.length > 0 ? featuredProducts.map((product, idx) => (
                        <motion.div 
                            key={product.name}
                            whileHover={{ y: -5 }}
                            onClick={() => handleProductClick(product)}
                            className="relative group overflow-hidden bg-stone-50 h-64 border border-stone-100 hover:border-primary/30 transition-colors cursor-pointer min-w-[280px] md:min-w-0 flex-shrink-0 snap-center rounded-xl"
                        >
                            {/* Simple typography card for featured */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                                <span className="text-xs font-bold text-secondary uppercase tracking-widest flex items-center gap-2">
                                    <Sparkles size={12} /> Top Rated
                                </span>
                                <div>
                                    <h3 className="text-3xl font-serif text-primary mb-1">{product.name}</h3>
                                    <p className="text-xs text-stone-500 uppercase tracking-wider">Premium Grade</p>
                                </div>
                            </div>
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/10 rounded-tl-full translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
                        </motion.div>
                    )) : null}
                </div>
            </motion.div>
        )}

        {/* Main Products - Grid */}
        <motion.div 
            className="mt-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-stone-200 border border-stone-200"
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
