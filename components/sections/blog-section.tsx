"use client";

import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/lib/blog-actions";
import { BlogPost } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const allPosts = await getAllPosts();
        // Sort posts by date (newest first)
        const sortedPosts = allPosts.sort((a, b) => 
          new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        // Take only the latest 3 posts
        setPosts(sortedPosts.slice(0, 3));
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        // Fallback to hardcoded posts if there's an error
        setPosts(fallbackPosts);
      } finally {
        setLoading(false);
      }
    }
    
    fetchPosts();
  }, []);

  return (
    <section className="py-20 relative overflow-hidden" id="blog">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
          >
            Latest Articles
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-foreground/70 max-w-2xl"
          >
            Thoughts and insights on web development, design, and technology.
          </motion.p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card rounded-lg overflow-hidden shadow-lg animate-pulse">
                <div className="h-48 bg-muted" />
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-muted rounded w-3/4" />
                  <div className="h-4 bg-muted rounded" />
                  <div className="h-4 bg-muted rounded w-5/6" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg overflow-hidden shadow-lg card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between text-sm text-foreground/70 mb-3">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-foreground/70 mb-4 line-clamp-3">{post.excerpt}</p>
                  {post.isExternal ? (
                    <a 
                      href={post.externalUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center"
                    >
                      Read More
                      <svg 
                        className="w-4 h-4 ml-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  ) : (
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-primary hover:underline inline-flex items-center"
                    >
                      Read More
                      <svg 
                        className="w-4 h-4 ml-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="flex justify-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">View All Articles</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Fallback posts in case of fetch errors
const fallbackPosts: BlogPost[] = [
  {
    id: "building-responsive-uis",
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt: "Learn how to create beautiful, responsive user interfaces using Tailwind CSS utility classes.",
    image: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?q=80&w=2070&auto=format&fit=crop",
    date: "May 15, 2025",
    readTime: "5 min read",
    category: "Frontend",
    tags: ["Tailwind CSS", "Responsive Design", "CSS"],
    slug: "building-responsive-uis-with-tailwind",
    author: {
      name: "Your Name",
      image: "/images/authors/your-avatar.jpg"
    }
  },
  {
    id: "nextjs-14",
    title: "Getting Started with Next.js 14",
    excerpt: "Explore the new features and improvements in Next.js 14 and how to leverage them in your projects.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2074&auto=format&fit=crop",
    date: "April 28, 2025",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["Next.js", "React", "Web Development"],
    slug: "getting-started-with-nextjs-14",
    author: {
      name: "Your Name",
      image: "/images/authors/your-avatar.jpg"
    }
  },
  {
    id: "typescript-modern-dev",
    title: "The Power of TypeScript in Modern Web Development",
    excerpt: "Discover how TypeScript can improve your development workflow and help you write more robust code.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    date: "April 10, 2025",
    readTime: "6 min read",
    category: "Programming",
    tags: ["TypeScript", "JavaScript", "Web Development"],
    slug: "power-of-typescript-in-modern-web-development",
    author: {
      name: "Your Name",
      image: "/images/authors/your-avatar.jpg"
    }
  }
];
