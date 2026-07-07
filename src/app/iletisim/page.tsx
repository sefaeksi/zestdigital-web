"use client";

import ContactForm from "@/components/sections/ContactForm";
import { SITE } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export default function IletisimPage() {
  const { t } = useLanguage();
  const c = t.iletisim;

  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh", paddingTop: "80px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem 3rem" }}>

        <span style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C8F135", display: "inline-block", border: "1px solid #C8F135", padding: "0.3rem 0.8rem", marginBottom: "2rem" }}>
          {c.badge}
        </span>

        <h1 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1, letterSpacing: "-0.03em", color: "white", marginBottom: "2rem" }}>
          {c.title}<br />
          <span style={{ color: "#C8F135" }}>{c.titleLime}</span>
        </h1>

        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", marginBottom: "4rem" }}>
          <a href={`mailto:${SITE.email}`} style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>
            📧 {SITE.email}
          </a>
          <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>
            📸 Instagram
          </a>
          <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.45)" }}>📍 İstanbul, Türkiye</span>
        </div>
      </div>

      <ContactForm />
    </div>
  );
}
