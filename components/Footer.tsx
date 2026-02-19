"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative pt-28 pb-8">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark-bg to-[#080808]" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="glass-card-gold p-8 md:p-12 text-center mb-20">
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Siap Tampil{" "}
              <span className="gold-text-gradient italic">Keren?</span>
            </h3>
            <p className="text-white/40 font-body text-base max-w-md mx-auto mb-8">
              Booking janji temu Anda hari ini dan rasakan pengalaman
              Kaseptology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#booking" className="btn-primary rounded-lg">
                Booking Sekarang
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline rounded-lg inline-flex items-center justify-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 overflow-hidden rounded-lg">
                <Image
                  src="/images/logo.png"
                  alt="Kaseptology"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-display text-base font-bold gold-text-gradient">
                  KASEPTOLOGY
                </div>
                <div className="text-[9px] tracking-[0.3em] uppercase text-white/30 font-body">
                  Barbershop
                </div>
              </div>
            </div>
            <p className="text-white/40 font-body text-sm leading-relaxed">
              Pengalaman grooming premium. Dimana gaya bertemu keahlian.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-white/60 font-body font-semibold mb-5">
              Menu Cepat
            </h4>
            <ul className="space-y-3">
              {[
                { l: "Beranda", h: "home" },
                { l: "Tentang", h: "about" },
                { l: "Layanan", h: "services" },
                { l: "Galeri", h: "gallery" },
                { l: "Booking", h: "booking" },
              ].map((link) => (
                <li key={link.h}>
                  <a
                    href={`#${link.h}`}
                    className="text-sm text-white/40 hover:text-brand-gold-light font-body transition-colors duration-300"
                  >
                    {link.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-white/60 font-body font-semibold mb-5">
              Kontak
            </h4>
            <ul className="space-y-3 text-sm text-white/40 font-body">
              <li className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 mt-0.5 text-brand-gold/60 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                Kaseptology Barbershop
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 mt-0.5 text-brand-gold/60 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                +62 812-3456-7890
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 mt-0.5 text-brand-gold/60 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                hello@kaseptology.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-white/60 font-body font-semibold mb-5">
              Jam Operasional
            </h4>
            <ul className="space-y-3 text-sm text-white/40 font-body">
              <li className="flex justify-between">
                <span>Senin – Jumat</span>
                <span className="text-white/60">09:00 – 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sabtu</span>
                <span className="text-white/60">09:00 – 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>Minggu</span>
                <span className="text-white/60">10:00 – 20:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/25 font-body">
            &copy; {currentYear} Kaseptology Barbershop. Seluruh hak cipta
            dilindungi.
          </p>
          <div className="flex items-center gap-4">
            {[
              {
                label: "Instagram",
                href: "https://www.instagram.com/kaseptology",
                icon: (
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                ),
              },
              {
                label: "TikTok",
                href: "#",
                icon: (
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.27 8.27 0 004.76 1.5v-3.4a4.85 4.85 0 01-1-.14z" />
                  </svg>
                ),
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-full border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-brand-gold hover:border-brand-gold/30 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
