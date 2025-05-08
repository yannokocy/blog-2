import { WebsiteHeader } from "@/component/layout/WebsiteHeader";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <WebsiteHeader />
      {children}
      <footer> kocy telecom</footer>
    </main>
  );
}
