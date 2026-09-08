import type { Metadata } from "next";
import PortfolyoIcerik from "./PortfolyoIcerik";

export const metadata: Metadata = {
  title: "Portfolyo",
  description:
    "Zest Digital'in tamamladığı projeler. Web sitesi, üyelik sistemi ve marka çalışmalarımıza göz at.",
  alternates: { canonical: "/portfolyo" },
};

export default function Page() {
  return <PortfolyoIcerik />;
}
