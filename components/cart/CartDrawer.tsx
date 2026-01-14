"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag, Send, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useEffect } from "react";

export function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartCount } = useCart();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isCartOpen]);

  const handleBookOrder = () => {
    if (items.length === 0) return;

    const now = new Date();
    let message = "*New Order Request*\n";
    message += `Date: ${now.toLocaleDateString()} | Time: ${now.toLocaleTimeString()}\n\n`;
    
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - Qty: ${item.quantity}\n`;
    });
    message += `\nTotal Items: ${cartCount}\n`;
    message += "Please confirm availability and pricing.";

    const whatsappUrl = `https://wa.me/919930282855?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-[101] w-full max-w-md bg-white shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-4 md:p-6 border-b border-gray-100 flex items-center justify-between bg-white text-primary">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} />
                <h2 className="text-xl font-serif font-bold">Your Cart ({cartCount})</h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 md:space-y-6 scrollbar-hide">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 space-y-4">
                  <ShoppingBag size={48} className="opacity-20" />
                  <p>Your cart is currently empty.</p>
                  <button 
                     onClick={() => setIsCartOpen(false)}
                     className="text-primary font-bold hover:underline text-sm"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex gap-4 p-3 md:p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* Image Thumbnail */}
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100">
                        {item.image ? (
                             <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-300 text-xs font-bold">IMG</div>
                        )}
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                           <h3 className="font-bold text-primary text-sm line-clamp-2 leading-tight">{item.name}</h3>
                           <p className="text-[10px] md:text-xs text-gray-500 mt-0.5">{item.category || "Premium Product"}</p>
                        </div>
                        <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors p-1 -mr-2 -mt-2"
                        >
                            <Trash2 size={16} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-lg px-2 py-1">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-0.5 hover:bg-white rounded shadow-sm text-gray-600 transition-all"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-0.5 hover:bg-white rounded shadow-sm text-gray-600 transition-all"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <div className="text-sm font-bold text-primary">
                            {item.price && !`${item.price}`.includes('/') ? item.price : 'On Request'}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer / Actions */}
            <div className="p-4 md:p-6 border-t border-gray-100 bg-white pb-8 md:pb-6">
               {items.length > 0 && (
                   <div className="mb-4 space-y-2">
                       <div className="flex justify-between text-sm text-gray-500">
                           <span>Total Items</span>
                           <span className="font-bold text-gray-900">{cartCount}</span>
                       </div>
                       <p className="text-[10px] text-center text-gray-400 italic">
                           *Prices and availability will be confirmed via WhatsApp.
                       </p>
                   </div>
               )}
              <button
                onClick={handleBookOrder}
                disabled={items.length === 0}
                className="w-full py-3.5 md:py-4 bg-[#1A3C2F] text-[#d4af37] rounded-xl font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-[#142921] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg shadow-[#1A3C2F]/20"
              >
                <span>Request Quote</span>
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
