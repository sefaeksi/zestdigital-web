"use client";

import Link from "next/link";
import { PACKAGES } from "@/lib/constants";

export default function Packages() {
  return (
    <section className="px-5 md:px-12 py-20 md:py-32 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-4">
        <div>
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#C8F135" }}>Paketler</p>
          <h2
            className="font-display font-bold text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 1 }}
          >
            İhtiyacına uygun paketi seç.
          </h2>
        </div>
        <Link
          href="/paketler"
          className="text-xs tracking-widest uppercase flex items-center gap-2 transition-colors flex-shrink-0 group"
          style={{ color: "#888" }}
        >
          Tüm Paketler
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>

      <p className="text-sm mb-16 max-w-md" style={{ color: "rgba(255,255,255,0.45)" }}>
        Fiyatlar alt sınır olup projeye göre değişiklik gösterebilir.
      </p>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        style={{
          gap: "1px",
          background: "rgba(255,255,255,0.06)",
        }}
      >
        {PACKAGES.map((pkg) => {
          const featured = pkg.highlight;
          return (
            <div
              key={pkg.id}
              className="p-8 transition-colors"
              style={{ background: featured ? "#C8F135" : "#0A0A0A" }}
              onMouseEnter={(e) => {
                if (!featured) e.currentTarget.style.background = "#1A1A1A";
                else e.currentTarget.style.background = "#b8e020";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = featured ? "#C8F135" : "#0A0A0A";
              }}
            >
              <p
                className="font-display font-bold text-xs tracking-widest uppercase mb-4"
                style={{ color: featured ? "rgba(0,0,0,0.5)" : "#888" }}
              >
                {pkg.name}
              </p>
              <p
                className="font-display font-bold mb-1"
                style={{
                  fontSize: "1.8rem",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  color: featured ? "#0A0A0A" : "#fff",
                }}
              >
                {pkg.basePrice.toLocaleString("tr-TR")} TL
              </p>
              <p
                className="text-xs mb-6"
                style={{ color: featured ? "rgba(0,0,0,0.5)" : "#888" }}
              >
                + {pkg.monthlyMaintenance.toLocaleString("tr-TR")} TL/ay bakım
              </p>
              <h3
                className="font-display font-bold text-lg"
                style={{ color: featured ? "#0A0A0A" : "#fff" }}
              >
                {pkg.tagline}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
