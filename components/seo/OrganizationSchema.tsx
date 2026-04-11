import React from 'react';

export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Soham Enterprise",
    "alternateName": "Soham Enterprises",
    "url": "https://sohamenterprises.vercel.app",
    "logo": "https://sohamenterprises.vercel.app/logo.png",
    "description": "Premium global suppliers of essential oils, natural extracts, and industrial chemical compounds.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919137450702",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "Hindi"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/soham-enterprise",
      "https://twitter.com/sohamentofficial"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
