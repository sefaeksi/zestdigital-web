"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

const SERVICE_KEYS = ["seed", "grow", "scale", "full", "other"] as const;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const { t } = useLanguage();
  const f = t.form;

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
          {f.title}<br />
          <span className="text-lime">{f.titleLime}</span>
        </h2>
        <p className="font-body text-gray-light mb-10">
          {f.desc}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-body text-sm text-gray-light block mb-2">{f.name}</label>
              <input
                name="name"
                required
                className="w-full bg-gray-dark border border-gray-mid text-white font-body px-4 py-3 focus:outline-none focus:border-lime transition-colors"
                placeholder={f.namePlaceholder}
              />
            </div>
            <div>
              <label className="font-body text-sm text-gray-light block mb-2">{f.phone}</label>
              <input
                name="phone"
                required
                className="w-full bg-gray-dark border border-gray-mid text-white font-body px-4 py-3 focus:outline-none focus:border-lime transition-colors"
                placeholder={f.phonePlaceholder}
              />
            </div>
          </div>

          <div>
            <label className="font-body text-sm text-gray-light block mb-2">{f.business}</label>
            <input
              name="business"
              className="w-full bg-gray-dark border border-gray-mid text-white font-body px-4 py-3 focus:outline-none focus:border-lime transition-colors"
              placeholder={f.businessPlaceholder}
            />
          </div>

          <div>
            <label className="font-body text-sm text-gray-light block mb-2">{f.service}</label>
            <select
              name="service"
              className="w-full bg-gray-dark border border-gray-mid text-white font-body px-4 py-3 focus:outline-none focus:border-lime transition-colors"
            >
              <option value="">{f.serviceSelect}</option>
              {SERVICE_KEYS.map((key) => (
                <option key={key} value={key}>{f.serviceOptions[key]}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-body text-sm text-gray-light block mb-2">{f.note}</label>
            <textarea
              name="message"
              rows={4}
              className="w-full bg-gray-dark border border-gray-mid text-white font-body px-4 py-3 focus:outline-none focus:border-lime transition-colors resize-none"
              placeholder={f.notePlaceholder}
            />
          </div>

          <Button type="submit" size="lg" disabled={status === "sending"} className="mt-2">
            {status === "sending" ? f.sending : f.submit}
          </Button>

          {status === "success" && (
            <p className="font-body text-lime text-sm text-center">
              {f.success}
            </p>
          )}
          {status === "error" && (
            <p className="font-body text-red-400 text-sm text-center">
              {f.error}{" "}
              <a href={`mailto:${SITE.email}`} className="underline">{SITE.email}</a>
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
