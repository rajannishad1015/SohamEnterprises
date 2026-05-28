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
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | Soham Enterprises`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.mainImage }],
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

  // Recommended Articles
  const recommendedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .sort((a, b) => {
      if (a.category === post.category && b.category !== post.category) return -1;
      if (a.category !== post.category && b.category === post.category) return 1;
      return 0;
    })
    .slice(0, 3);

  return <BlogPostClient post={post} recommendedPosts={recommendedPosts} />;
}
