import Link from "next/link";

export default function CTABand() {
  return (
    <section
      className="px-12 py-32 flex items-center justify-between gap-12"
      style={{ background: "#C8F135" }}
    >
      <h2
        className="font-display font-bold"
        style={{
          fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
          color: "#0A0A0A",
          lineHeight: 1,
          letterSpacing: "-0.03em",
        }}
      >
        Başlamaya hazır mısın?
      </h2>
      <div className="flex-shrink-0 flex flex-col items-end gap-6">
        <p className="text-sm text-right max-w-xs" style={{ color: "rgba(0,0,0,0.6)" }}>
          Ücretsiz bir görüşme ayarlayalım. Sana özel çözümü birlikte bulalım.
        </p>
        <Link
          href="/iletisim"
          className="inline-block font-body text-sm font-medium tracking-widest uppercase px-8 py-4 transition-opacity hover:opacity-80"
          style={{ background: "#0A0A0A", color: "#fff" }}
        >
          Görüşme Al →
        </Link>
      </div>
    </section>
  );
}
