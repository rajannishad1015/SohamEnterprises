"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 bg-primary text-white relative">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
        
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Info */}
            <div className="w-full lg:w-1/3">
                <span className="text-secondary font-bold uppercase tracking-[0.2em] text-xs block mb-6">
                    Get in Touch
                </span>
                <h2 className="text-4xl font-serif font-bold mb-8">
                    Start Your Wellness Journey
                </h2>
                <p className="text-primary-foreground/70 mb-12 leading-relaxed">
                    Have questions about our products or need a custom quote for bulk orders? We are here to help.
                </p>

                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="bg-white/10 p-3 rounded-full">
                            <MapPin className="text-secondary" size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-1">Visit Us</h4>
                            <p className="text-primary-foreground/60 text-sm">
                                123 Business Park, Industrial Area<br/>
                                Gujarat, India 380001
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-white/10 p-3 rounded-full">
                            <Mail className="text-secondary" size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-1">Email Us</h4>
                            <p className="text-primary-foreground/60 text-sm">
                                info@sohamenterprise.com<br/>
                                sales@sohamenterprise.com
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-white/10 p-3 rounded-full">
                            <Phone className="text-secondary" size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-1">Call Us</h4>
                            <p className="text-primary-foreground/60 text-sm">
                                +91 98765 43210<br/>
                                Mon - Sat, 9am - 6pm
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-2/3 lg:pl-12">
                <motion.form 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 lg:p-12 shadow-2xl"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-2">
                             <label className="text-xs uppercase font-bold text-primary tracking-widest">Name</label>
                             <input type="text" className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-secondary transition-colors text-black" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                             <label className="text-xs uppercase font-bold text-primary tracking-widest">Email</label>
                             <input type="email" className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-secondary transition-colors text-black" placeholder="john@example.com" />
                        </div>
                    </div>
                    <div className="space-y-2 mb-8">
                         <label className="text-xs uppercase font-bold text-primary tracking-widest">Subject</label>
                         <input type="text" className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-secondary transition-colors text-black" placeholder="Inquiry about Menthol Crystals" />
                    </div>
                     <div className="space-y-2 mb-12">
                         <label className="text-xs uppercase font-bold text-primary tracking-widest">Message</label>
                         <textarea className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-secondary transition-colors min-h-[100px] text-black" placeholder="How can we help you?" />
                    </div>

                    <button className="w-full bg-primary text-white py-4 font-bold tracking-widest uppercase hover:bg-primary/90 transition-all flex items-center justify-center gap-3">
                        Send Message <Send size={16} />
                    </button>
                </motion.form>
            </div>
        </div>
      </div>
    </section>
  );
}
