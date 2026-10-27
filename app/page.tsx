import { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Benefits } from "@/components/home/Benefits";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Contact } from "@/components/home/Contact";

export const metadata: Metadata = {
  title: "Pure Essential Oils Wholesale Supplier & Manufacturer Mumbai | Soham Enterprises",
  description: "Buy 100% pure therapeutic grade essential oils, cold-pressed carrier oils, and natural extracts in bulk from Soham Enterprises, Kalbadevi, Mumbai. Same-day Mumbai dispatch & pan-India delivery.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pure Essential Oils Wholesale Supplier & Manufacturer Mumbai | Soham Enterprises",
    description: "Premium wholesale supplier of pure essential oils, carrier oils, and aroma chemicals in Mumbai. COA tested, bulk orders, and trade samples available.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Soham Enterprises Mumbai - Essential Oils Wholesale",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedProducts />
      <Benefits />
      <Contact />
    </main>
  );
}
