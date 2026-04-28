import { Hero } from "@/components/home/Hero";
import { Benefits } from "@/components/home/Benefits";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Contact } from "@/components/home/Contact";
import { LocalBusinessJsonLd } from "next-seo";

export default function Home() {
  return (
    <main className="min-h-screen">
      <LocalBusinessJsonLd
        useAppDir={true}
        type="Store"
        id="https://sohamenterprises.vercel.app/#local-business"
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
        images={[
          'https://sohamenterprises.vercel.app/logo.png',
          'https://sohamenterprises.vercel.app/hero-bg.png'
        ]}
        openingHours={[
          {
            opens: '09:00',
            closes: '18:00',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday'
            ],
            validFrom: '2024-01-01',
            validThrough: '2030-12-31',
          }
        ]}
      />
      <Hero />
      <FeaturedProducts />
      <Benefits />
      <Contact />
    </main>
  );
}
