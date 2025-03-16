import StarField from "@/components/star-field";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StarField />
      {children}
    </>
  );
} 