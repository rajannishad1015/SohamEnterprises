"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "#featured" }, // Scroll to featured for now
  { name: "Our Story", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled 
            ? "bg-white/80 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-4" 
            : "bg-transparent py-8"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="z-50 relative">
            <motion.div 
               whileHover={{ scale: 1.05 }}
               className="text-2xl font-serif font-bold text-primary tracking-tight flex items-center gap-1"
            >
               Soham<span className="text-secondary text-4xl leading-[0] mb-2">.</span>
            </motion.div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative text-sm font-medium tracking-widest uppercase text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-secondary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Icons & CTA */}
          <div className="hidden md:flex items-center gap-8">
            <button className="relative text-foreground hover:text-secondary transition-colors">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-[10px] text-white font-bold">
                0
              </span>
            </button>
            <button className="bg-primary text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-all">
                Get Started
            </button>
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

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 0.4 }}
             className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
          >
             <div className="flex flex-col items-center gap-8 w-full max-w-sm px-6">
                {links.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="w-full text-center"
                  >
                    <Link
                      href={link.href}
                      className="text-3xl font-serif text-primary hover:text-secondary transition-colors block py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="w-full h-[1px] bg-gray-200 my-4"
                />

                <motion.button
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.5 }}
                     className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-secondary"
                     onClick={() => setIsMobileMenuOpen(false)}
                >
                    View Cart (0) <ArrowRight size={16} />
                </motion.button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
