import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-dark border-t border-gray-mid mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <span className="font-display font-bold text-xl text-white">
              ZEST <span className="text-lime">digital</span>
            </span>
            <p className="mt-3 text-gray-light text-sm font-body">
              {SITE.slogan}
            </p>
            <p className="mt-1 text-gray-light text-sm font-body">
              {SITE.description}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-4 text-sm uppercase tracking-widest">
              Sayfalar
            </h4>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-light hover:text-lime text-sm font-body transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-4 text-sm uppercase tracking-widest">
              İletişim
            </h4>
            <a
              href={`mailto:${SITE.email}`}
              className="text-gray-light hover:text-lime text-sm font-body transition-colors block"
            >
              {SITE.email}
            </a>
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-light hover:text-lime text-sm font-body transition-colors block mt-2"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="border-t border-gray-mid mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-light text-xs font-body">
            © {new Date().getFullYear()} Zest Digital. Tüm hakları saklıdır.
          </p>
          <p className="text-gray-light text-xs font-body">
            İstanbul, Türkiye
          </p>
        </div>
      </div>
    </footer>
  );
}
