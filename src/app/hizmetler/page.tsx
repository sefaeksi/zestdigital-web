import Link from "next/link";

const HIZMETLER = [
  {
    no: "01",
    title: "Web Sitesi",
    summary: "Hızlı, mobil uyumlu ve SEO dostu — işletmenizi temsil eden profesyonel bir web sitesi.",
    detay: "Sadece güzel görünen değil, ziyaretçiyi müşteriye dönüştüren siteler yapıyoruz. Kurumsal, portfolyo, tek sayfa veya blog formatında — ihtiyacına göre şekilleniyor.",
    maddeler: [
      "Mobil ve tablet uyumlu tasarım",
      "Hızlı yüklenme (Core Web Vitals optimizasyonu)",
      "İletişim formu ve WhatsApp entegrasyonu",
      "Google Analytics & Search Console kurulumu",
      "1 yıl teknik destek",
    ],
    kimIcin: "Web sitesi olmayan veya eski sitesini yenilemek isteyen işletmeler",
  },
  {
    no: "02",
    title: "Marka Kimliği",
    summary: "Logo, renkler, fontlar — işletmenizi bir bakışta tanıtacak tutarlı bir marka dili.",
    detay: "Rakiplerinizden ayrışmanızı sağlayan özgün bir kimlik tasarlıyoruz. Her mecrada — kartvizitinizden Instagram profilinize — aynı profesyonel görünümü taşırsınız.",
    maddeler: [
      "Logo tasarımı (3 farklı konsept)",
      "Renk paleti ve tipografi seçimi",
      "Kartvizit ve antetli kağıt tasarımı",
      "Sosyal medya profil görselleri",
      "Marka rehberi (PDF)",
    ],
    kimIcin: "Yeni kurulan veya marka kimliğini yenilemek isteyen işletmeler",
  },
  {
    no: "03",
    title: "SEO",
    summary: "Google'da üst sıralara çıkın — reklam harcamadan organik müşteri kazanın.",
    detay: "Hedef kitlenizin kullandığı anahtar kelimelerle sitenizi optimize ediyoruz. Yerel aramalardan başlayarak (\"İstanbul tesisatçı\", \"Kadıköy kafe\") sizi rakiplerinizin önüne taşıyoruz.",
    maddeler: [
      "Anahtar kelime araştırması ve analizi",
      "Sayfa içi SEO optimizasyonu",
      "Google Business Profili kurulumu ve optimizasyonu",
      "Yerel SEO (mahalle, ilçe, şehir bazlı)",
      "Aylık sıralama raporu",
    ],
    kimIcin: "Google'da görünmek isteyen ve reklam bütçesi olmadan müşteri çekmek isteyen işletmeler",
  },
  {
    no: "04",
    title: "Sosyal Medya Yönetimi",
    summary: "Düzenli içerik, tutarlı görsel dil — sosyal medyanız hiç boş kalmaz.",
    detay: "İçerik takviminizi biz hazırlıyor, tasarımları biz yapıyor, paylaşımları biz zamanlıyoruz. Siz sadece müşterilerinize odaklanın.",
    maddeler: [
      "Aylık içerik takvimi planlaması",
      "Ayda 12 tasarımlı gönderi",
      "Caption ve hashtag yazımı",
      "Instagram, Facebook, LinkedIn yönetimi",
      "Aylık performans raporu",
    ],
    kimIcin: "Sosyal medyaya vakit ayıramayan veya düzensiz paylaşım yapan işletmeler",
  },
  {
    no: "05",
    title: "Google Reklamları",
    summary: "Doğru kişiye, doğru anda — Google Ads ile anında müşteri.",
    detay: "SEO uzun vadeli bir yatırımken Google Ads anında sonuç verir. Bütçenizi en verimli şekilde kullanarak potansiyel müşterilerin karşısına çıkıyoruz.",
    maddeler: [
      "Kampanya kurulumu ve hedefleme",
      "Arama, görüntülü ve alışveriş reklamları",
      "A/B test ve optimizasyon",
      "Dönüşüm takibi kurulumu",
      "Haftalık harcama raporu",
    ],
    kimIcin: "Hızlı müşteri kazanmak isteyen ve reklam bütçesi olan işletmeler",
  },
  {
    no: "06",
    title: "E-Ticaret",
    summary: "Online mağazanızı kurun, ürünlerinizi 7/24 satın.",
    detay: "Fiziksel mağazanızın dijital versiyonunu oluşturuyoruz. Ürün yükleme, ödeme entegrasyonu, kargo takibi — hepsini kuruyoruz, kullanmayı öğretiyoruz.",
    maddeler: [
      "Online mağaza tasarımı ve kurulumu",
      "Ürün kataloğu ve kategori yönetimi",
      "Kredi kartı ve kapıda ödeme entegrasyonu",
      "Kargo entegrasyonu",
      "Mobil uyumlu alışveriş deneyimi",
    ],
    kimIcin: "Ürünlerini online satmak isteyen perakende ve üretici işletmeler",
  },
  {
    no: "07",
    title: "Fotoğraf & Video",
    summary: "Profesyonel görsel içerik — web siteniz ve sosyal medyanız için.",
    detay: "Telefon çekimi değil, profesyonel ekipmanla mekân, ürün ve kurumsal çekimler yapıyoruz. Tanıtım videoları ve reels içerikleri de üretiyoruz.",
    maddeler: [
      "Ürün ve mekân fotoğraf çekimi",
      "Kurumsal portre çekimi",
      "Tanıtım videosu (30 sn — 2 dk)",
      "Sosyal medya için reels / kısa video",
      "Profesyonel post prodüksiyon",
    ],
    kimIcin: "Görsel içerik kalitesini artırmak isteyen her sektörden işletme",
  },
  {
    no: "08",
    title: "Mobil Uygulama",
    summary: "iOS ve Android için uygulamalar — müşterileriniz her an yanınızda.",
    detay: "Sadece büyük şirketler uygulama yaptırmaz. Randevu sistemi, sadakat kartı, online sipariş — müşterilerinizin hayatını kolaylaştıracak uygulamalar tasarlıyoruz.",
    maddeler: [
      "iOS (App Store) ve Android (Google Play) uyumlu",
      "Kullanıcı dostu arayüz tasarımı",
      "Bildirim sistemi entegrasyonu",
      "Admin paneli ile içerik yönetimi",
      "3 ay ücretsiz teknik destek",
    ],
    kimIcin: "Müşteri bağlılığını artırmak isteyen kafe, restoran, güzellik salonu ve benzeri işletmeler",
  },
];

export default function HizmetlerPage() {
  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh", paddingTop: "80px" }}>

      {/* Hero */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem 4rem" }}>
        <span style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C8F135", display: "inline-block", border: "1px solid #C8F135", padding: "0.3rem 0.8rem", marginBottom: "2rem" }}>
          Hizmetler
        </span>
        <h1 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1, letterSpacing: "-0.03em", color: "white", marginBottom: "1.5rem" }}>
          Dijitalde ihtiyacın olan<br />
          <span style={{ color: "#C8F135" }}>her şey.</span>
        </h1>
        <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "1.1rem", color: "rgba(255,255,255,0.5)", maxWidth: "520px", lineHeight: 1.7 }}>
          Web sitesinden marka kimliğine, SEO'dan sosyal medyaya —
          tek çatı altında tam dijital çözüm.
        </p>
      </div>

      {/* Ayırıcı */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />

      {/* Responsive stil */}
      <style>{`
        @media (max-width: 768px) {
          .hizmet-satir { grid-template-columns: 1fr !important; gap: 1rem !important; }
          .hizmet-ici { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>

      {/* Hizmet listesi */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        {HIZMETLER.map((h, i) => (
          <div
            key={h.no}
            className="hizmet-satir"
            style={{
              display: "grid",
              gridTemplateColumns: "4rem 1fr",
              gap: "3rem",
              padding: "4rem 0",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Numara */}
            <span style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.2)", paddingTop: "0.5rem", letterSpacing: "0.1em" }}>
              {h.no}
            </span>

            {/* İçerik */}
            <div className="hizmet-ici" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>

              {/* Sol — başlık + özet + kim için */}
              <div>
                <h2 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "white", lineHeight: 1.1, marginBottom: "1rem", letterSpacing: "-0.02em" }}>
                  {h.title}
                </h2>
                <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "1rem", color: "#C8F135", lineHeight: 1.6, marginBottom: "1rem" }}>
                  {h.summary}
                </p>
                <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  {h.detay}
                </p>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", padding: "0.75rem 1rem", background: "rgba(200,241,53,0.06)", borderLeft: "2px solid #C8F135" }}>
                  <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.5, letterSpacing: "0.02em" }}>
                    <span style={{ color: "#C8F135", fontWeight: 600 }}>Kimler için:</span> {h.kimIcin}
                  </span>
                </div>
              </div>

              {/* Sağ — maddeler */}
              <div>
                <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "1.25rem" }}>
                  Neler dahil
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {h.maddeler.map((madde) => (
                    <li key={madde} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                      <span style={{ color: "#C8F135", fontSize: "0.7rem", marginTop: "0.2rem", flexShrink: 0 }}>✦</span>
                      <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>{madde}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center", padding: "6rem 2rem" }}>
        <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.4)", marginBottom: "2rem" }}>
          Hangi hizmetten başlayacağını bilmiyor musun?
        </p>
        <Link
          href="/iletisim"
          style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", padding: "1rem 2.5rem", background: "#C8F135", color: "#0A0A0A", textDecoration: "none", display: "inline-block" }}
        >
          Ücretsiz Görüşme Al →
        </Link>
      </div>
    </div>
  );
}
