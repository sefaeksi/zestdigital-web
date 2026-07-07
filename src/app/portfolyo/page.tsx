"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const PROJECTS = [
  {
    id: "easy-run-club",
    title: "Easy Run Club",
    category: "Web Sitesi & Üyelik Sistemi",
    description: "İstanbul koşu topluluğu için etkinlik yönetimi, üyelik sistemi ve Strava entegrasyonlu platform.",
    tags: ["Next.js", "Supabase", "Tailwind"],
    url: "https://easyruntr.com",
  },
];

export default function PortfoyPage() {
  const { t } = useLanguage();
  const po = t.portfolyo;

  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh", paddingTop: "80px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem 8rem" }}>

        <span style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C8F135", display: "inline-block", border: "1px solid #C8F135", padding: "0.3rem 0.8rem", marginBottom: "2rem" }}>
          {po.badge}
        </span>

        <h1 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1, letterSpacing: "-0.03em", color: "white", marginBottom: "1rem" }}>
          {po.title}<br />
          <span style={{ color: "#C8F135" }}>{po.titleLime}</span>
        </h1>

        <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "1.1rem", color: "rgba(255,255,255,0.45)", marginBottom: "4rem", maxWidth: "480px", lineHeight: 1.7 }}>
          {po.desc}
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "rgba(255,255,255,0.08)" }}>
          {PROJECTS.map((project) => (
            <div key={project.id} style={{ background: "#111", padding: "2rem", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "12rem", background: "#1A1A1A", marginBottom: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.2)" }}>{po.comingSoon}</span>
              </div>
              <span style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C8F135", marginBottom: "0.75rem" }}>{project.category}</span>
              <h3 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 800, fontSize: "1.2rem", color: "white", marginBottom: "0.75rem" }}>{project.title}</h3>
              <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, flex: 1 }}>{project.description}</p>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "1rem", marginBottom: "1rem" }}>
                {project.tags.map((tag) => (
                  <span key={tag} style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", border: "1px solid rgba(255,255,255,0.1)", padding: "0.2rem 0.6rem" }}>{tag}</span>
                ))}
              </div>
              {project.url && (
                <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.8rem", color: "#C8F135", textDecoration: "none" }}>
                  Siteyi Gör →
                </a>
              )}
            </div>
          ))}

          {/* Placeholder */}
          <div style={{ background: "#111", padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "20rem", border: "1px dashed rgba(255,255,255,0.1)" }}>
            <p style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "rgba(255,255,255,0.3)", marginBottom: "0.5rem" }}>{po.placeholder}</p>
            <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.2)", textAlign: "center", marginBottom: "1.5rem", maxWidth: "200px" }}>{po.placeholderDesc}</p>
            <Link
              href="/iletisim"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.7rem 1.5rem", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
            >
              {po.contact}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
