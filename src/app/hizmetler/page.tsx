import type { Metadata } from "next";
import HizmetlerIcerik from "./HizmetlerIcerik";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Web sitesi, marka kimliği, SEO, sosyal medya yönetimi, Google reklamları, e-ticaret, fotoğraf & video ve mobil uygulama — hepsi tek çatı altında.",
  alternates: { canonical: "/hizmetler" },
};

export default function Page() {
  return <HizmetlerIcerik />;
}
