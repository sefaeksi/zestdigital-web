"use client";

import Link from "next/link";
import ContactForm from "@/components/sections/ContactForm";
import { useLanguage } from "@/context/LanguageContext";

const PKT_KEYS = ["seed", "grow", "scale", "full"] as const;

export default function PaketlerPage() {
  const { t } = useLanguage();
  const p = t.paketler;

  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh", paddingTop: "80px" }}>

      {/* Hero */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem 4rem" }}>
        <span style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C8F135", display: "inline-block", border: "1px solid #C8F135", padding: "0.3rem 0.8rem", marginBottom: "2rem" }}>
          {p.badge}
        </span>
        <h1 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1, letterSpacing: "-0.03em", color: "white", marginBottom: "1.5rem" }}>
          {p.title}<br />
          <span style={{ color: "#C8F135" }}>{p.titleLime}</span>
        </h1>
        <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "1.05rem", color: "rgba(255,255,255,0.45)", maxWidth: "480px", lineHeight: 1.7 }}>
          {p.desc}
        </p>
      </div>

      {/* Kartlar */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem 5rem" }}>
        <style>{`
          .paket-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: rgba(255,255,255,0.08); }
          .tablo-wrap { overflow-x: auto; }
          .karsilastirma { width: 100%; border-collapse: collapse; min-width: 640px; }
          @media (max-width: 900px) { .paket-grid { grid-template-columns: repeat(2, 1fr); } }
          @media (max-width: 560px) { .paket-grid { grid-template-columns: 1fr; } }
        `}</style>

        <div className="paket-grid">
          {p.packages.map((pkg) => {
            const fg = pkg.highlight ? "#0A0A0A" : "#fff";
            const bg = pkg.highlight ? "#C8F135" : "#111";
            return (
              <div key={pkg.id} style={{ background: bg, padding: "2.5rem 2rem", display: "flex", flexDirection: "column" }}>
                <p style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 800, fontSize: "1.6rem", letterSpacing: "-0.02em", color: fg, marginBottom: "0.5rem" }}>
                  {pkg.name}
                </p>
                <p style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: "1rem", color: fg, marginBottom: "2rem", lineHeight: 1.2 }}>
                  {pkg.tagline}
                </p>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "2.5rem", flex: 1 }}>
                  {pkg.features.map((f) => (
                    <li key={f} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                      <span style={{ color: pkg.highlight ? "#0A0A0A" : "#C8F135", fontSize: "0.65rem", marginTop: "0.25rem", flexShrink: 0 }}>✦</span>
                      <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.82rem", color: pkg.highlight ? "rgba(0,0,0,0.75)" : "rgba(255,255,255,0.65)", lineHeight: 1.45 }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/iletisim"
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "0.85rem 1.5rem",
                    background: pkg.highlight ? "#0A0A0A" : "#C8F135",
                    color: pkg.highlight ? "#C8F135" : "#0A0A0A",
                    textDecoration: "none",
                    display: "block",
                    textAlign: "center",
                  }}
                >
                  {p.ctaBtn}
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Karşılaştırma Tablosu */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "5rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <p style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "white", marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>
            {p.tableTitle}
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.35)", marginBottom: "3rem" }}>
            {p.tableDesc}
          </p>

          <div className="tablo-wrap">
            <table className="karsilastirma">
              <thead>
                <tr>
                  <th style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", fontWeight: 500, textAlign: "left", padding: "0.75rem 1rem 0.75rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)", width: "36%" }}>
                    {p.serviceCol}
                  </th>
                  {p.packages.map((pkg) => (
                    <th
                      key={pkg.id}
                      style={{
                        fontFamily: "var(--font-syne), sans-serif",
                        fontSize: "0.75rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        fontWeight: 800,
                        textAlign: "center",
                        padding: "0.75rem 1rem",
                        borderBottom: "1px solid rgba(255,255,255,0.08)",
                        color: pkg.highlight ? "#C8F135" : "white",
                        borderLeft: pkg.highlight ? "1px solid rgba(200,241,53,0.3)" : "1px solid rgba(255,255,255,0.06)",
                        borderRight: pkg.highlight ? "1px solid rgba(200,241,53,0.3)" : "none",
                        background: pkg.highlight ? "rgba(200,241,53,0.04)" : "transparent",
                      }}
                    >
                      {pkg.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {p.table.map((grup) => (
                  <>
                    <tr key={`grup-${grup.kategori}`}>
                      <td
                        colSpan={5}
                        style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C8F135", fontWeight: 600, padding: "1.75rem 0 0.6rem" }}
                      >
                        {grup.kategori}
                      </td>
                    </tr>
                    {grup.satirlar.map((satir) => (
                      <tr key={satir.hizmet}>
                        <td style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.65)", padding: "0.75rem 1rem 0.75rem 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                          {satir.hizmet}
                        </td>
                        {PKT_KEYS.map((key) => {
                          const pkg = p.packages.find((pk) => pk.id === key)!;
                          const val = satir[key];
                          return (
                            <td
                              key={key}
                              style={{
                                textAlign: "center",
                                padding: "0.75rem 1rem",
                                borderBottom: "1px solid rgba(255,255,255,0.05)",
                                borderLeft: pkg.highlight ? "1px solid rgba(200,241,53,0.15)" : "1px solid rgba(255,255,255,0.04)",
                                borderRight: pkg.highlight ? "1px solid rgba(200,241,53,0.15)" : "none",
                                background: pkg.highlight ? "rgba(200,241,53,0.03)" : "transparent",
                                fontSize: val ? "1rem" : "0.9rem",
                                color: val ? "#C8F135" : "rgba(255,255,255,0.2)",
                              }}
                            >
                              {val ? "✓" : "—"}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <ContactForm />
    </div>
  );
}
