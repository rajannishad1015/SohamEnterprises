"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight, BookOpen, Sparkles, User } from "lucide-react";
import { blogPosts, BlogPost } from "@/lib/blogData";
import { MandalaIcon } from "@/components/ui/MandalaIcon";

const categories = [
  "All",
  "Essential Oils",
  "Natural Wellness",
  "Extraction & Science",
  "Heritage & Sourcing",
];

export default function BlogIndexPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filtering Logic
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Featured Post (first post that matches the current filters)
  const featuredPost = useMemo(() => {
    return filteredPosts.length > 0 ? filteredPosts[0] : null;
  }, [filteredPosts]);

  // Remaining Posts for Grid
  const gridPosts = useMemo(() => {
    return featuredPost ? filteredPosts.slice(1) : [];
  }, [filteredPosts, featuredPost]);

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden pb-24">
      {/* Background Indian Patterns for Premium Heritage Feel */}
      <div className="absolute inset-0 bg-ganesh-pattern opacity-[0.05] pointer-events-none mix-blend-multiply z-0" />
      <div className="absolute top-[20%] left-[-15%] w-[600px] h-[600px] bg-accent/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Header Section */}
      <section className="relative pt-36 md:pt-44 pb-16 px-6 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Decorative Top Motif */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-secondary" />
            <MandalaIcon className="w-8 h-8 text-secondary animate-[spin_80s_linear_infinite]" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-secondary" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-secondary text-xs md:text-sm tracking-[0.3em] uppercase mb-4 font-bold"
          >
            Soham Chronicles & Insights
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary mb-6 leading-tight"
          >
            Purity & Wisdom <br />
            <span className="italic font-light text-primary/80">Journal</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto font-light leading-relaxed mb-8"
          >
            Delve into the science of botanical extraction, ancient Ayurvedic heritage, and pure aromatherapy formulations curated by our experts.
          </motion.p>

          {/* Search Bar Component */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative max-w-md mx-auto"
          >
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-secondary/20 rounded-full py-4 pl-12 pr-6 text-sm text-foreground focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all shadow-sm"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
          </motion.div>
        </div>
      </section>

      {/* Category Tabs Section */}
      <section className="px-6 mb-16 relative z-10">
        <div className="max-w-5xl mx-auto border-b border-gray-200/60 pb-2">
          <div className="flex overflow-x-auto gap-2 md:gap-4 justify-start md:justify-center scrollbar-hide py-2 px-1">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all rounded-full whitespace-nowrap active:scale-95 ${
                    isActive
                      ? "text-white bg-primary"
                      : "text-foreground/60 hover:text-primary hover:bg-accent/40"
                  }`}
                >
                  <span className="relative z-10">{category}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryTab"
                      className="absolute inset-0 bg-primary rounded-full z-0 border border-secondary/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Blog Contents */}
      <section className="px-6 relative z-10 max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-20 bg-white border border-secondary/10 rounded-2xl shadow-sm p-8"
            >
              <BookOpen className="w-12 h-12 text-secondary/40 mx-auto mb-4" />
              <h3 className="text-xl font-serif text-primary font-bold mb-2">No Articles Found</h3>
              <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                We couldn't find any articles matching "{searchQuery}" in the selected category. Try expanding your search.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={selectedCategory + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* FEATURED POST */}
              {featuredPost && (
                <div className="mb-16">
                  <div className="relative -top-3 -left-3 hidden lg:block w-6 h-6 border-l-2 border-t-2 border-secondary/60 opacity-100" />
                  <div className="relative -bottom-3 -right-3 hidden lg:block w-6 h-6 border-r-2 border-b-2 border-secondary/60 opacity-100 float-right mt-[530px]" />
                  
                  <Link href={`/blog/${featuredPost.slug}`} className="group block">
                    <div className="bg-white border border-gray-100 rounded-none overflow-hidden shadow-md hover:shadow-xl hover:border-secondary/30 transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
                      {/* Featured Image */}
                      <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-full overflow-hidden">
                        <img
                          src={featuredPost.mainImage}
                          alt={featuredPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                        
                        {/* Category Floating Badge */}
                        <span className="absolute top-6 left-6 bg-secondary text-primary font-bold text-[9px] uppercase tracking-widest px-4 py-2 shadow-md">
                          {featuredPost.category}
                        </span>
                      </div>

                      {/* Featured Text */}
                      <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between bg-[#fdfcf8]">
                        <div>
                          {/* Metadata */}
                          <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-6">
                            <span className="flex items-center gap-1.5">
                              <Calendar size={13} className="text-secondary" />
                              {featuredPost.date}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock size={13} className="text-secondary" />
                              {featuredPost.readTime}
                            </span>
                          </div>

                          <h2 className="text-2xl md:text-4xl font-serif font-bold text-primary mb-6 leading-tight group-hover:text-secondary transition-colors duration-300">
                            {featuredPost.title}
                          </h2>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light mb-8">
                            {featuredPost.excerpt}
                          </p>
                        </div>

                        {/* Author & Button */}
                        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                          <div className="flex items-center gap-3">
                            <img
                              src={featuredPost.author.avatar}
                              alt={featuredPost.author.name}
                              className="w-10 h-10 rounded-full object-cover border border-secondary/35 shadow-sm"
                            />
                            <div>
                              <p className="text-xs font-bold text-primary">{featuredPost.author.name}</p>
                              <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-medium mt-0.5">{featuredPost.author.role}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group-hover:text-secondary group-hover:translate-x-1.5 transition-all duration-300">
                            Read Story
                            <ArrowRight size={14} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="clear-both"></div>
                </div>
              )}

              {/* OTHER POSTS GRID */}
              {gridPosts.length > 0 && (
                <div>
                  <h3 className="text-lg font-serif text-primary font-bold tracking-widest uppercase mb-8 flex items-center gap-3">
                    <span className="w-6 h-[2px] bg-secondary" />
                    More Stories
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {gridPosts.map((post, idx) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.6 }}
                      >
                        <Link href={`/blog/${post.slug}`} className="group block h-full">
                          <div className="bg-white border border-gray-100 rounded-none overflow-hidden hover:shadow-xl hover:border-secondary/20 transition-all duration-500 flex flex-col justify-between h-full shadow-sm relative">
                            {/* Decorative corner highlights */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-secondary/0 group-hover:border-secondary/60 group-hover:w-4 group-hover:h-4 transition-all duration-300" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-secondary/0 group-hover:border-secondary/60 group-hover:w-4 group-hover:h-4 transition-all duration-300" />

                            <div>
                              {/* Image */}
                              <div className="relative h-56 w-full overflow-hidden">
                                <img
                                  src={post.mainImage}
                                  alt={post.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                                <span className="absolute top-4 left-4 bg-primary text-white font-bold text-[8px] uppercase tracking-widest px-3 py-1.5 border border-secondary/20 shadow-sm">
                                  {post.category}
                                </span>
                              </div>

                              {/* Content */}
                              <div className="p-6">
                                {/* Metadata */}
                                <div className="flex items-center gap-4 text-[9px] uppercase tracking-widest text-muted-foreground font-bold mb-4">
                                  <span className="flex items-center gap-1">
                                    <Calendar size={11} className="text-secondary" />
                                    {post.date}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Clock size={11} className="text-secondary" />
                                    {post.readTime}
                                  </span>
                                </div>

                                <h4 className="text-xl font-serif font-bold text-primary mb-3 leading-snug group-hover:text-secondary transition-colors duration-300">
                                  {post.title}
                                </h4>
                                <p className="text-xs text-muted-foreground leading-relaxed font-light line-clamp-3">
                                  {post.excerpt}
                                </p>
                              </div>
                            </div>

                            {/* Author & Button Footer */}
                            <div className="p-6 pt-4 border-t border-gray-50 flex items-center justify-between bg-[#fdfcf8]">
                              <div className="flex items-center gap-2">
                                <img
                                  src={post.author.avatar}
                                  alt={post.author.name}
                                  className="w-8 h-8 rounded-full object-cover border border-secondary/25 shadow-sm"
                                />
                                <span className="text-[10px] font-bold text-primary">{post.author.name}</span>
                              </div>

                              <div className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest text-primary group-hover:text-secondary group-hover:translate-x-1 transition-all duration-300">
                                Read Story
                                <ArrowRight size={10} />
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Premium Newsletter Component */}
      <section className="px-6 mt-24 relative z-10">
        <div className="max-w-4xl mx-auto bg-[#0F231B] text-white border-[4px] border-double border-secondary/40 rounded-none p-8 md:p-16 shadow-2xl relative overflow-hidden text-center">
          {/* Decorative Background Pattern */}
          <div className="absolute inset-0 bg-ganesh-pattern-royal opacity-[0.03] pointer-events-none mix-blend-plus-lighter" />
          
          <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-secondary/50" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-secondary/50" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-secondary/50" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-secondary/50" />

          <div className="relative z-10 max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4 text-secondary">
              <Sparkles size={16} className="animate-pulse" />
              <span className="text-xs uppercase font-serif tracking-[0.2em] font-bold">The Scent of Knowledge</span>
              <Sparkles size={16} className="animate-pulse" />
            </div>

            <h3 className="text-3xl md:text-4xl font-serif mb-4">Subscribe to Our Wisdom Journal</h3>
            <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed mb-8">
              Join our global circle. Receive quarterly updates detailing advanced botanical research, aromatherapy blending formulations, and seasonal crop harvests.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-4 justify-center items-stretch">
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="bg-white/5 border border-secondary/30 rounded-none px-6 py-3 text-sm text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary flex-1 transition-all"
              />
              <button
                type="submit"
                className="bg-secondary text-primary hover:bg-white hover:text-primary transition-all duration-300 font-bold uppercase tracking-widest text-xs px-8 py-3 whitespace-nowrap shadow-md active:translate-y-0.5"
              >
                Join Circle
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
