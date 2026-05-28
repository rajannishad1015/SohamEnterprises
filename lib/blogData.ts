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
    id: "post-1",
    title: "The Art of Steam Distillation: How We Extract Nature’s Purest Essence",
    slug: "art-of-steam-distillation",
    category: "Extraction & Science",
    date: "May 15, 2026",
    readTime: "5 min read",
    excerpt: "Discover the delicate balance of temperature, pressure, and time required to capture the pristine therapeutic properties of botanicals.",
    mainImage: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1200&auto=format&fit=crop",
    author: {
      name: "Dr. Ananya Sharma",
      role: "Chief Pharmacognosist",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
    },
    content: [
      {
        type: "paragraph",
        value: "Inside every leaf, flower, bark, and seed lies a microscopic treasure chest: pockets of volatile organic compounds known as essential oils. Capturing these volatile essences in their absolute, undamaged state is an act of supreme scientific precision. At Soham Enterprises, we treat this extraction process as both a rigorous science and a refined art."
      },
      {
        type: "heading",
        value: "The Scientific Principle Behind Steam",
        level: 2
      },
      {
        type: "paragraph",
        value: "Steam distillation is the most widely trusted and ancient technique to isolate essential oils for aromatherapy and pharmaceutical compounding. The core scientific concept relies on the fact that volatile essential oils vaporize at temperatures far below their normal boiling points when exposed to steam."
      },
      {
        type: "paragraph",
        value: "During the process, pressurized steam is passed through a tightly packed stainless-steel chamber containing fresh botanical materials. This steam acts as a gentle energetic key: it penetrates the botanical tissue, bursts the microscopic oil glands, and carries the highly aromatic oil molecules upward into a closed cooling system."
      },
      {
        type: "quote",
        value: "To extract an oil that captures the soul of a plant, one must master the temperature. Too much heat scorches the volatile organic compounds; too little fails to unlock the deeper cell layers.",
        author: "Dr. Ananya Sharma"
      },
      {
        type: "heading",
        value: "The Critical Three: Temperature, Pressure, & Time",
        level: 2
      },
      {
        type: "paragraph",
        value: "To ensure that every batch of our essential oils retains its complete botanical profile (its unique fingerprint of compounds like linalool, limonene, and pinene), three critical factors are strictly modulated in our state-of-the-art distillery:"
      },
      {
        type: "list",
        value: "Key distillation parameters:",
        items: [
          "Low-Temperature Profiles: Keeping the steam between 100°C and 115°C prevents thermal degradation of delicate ester and aldehyde molecules.",
          "Gentle Low-Pressure Environment: Low pressure allows distillation to progress steadily without inducing harsh chemical rearrangements (isomerization) inside the compounds.",
          "Optimized Distillation Time: Depending on the plant matter (e.g., lightweight jasmine petals vs. dense cedarwood bark), distillation can range from 2 to over 24 continuous hours to ensure thorough extraction without over-processing."
        ]
      },
      {
        type: "heading",
        value: "Condensation and the Magic of the Separator",
        level: 2
      },
      {
        type: "paragraph",
        value: "Once the mixture of steam and volatile oil vapor exits the herb chamber, it travels into a high-efficiency condenser where water flows around the cooling coil. As the temperature drops rapidly, the vapor reverts to a liquid state and drains into a Florentine flask."
      },
      {
        type: "paragraph",
        value: "Because oil and water are completely immiscible, and essential oils generally have a lower specific gravity than water, the precious pure oil rises to the top layer. The water layer beneath becomes 'hydrosol' (also known as flower water), which contains water-soluble plant assets. The golden oil is carefully siphoned off from the top, resulting in a 100% pure, unadulterated product ready for strict testing in our quality control laboratories."
      },
      {
        type: "paragraph",
        value: "By respecting the delicate boundaries of organic chemistry, we ensure that every drop of essential oil delivered by Soham Enterprises is a vibrant, biochemically identical representation of the living plant it was extracted from."
      }
    ]
  },
  {
    id: "post-2",
    title: "Indian Sandalwood: The Sacred Heritage of Chandan",
    slug: "indian-sandalwood-sacred-heritage",
    category: "Heritage & Sourcing",
    date: "April 28, 2026",
    readTime: "7 min read",
    excerpt: "Unearthing the deep-rooted cultural significance, complex aromatic profiles, and profound skin-healing virtues of East Indian Sandalwood.",
    mainImage: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1200&auto=format&fit=crop",
    author: {
      name: "Soham Mehta",
      role: "Managing Director",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    content: [
      {
        type: "paragraph",
        value: "For over four millennia, the woody, creamy, and deeply grounding aroma of Indian Sandalwood (Santalum album)—affectionately known as *Chandan*—has been woven into the spiritual, cosmetic, and medicinal fabric of the Indian subcontinent. Mentioned in ancient Vedic texts, this royal wood has always been revered as a divine bridge between the physical and metaphysical worlds."
      },
      {
        type: "heading",
        value: "The Biological Heritage of Santalum Album",
        level: 2
      },
      {
        type: "paragraph",
        value: "Santalum album is a hemi-parasitic evergreen tree native to the dry, mountainous regions of southern India, particularly Karnataka and Tamil Nadu. The secret to its legendary fragrance lies in the heartwood—the dense, dark wood located at the center of the trunk. It takes at least 25 to 30 years of growth for the tree to produce mature heartwood concentrated with high-quality oil."
      },
      {
        type: "quote",
        value: "Indian Sandalwood oil is unique because of its high concentration of santalols. This provides a rich, buttery depth that synthetic alternatives can never match.",
        author: "Soham Mehta"
      },
      {
        type: "heading",
        value: "The Chemistry of Aroma: Alpha and Beta-Santalol",
        level: 2
      },
      {
        type: "paragraph",
        value: "The true therapeutic and aromatic essence of Sandalwood is determined by its chemical constituents. When subjected to GC-MS analysis, pure Indian Sandalwood oil displays a remarkable composition rich in sesquiterpene alcohols:"
      },
      {
        type: "list",
        value: "Principal Chemical Constituents:",
        items: [
          "Alpha-Santalol (approx. 45-60%): Responsible for the extraordinary anti-inflammatory, antimicrobial, and skin-calming properties.",
          "Beta-Santalol (approx. 20-30%): The primary compound that dictates the unmistakable deep, sweet, and milky woody fragrance profile.",
          "Santalene and Curcumene isomers: Minor compounds that act synergistically to stabilize the fragrance, making Sandalwood an unparalleled natural fixative in high-end perfumery."
        ]
      },
      {
        type: "heading",
        value: "Somatic and Spiritual Benefits in Modern Wellness",
        level: 2
      },
      {
        type: "paragraph",
        value: "In Ayurveda, Sandalwood is characterized as having a cooling (*Sheeta*) energy, which works to balance excess heat (*Pitta*) in the body and mind. This cooling property translates perfectly into modern dermatological applications:"
      },
      {
        type: "paragraph",
        value: "1. **Anti-Inflammatory Skin Elixir:** Studies show that alpha-santalol inhibits inflammatory enzymes, making it highly effective in soothing redness, hyperpigmentation, and acne-prone skin."
      },
      {
        type: "paragraph",
        value: "2. **Neurological Calming Agent:** Inhaling pure sandalwood oil has been scientifically shown to lower heart rate and reduce stress hormones by stimulating the limbic system, inducing alert tranquility rather than drowsiness."
      },
      {
        type: "heading",
        value: "Ethical Sourcing and Sustainability",
        level: 2
      },
      {
        type: "paragraph",
        value: "Due to over-harvesting in past decades, wild Indian Sandalwood became severely threatened. At Soham Enterprises, we take ecological conservation extremely seriously. We source our Sandalwood exclusively from government-regulated plantations and sustainable forests in India, ensuring that every batch is fully certified, ethically harvested, and traceable. By purchasing from verified sources, we help preserve this sacred heritage tree for generations to come."
      }
    ]
  },
  {
    id: "post-3",
    title: "A Complete Guide to Cold-Pressed Essential Oils vs. Steam Distilled Oils",
    slug: "cold-pressed-vs-steam-distilled",
    category: "Essential Oils",
    date: "March 12, 2026",
    readTime: "4 min read",
    excerpt: "Which extraction method is best for your formulations? We compare the science, efficiency, and aromatic characteristics of both approaches.",
    mainImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
    author: {
      name: "Dr. Ananya Sharma",
      role: "Chief Pharmacognosist",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
    },
    content: [
      {
        type: "paragraph",
        value: "When sourcing raw materials for premium cosmetics, pharmaceuticals, or aromatherapy, understanding *how* an essential oil is extracted is just as critical as knowing *where* it was grown. The extraction method directly dictates the chemical profile, sensory properties, shelf-life, and cost of the oil. Today, we break down the two most popular methods: Cold Pressing (Expression) and Steam Distillation."
      },
      {
        type: "heading",
        value: "What is Cold Pressing (Expression)?",
        level: 2
      },
      {
        type: "paragraph",
        value: "Cold pressing is a mechanical, heat-free extraction method used almost exclusively for citrus fruits (such as Sweet Orange, Lemon, Bergamot, and Lime). Historically, this was done by hand using sponges to soak up oils squeezed from the rind. Today, it is performed using high-speed mechanical scarifiers (pelatrice machines)."
      },
      {
        type: "paragraph",
        value: "The fruit rinds are placed in a rotating drum containing sharp metallic protrusions that prick the outer layer (flavedo), releasing the oil glands. Water is introduced to wash away the oil, which is then separated from the water using centrifuges at ambient temperatures. No heat or solvents are ever introduced."
      },
      {
        type: "heading",
        value: "What is Steam Distillation?",
        level: 2
      },
      {
        type: "paragraph",
        value: "Unlike mechanical pressing, steam distillation utilizes high-temperature water vapor to penetrate plant tissues (like lavender stalks, peppermint leaves, or frankincense resin), causing the essential oil sacs to rupture and release their contents into volatile steam. The steam is condensed and separated as described in our distillation guide."
      },
      {
        type: "heading",
        value: "Direct Comparison: The Key Differences",
        level: 2
      },
      {
        type: "paragraph",
        value: "To help you select the ideal oil for your specific industrial application, consider these contrasting elements:"
      },
      {
        type: "list",
        value: "Comparison Metrics:",
        items: [
          "Temperature exposure: Cold Pressed oils are kept strictly at room temperature, preserving 100% of thermolabile elements. Steam Distilled oils are exposed to steam (100°C+), which can alter some sensitive compounds.",
          "Presence of non-volatile compounds: Cold-pressed citrus oils contain heavier, non-volatile compounds like waxes, pigments, and phototoxic coumarins (furanocoumarins). Steam distillation produces a purely volatile, clear liquid free of heavy waxes.",
          "Aromatics: Cold-pressed oils smell precisely like the fresh, zesty fruit rind. Steam-distilled oils often possess a slightly more complex, warm, or herbaceous undertone due to the thermal reaction.",
          "Shelf life: Steam-distilled oils generally have a longer shelf life (3-6 years) due to the absence of heavier organic matrices. Cold-pressed citrus oils, being rich in delicate terpenes, are prone to oxidation and typically last 1-2 years."
        ]
      },
      {
        type: "quote",
        value: "For leave-on skin formulations, choose steam-distilled or FCF (Furanocoumarin-Free) citrus oils to eliminate phototoxicity risks. For rich room diffusers and soaps, cold-pressed oils offer unparalleled freshness.",
        author: "Dr. Ananya Sharma"
      },
      {
        type: "heading",
        value: "Summary Guidelines for Formulation",
        level: 2
      },
      {
        type: "paragraph",
        value: "At Soham Enterprises, we offer both options. Our cold-pressed sweet orange and lemon oils are perfect for clean, high-impact aromatherapy and natural cleaning solutions, while our steam-distilled herbaceous oils offer concentrated, long-lasting therapeutic value in active pharmaceutical ingredients."
      }
    ]
  },
  {
    id: "post-4",
    title: "Creating a Sanctuary: 5 Essential Oil Blends for Stress & Focus",
    slug: "essential-oil-blends-stress-focus",
    category: "Natural Wellness",
    date: "February 18, 2026",
    readTime: "6 min read",
    excerpt: "Learn the science of olfactory stimulation and how to formulate professional-grade aromatherapy blends for commercial and personal wellness spaces.",
    mainImage: "https://images.unsplash.com/photo-1602928321679-560bb453f190?q=80&w=1200&auto=format&fit=crop",
    author: {
      name: "Soham Mehta",
      role: "Managing Director",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    content: [
      {
        type: "paragraph",
        value: "In an increasingly fast-paced and digitized world, the quality of our indoor environments profoundly impacts our cognitive health, immune function, and stress resilience. Olfactory stimulation is one of the fastest, most direct ways to influence human brain chemistry. By creating custom aromatic diffusions, you can instantly shift the atmosphere of a room from chaotic to creative."
      },
      {
        type: "heading",
        value: "The Neurobiology of Aromatherapy",
        level: 2
      },
      {
        type: "paragraph",
        value: "When we inhale an essential oil, its volatile micro-molecules bind to receptors in the olfactory epithelium. This immediately fires electrical signals along the olfactory nerve directly into the amygdala and hippocampus—the emotional and memory hubs of the brain. Unlike sight or touch, which undergo intermediate processing, scent triggers an instantaneous neurological and endocrine response."
      },
      {
        type: "quote",
        value: "Olfaction is the only sense that has direct, unmediated access to the brain's limbic system. This makes aroma the most powerful tool for immediate mood modulation.",
        author: "Soham Mehta"
      },
      {
        type: "heading",
        value: "The Art of Blend Architecture: Notes and Ratios",
        level: 2
      },
      {
        type: "paragraph",
        value: "To create an aromatherapy blend that is both therapeutically synergistic and aromatically balanced, perfumers follow a classic three-tier note structure:"
      },
      {
        type: "list",
        value: "Aromatic Note Classification:",
        items: [
          "Top Notes (30-40% of blend): Light, volatile citrus and herbaceous scents (e.g., Bergamot, Peppermint) that hit the senses first but evaporate quickly.",
          "Middle Notes (40-50% of blend): The heart of the blend. These floral, warm, or green aromas (e.g., Lavender, Rosemary) develop after a few minutes and provide therapeutic balance.",
          "Base Notes (10-20% of blend): Rich, heavy, grounding woody or resinous aromas (e.g., Sandalwood, Frankincense) that evaporate very slowly and anchor the lighter top notes."
        ]
      },
      {
        type: "heading",
        value: "Top 2 Blends for Your Diffusion Sanctuary",
        level: 2
      },
      {
        type: "paragraph",
        value: "Here are two of our highly requested master formulation recipes, optimized for commercial wellness lounges or quiet home studies:"
      },
      {
        type: "paragraph",
        value: "**1. The Deep Grounding Sanctuary (Stress & Anxiety Relief)**"
      },
      {
        type: "paragraph",
        value: "This blend combines the intense cooling and calming properties of Lavender with the heavy, sacred grounding of Indian Sandalwood and Frankincense. Excellent for evening wind-downs, yoga practices, or high-stress environments."
      },
      {
        type: "list",
        value: "Grounding Recipe (for a 15ml bottle):",
        items: [
          "45 drops of Organic Lavender Essential Oil (Middle Note / Calming)",
          "20 drops of East Indian Sandalwood Oil (Base Note / Grounding & Fixative)",
          "25 drops of Frankincense Oil (Base Note / Respiratory deepener)",
          "10 drops of Bergamot (Top Note / Uplifting mood elevator)"
        ]
      },
      {
        type: "paragraph",
        value: "**2. The Cognitive Engine (Focus & Intellectual Vitality)**"
      },
      {
        type: "paragraph",
        value: "Designed to stimulate memory retention and clear brain fog. Rosemary contains 1,8-cineole, which has been shown in clinical trials to enhance cognitive performance, while Peppermint stimulates alert focus."
      },
      {
        type: "list",
        value: "Focus Recipe (for a 15ml bottle):",
        items: [
          "40 drops of Rosemary Essential Oil (Middle Note / Cognitive stimulant)",
          "30 drops of Lemon Essential Oil (Top Note / Refreshing clarity)",
          "20 drops of Peppermint Oil (Top Note / Energetic stimulant)",
          "10 drops of Cedarwood Oil (Base Note / Earthy stabilizer)"
        ]
      },
      {
        type: "heading",
        value: "Quality Matters: The Synthetic Trap",
        level: 2
      },
      {
        type: "paragraph",
        value: "To experience true therapeutic benefits, you must avoid cheap synthetic 'fragrance oils.' Synthetic copies are composed of petrochemicals that mimic smells but lack the bioactive constituents. They can often trigger headaches and respiratory irritation. Always look for 100% pure, natural, GC-MS tested essential oils, such as those supplied by Soham Enterprises, to ensure a truly healing and pristine sanctuary."
      }
    ]
  }
];
