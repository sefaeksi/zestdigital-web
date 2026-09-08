import type { Metadata } from "next";
import IletisimIcerik from "./IletisimIcerik";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Zest Digital ile iletişime geç. Ücretsiz görüşme için formu doldur ya da zestdigitaltr@gmail.com adresine yaz.",
  alternates: { canonical: "/iletisim" },
};

export default function Page() {
  return <IletisimIcerik />;
}
