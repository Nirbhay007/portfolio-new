import ComingSoonPage from "@/components/coming-soon";


// Static params for build time
export function generateStaticParams() {
  return [
    { slug: ['web-development'] },
    { slug: ['frontend-development'] },
    { slug: ['backend-development'] },
    { slug: ['ui-ux-design'] },
    { slug: ['consulting'] }
  ];
}

export default function ServicePage() {
  return <ComingSoonPage />;
} 