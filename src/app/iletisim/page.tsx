import Badge from "@/components/ui/Badge";
import ContactForm from "@/components/sections/ContactForm";
import { SITE } from "@/lib/constants";

export default function IletisimPage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Badge variant="outline" className="mb-6">İletişim</Badge>

        <h1 className="font-display font-bold text-5xl sm:text-6xl text-white max-w-2xl mb-4">
          Konuşalım,<br />
          <span className="text-lime">başlayalım.</span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-6 mb-16 text-gray-light font-body">
          <a href={`mailto:${SITE.email}`} className="hover:text-lime transition-colors">
            📧 {SITE.email}
          </a>
          <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-lime transition-colors">
            📸 Instagram
          </a>
          <span>📍 İstanbul, Türkiye</span>
        </div>
      </div>

      <ContactForm />
    </div>
  );
}
