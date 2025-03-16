import Image from 'next/image';
import Link from 'next/link';

export function useMDXComponents(components) {
  return {
    // Override default components with custom ones
    h1: ({ children, ...props }) => (
      <h1 className="text-3xl font-bold mt-8 mb-4 gradient-text" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2 className="text-2xl font-bold mt-6 mb-3" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 className="text-xl font-bold mt-5 mb-2" {...props}>
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p className="my-4 leading-relaxed" {...props}>
        {children}
      </p>
    ),
    a: ({ children, ...props }) => (
      <Link
        {...props}
        className="text-primary hover:underline"
      >
        {children}
      </Link>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        width={800}
        height={450}
        className="rounded-lg my-8"
        alt={props.alt || ''}
        {...props}
      />
    ),
    code: ({ children, className, ...props }) => (
      <code
        className={`${className || ''} bg-secondary/50 px-1 py-0.5 rounded text-sm`}
        {...props}
      >
        {children}
      </code>
    ),
    pre: ({ children, ...props }) => (
      <pre
        className="bg-secondary/20 p-4 rounded-lg overflow-auto my-6"
        {...props}
      >
        {children}
      </pre>
    ),
    ul: ({ children, ...props }) => (
      <ul className="list-disc pl-6 my-4 space-y-2" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className="list-decimal pl-6 my-4 space-y-2" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="leading-relaxed" {...props}>
        {children}
      </li>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="border-l-4 border-primary pl-4 italic my-6"
        {...props}
      >
        {children}
      </blockquote>
    ),
    // Merge with any components passed from specific pages
    ...components,
  };
} 