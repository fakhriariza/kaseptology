"use client";

import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/[0.02] rounded-full blur-[150px]" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 border border-brand-gold/20 rounded-2xl z-10 pointer-events-none" />
                <div className="absolute -inset-2 border border-brand-gold/10 rounded-3xl z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal via-brand-dark-card to-brand-charcoal">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-40 h-40 opacity-20">
                      <Image
                        src="/images/logo.png"
                        alt="Kaseptology"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: `repeating-linear-gradient(45deg, #B8943C 0, #B8943C 1px, transparent 0, transparent 20px)`,
                    }}
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-4 md:right-8 glass-card-gold px-6 py-4 z-20">
                <div className="font-display text-3xl font-bold gold-text-gradient">
                  EST.
                </div>
                <div className="text-xs tracking-[0.2em] uppercase text-white/40 font-body">
                  Premium Sejak Hari Pertama
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={0.1}>
              <span className="inline-block text-[11px] tracking-[0.4em] uppercase text-brand-gold font-body font-medium mb-4">
                Cerita Kami
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
                Dirancang untuk{" "}
                <span className="gold-text-gradient italic">Pria</span> Modern
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-white/50 font-body text-base leading-relaxed mb-6">
                Kaseptology bukan sekadar barbershop — ini adalah tempat
                perawatan premium. Lahir dari passion terhadap presisi dan seni
                barbering klasik, kami membangun ruang di mana tradisi bertemu
                gaya kontemporer.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <p className="text-white/50 font-body text-base leading-relaxed mb-10">
                Setiap potongan adalah percakapan. Setiap cukuran adalah ritual.
                Barber ahli kami membawa pengalaman bertahun-tahun, perhatian
                terhadap detail, dan kepedulian tulus kepada setiap klien yang
                datang.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.5}>
              <div className="grid grid-cols-2 gap-6 mb-10">
                {[
                  {
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                        />
                      </svg>
                    ),
                    title: "Barber Ahli",
                    desc: "Tukang cukur berpengalaman bertahun-tahun",
                  },
                  {
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    ),
                    title: "Produk Premium",
                    desc: "Hanya menggunakan produk grooming terbaik",
                  },
                  {
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ),
                    title: "Dengan Janji",
                    desc: "Tanpa antri — waktu Anda dihargai",
                  },
                  {
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                        />
                      </svg>
                    ),
                    title: "Bersih & Modern",
                    desc: "Ruangan higienis dengan suasana premium",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-body font-semibold text-sm text-white/90 mb-0.5">
                        {item.title}
                      </div>
                      <div className="font-body text-xs text-white/40">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.6}>
              <a
                href="#booking"
                className="btn-primary rounded-lg inline-block"
              >
                Buat Janji Sekarang
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
