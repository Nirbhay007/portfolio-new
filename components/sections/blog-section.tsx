"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt:
      "Learn how to create beautiful, responsive user interfaces using Tailwind CSS utility classes.",
    image:
      "https://images.unsplash.com/photo-1618788372246-79faff0c3742?q=80&w=2070&auto=format&fit=crop",
    date: "May 15, 2025",
    readTime: "5 min read",
    category: "Frontend",
    slug: "building-responsive-uis-with-tailwind",
  },
  {
    id: 2,
    title: "Getting Started with Next.js 14",
    excerpt:
      "Explore the new features and improvements in Next.js 14 and how to leverage them in your projects.",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2074&auto=format&fit=crop",
    date: "April 28, 2025",
    readTime: "8 min read",
    category: "Web Development",
    slug: "getting-started-with-nextjs-14",
  },
  {
    id: 3,
    title: "The Power of TypeScript in Modern Web Development",
    excerpt:
      "Discover how TypeScript can improve your development workflow and help you write more robust code.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    date: "April 10, 2025",
    readTime: "6 min read",
    category: "Programming",
    slug: "power-of-typescript-in-modern-web-development",
  },
];

const BlogSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="blog" className="py-20 bg-background" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Latest Articles</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Thoughts, insights, and updates from my blog.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * (index % 3) }}
              className="bg-card rounded-lg overflow-hidden shadow-lg card-hover"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-foreground/70 mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.date}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-foreground/80 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} passHref>
                  <Button variant="link" className="p-0 h-auto font-medium">
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <Button size="lg" asChild>
            <Link href="/blog">View All Articles</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
