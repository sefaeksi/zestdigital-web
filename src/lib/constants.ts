export const SITE = {
  name: "Zest Digital",
  slogan: "İşine Zest kat.",
  description: "Esnaf ve KOBİ'ler için dijital dönüşüm hizmetleri. İşine Zest kat.",
  email: "zestdigitaltr@gmail.com",
  url: "https://zestdigital.com.tr",
  social: {
    instagram: "https://instagram.com/zestdigitaltr",
  },
};

export const NAV_LINKS = [
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Portfolyo", href: "/portfolyo" },
  { label: "İletişim", href: "/iletisim" },
];

export const SERVICES = [
  {
    id: "marka",
    title: "Marka Kimliği",
    description: "Logo, renk paleti, tipografi ve marka rehberiyle işletmenize güçlü bir kimlik kazandırıyoruz.",
    icon: "✦",
  },
  {
    id: "web",
    title: "Web Sitesi",
    description: "Hızlı, mobil uyumlu ve SEO dostu web siteleri. Siz işinize bakın, dijitali biz halledelim.",
    icon: "◈",
  },
  {
    id: "seo",
    title: "SEO",
    description: "Google'da üst sıralara çıkın. Yerel ve genel SEO stratejileriyle organik trafiğinizi artırıyoruz.",
    icon: "◎",
  },
  {
    id: "sosyal",
    title: "Sosyal Medya",
    description: "İçerik üretimi, yönetimi ve reklam kampanyalarıyla sosyal medyada fark yaratıyoruz.",
    icon: "◉",
  },
  {
    id: "mobil",
    title: "Mobil Uygulama",
    description: "iOS ve Android için native ve cross-platform uygulamalar. Müşterileriniz her an yanınızda olsun.",
    icon: "◐",
  },
  {
    id: "fotograf",
    title: "Fotoğraf & Video",
    description: "Ürün, mekan ve kurumsal çekimlerden tanıtım videolarına kadar profesyonel içerik üretimi.",
    icon: "◑",
  },
  {
    id: "google-ads",
    title: "Google Reklamları",
    description: "Google Ads ile hedef kitlenize anında ulaşın. Bütçenizi en verimli şekilde yönetiyoruz.",
    icon: "◆",
  },
  {
    id: "eticaret",
    title: "E-ticaret",
    description: "Online mağaza kurulumu, ürün yönetimi ve ödeme entegrasyonuyla satışlarınızı dijitale taşıyoruz.",
    icon: "◇",
  },
];

export const PACKAGES = [
  {
    id: "seed",
    name: "Seed",
    tagline: "Marka kimliğinizi oluşturun",
    basePrice: 10000,
    monthlyMaintenance: 500,
    features: [
      "Logo tasarımı (3 konsept)",
      "Marka renk paleti",
      "Tipografi seçimi",
      "Kartvizit tasarımı",
      "Marka rehberi (PDF)",
      "2 revizyon hakkı",
    ],
    highlight: false,
  },
  {
    id: "grow",
    name: "Grow",
    tagline: "Dijitale adım atın",
    basePrice: 20000,
    monthlyMaintenance: 1500,
    features: [
      "Seed paketi dahil",
      "Kurumsal web sitesi",
      "Mobil uyumlu tasarım",
      "İletişim formu",
      "Google Analytics",
      "1 yıl teknik destek",
    ],
    highlight: true,
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "Büyümeye hazır olun",
    basePrice: 40000,
    monthlyMaintenance: 4000,
    features: [
      "Grow paketi dahil",
      "SEO optimizasyonu",
      "Sosyal medya yönetimi",
      "Aylık içerik takvimi",
      "Fotoğraf & video çekimi",
      "Aylık performans raporu",
    ],
    highlight: false,
  },
  {
    id: "full",
    name: "Full",
    tagline: "Tam dijital dönüşüm",
    basePrice: 60000,
    monthlyMaintenance: 7500,
    features: [
      "Scale paketi dahil",
      "Mobil uygulama (iOS & Android)",
      "Google Ads yönetimi",
      "E-ticaret entegrasyonu",
      "Öncelikli destek",
      "Özel çözümler",
    ],
    highlight: false,
  },
];
