"use client";

import Link from "next/link";
import CTABand from "@/components/sections/CTABand";
import { useLanguage } from "@/context/LanguageContext";

export default function HizmetlerIcerik() {
  const { t } = useLanguage();
  const h = t.hizmetler;

  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh", paddingTop: "80px" }}>

      {/* Hero */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem 4rem" }}>
        <span style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C8F135", display: "inline-block", border: "1px solid #C8F135", padding: "0.3rem 0.8rem", marginBottom: "2rem" }}>
          {h.badge}
        </span>
        <h1 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1, letterSpacing: "-0.03em", color: "white", marginBottom: "1.5rem" }}>
          {h.title}<br /><span style={{ color: "#C8F135" }}>{h.titleLime}</span>
        </h1>
        <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "1.1rem", color: "rgba(255,255,255,0.5)", maxWidth: "520px", lineHeight: 1.7 }}>
          {h.desc}
        </p>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />

      {/* Responsive stil */}
      <style>{`
        @media (max-width: 768px) {
          .hizmet-satir { grid-template-columns: 1fr !important; gap: 1rem !important; }
          .hizmet-ici { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>

      {/* Hizmet listesi */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        {h.items.map((item) => (
          <div
            key={item.no}
            className="hizmet-satir"
            style={{ display: "grid", gridTemplateColumns: "4rem 1fr", gap: "3rem", padding: "4rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            <span style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.2)", paddingTop: "0.5rem", letterSpacing: "0.1em" }}>
              {item.no}
            </span>

            <div className="hizmet-ici" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
              <div>
                <h2 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "white", lineHeight: 1.1, marginBottom: "1rem", letterSpacing: "-0.02em" }}>
                  {item.title}
                </h2>
                <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "1rem", color: "#C8F135", lineHeight: 1.6, marginBottom: "1rem" }}>
                  {item.summary}
                </p>
                <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  {item.detay}
                </p>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", padding: "0.75rem 1rem", background: "rgba(200,241,53,0.06)", borderLeft: "2px solid #C8F135" }}>
                  <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.5 }}>
                    <span style={{ color: "#C8F135", fontWeight: 600 }}>{h.forWho}:</span> {item.kimIcin}
                  </span>
                </div>
              </div>

              <div>
                <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "1.25rem" }}>
                  {h.included}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {item.maddeler.map((madde) => (
                    <li key={madde} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                      <span style={{ color: "#C8F135", fontSize: "0.7rem", marginTop: "0.2rem", flexShrink: 0 }}>✦</span>
                      <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>{madde}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CTABand />
    </div>
  );
}
