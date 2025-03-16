"use server";

import { BlogPost } from '@/types/blog';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');
const EXTERNAL_POSTS_FILE = path.join(process.cwd(), 'content/external-posts.json');

const hardcodedPosts: BlogPost[] = [
    {
      id: "responsive-websites-with-tailwind-css",
      title: "Building Responsive Websites with Tailwind CSS",
      excerpt:
        "Learn how to create beautiful, responsive websites quickly using Tailwind CSS utility classes.",
      image:
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "March 15, 2025",
      readTime: "5 min read",
      category: "Web Development",
      tags: ["Tailwind CSS", "Responsive Design", "CSS"],
      slug: "responsive-websites-with-tailwind-css",
      author: {
        name: "Nirbhay Singh",
        image: "/images/authors/your-avatar.jpg"
      }
    },
    {
      id: "react-hooks",
      title: "Getting Started with React Hooks",
      excerpt:
        "A comprehensive guide to React Hooks and how they can simplify your functional components.",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "February 28, 2025",
      readTime: "8 min read",
      category: "React",
      tags: ["React", "Hooks", "JavaScript"],
      slug: "react-hooks",
      author: {
        name: "Nirbhay Singh",
        image: "/images/authors/your-avatar.jpg"
      }
    },
    {
      id: "introduction-to-typescript-for-javascript-developers",
      title: "Introduction to TypeScript for JavaScript Developers",
      excerpt:
        "Discover how TypeScript can enhance your JavaScript development with static typing and improved tooling.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "February 10, 2025",
      readTime: "6 min read",
      category: "TypeScript",
      tags: ["TypeScript", "JavaScript", "Web Development"],
      slug: "introduction-to-typescript-for-javascript-developers",
      author: {
        name: "Nirbhay Singh",
        image: "/images/authors/your-avatar.jpg"
      }
    },
    {
      id: "creating-animations-with-framer-motion",
      title: "Creating Animations with Framer Motion",
      excerpt:
        "Learn how to add beautiful animations to your React applications using Framer Motion.",
      image:
        "https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "January 25, 2025",
      readTime: "7 min read",
      category: "Animation",
      tags: ["Framer Motion", "React", "Animation"],
      slug: "creating-animations-with-framer-motion",
      author: {
        name: "Nirbhay Singh",
        image: "/images/authors/your-avatar.jpg"
      }
    },
    {
      id: "building-a-restful-api-with-node-js-and-express",
      title: "Building a RESTful API with Node.js and Express",
      excerpt:
        "A step-by-step guide to creating a RESTful API using Node.js and Express.",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "January 12, 2025",
      readTime: "10 min read",
      category: "Backend",
      tags: ["Node.js", "Express", "API", "Backend"],
      slug: "building-a-restful-api-with-node-js-and-express",
      author: {
        name: "Nirbhay Singh",
        image: "/images/authors/your-avatar.jpg"
      }
    },
    {
      id: "state-management-in-react-with-context-api-and-usereducer",
      title: "State Management in React with Context API and useReducer",
      excerpt:
        "Explore state management solutions in React using the Context API and useReducer hook.",
      image:
        "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "December 30, 2024",
      readTime: "9 min read",
      category: "React",
      tags: ["React", "Context API", "State Management"],
      slug: "state-management-in-react-with-context-api-and-usereducer",
      author: {
        name: "Nirbhay Singh",
        image: "/images/authors/your-avatar.jpg"
      }
    },
  ];

export async function getAllPosts(): Promise<BlogPost[]> {
  // Get MDX posts
  const mdxPosts = getMDXPosts();
  
  // Get external posts
  const externalPosts = getExternalPosts();
  
  // Combine with hardcoded posts and sort by date
  return [...mdxPosts, ...externalPosts, ...hardcodedPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

function getMDXPosts(): BlogPost[] {
  try {
    if (!fs.existsSync(BLOG_DIR)) {
      return [];
    }

    const files = fs.readdirSync(BLOG_DIR);
    
    return files
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => {
        const filePath = path.join(BLOG_DIR, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContent);
        
        return {
          ...data,
          slug: file.replace('.mdx', ''),
          id: file.replace('.mdx', ''),
          isExternal: false
        } as BlogPost;
      });
  } catch (error) {
    console.error('Error reading MDX posts:', error);
    return [];
  }
}

function getExternalPosts(): BlogPost[] {
  try {
    if (!fs.existsSync(EXTERNAL_POSTS_FILE)) {
      return [];
    }

    const content = fs.readFileSync(EXTERNAL_POSTS_FILE, 'utf8');
    // Parse as array directly since we updated the JSON structure
    return JSON.parse(content);
  } catch (error) {
    console.error('Error parsing external posts:', error);
    return [];
  }
} 