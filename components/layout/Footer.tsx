"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, ArrowUp, MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { MandalaIcon } from "../ui/MandalaIcon";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0F231B] text-white overflow-hidden border-t-4 border-[#d4af37]">
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-ganesh-pattern-royal opacity-[0.03] pointer-events-none mix-blend-plus-lighter" />
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/40 to-[#d4af37]/0" />

      {/* Large Decorative Blooms */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#1A3C2F] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row">
            
            {/* Left Content Area */}
            <div className="w-full lg:w-[55%] px-4 sm:px-8 lg:px-12 py-12 lg:py-24 flex flex-col justify-between relative">
                {/* Decorative Mandala Background */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[#d4af37] opacity-[0.02] pointer-events-none">
                    <MandalaIcon className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] animate-[spin_120s_linear_infinite]" />
                </div>

                <div className="relative z-10">
                    {/* Brand Header */}
                    <div className="mb-10 lg:mb-12">
                        <div className="flex items-center gap-3 mb-6">
                             <div className="relative w-10 h-10 lg:w-16 lg:h-16 flex-shrink-0">
                                <img src="/logo.png" alt="Soham Logo" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(217,56,30,0.3)]" />
                             </div>
                             <div>
                                <h3 className="text-lg lg:text-xl font-bold uppercase tracking-[0.2em] text-white">Soham Enterprise</h3>
                                <p className="text-[9px] lg:text-[10px] text-white/50 uppercase tracking-widest">Est. 1999 • Mumbai, India</p>
                             </div>
                        </div>
                        <h2 className="text-3xl sm:text-3xl lg:text-5xl font-serif leading-tight mb-6 lg:mb-8 text-white max-w-xl">
                            Rooted in Tradition.<br/>
                            <span className="text-[#d4af37] italic opacity-80">Refined by Science.</span>
                        </h2>
                        
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md w-full">
                            <div className="relative flex-1 group">
                                <input 
                                    type="email" 
                                    placeholder=" " 
                                    className="peer w-full bg-white/5 border-b border-[#d4af37]/30 py-3 pl-0 pr-4 text-base lg:text-lg focus:outline-none focus:border-[#d4af37] transition-all text-white placeholder-transparent"
                                />
                                <label className="absolute left-0 top-3 text-white/40 transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#d4af37] peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:text-xs">
                                    Join our newsletter
                                </label>
                            </div>
                            <button className="bg-[#d4af37] text-[#0F231B] px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-white transition-all shadow-[0_0_20px_-10px_#d4af37] whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* Links Grid - Responsive Cols */}
                    <div className="grid grid-cols-3 gap-x-2 gap-y-8 lg:gap-8 mb-8 lg:mb-12">
                        <div>
                            <h4 className="flex items-center gap-2 font-bold uppercase text-[10px] tracking-[0.2em] mb-4 lg:mb-6 text-[#d4af37]/80">
                                <span className="h-[1px] w-4 bg-[#d4af37]/50"></span> Explore
                            </h4>
                            <ul className="space-y-2 lg:space-y-3 text-sm font-light text-white/70">
                                <li><Link href="/" className="hover:text-[#d4af37] hover:pl-2 transition-all duration-300 block">Home</Link></li>
                                <li><Link href="/products" className="hover:text-[#d4af37] hover:pl-2 transition-all duration-300 block">Our Collection</Link></li>
                                <li><Link href="#" className="hover:text-[#d4af37] hover:pl-2 transition-all duration-300 block">Sourcing</Link></li>
                                <li><Link href="/about" className="hover:text-[#d4af37] hover:pl-2 transition-all duration-300 block">Our Story</Link></li>
                            </ul>
                        </div>
                        <div className="col-span-1">
                            <h4 className="flex items-center gap-2 font-bold uppercase text-[10px] tracking-[0.2em] mb-4 lg:mb-6 text-[#d4af37]/80">
                                <span className="h-[1px] w-4 bg-[#d4af37]/50"></span> Contact
                            </h4>
                            <ul className="space-y-3 text-sm font-light text-white/70">
                                <li>
                                    <a href="mailto:sales@sohamenterprise.com" className="hover:text-[#d4af37] transition-all duration-300 block group">
                                        <div className="flex items-center gap-2 mb-1 text-white/90">
                                            <Mail size={14} className="text-[#d4af37]"/> 
                                            <span className="active:scale-95 transition-transform">Sales Inquiry</span>
                                        </div>
                                        <span className="hidden sm:block text-xs text-white/50 pl-6 group-hover:text-white/80 transition-colors">sales@sohamenterprise.com</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+919930282855" className="hover:text-[#d4af37] transition-all duration-300 block group">
                                        <div className="flex items-center gap-2 mb-1 text-white/90">
                                            <Phone size={14} className="text-[#d4af37]"/> 
                                            <span className="active:scale-95 transition-transform">Call Us</span>
                                        </div>
                                        <span className="hidden sm:block text-xs text-white/50 pl-6 group-hover:text-white/80 transition-colors">+91 99302 82855</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                             <h4 className="flex items-center gap-2 font-bold uppercase text-[10px] tracking-[0.2em] mb-4 lg:mb-6 text-[#d4af37]/80">
                                <span className="h-[1px] w-4 bg-[#d4af37]/50"></span> Legal
                            </h4>
                            <ul className="space-y-2 lg:space-y-3 text-sm font-light text-white/70">
                                <li><Link href="#" className="hover:text-[#d4af37] hover:pl-2 transition-all duration-300 block">Privacy Policy</Link></li>
                                <li><Link href="#" className="hover:text-[#d4af37] hover:pl-2 transition-all duration-300 block">Terms of Use</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-end gap-6 pt-8 border-t border-white/5 text-center md:text-left">
                        <p className="text-[10px] text-white/30 uppercase tracking-wider leading-relaxed">© {new Date().getFullYear()} Soham Enterprise. All rights reserved.</p>
                        <div className="flex items-center gap-4">
                            <SocialIcon icon={Instagram} />
                            <SocialIcon icon={Facebook} />
                            <SocialIcon icon={Twitter} />
                            <button onClick={scrollToTop} className="ml-4 w-10 h-10 flex items-center justify-center rounded-full border border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0F231B] transition-all duration-500 group">
                                <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Map Area - Heritage Indian Frame (Desktop) / Compact (Mobile) */}
            <div className="w-full lg:w-[45%] h-[350px] lg:h-auto lg:min-h-[500px] relative flex items-center justify-center p-4 lg:p-12 order-last lg:order-none">
                 
                 {/* Decorative Background Mandala for the whole map area */}
                 <div className="hidden lg:block absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                     <div className="w-[600px] h-[600px] animate-[spin_60s_linear_infinite]">
                        <MandalaIcon className="w-full h-full text-[#d4af37]" />
                     </div>
                 </div>

                  {/* Map Frame Container */}
                 <div className="relative w-full h-full max-h-[600px] bg-[#0F231B] rounded-[2rem] lg:rounded-none overflow-hidden group shadow-2xl shadow-black/50 border-[4px] lg:border-[8px] border-double border-[#d4af37]/40 p-1 lg:p-2">
                      
                      {/* Decorative Corners (Adjusted for Mobile) */}
                      <div className="absolute top-0 left-0 w-8 h-8 lg:w-16 lg:h-16 border-t-[2px] border-l-[2px] lg:border-t-2 lg:border-l-2 border-[#d4af37] z-30 m-2 lg:m-2 rounded-tl-lg lg:rounded-none" />
                      <div className="absolute top-0 right-0 w-8 h-8 lg:w-16 lg:h-16 border-t-[2px] border-r-[2px] lg:border-t-2 lg:border-r-2 border-[#d4af37] z-30 m-2 lg:m-2 rounded-tr-lg lg:rounded-none" />
                      <div className="absolute bottom-0 left-0 w-8 h-8 lg:w-16 lg:h-16 border-b-[2px] border-l-[2px] lg:border-b-2 lg:border-l-2 border-[#d4af37] z-30 m-2 lg:m-2 rounded-bl-lg lg:rounded-none" />
                      <div className="absolute bottom-0 right-0 w-8 h-8 lg:w-16 lg:h-16 border-b-[2px] border-r-[2px] lg:border-b-2 lg:border-r-2 border-[#d4af37] z-30 m-2 lg:m-2 rounded-br-lg lg:rounded-none" />

                      {/* Inner Container for Map */}
                      <div className="relative w-full h-full rounded-[1.5rem] lg:rounded-none overflow-hidden border border-[#d4af37]/30">
                          <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.963428983944!2d72.82861387607424!3d18.948604856455644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf1fb4aa3371%3A0x3b4d4e141a6cbba9!2sSoham%20Enterprises%20-%20essential%20oil%20supplier!5e0!3m2!1sen!2sin!4v1705421000000!5m2!1sen!2sin"
                            width="100%" 
                            height="100%" 
                            style={{ border: 0, filter: 'grayscale(0.2) sepia(0.3) contrast(1.1) brightness(0.9) saturate(1.2)' }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 w-full h-full transition-all duration-700 group-hover:filter-none group-hover:scale-105"
                          />
                          
                          {/* Overlay Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0F231B] via-[#0F231B]/10 to-transparent opacity-80 pointer-events-none z-10" />

                          {/* Centered Info Card - Compact Mobile Version */}
                          <div className="absolute bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 w-[90%] lg:w-max max-w-[95%] z-20 text-center">
                                <div className="bg-[#0F231B]/90 backdrop-blur-md px-4 py-3 lg:px-10 lg:py-6 rounded-xl lg:rounded-t-2xl border border-[#d4af37]/30 shadow-2xl flex flex-col items-center gap-1.5 lg:gap-2">
                                    <div className="flex items-center gap-2 text-[#d4af37] mb-0.5 lg:mb-1">
                                        <MandalaIcon className="w-3 h-3 lg:w-4 lg:h-4 animate-spin-slow" />
                                        <h4 className="text-sm lg:text-2xl font-serif text-white tracking-widest uppercase whitespace-nowrap">Mumbai HQ</h4>
                                        <MandalaIcon className="w-3 h-3 lg:w-4 lg:h-4 animate-spin-slow" />
                                    </div>
                                    <p className="text-white/60 text-[9px] lg:text-xs uppercase tracking-[0.2em] mb-2 lg:mb-3 whitespace-nowrap">Zaveri Bazaar • Est. 1999</p>
                                    
                                    <a 
                                        href="https://www.google.com/maps/place/2+floor,+Soham+Enterprises+-+essential+oil+supplier,+20%2F24,+Old+Hanuman+Ln,+near+k+m+chavan+talior,+Zaveri+Bazaar,+Kalbadevi,+Mumbai,+Maharashtra+400002/data=!4m2!3m1!1s0x3be7cf1fb4aa3371:0x3b4d4e141a6cbba9?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI1LjQ5LjYYACDXggMqbCw5NDI2NzcyNyw5NDI3NTQwNyw5NDI9OTUzMiw5NDI4MDU3Niw5NDIwNzUwNiw5NDIwODUwNiw5NDIxODY1Myw5NDIyOTgzOSw5NDI3NTE2OCw5NDI3OTYxOUICSU4%3D&skid=05829e14-a7ef-40dc-ab91-65225470c463&g_st=aw" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="w-full lg:w-auto bg-[#D9381E] text-white px-4 py-2 rounded-lg lg:rounded-full text-[9px] lg:text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#D9381E] transition-colors shadow-lg"
                                    >
                                        Get Directions
                                    </a>
                                </div>
                          </div>
                      </div>
                 </div>
            </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon: Icon }: { icon: any }) {
    return (
        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white/60 hover:bg-[#d4af37] hover:text-[#0F231B] transition-all duration-300">
            <Icon size={18} />
        </a>
    )
}
