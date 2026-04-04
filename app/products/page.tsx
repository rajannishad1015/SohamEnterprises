import { ProductGrid } from "@/components/products/ProductGrid";
import { Metadata } from "next";
import { ProductSchema } from "@/components/seo/ProductSchema";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Premium Essential Oils & Catalog",
  description: "Browse our expansive catalog of over 60+ natural extracts, industrial oils, and pharmaceutical grade compounds. Exporting global quality ingredients.",
  alternates: {
    canonical: "/products",
  }
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#fdfcf8] font-sans text-foreground">
      <ProductSchema products={products} />
      <ProductGrid />
    </main>
  );
}
