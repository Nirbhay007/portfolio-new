"use client";

import { BlogPost } from "@/types/blog";
import Image from "next/image";
import { ReactNode } from "react";

interface BlogLayoutProps {
  post: BlogPost;
  children: ReactNode;
}

export function BlogLayout({ post, children }: BlogLayoutProps) {
  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1 className="blog-title">{post.title}</h1>
        <p className="blog-subtitle">{post.excerpt}</p>
      </div>

      <Image 
        src={post.image}
        alt={post.title}
        width={1200}
        height={675}
        className="blog-hero-image"
      />

      <div className="blog-content">
        {children}

        <div className="author-card">
          <Image 
            src={post.author.image} 
            alt={post.author.name}
            width={64}
            height={64}
            className="author-image" 
          />
          <div className="author-info">
            <h3>{post.author.name}</h3>
            <p>{post.category} • {post.readTime}</p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Space-themed styling for blog posts */
        .blog-container {
          background: rgba(13, 18, 30, 0.8);
          backdrop-filter: blur(1px);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0;
          margin: 2rem 0;
          overflow: hidden;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
        }

        .blog-header {
          padding: 2.5rem 2rem;
          text-align: center;
          background: linear-gradient(to bottom, rgba(20, 30, 60, 0.8), rgba(13, 18, 30, 0.6));
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .blog-title {
          font-size: 2.5rem !important;
          font-weight: 800 !important;
          background: linear-gradient(to right, #c2e9fb, #a1c4fd);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent !important;
          margin-bottom: 1rem !important;
          line-height: 1.2 !important;
        }

        .blog-subtitle {
          font-size: 1.25rem !important;
          color: rgba(255, 255, 255, 0.8) !important;
          max-width: 800px;
          margin: 0 auto !important;
        }

        .blog-hero-image {
          width: 100%;
          height: auto;
          object-fit: cover;
          aspect-ratio: 16/9;
        }

        .blog-content {
          padding: 2.5rem 2rem;
          color: rgba(255, 255, 255, 0.85);
        }

        .blog-content h2 {
          font-size: 1.875rem !important;
          font-weight: 700 !important;
          margin-top: 2.5rem !important;
          margin-bottom: 1.5rem !important;
          background: linear-gradient(to right, #a1c4fd, #c2e9fb);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent !important;
          display: inline-block;
        }

        .blog-content h3 {
          font-size: 1.5rem !important;
          font-weight: 600 !important;
          margin-top: 2rem !important;
          margin-bottom: 1rem !important;
          color: rgba(255, 255, 255, 0.95) !important;
        }

        .blog-content p {
          font-size: 1.125rem !important;
          line-height: 1.8 !important;
          margin-bottom: 1.5rem !important;
        }

        .blog-content code {
          background: rgba(255, 255, 255, 0.1);
          color: #a1c4fd;
          padding: 0.2em 0.4em;
          border-radius: 4px;
          font-family: monospace;
          font-size: 0.9em;
        }

        .feature-card {
          background: linear-gradient(to right, rgba(30, 40, 70, 0.6), rgba(40, 50, 80, 0.6));
          border-radius: 12px;
          padding: 1.5rem;
          margin: 2rem 0;
          border-left: 4px solid #a1c4fd;
        }

        .feature-card h3 {
          color: #a1c4fd !important;
          margin-top: 0 !important;
        }

        .grid-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }

        .grid-card {
          background: rgba(20, 30, 60, 0.6);
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .grid-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.3);
        }

        .grid-card h3 {
          font-size: 1.25rem !important;
          margin-top: 0 !important;
          color: #c2e9fb !important;
          margin-bottom: 0.75rem !important;
        }

        .grid-card p {
          font-size: 1rem !important;
          margin-bottom: 0 !important;
        }

        .tip-card {
          background: linear-gradient(to right, rgba(50, 40, 70, 0.6), rgba(70, 40, 90, 0.6));
          border-radius: 12px;
          padding: 1.5rem;
          margin: 2rem 0;
          border-left: 4px solid #c2e9fb;
        }

        .tip-card h3 {
          color: #c2e9fb !important;
          margin-top: 0 !important;
        }

        .table-container {
          margin: 2rem 0;
          overflow-x: auto;
        }

        .table-container table {
          width: 100%;
          border-collapse: collapse;
          background: rgba(20, 30, 60, 0.5);
          backdrop-filter: blur(5px);
          border-radius: 12px;
          overflow: hidden;
        }

        .table-container th {
          background: rgba(30, 40, 70, 0.7);
          color: #c2e9fb;
          font-weight: 600;
          text-align: left;
          padding: 1rem;
        }

        .table-container td {
          padding: 0.75rem 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .table-container tr:hover {
          background: rgba(30, 40, 70, 0.5);
        }

        .section-card {
          background: rgba(20, 30, 60, 0.5);
          border-radius: 12px;
          padding: 1.5rem;
          margin: 2rem 0;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .section-card h3 {
          margin-top: 0 !important;
          color: #a1c4fd !important;
        }

        .author-card {
          display: flex;
          align-items: center;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .author-image {
          width: 64px !important;
          height: 64px !important;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .author-info {
          margin-left: 1rem;
        }

        .author-info h3 {
          margin: 0 !important;
          font-size: 1.25rem !important;
          color: rgba(255, 255, 255, 0.95) !important;
        }

        .author-info p {
          margin: 0.25rem 0 0 0 !important;
          font-size: 0.9rem !important;
          color: rgba(255, 255, 255, 0.7) !important;
        }

        /* Pre/code block styling */
        pre {
          background: rgba(10, 15, 30, 0.7) !important;
          border-radius: 8px !important;
          padding: 1.5rem !important;
          margin: 1.5rem 0 !important;
          overflow-x: auto !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
        }

        pre code {
          background: transparent !important;
          color: rgba(255, 255, 255, 0.85) !important;
          padding: 0 !important;
          font-family: monospace !important;
          font-size: 0.9rem !important;
          line-height: 1.7 !important;
        }

        /* Syntax highlighting */
        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: #6a7a9d;
        }

        .token.punctuation {
          color: #a1c4fd;
        }

        .token.property,
        .token.tag,
        .token.constant,
        .token.symbol,
        .token.deleted {
          color: #c2e9fb;
        }

        .token.selector,
        .token.attr-name,
        .token.string,
        .token.char,
        .token.builtin,
        .token.inserted {
          color: #c5e4ff;
        }

        .token.operator,
        .token.entity,
        .token.url,
        .language-css .token.string,
        .style .token.string {
          color: #dfe9ff;
        }

        .token.atrule,
        .token.attr-value,
        .token.keyword {
          color: #a1c4fd;
        }

        .token.function,
        .token.class-name {
          color: #c2e9fb;
        }

        .token.regex,
        .token.important,
        .token.variable {
          color: #dfe9ff;
        }
      `}</style>
    </div>
  );
} 