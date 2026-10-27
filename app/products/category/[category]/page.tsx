import { CATEGORIES, getProductsByCategory } from "@/lib/categories";
import { getSlug } from "@/lib/products";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ArrowRight, Leaf, ShieldCheck, Truck, HelpCircle, ChevronDown, Phone, MessageCircle } from "lucide-react";

export async function generateStaticParams() {
  return Object.keys(CATEGORIES).map((category) => ({
    category,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const data = CATEGORIES[category];

  if (!data) {
    return {
      title: "Category Not Found | Soham Enterprises",
    };
  }

  return {
    title: data.seoTitle,
    description: data.metaDescription,
    keywords: [
      data.name,
      `${data.name} Mumbai`,
      `${data.name} wholesale India`,
      `${data.name} bulk manufacturer`,
      "Soham Enterprises Kalbadevi"
    ],
    alternates: {
      canonical: `/products/category/${category}`,
    },
    openGraph: {
      title: data.seoTitle,
      description: data.metaDescription,
      url: `/products/category/${category}`,
      type: "website",
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: `${data.name} - Soham Enterprises Mumbai`,
        },
      ],
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = CATEGORIES[category];

  if (!cat) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(category);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sohamenterprises.vercel.app";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": `${baseUrl}/products`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": cat.name,
        "item": `${baseUrl}/products/category/${category}`
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": cat.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const allCategoryKeys = Object.keys(CATEGORIES);

  return (
    <main className="min-h-screen bg-[#fdfcf8] pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Breadcrumb row */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-stone-500 hover:text-[#D4AF37] transition-colors group"
          >
            <div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/5 transition-all">
              <ChevronLeft size={18} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest">All Products</span>
          </Link>
          <span className="text-[11px] text-stone-400 font-medium hidden sm:inline-block">
            Home / Products / <span className="text-stone-700 font-bold">{cat.name}</span>
          </span>
        </div>

        {/* Category Filter Pills Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-stone-200">
          <Link
            href="/products"
            className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-stone-200 text-stone-600 hover:border-[#D4AF37] transition-colors"
          >
            All Products
          </Link>
          {allCategoryKeys.map((key) => {
            const isCurrent = key === category;
            return (
              <Link
                key={key}
                href={`/products/category/${key}`}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  isCurrent
                    ? "bg-[#1A3C2F] text-white shadow-sm"
                    : "bg-white border border-stone-200 text-stone-600 hover:border-[#D4AF37]"
                }`}
              >
                {CATEGORIES[key].name}
              </Link>
            );
          })}
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-3xl border border-stone-200/80 p-8 md:p-12 mb-12 shadow-sm">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/15 text-[#1A3C2F] rounded-full text-[11px] font-bold uppercase tracking-wider mb-4 border border-[#D4AF37]/30">
              <Leaf size={14} className="text-[#D4AF37]" />
              <span>Wholesale Supply Hub • Mumbai</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif text-[#1A3C2F] font-bold mb-6 leading-tight">
              {cat.h1}
            </h1>
            <p className="text-base md:text-lg text-stone-600 leading-relaxed font-light mb-8">
              {cat.intro}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-stone-100">
              <div className="flex items-center gap-3">
                <ShieldCheck size={20} className="text-[#D4AF37]" />
                <span className="text-xs font-semibold text-stone-700">Lab Tested with COA & TDS</span>
              </div>
              <div className="flex items-center gap-3">
                <Truck size={20} className="text-[#D4AF37]" />
                <span className="text-xs font-semibold text-stone-700">Same-Day Mumbai Dispatch</span>
              </div>
              <div className="flex items-center gap-3">
                <Leaf size={20} className="text-[#D4AF37]" />
                <span className="text-xs font-semibold text-stone-700">Sample & Bulk Quantities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl md:text-2xl font-serif text-[#1A3C2F] font-bold">
              Available Items ({categoryProducts.length})
            </h2>
            <span className="text-xs text-stone-400">Direct Factory / Ex-Stock Supply</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {categoryProducts.map((product) => {
              const slug = getSlug(product.name);
              return (
                <Link
                  key={slug}
                  href={`/products/${slug}`}
                  className="group bg-white rounded-2xl border border-stone-200/80 p-4 md:p-6 hover:border-[#D4AF37] hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div className="relative aspect-square w-full bg-[#f8f8f5] rounded-xl mb-4 overflow-hidden flex items-center justify-center p-4">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={`Pure ${product.name} Wholesale Mumbai - Soham Enterprises`}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        className="object-contain p-2 mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <Leaf className="w-12 h-12 text-[#1A3C2F]/20" />
                    )}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] block mb-1">
                      {cat.name}
                    </span>
                    <h3 className="font-serif font-bold text-sm md:text-base text-[#1A3C2F] group-hover:text-[#D4AF37] transition-colors mb-2 line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-stone-500 line-clamp-2 mb-4 leading-relaxed font-light">
                      {product.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-[#1A3C2F] group-hover:text-[#D4AF37]">
                    <span>View Specifications</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* FAQs Section */}
        <div className="bg-white rounded-3xl border border-stone-200/80 p-8 md:p-12 mb-12 shadow-sm">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4 text-[#D4AF37]">
              <HelpCircle size={18} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Buyer Questions</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif text-[#1A3C2F] font-bold mb-6">
              Frequently Asked Questions about {cat.name}
            </h2>
            <div className="space-y-4">
              {cat.faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group border border-stone-200 rounded-xl p-5 transition-all open:border-[#D4AF37]/50 open:bg-[#fdfcf8]"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-stone-800 text-sm md:text-base hover:text-[#D4AF37]">
                    <span>{faq.question}</span>
                    <ChevronDown size={18} className="text-[#D4AF37] group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="mt-3 pt-3 border-t border-stone-100 text-stone-600 text-sm leading-relaxed font-light">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* Inquiry CTA */}
        <div className="bg-[#1A3C2F] text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-2">Request Bulk Wholesale Quote</h3>
            <p className="text-white/70 text-sm max-w-xl">
              Connect with our Kalbadevi sales desk for commercial inquiries, batch COAs, and trade samples across Mumbai & India.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/919930996570?text=Hi%20Soham%20Enterprises,%20I%20would%20like%20to%20request%20a%20wholesale%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4AF37] text-[#1A3C2F] px-6 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider hover:bg-white transition-all flex items-center gap-2 shadow"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Inquiries</span>
            </a>
            <a
              href="tel:+919930996570"
              className="bg-white/10 border border-white/20 text-white px-6 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider hover:bg-white hover:text-[#1A3C2F] transition-all flex items-center gap-2"
            >
              <Phone size={16} />
              <span>Call: +91 99309 96570</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
