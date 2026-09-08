import type { Metadata } from "next";
import HakkimizdaIcerik from "./HakkimizdaIcerik";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Zest Digital, esnaf ve KOBİ'lerin dijitalde büyümesi için kurulmuş bir dijital ajans. Sadelik, güven ve büyüme odağıyla çalışıyoruz.",
  alternates: { canonical: "/hakkimizda" },
};

export default function Page() {
  return <HakkimizdaIcerik />;
}
