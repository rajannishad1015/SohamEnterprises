"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ShoppingBag, ArrowUpRight } from "lucide-react";
import { products } from "@/lib/products";

export function ProductGrid() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-24 bg-[#f8f9fa] min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 pt-12">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6"
            >
            Our Collection
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-muted-foreground"
            >
            Explore our premium range of organic essential oils, distilled from nature's finest ingredients.
            </motion.p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-16">
            <div className="relative group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-secondary transition-colors" size={20} />
                <input 
                    type="text" 
                    placeholder="Search for an oil (e.g. Lavender, Peppermint)..." 
                    className="w-full pl-14 pr-4 py-4 rounded-full border border-gray-200 focus:border-secondary focus:ring-4 focus:ring-secondary/10 outline-none transition-all bg-white shadow-sm text-lg"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                    <motion.div 
                        key={product.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="group bg-white rounded-3xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col relative overflow-hidden"
                    >
                        {/* Decorative background circle */}
                        <div className="absolute -right-8 -top-8 w-32 h-32 bg-secondary/5 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out" />

                        {/* Icon Placeholder */}
                        <div className="w-16 h-16 rounded-2xl bg-[#fdfcf8] flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary/5 transition-colors">
                            <span className="text-2xl">🌿</span>
                        </div>

                        <div className="flex-grow">
                             <h3 className="text-xl font-serif font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                                {product.name}
                             </h3>
                             <div className="flex items-baseline gap-1 text-muted-foreground">
                                <span className="text-xs font-bold uppercase tracking-wider">Per Kg</span>
                             </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                            <span className="text-lg font-mono font-bold text-primary">
                                ₹{product.rate}
                            </span>
                            <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all group-hover:scale-110">
                                <ShoppingBag size={18} />
                            </button>
                        </div>
                    </motion.div>
                ))
            ) : (
                <div className="col-span-full text-center py-20">
                    <p className="text-xl text-muted-foreground">No products found matching "{searchTerm}"</p>
                    <button 
                        onClick={() => setSearchTerm("")}
                        className="mt-4 text-secondary hover:underline font-bold"
                    >
                        Clear Search
                    </button>
                </div>
            )}
        </div>
        
        <div className="mt-12 text-center text-sm text-muted-foreground">
            * Prices are subject to market fluctuations. Contact us for bulk orders.
        </div>

      </div>
    </section>
  );
}
