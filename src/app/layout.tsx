import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Cursor from "@/components/ui/Cursor";
import { LanguageProvider } from "@/context/LanguageContext";
import { SITE } from "@/lib/constants";

const syne = Syne({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-syne" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Zest Digital — İşine Zest Kat",
    template: "%s | Zest Digital",
  },
  description: SITE.description,
  // canonical bilerek burada tanimli degil: layout'taki deger tum alt sayfalara
  // miras kaldigi icin hepsi ana sayfayi isaret ediyordu. Her sayfa kendi
  // canonical'ini veriyor; metadataBase gorel yolu mutlak URL'e cevirir.
  openGraph: {
    title: "Zest Digital — İşine Zest Kat",
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zest Digital — İşine Zest Kat",
    description: SITE.description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`h-full ${syne.variable} ${dmSans.variable}`}>
      <body className="min-h-full flex flex-col" style={{ background: "#0A0A0A", color: "#fff", fontFamily: "var(--font-dm-sans), sans-serif" }}>
        <LanguageProvider>
          <Cursor />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
