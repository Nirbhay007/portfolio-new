export default function GridCard({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="grid-card">
      <h3>{title}</h3>
      {children}
    </div>
  );
} 