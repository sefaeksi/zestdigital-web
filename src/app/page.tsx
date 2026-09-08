import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/ui/Marquee";
import Services from "@/components/sections/Services";
import QuoteBand from "@/components/sections/QuoteBand";
import CTABand from "@/components/sections/CTABand";
import { SITE, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/**
 * Organization + sundugu hizmetlerin katalogu. Google'in bilgi panelinde ajans
 * adi, logosu ve sosyal hesabi bu kayittan eslesiyor.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  slogan: SITE.slogan,
  email: SITE.email,
  logo: `${SITE.url}/icon.svg`,
  image: `${SITE.url}/og.png`,
  sameAs: [SITE.social.instagram],
  address: {
    "@type": "PostalAddress",
    addressLocality: "İstanbul",
    addressCountry: "TR",
  },
  areaServed: { "@type": "Country", name: "Türkiye" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dijital hizmetler",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.description },
    })),
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Marquee />
      <Services />
      <QuoteBand />
      <CTABand />
    </>
  );
}
