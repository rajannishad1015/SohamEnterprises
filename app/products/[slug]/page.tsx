import { products, getSlug, getProductBySlug } from "@/lib/products";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ShoppingBag, Leaf, Sparkles, Check, Phone } from "lucide-react";
// Removed unused ProductSchema import

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
      title: "Product Not Found | Soham Enterprise",
    };
  }

  const title = `Pure ${product.name} Essential Oil - High Quality Wholesale | Soham Enterprise`;
  const description = product.description || `Buy 100% pure and premium ${product.name} Essential Oil at wholesale prices from Soham Enterprise. Best quality for pharmaceutical, cosmetic, and fragrance industries.`;

  return {
    title,
    description,
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
      canonical: `https://sohamenterprises.vercel.app/products/${slug}`,
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#fdfcf8] pt-32 pb-20">
      {/* JSON-LD Schema for this specific product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": `Pure ${product.name} Essential Oil`,
            "image": product.image ? [`https://sohamenterprises.vercel.app${product.image}`] : [],
            "description": product.description || `100% Pure and Natural ${product.name} Essential Oil. Premium wholesale quality for diverse industrial applications.`,
            "brand": {
              "@type": "Brand",
              "name": "Soham Enterprise"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "lowPrice": product.rate.split('/')[0].replace(/[^0-9]/g, ''),
              "availability": "https://schema.org/InStock"
            }
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
                "item": "https://sohamenterprises.vercel.app/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Products",
                "item": "https://sohamenterprises.vercel.app/products"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": product.name,
                "item": `https://sohamenterprises.vercel.app/products/${getSlug(product.name)}`
              }
            ]
          }),
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Breadcrumbs / Back Button */}
        <Link 
          href="/products" 
          className="inline-flex items-center gap-2 text-stone-500 hover:text-[#D4AF37] transition-colors mb-12 group"
        >
          <div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/5 transition-all">
            <ChevronLeft size={18} />
          </div>
          <span className="text-sm font-bold uppercase tracking-widest">Back to Catalog</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Product Image */}
          <div className="relative aspect-square bg-[#f5f5f5] rounded-3xl overflow-hidden border border-stone-100 p-12 flex items-center justify-center group">
            {product.image ? (
              <Image 
                src={product.image}
                alt={`Pure ${product.name} Essential Oil - High Resolution Image`}
                fill
                className="object-contain p-8 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                priority
              />
            ) : (
              <Leaf size={120} className="text-primary/10" strokeWidth={1} />
            )}
            
            {/* Decorative Overlay */}
            <div className="absolute inset-0 border-[20px] border-white/40 pointer-events-none" />
            <div className="absolute top-8 left-8">
               <span className="px-4 py-1 bg-white/95 backdrop-blur border border-[#D4AF37]/20 text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] shadow-sm flex items-center gap-2">
                  <Sparkles size={12} fill="currentColor" /> Authentic Pure
               </span>
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col h-full">
            <div className="mb-8">
               <span className="text-xs text-[#D4AF37] font-bold uppercase tracking-[0.4em] mb-4 block">
                  Ethically Sourced & Pure
               </span>
               <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6 leading-tight">
                  {product.name}
               </h1>
               <div className="flex items-center gap-4 mb-8 pb-8 border-b border-stone-100">
                  <div className="flex flex-col">
                     <span className="text-[10px] text-stone-400 uppercase tracking-widest mb-1">Wholesale Rate</span>
                     <span className="text-3xl font-bold text-primary">₹{product.rate}</span>
                  </div>
                  <div className="h-10 w-px bg-stone-100 mx-2" />
                  <div className="flex flex-col">
                     <span className="text-[10px] text-stone-400 uppercase tracking-widest mb-1">Grade</span>
                     <span className="text-sm font-bold text-stone-600 uppercase tracking-wider">Premium Pharma</span>
                  </div>
               </div>
            </div>

            <div className="space-y-8 mb-12">
               <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                     <Leaf size={14} className="text-[#D4AF37]" /> Key Attributes
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                     {[
                        "100% Pure & Natural",
                        "GC/MS Tested Quality",
                        "Wholesale Distribution",
                        "Bulk Packaging Available",
                        "Custom Formulations",
                        "Global Export Grade"
                     ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-stone-600 text-sm">
                           <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40" />
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>

               <div className="p-6 bg-stone-50 border border-stone-100 rounded-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 text-[#D4AF37] group-hover:scale-110 transition-transform duration-500">
                     <Sparkles size={40} />
                  </div>
                  <h3 className="text-sm font-bold text-primary mb-2">Detailed Description</h3>
                  <p className="text-sm text-stone-500 leading-relaxed italic">
                     {product.description || `Our ${product.name} is meticulously extracted ensuring the highest therapeutic properties. Ideal for professionals in pharmaceuticals, cosmetics, and aromatherapy seeking consistent chemical profiles.`}
                  </p>
               </div>

               {product.tags && product.tags.length > 0 && (
                 <div className="flex flex-wrap gap-2 pt-4">
                   {product.tags.map(tag => (
                     <span key={tag} className="px-3 py-1 bg-stone-100 text-stone-500 text-[10px] font-bold uppercase tracking-wider rounded-full border border-stone-200">
                       #{tag}
                     </span>
                   ))}
                 </div>
               )}
            </div>

            <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
               <button className="bg-stone-900 text-white py-5 px-8 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#D4AF37] transition-all shadow-xl shadow-stone-200 flex items-center justify-center gap-3 active:scale-95">
                  <ShoppingBag size={18} /> Add to Order
               </button>
               <Link 
                  href="https://wa.me/919137450702" 
                  className="bg-white border-2 border-stone-900 text-stone-900 py-5 px-8 rounded-xl font-bold uppercase tracking-widest text-xs hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all flex items-center justify-center gap-3 active:scale-95"
               >
                  <Phone size={18} /> Direct Inquiry
               </Link>
            </div>

            {/* Quality Trust Badges */}
            <div className="mt-12 pt-8 border-t border-stone-100 flex flex-wrap gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
               <div className="flex items-center gap-2">
                  <Check size={16} className="text-green-600" />
                  <span className="text-[10px] uppercase font-bold tracking-widest">ISO Certified</span>
               </div>
               <div className="flex items-center gap-2">
                  <Check size={16} className="text-green-600" />
                  <span className="text-[10px] uppercase font-bold tracking-widest">Cruelty Free</span>
               </div>
               <div className="flex items-center gap-2">
                  <Check size={16} className="text-green-600" />
                  <span className="text-[10px] uppercase font-bold tracking-widest">MSDS Available</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
