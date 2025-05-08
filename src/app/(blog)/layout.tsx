import { BlogHeader } from "@/component/layout/BlogHeader";
import { BlogMenu } from "@/component/layout/BlogMenu";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex">
      <aside className="w-1/6">
        <BlogMenu />
      </aside>
      <aside className="w-5/6">
        <header className="">
          <BlogHeader />
        </header>
        <section className="px-6">{children}</section>
      </aside>
    </main>
  );
}
