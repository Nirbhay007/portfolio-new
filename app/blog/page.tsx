import { BlogList } from "@/components/blog/blog-list";
import { BlogSearch } from "@/components/blog/blog-search";
import { BlogSearchSkeleton } from "@/components/blog/blog-search-skeleton";
import StarField from "@/components/star-field";
import { getAllPosts } from "@/lib/blog-actions";
import React, { Suspense } from "react";

export const revalidate = 33600; // Revalidate every hour (33600 seconds)

export default async function Blog() {
  const posts = await getAllPosts();
  const categories = Array.from(new Set(posts.map((post) => post.category)));

  return (
    <React.Fragment>
      <StarField />
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Blog
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Thoughts and insights on development, programming, and technology.
          </p>
        </div>

        <Suspense fallback={<BlogSearchSkeleton />}>
          <BlogSearch categories={categories} />
        </Suspense>

        <Suspense fallback={<BlogSearchSkeleton />}>
          <BlogList initialPosts={posts} />
        </Suspense>
      </div>
    </React.Fragment>
  );
}
