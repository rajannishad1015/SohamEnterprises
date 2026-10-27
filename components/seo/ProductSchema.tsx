import React from 'react';
import { Product, getSlug } from '@/lib/products';

interface ProductSchemaProps {
  products: Product[];
}

export const ProductSchema: React.FC<ProductSchemaProps> = ({ products }) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sohamenterprises.vercel.app";

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Pure Essential Oils & Botanical Extracts Catalog | Soham Enterprises",
    "description": "Wholesale catalog of 100% pure essential oils, carrier oils, and aroma chemicals in Mumbai.",
    "numberOfItems": products.length,
    "itemListElement": products.map((product, index) => {
      const slug = getSlug(product.name);
      return {
        "@type": "ListItem",
        "position": index + 1,
        "name": product.name,
        "url": `${baseUrl}/products/${slug}`,
        "item": {
          "@type": "Product",
          "name": product.name,
          "url": `${baseUrl}/products/${slug}`,
          "description": product.description || `Pure ${product.name} extracted for cosmetic, pharmaceutical, and aroma formulations.`,
          "image": product.image ? `${baseUrl}${product.image}` : `${baseUrl}/logo.png`,
          "brand": {
            "@type": "Brand",
            "name": "Soham Enterprises"
          }
        }
      };
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
