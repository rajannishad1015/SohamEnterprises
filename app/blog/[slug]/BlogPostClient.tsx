"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight, Sparkles, Share2 } from "lucide-react";
import { BlogPost } from "@/lib/blogData";
import { MandalaIcon } from "@/components/ui/MandalaIcon";
import { toast } from "sonner";

interface BlogPostClientProps {
  post: BlogPost;
  recommendedPosts: BlogPost[];
}

export default function BlogPostClient({ post, recommendedPosts }: BlogPostClientProps) {
  // Reading Scroll Progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Article link copied to clipboard!");
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground relative pb-24 overflow-hidden">
      {/* Dynamic Golden Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-secondary origin-left z-[999] shadow-sm"
        style={{ scaleX }}
      />

      {/* Decorative patterns */}
      <div className="absolute inset-0 bg-ganesh-pattern opacity-[0.03] pointer-events-none mix-blend-multiply z-0" />
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Header Container */}
      <section className="relative pt-36 md:pt-44 px-6 z-10">
        <div className="max-w-4xl mx-auto">
          {/* Back button & share */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
            <Link
              href="/blog"
              className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-secondary transition-all"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1.5 transition-transform" />
              Back to Journal
            </Link>
            
            <button
              onClick={handleShare}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-all active:scale-95 cursor-pointer"
              title="Copy link to clipboard"
            >
              <Share2 size={13} className="text-secondary" />
              Share Article
            </button>
          </div>

          {/* Post Header Data */}
          <div className="text-center md:text-left">
            <span className="inline-block bg-accent text-primary font-bold text-[10px] uppercase tracking-widest px-4 py-2 border border-secondary/20 mb-6">
              {post.category}
            </span>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-base md:text-lg text-muted-foreground font-light mb-8 leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>

            {/* Author Profile and Metadata */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-4">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-secondary shadow-md"
                />
                <div className="text-left">
                  <p className="text-sm font-bold text-primary">{post.author.name}</p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mt-0.5">{post.author.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} className="text-secondary" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} className="text-secondary" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Main Hero Banner with Double Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative w-full h-[300px] md:h-[550px] my-12 overflow-hidden shadow-2xl border-[6px] border-double border-secondary/40 p-1 bg-white"
          >
            <div className="relative w-full h-full overflow-hidden border border-secondary/20">
              <img
                src={post.mainImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-ganesh-pattern-royal opacity-5 pointer-events-none mix-blend-overlay" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Body Content */}
      <section className="relative px-6 z-10">
        <div className="max-w-2xl mx-auto">
          {post.content.map((block, idx) => {
            switch (block.type) {
              case "paragraph":
                // Render the first paragraph with a gorgeous drop cap!
                if (idx === 0) {
                  const firstChar = block.value.charAt(0);
                  const restText = block.value.slice(1);
                  return (
                    <p
                      key={idx}
                      className="text-base md:text-lg text-foreground/80 leading-relaxed font-light mb-6 text-justify"
                    >
                      <span className="float-left text-5xl md:text-6xl font-serif font-bold text-secondary mr-3 mt-1 leading-[0.8] drop-shadow-[0_2px_4px_rgba(0,0,0,0.05)] border-r-2 border-primary/10 pr-2">
                        {firstChar}
                      </span>
                      {restText}
                    </p>
                  );
                }
                return (
                  <p
                    key={idx}
                    className="text-base md:text-lg text-foreground/80 leading-relaxed font-light mb-6 text-justify"
                  >
                    {block.value}
                  </p>
                );

              case "heading":
                return (
                  <h2
                    key={idx}
                    className="text-2xl md:text-3xl font-serif font-bold text-primary mt-12 mb-6 border-l-4 border-secondary pl-4 leading-tight"
                  >
                    {block.value}
                  </h2>
                );

              case "quote":
                return (
                  <div
                    key={idx}
                    className="my-10 p-8 bg-accent/40 border-l-4 border-secondary relative overflow-hidden shadow-sm rounded-r-lg"
                  >
                    <div className="absolute right-4 top-4 text-secondary/15 text-8xl font-serif pointer-events-none select-none">
                      ”
                    </div>
                    <p className="text-lg md:text-xl italic font-serif text-primary mb-4 leading-relaxed relative z-10">
                      "{block.value}"
                    </p>
                    {block.author && (
                      <p className="text-xs uppercase tracking-widest font-bold text-secondary text-right relative z-10">
                        — {block.author}
                      </p>
                    )}
                  </div>
                );

              case "list":
                return (
                  <div key={idx} className="my-8 bg-white/50 border border-secondary/10 p-6 md:p-8 rounded-none shadow-inner">
                    {block.value && (
                      <p className="font-bold text-primary mb-5 text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                        <Sparkles size={12} className="text-secondary" />
                        {block.value}
                      </p>
                    )}
                    <ul className="space-y-4">
                      {block.items?.map((item, i) => (
                        <li key={i} className="flex items-start gap-4 text-sm md:text-base leading-relaxed text-muted-foreground font-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0 shadow-sm" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );

              default:
                return null;
            }
          })}

          {/* Central Heritage Motif Divider at the end of the text */}
          <div className="flex items-center justify-center gap-4 my-16 py-4">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-secondary/40" />
            <MandalaIcon className="w-6 h-6 text-secondary/60 animate-[spin_120s_linear_infinite]" />
            <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-secondary/40" />
          </div>
        </div>
      </section>

      {/* RECOMMENDED READS */}
      {recommendedPosts.length > 0 && (
        <section className="border-t border-gray-100 pt-20 px-6 max-w-5xl mx-auto relative z-10">
          <h3 className="text-2xl font-serif text-primary font-bold tracking-wider mb-10 text-center">
            Other Stories You Might Like
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recommendedPosts.map((rPost, idx) => (
              <motion.div
                key={rPost.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <Link href={`/blog/${rPost.slug}`} className="group block h-full">
                  <div className="bg-white border border-gray-100 rounded-none overflow-hidden hover:shadow-lg hover:border-secondary/20 transition-all duration-500 h-full flex flex-col justify-between shadow-sm">
                    <div>
                      {/* Image */}
                      <div className="relative h-44 w-full overflow-hidden">
                        <img
                          src={rPost.mainImage}
                          alt={rPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                        <span className="absolute top-3 left-3 bg-primary text-white font-bold text-[8px] uppercase tracking-widest px-2 py-1 shadow-sm">
                          {rPost.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <div className="flex items-center gap-3 text-[8px] uppercase tracking-widest text-muted-foreground font-bold mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar size={10} className="text-secondary" />
                            {rPost.date}
                          </span>
                        </div>
                        <h4 className="text-lg font-serif font-bold text-primary leading-snug mb-2 group-hover:text-secondary transition-colors duration-300">
                          {rPost.title}
                        </h4>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="p-5 pt-3 border-t border-gray-50 flex items-center justify-between bg-[#fdfcf8] text-[9px] font-bold uppercase tracking-widest text-primary group-hover:text-secondary group-hover:translate-x-1.5 transition-all duration-300">
                      Read Story
                      <ArrowRight size={10} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
