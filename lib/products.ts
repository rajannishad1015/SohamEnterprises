export interface Product {
    name: string;
    rate: string;
    image?: string;
    category?: string;
    description?: string;
    tags?: string[];
    id?: string;
    price?: string;
}

export const products: Product[] = [
    { 
        name: "Ajowain Oil", 
        rate: "950/1800", 
        image: "/images/products/ajowain-oil.jpg",
        description: "A potent essential oil with strong antimicrobial and antiseptic properties. Highly effective for respiratory support, digestive health, and relieving muscle pain. Ideal for pharmaceutical and aromatherapy formulations.",
        tags: ["Antiseptic", "Digestive Support", "Respiratory Health", "Wholesale"]
    },
    { 
        name: "Almond Oil 5%", 
        rate: "450/-", 
        image: "/images/products/almond-oil.jpg",
        description: "A lightweight, nourishing carrier component perfect for skincare and hair care formulations. Rich in Vitamin E, it hydrates and protects the skin barrier without a heavy feel.",
        tags: ["Skincare", "Carrier Oil", "Nourishing", "Bulk Supply"]
    },
    { 
        name: "Anethol", 
        rate: "1450/-", 
        image: "/images/products/anethol.jpg",
        description: "A high-purity aromatic compound with a distinct licorice-like scent. Widely used as a natural flavoring agent in food, beverages, and oral care products for its sweet profile and antioxidant properties.",
        tags: ["Flavoring", "Aromatic", "Antioxidant", "Industrial"]
    },
    { 
        name: "Anise Oil", 
        rate: "1400/-", 
        image: "/images/products/anise-oil.jpg",
        description: "Extracted from Pimpinella anisum, this oil is prized for its antiseptic and antispasmodic benefits. Frequently used in aromatherapy for relaxation and in dentistry for oral hygiene products.",
        tags: ["Relaxation", "Oral Care", "Antispasmodic", "Essential Oil"]
    },
    { 
        name: "Apricot Oil", 
        rate: "850/-", 
        image: "/images/products/apricot-oil.jpg",
        description: "A gentle, vitamin-rich oil that improves skin elasticity and softens fine lines. Its lightweight texture makes it a favorite for sensitive and mature skin in high-end cosmetic serums and lotions.",
        tags: ["Anti-Aging", "Sensitive Skin", "Moisturizing", "Cosmetic Grade"]
    },
    { 
        name: "Avocado Oil", 
        rate: "1200/-", 
        image: "/images/products/avocado-oil.jpg",
        description: "A deep-penetrating, nutrient-dense oil loaded with Omega-9 and Vitamin E. Excellent for regenerative skincare, hair conditioning, and high-heat culinary applications.",
        tags: ["Nutrient Dense", "Regenerative", "Hair Care", "Food Grade"]
    },
    { 
        name: "Argan Oil", 
        rate: "3100/-", 
        image: "/images/products/argan-oil.jpg",
        description: "Known as 'Liquid Gold', this premium oil is exceptionally rich in antioxidants and Vitamin E. It provides deep hydration for hair and skin, reducing frizz and promoting a youthful complexion.",
        tags: ["Liquid Gold", "Deep Hydration", "Hair Serum", "Premium"]
    },
    { 
        name: "Basil Oil", 
        rate: "2600/-", 
        image: "/images/products/basil-oil.jpg",
        description: "An uplifting and herbaceous oil that stimulates the mind and improves focus. Used in aromatherapy to reduce stress, anxiety, and clear respiratory congestion.",
        tags: ["Focus", "Stress Relief", "Aromatherapy", "Herbaceous"]
    },
    { 
        name: "Bergamot Oil", 
        rate: "1050/-", 
        image: "/images/products/bergamot-oil.jpg",
        description: "A sophisticated citrus-floral oil renowned for its mood-boosting properties. Perfect for luxury perfumery and stress-relief aromatherapy blends.",
        tags: ["Mood Booster", "Perfumery", "Citrus Floral", "Wellness"]
    },
    { 
        name: "Black Pepper Oil", 
        rate: "4800/-", 
        image: "/images/products/black-pepper-oil.jpg",
        description: "A warm, spicy oil that provides an energizing and grounding effect. Used to boost circulation, ease muscular aches, and support mental clarity during fatigue.",
        tags: ["Spicy", "Circulation", "Energizing", "Therapeutic"]
    },
    { 
        name: "Bhimseni Kapoor", 
        rate: "1250/-", 
        image: "/images/products/bhimseni-kapoor.jpg",
        description: "Pure Bhimseni Camphor, known for its powerful antibacterial and anti-anxiety properties. Used for respiratory relief, purification of indoor air, and in spiritual rituals.",
        tags: ["Antibacterial", "Mental Clarity", "Spiritual", "Decongestant"]
    },
    { 
        name: "Cajuput Oil", 
        rate: "950/-", 
        image: "/images/products/cajuput-oil.jpg",
        description: "An invigorating 'clearing' oil with a fresh, medicinal scent. Excellent for supporting clear breathing during seasonal changes and providing warming relief to tired muscles.",
        tags: ["Medicinal", "Invigorating", "Clear Breathing", "Muscle Relief"]
    },
    { 
        name: "Camphor Oil", 
        rate: "450/-", 
        image: "/images/products/camphor-oil.jpg",
        description: "A potent analgesic and decongestant oil. Widely used in sports balms, topical pain relief formulations, and household cleaning products for its antimicrobial efficacy.",
        tags: ["Analgesic", "Decongestant", "Antimicrobial", "Topical"]
    },
    { 
        name: "Carrot Seed Oil", 
        rate: "7900/-", 
        image: "/images/products/carrot-seed-oil.jpg",
        description: "A vitamin-rich oil (A, C, E) providing exceptional anti-aging benefits. Rejuvenates dull skin, balances sebum production, and assists with various skin conditions for a glowing tone.",
        tags: ["Anti-Aging", "Vitamin Rich", "Skin Rejuvenation", "Antioxidant"]
    },
    { 
        name: "Cinnamon Oil", 
        rate: "450/-", 
        image: "/images/products/cinnamon-oil.jpg",
        description: "A warm, spicy oil rich in cinnamaldehyde. Known for its strong antibacterial and antifungal properties, making it a staple for aromatherapy and natural flavoring.",
        tags: ["Spicy", "Antibacterial", "Warm", "Natural Flavor"]
    },
    { 
        name: "Citronella Oil", 
        rate: "1350/-", 
        image: "/images/products/citronella-oil.jpg",
        description: "The world's most famous natural insect repellent. This oil provides a fresh, citrusy aroma while effectively masking odors and uplifting the mood.",
        tags: ["Insect Repellent", "Citrusy", "Odor Masking", "Uplifting"]
    },
    { 
        name: "Clove Oil (PG)", 
        rate: "750/-", 
        image: "/images/products/clove-oil-pg.jpg",
        description: "A high-purity pharmaceutical grade oil with strong anesthetic properties. Primarily used in dental care for toothache relief and as a natural antiseptic in mouthwashes.",
        tags: ["Dental Care", "Anesthetic", "Antiseptic", "Pharma Grade"]
    },
    { 
        name: "Clove Leaf Oil", 
        rate: "1750/-", 
        image: "/images/products/clove-leaf-oil.jpg",
        description: "A milder alternative to clove bud oil, rich in eugenol and antioxidants. Excellent for hair care formulations, scalp health, and as a natural antimicrobial cleaner.",
        tags: ["Antioxidant", "Hair Care", "Milder", "Antimicrobial"]
    },
    { 
        name: "Cedar Wood Oil", 
        rate: "1050/-", 
        image: "/images/products/cedar-wood-oil.jpg",
        description: "A grounding, woody oil that promotes profound relaxation and focus. Used in aromatherapy to reduce stress, improve sleep quality, and as a natural insect deterrent.",
        tags: ["Grounding", "Focus", "Relaxation", "Woody"]
    },
    { 
        name: "Cumin Seed Oil", 
        rate: "4850/-", 
        image: "/images/products/cumin-seed-oil.jpg",
        description: "A therapeutic oil with powerful anti-inflammatory and digestive-supportive properties. Used to alleviate bloating, boost immunity, and soothe skin irritations.",
        tags: ["Anti-Inflammatory", "Digestive Health", "Immunity", "Therapeutic"]
    },
    { 
        name: "Curry Leaf Oil", 
        rate: "14000/-", 
        image: "/images/products/curry-leaf-oil.jpg",
        description: "A rich Ayurvedic oil that strengthens hair follicles and stimulates growth. Packed with antioxidants and vitamins, it nourishes the scalp and helps prevent premature greying.",
        tags: ["Hair Growth", "Ayurvedic", "Antioxidant", "Scalp Health"]
    },
    { 
        name: "Coriander Oil", 
        rate: "8900/-", 
        image: "/images/products/coriander-oil.jpg",
        description: "A warm, herbaceous oil that promotes relaxation and mental focus. Its antibacterial properties make it effective for clearing skin and soothing aching muscles.",
        tags: ["Relaxation", "Focus", "Antibacterial", "Muscle Soothing"]
    },
    { 
        name: "Cardamom Oil", 
        rate: "38000/-", 
        image: "/images/products/cardamom-oil.jpg",
        description: "A therapeutic oil prized for its digestive support and clear breathing benefits. Its sweet, spicy aroma helps calm nerves and balance skin oil levels.",
        tags: ["Digestive Aid", "Clear Breathing", "Spicy", "Nerve Calming"]
    },
    { 
        name: "Camphor Powder", 
        rate: "1050/-", 
        image: "/images/products/camphor-powder.jpg",
        description: "High-purity Camphor powder for industrial and spiritual use. Ideal for air purification, religious rituals, and as a potent anti-inflammatory ingredient in muscle rubs.",
        tags: ["Purification", "Spiritual", "Industrial", "Anti-Inflammatory"]
    },
    { 
        name: "Cinnamon Leaf Oil", 
        rate: "2950/-", 
        image: "/images/products/cinnamon-leaf-oil.jpg",
        description: "A potent oil with a warm, musky scent. Known for its strong immune support and cleansing properties, making it ideal for natural household cleaning and soap making.",
        tags: ["Immune Support", "Cleansing", "Musky", "Soap Making"]
    },
    { 
        name: "D-Limonene", 
        rate: "1250/-", 
        image: "/images/products/d-limonene.jpg",
        description: "A natural industrial degreaser and high-performance solvent extracted from citrus rinds. Features a strong citrus scent and excellent cleaning properties for industrial applications.",
        tags: ["Degreaser", "Solvent", "Citrus", "Industrial Grade"]
    },
    { 
        name: "Eucalyptus Oil", 
        rate: "950/1200", 
        image: "/images/products/eucalyptus-oil.jpg",
        description: "The ultimate respiratory support oil. Renowned for its decongestant, antiseptic, and cooling properties, it is a staple in vapor rubs and mental clarity blends.",
        tags: ["Decongestant", "Cooling", "Respiratory Support", "Antiseptic"]
    },
    { 
        name: "Evening Prime Rose", 
        rate: "1275/-", 
        image: "/images/products/evening-primrose-oil.jpg",
        description: "A moisturizing oil exceptionally high in Gamma-Linolenic Acid (GLA). Provides deep hydration and repairs the skin barrier, making it ideal for soothing eczema and dry skin.",
        tags: ["Deep Hydration", "Skin Barrier", "GLA Rich", "Moisturizing"]
    },
    { 
        name: "Eugenol Pure", 
        rate: "1900/-", 
        image: "/images/products/eugenol-pure.jpg",
        description: "A pharmaceutical-grade compound essential for dental care. Provides powerful analgesic and antiseptic benefits, commonly used in temporary fillings and oral hygiene products.",
        tags: ["Dental Care", "Analgesic", "Pharma Grade", "Spicy"]
    },
    { 
        name: "Frankincense Myrrh", 
        rate: "4200/-", 
        image: "/images/products/frankincense-myrrh-oil.jpg",
        description: "A sacred blend of ancient oils known for profound skin rejuvenation and anti-aging. Promotes deep relaxation, prayerful focus, and helps soothe skin irritations.",
        tags: ["Anti-Aging", "Rejuvenating", "Meditation", "Sacred Blend"]
    },
    { 
        name: "Geranium Oil", 
        rate: "2550/3500", 
        image: "/images/products/geranium-oil.jpg",
        description: "A versatile balancing oil that regulates sebum and tones the skin. Its antibacterial properties make it exceptional for acne management and anti-aging skincare.",
        tags: ["Skin Balancing", "Anti-Aging", "Astringent", "Acne Care"]
    },
    { 
        name: "Ginger Oil", 
        rate: "9800/-", 
        image: "/images/products/ginger-oil.jpg",
        description: "Known as the 'Oil of Empowerment', this warming oil aids digestion and relieves nausea. Its anti-inflammatory nature is perfect for easing muscle soreness and joint pain.",
        tags: ["Warming", "Digestive Support", "Pain Relief", "Invigorating"]
    },
    { 
        name: "Grape Seed Oil", 
        rate: "1200/-", 
        image: "/images/products/grape-seed-oil.jpg",
        description: "A lightweight, non-comedogenic carrier oil rich in Vitamin E and Omega-6. Absorbs quickly, making it ideal for face serums and balancing oily skin types.",
        tags: ["Carrier Oil", "Non-Comedogenic", "Vitamin E Rich", "Lightweight"]
    },
    { 
        name: "Hazel Nut Oil", 
        rate: "1250/-", 
        image: "/images/products/hazel-nut-oil.jpg",
        description: "A nutrient-dense 'drying' oil that penetrates deeply without leaving a greasy residue. Effectively tightens pores and provides intense hydration for combination skin.",
        tags: ["Fast Absorbing", "Pore Refining", "Moisturizing", "Nutrient Rich"]
    },
    { 
        name: "Holy Basil Oil", 
        rate: "1250/-", 
        image: "/images/products/holy-basil-oil.jpg",
        description: "The 'Queen of Herbs' in Ayurveda, this adaptogenic oil reduces stress and enhances mental clarity. A powerful tool for emotional balance and respiratory support.",
        tags: ["Adaptogen", "Tulsi", "Stress Relief", "Mental Clarity"]
    },
    { 
        name: "Jajoba Oil", 
        rate: "2450/-", 
        image: "/images/products/jajoba-oil.jpg",
        description: "A liquid wax that perfectly mimics human sebum, making it the most compatible oil for skin and hair. Non-comedogenic and highly stable for all cosmetic bases.",
        tags: ["Sebum Mimetic", "Hair Care", "Highly Stable", "Skin Friendly"]
    },
    { 
        name: "Juniper Berry Oil", 
        rate: "3650/-", 
        image: "/images/products/juniper-berry-oil.jpg",
        description: "A powerful detoxifying oil that stimulates the lymphatic system and purifies the air. Acts as a natural cleanser for skin pores while clearing mental fog.",
        tags: ["Detoxifying", "Purifying", "Lymphatic Support", "Grounding"]
    },
    { 
        name: "Jatamansi Oil", 
        rate: "14500/-", 
        image: "/images/products/jatamansi-oil.jpg",
        description: "A prized Ayurvedic brain tonic also known as Spikenard. Highly effective for promoting deep sleep, reducing anxiety, and strengthening hair follicles at the root.",
        tags: ["Sleep Aid", "Brain Tonic", "Anxiety Relief", "Hair Strengthener"]
    },
    { 
        name: "Kovai Fruit Oil", 
        rate: "1050/-", 
        image: "/images/products/kovai-fruit-oil.jpg",
        description: "Extracted from the Ivy Gourd, this traditional oil is valued for its unique anti-inflammatory and skin-soothing properties. Used in specialized therapeutic formulations.",
        tags: ["Traditional", "Anti-Inflammatory", "Skin Soothing", "Rare Extract"]
    },
    { 
        name: "Lavender Oil", 
        rate: "1400/2950", 
        image: "/images/products/lavender-oil.jpg",
        description: "The cornerstone of aromatherapy, world-renowned for its calming and sleep-inducing properties. A gentle antiseptic that soothes skin redness and nervous tension.",
        tags: ["Calming", "Sleep Inducing", "Universal Oil", "Skin Soothing"]
    },
    { 
        name: "Menthol Crystal", 
        rate: "1550/-", 
        image: "/images/products/menthol-crystal.jpg",
        description: "High-purity Menthol crystals providing an intense, long-lasting cooling sensation. Widely used as an active ingredient in topical analgesics, decongestants, and refreshing oral care products.",
        tags: ["Cooling", "Analgesic", "Decongestant", "Minty"]
    },
    { 
        name: "Neroli Oil", 
        rate: "5800/6800", 
        image: "/images/products/neroli-oil.jpg",
        description: "A luxurious oil that stimulates skin cell regeneration and reduces the appearance of scars. Its calming, floral scent is a powerful mood-booster and stress-relief agent in aromatherapy.",
        tags: ["Regenerating", "Anti-Aging", "Floral", "Luxurious"]
    },
    { 
        name: "Neem Oil", 
        rate: "450/-", 
        image: "/images/products/neem-oil.jpg",
        description: "A nutrient-rich Ayurvedic staple with potent antibacterial and antifungal properties. Highly effective for soothing eczema, acne, and as a natural, eco-friendly insecticide for gardening.",
        tags: ["Ayurvedic", "Antifungal", "Eco-Friendly", "Skin Healing"]
    },
    { 
        name: "Orange Oil", 
        rate: "1450/-", 
        image: "/images/products/orange-oil.jpg",
        description: "A bright, citrusy oil with high limonene content, making it a superior natural degreaser. Its uplifting aroma is perfect for refreshing indoor spaces and boosting emotional well-being.",
        tags: ["Degreaser", "Uplifting", "Citrus", "Natural Cleaning"]
    },
    { 
        name: "Olive Oil", 
        rate: "1050/-", 
        image: "/images/products/olive-oil.jpg",
        description: "A deeply moisturizing, antioxidant-packed carrier oil rich in Vitamin E. Helps protect the skin's moisture barrier and improve elasticity, making it an ideal base for soaps and balms.",
        tags: ["Carrier Oil", "Deeply Moisturizing", "Vitamin E", "Skin Elasticity"]
    },
    { 
        name: "Patcholi Oil", 
        rate: "5200/9800", 
        image: "/images/products/patchouli-oil.jpg",
        description: "An earthy, grounding oil that acts as a natural fixative in high-end perfumery. Promotes skin cell regeneration and effectively regulates sebum, making it ideal for mature or troubled skin.",
        tags: ["Grounding", "Fixative", "Earthy", "Cell Regeneration"]
    },
    { 
        name: "Peppermint Oil", 
        rate: "1150/1450", 
        image: "/images/products/peppermint-oil.jpg",
        description: "A highly invigorating oil that promotes mental alertness and provides temporary relief from headaches. Its powerful cooling effect is used to soothe muscle tension and refresh the scalp.",
        tags: ["Invigorating", "Cooling", "Headache Relief", "Muscle Soothing"]
    },
    { 
        name: "Palmrosa Oil", 
        rate: "1950/-", 
        image: "/images/products/palmarosa-oil.jpg",
        description: "A skin-loving oil prized for its ability to hydrate and balance sebum production. Its antimicrobial properties support a radiant complexion and help manage acne-prone skin.",
        tags: ["Hydrating", "Antimicrobial", "Radiant Complexion", "Skin Balance"]
    },
    { 
        name: "Petitgrain Oil", 
        rate: "1850/-", 
        image: "/images/products/petitgrain-oil.jpg",
        description: "A refreshing green-citrus oil that helps ease feelings of stress and mental fatigue. Widely used in aromatherapy of relaxation and to support a restful night's sleep.",
        tags: ["Stress Relief", "Citrusy", "Refreshing", "Sleep Aid"]
    },
    { 
        name: "Pine Oil", 
        rate: "180/-", 
        image: "/images/products/pine-oil.jpg",
        description: "A powerful natural disinfectant and industrial-grade cleaner. Effectively cuts through grime and neutralizes stubborn odors while providing a fresh, woody forest aroma.",
        tags: ["Disinfectant", "Industrial Strength", "Odor Neutralizer", "Woody"]
    },
    { 
        name: "Spearmint Oil", 
        rate: "3800/-", 
        image: "/images/products/spearmint-oil.jpg",
        description: "A refreshing, minty oil that aids digestion and provides a cooling sensation. Its gentle nature makes it ideal for oral care and soothing skin irritations.",
        tags: ["Refreshing", "Digestive Aid", "Cooling", "Oral Care"]
    },
    { 
        name: "Thyme Oil", 
        rate: "3850/-", 
        image: "/images/products/thyme-oil.jpg",
        description: "A potent, herbaceous oil known for its strong antimicrobial and immune-boosting properties. Excellent for respiratory support and as a natural preservative in skincare.",
        tags: ["Antimicrobial", "Immune Support", "Respiratory", "Herbaceous"]
    },
    { 
        name: "Tea Tree Oil", 
        rate: "2600/4300", 
        image: "/images/products/tea-tree-oil.jpg",
        description: "The gold standard for natural skincare. Renowned for its powerful antibacterial, antifungal, and anti-inflammatory properties, it is essential for treating acne and scalp issues.",
        tags: ["Antibacterial", "Antifungal", "Acne Care", "Scalp Health"]
    },
    { 
        name: "Turmeric Oil", 
        rate: "1450/-", 
        image: "/images/products/turmeric-oil.jpg",
        description: "A potent anti-inflammatory and antioxidant oil. Widely used to brighten skin tone, reduce hyperpigmentation, and support overall skin health with its soothing properties.",
        tags: ["Anti-Inflammatory", "Antioxidant", "Brightening", "Skin Health"]
    },
    { 
        name: "Thymol Crystals", 
        rate: "1150/-", 
        image: "/images/products/thymol-crystals.jpg",
        description: "A powerful crystalline compound derived from thyme. Highly effective as a natural disinfectant, preservative, and active ingredient in oral hygiene and respiratory formulations.",
        tags: ["Disinfectant", "Preservative", "Oral Care", "Respiratory"]
    },
    { 
        name: "Vetivert Oil", 
        rate: "2550/18000", 
        image: "/images/products/vetiver-oil.jpg",
        description: "Known as the 'Oil of Tranquility' for its deep grounding and stress-reducing properties. A vital base note in luxury perfumery that also supports skin regeneration.",
        tags: ["Grounding", "Tranquility", "Perfumery", "Skin Regeneration"]
    },
    { 
        name: "Ylang Ylang Oil", 
        rate: "1700/7300", 
        image: "/images/products/ylang-ylang-oil.jpg",
        description: "A rich, floral oil prized for its ability to reduce anxiety and promote emotional balance. Traditionally considered a potent aphrodisiac and luxurious hair conditioner.",
        tags: ["Floral", "Aphrodisiac", "Anxiety Relief", "Hair Care"]
    },
    { 
        name: "Wheat Germ Oil", 
        rate: "450/-", 
        image: "/images/products/wheat-germ-oil.jpg",
        description: "An antioxidant-rich carrier oil loaded with Vitamin E. Deeply nourishes dry, damaged skin and supports tissue repair, making it a favorite for anti-aging blends.",
        tags: ["Vitamin E", "Antioxidant", "Carrier Oil", "Skin Repair"]
    },
    { 
        name: "Methyl Salicylate", 
        rate: "380/-", 
        image: "/images/products/methyl-salicylate.jpg",
        description: "A powerful warming compound used in topical analgesics and muscle rubs. Provides effective relief for joint pain and is a key industrial solvent for dyes.",
        tags: ["Analgesic", "Warming", "Muscle Pain", "Industrial"]
    },
    { 
        name: "Terpentine Oil", 
        rate: "260/-", 
        image: "/images/products/turpentine-oil.jpg",
        description: "A high-performance natural solvent essential for thinning oil-based paints and varnishes. Actively used in industrial cleaning and specialized chemical synthesis.",
        tags: ["Solvent", "Industrial", "Natural", "Cleaning Agent"]
    },
    { 
        name: "Walnut Oil", 
        rate: "1650/-", 
        image: "/images/products/walnut-oil.jpg",
        description: "An emollient carrier oil rich in Omega-3 fatty acids. Provides intense moisturization for skin and hair while soothing muscle discomfort during massage therapy.",
        tags: ["Omega-3", "Emollient", "Hair Moisturizer", "Massage Oil"]
    },
    { 
        name: "Caraway Oil", 
        rate: "2850/-", 
        image: "/images/products/caraway-oil.jpg",
        description: "A therapeutic oil with excellent digestive-supportive and antispasmodic properties. Traditionally used to relieve bloating and support overall gastrointestinal health.",
        tags: ["Digestive Support", "Antispasmodic", "Gastrointestinal", "Therapeutic"]
    },
    { 
        name: "Cassia Oil", 
        rate: "650/-", 
        image: "/images/products/cassia-oil.jpg",
        description: "A warm, spicy oil with potent antimicrobial benefits. Promotes emotional balance and serves as a powerful flavoring agent in the food and cosmetic industries.",
        tags: ["Spicy", "Antimicrobial", "Flavoring", "Emotional Balance"]
    },
    { 
        name: "Clary Sage", 
        rate: "23500/-", 
        image: "/images/products/clary-sage-oil.jpg",
        description: "A versatile aromatherapy oil renowned for its ability to balance hormones and reduce stress. Promotes relaxation and clarity of mind during times of transition.",
        tags: ["Hormonal Balance", "Stress Relief", "Aromatherapy", "Relaxation"]
    },
    { 
        name: "Mehandi Oil", 
        rate: "560/-", 
        image: "/images/products/mehandi-oil.jpg",
        description: "A specialized oil used to enhance the color and longevity of henna designs. Also provides traditional benefits for scalp health and hair conditioning.",
        tags: ["Henna Booster", "Traditional", "Hair Care", "Scalp Health"]
    },
    { 
        name: "Kalonji Oil", 
        rate: "950/1150", 
        image: "/images/products/kalonji-oil.jpg",
        description: "Also known as Black Seed Oil, this therapeutic powerhouse supports immune health and skin vitality. Valued for its unique anti-inflammatory properties.",
        tags: ["Black Seed", "Immune Support", "Anti-Inflammatory", "Skin Vitality"]
    },
    { 
        name: "Cade Oil", 
        rate: "1350/-", 
        image: "/images/products/cade-oil.jpg",
        description: "An antiseptic oil traditionally used to treat severe scalp conditions and skin irritations. Its smoky, woody aroma is a hallmark of traditional therapeutic formulations.",
        tags: ["Antiseptic", "Scalp Care", "Smoky Aroma", "Therapeutic"]
    },
    { 
        name: "Nagarmotha Oil", 
        rate: "24500/-", 
        image: "/images/products/nagarmotha-oil.jpg",
        description: "A prized Ayurvedic oil for digestive support and scalp health. Effectively manages skin inflammation and promotes healthy hair growth from the root.",
        tags: ["Ayurvedic", "Digestive", "Scalp Health", "Hair Growth"]
    },
    { 
        name: "Fennel Seed Oil", 
        rate: "4850/-", 
        image: "/images/products/fennel-seed-oil.jpg",
        description: "A sweet, herbaceous oil that aids digestion and supports hormonal balance. Widely used in aromatherapy to reduce cravings and promote detox.",
        tags: ["Digestive", "Detox", "Hormonal Support", "Herbaceous"]
    },
    { 
        name: "Dill Oil", 
        rate: "1850/-", 
        image: "/images/products/dill-oil.jpg",
        description: "A calming oil that supports gastrointestinal health and reduces nervous tension. In aromatherapy, it is valued for its ability to promote a restful night's sleep.",
        tags: ["Calming", "Sleep Aid", "Gastrointestinal", "Relaxation"]
    },
    { 
        name: "Petitgrain Oil (Premium)", 
        rate: "3600/-", 
        image: "/images/products/petitgrain-oil.jpg",
        description: "A high-purity Petitgrain oil with a sophisticated green-woody profile. Exceptionally effective for reducing nervous exhaustion and improving sleep quality.",
        tags: ["High Purity", "Nervous Support", "Premium", "Woody"]
    },
    { 
        name: "Cypress Oil (Spain)", 
        rate: "2400/-", 
        image: "/images/products/cypress-oil-spain.jpg",
        description: "A fresh, woody oil that supports healthy circulation and eases respiratory congestion. Known for its grounding effect on the mind and body.",
        tags: ["Circulation", "Grounding", "Respiratory", "Fresh Woody"]
    },
    { 
        name: "Mandarin Oil", 
        rate: "1850/2400", 
        image: "/images/products/mandarin-oil.jpg",
        description: "A gentle, citrusy oil that uplifts the mood and supports digestive health. Its sweet aroma is a favorite for relaxation and reducing feelings of anxiety.",
        tags: ["Gentle Citrus", "Mood Uplift", "Anxiety Relief", "Digestive"]
    },
    { 
        name: "Tulsi Oil (Premium)", 
        rate: "2850/4500", 
        image: "/images/products/tulsi-oil.jpg",
        description: "A premium grade of the sacred 'Holy Basil' oil. Provides intense adaptogenic benefits, supporting respiratory health and mental resilience during stress.",
        tags: ["Premium", "Adaptogen", "Tulsi", "Sacred"]
    },
    { 
        name: "Calendula Oil", 
        rate: "800/-", 
        image: "/images/products/calendula-oil.jpg",
        description: "A premier skin-healing oil rich in anti-inflammatory compounds. Exceptional for soothing sensitive skin, minor wounds, and repairing the skin barrier.",
        tags: ["Skin Healing", "Anti-Inflammatory", "Sensitive Skin", "Barrier Repair"]
    },
    { 
        name: "Cinnamon Bark Oil", 
        rate: "24500/-", 
        image: "/images/products/cinnamon-bark-oil.jpg",
        description: "A highly potent oil with a rich, warm aroma. Renowned for its strong antioxidant and antimicrobial properties, making it a valuable industrial and therapeutic ingredient.",
        tags: ["High Potency", "Antioxidant", "Antimicrobial", "Warm Aroma"]
    },
    { 
        name: "Rosemary Oil", 
        rate: "1850/-", 
        image: "/images/products/rosemary-oil.jpg",
        description: "A mentally stimulating oil renowned for boosting focus, memory, and circulation. Widely used to promote hair growth, relieve muscle pain, and uplift the mood during mental fatigue.",
        tags: ["Memory Boost", "Hair Growth", "Stimulating", "Muscle Relief"]
    },
    { 
        name: "Rose Hip", 
        rate: "2400/-", 
        image: "/images/products/rosehip-oil.jpg",
        description: "The 'Oil of Youth' for skincare. Exceptionally rich in Vitamin A and C, it is a powerhouse for reducing hyperpigmentation and smoothing fine lines.",
        tags: ["Anti-Aging", "Vitamin A & C", "Brightening", "Fine Lines"]
    },
];

export const getSlug = (name: string) => {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
};

export const getProductBySlug = (slug: string) => {
    return products.find(p => getSlug(p.name) === slug);
};
