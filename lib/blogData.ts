export interface ContentBlock {
  type: "paragraph" | "heading" | "quote" | "image" | "list";
  value: string;
  level?: 2 | 3;
  author?: string;
  caption?: string;
  items?: string[];
}

export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  mainImage: string;
  author: Author;
  content: ContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How to Test the Purity of Essential Oils: GC/MS Analysis & COA Verification Guide",
    slug: "how-to-test-essential-oil-purity-gc-ms-guide",
    category: "Extraction & Science",
    date: "2025-01-15",
    readTime: "6 min read",
    excerpt: "Learn how professional cosmetic manufacturers and laboratories authenticate 100% pure essential oils using Gas Chromatography-Mass Spectrometry (GC/MS) and Certificate of Analysis (COA) benchmarks.",
    mainImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1200&auto=format&fit=crop",
    author: {
      name: "Dr. R. K. Sharma",
      role: "Chief Quality Officer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    content: [
      {
        type: "paragraph",
        value: "For commercial formulators, perfumers, and cosmetic manufacturers, verifying the therapeutic and chemical purity of essential oils is paramount. Synthetic adulterants, diluted carrier bases, and aroma chemicals often masquerade as pure botanical extracts in unregulated markets. Understanding lab testing standards ensures both safety and regulatory compliance."
      },
      {
        type: "heading",
        level: 2,
        value: "What is Gas Chromatography-Mass Spectrometry (GC/MS)?"
      },
      {
        type: "paragraph",
        value: "GC/MS is the gold standard testing method in botanical testing. Gas Chromatography separates volatile organic compounds based on molecular weight and boiling point, while Mass Spectrometry identifies individual chemical compounds by ionizing and fragmenting them. For instance, genuine French or Kashmir Lavender Oil (Lavandula angustifolia) must exhibit balanced ratios of linalool and linalyl acetate, with minimal camphor."
      },
      {
        type: "quote",
        value: "A high-purity essential oil never hides behind vague trade names; its botanical authenticity is indisputably proven by its chemical fingerprint on a gas chromatogram.",
        author: "Quality Team, Soham Enterprises"
      },
      {
        type: "heading",
        level: 2,
        value: "Key Parameters to Check on a Certificate of Analysis (COA)"
      },
      {
        type: "list",
        value: "Essential Quality Checks",
        items: [
          "Specific Gravity & Optical Rotation: Validates that density corresponds to the natural plant harvest standard.",
          "Refractive Index (RI): Detects adulteration with cheaper synthetic solvents or vegetable oils.",
          "Flash Point: Critical for safety documentation, candle manufacturing, and export airfreight shipping.",
          "Heavy Metals & Microbial Testing: Mandatory for skincare, Ayurvedic formulations, and oral care products."
        ]
      },
      {
        type: "paragraph",
        value: "At Soham Enterprises (Kalbadevi, Mumbai), every batch of our essential oils—from Lavender and Tea Tree to Lemongrass and Sandalwood—undergoes strict batch validation with accompanying COA and MSDS documentation for our B2B commercial clients."
      }
    ]
  },
  {
    id: "2",
    title: "Top 7 Cold-Pressed Carrier Oils for Ayurvedic Cosmetics & Skincare Formulations",
    slug: "top-carrier-oils-for-ayurvedic-cosmetics-formulation",
    category: "Natural Wellness",
    date: "2025-01-20",
    readTime: "7 min read",
    excerpt: "Explore the most stable and nourishing cold-pressed carrier oils—including Golden Jojoba, Moroccan Argan, and Sweet Almond—essential for formulating modern clean beauty and Ayurvedic products.",
    mainImage: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1200&auto=format&fit=crop",
    author: {
      name: "Ananya Joshi",
      role: "Botanical Formulation Consultant",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
    },
    content: [
      {
        type: "paragraph",
        value: "While essential oils provide therapeutic fragrance and active biological benefits, carrier oils form the nourishing foundation of serums, hair elixirs, and body butters. Selecting high-stability, cold-pressed vegetable oils ensures prolonged shelf life, optimal skin absorption, and enhanced antioxidant delivery."
      },
      {
        type: "heading",
        level: 2,
        value: "Essential Carrier Oils for Professional Formulations"
      },
      {
        type: "list",
        value: "Top Carrier Oils",
        items: [
          "Golden Jojoba Oil: A liquid wax that closely mimics human sebum, making it non-comedogenic and ideal for all skin types.",
          "Virgin Argan Oil: Rich in squalene and Vitamin E; known as 'Liquid Gold' for hair repair serums and anti-aging elixirs.",
          "Sweet Almond Oil: Lightweight emollient loaded with fatty acids, perfectly suited for baby care lotions and massage blends.",
          "Rosehip Seed Oil: High in naturally occurring tretinoin and pro-vitamin A for brightening and hyperpigmentation remedies.",
          "Black Seed (Kalonji) Oil: Traditional Ayurvedic powerhouse packed with thymoquinone for scalp rejuvenation."
        ]
      },
      {
        type: "heading",
        level: 2,
        value: "Why Cold-Pressed Extraction Matters"
      },
      {
        type: "paragraph",
        value: "Cold-pressing mechanically extracts oil at low temperatures without chemical solvents like hexane. This preserves naturally occurring polyphenols, phytosterols, and natural vitamins that thermal refining strips away. Soham Enterprises provides bulk cold-pressed carrier oils in drums and carboys across Mumbai and Pan-India."
      }
    ]
  },
  {
    id: "3",
    title: "Wholesale Essential Oils Sourcing Guide for Candle & Soap Manufacturers in India",
    slug: "bulk-essential-oils-buying-guide-candle-soap-makers",
    category: "Essential Oils",
    date: "2025-01-25",
    readTime: "5 min read",
    excerpt: "A practical guide for artisan candle makers and cold-process soap crafters on choosing flash-point compatible essential oils, maximizing scent throw, and sourcing wholesale batches in Mumbai.",
    mainImage: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1200&auto=format&fit=crop",
    author: {
      name: "Soham Commercial Desk",
      role: "Industrial Fragrance Supply",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    content: [
      {
        type: "paragraph",
        value: "India's handcrafted candle and organic cold-process soap industries are experiencing exponential growth. However, small-batch manufacturers frequently face challenges with fragrance fading, flash point discoloration, and uneven scent throw when using low-grade oils."
      },
      {
        type: "heading",
        level: 2,
        value: "Key Factors for Candle & Soap Makers"
      },
      {
        type: "list",
        value: "Production Guidelines",
        items: [
          "Flash Point Awareness: Never add delicate citrus oils to wax heated above their flash point to prevent scent burn-off.",
          "Hot & Cold Scent Throw: High-potency oils like Peppermint, Lemongrass, and Lavender provide superior fragrance projection in soy and beeswax candles.",
          "Accelerating vs Non-Accelerating in Cold Process Soap: Pure clove or cinnamon oils can accelerate soap trace, requiring adjusted lye-to-water temperatures."
        ]
      },
      {
        type: "heading",
        level: 2,
        value: "Direct Sourcing from Mumbai's Trade District"
      },
      {
        type: "paragraph",
        value: "Soham Enterprises is situated in Kalbadevi, Zaveri Bazaar, right at the center of Mumbai's historic trade zone. We offer test batch quantities (500ml, 1kg) as well as wholesale commercial barrels (5kg, 25kg, 50kg) with same-day Mumbai warehouse collection and prompt nationwide delivery."
      }
    ]
  }
];
