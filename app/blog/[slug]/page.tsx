import StarField from '@/components/star-field';
import { getAllPosts } from '@/lib/blog-actions';
import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import path from 'path';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts
    .filter(post => !post.isExternal)
    .map((post) => ({
      slug: post.slug,
    }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const posts = await getAllPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  if (post.isExternal && post.externalUrl) {
    redirect(post.externalUrl);
  }

  let content = '';
  
  const mdxFilePath = path.join(process.cwd(), 'content/blog', `${slug}.mdx`);
  
  try {
    if (fs.existsSync(mdxFilePath)) {
      // This is an MDX post
      const fileContent = fs.readFileSync(mdxFilePath, 'utf8');
      const { content: mdxContent } = matter(fileContent);
      content = mdxContent;
    } else {
      // This is a hardcoded post, create some dummy content
      content = `
# ${post.title}

${post.excerpt}

## Introduction

This is a sample article about ${post.title}. The full content would be here in a real blog post.

## Main Points

- Point 1 about ${post.category}
- Point 2 about ${post.tags.join(', ')}
- Point 3 with more details

## Conclusion

Thank you for reading this article about ${post.title}. Stay tuned for more content!
      `;
    }
  } catch (error) {
    console.error("Error reading MDX file:", error);
    content = `# ${post.title}\n\n${post.excerpt}\n\nContent unavailable.`;
  }

  // Custom components for MDX
  const components = {
    img: (props: any) => (
      <Image
        alt={props.alt || ''}
        className="rounded-lg my-8"
        width={800}
        height={450}
        style={{ width: '100%', height: 'auto' }}
        {...props}
      />
    ),
    a: (props: any) => (
      <Link href={props.href} className="text-primary hover:underline" {...props} />
    ),
  };

  return (
    <>
      <StarField />
      <div className="container mx-auto px-4 pt-32 pb-20">
        <article className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 gradient-text">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-foreground/70 mb-6">
              <div className="flex items-center gap-2">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span>{post.author.name}</span>
              </div>
              <div>{post.date}</div>
              <div>{post.readTime}</div>
            </div>
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={630}
              className="rounded-lg w-full h-auto"
            />
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <MDXRemote source={content} components={components} />
          </div>
        </article>
      </div>
    </>
  );
} 