export function BlogSearchSkeleton() {
  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <div className="h-10 bg-muted animate-pulse rounded-md" />
        </div>
        <div className="flex flex-wrap gap-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-10 w-24 bg-muted animate-pulse rounded-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
} 