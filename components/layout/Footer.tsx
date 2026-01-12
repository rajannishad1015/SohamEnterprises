"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold tracking-wide">
              Soham<span className="text-secondary">.</span>
            </h2>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Bringing the purest essence of nature to your home. Sustainably sourced and carefully crafted.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-secondary">Shop</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><Link href="#" className="hover:text-white transition-colors">Essential Oils</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Diffusers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Sets & Bundles</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-secondary">Company</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><Link href="#" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-secondary">Stay Connected</h3>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-primary-foreground/10 border border-primary-foreground/20 rounded px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-secondary w-full"
              />
              <button className="bg-secondary text-white px-4 py-2 rounded text-sm hover:bg-secondary/80 transition-colors">
                Join
              </button>
            </div>
            <div className="flex gap-4 mt-6">
              <Link href="#" className="text-white/60 hover:text-white transition-colors"><Instagram size={20} /></Link>
              <Link href="#" className="text-white/60 hover:text-white transition-colors"><Facebook size={20} /></Link>
              <Link href="#" className="text-white/60 hover:text-white transition-colors"><Twitter size={20} /></Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Soham Enterprise. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
