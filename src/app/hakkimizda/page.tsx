"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function HakkimizdaPage() {
  const { t } = useLanguage();
  const h = t.hakkimizda;

  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh", paddingTop: "80px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem 8rem" }}>

        <span style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C8F135", display: "inline-block", border: "1px solid #C8F135", padding: "0.3rem 0.8rem", marginBottom: "2rem" }}>
          {h.badge}
        </span>

        <h1 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1, letterSpacing: "-0.03em", color: "white", marginBottom: "4rem" }}>
          {h.title}<br />
          <span style={{ color: "#C8F135" }}>{h.titleLime}</span>
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", maxWidth: "900px", marginBottom: "5rem" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "#C8F135", marginBottom: "1rem" }}>{h.who}</h2>
            <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.75 }}>{h.whoDesc}</p>
          </div>
          <div>
            <h2 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "#C8F135", marginBottom: "1rem" }}>{h.why}</h2>
            <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.75 }}>{h.whyDesc}</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2rem", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "3rem", maxWidth: "600px", marginBottom: "3rem" }}>
          {h.values.map((item) => (
            <div key={item.value}>
              <p style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "#C8F135", marginBottom: "0.4rem" }}>{item.value}</p>
              <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <Link
          href="/iletisim"
          style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", padding: "1rem 2.5rem", background: "#C8F135", color: "#0A0A0A", textDecoration: "none", display: "inline-block" }}
        >
          {h.cta} →
        </Link>
      </div>
    </div>
  );
}
