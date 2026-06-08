import Packages from "@/components/sections/Packages";
import Badge from "@/components/ui/Badge";
import ContactForm from "@/components/sections/ContactForm";

export default function PaketlerPage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Badge variant="outline" className="mb-6">Paketler & Fiyatlar</Badge>
        <h1 className="font-display font-bold text-5xl sm:text-6xl text-white max-w-2xl">
          Bütçene uygun<br />
          <span className="text-lime">paketi seç.</span>
        </h1>
        <p className="mt-6 text-gray-light font-body text-lg max-w-xl">
          Tüm fiyatlar alt sınır olup projeye özel değişiklik gösterebilir.
          Ücretsiz görüşmede net fiyat verilir.
        </p>
      </div>
      <Packages />
      <ContactForm />
    </div>
  );
}
