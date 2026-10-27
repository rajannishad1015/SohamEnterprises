import React from 'react';

export const OrganizationSchema = () => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sohamenterprises.vercel.app";

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        "name": "Soham Enterprises",
        "url": baseUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/logo.png`,
          "width": 512,
          "height": 512
        },
        "description": "Leading bulk supplier and manufacturer of pure essential oils, cold-pressed carrier oils, and natural fragrance extracts based in Mumbai, India.",
        "foundingDate": "2014",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2nd Floor, 20/24, Old Hanuman Lane, Near K M Chavan Tailor, Zaveri Bazaar, Kalbadevi",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "400002",
          "addressCountry": "IN"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+919930996570",
            "contactType": "sales",
            "areaServed": ["IN", "Worldwide"],
            "availableLanguage": ["English", "Hindi", "Gujarati", "Marathi"]
          },
          {
            "@type": "ContactPoint",
            "telephone": "+919930282855",
            "contactType": "customer support",
            "areaServed": ["IN", "Worldwide"],
            "availableLanguage": ["English", "Hindi"]
          }
        ],
        "sameAs": [
          "https://www.linkedin.com/company/soham-enterprise",
          "https://twitter.com/sohamentofficial"
        ]
      },
      {
        "@type": "WholesaleStore",
        "@id": `${baseUrl}/#store`,
        "name": "Soham Enterprises - Essential Oils & Extracts Wholesale",
        "url": baseUrl,
        "image": `${baseUrl}/logo.png`,
        "telephone": "+919930996570",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2nd Floor, 20/24, Old Hanuman Lane, Zaveri Bazaar, Kalbadevi",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "400002",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 18.948604,
          "longitude": 72.828613
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "10:00",
            "closes": "19:00"
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
