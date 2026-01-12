"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Download, Sparkles } from "lucide-react";
import { products } from "@/lib/products";

export function ProductList() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-24 bg-[#f8f9fa] relative" id="shop">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-secondary font-bold uppercase tracking-[0.2em] text-xs block mb-4"
          >
            Wholesale Price List
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6"
          >
            Complete Product Catalog
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-muted-foreground"
          >
            Search through our extensive range of premium organic oils and extracts. Prices are subject to market fluctuations.
          </motion.p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mb-12">
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={20} />
                <input 
                    type="text" 
                    placeholder="Search for an oil (e.g. Lavender, Peppermint)..." 
                    className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-white shadow-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>

        {/* Product Grid / Table */}
        <motion.div 
            layout
            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
        >
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th className="px-8 py-5 font-serif text-lg font-normal tracking-wide w-2/3">Item Name</th>
                            <th className="px-8 py-5 font-serif text-lg font-normal tracking-wide w-1/3 text-right">Rate (₹)</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product, index) => (
                                <motion.tr 
                                    key={product.name}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.02 }}
                                    className="hover:bg-accent/10 transition-colors group"
                                >
                                    <td className="px-8 py-4 text-primary font-medium group-hover:text-secondary transition-colors">
                                        {product.name}
                                    </td>
                                    <td className="px-8 py-4 text-right text-muted-foreground font-mono">
                                        {product.rate}
                                    </td>
                                </motion.tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={2} className="px-8 py-12 text-center text-muted-foreground">
                                    No products found matching "{searchTerm}"
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            
            <div className="bg-gray-50 px-8 py-4 border-t border-gray-100 flex justify-between items-center text-xs text-muted-foreground">
                <span>Showing {filteredProducts.length} items</span>
                <span className="flex items-center gap-1">
                    <Sparkles size={12} className="text-secondary" /> Premium Quality Guaranteed
                </span>
            </div>
        </motion.div>

        <div className="mt-12 text-center">
             <button className="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-secondary/90 transition-all shadow-lg hover:shadow-secondary/30">
                <Download size={16} /> Download Full Price List
             </button>
        </div>

      </div>
    </section>
  );
}
