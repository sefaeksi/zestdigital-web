"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xwvzkjpd", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
          Ücretsiz görüşme<br />
          <span className="text-lime">ayarlayalım.</span>
        </h2>
        <p className="font-body text-gray-light mb-10">
          Formu doldurun, en geç 24 saat içinde size ulaşalım.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-body text-sm text-gray-light block mb-2">Adınız *</label>
              <input
                name="name"
                required
                className="w-full bg-gray-dark border border-gray-mid text-white font-body px-4 py-3 focus:outline-none focus:border-lime transition-colors"
                placeholder="Ahmet Yılmaz"
              />
            </div>
            <div>
              <label className="font-body text-sm text-gray-light block mb-2">Telefon *</label>
              <input
                name="phone"
                required
                className="w-full bg-gray-dark border border-gray-mid text-white font-body px-4 py-3 focus:outline-none focus:border-lime transition-colors"
                placeholder="0532 000 00 00"
              />
            </div>
          </div>

          <div>
            <label className="font-body text-sm text-gray-light block mb-2">İşletme Adı</label>
            <input
              name="business"
              className="w-full bg-gray-dark border border-gray-mid text-white font-body px-4 py-3 focus:outline-none focus:border-lime transition-colors"
              placeholder="İşletmenizin adı"
            />
          </div>

          <div>
            <label className="font-body text-sm text-gray-light block mb-2">İlgilendiğiniz Hizmet</label>
            <select
              name="service"
              className="w-full bg-gray-dark border border-gray-mid text-white font-body px-4 py-3 focus:outline-none focus:border-lime transition-colors"
            >
              <option value="">Seçiniz</option>
              <option value="seed">Seed — Marka Kimliği</option>
              <option value="grow">Grow — Web Sitesi</option>
              <option value="scale">Scale — Sosyal Medya + SEO</option>
              <option value="full">Full — Tam Dijital Dönüşüm</option>
              <option value="other">Diğer</option>
            </select>
          </div>

          <div>
            <label className="font-body text-sm text-gray-light block mb-2">Notunuz</label>
            <textarea
              name="message"
              rows={4}
              className="w-full bg-gray-dark border border-gray-mid text-white font-body px-4 py-3 focus:outline-none focus:border-lime transition-colors resize-none"
              placeholder="Projenizden kısaca bahsedin..."
            />
          </div>

          <Button type="submit" size="lg" disabled={status === "sending"} className="mt-2">
            {status === "sending" ? "Gönderiliyor..." : "Gönder"}
          </Button>

          {status === "success" && (
            <p className="font-body text-lime text-sm text-center">
              Mesajınız alındı! En geç 24 saat içinde dönüş yapacağız.
            </p>
          )}
          {status === "error" && (
            <p className="font-body text-red-400 text-sm text-center">
              Bir hata oluştu. Lütfen {SITE.email} adresine mail gönderin.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
