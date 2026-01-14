"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/products" },
  { name: "Our Story", href: "/about" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <>
      <motion.nav
        className={cn(
          "fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
          "top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl rounded-full bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.04)] py-3 px-8"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="z-50 relative group">
            <motion.div 
               whileHover={{ scale: 1.05 }}
               className="flex items-center gap-3"
            >
               <img src="/logo.png" alt="Soham Enterprise" className="h-10 w-auto" />
               <span className="text-sm md:text-xl font-serif font-bold text-primary tracking-tight">Soham Enterprise</span>
            </motion.div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative text-xs font-bold tracking-[0.15em] uppercase text-foreground/70 hover:text-primary transition-colors py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Icons & CTA */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-full hover:bg-black/5 transition-colors text-foreground"
            >
              <ShoppingBag size={20} />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    key={cartCount}
                    className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-[10px] text-white font-bold shadow-sm"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
            <Link href="/products">
                <button className="bg-primary text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-all rounded-full shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0">
                    Get Started
                </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 w-10 h-10 flex items-center justify-center relative rounded-full hover:bg-black/5 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
             <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                    <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <X size={24} className="text-foreground" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                         <Menu size={24} className="text-foreground" />
                    </motion.div>
                )}
             </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Premium Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#1A3C2F]/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8 w-full max-w-sm px-6">
              {links.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl md:text-5xl font-serif text-[#F5F5F0] hover:text-[#d4af37] transition-colors tracking-tight"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                 initial={{ opacity: 0, width: 0 }}
                 animate={{ opacity: 1, width: "100px" }}
                 transition={{ delay: 0.4, duration: 0.5 }}
                 className="h-[1px] bg-[#d4af37]/30 my-8"
              />
              
              <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: 20 }}
                 transition={{ delay: 0.5, duration: 0.5 }}
              >
                  <Link 
                    href="/products"
                    onClick={() => {
                        setIsMobileMenuOpen(false);
                        // Optional: Open cart or go to shop
                    }}
                    className="bg-[#d4af37] text-[#1A3C2F] px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors"
                  >
                    Shop Now
                  </Link>
              </motion.div>
            </nav>
            
            {/* Background Decoration */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
