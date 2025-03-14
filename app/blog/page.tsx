"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import StarField from "@/components/star-field";

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Building Responsive Websites with Tailwind CSS",
    excerpt:
      "Learn how to create beautiful, responsive websites quickly using Tailwind CSS utility classes.",
    image:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "March 15, 2025",
    readTime: "5 min read",
    category: "Web Development",
    tags: ["Tailwind CSS", "Responsive Design", "CSS"],
  },
  {
    id: 2,
    title: "Getting Started with React Hooks",
    excerpt:
      "A comprehensive guide to React Hooks and how they can simplify your functional components.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "February 28, 2025",
    readTime: "8 min read",
    category: "React",
    tags: ["React", "Hooks", "JavaScript"],
  },
  {
    id: 3,
    title: "Introduction to TypeScript for JavaScript Developers",
    excerpt:
      "Discover how TypeScript can enhance your JavaScript development with static typing and improved tooling.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "February 10, 2025",
    readTime: "6 min read",
    category: "TypeScript",
    tags: ["TypeScript", "JavaScript", "Web Development"],
  },
  {
    id: 4,
    title: "Creating Animations with Framer Motion",
    excerpt:
      "Learn how to add beautiful animations to your React applications using Framer Motion.",
    image:
      "https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "January 25, 2025",
    readTime: "7 min read",
    category: "Animation",
    tags: ["Framer Motion", "React", "Animation"],
  },
  {
    id: 5,
    title: "Building a RESTful API with Node.js and Express",
    excerpt:
      "A step-by-step guide to creating a RESTful API using Node.js and Express.",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "January 12, 2025",
    readTime: "10 min read",
    category: "Backend",
    tags: ["Node.js", "Express", "API", "Backend"],
  },
  {
    id: 6,
    title: "State Management in React with Context API and useReducer",
    excerpt:
      "Explore state management solutions in React using the Context API and useReducer hook.",
    image:
      "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "December 30, 2024",
    readTime: "9 min read",
    category: "React",
    tags: ["React", "Context API", "State Management"],
  },
];

// All unique categories
const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <StarField />

      <div className="container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Blog
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Thoughts and insights on development, programming, and technology.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                size={18}
              />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === "All" ? "default" : "outline"}
                onClick={() => setSelectedCategory("All")}
              >
                All
              </Button>

              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg overflow-hidden shadow-lg card-hover"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </div>
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
                  <a href={`/blog/${post.id}`}>{post.title}</a>
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
                  <a href={`/blog/${post.id}`}>Read More</a>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <p className="text-lg text-foreground/70">
              No articles found matching your search criteria.
            </p>
          </motion.div>
        )}
      </div>
    </>
  );
}
