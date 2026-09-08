import type { Metadata } from "next";
import PaketlerIcerik from "./PaketlerIcerik";

export const metadata: Metadata = {
  title: "Paketler & Fiyatlar",
  description:
    "Esnaf ve KOBİ'ler için dijital hizmet paketleri. Bütçene uygun paketi seç, ücretsiz görüşmede projene özel net fiyatı al.",
  alternates: { canonical: "/paketler" },
};

export default function Page() {
  return <PaketlerIcerik />;
}
