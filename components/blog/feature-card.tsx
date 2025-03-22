export default function FeatureCard({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="feature-card">
      <h3>{title}</h3>
      {children}
    </div>
  );
} 