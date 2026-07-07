"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 px-5 md:px-12">

      {/* Arka plan büyük yazı */}
      <div
        aria-hidden
        className="absolute top-1/2 -translate-y-1/2 left-0 font-bold pointer-events-none select-none whitespace-nowrap"
        style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "clamp(10rem, 22vw, 22rem)", lineHeight: 0.85, color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.04)" }}
      >
        ZEST
      </div>

      {/* Tag */}
      <div className="flex items-center gap-3 mb-8 relative z-10">
        <span className="block w-8 h-px bg-lime" />
        <span className="text-lime text-xs font-body font-medium tracking-widest uppercase">{h.tag}</span>
      </div>

      {/* Başlık */}
      <h1 className="font-bold text-white relative z-10 max-w-5xl" style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "clamp(3.5rem, 9vw, 9rem)", lineHeight: 0.92, letterSpacing: "-0.03em" }}>
        {h.title} <span style={{ color: "#C8F135" }}>{h.titleLime}</span> {h.titleEnd}
      </h1>

      {/* Alt kısım */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mt-12 md:mt-16 gap-8 relative z-10">
        <p className="text-base md:text-lg font-body font-light max-w-md leading-relaxed" style={{ color: "rgba(255,255,255,0.6)", whiteSpace: "pre-line" }}>
          {h.desc}
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 flex-shrink-0">
          <Link href="/iletisim" className="inline-block font-body text-sm font-medium tracking-widest uppercase px-8 py-4 transition-all hover:-translate-y-0.5" style={{ background: "#C8F135", color: "#0A0A0A" }}>
            {h.ctaPrimary}
          </Link>
          <Link href="/paketler" className="inline-block font-body text-sm font-medium tracking-widest uppercase px-8 py-4 border transition-colors hover:border-white" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}>
            {h.ctaSecondary}
          </Link>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 right-5 md:right-12 flex flex-col items-center gap-2 text-xs tracking-widest uppercase" style={{ opacity: 0.3 }}>
        <span>{h.scroll}</span>
        <style>{`@keyframes scrollLine{0%{transform:scaleY(0);transform-origin:top}50%{transform:scaleY(1);transform-origin:top}51%{transform-origin:bottom}100%{transform:scaleY(0);transform-origin:bottom}}.scroll-line{animation:scrollLine 1.5s ease-in-out infinite}`}</style>
        <span className="scroll-line block w-px h-16 bg-white" />
      </div>
    </section>
  );
}
