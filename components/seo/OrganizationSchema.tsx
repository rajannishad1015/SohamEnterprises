import React from 'react';
import { OrganizationJsonLd } from 'next-seo';

export const OrganizationSchema = () => {
  return (
    <OrganizationJsonLd
      useAppDir={true}
      type="Organization"
      id="https://sohamenterprises.vercel.app/#organization"
      name="Soham Enterprise"
      url="https://sohamenterprises.vercel.app"
      logo="https://sohamenterprises.vercel.app/logo.png"
      sameAs={[
        "https://www.linkedin.com/company/soham-enterprise",
        "https://twitter.com/sohamentofficial"
      ]}
      contactPoint={[
        {
          telephone: '+919930996570',
          contactType: 'customer service',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi'],
        },
      ]}
    />
  );
};
