import { Hero } from "@/components/home/Hero";
import { Benefits } from "@/components/home/Benefits";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Contact } from "@/components/home/Contact";
import { LocalBusinessJsonLd } from "next-seo";

export default function Home() {
  return (
    <main className="min-h-screen">
      <LocalBusinessJsonLd
        type="Store"
        name="Soham Enterprise"
        description="Premium global suppliers of essential oils, natural extracts, and industrial chemical compounds."
        url="https://sohamenterprises.vercel.app"
        telephone="+919930996570"
        address={{
          streetAddress: '2 floor, 20/24, Old Hanuman Ln, near k m chavan talior, Zaveri Bazaar, Kalbadevi',
          addressLocality: 'Mumbai',
          addressRegion: 'Maharashtra',
          postalCode: '400002',
          addressCountry: 'IN',
        }}
        geo={{
          latitude: 18.948604,
          longitude: 72.828613,
        }}
        image={[
          'https://sohamenterprises.vercel.app/logo.png',
          'https://sohamenterprises.vercel.app/hero-bg.png'
        ]}
      />
      <Hero />
      <FeaturedProducts />
      <Benefits />
      <Contact />
    </main>
  );
}
