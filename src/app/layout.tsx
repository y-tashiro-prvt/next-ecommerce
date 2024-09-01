// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navber from "@/components/Navber";
import Footer from "@/components/Footer";
import ClientOnlyProvider from "@/components/ClientOnlyProvider";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Muldoon Shop",
  description: "A complete e-commerce application with Next.js and Wix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <ClientOnlyProvider>
          <Navber />
          {children}
          <Footer />
        </ClientOnlyProvider>
      </body>
    </html>
  );
}
