export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  slug: string;
  content: string;
  author: {
    name: string;
    image: string;
  };
  isExternal?: boolean;
  externalUrl?: string;
} 