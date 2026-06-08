import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function HakkimizdaPage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Badge variant="outline" className="mb-6">Hakkımızda</Badge>

        <h1 className="font-display font-bold text-5xl sm:text-6xl text-white max-w-2xl">
          Esnafın yanında,<br />
          <span className="text-lime">her adımda.</span>
        </h1>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
          <div>
            <h2 className="font-display font-bold text-2xl text-lime mb-4">Biz Kimiz?</h2>
            <p className="font-body text-gray-light leading-relaxed">
              Zest Digital, esnaf ve KOBİ'lerin dijital dünyada hak ettikleri yeri almaları için
              kuruldu. Web sitesi, marka kimliği, SEO ve sosyal medya alanında tam kapsamlı
              dijital dönüşüm hizmetleri sunuyoruz.
            </p>
          </div>
          <div>
            <h2 className="font-display font-bold text-2xl text-lime mb-4">Neden Zest Digital?</h2>
            <p className="font-body text-gray-light leading-relaxed">
              Teknik jargon yok, gereksiz karmaşıklık yok. Siz işinize odaklanın,
              dijitali biz halledelim. Sadelik, güven ve büyüme — üç değerimiz, bir taahhüdümüz.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-gray-mid pt-12 max-w-2xl">
          {[
            { value: "Sadelik", desc: "Karmaşıklık yok, net iletişim" },
            { value: "Güven", desc: "Şeffaf fiyat, zamanında teslimat" },
            { value: "Büyüme", desc: "Her müşteri dijitalde ileri gider" },
          ].map((item) => (
            <div key={item.value}>
              <p className="font-display font-bold text-xl text-lime">{item.value}</p>
              <p className="font-body text-sm text-gray-light mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Button href="/iletisim" size="lg">Tanışalım</Button>
        </div>
      </div>
    </div>
  );
}
