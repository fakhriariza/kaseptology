'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services, createBooking, getAvailableSlots } from '@/lib/bookings';
import ScrollReveal from './ScrollReveal';

type Step = 'service' | 'datetime' | 'details' | 'confirm' | 'success';

export default function Booking() {
  const [step, setStep] = useState<Step>('service');
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [bookingId, setBookingId] = useState('');
  const [error, setError] = useState('');

  const dates = Array.from({ length: 14 }, (_, i) => { const d = new Date(); d.setDate(d.getDate() + i); return d; });

  const fetchSlots = useCallback(async () => {
    if (selectedDate) { setLoading(true); const slots = await getAvailableSlots(selectedDate); setAvailableSlots(slots); setLoading(false); }
  }, [selectedDate]);

  useEffect(() => { fetchSlots(); }, [fetchSlots]);

  const handleSubmit = async () => {
    if (!name || !phone || !email) { setError('Mohon lengkapi semua data'); return; }
    setLoading(true); setError('');
    try {
      const id = await createBooking({ name, phone, email, service: selectedService, date: selectedDate, time: selectedTime });
      setBookingId(id); setStep('success');
    } catch { setError('Booking gagal. Silakan coba lagi atau hubungi kami langsung.'); }
    finally { setLoading(false); }
  };

  const resetBooking = () => { setStep('service'); setSelectedService(''); setSelectedDate(''); setSelectedTime(''); setName(''); setPhone(''); setEmail(''); setBookingId(''); setError(''); };
  const formatDateISO = (d: Date) => d.toISOString().split('T')[0];
  const serviceData = services.find((s) => s.id === selectedService);

  const steps: { key: Step; label: string; num: number }[] = [
    { key: 'service', label: 'Layanan', num: 1 },
    { key: 'datetime', label: 'Tanggal & Jam', num: 2 },
    { key: 'details', label: 'Data Diri', num: 3 },
    { key: 'confirm', label: 'Konfirmasi', num: 4 },
  ];
  const currentStepNum = step === 'success' ? 5 : steps.find((s) => s.key === step)?.num || 1;

  return (
    <section id="booking" className="relative py-28 md:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark-bg via-[#0e0e0e] to-brand-dark-bg" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-brand-gold/[0.02] rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <ScrollReveal><span className="inline-block text-[11px] tracking-[0.4em] uppercase text-brand-gold font-body font-medium mb-4">Reservasi Kursi Anda</span></ScrollReveal>
          <ScrollReveal delay={0.1}><h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5">Buat <span className="gold-text-gradient italic">Janji</span></h2></ScrollReveal>
          <ScrollReveal delay={0.2}><p className="max-w-md mx-auto text-white/40 font-body text-base">Pilih layanan, tentukan waktu, dan kami yang urus sisanya.</p></ScrollReveal>
        </div>

        {step !== 'success' && (
          <div className="mb-10">
            <div className="flex justify-between items-center mb-3">
              {steps.map((s) => (
                <div key={s.key} className={`flex items-center gap-2 ${currentStepNum >= s.num ? 'text-brand-gold' : 'text-white/20'}`}>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-body font-semibold border transition-all duration-300 ${
                    currentStepNum >= s.num ? 'border-brand-gold/50 bg-brand-gold/10' : 'border-white/10 bg-white/[0.02]'}`}>
                    {currentStepNum > s.num ? <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg> : s.num}
                  </div>
                  <span className="hidden sm:block text-[10px] tracking-[0.1em] uppercase font-body">{s.label}</span>
                </div>
              ))}
            </div>
            <div className="h-[2px] bg-white/[0.04] rounded-full overflow-hidden">
              <motion.div className="h-full gold-gradient rounded-full" animate={{ width: `${((currentStepNum - 1) / 3) * 100}%` }} transition={{ duration: 0.5, ease: 'easeOut' }} />
            </div>
          </div>
        )}

        <div className="glass-card p-6 md:p-8">
          <AnimatePresence mode="wait">
            {step === 'service' && (
              <motion.div key="service" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <h3 className="font-display text-xl font-semibold mb-6">Pilih layanan</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {services.map((service) => (
                    <button key={service.id} onClick={() => { setSelectedService(service.id); setStep('datetime'); }}
                      className={`text-left p-4 rounded-xl border transition-all duration-300 ${
                        selectedService === service.id ? 'border-brand-gold/40 bg-brand-gold/[0.06]' : 'border-white/[0.06] bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]'}`}>
                      <div className="font-body font-semibold text-sm text-white/90 mb-1">{service.name}</div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-brand-gold font-body font-medium">{service.price}</span>
                        <span className="text-[10px] text-white/30 font-body">{service.duration}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 'datetime' && (
              <motion.div key="datetime" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <h3 className="font-display text-xl font-semibold mb-6">Pilih tanggal & jam</h3>
                <div className="mb-6">
                  <label className="block text-xs tracking-[0.1em] uppercase text-white/40 font-body mb-3">Pilih tanggal</label>
                  <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
                    {dates.map((d) => {
                      const iso = formatDateISO(d); const isToday = iso === formatDateISO(new Date());
                      return (
                        <button key={iso} onClick={() => { setSelectedDate(iso); setSelectedTime(''); }}
                          className={`flex-shrink-0 w-[72px] py-3 rounded-xl border text-center transition-all duration-300 ${
                            selectedDate === iso ? 'border-brand-gold/40 bg-brand-gold/[0.08]' : 'border-white/[0.06] bg-white/[0.02] hover:border-white/10'}`}>
                          <div className="text-[10px] uppercase tracking-wider text-white/40 font-body">{d.toLocaleDateString('id-ID', { weekday: 'short' })}</div>
                          <div className="font-display text-lg font-bold text-white/80">{d.getDate()}</div>
                          <div className="text-[10px] text-white/30 font-body">{d.toLocaleDateString('id-ID', { month: 'short' })}</div>
                          {isToday && <div className="w-1 h-1 rounded-full bg-brand-gold mx-auto mt-1" />}
                        </button>);
                    })}
                  </div>
                </div>
                {selectedDate && (
                  <div>
                    <label className="block text-xs tracking-[0.1em] uppercase text-white/40 font-body mb-3">Jam tersedia</label>
                    {loading ? (
                      <div className="flex items-center gap-2 text-white/30 text-sm font-body py-4">
                        <div className="w-4 h-4 border-2 border-brand-gold/30 border-t-brand-gold rounded-full animate-spin" />Mengecek ketersediaan...</div>
                    ) : availableSlots.length === 0 ? (
                      <p className="text-white/30 text-sm font-body py-4">Tidak ada slot tersedia untuk tanggal ini. Silakan pilih hari lain.</p>
                    ) : (
                      <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                        {availableSlots.map((slot) => (
                          <button key={slot} onClick={() => setSelectedTime(slot)}
                            className={`py-2.5 rounded-lg border text-xs font-body font-medium transition-all duration-300 ${
                              selectedTime === slot ? 'border-brand-gold/40 bg-brand-gold/[0.08] text-brand-gold' : 'border-white/[0.06] bg-white/[0.02] text-white/50 hover:border-white/10'}`}>
                            {slot}
                          </button>))}
                      </div>)}
                  </div>)}
                <div className="flex justify-between mt-8 pt-6 border-t border-white/[0.06]">
                  <button onClick={() => setStep('service')} className="btn-outline rounded-lg text-xs">Kembali</button>
                  <button onClick={() => selectedTime && setStep('details')} disabled={!selectedTime}
                    className={`btn-primary rounded-lg text-xs ${!selectedTime ? 'opacity-30 cursor-not-allowed' : ''}`}>Lanjut</button>
                </div>
              </motion.div>
            )}

            {step === 'details' && (
              <motion.div key="details" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <h3 className="font-display text-xl font-semibold mb-6">Data diri Anda</h3>
                <div className="space-y-4">
                  <div><label className="block text-xs tracking-[0.1em] uppercase text-white/40 font-body mb-2">Nama Lengkap</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan nama Anda" className="input-field" /></div>
                  <div><label className="block text-xs tracking-[0.1em] uppercase text-white/40 font-body mb-2">Nomor HP</label>
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+62 8xx xxxx xxxx" className="input-field" /></div>
                  <div><label className="block text-xs tracking-[0.1em] uppercase text-white/40 font-body mb-2">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@anda.com" className="input-field" /></div>
                </div>
                {error && <p className="text-red-400 text-sm font-body mt-4">{error}</p>}
                <div className="flex justify-between mt-8 pt-6 border-t border-white/[0.06]">
                  <button onClick={() => setStep('datetime')} className="btn-outline rounded-lg text-xs">Kembali</button>
                  <button onClick={() => { if (name && phone && email) { setError(''); setStep('confirm'); } else { setError('Mohon lengkapi semua data'); } }}
                    className="btn-primary rounded-lg text-xs">Tinjau Booking</button>
                </div>
              </motion.div>
            )}

            {step === 'confirm' && (
              <motion.div key="confirm" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <h3 className="font-display text-xl font-semibold mb-6">Konfirmasi booking Anda</h3>
                <div className="space-y-4 mb-8">
                  {[
                    { label: 'Layanan', value: serviceData?.name || '' },
                    { label: 'Harga', value: serviceData?.price || '' },
                    { label: 'Tanggal', value: selectedDate ? new Date(selectedDate + 'T00:00').toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : '' },
                    { label: 'Jam', value: selectedTime },
                    { label: 'Nama', value: name },
                    { label: 'No. HP', value: phone },
                    { label: 'Email', value: email },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center py-3 border-b border-white/[0.04]">
                      <span className="text-xs tracking-[0.1em] uppercase text-white/40 font-body">{item.label}</span>
                      <span className="text-sm font-body font-medium text-white/80">{item.value}</span>
                    </div>))}
                </div>
                {error && <p className="text-red-400 text-sm font-body mb-4">{error}</p>}
                <div className="flex justify-between">
                  <button onClick={() => setStep('details')} className="btn-outline rounded-lg text-xs">Kembali</button>
                  <button onClick={handleSubmit} disabled={loading}
                    className={`btn-primary rounded-lg text-xs flex items-center gap-2 ${loading ? 'opacity-60' : ''}`}>
                    {loading && <div className="w-4 h-4 border-2 border-brand-charcoal/30 border-t-brand-charcoal rounded-full animate-spin" />}
                    Konfirmasi Booking
                  </button>
                </div>
              </motion.div>
            )}

            {step === 'success' && (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-7 h-7 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">Booking Berhasil!</h3>
                <p className="text-white/50 font-body text-sm mb-2">Janji temu Anda telah dipesan.</p>
                {bookingId && <p className="text-[10px] tracking-[0.1em] uppercase text-white/30 font-body mb-8">ID Booking: {bookingId}</p>}
                <div className="glass-card-gold p-5 max-w-sm mx-auto mb-8 text-left">
                  <div className="space-y-2">
                    <div className="flex justify-between"><span className="text-xs text-white/40 font-body">Layanan</span><span className="text-xs text-white/80 font-body font-medium">{serviceData?.name}</span></div>
                    <div className="flex justify-between"><span className="text-xs text-white/40 font-body">Tanggal</span><span className="text-xs text-white/80 font-body font-medium">{selectedDate && new Date(selectedDate + 'T00:00').toLocaleDateString('id-ID', { month: 'short', day: 'numeric' })}</span></div>
                    <div className="flex justify-between"><span className="text-xs text-white/40 font-body">Jam</span><span className="text-xs text-white/80 font-body font-medium">{selectedTime}</span></div>
                  </div>
                </div>
                <button onClick={resetBooking} className="btn-outline rounded-lg text-xs">Booking Lagi</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
