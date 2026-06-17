export default function QuoteBand() {
  return (
    <section
      className="px-5 md:px-12 py-16 md:py-24 border-b grid"
      style={{
        borderColor: "rgba(255,255,255,0.06)",
        gridTemplateColumns: "auto 1fr",
        gap: "1.5rem",
        alignItems: "center",
      }}
    >
      <span
        className="font-display font-bold select-none hidden sm:block"
        style={{ fontSize: "clamp(5rem, 12vw, 12rem)", lineHeight: 0.7, color: "#C8F135", opacity: 0.15 }}
        aria-hidden
      >
        "
      </span>
      <p
        className="font-display font-semibold"
        style={{
          fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
          lineHeight: 1.4,
          letterSpacing: "-0.02em",
          color: "rgba(255,255,255,0.75)",
        }}
      >
        Dijitalde görünmek artık büyük şirketlerin tekeli değil.
        Doğru araçlar ve doğru ortak ile her işletme dijitalde güçlü olabilir.
      </p>
    </section>
  );
}
