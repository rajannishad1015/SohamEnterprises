"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, ArrowUp, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#F5F5F0] text-[#1A3C2F] overflow-hidden">
      {/* 
         Sticky Reveal Effect Spacer 
         This creates the 'reveal' sensation by adding height while the actual content adheres to the bottom.
      */}
      
      <div className="sticky bottom-0 w-full min-h-screen md:min-h-0 md:h-auto flex flex-col justify-end">


        <div className="container mx-auto px-6 py-12 relative">
            
            {/* Top Section: Brand & Newsletter */}
            <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-16">
                <div className="max-w-xl space-y-8">
                     <h2 className="text-5xl md:text-6xl font-serif font-medium text-[#1A3C2F]">
                        Soham<span className="text-[#1A3C2F]/20">.</span>
                     </h2>
                     <p className="text-[#1A3C2F]/70 text-lg leading-relaxed font-light">
                        Pioneering the extraction of nature's purest essences. Bridging ancient botanical wisdom with modern standards to deliver uncompromised purity.
                     </p>
                </div>

                {/* Newsletter Input - Premium Style */}
                <div className="w-full lg:w-auto min-w-[300px] lg:min-w-[400px]">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A3C2F]/40 mb-6">Stay Updated</h3>
                    <div className="relative group">
                        <input 
                            type="email" 
                            placeholder="Email Address" 
                            className="w-full bg-transparent border-b border-[#1A3C2F]/20 py-4 text-[#1A3C2F] placeholder:text-[#1A3C2F]/30 focus:outline-none focus:border-[#1A3C2F] transition-colors"
                        />
                        <button className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1A3C2F] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110">
                            <ArrowUp size={18} className="rotate-45" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-[#1A3C2F]/10 pt-16 relative z-10">
                {/* Column 1: Socials & Badges */}
                <div className="md:col-span-4 space-y-8">
                    <div className="flex gap-4">
                        <Link href="#" className="w-12 h-12 rounded-full border border-[#1A3C2F]/20 flex items-center justify-center text-[#1A3C2F] hover:bg-[#1A3C2F] hover:text-[#F5F5F0] transition-colors"><Instagram size={20} /></Link>
                        <Link href="#" className="w-12 h-12 rounded-full border border-[#1A3C2F]/20 flex items-center justify-center text-[#1A3C2F] hover:bg-[#1A3C2F] hover:text-[#F5F5F0] transition-colors"><Facebook size={20} /></Link>
                        <Link href="#" className="w-12 h-12 rounded-full border border-[#1A3C2F]/20 flex items-center justify-center text-[#1A3C2F] hover:bg-[#1A3C2F] hover:text-[#F5F5F0] transition-colors"><Twitter size={20} /></Link>
                    </div>
                    {/* Rotating Seal Badge */}
                    <div className="hidden md:block pt-8">
                         <div className="relative w-24 h-24 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                            <svg className="w-full h-full" viewBox="0 0 100 100">
                                <defs>
                                    <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                                </defs>
                                <text fontSize="11" fill="#1A3C2F" letterSpacing="2">
                                    <textPath href="#circle">
                                        PREMIUM QUALITY • SOHAM PURITY •
                                    </textPath>
                                </text>
                            </svg>
                            <div className="absolute w-2 h-2 rounded-full bg-[#1A3C2F]" />
                         </div>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className="md:col-span-2 md:col-start-6">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A3C2F]/40 mb-8">Menu</h3>
                    <ul className="space-y-4">
                        {['Our Heritage', 'Collections', 'Sustainability', 'Process', 'Contact'].map((item) => (
                            <li key={item}>
                                <Link href="#" className="text-[#1A3C2F] hover:text-[#1A3C2F]/60 transition-colors block w-fit group">
                                    <span className="relative text-lg font-medium">
                                        {item}
                                        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#1A3C2F] group-hover:w-full transition-all duration-300" />
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Legal */}
                <div className="md:col-span-2">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A3C2F]/40 mb-8">Legal</h3>
                    <ul className="space-y-4">
                        {['Privacy Policy', 'Terms of Use', 'Certifications', 'Sitemap'].map((item) => (
                            <li key={item}>
                                <Link href="#" className="text-[#1A3C2F] hover:text-[#1A3C2F]/60 transition-colors block w-fit text-sm font-medium">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                 {/* Column 4: Contact */}
                <div className="md:col-span-3">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A3C2F]/40 mb-8">Contact</h3>
                    <ul className="space-y-6">
                        <li className="flex gap-4 items-start text-[#1A3C2F] group">
                            <div className="w-10 h-10 rounded-full bg-[#1A3C2F]/5 flex items-center justify-center shrink-0 group-hover:bg-[#1A3C2F] group-hover:text-white transition-colors">
                                <MapPin size={18} />
                            </div>
                            <span className="leading-relaxed opacity-80 pt-1">301, Saubhagya Complex,<br/>S.P. Ring Road, Ahmedabad,<br/>Gujarat, India 382415</span>
                        </li>
                        <li className="flex gap-4 items-center text-[#1A3C2F] group">
                             <div className="w-10 h-10 rounded-full bg-[#1A3C2F]/5 flex items-center justify-center shrink-0 group-hover:bg-[#1A3C2F] group-hover:text-white transition-colors">
                                <Mail size={18} />
                            </div>
                             <span className="opacity-80">sales@sohamenterprise.com</span>
                        </li>
                        <li className="flex gap-4 items-center text-[#1A3C2F] group">
                             <div className="w-10 h-10 rounded-full bg-[#1A3C2F]/5 flex items-center justify-center shrink-0 group-hover:bg-[#1A3C2F] group-hover:text-white transition-colors">
                                <Phone size={18} />
                            </div>
                             <span className="opacity-80">+91 98765 43210</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-24 pb-8 border-t border-[#1A3C2F]/5 mt-16 text-[#1A3C2F]/40 text-xs tracking-wider uppercase">
                <span>© {new Date().getFullYear()} Soham Enterprise. All rights reserved.</span>
                <span>Crafted with precision.</span>
            </div>

        </div>
      </div>
    </footer>
  );
}
