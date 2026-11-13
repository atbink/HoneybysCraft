import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X, Sparkles, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, WA_TEMPLATES } from '../utils/whatsapp';

interface NavbarProps {
  onStartOrder?: () => void;
}

const NAV_LINKS = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Kategori Produk', href: '#produk' },
  { label: 'Cara Pesan', href: '#cara-pesan' },
  { label: 'Galeri Karya', href: '#galeri' },
  { label: 'FAQ', href: '#faq' },
];

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream-soft/92 backdrop-blur-md border-b border-cocoa/10 py-3.5 shadow-sm'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo with Crafted Mark */}
          <a
            href="#beranda"
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="relative flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-espresso flex items-center gap-1">
                HONEYBYS<span className="text-honey">.</span>CRAFT
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-warmbrown hidden sm:block">
                Studio Boneka Handmade & Karakter Kustom
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Navigasi Utama"
            className="hidden lg:flex items-center gap-8 xl:gap-9"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative font-sans text-sm font-medium text-espresso/80 hover:text-cocoa transition-colors py-1 group"
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-honey origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </a>
            ))}
          </nav>

          {/* Right Tactile CTA Button to WhatsApp */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={getWhatsAppUrl(WA_TEMPLATES.hero())}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="WHATSAPP"
              className="group relative inline-flex items-center gap-2.5 bg-cocoa text-cream px-6 py-3 rounded-full font-sans text-xs font-semibold uppercase tracking-[0.14em] shadow-tactile hover:bg-cocoa-deep transition-all duration-300 hover:scale-[1.02] active:scale-[0.99]"
            >
              <MessageCircle className="w-4 h-4 text-honey-light" />
              <span>CHAT WHATSAPP</span>
              <ArrowRight className="w-3.5 h-3.5 text-honey-light transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Tutup navigasi' : 'Buka navigasi'}
            aria-expanded={mobileOpen}
            className="lg:hidden inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-cocoa/20 bg-cream/80 text-espresso text-xs font-mono uppercase tracking-wider"
          >
            <span>{mobileOpen ? 'Tutup' : 'Menu'}</span>
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Editorial Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-espresso/45 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              onClick={(e) => e.stopPropagation()}
              className="ml-auto w-[88%] max-w-sm h-full bg-cream bg-paper-grain border-l border-cocoa/15 p-7 flex flex-col justify-between overflow-y-auto"
            >
              <div className="pt-14">
                <div className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-honey-dark mb-6">
                  <Sparkles className="w-3 h-3" />
                  <span>Daftar Menu Studio</span>
                </div>

                <nav className="flex flex-col divide-y divide-cocoa/10">
                  {NAV_LINKS.map((item, idx) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="py-4 flex items-baseline justify-between group"
                    >
                      <span className="font-serif text-2xl text-espresso group-hover:text-honey-dark transition-colors">
                        {item.label}
                      </span>
                      <span className="font-mono text-xs text-warmbrown">
                        0{idx + 1}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pt-8 border-t border-dashed border-cocoa/20 space-y-5">
                <div className="bg-beige/55 p-4 rounded-sm border border-cocoa/10">
                  <p className="font-hand text-xl text-cocoa leading-snug">
                    “Punya karakter favorit atau desain sendiri? Yuk, wujudkan jadi sesuatu yang bisa kamu peluk.”
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-warmbrown mt-1.5">
                    ✦ Tanpa Minimum Order · Pesan Satuan Bisa
                  </p>
                </div>

                <a
                  href={getWhatsAppUrl(WA_TEMPLATES.hero())}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-cocoa text-cream py-4 px-6 rounded-full font-sans text-xs font-semibold uppercase tracking-[0.15em] shadow-tactile"
                >
                  <MessageCircle className="w-4 h-4 text-honey-light" />
                  <span>KONSULTASI VIA WHATSAPP</span>
                  <ArrowRight className="w-4 h-4 text-honey-light" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
