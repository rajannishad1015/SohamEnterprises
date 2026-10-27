import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Leading Essential Oils Manufacturer & Supplier Mumbai | Soham Enterprises",
  description: "Established in 2014 in Kalbadevi, Mumbai, Soham Enterprises is a trusted manufacturer and wholesale supplier of pure essential oils, carrier oils, and botanical extracts.",
  keywords: [
    "About Soham Enterprises",
    "Essential Oil Manufacturer Mumbai",
    "Essential Oil Supplier Kalbadevi",
    "Bulk Essential Oil Company India",
    "Ayurvedic Extracts Manufacturer"
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Soham Enterprises | Pure Essential Oils Supplier Mumbai",
    description: "Discover the heritage, quality standards, and distillation process of Soham Enterprises, supplying pure oils since 2014.",
    url: "/about",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "About Soham Enterprises",
      },
    ],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
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
        "name": "About Us",
        "item": `${baseUrl}/about`
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
