"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Globe, Droplet, Users, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#1A3C2F]">
        <div className="absolute inset-0 opacity-40 mix-blend-multiply">
            <img 
                src="https://images.unsplash.com/photo-1541595180-b2dd99318a47?q=80&w=1965&auto=format&fit=crop" 
                alt="Green Field" 
                className="w-full h-full object-cover"
            />
        </div>
        <div className="relative z-10 text-center px-6">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl lg:text-7xl font-serif text-white mb-6"
            >
                Our Legacy
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white/80 text-lg lg:text-xl font-light tracking-wide max-w-2xl mx-auto"
            >
                Purity, Honesty, and the Pursuit of Perfection.
            </motion.p>
        </div>
      </section>

      {/* Stats Strip */}
      <div className="bg-[#d4af37] text-[#1A3C2F] py-8 border-t border-[#1A3C2F]/10 relative z-20 shadow-lg">
          <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-around items-center gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                  <div className="px-8 w-full md:w-auto">
                      <p className="text-3xl font-serif mb-1">1998</p>
                      <p className="text-xs uppercase tracking-widest opacity-60">Established</p>
                  </div>
                  <div className="px-8 w-full md:w-auto pt-6 md:pt-0">
                      <p className="text-3xl font-serif mb-1">1M+ Liters</p>
                      <p className="text-xs uppercase tracking-widest opacity-60">Volume Exported</p>
                  </div>
                  <div className="px-8 w-full md:w-auto pt-6 md:pt-0">
                      <p className="text-3xl font-serif mb-1">ISO 9001</p>
                      <p className="text-xs uppercase tracking-widest opacity-60">Certified Quality</p>
                  </div>
              </div>
          </div>
      </div>

      {/* Narrative Section */}
      <section className="py-24 container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8"
              >
                  <div className="flex items-center gap-3 mb-6">
                        <span className="h-[1px] w-12 bg-[#d4af37]"></span>
                        <span className="text-[#d4af37] font-bold uppercase tracking-[0.3em] text-xs">
                            The Beginning
                        </span>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-serif text-[#1A3C2F] leading-tight">
                      From a Seed of Thought to a Global Standard.
                  </h2>
                  <div className="text-[#1A3C2F]/70 text-lg font-light leading-relaxed space-y-6">
                      <p>
                          Soham Enterprise was founded with a singular, quiet ambition: to redefine what "purity" means in the essential oil industry. What began as a small initiative in the heart of Gujarat's extraction fields has grown into a trusted name across borders.
                      </p>
                      <p>
                          We realized early on that the market was flooded with diluted promises. We chose a different path—one of transparency, rigorous science, and respect for nature. Every crystal we crystallize and every drop we distill tells the story of this commitment.
                      </p>
                  </div>
              </motion.div>
              <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl"
              >
                  <img 
                      src="https://images.unsplash.com/photo-1595079676339-1534801fafde?q=80&w=2070&auto=format&fit=crop" 
                      alt="Distillation Process" 
                      className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#1A3C2F]/10 mix-blend-multiply" />
              </motion.div>
          </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-[#F5F5F0]">
          <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-20">
                  <h2 className="text-3xl lg:text-4xl font-serif text-[#1A3C2F] mb-6">The Pillars of Soham</h2>
                  <p className="text-[#1A3C2F]/60">Our philosophy is built on four unshakeable pillars that guide every decision we make.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                      { icon: Leaf, title: "100% Purity", desc: "No fillers, no synthetics. Just nature in its most potent form." },
                      { icon: ShieldCheck, title: "Lab Tested", desc: "Every batch undergoes rigorous GC/MS analysis for quality assurance." },
                      { icon: Globe, title: "Global Reach", desc: "Trusted by partners and industries across 15+ countries." },
                      { icon: Users, title: "Client First", desc: "We build lasting relationships through transparency and reliability." }
                  ].map((item, idx) => (
                      <motion.div 
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="bg-white p-10 rounded-2xl border border-[#1A3C2F]/5 hover:shadow-xl transition-all duration-300 group"
                      >
                          <div className="w-14 h-14 bg-[#1A3C2F]/5 text-[#1A3C2F] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1A3C2F] group-hover:text-white transition-colors">
                              <item.icon size={26} />
                          </div>
                          <h3 className="text-xl font-serif text-[#1A3C2F] mb-3">{item.title}</h3>
                          <p className="text-[#1A3C2F]/60 text-sm leading-relaxed">{item.desc}</p>
                      </motion.div>
                  ))}
              </div>
          </div>
      </section>

      {/* Interactive Stats / Timeline Lite */}
      <section className="py-24 container mx-auto px-6">
           <div className="bg-[#1A3C2F] rounded-3xl p-12 lg:p-24 text-white relative overflow-hidden">
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 text-center lg:text-left">
                    <div>
                        <h3 className="text-6xl font-serif mb-2">25+</h3>
                        <p className="text-white/60 uppercase tracking-widest text-xs font-bold">Years of Experience</p>
                    </div>
                    <div>
                        <h3 className="text-6xl font-serif mb-2">500+</h3>
                        <p className="text-white/60 uppercase tracking-widest text-xs font-bold">Happy Clients</p>
                    </div>
                    <div>
                        <h3 className="text-6xl font-serif mb-2">100+</h3>
                        <p className="text-white/60 uppercase tracking-widest text-xs font-bold">Premium Products</p>
                    </div>
                </div>
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
           </div>
      </section>

      <Footer />
    </main>
  );
}
