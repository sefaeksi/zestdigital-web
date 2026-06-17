"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
      <nav className="hidden md:flex items-center gap-10">
        {NAV_LINKS.map((link) => (
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

      {/* CTA */}
      <Link
        href="/iletisim"
        className="hidden md:inline-block font-body text-xs font-medium tracking-widest uppercase px-6 py-3 transition-opacity hover:opacity-85"
        style={{ background: "#C8F135", color: "#0A0A0A", letterSpacing: "0.06em" }}
      >
        Ücretsiz Görüşme
      </Link>

      {/* Mobile menu button */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setOpen(!open)}
        aria-label="Menü"
      >
        <span className="block w-5 h-px bg-white" />
        <span className="block w-5 h-px bg-white" />
        <span className="block w-5 h-px bg-white" />
      </button>

      {/* Mobile menu */}
      {open && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col px-8 py-6 gap-6"
          style={{ background: "#1A1A1A", borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          {NAV_LINKS.map((link) => (
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
          <Link
            href="/iletisim"
            className="inline-block font-body text-xs font-medium tracking-widest uppercase px-6 py-3 mt-2 self-start"
            style={{ background: "#C8F135", color: "#0A0A0A" }}
            onClick={() => setOpen(false)}
          >
            Ücretsiz Görüşme
          </Link>
        </div>
      )}
    </header>
  );
}
