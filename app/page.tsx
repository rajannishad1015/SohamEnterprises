import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Benefits } from "@/components/home/Benefits";
import { Footer } from "@/components/layout/Footer";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Benefits />
      <Contact />
      <Footer />
    </main>
  );
}
