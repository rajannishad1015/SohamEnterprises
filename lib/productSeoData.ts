export interface ProductSEO {
  slug: string;
  botanicalName?: string;
  categoryType: "Essential Oil" | "Carrier Oil" | "Aroma Chemical" | "Traditional Extract";
  seoTitle: string;
  metaDescription: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  imageAlt: string;
  aboutHeading: string;
  aboutDescription: string;
  keyFeatures: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedSlugs: string[];
}

export const productSeoData: Record<string, ProductSEO> = {
  "lavender-oil": {
    slug: "lavender-oil",
    botanicalName: "Lavandula angustifolia",
    categoryType: "Essential Oil",
    seoTitle: "Lavender Oil | Pure & Best Quality – Soham Enterprises",
    metaDescription: "Buy pure lavender oil in bulk from Soham Enterprises, Mumbai. Best quality, lab-tested, same-day Mumbai delivery & pan-India shipping. Get a quote.",
    h1: "Lavender Oil – Pure, Best Quality Lavender Oil Supplier in Mumbai",
    primaryKeyword: "lavender essential oil",
    secondaryKeywords: [
      "best quality lavender oil",
      "pure lavender oil wholesale",
      "lavender oil supplier Mumbai",
      "lavender oil bulk India",
      "lavender oil for candles and soaps"
    ],
    imageAlt: "Pure Lavender Oil – best quality lavender oil supplier in Mumbai, Soham Enterprises",
    aboutHeading: "About Lavender Oil",
    aboutDescription: "Lavender Oil from Soham Enterprises is supplied for businesses that need consistent, good-quality raw material. Known for its soft, floral, herbaceous and calming character, it is widely used in aromatherapy blends, massage oils, soaps, candles, room sprays, skincare and bath products. We supply lavender oil to candle makers, soap manufacturers, spas, salons and cosmetic brands across Mumbai and India, with same-day delivery in Mumbai and pan-India shipping. Samples, bulk quantities and batch details are available on request, so you can check the oil against your own formulation before you order.",
    keyFeatures: [
      "Supplied directly from Soham Enterprises, Kalbadevi, Mumbai",
      "Suitable for aromatherapy blends and more",
      "Bulk and trade quantities; samples on request",
      "Same-day Mumbai delivery; pan-India shipping",
      "Batch quality details available on request"
    ],
    faqs: [
      {
        question: "Where can I buy lavender essential oil in bulk in Mumbai?",
        answer: "You can buy lavender essential oil in bulk from Soham Enterprises, Kalbadevi, Zaveri Bazaar, Mumbai 400002. Call +91 99309 96570 or email sohamessentialoilsofficial@gmail.com for a quote."
      },
      {
        question: "Do you ship lavender oil across India?",
        answer: "Yes. We offer same-day delivery in Mumbai and pan-India shipping for lavender oil, in sample and bulk quantities."
      },
      {
        question: "Who uses lavender oil?",
        answer: "It is commonly used by candle makers, soap manufacturers, spas, salons and cosmetic brands, mainly for aromatherapy blends, massage oils, soaps, candles, room sprays, skincare and bath products."
      }
    ],
    relatedSlugs: ["peppermint-oil", "rosemary-oil", "bergamot-oil"]
  },

  "peppermint-oil": {
    slug: "peppermint-oil",
    botanicalName: "Mentha piperita",
    categoryType: "Essential Oil",
    seoTitle: "Peppermint Oil | Pure & Best Quality – Soham Enterprises",
    metaDescription: "Buy pure peppermint oil in bulk from Soham Enterprises, Mumbai. Best quality, lab-tested, same-day Mumbai delivery & pan-India shipping. Get a quote.",
    h1: "Peppermint Oil – Pure, Best Quality Peppermint Oil Supplier in Mumbai",
    primaryKeyword: "peppermint essential oil",
    secondaryKeywords: [
      "pure peppermint oil wholesale",
      "peppermint oil supplier India",
      "peppermint oil bulk Mumbai",
      "best quality peppermint oil"
    ],
    imageAlt: "Pure Peppermint Oil – best quality peppermint oil supplier in Mumbai, Soham Enterprises",
    aboutHeading: "About Peppermint Oil",
    aboutDescription: "Peppermint Oil from Soham Enterprises is supplied for businesses that need consistent, good-quality raw material. Known for its cool, minty, fresh and invigorating character, it is widely used in balms, oral-care and cosmetic formulations, foot care, diffuser blends, soaps and flavour/fragrance work. We supply peppermint oil to cosmetic brands, personal-care manufacturers, spas and fragrance houses across Mumbai and India, with same-day delivery in Mumbai and pan-India shipping. Samples, bulk quantities and batch details are available on request, so you can check the oil against your own formulation before you order.",
    keyFeatures: [
      "Supplied directly from Soham Enterprises, Kalbadevi, Mumbai",
      "Suitable for balms and more",
      "Bulk and trade quantities; samples on request",
      "Same-day Mumbai delivery; pan-India shipping",
      "Batch quality details available on request"
    ],
    faqs: [
      {
        question: "Where can I buy peppermint essential oil in bulk in Mumbai?",
        answer: "You can buy peppermint essential oil in bulk from Soham Enterprises, Kalbadevi, Zaveri Bazaar, Mumbai 400002. Call +91 99309 96570 or email sohamessentialoilsofficial@gmail.com for a quote."
      },
      {
        question: "Do you ship peppermint oil across India?",
        answer: "Yes. We offer same-day delivery in Mumbai and pan-India shipping for peppermint oil, in sample and bulk quantities."
      },
      {
        question: "Who uses peppermint oil?",
        answer: "It is commonly used by cosmetic brands, personal-care manufacturers, spas and fragrance houses, mainly for balms, oral-care and cosmetic formulations, foot care, diffuser blends, soaps and flavour/fragrance work."
      }
    ],
    relatedSlugs: ["eucalyptus-oil", "tea-tree-oil", "spearmint-oil"]
  },

  "tea-tree-oil": {
    slug: "tea-tree-oil",
    botanicalName: "Melaleuca alternifolia",
    categoryType: "Essential Oil",
    seoTitle: "Tea Tree Oil | Pure & Best Quality – Soham Enterprises",
    metaDescription: "Buy pure tea tree oil in bulk from Soham Enterprises, Mumbai. Best quality, lab-tested, same-day Mumbai delivery & pan-India shipping. Get a quote.",
    h1: "Tea Tree Oil – Pure, Best Quality Tea Tree Oil Supplier in Mumbai",
    primaryKeyword: "tea tree essential oil",
    secondaryKeywords: [
      "pure tea tree oil wholesale",
      "tea tree oil supplier Mumbai",
      "tea tree oil for skin and hair formulations",
      "best quality tea tree oil"
    ],
    imageAlt: "Pure Tea Tree Oil – best quality tea tree oil supplier in Mumbai, Soham Enterprises",
    aboutHeading: "About Tea Tree Oil",
    aboutDescription: "Tea Tree Oil from Soham Enterprises is supplied for businesses that need consistent, good-quality raw material. Known for its sharp, clean, camphoraceous and medicinal character, it is widely used in skincare and haircare formulations, soaps, face washes, shampoos and cleaning products. We supply tea tree oil to skincare brands, salons, soap and shampoo manufacturers across Mumbai and India, with same-day delivery in Mumbai and pan-India shipping. Samples, bulk quantities and batch details are available on request, so you can check the oil against your own formulation before you order.",
    keyFeatures: [
      "Supplied directly from Soham Enterprises, Kalbadevi, Mumbai",
      "Suitable for skincare and haircare formulations and more",
      "Bulk and trade quantities; samples on request",
      "Same-day Mumbai delivery; pan-India shipping",
      "Batch quality details available on request"
    ],
    faqs: [
      {
        question: "Where can I buy tea tree essential oil in bulk in Mumbai?",
        answer: "You can buy tea tree essential oil in bulk from Soham Enterprises, Kalbadevi, Zaveri Bazaar, Mumbai 400002. Call +91 99309 96570 or email sohamessentialoilsofficial@gmail.com for a quote."
      },
      {
        question: "Do you ship tea tree oil across India?",
        answer: "Yes. We offer same-day delivery in Mumbai and pan-India shipping for tea tree oil, in sample and bulk quantities."
      },
      {
        question: "Who uses tea tree oil?",
        answer: "It is commonly used by skincare brands, salons, soap and shampoo manufacturers, mainly for skincare and haircare formulations, soaps, face washes, shampoos and cleaning products."
      }
    ],
    relatedSlugs: ["rosemary-oil", "lavender-oil", "cajuput-oil"]
  },

  "rosemary-oil": {
    slug: "rosemary-oil",
    botanicalName: "Rosmarinus officinalis",
    categoryType: "Essential Oil",
    seoTitle: "Rosemary Oil | Pure & Best Quality – Soham Enterprises",
    metaDescription: "Buy pure rosemary oil in bulk from Soham Enterprises, Mumbai. Best quality, lab-tested, same-day Mumbai delivery & pan-India shipping. Get a quote.",
    h1: "Rosemary Oil – Pure, Best Quality Rosemary Oil Supplier in Mumbai",
    primaryKeyword: "rosemary essential oil",
    secondaryKeywords: [
      "pure rosemary oil wholesale",
      "rosemary oil for hair formulations",
      "rosemary oil supplier India",
      "best quality rosemary oil"
    ],
    imageAlt: "Pure Rosemary Oil – best quality rosemary oil supplier in Mumbai, Soham Enterprises",
    aboutHeading: "About Rosemary Oil",
    aboutDescription: "Rosemary Oil from Soham Enterprises is supplied for businesses that need consistent, good-quality raw material. Known for its fresh, woody, herbal and camphor-like character, it is widely used in haircare products, hair oils, massage blends, soaps, diffuser blends and candles. We supply rosemary oil to haircare brands, cosmetic manufacturers, spas and salons across Mumbai and India, with same-day delivery in Mumbai and pan-India shipping. Samples, bulk quantities and batch details are available on request, so you can check the oil against your own formulation before you order.",
    keyFeatures: [
      "Supplied directly from Soham Enterprises, Kalbadevi, Mumbai",
      "Suitable for haircare products and more",
      "Bulk and trade quantities; samples on request",
      "Same-day Mumbai delivery; pan-India shipping",
      "Batch quality details available on request"
    ],
    faqs: [
      {
        question: "Where can I buy rosemary essential oil in bulk in Mumbai?",
        answer: "You can buy rosemary essential oil in bulk from Soham Enterprises, Kalbadevi, Zaveri Bazaar, Mumbai 400002. Call +91 99309 96570 or email sohamessentialoilsofficial@gmail.com for a quote."
      },
      {
        question: "Do you ship rosemary oil across India?",
        answer: "Yes. We offer same-day delivery in Mumbai and pan-India shipping for rosemary oil, in sample and bulk quantities."
      },
      {
        question: "Who uses rosemary oil?",
        answer: "It is commonly used by haircare brands, cosmetic manufacturers, spas and salons, mainly for haircare products, hair oils, massage blends, soaps, diffuser blends and candles."
      }
    ],
    relatedSlugs: ["tea-tree-oil", "lavender-oil", "cedar-wood-oil"]
  },

  "ajowain-oil": {
    slug: "ajowain-oil",
    botanicalName: "Trachyspermum ammi (carom seed)",
    categoryType: "Essential Oil",
    seoTitle: "Ajowain Oil | Pure & Best Quality – Soham Enterprises",
    metaDescription: "Buy pure ajowain oil in bulk from Soham Enterprises, Mumbai. Best quality, lab-tested, same-day Mumbai delivery & pan-India shipping. Get a quote.",
    h1: "Ajowain Oil – Pure, Best Quality Ajowain Oil Supplier in Mumbai",
    primaryKeyword: "ajowain oil",
    secondaryKeywords: [
      "ajwain essential oil",
      "carom seed oil supplier",
      "ajowain oil wholesale India",
      "pure ajowain oil Mumbai"
    ],
    imageAlt: "Pure Ajowain Oil – best quality ajowain oil supplier in Mumbai, Soham Enterprises",
    aboutHeading: "About Ajowain Oil",
    aboutDescription: "Ajowain Oil from Soham Enterprises is supplied for businesses that need consistent, good-quality raw material. Known for its warm, spicy, sharp and thyme-like character, it is widely used in balms, rubs, massage oils, flavour and fragrance work and traditional formulations. We supply ajowain oil to balm and ointment makers, fragrance houses, wellness brands across Mumbai and India, with same-day delivery in Mumbai and pan-India shipping. Samples, bulk quantities and batch details are available on request, so you can check the oil against your own formulation before you order.",
    keyFeatures: [
      "Supplied directly from Soham Enterprises, Kalbadevi, Mumbai",
      "Suitable for balms and more",
      "Bulk and trade quantities; samples on request",
      "Same-day Mumbai delivery; pan-India shipping",
      "Batch quality details available on request"
    ],
    faqs: [
      {
        question: "Where can I buy ajowain oil in bulk in Mumbai?",
        answer: "You can buy ajowain oil in bulk from Soham Enterprises, Kalbadevi, Zaveri Bazaar, Mumbai 400002. Call +91 99309 96570 or email sohamessentialoilsofficial@gmail.com for a quote."
      },
      {
        question: "Do you ship ajowain oil across India?",
        answer: "Yes. We offer same-day delivery in Mumbai and pan-India shipping for ajowain oil, in sample and bulk quantities."
      },
      {
        question: "Who uses ajowain oil?",
        answer: "It is commonly used by balm and ointment makers, fragrance houses, wellness brands, mainly for balms, rubs, massage oils, flavour and fragrance work and traditional formulations."
      }
    ],
    relatedSlugs: ["clove-bud-oil", "black-pepper-oil", "thyme-oil"]
  },

  "almond-oil-5": {
    slug: "almond-oil-5",
    botanicalName: "Prunus dulcis (almond)",
    categoryType: "Carrier Oil",
    seoTitle: "Almond Oil 5% | Pure & Best Quality – Soham Enterprises",
    metaDescription: "Buy pure almond oil 5% in bulk from Soham Enterprises, Mumbai. Best quality, lab-tested, same-day Mumbai delivery & pan-India shipping. Get a quote.",
    h1: "Almond Oil 5% – Pure, Best Quality Almond Oil 5% Supplier in Mumbai",
    primaryKeyword: "almond oil",
    secondaryKeywords: [
      "almond oil wholesale India",
      "almond oil 5% supplier",
      "almond oil for cosmetics",
      "pure almond oil Mumbai"
    ],
    imageAlt: "Pure Almond Oil 5% – best quality almond oil 5% supplier in Mumbai, Soham Enterprises",
    aboutHeading: "About Almond Oil 5%",
    aboutDescription: "Almond Oil 5% from Soham Enterprises is supplied for businesses that need consistent, good-quality raw material. Known for its soft, nutty and sweet character, it is widely used in massage blends, hair and body oils, soaps, creams and cosmetic bases. We supply almond oil 5% to cosmetic brands, spas, salons and soap makers across Mumbai and India, with same-day delivery in Mumbai and pan-India shipping. Samples, bulk quantities and batch details are available on request, so you can check the oil against your own formulation before you order.",
    keyFeatures: [
      "Supplied directly from Soham Enterprises, Kalbadevi, Mumbai",
      "Suitable for massage blends and more",
      "Bulk and trade quantities; samples on request",
      "Same-day Mumbai delivery; pan-India shipping",
      "Batch quality details available on request"
    ],
    faqs: [
      {
        question: "Where can I buy almond oil in bulk in Mumbai?",
        answer: "You can buy almond oil in bulk from Soham Enterprises, Kalbadevi, Zaveri Bazaar, Mumbai 400002. Call +91 99309 96570 or email sohamessentialoilsofficial@gmail.com for a quote."
      },
      {
        question: "Do you ship almond oil 5% across India?",
        answer: "Yes. We offer same-day delivery in Mumbai and pan-India shipping for almond oil 5%, in sample and bulk quantities."
      },
      {
        question: "Who uses almond oil 5%?",
        answer: "It is commonly used by cosmetic brands, spas, salons and soap makers, mainly for massage blends, hair and body oils, soaps, creams and cosmetic bases."
      }
    ],
    relatedSlugs: ["apricot-oil", "avocado-oil", "argan-oil"]
  },

  "anethol": {
    slug: "anethol",
    botanicalName: "Aroma chemical (anethole)",
    categoryType: "Aroma Chemical",
    seoTitle: "Anethol | Pure & Best Quality – Soham Enterprises",
    metaDescription: "Buy pure anethol in bulk from Soham Enterprises, Mumbai. Best quality, lab-tested, same-day Mumbai delivery & pan-India shipping. Get a quote.",
    h1: "Anethol – Pure, Best Quality Anethol Supplier in Mumbai",
    primaryKeyword: "anethol",
    secondaryKeywords: [
      "anethole supplier India",
      "anethol wholesale Mumbai",
      "anethole for fragrance and flavour",
      "trans anethole supplier"
    ],
    imageAlt: "Pure Anethol – best quality anethol supplier in Mumbai, Soham Enterprises",
    aboutHeading: "About Anethol",
    aboutDescription: "Anethol from Soham Enterprises is supplied for businesses that need consistent, good-quality raw material. Known for its sweet, anise-like and licorice-like character, it is widely used in fragrance and flavour compounding and industrial formulations. We supply anethol to fragrance houses, flavour houses and manufacturers across Mumbai and India, with same-day delivery in Mumbai and pan-India shipping. Samples, bulk quantities and batch details are available on request, so you can check the oil against your own formulation before you order.",
    keyFeatures: [
      "Supplied directly from Soham Enterprises, Kalbadevi, Mumbai",
      "Suitable for fragrance and flavour compounding and industrial formulations and more",
      "Bulk and trade quantities; samples on request",
      "Same-day Mumbai delivery; pan-India shipping",
      "Batch quality details available on request"
    ],
    faqs: [
      {
        question: "Where can I buy anethol in bulk in Mumbai?",
        answer: "You can buy anethol in bulk from Soham Enterprises, Kalbadevi, Zaveri Bazaar, Mumbai 400002. Call +91 99309 96570 or email sohamessentialoilsofficial@gmail.com for a quote."
      },
      {
        question: "Do you ship anethol across India?",
        answer: "Yes. We offer same-day delivery in Mumbai and pan-India shipping for anethol, in sample and bulk quantities."
      },
      {
        question: "Who uses anethol?",
        answer: "It is commonly used by fragrance houses, flavour houses and manufacturers, mainly for fragrance and flavour compounding and industrial formulations."
      }
    ],
    relatedSlugs: ["anise-oil", "fennel-seed-oil", "d-limonene"]
  },

  "anise-oil": {
    slug: "anise-oil",
    botanicalName: "Pimpinella anisum",
    categoryType: "Essential Oil",
    seoTitle: "Anise Oil | Pure & Best Quality – Soham Enterprises",
    metaDescription: "Buy pure anise oil in bulk from Soham Enterprises, Mumbai. Best quality, lab-tested, same-day Mumbai delivery & pan-India shipping. Get a quote.",
    h1: "Anise Oil – Pure, Best Quality Anise Oil Supplier in Mumbai",
    primaryKeyword: "anise essential oil",
    secondaryKeywords: [
      "anise oil supplier India",
      "pure anise oil wholesale",
      "aniseed oil bulk Mumbai",
      "best quality anise oil"
    ],
    imageAlt: "Pure Anise Oil – best quality anise oil supplier in Mumbai, Soham Enterprises",
    aboutHeading: "About Anise Oil",
    aboutDescription: "Anise Oil from Soham Enterprises is supplied for businesses that need consistent, good-quality raw material. Known for its sweet, spicy, licorice-like and warm character, it is widely used in fragrance and flavour work, soaps, candles, diffuser blends and perfumery. We supply anise oil to fragrance houses, candle makers and soap manufacturers across Mumbai and India, with same-day delivery in Mumbai and pan-India shipping. Samples, bulk quantities and batch details are available on request, so you can check the oil against your own formulation before you order.",
    keyFeatures: [
      "Supplied directly from Soham Enterprises, Kalbadevi, Mumbai",
      "Suitable for fragrance and flavour work and more",
      "Bulk and trade quantities; samples on request",
      "Same-day Mumbai delivery; pan-India shipping",
      "Batch quality details available on request"
    ],
    faqs: [
      {
        question: "Where can I buy anise essential oil in bulk in Mumbai?",
        answer: "You can buy anise essential oil in bulk from Soham Enterprises, Kalbadevi, Zaveri Bazaar, Mumbai 400002. Call +91 99309 96570 or email sohamessentialoilsofficial@gmail.com for a quote."
      },
      {
        question: "Do you ship anise oil across India?",
        answer: "Yes. We offer same-day delivery in Mumbai and pan-India shipping for anise oil, in sample and bulk quantities."
      },
      {
        question: "Who uses anise oil?",
        answer: "It is commonly used by fragrance houses, candle makers and soap manufacturers, mainly for fragrance and flavour work, soaps, candles, diffuser blends and perfumery."
      }
    ],
    relatedSlugs: ["anethol", "fennel-seed-oil", "caraway-oil"]
  },

  "apricot-oil": {
    slug: "apricot-oil",
    botanicalName: "Prunus armeniaca (carrier oil)",
    categoryType: "Carrier Oil",
    seoTitle: "Apricot Oil | Pure & Best Quality – Soham Enterprises",
    metaDescription: "Buy pure apricot oil in bulk from Soham Enterprises, Mumbai. Best quality, lab-tested, same-day Mumbai delivery & pan-India shipping. Get a quote.",
    h1: "Apricot Oil – Pure, Best Quality Apricot Oil Supplier in Mumbai",
    primaryKeyword: "apricot oil",
    secondaryKeywords: [
      "apricot kernel oil wholesale",
      "apricot carrier oil supplier India",
      "apricot oil bulk Mumbai",
      "pure apricot oil"
    ],
    imageAlt: "Pure Apricot Oil – best quality apricot oil supplier in Mumbai, Soham Enterprises",
    aboutHeading: "About Apricot Oil",
    aboutDescription: "Apricot Oil from Soham Enterprises is supplied for businesses that need consistent, good-quality raw material. Known for its very mild, light and softly nutty character, it is widely used in massage oils, facial oils, body oils, creams and as a carrier for essential oil blends. We supply apricot oil to cosmetic brands, spas and salons across Mumbai and India, with same-day delivery in Mumbai and pan-India shipping. Samples, bulk quantities and batch details are available on request, so you can check the oil against your own formulation before you order.",
    keyFeatures: [
      "Supplied directly from Soham Enterprises, Kalbadevi, Mumbai",
      "Suitable for massage oils and more",
      "Bulk and trade quantities; samples on request",
      "Same-day Mumbai delivery; pan-India shipping",
      "Batch quality details available on request"
    ],
    faqs: [
      {
        question: "Where can I buy apricot oil in bulk in Mumbai?",
        answer: "You can buy apricot oil in bulk from Soham Enterprises, Kalbadevi, Zaveri Bazaar, Mumbai 400002. Call +91 99309 96570 or email sohamessentialoilsofficial@gmail.com for a quote."
      },
      {
        question: "Do you ship apricot oil across India?",
        answer: "Yes. We offer same-day delivery in Mumbai and pan-India shipping for apricot oil, in sample and bulk quantities."
      },
      {
        question: "Who uses apricot oil?",
        answer: "It is commonly used by cosmetic brands, spas and salons, mainly for massage oils, facial oils, body oils, creams and as a carrier for essential oil blends."
      }
    ],
    relatedSlugs: ["almond-oil-5", "avocado-oil", "argan-oil"]
  },

  "avocado-oil": {
    slug: "avocado-oil",
    botanicalName: "Persea americana (carrier oil)",
    categoryType: "Carrier Oil",
    seoTitle: "Avocado Oil | Pure & Best Quality – Soham Enterprises",
    metaDescription: "Buy pure avocado oil in bulk from Soham Enterprises, Mumbai. Best quality, lab-tested, same-day Mumbai delivery & pan-India shipping. Get a quote.",
    h1: "Avocado Oil – Pure, Best Quality Avocado Oil Supplier in Mumbai",
    primaryKeyword: "avocado oil",
    secondaryKeywords: [
      "avocado carrier oil supplier",
      "avocado oil wholesale India",
      "avocado oil bulk Mumbai",
      "pure avocado oil for cosmetics"
    ],
    imageAlt: "Pure Avocado Oil – best quality avocado oil supplier in Mumbai, Soham Enterprises",
    aboutHeading: "About Avocado Oil",
    aboutDescription: "Avocado Oil from Soham Enterprises is supplied for businesses that need consistent, good-quality raw material. Known for its mild, rich and lightly nutty character, it is widely used in skincare and haircare formulations, massage oils, creams and as a base for blends. We supply avocado oil to cosmetic brands, haircare brands and spas across Mumbai and India, with same-day delivery in Mumbai and pan-India shipping. Samples, bulk quantities and batch details are available on request, so you can check the oil against your own formulation before you order.",
    keyFeatures: [
      "Supplied directly from Soham Enterprises, Kalbadevi, Mumbai",
      "Suitable for skincare and haircare formulations and more",
      "Bulk and trade quantities; samples on request",
      "Same-day Mumbai delivery; pan-India shipping",
      "Batch quality details available on request"
    ],
    faqs: [
      {
        question: "Where can I buy avocado oil in bulk in Mumbai?",
        answer: "You can buy avocado oil in bulk from Soham Enterprises, Kalbadevi, Zaveri Bazaar, Mumbai 400002. Call +91 99309 96570 or email sohamessentialoilsofficial@gmail.com for a quote."
      },
      {
        question: "Do you ship avocado oil across India?",
        answer: "Yes. We offer same-day delivery in Mumbai and pan-India shipping for avocado oil, in sample and bulk quantities."
      },
      {
        question: "Who uses avocado oil?",
        answer: "It is commonly used by cosmetic brands, haircare brands and spas, mainly for skincare and haircare formulations, massage oils, creams and as a base for blends."
      }
    ],
    relatedSlugs: ["argan-oil", "almond-oil-5", "jojoba-oil-gold"]
  },

  "argan-oil": {
    slug: "argan-oil",
    botanicalName: "Argania spinosa (carrier oil)",
    categoryType: "Carrier Oil",
    seoTitle: "Argan Oil | Pure & Best Quality – Soham Enterprises",
    metaDescription: "Buy pure argan oil in bulk from Soham Enterprises, Mumbai. Best quality, lab-tested, same-day Mumbai delivery & pan-India shipping. Get a quote.",
    h1: "Argan Oil – Pure, Best Quality Argan Oil Supplier in Mumbai",
    primaryKeyword: "argan oil",
    secondaryKeywords: [
      "argan oil wholesale India",
      "pure argan oil supplier Mumbai",
      "argan oil for hair formulations",
      "argan carrier oil bulk"
    ],
    imageAlt: "Pure Argan Oil – best quality argan oil supplier in Mumbai, Soham Enterprises",
    aboutHeading: "About Argan Oil",
    aboutDescription: "Argan Oil from Soham Enterprises is supplied for businesses that need consistent, good-quality raw material. Known for its mild, light and softly nutty character, it is widely used in hair serums, skincare formulations, massage and beauty oils. We supply argan oil to cosmetic brands, haircare brands and salons across Mumbai and India, with same-day delivery in Mumbai and pan-India shipping. Samples, bulk quantities and batch details are available on request, so you can check the oil against your own formulation before you order.",
    keyFeatures: [
      "Supplied directly from Soham Enterprises, Kalbadevi, Mumbai",
      "Suitable for hair serums and more",
      "Bulk and trade quantities; samples on request",
      "Same-day Mumbai delivery; pan-India shipping",
      "Batch quality details available on request"
    ],
    faqs: [
      {
        question: "Where can I buy argan oil in bulk in Mumbai?",
        answer: "You can buy argan oil in bulk from Soham Enterprises, Kalbadevi, Zaveri Bazaar, Mumbai 400002. Call +91 99309 96570 or email sohamessentialoilsofficial@gmail.com for a quote."
      },
      {
        question: "Do you ship argan oil across India?",
        answer: "Yes. We offer same-day delivery in Mumbai and pan-India shipping for argan oil, in sample and bulk quantities."
      },
      {
        question: "Who uses argan oil?",
        answer: "It is commonly used by cosmetic brands, haircare brands and salons, mainly for hair serums, skincare formulations, massage and beauty oils."
      }
    ],
    relatedSlugs: ["avocado-oil", "almond-oil-5", "rosehip-oil"]
  },

  "basil-oil": {
    slug: "basil-oil",
    botanicalName: "Ocimum basilicum",
    categoryType: "Essential Oil",
    seoTitle: "Basil Oil | Pure & Best Quality – Soham Enterprises",
    metaDescription: "Buy pure basil oil in bulk from Soham Enterprises, Mumbai. Best quality, lab-tested, same-day Mumbai delivery & pan-India shipping. Get a quote.",
    h1: "Basil Oil – Pure, Best Quality Basil Oil Supplier in Mumbai",
    primaryKeyword: "basil essential oil",
    secondaryKeywords: [
      "pure basil oil wholesale",
      "basil oil supplier India",
      "basil oil bulk Mumbai",
      "best quality basil oil"
    ],
    imageAlt: "Pure Basil Oil – best quality basil oil supplier in Mumbai, Soham Enterprises",
    aboutHeading: "About Basil Oil",
    aboutDescription: "Basil Oil from Soham Enterprises is supplied for businesses that need consistent, good-quality raw material. Known for its fresh, herbal, sweet and slightly spicy character, it is widely used in diffuser blends, soaps, massage blends, fragrance work and flavour applications. We supply basil oil to fragrance makers, soap manufacturers and wellness brands across Mumbai and India, with same-day delivery in Mumbai and pan-India shipping. Samples, bulk quantities and batch details are available on request, so you can check the oil against your own formulation before you order.",
    keyFeatures: [
      "Supplied directly from Soham Enterprises, Kalbadevi, Mumbai",
      "Suitable for diffuser blends and more",
      "Bulk and trade quantities; samples on request",
      "Same-day Mumbai delivery; pan-India shipping",
      "Batch quality details available on request"
    ],
    faqs: [
      {
        question: "Where can I buy basil essential oil in bulk in Mumbai?",
        answer: "You can buy basil essential oil in bulk from Soham Enterprises, Kalbadevi, Zaveri Bazaar, Mumbai 400002. Call +91 99309 96570 or email sohamessentialoilsofficial@gmail.com for a quote."
      },
      {
        question: "Do you ship basil oil across India?",
        answer: "Yes. We offer same-day delivery in Mumbai and pan-India shipping for basil oil, in sample and bulk quantities."
      },
      {
        question: "Who uses basil oil?",
        answer: "It is commonly used by fragrance makers, soap manufacturers and wellness brands, mainly for diffuser blends, soaps, massage blends, fragrance work and flavour applications."
      }
    ],
    relatedSlugs: ["tulsi-oil", "rosemary-oil", "bergamot-oil"]
  },

  "bergamot-oil": {
    slug: "bergamot-oil",
    botanicalName: "Citrus bergamia",
    categoryType: "Essential Oil",
    seoTitle: "Bergamot Oil | Pure & Best Quality – Soham Enterprises",
    metaDescription: "Buy pure bergamot oil in bulk from Soham Enterprises, Mumbai. Best quality, lab-tested, same-day Mumbai delivery & pan-India shipping. Get a quote.",
    h1: "Bergamot Oil – Pure, Best Quality Bergamot Oil Supplier in Mumbai",
    primaryKeyword: "bergamot essential oil",
    secondaryKeywords: [
      "pure bergamot oil wholesale",
      "bergamot oil for perfumery",
      "bergamot oil supplier Mumbai",
      "best quality bergamot oil"
    ],
    imageAlt: "Pure Bergamot Oil – best quality bergamot oil supplier in Mumbai, Soham Enterprises",
    aboutHeading: "About Bergamot Oil",
    aboutDescription: "Bergamot Oil from Soham Enterprises is supplied for businesses that need consistent, good-quality raw material. Known for its bright, citrusy, fresh and slightly floral character, it is widely used in perfumery, candles, soaps, room sprays and diffuser blends. We supply bergamot oil to perfume houses, candle makers and soap manufacturers across Mumbai and India, with same-day delivery in Mumbai and pan-India shipping. Samples, bulk quantities and batch details are available on request, so you can check the oil against your own formulation before you order.",
    keyFeatures: [
      "Supplied directly from Soham Enterprises, Kalbadevi, Mumbai",
      "Suitable for perfumery and more",
      "Bulk and trade quantities; samples on request",
      "Same-day Mumbai delivery; pan-India shipping",
      "Batch quality details available on request"
    ],
    faqs: [
      {
        question: "Where can I buy bergamot essential oil in bulk in Mumbai?",
        answer: "You can buy bergamot essential oil in bulk from Soham Enterprises, Kalbadevi, Zaveri Bazaar, Mumbai 400002. Call +91 99309 96570 or email sohamessentialoilsofficial@gmail.com for a quote."
      },
      {
        question: "Do you ship bergamot oil across India?",
        answer: "Yes. We offer same-day delivery in Mumbai and pan-India shipping for bergamot oil, in sample and bulk quantities."
      },
      {
        question: "Who uses bergamot oil?",
        answer: "It is commonly used by perfume houses, candle makers and soap manufacturers, mainly for perfumery, candles, soaps, room sprays and diffuser blends."
      }
    ],
    relatedSlugs: ["lemon-oil", "orange-oil", "lavender-oil"]
  },

  "black-pepper-oil": {
    slug: "black-pepper-oil",
    botanicalName: "Piper nigrum",
    categoryType: "Essential Oil",
    seoTitle: "Black Pepper Oil | Pure & Best Quality – Soham Enterprises",
    metaDescription: "Buy pure black pepper oil in bulk from Soham Enterprises, Mumbai. Best quality, lab-tested, same-day Mumbai delivery & pan-India shipping. Get a quote.",
    h1: "Black Pepper Oil – Pure, Best Quality Black Pepper Oil Supplier in Mumbai",
    primaryKeyword: "black pepper essential oil",
    secondaryKeywords: [
      "pure black pepper oil wholesale",
      "black pepper oil supplier India",
      "black pepper oil bulk Mumbai",
      "best quality black pepper oil"
    ],
    imageAlt: "Pure Black Pepper Oil – best quality black pepper oil supplier in Mumbai, Soham Enterprises",
    aboutHeading: "About Black Pepper Oil",
    aboutDescription: "Black Pepper Oil from Soham Enterprises is supplied for businesses that need consistent, good-quality raw material. Known for its warm, spicy, woody and sharp character, it is widely used in massage oils, warming balms, fragrance blends and flavour work. We supply black pepper oil to balm makers, spas, fragrance houses and wellness brands across Mumbai and India, with same-day delivery in Mumbai and pan-India shipping. Samples, bulk quantities and batch details are available on request, so you can check the oil against your own formulation before you order.",
    keyFeatures: [
      "Supplied directly from Soham Enterprises, Kalbadevi, Mumbai",
      "Suitable for massage oils and more",
      "Bulk and trade quantities; samples on request",
      "Same-day Mumbai delivery; pan-India shipping",
      "Batch quality details available on request"
    ],
    faqs: [
      {
        question: "Where can I buy black pepper essential oil in bulk in Mumbai?",
        answer: "You can buy black pepper essential oil in bulk from Soham Enterprises, Kalbadevi, Zaveri Bazaar, Mumbai 400002. Call +91 99309 96570 or email sohamessentialoilsofficial@gmail.com for a quote."
      },
      {
        question: "Do you ship black pepper oil across India?",
        answer: "Yes. We offer same-day delivery in Mumbai and pan-India shipping for black pepper oil, in sample and bulk quantities."
      },
      {
        question: "Who uses black pepper oil?",
        answer: "It is commonly used by balm makers, spas, fragrance houses and wellness brands, mainly for massage oils, warming balms, fragrance blends and flavour work."
      }
    ],
    relatedSlugs: ["ginger-oil", "ajowain-oil", "cardamom-oil"]
  },

  "bhimseni-kapoor": {
    slug: "bhimseni-kapoor",
    botanicalName: "Traditional Indian camphor",
    categoryType: "Traditional Extract",
    seoTitle: "Bhimseni Kapoor | Pure & Best Quality – Soham Enterprises",
    metaDescription: "Buy pure bhimseni kapoor in bulk from Soham Enterprises, Mumbai. Best quality, lab-tested, same-day Mumbai delivery & pan-India shipping. Get a quote.",
    h1: "Bhimseni Kapoor – Pure, Best Quality Bhimseni Kapoor Supplier in Mumbai",
    primaryKeyword: "bhimseni kapoor",
    secondaryKeywords: [
      "bhimseni camphor supplier",
      "bhimseni kapoor wholesale Mumbai",
      "pure camphor supplier India",
      "bhimseni kapur bulk"
    ],
    imageAlt: "Pure Bhimseni Kapoor – best quality bhimseni kapoor supplier in Mumbai, Soham Enterprises",
    aboutHeading: "About Bhimseni Kapoor",
    aboutDescription: "Bhimseni Kapoor from Soham Enterprises is supplied for businesses that need consistent, good-quality raw material. Known for its strong, cooling, camphoraceous and penetrating character, it is widely used in traditional rituals, balms, incense and fragrance preparations. We supply bhimseni kapoor to incense and balm makers, fragrance houses and traditional-product brands across Mumbai and India, with same-day delivery in Mumbai and pan-India shipping. Samples, bulk quantities and batch details are available on request, so you can check the oil against your own formulation before you order.",
    keyFeatures: [
      "Supplied directly from Soham Enterprises, Kalbadevi, Mumbai",
      "Suitable for traditional rituals and more",
      "Bulk and trade quantities; samples on request",
      "Same-day Mumbai delivery; pan-India shipping",
      "Batch quality details available on request"
    ],
    faqs: [
      {
        question: "Where can I buy bhimseni kapoor in bulk in Mumbai?",
        answer: "You can buy bhimseni kapoor in bulk from Soham Enterprises, Kalbadevi, Zaveri Bazaar, Mumbai 400002. Call +91 99309 96570 or email sohamessentialoilsofficial@gmail.com for a quote."
      },
      {
        question: "Do you ship bhimseni kapoor across India?",
        answer: "Yes. We offer same-day delivery in Mumbai and pan-India shipping for bhimseni kapoor, in sample and bulk quantities."
      },
      {
        question: "Who uses bhimseni kapoor?",
        answer: "It is commonly used by incense and balm makers, fragrance houses and traditional-product brands, mainly for traditional rituals, balms, incense and fragrance preparations."
      }
    ],
    relatedSlugs: ["camphor-oil", "camphor-powder", "menthol-crystal"]
  },

  "cajuput-oil": {
    slug: "cajuput-oil",
    botanicalName: "Melaleuca leucadendra",
    categoryType: "Essential Oil",
    seoTitle: "Cajuput Oil | Pure & Best Quality – Soham Enterprises",
    metaDescription: "Buy pure cajuput oil in bulk from Soham Enterprises, Mumbai. Best quality, lab-tested, same-day Mumbai delivery & pan-India shipping. Get a quote.",
    h1: "Cajuput Oil – Pure, Best Quality Cajuput Oil Supplier in Mumbai",
    primaryKeyword: "cajuput essential oil",
    secondaryKeywords: [
      "pure cajuput oil wholesale",
      "cajuput oil supplier India",
      "cajuput oil bulk Mumbai",
      "best quality cajuput oil"
    ],
    imageAlt: "Pure Cajuput Oil – best quality cajuput oil supplier in Mumbai, Soham Enterprises",
    aboutHeading: "About Cajuput Oil",
    aboutDescription: "Cajuput Oil from Soham Enterprises is supplied for businesses that need consistent, good-quality raw material. Known for its fresh, camphoraceous, fruity-herbal and cooling character, it is widely used in balms, massage oils, chest and muscle rubs, soaps and diffuser blends. We supply cajuput oil to balm makers, spas, cosmetic and personal-care manufacturers across Mumbai and India, with same-day delivery in Mumbai and pan-India shipping. Samples, bulk quantities and batch details are available on request, so you can check the oil against your own formulation before you order.",
    keyFeatures: [
      "Supplied directly from Soham Enterprises, Kalbadevi, Mumbai",
      "Suitable for balms and more",
      "Bulk and trade quantities; samples on request",
      "Same-day Mumbai delivery; pan-India shipping",
      "Batch quality details available on request"
    ],
    faqs: [
      {
        question: "Where can I buy cajuput essential oil in bulk in Mumbai?",
        answer: "You can buy cajuput essential oil in bulk from Soham Enterprises, Kalbadevi, Zaveri Bazaar, Mumbai 400002. Call +91 99309 96570 or email sohamessentialoilsofficial@gmail.com for a quote."
      },
      {
        question: "Do you ship cajuput oil across India?",
        answer: "Yes. We offer same-day delivery in Mumbai and pan-India shipping for cajuput oil, in sample and bulk quantities."
      },
      {
        question: "Who uses cajuput oil?",
        answer: "It is commonly used by balm makers, spas, cosmetic and personal-care manufacturers, mainly for balms, massage oils, chest and muscle rubs, soaps and diffuser blends."
      }
    ],
    relatedSlugs: ["tea-tree-oil", "eucalyptus-oil", "peppermint-oil"]
  }
};
