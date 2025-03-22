"use server";

import { BlogPost } from "@/types/blog";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const EXTERNAL_POSTS_FILE = path.join(
  process.cwd(),
  "content/external-posts.json"
);

export async function getAllPosts(): Promise<BlogPost[]> {
  // Get MDX posts
  const mdxPosts = getMDXPosts();

  // Get external posts
  const externalPosts = getExternalPosts();

  return [...mdxPosts, ...externalPosts].sort(
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
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => {
        const filePath = path.join(BLOG_DIR, file);
        const fileContent = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContent);

        return {
          ...data,
          slug: file.replace(".mdx", ""),
          id: file.replace(".mdx", ""),
          isExternal: false,
        } as BlogPost;
      });
  } catch (error) {
    console.error("Error reading MDX posts:", error);
    return [];
  }
}

function getExternalPosts(): BlogPost[] {
  try {
    if (!fs.existsSync(EXTERNAL_POSTS_FILE)) {
      return [];
    }

    const content = fs.readFileSync(EXTERNAL_POSTS_FILE, "utf8");
    // Parse as array directly since we updated the JSON structure
    return JSON.parse(content);
  } catch (error) {
    console.error("Error parsing external posts:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    // Check if MDX file exists
    const mdxFilePath = path.join(process.cwd(), 'content/blog', `${slug}.mdx`);
    
    if (!fs.existsSync(mdxFilePath)) {
      return null;
    }
    
    // Read and parse MDX file
    const fileContents = fs.readFileSync(mdxFilePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Create and return the blog post object
    return {
      id: data.id || slug,
      title: data.title,
      excerpt: data.excerpt,
      content: content,
      image: data.image,
      date: data.date,
      readTime: data.readTime,
      category: data.category,
      tags: data.tags || [],
      slug: slug,
      author: data.author,
    };
  } catch (error) {
    console.error(`Error getting post by slug "${slug}":`, error);
    return null;
  }
}
