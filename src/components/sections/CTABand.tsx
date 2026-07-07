"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function CTABand() {
  const { t } = useLanguage();
  const c = t.cta;

  return (
    <section
      className="px-5 md:px-12 py-20 md:py-32 flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12"
      style={{ background: "#C8F135" }}
    >
      <h2 className="font-display font-bold" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "#0A0A0A", lineHeight: 1, letterSpacing: "-0.03em" }}>
        {c.title}
      </h2>
      <div className="flex-shrink-0 flex flex-col items-start md:items-end gap-6">
        <p className="text-sm md:text-right max-w-xs" style={{ color: "rgba(0,0,0,0.6)" }}>{c.desc}</p>
        <Link href="/iletisim" className="inline-block font-body text-sm font-medium tracking-widest uppercase px-8 py-4 transition-opacity hover:opacity-80" style={{ background: "#0A0A0A", color: "#fff" }}>
          {c.btn}
        </Link>
      </div>
    </section>
  );
}
