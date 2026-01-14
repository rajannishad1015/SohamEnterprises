"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, ArrowUp, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white text-[#1A1A1A] font-sans border-t border-black/5">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        
        {/* Left Side: Immersive Map (50% on large screens) */}
        <div className="w-full lg:w-1/2 h-[400px] lg:h-auto relative bg-[#F0F0F0] order-2 lg:order-1 group">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.963428983944!2d72.82861387607424!3d18.948604856455644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf1fb4aa3371%3A0x3b4d4e141a6cbba9!2sSoham%20Enterprises%20-%20essential%20oil%20supplier!5e0!3m2!1sen!2sin!4v1705421000000!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(1)' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full transition-all duration-700 group-hover:filter-none"
             />
             <a 
                href="https://www.google.com/maps/place/Soham+Enterprises+-+essential+oil+supplier/@18.9485998,72.8311888,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7cf1fb4aa3371:0x3b4d4e141a6cbba9!8m2!3d18.9485998!4d72.8311888!16s%2Fg%2F11lf4b9nf7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute bottom-6 left-6 bg-white text-[#1A3C2F] px-8 py-4 shadow-xl font-bold uppercase tracking-widest text-xs hover:bg-[#1A3C2F] hover:text-white transition-colors z-10 flex items-center gap-2 group-hover:scale-105 duration-300"
             >
                <MapPin size={16} /> Get Directions
             </a>
        </div>

        {/* Right Side: Content (50% on large screens) */}
        <div className="w-full lg:w-1/2 bg-white px-8 md:px-16 py-16 lg:py-20 order-1 lg:order-2 flex flex-col justify-between">
            
            {/* Top: Header & Newsletter */}
            <div className="mb-16">
                <div className="flex items-center gap-4 mb-4">
                    <img src="/logo.png" alt="Soham" className="h-10 w-auto" />
                    <span className="text-xl font-bold tracking-tight uppercase">Soham Enterprise</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-8 text-[#1A3C2F]">
                    Nature's Essence,<br/>Scientifically Curated.
                </h2>
                
                <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                    <input 
                        type="email" 
                        placeholder="Join our newsletter" 
                        className="flex-1 bg-transparent border-b border-black/20 py-3 text-lg focus:outline-none focus:border-[#1A3C2F] transition-colors placeholder:text-black/30"
                    />
                    <button className="text-sm font-bold uppercase tracking-widest hover:text-[#1A3C2F] transition-colors py-3 sm:py-0 text-left sm:text-center">
                        Subscribe
                    </button>
                </div>
            </div>

            {/* Middle: Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mb-16">
                <div>
                    <h4 className="font-bold uppercase text-xs tracking-widest mb-6 text-black/40">Explore</h4>
                    <ul className="space-y-4 text-sm font-medium text-black/70">
                        <li><Link href="/" className="hover:text-[#1A3C2F] transition-colors">Home</Link></li>
                        <li><Link href="/products" className="hover:text-[#1A3C2F] transition-colors">Our Products</Link></li>
                        <li><Link href="#" className="hover:text-[#1A3C2F] transition-colors">Sourcing</Link></li>
                        <li><Link href="/about" className="hover:text-[#1A3C2F] transition-colors">About Us</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold uppercase text-xs tracking-widest mb-6 text-black/40">Contact</h4>
                    <ul className="space-y-4 text-sm font-medium text-black/70">
                        <li><a href="mailto:sales@sohamenterprise.com" className="hover:text-[#1A3C2F] transition-colors">Email Us</a></li>
                        <li><a href="tel:+919930282855" className="hover:text-[#1A3C2F] transition-colors">Call Now</a></li>
                        <li><a href="#" className="hover:text-[#1A3C2F] transition-colors">WhatsApp</a></li>
                    </ul>
                </div>
                <div className="col-span-2 md:col-span-1">
                    <h4 className="font-bold uppercase text-xs tracking-widest mb-6 text-black/40">Legal</h4>
                    <ul className="space-y-4 text-sm font-medium text-black/70">
                        <li><Link href="#" className="hover:text-[#1A3C2F] transition-colors">Privacy Policy</Link></li>
                        <li><Link href="#" className="hover:text-[#1A3C2F] transition-colors">Terms of Use</Link></li>
                    </ul>
                </div>
            </div>

            {/* Bottom: Copyright & Socials */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-8 border-t border-black/5">
                <p className="text-xs text-black/40">© {new Date().getFullYear()} Soham Enterprise.</p>
                <div className="flex gap-4">
                    <SocialIcon icon={Instagram} />
                    <SocialIcon icon={Facebook} />
                    <SocialIcon icon={Twitter} />
                    <button onClick={scrollToTop} className="ml-4 p-2 rounded-full border border-black/10 hover:bg-[#1A3C2F] hover:border-[#1A3C2F] hover:text-white transition-all">
                        <ArrowUp size={16} />
                    </button>
                </div>
            </div>

        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon: Icon }: { icon: any }) {
    return (
        <a href="#" className="p-2 text-black/60 hover:text-[#1A3C2F] transition-colors">
            <Icon size={20} />
        </a>
    )
}
