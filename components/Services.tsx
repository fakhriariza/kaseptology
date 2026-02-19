'use client';

import { services } from '@/lib/bookings';
import ScrollReveal from './ScrollReveal';

const iconMap: Record<string, JSX.Element> = {
  scissors: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351-.054.7-.214 1.024m0 0a.964.964 0 01-.016.031 12.034 12.034 0 01-5.686 5.686m5.702-5.717l-.528.53m.528-.53a2.165 2.165 0 00-1.839-1.083c-.351.005-.7.054-1.024.214m7.037-3.87l-1.536.887m1.536-.887a3 3 0 115.196-3 3 3 0 01-5.196 3zm-1.536.887a2.165 2.165 0 00-1.083 1.839c-.005.351.054.7.214 1.024m0 0l.016.031a12.034 12.034 0 005.686 5.686m-5.702-5.717l.528.53m-.528-.53a2.165 2.165 0 011.839-1.083c.351.005.7.054 1.024.214" /></svg>,
  knife: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>,
  crown: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>,
  brush: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>,
  palette: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" /></svg>,
  star: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" /></svg>,
};

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark-bg via-[#0f0f0f] to-brand-dark-bg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/[0.015] rounded-full blur-[200px]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <ScrollReveal><span className="inline-block text-[11px] tracking-[0.4em] uppercase text-brand-gold font-body font-medium mb-4">Yang Kami Tawarkan</span></ScrollReveal>
          <ScrollReveal delay={0.1}><h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5"><span className="gold-text-gradient italic">Layanan</span> Kami</h2></ScrollReveal>
          <ScrollReveal delay={0.2}><p className="max-w-lg mx-auto text-white/40 font-body text-base leading-relaxed">Setiap layanan dirancang dengan presisi, produk premium, dan perhatian penuh terhadap detail.</p></ScrollReveal>
          <ScrollReveal delay={0.25}><div className="section-divider mt-8" /></ScrollReveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.08}>
              <div className="group relative glass-card p-7 hover:border-brand-gold/20 transition-all duration-500 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-brand-gold/[0.08] flex items-center justify-center text-brand-gold mb-5 group-hover:bg-brand-gold/[0.12] transition-colors duration-500">
                  {iconMap[service.icon]}
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-2">{service.name}</h3>
                <p className="font-body text-sm text-white/40 leading-relaxed mb-5">{service.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                  <span className="font-display text-lg font-bold gold-text-gradient">{service.price}</span>
                  <span className="text-xs tracking-[0.1em] uppercase text-white/30 font-body flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {service.duration}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
