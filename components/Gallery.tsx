'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import Image from 'next/image';

const galleryImages = [
  { id: 1, alt: 'Potongan fade premium', category: 'Potongan', gradient: 'from-amber-900/40 via-stone-900/60 to-stone-950/80', label: 'PRECISION FADE' },
  { id: 2, alt: 'Grooming jenggot klasik', category: 'Grooming', gradient: 'from-yellow-900/30 via-neutral-900/60 to-neutral-950/80', label: 'TRIM JENGGOT' },
  { id: 3, alt: 'Interior barbershop', category: 'Suasana', gradient: 'from-brand-gold/20 via-zinc-900/60 to-zinc-950/80', label: 'RUANGAN KAMI' },
  { id: 4, alt: 'Potongan tekstur modern', category: 'Potongan', gradient: 'from-orange-900/30 via-gray-900/60 to-gray-950/80', label: 'TEXTURED CUT' },
  { id: 5, alt: 'Cukur handuk panas', category: 'Grooming', gradient: 'from-amber-800/30 via-stone-900/60 to-stone-950/80', label: 'CUKUR KLASIK' },
  { id: 6, alt: 'Hasil styling', category: 'Potongan', gradient: 'from-yellow-800/30 via-neutral-900/60 to-neutral-950/80', label: 'HASIL STYLING' },
  { id: 7, alt: 'Produk grooming premium', category: 'Suasana', gradient: 'from-brand-gold/15 via-zinc-900/60 to-zinc-950/80', label: 'PRODUK PREMIUM' },
  { id: 8, alt: 'Detail skin fade', category: 'Potongan', gradient: 'from-amber-900/30 via-gray-900/60 to-gray-950/80', label: 'SKIN FADE' },
];

const categories = ['Semua', 'Potongan', 'Grooming', 'Suasana'];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filtered = activeFilter === 'Semua' ? galleryImages : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <section id="gallery" className="relative py-28 md:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark-bg via-[#0a0a0a] to-brand-dark-bg" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <ScrollReveal><span className="inline-block text-[11px] tracking-[0.4em] uppercase text-brand-gold font-body font-medium mb-4">Hasil Karya Kami</span></ScrollReveal>
          <ScrollReveal delay={0.1}><h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5"><span className="gold-text-gradient italic">Galeri</span></h2></ScrollReveal>
          <ScrollReveal delay={0.2}><p className="max-w-lg mx-auto text-white/40 font-body text-base leading-relaxed">Showcase presisi, gaya, dan keahlian dari barber ahli kami.</p></ScrollReveal>
        </div>

        <ScrollReveal delay={0.25}>
          <div className="flex justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-body font-medium tracking-[0.1em] uppercase transition-all duration-300 ${
                  activeFilter === cat ? 'bg-brand-gold/20 text-brand-gold-light border border-brand-gold/30' : 'text-white/40 border border-white/[0.06] hover:text-white/60 hover:border-white/10'
                }`}>{cat}</button>
            ))}
          </div>
        </ScrollReveal>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div key={img.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={`group relative rounded-xl overflow-hidden cursor-pointer ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                onClick={() => setSelectedImage(img.id)}>
                <div className={`aspect-square ${i === 0 ? 'md:aspect-auto md:h-full' : ''} bg-gradient-to-br ${img.gradient} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-16 h-16 opacity-10"><Image src="/images/logo.jpg" alt="" fill className="object-contain" /></div>
                  </div>
                  <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(184,148,60,0.5) 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 md:p-5">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-brand-gold font-body mb-1">{img.category}</span>
                    <span className="font-display text-sm md:text-base font-semibold text-white">{img.label}</span>
                  </div>
                </div>
                <div className="absolute inset-0 border border-white/[0.04] rounded-xl pointer-events-none group-hover:border-brand-gold/20 transition-colors duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-14">
            <a href="https://www.instagram.com/kaseptology" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/[0.08] text-white/50 hover:text-brand-gold-light hover:border-brand-gold/20 transition-all duration-500 font-body text-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Ikuti kami @kaseptology
            </a>
          </div>
        </ScrollReveal>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-6" onClick={() => setSelectedImage(null)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-3xl w-full aspect-square rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
              {(() => { const img = galleryImages.find((i) => i.id === selectedImage); return img ? (
                <div className={`w-full h-full bg-gradient-to-br ${img.gradient} flex items-center justify-center`}>
                  <div className="text-center">
                    <div className="relative w-20 h-20 mx-auto mb-4 opacity-30"><Image src="/images/logo.jpg" alt="" fill className="object-contain" /></div>
                    <div className="font-display text-xl text-white/60">{img.label}</div>
                    <div className="text-xs text-white/30 mt-2 font-body">Ganti dengan foto barbershop asli</div>
                  </div>
                </div>) : null; })()}
            </motion.div>
            <button onClick={() => setSelectedImage(null)} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
