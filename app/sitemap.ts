import { products, getSlug } from "@/lib/products";
import { blogPosts } from "@/lib/blogData";
import { CATEGORIES } from "@/lib/categories";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sohamenterprises.vercel.app";
  const catalogLastModified = new Date("2025-01-15");

  const productUrls = products.map((product) => ({
    url: `${baseUrl}/products/${getSlug(product.name)}`,
    lastModified: catalogLastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const categoryUrls = Object.keys(CATEGORIES).map((key) => ({
    url: `${baseUrl}/products/category/${key}`,
    lastModified: new Date("2025-01-20"),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date || "2025-01-15"),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...categoryUrls,
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...productUrls,
    ...blogUrls,
  ];
}
