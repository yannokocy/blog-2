import { BlogHeader } from "@/component/layout/BlogHeader";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <BlogHeader />
      {children}
    </main>
  );
}
