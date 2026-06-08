import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Cursor from "@/components/ui/Cursor";

const syne = Syne({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-syne" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  title: "Zest Digital — İşine Zest Kat",
  description: "Esnaf ve KOBİ'ler için web sitesi, marka kimliği, SEO ve sosyal medya hizmetleri.",
  keywords: "web sitesi, dijital ajans, marka kimliği, SEO, İstanbul, KOBİ, esnaf",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`h-full ${syne.variable} ${dmSans.variable}`}>
      <body className="min-h-full flex flex-col" style={{ background: "#0A0A0A", color: "#fff", fontFamily: "var(--font-dm-sans), sans-serif" }}>
        <Cursor />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
