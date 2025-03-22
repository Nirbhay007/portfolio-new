export default function TipCard({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="tip-card">
      <h3>{title}</h3>
      {children}
    </div>
  );
} 