'use client';

import ScrollReveal from './ScrollReveal';

const testimonials = [
  { name: 'Andi Pratama', role: 'Pelanggan Tetap', text: 'Kaseptology barbershop langganan gue. Perhatian ke detail-nya gak ada tandingan — setiap datang selalu terasa premium. Barber-nya beneran paham gaya yang cocok buat lo.', rating: 5 },
  { name: 'Rizky Firmansyah', role: 'Pelanggan Baru', text: 'Datang tanpa booking dan langsung terkesan sama pengalamannya. Tempat bersih, barber-nya skillful, dan mereka beneran dengerin mau lo apa. Pasti balik lagi.', rating: 5 },
  { name: 'Bayu Aditya', role: 'Langganan Bulanan', text: 'Udah berbulan-bulan ke sini. Konsistensinya yang bikin gue loyal. Potongan selalu bagus, sambutan selalu hangat setiap kali datang. Barbershop terbaik yang pernah gue kunjungi.', rating: 5 },
];

export default function Testimonials() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark-bg via-[#0c0c0c] to-brand-dark-bg" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-gold/[0.015] rounded-full blur-[180px]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <ScrollReveal><span className="inline-block text-[11px] tracking-[0.4em] uppercase text-brand-gold font-body font-medium mb-4">Kata Mereka</span></ScrollReveal>
          <ScrollReveal delay={0.1}><h2 className="font-display text-4xl md:text-5xl font-bold mb-5">Apa Kata <span className="gold-text-gradient italic">Pelanggan</span></h2></ScrollReveal>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className="glass-card p-7 h-full flex flex-col">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                  ))}
                </div>
                <p className="font-body text-sm text-white/50 leading-relaxed flex-1 mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="pt-5 border-t border-white/[0.06]">
                  <div className="font-body font-semibold text-sm text-white/80">{t.name}</div>
                  <div className="text-[10px] tracking-[0.1em] uppercase text-white/30 font-body">{t.role}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
