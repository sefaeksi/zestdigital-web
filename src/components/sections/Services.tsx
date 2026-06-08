"use client";

import Link from "next/link";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section className="px-12 py-32 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="flex items-end justify-between mb-16">
        <div>
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#C8F135" }}>Hizmetler</p>
          <h2
            className="font-display font-bold text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 1 }}
          >
            Dijitalde ne lazımsa,<br />
            <span style={{ color: "#C8F135" }}>biz hallederiz.</span>
          </h2>
        </div>
        <Link
          href="/hizmetler"
          className="text-xs tracking-widest uppercase flex items-center gap-2 transition-colors flex-shrink-0 group"
          style={{ color: "#888" }}
        >
          Tüm Hizmetleri Gör
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>

      <div
        className="grid"
        style={{
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1px",
          background: "rgba(255,255,255,0.06)",
        }}
      >
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="relative p-10 transition-colors group overflow-hidden"
            style={{ background: "#0A0A0A" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#1A1A1A")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#0A0A0A")}
          >
            {/* Lime alt çizgi hover efekti */}
            <div
              className="absolute bottom-0 left-0 w-full h-0.5 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"
              style={{ background: "#C8F135" }}
            />
            <span className="text-3xl mb-6 block">{service.icon}</span>
            <h3 className="font-display font-bold text-lg text-white mb-4" style={{ letterSpacing: "-0.01em" }}>
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
