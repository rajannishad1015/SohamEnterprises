import { products, getSlug, getProductBySlug } from "@/lib/products";
import { productSeoData } from "@/lib/productSeoData";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronLeft, 
  Leaf, 
  Sparkles, 
  Check, 
  Phone, 
  MessageCircle, 
  MapPin, 
  HelpCircle, 
  ShieldCheck, 
  Truck, 
  ArrowRight,
  ChevronDown,
  Building2,
  FileCheck
} from "lucide-react";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: getSlug(product.name),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | Soham Enterprises",
    };
  }

  const seo = productSeoData[slug];

  const title = seo?.seoTitle || `${product.name} Wholesale Supplier & Bulk Manufacturer Mumbai | Soham Enterprises`;
  const description = seo?.metaDescription || product.description || `Buy 100% pure lab-tested ${product.name} in bulk from Soham Enterprises, Kalbadevi, Mumbai. Available for cosmetic, pharmaceutical, and aroma formulations. Same-day Mumbai dispatch & pan-India delivery.`;
  const keywords = seo?.secondaryKeywords 
    ? [seo.primaryKeyword, ...seo.secondaryKeywords] 
    : [
        product.name,
        `${product.name} wholesale Mumbai`,
        `${product.name} bulk price India`,
        `${product.name} supplier`,
        "Essential Oils Mumbai",
        "Pure Essential Oils Bulk",
        "Soham Enterprises"
      ];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: product.image ? [product.image] : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: product.image ? [product.image] : [],
    },
    alternates: {
      canonical: `/products/${slug}`,
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const seo = productSeoData[slug];
  const h1Title = seo?.h1 || `${product.name} – Pure Essential Oil Supplier in Mumbai`;
  const imageAlt = seo?.imageAlt || `Pure ${product.name} Essential Oil – best quality supplier in Mumbai, Soham Enterprises`;
  
  // WhatsApp quotation link
  const quoteMessage = `Hi Soham Enterprises, I would like to request a quote / sample for ${product.name} (Bulk Quantity). Please share details.`;
  const whatsappUrl = `https://wa.me/919930996570?text=${encodeURIComponent(quoteMessage)}`;

  // Default / custom key features
  const keyFeatures = seo?.keyFeatures || [
    "Supplied directly from Soham Enterprises, Kalbadevi, Mumbai",
    "100% Pure & Lab-Tested Quality",
    "Bulk & trade quantities available; samples on request",
    "Same-day Mumbai delivery & Pan-India dispatch",
    "COA & batch quality details available on request"
  ];

  // Default / custom FAQs
  const faqs = seo?.faqs || [
    {
      question: `Where can I buy pure ${product.name} in bulk in Mumbai?`,
      answer: `You can buy authentic, pure ${product.name} in bulk directly from Soham Enterprises, 2nd Floor, 20/24 Old Hanuman Lane, Zaveri Bazaar, Kalbadevi, Mumbai 400002. Contact +91 99309 96570 or email sohamessentialoilsofficial@gmail.com for bulk quotes.`
    },
    {
      question: `Do you deliver ${product.name} across Mumbai and India?`,
      answer: `Yes, Soham Enterprises provides same-day dispatch and delivery across Mumbai, as well as reliable pan-India courier and freight shipping for both sample and commercial orders.`
    },
    {
      question: `Can I get Certificate of Analysis (COA) and batch test reports for ${product.name}?`,
      answer: `Yes, we provide batch test reports, Technical Data Sheets (TDS), and Certificates of Analysis (COA) upon request to ensure formulation compliance for cosmetics, aromatherapy, and wellness brands.`
    }
  ];

  // Related products lookup
  const relatedProducts = (seo?.relatedSlugs || ["lavender-oil", "peppermint-oil", "tea-tree-oil"])
    .map(s => getProductBySlug(s))
    .filter((p): p is typeof product => Boolean(p && p.name !== product.name))
    .slice(0, 3);

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sohamenterprises.vercel.app";

  return (
    <main className="min-h-screen bg-[#fdfcf8] pt-28 pb-20">
      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": h1Title,
            "sku": `SO-${slug}`,
            "mpn": `MPN-${slug.toUpperCase()}`,
            "category": seo?.categoryType || "Essential Oils",
            "image": product.image ? [`${baseUrl}${product.image}`] : [],
            "description": seo?.metaDescription || product.description || `Pure ${product.name} wholesale supply from Soham Enterprises, Mumbai.`,
            "brand": {
              "@type": "Brand",
              "name": "Soham Enterprises"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "lowPrice": "350",
              "highPrice": "4500",
              "offerCount": "10",
              "priceValidUntil": "2027-12-31",
              "itemCondition": "https://schema.org/NewCondition",
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "Organization",
                "name": "Soham Enterprises",
                "telephone": "+919930996570",
                "url": baseUrl,
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "2nd Floor, 20/24, Old Hanuman Lane, Zaveri Bazaar, Kalbadevi",
                  "addressLocality": "Mumbai",
                  "addressRegion": "Maharashtra",
                  "postalCode": "400002",
                  "addressCountry": "IN"
                }
              }
            }
          }),
        }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          }),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
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
                "name": product.name,
                "item": `${baseUrl}/products/${slug}`
              }
            ]
          }),
        }}
      />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Breadcrumbs Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 text-stone-500 hover:text-[#D4AF37] transition-colors group"
          >
            <div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/5 transition-all">
              <ChevronLeft size={18} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest">Back to Catalog</span>
          </Link>

          <span className="text-[11px] text-stone-400 font-medium hidden sm:inline-block">
            Home / Products / <span className="text-stone-700 font-bold">{product.name}</span>
          </span>
        </div>

        {/* Top Product Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Product Image Card */}
          <div className="relative aspect-square bg-[#f8f8f5] rounded-3xl overflow-hidden border border-stone-200/60 p-8 md:p-12 flex items-center justify-center group shadow-sm">
            {product.image ? (
              <Image 
                src={product.image}
                alt={imageAlt}
                fill
                className="object-contain p-6 md:p-10 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                priority
              />
            ) : (
              <Leaf size={120} className="text-primary/10" strokeWidth={1} />
            )}
            
            {/* Badges Overlay */}
            <div className="absolute top-6 left-6 flex flex-col gap-2">
              <span className="px-3.5 py-1.5 bg-white/95 backdrop-blur border border-[#D4AF37]/30 text-[#1A3C2F] text-[10px] font-bold uppercase tracking-[0.25em] shadow-sm flex items-center gap-1.5 rounded-full">
                <Sparkles size={12} className="text-[#D4AF37]" fill="currentColor" /> Authentic Pure
              </span>
              {seo?.botanicalName && (
                <span className="px-3 py-1 bg-[#1A3C2F]/5 text-[#1A3C2F] text-[11px] italic font-serif rounded-full border border-[#1A3C2F]/10">
                  {seo.botanicalName}
                </span>
              )}
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[11px] text-stone-500 bg-white/80 backdrop-blur px-4 py-2 rounded-xl border border-stone-200/60">
              <span className="flex items-center gap-1 font-medium">
                <MapPin size={13} className="text-[#D4AF37]" /> Mumbai HQ Warehouse
              </span>
              <span className="font-semibold text-[#1A3C2F]">Est. 2014</span>
            </div>
          </div>

          {/* Right: Product Details & Purchase Actions */}
          <div className="flex flex-col h-full justify-between">
            <div>
              {/* Category & Badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#d4af37]/15 text-[#1a3c2f] border border-[#d4af37]/30">
                  {seo?.categoryType || "Premium Pure Oil"}
                </span>
                <span className="text-xs text-stone-400">•</span>
                <span className="text-xs font-semibold text-stone-500 tracking-wider">
                  Soham Enterprises, Mumbai
                </span>
              </div>

              {/* Exact H1 Line as per SEO Pack */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-[#1A3C2F] font-bold mb-4 leading-tight">
                {h1Title}
              </h1>

              {/* Quick Specs Strip */}
              <div className="grid grid-cols-3 gap-3 py-4 my-4 border-y border-stone-200/70 text-center">
                <div className="p-2 bg-stone-50 rounded-xl">
                  <span className="text-[10px] text-stone-400 uppercase tracking-widest block mb-0.5">Grade</span>
                  <span className="text-xs md:text-sm font-bold text-[#1A3C2F]">100% Pure & Lab Tested</span>
                </div>
                <div className="p-2 bg-stone-50 rounded-xl">
                  <span className="text-[10px] text-stone-400 uppercase tracking-widest block mb-0.5">Supply</span>
                  <span className="text-xs md:text-sm font-bold text-[#1A3C2F]">Bulk & Samples</span>
                </div>
                <div className="p-2 bg-stone-50 rounded-xl">
                  <span className="text-[10px] text-stone-400 uppercase tracking-widest block mb-0.5">Dispatch</span>
                  <span className="text-xs md:text-sm font-bold text-[#1A3C2F]">Same-Day Mumbai</span>
                </div>
              </div>

              {/* Key Features Bullet List */}
              <div className="my-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#1A3C2F] mb-3 flex items-center gap-2">
                  <Leaf size={14} className="text-[#D4AF37]" /> Key Highlights
                </h3>
                <ul className="space-y-2.5">
                  {keyFeatures.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-stone-700 text-xs md:text-sm">
                      <div className="w-5 h-5 rounded-full bg-[#1A3C2F]/5 flex items-center justify-center shrink-0 mt-0.5 text-[#1A3C2F]">
                        <Check size={12} strokeWidth={2.5} className="text-[#D4AF37]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              {product.tags && product.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 my-5">
                  {product.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-stone-100 text-stone-600 text-[10px] font-semibold uppercase tracking-wider rounded-md border border-stone-200">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* CTAs Section: Direct WhatsApp Quote & Phone Call */}
            <div className="pt-6 border-t border-stone-200/70">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1A3C2F] text-white py-4 px-6 rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-[#D4AF37] hover:text-[#1A3C2F] transition-all shadow-md flex items-center justify-center gap-2.5 active:scale-95 group"
                >
                  <MessageCircle size={18} className="text-[#D4AF37] group-hover:text-[#1A3C2F] transition-colors" />
                  <span>Request Quote / WhatsApp</span>
                </a>

                <a 
                  href="tel:+919930996570" 
                  className="bg-white border-2 border-[#1A3C2F] text-[#1A3C2F] py-4 px-6 rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-[#1A3C2F] hover:text-white transition-all flex items-center justify-center gap-2.5 active:scale-95"
                >
                  <Phone size={17} />
                  <span>Call: +91 99309 96570</span>
                </a>
              </div>

              <p className="text-[11px] text-stone-500 text-center sm:text-left flex items-center justify-center sm:justify-start gap-1.5">
                <Truck size={14} className="text-[#D4AF37]" />
                <span>Bulk inquiries, testing samples, and export orders processed promptly.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Description Section (H2) */}
        <section className="mt-16 md:mt-24 pt-12 border-t border-stone-200">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-[#D4AF37]" />
              <span className="text-[#D4AF37] font-bold uppercase tracking-[0.2em] text-xs">
                Business & Formulation Overview
              </span>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-serif text-[#1A3C2F] font-bold mb-6">
              {seo?.aboutHeading || `About ${product.name}`}
            </h2>

            <div className="prose prose-stone max-w-none text-base md:text-lg text-stone-700 leading-relaxed space-y-4">
              <p>
                {seo?.aboutDescription || product.description || `Our ${product.name} is meticulously extracted ensuring the highest therapeutic properties. Ideal for professionals in pharmaceuticals, cosmetics, and aromatherapy seeking consistent chemical profiles.`}
              </p>
            </div>

            {/* Quick Sourcing & Quality Box */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 bg-white border border-stone-200 rounded-2xl shadow-sm">
                <ShieldCheck size={24} className="text-[#D4AF37] mb-2" />
                <h4 className="font-bold text-sm text-[#1A3C2F] mb-1">Quality Certified</h4>
                <p className="text-xs text-stone-600">Every batch undergoes rigorous quality checks before supply.</p>
              </div>

              <div className="p-5 bg-white border border-stone-200 rounded-2xl shadow-sm">
                <Building2 size={24} className="text-[#D4AF37] mb-2" />
                <h4 className="font-bold text-sm text-[#1A3C2F] mb-1">Direct Mumbai Supplier</h4>
                <p className="text-xs text-stone-600">Located at Kalbadevi, Zaveri Bazaar for immediate trade pickups.</p>
              </div>

              <div className="p-5 bg-white border border-stone-200 rounded-2xl shadow-sm">
                <FileCheck size={24} className="text-[#D4AF37] mb-2" />
                <h4 className="font-bold text-sm text-[#1A3C2F] mb-1">COA & TDS Available</h4>
                <p className="text-xs text-stone-600">Complete documentation provided with bulk commercial orders.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section (H2 with Expandable Accordion) */}
        <section className="mt-16 md:mt-24 pt-12 border-t border-stone-200">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle size={18} className="text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-bold uppercase tracking-[0.2em] text-xs">
                Common Buyer Questions
              </span>
            </div>

            <h2 className="text-2xl md:text-4xl font-serif text-[#1A3C2F] font-bold mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details 
                  key={idx} 
                  className="group bg-white border border-stone-200 rounded-2xl p-5 md:p-6 transition-all duration-300 open:border-[#D4AF37]/50 open:shadow-md"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-stone-800 text-sm md:text-base hover:text-[#D4AF37] transition-colors">
                    <span className="pr-4">{faq.question}</span>
                    <ChevronDown size={18} className="text-[#D4AF37] transition-transform duration-300 group-open:rotate-180 shrink-0" />
                  </summary>
                  <div className="mt-4 pt-4 border-t border-stone-100 text-stone-600 text-sm md:text-base leading-relaxed font-light">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>

            {/* Bottom Call to Action banner */}
            <div className="mt-8 p-6 bg-gradient-to-r from-[#1A3C2F] to-[#0F231B] text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-serif text-lg font-bold">Have custom requirements or need a sample?</p>
                <p className="text-xs text-white/70">Contact our sales desk directly: +91 99309 96570 | sohamessentialoilsofficial@gmail.com</p>
              </div>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D4AF37] text-[#1A3C2F] px-6 py-3 rounded-xl font-bold uppercase text-xs tracking-wider hover:bg-white transition-all whitespace-nowrap shadow"
              >
                Get Custom Quote
              </a>
            </div>
          </div>
        </section>

        {/* Related Oils Section (Internal Linking Boost) */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 md:mt-24 pt-12 border-t border-stone-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-[#D4AF37] font-bold uppercase tracking-[0.2em] text-xs block mb-1">
                  Complementary Selection
                </span>
                <h2 className="text-2xl md:text-3xl font-serif text-[#1A3C2F] font-bold">
                  Related Pure Oils & Extracts
                </h2>
              </div>
              <Link 
                href="/products" 
                className="text-xs font-bold uppercase tracking-wider text-[#1A3C2F] hover:text-[#D4AF37] flex items-center gap-1"
              >
                View Catalog <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => {
                const relSlug = getSlug(rel.name);
                return (
                  <Link 
                    key={relSlug}
                    href={`/products/${relSlug}`}
                    className="group bg-white p-6 rounded-2xl border border-stone-200/80 hover:border-[#D4AF37] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
                  >
                    <div className="relative aspect-square w-full bg-[#f8f8f5] rounded-xl mb-4 overflow-hidden flex items-center justify-center p-6">
                      {rel.image ? (
                        <Image 
                          src={rel.image} 
                          alt={`Pure ${rel.name} Essential Oil - Soham Enterprises`}
                          fill
                          className="object-contain p-4 mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <Leaf className="w-12 h-12 text-[#1A3C2F]/20" />
                      )}
                    </div>
                    <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-widest mb-1">Pure Extract</span>
                    <h3 className="font-serif font-bold text-lg text-[#1A3C2F] group-hover:text-[#D4AF37] transition-colors mb-2">
                      {rel.name}
                    </h3>
                    <p className="text-xs text-stone-500 line-clamp-2 mb-4 leading-relaxed font-light">
                      {rel.description}
                    </p>
                    <div className="mt-auto pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-[#1A3C2F] group-hover:text-[#D4AF37]">
                      <span>View Specifications</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
