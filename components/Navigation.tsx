"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang", href: "#about" },
  { label: "Layanan", href: "#services" },
  { label: "Galeri", href: "#gallery" },
  { label: "Booking", href: "#booking" },
  { label: "Kontak", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-brand-dark-bg/90 backdrop-blur-xl border-b border-white/[0.04] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-3"
          >
            <div className="relative w-10 h-10 overflow-hidden rounded-lg">
              <Image
                src="/images/logo.png"
                alt="Kaseptology"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold tracking-wide gold-text-gradient">
                KASEPTOLOGY
              </span>
              <span className="text-[10px] tracking-[0.35em] uppercase text-white/40 font-body -mt-0.5">
                Barbershop
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative px-4 py-2 text-xs font-body font-medium tracking-[0.15em] uppercase transition-colors duration-300 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-brand-gold-light"
                    : "text-white/50 hover:text-white/90"
                }`}
              >
                {link.label}
                {activeSection === link.href.replace("#", "") && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] gold-gradient rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href="#booking"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#booking");
              }}
              className="btn-primary rounded-lg text-xs"
            >
              Booking Sekarang
            </a>
          </div>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            aria-label="Menu"
          >
            <motion.span
              animate={
                isMobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }
              }
              className="w-6 h-[1.5px] bg-brand-gold-light block"
            />
            <motion.span
              animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-4 h-[1.5px] bg-brand-gold-light block"
            />
            <motion.span
              animate={
                isMobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }
              }
              className="w-6 h-[1.5px] bg-brand-gold-light block"
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-brand-dark-bg/98 backdrop-blur-2xl lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-6"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                  className="font-display text-3xl font-light text-white/70 hover:text-brand-gold-light transition-colors duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#booking"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#booking");
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="btn-primary rounded-lg mt-4"
              >
                Booking Sekarang
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
