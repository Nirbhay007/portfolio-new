"use client";

import { Button } from "@/components/ui/button";
import { BlogPost } from "@/types/blog";
import { motion } from "framer-motion";
import { Calendar, Clock, ExternalLink, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function BlogList({ initialPosts }: { initialPosts: BlogPost[] }) {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";
  const category = searchParams.get("category") || "All";

  const filteredPosts = initialPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query);
    const matchesCategory = category === "All" || post.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredPosts.map((post, index) => (
        <BlogCard key={post.id} post={post} index={index} />
      ))}
      
      {filteredPosts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-full text-center py-12"
        >
          <p className="text-lg text-foreground/70">
            No articles found matching your criteria.
          </p>
        </motion.div>
      )}
    </div>
  );
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-lg overflow-hidden shadow-lg card-hover"
    >
      <div className="h-48 relative overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          width={400}
          height={225}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
          {post.category}
        </div>
        {post.isExternal && (
          <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center">
            <ExternalLink size={10} className="mr-1" />
            External
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-foreground/70 mb-3">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {post.date}
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            {post.readTime}
          </div>
        </div>

        <h2 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
          {post.isExternal ? (
            <a href={post.externalUrl} target="_blank" rel="noopener noreferrer">
              {post.title}
            </a>
          ) : (
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          )}
        </h2>

        <p className="text-foreground/70 mb-4">{post.excerpt}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
            >
              <Tag size={10} className="mr-1" />
              {tag}
            </span>
          ))}
        </div>

        <Button variant="link" className="p-0 h-auto" asChild>
          {post.isExternal ? (
            <a href={post.externalUrl} target="_blank" rel="noopener noreferrer">
              Read More <ExternalLink size={14} className="ml-1" />
            </a>
          ) : (
            <Link href={`/blog/${post.slug}`}>Read More</Link>
          )}
        </Button>
      </div>
    </motion.article>
  );
}

BlogList.Skeleton = function BlogListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-card rounded-lg overflow-hidden shadow-lg">
          <div className="h-48 bg-muted animate-pulse" />
          <div className="p-6 space-y-4">
            <div className="h-6 bg-muted animate-pulse rounded" />
            <div className="h-4 bg-muted animate-pulse rounded w-3/4" />
          </div>
        </div>
      ))}
    </div>
  );
};