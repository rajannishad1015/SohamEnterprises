import { Product, products } from "./products";

export interface CategoryData {
  slug: string;
  name: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  faqs: { question: string; answer: string }[];
}

export const CATEGORIES: Record<string, CategoryData> = {
  "essential-oils": {
    slug: "essential-oils",
    name: "Pure Essential Oils",
    seoTitle: "Pure Essential Oils Wholesale Supplier & Manufacturer Mumbai | Soham Enterprises",
    metaDescription: "Buy 100% pure steam-distilled essential oils in bulk from Soham Enterprises, Kalbadevi, Mumbai. Lab-tested GC/MS quality, wholesale drums, same-day Mumbai delivery.",
    h1: "Pure Essential Oils – Wholesale Supplier & Manufacturer in Mumbai",
    intro: "Soham Enterprises is a premier bulk supplier and distiller of 100% pure, therapeutic-grade essential oils located in Kalbadevi, Mumbai. Sourced from pristine botanical origins, our oils undergo rigorous GC/MS validation to meet pharmaceutical, cosmetic, and perfumery standards. Available in sample bottles (500ml, 1kg) and bulk commercial drums (5kg, 25kg, 200kg) with same-day Mumbai dispatch.",
    faqs: [
      {
        question: "Where can I buy pure essential oils in bulk in Mumbai?",
        answer: "You can purchase authentic, unadulterated essential oils directly from Soham Enterprises, 2nd Floor, 20/24, Old Hanuman Lane, Zaveri Bazaar, Kalbadevi, Mumbai 400002. Call +91 99309 96570 or +91 99302 82855 for wholesale pricing."
      },
      {
        question: "Do you supply Certificates of Analysis (COA) with bulk essential oils?",
        answer: "Yes, every batch is supplied with comprehensive COA and TDS documentation confirming botanical purity, refractive index, and specific gravity."
      },
      {
        question: "What minimum order quantities (MOQ) are available?",
        answer: "We support formulation trials with 500ml / 1kg trial packs, as well as commercial supply in 5kg carboys and 25kg/200kg drums for factories."
      }
    ]
  },
  "carrier-oils": {
    slug: "carrier-oils",
    name: "Cold-Pressed Carrier Oils",
    seoTitle: "Cold-Pressed Carrier Oils Wholesale Supplier Mumbai | Soham Enterprises",
    metaDescription: "Wholesale supplier of virgin cold-pressed carrier oils in Mumbai. Bulk Golden Jojoba, Argan, Almond, Rosehip, Avocado & Kalonji oils for cosmetic formulation.",
    h1: "Cold-Pressed Carrier Oils – Bulk Cosmetic Grade Supplier in Mumbai",
    intro: "Discover our premium selection of virgin, cold-pressed carrier oils engineered for cosmetic laboratories, Ayurvedic formulators, and soap manufacturers. Cold-pressing preserves natural fatty acids, squalene, and vitamins, guaranteeing maximum stability and skin compatibility. Stocked at our Mumbai warehouse for immediate trade fulfillment.",
    faqs: [
      {
        question: "Which carrier oils are best for skincare serums and hair oils?",
        answer: "Golden Jojoba Oil, Moroccan Argan Oil, Sweet Almond Oil, and Rosehip Seed Oil are the premier carrier bases due to their non-comedogenic rating and high antioxidant concentration."
      },
      {
        question: "Are your carrier oils 100% cold-pressed without hexane extraction?",
        answer: "Yes, our virgin carrier oils are strictly expeller cold-pressed without solvent refining, retaining their therapeutic lipids and natural colour."
      }
    ]
  },
  "aroma-chemicals": {
    slug: "aroma-chemicals",
    name: "Aroma Chemicals & Specialty Compounds",
    seoTitle: "Aroma Chemicals & Flavor Compounds Supplier Mumbai | Soham Enterprises",
    metaDescription: "Leading supplier of industrial aroma chemicals, isolated botanical fractions, Anethol, Methyl Salicylate, and Menthol Crystals in Kalbadevi, Mumbai.",
    h1: "Aroma Chemicals & Industrial Fragrance Compounds in Mumbai",
    intro: "Soham Enterprises provides high-assay aroma chemicals, pure isolated compounds, and flavoring fractions for fragrance creation, pharmaceuticals, and industrial formulations. Located in Mumbai's chemical trade center (Kalbadevi / Zaveri Bazaar), we offer immediate ex-stock availability and pan-India shipping.",
    faqs: [
      {
        question: "Do you supply USP / IP grade aroma chemicals and crystals?",
        answer: "Yes, our Menthol Crystals, Thymol Crystals, Methyl Salicylate, and Anethol meet rigorous industrial and pharmaceutical grade specifications."
      },
      {
        question: "Can I pick up commercial quantities directly from your Mumbai warehouse?",
        answer: "Yes, clients can pick up trade orders directly from our Kalbadevi, Zaveri Bazaar warehouse or request express courier dispatch."
      }
    ]
  },
  "traditional-extracts": {
    slug: "traditional-extracts",
    name: "Traditional Herbal & Botanical Extracts",
    seoTitle: "Traditional Herbal Extracts & Pure Camphor Supplier Mumbai | Soham Enterprises",
    metaDescription: "Wholesale supplier of pure Bhimseni Kapoor, Nagarmotha Oil, Mehandi Oil, and traditional Indian herbal extracts in Kalbadevi, Mumbai.",
    h1: "Traditional Botanical Extracts & Authentic Bhimseni Kapoor Mumbai",
    intro: "Honor ancient Ayurvedic heritage with our range of traditional botanical extracts and unadulterated resins. From authentic edible-grade Bhimseni Kapoor (pure Borneo camphor) to artisanal Nagarmotha and Mehandi oils, we provide pristine raw materials for incense makers, Ayurvedic physicians, and wellness brands.",
    faqs: [
      {
        question: "Is your Bhimseni Kapoor 100% pure and natural?",
        answer: "Yes, our Bhimseni Kapoor is authentic crystalline camphor without synthetic wax or filler compounds, burning completely without leaving ash residue."
      }
    ]
  }
};

const CARRIER_OIL_KEYWORDS = [
  "almond", "apricot", "avocado", "argan", "carrot seed", "grape seed", 
  "jojoba", "kalonji", "neem", "olive", "rosehip", "rose hip", "walnut", 
  "wheat germ", "calendula"
];

const AROMA_CHEMICAL_KEYWORDS = [
  "anethol", "menthol", "methyl salicylate", "thymol", "turpentine"
];

const TRADITIONAL_KEYWORDS = [
  "bhimseni", "kapoor", "camphor", "cajuput", "mehandi", "nagarmotha"
];

export function getProductCategorySlug(product: Product): string {
  const name = product.name.toLowerCase();
  
  if (AROMA_CHEMICAL_KEYWORDS.some(k => name.includes(k))) {
    return "aroma-chemicals";
  }
  if (TRADITIONAL_KEYWORDS.some(k => name.includes(k))) {
    return "traditional-extracts";
  }
  if (CARRIER_OIL_KEYWORDS.some(k => name.includes(k))) {
    return "carrier-oils";
  }
  return "essential-oils";
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(p => getProductCategorySlug(p) === categorySlug);
}
