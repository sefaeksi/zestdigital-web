"use client";

import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

const EN_SERVICES = [
  { id: "marka", title: "Brand Identity", description: "We build a strong identity for your business with a logo, color palette, typography and brand guidelines.", icon: "✦" },
  { id: "web", title: "Web Design", description: "Fast, mobile-friendly and SEO-ready websites. You focus on your business, we handle the digital side.", icon: "◈" },
  { id: "seo", title: "SEO", description: "Rank higher on Google. We grow your organic traffic with local and general SEO strategies.", icon: "◎" },
  { id: "sosyal", title: "Social Media", description: "We stand out on social media with content production, management and ad campaigns.", icon: "◉" },
  { id: "mobil", title: "Mobile App", description: "Native and cross-platform apps for iOS and Android. Your customers are always with you.", icon: "◐" },
  { id: "fotograf", title: "Photo & Video", description: "Professional content production from product and space shoots to corporate portraits and promo videos.", icon: "◑" },
  { id: "google-ads", title: "Google Ads", description: "Reach your target audience instantly with Google Ads. We manage your budget for maximum efficiency.", icon: "◆" },
  { id: "eticaret", title: "E-Commerce", description: "We take your sales digital with online store setup, product management and payment integrations.", icon: "◇" },
];

export default function Services() {
  const { lang, t } = useLanguage();
  const s = t.services;
  const services = lang === "en" ? EN_SERVICES : SERVICES;

  return (
    <section className="px-5 md:px-12 py-20 md:py-32 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
        <div>
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#C8F135" }}>{s.tag}</p>
          <h2 className="font-display font-bold text-white" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 1 }}>
            {s.title}<br />
            <span style={{ color: "#C8F135" }}>{s.titleLime}</span>
          </h2>
        </div>
        <Link href="/hizmetler" className="text-xs tracking-widest uppercase flex items-center gap-2 transition-colors flex-shrink-0 group" style={{ color: "#888" }}>
          {s.seeAll}
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: "1px", background: "rgba(255,255,255,0.06)" }}>
        {services.map((service) => (
          <div
            key={service.id}
            className="relative p-10 transition-colors group overflow-hidden"
            style={{ background: "#0A0A0A" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#1A1A1A")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#0A0A0A")}
          >
            <div className="absolute bottom-0 left-0 w-full h-0.5 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100" style={{ background: "#C8F135" }} />
            <span className="text-3xl mb-6 block">{service.icon}</span>
            <h3 className="font-display font-bold text-lg text-white mb-4" style={{ letterSpacing: "-0.01em" }}>{service.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
