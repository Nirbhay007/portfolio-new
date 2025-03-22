import { BlogLayout } from "@/components/blog/blog-layout";
import FeatureCard from '@/components/blog/feature-card';
import GridCard from '@/components/blog/grid-card';
import GridCards from '@/components/blog/grid-cards';
import TipCard from '@/components/blog/tip-card';
import StarField from "@/components/star-field";
import { getAllPosts, getPostBySlug } from "@/lib/blog-actions";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import rehypePrism from "rehype-prism-plus";
import remarkGfm from "remark-gfm";

// Custom components for MDX
const components = {
  FeatureCard,
  TipCard,
  GridCards,
  GridCard
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <>
      <StarField />
      <div className="container mx-auto px-4 pt-32 pb-20">
        <BlogLayout post={post}>
          <MDXRemote 
            source={post.content || ''} 
            components={components}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypePrism],
              },
            }}
          />
        </BlogLayout>
      </div>
    </>
  );
} 