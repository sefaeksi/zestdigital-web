import Services from "@/components/sections/Services";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function HizmetlerPage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Badge variant="outline" className="mb-6">Hizmetler</Badge>
        <h1 className="font-display font-bold text-5xl sm:text-6xl text-white max-w-2xl">
          Dijitalde ihtiyacın olan<br />
          <span className="text-lime">her şey.</span>
        </h1>
        <p className="mt-6 text-gray-light font-body text-lg max-w-xl">
          Web sitesinden marka kimliğine, SEO'dan sosyal medyaya — tek çatı altında tam dijital çözüm.
        </p>
      </div>
      <Services />
      <div className="text-center py-16">
        <Button href="/iletisim" size="lg">Ücretsiz Görüşme Al</Button>
      </div>
    </div>
  );
}
