"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-12"
      style={{
        height: "80px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(10,10,10,0.92)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white" style={{ fontFamily: "var(--font-syne), sans-serif", letterSpacing: "-0.02em" }}>
        <img src="/logo.png" alt="Zest Digital" style={{ width: 36, height: 36, objectFit: "contain", mixBlendMode: "screen" }} />
        ZEST <span style={{ color: "#C8F135" }}>digital</span>
      </Link>

      {/* Desktop nav */}
      <nav style={{ alignItems: "center", gap: "2.5rem" }} className="hidden md:flex">
        {t.nav.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-xs font-body tracking-widest uppercase transition-colors hover:text-white"
            style={{ color: "#fff", letterSpacing: "0.08em" }}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Sağ taraf: TR/EN + CTA */}
      <div className="hidden md:flex items-center gap-4">
        {/* Dil toggle */}
        <div className="flex items-center gap-1" style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em" }}>
          <button
            onClick={() => setLang("tr")}
            style={{ color: lang === "tr" ? "#C8F135" : "rgba(255,255,255,0.35)", background: "none", border: "none", cursor: "pointer", padding: "0.25rem 0.4rem", transition: "color 0.2s" }}
          >
            TR
          </button>
          <span style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
          <button
            onClick={() => setLang("en")}
            style={{ color: lang === "en" ? "#C8F135" : "rgba(255,255,255,0.35)", background: "none", border: "none", cursor: "pointer", padding: "0.25rem 0.4rem", transition: "color 0.2s" }}
          >
            EN
          </button>
        </div>

        {/* CTA */}
        <Link
          href="/iletisim"
          className="font-body text-xs font-medium tracking-widest uppercase px-6 py-3 transition-opacity hover:opacity-85"
          style={{ background: "#C8F135", color: "#0A0A0A", letterSpacing: "0.06em" }}
        >
          {t.nav.cta}
        </Link>
      </div>

      {/* Mobile burger */}
      <button
        className="md:hidden flex flex-col"
        onClick={() => setOpen(!open)}
        style={{ background: "none", border: "none", cursor: "pointer", padding: "0.5rem", gap: "5px" }}
        aria-label="Menü"
      >
        <span style={{ display: "block", width: "22px", height: "1px", background: "white", transition: "all 0.2s", transform: open ? "rotate(45deg) translate(4px,4px)" : "none" }} />
        <span style={{ display: "block", width: "16px", height: "1px", background: "white", opacity: open ? 0 : 1, transition: "all 0.2s" }} />
        <span style={{ display: "block", width: "22px", height: "1px", background: "white", transition: "all 0.2s", transform: open ? "rotate(-45deg) translate(4px,-4px)" : "none" }} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col px-8 py-6 gap-6"
          style={{ background: "#1A1A1A", borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          {t.nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-body tracking-widest uppercase text-white py-2 border-b"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobil TR/EN */}
          <div className="flex items-center gap-3" style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em" }}>
            <button onClick={() => { setLang("tr"); setOpen(false); }} style={{ color: lang === "tr" ? "#C8F135" : "rgba(255,255,255,0.4)", background: "none", border: "none", cursor: "pointer", padding: 0 }}>TR</button>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
            <button onClick={() => { setLang("en"); setOpen(false); }} style={{ color: lang === "en" ? "#C8F135" : "rgba(255,255,255,0.4)", background: "none", border: "none", cursor: "pointer", padding: 0 }}>EN</button>
          </div>

          <Link
            href="/iletisim"
            className="inline-block font-body text-xs font-medium tracking-widest uppercase px-6 py-3 self-start"
            style={{ background: "#C8F135", color: "#0A0A0A" }}
            onClick={() => setOpen(false)}
          >
            {t.nav.cta}
          </Link>
        </div>
      )}
    </header>
  );
}
