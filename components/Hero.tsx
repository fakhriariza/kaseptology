'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-brand-dark-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark-bg via-transparent to-brand-dark-bg z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-bg/80 via-transparent to-brand-dark-bg/80 z-[1]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-gold/[0.03] rounded-full blur-[120px] z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-gold/[0.02] rounded-full blur-[100px] z-0" />
      <div className="absolute inset-0 z-0 opacity-[0.02]"
        style={{ backgroundImage: `linear-gradient(rgba(184,148,60,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(184,148,60,0.3) 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />
      <div className="absolute top-0 right-[15%] w-[1px] h-full bg-gradient-to-b from-transparent via-brand-gold/10 to-transparent z-[1]" />
      <div className="absolute top-0 left-[15%] w-[1px] h-full bg-gradient-to-b from-transparent via-brand-gold/10 to-transparent z-[1]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="mb-8 flex justify-center">
          <div className="relative w-24 h-24 md:w-28 md:h-28">
            <Image src="/images/logo.jpg" alt="Kaseptology Logo" fill className="object-contain" priority />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mb-6">
          <span className="inline-block px-5 py-2 text-[10px] md:text-xs tracking-[0.4em] uppercase font-body font-medium text-brand-gold border border-brand-gold/20 rounded-full bg-brand-gold/[0.04]">
            Pengalaman Grooming Premium
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6 text-balance">
          <span className="block text-white">Dimana Gaya</span>
          <span className="block gold-text-gradient">Bertemu Keahlian</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-xl mx-auto text-white/50 font-body text-base md:text-lg font-light leading-relaxed mb-10">
          Membangun kepercayaan diri melalui potongan presisi dan grooming klasik.
          Rasakan seni barbering di level terbaik.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#booking" className="btn-primary rounded-lg">Booking Sekarang</a>
          <a href="#services" className="btn-outline rounded-lg">Lihat Layanan</a>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { num: '5+', label: 'Tahun Pengalaman' },
            { num: '10K+', label: 'Pelanggan Puas' },
            { num: '4.9', label: 'Rating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl md:text-3xl font-bold gold-text-gradient">{stat.num}</div>
              <div className="text-[10px] md:text-xs tracking-[0.15em] uppercase text-white/30 font-body mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2">
          <span className="text-[9px] tracking-[0.3em] uppercase text-white/20 font-body">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-brand-gold/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
