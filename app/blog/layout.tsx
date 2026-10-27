import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Essential Oil Insights & Formulation Guides | Blog | Soham Enterprises",
  description: "Expert articles on essential oil distillation, testing pure oils, carrier oil blending formulas, and wholesale sourcing tips for cosmetic and wellness brands.",
  keywords: [
    "Essential Oil Blog",
    "Essential Oil Testing Guide",
    "Aromatherapy Formulation",
    "Carrier Oil Guide",
    "Essential Oils Wholesale Mumbai Blog"
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Essential Oil Knowledge & Formulation Journal | Soham Enterprises",
    description: "Read in-depth guides on GC/MS testing, carrier oil selections, and bulk sourcing for cosmetics and wellness formulations.",
    url: "/blog",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Soham Enterprises Wisdom Journal",
      },
    ],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
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
        "name": "Blog",
        "item": `${baseUrl}/blog`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
