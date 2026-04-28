import React from 'react';
import { Product } from '@/lib/products';

interface ProductSchemaProps {
  products: Product[];
}

export const ProductSchema: React.FC<ProductSchemaProps> = ({ products }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Essential Oils & Natural Compounds Catalog",
    "description": "Collection of premium pure extracts and pharmaceutical grade oils.",
    "numberOfItems": products.length,
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "description": `Pure ${product.name} extracted for quality excellence.`,
        "image": `https://sohamenterprises.vercel.app${product.image || '/images/products/placeholder.jpg'}`,
        "brand": {
          "@type": "Brand",
          "name": "Soham Enterprise"
        }
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
