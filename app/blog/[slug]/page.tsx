import { blogPosts } from "@/lib/blogData";
import BlogPostClient from "./BlogPostClient";
import { Metadata } from "next";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: "Article Not Found | Soham Enterprises",
    };
  }

  const title = `${post.title} | Soham Enterprises`;
  const description = post.excerpt;

  return {
    title,
    description,
    keywords: [
      post.title,
      post.category,
      "Essential Oils Mumbai",
      "Essential Oil Wholesale India",
      "Soham Enterprises Blog"
    ],
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: post.mainImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.mainImage],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-3xl font-serif text-primary font-bold mb-4">Article Not Found</h1>
        <p className="text-muted-foreground text-sm max-w-sm mb-8">
          The story you are trying to access could not be found or has been archived.
        </p>
      </div>
    );
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sohamenterprises.vercel.app";

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.mainImage.startsWith("http") ? post.mainImage : `${baseUrl}${post.mainImage}`,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role
    },
    "publisher": {
      "@type": "Organization",
      "name": "Soham Enterprises",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.slug}`
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${baseUrl}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `${baseUrl}/blog/${post.slug}`
      }
    ]
  };

  // Recommended Articles
  const recommendedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .sort((a, b) => {
      if (a.category === post.category && b.category !== post.category) return -1;
      if (a.category !== post.category && b.category === post.category) return 1;
      return 0;
    })
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogPostClient post={post} recommendedPosts={recommendedPosts} />
    </>
  );
}
