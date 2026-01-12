import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductGrid } from "@/components/products/ProductGrid";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#fdfcf8] font-sans text-foreground">
      <Navbar />
      <div className="pt-20"> {/* Add padding top to account for fixed navbar */}
         <ProductGrid />
      </div>
      <Footer />
    </main>
  );
}
