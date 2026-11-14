import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X, Sparkles, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, WA_TEMPLATES } from '../utils/whatsapp';

const NAV_LINKS = [
  { label: 'Koleksi Karakter', href: '#characters' },
  { label: 'Cara Pesan', href: '#how-it-works' },
  { label: 'Kenapa Kami', href: '#why-us' },
  { label: 'Custom Plush', href: '#custom-plush' },
  { label: 'Detail Jahitan', href: '#craft-details' },
  { label: 'Ulasan', href: '#reviews' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 25);
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
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-cream-soft/95 backdrop-blur-md border-b border-cocoa/10 py-3 shadow-sm'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#beranda"
            className="group flex items-center gap-2.5 focus:outline-none"
          >
            <div className="relative flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-espresso flex items-center gap-1">
                HONEY BY S CRAFT<span className="text-honey">.</span>
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-warmbrown hidden sm:block">
                Boutique Handmade Plush Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Navigasi Utama"
            className="hidden lg:flex items-center gap-7 xl:gap-8"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative font-sans text-sm font-medium text-espresso/75 hover:text-cocoa transition-colors py-1 group"
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-honey origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </a>
            ))}
          </nav>

          {/* Right Action: Clean WhatsApp CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#custom-plush"
              data-cursor="CUSTOM"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono uppercase tracking-wider text-cocoa hover:text-espresso transition-colors"
            >
              Custom Ide
            </a>
            <a
              href={getWhatsAppUrl(WA_TEMPLATES.hero())}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="WHATSAPP"
              className="group relative inline-flex items-center gap-2 bg-cocoa text-cream px-5 py-2.5 rounded-full font-sans text-xs font-semibold uppercase tracking-[0.12em] shadow-sm hover:bg-cocoa-deep transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-3.5 h-3.5 text-honey-light" />
              <span>Pesan via WA</span>
              <ArrowRight className="w-3.5 h-3.5 text-honey-light transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Tutup navigasi' : 'Buka navigasi'}
            aria-expanded={mobileOpen}
            className="lg:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-cocoa/20 bg-cream-soft/80 text-espresso text-xs font-mono uppercase tracking-wider"
          >
            <span>{mobileOpen ? 'Tutup' : 'Menu'}</span>
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-espresso/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              onClick={(e) => e.stopPropagation()}
              className="ml-auto w-[85%] max-w-sm h-full bg-cream bg-paper-grain border-l border-cocoa/15 p-6 flex flex-col justify-between overflow-y-auto"
            >
              <div className="pt-12">
                <div className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-honey-dark mb-6">
                  <Sparkles className="w-3 h-3" />
                  <span>Menu Honey by S Craft</span>
                </div>

                <nav className="flex flex-col divide-y divide-cocoa/10">
                  {NAV_LINKS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="py-3 font-serif text-lg font-medium text-espresso hover:text-cocoa transition-colors flex items-center justify-between"
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="w-4 h-4 text-warmbrown" />
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-cocoa/10 space-y-3">
                <a
                  href={getWhatsAppUrl(WA_TEMPLATES.hero())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-cocoa text-cream py-3 rounded-full font-sans text-xs font-semibold uppercase tracking-wider"
                >
                  <MessageCircle className="w-4 h-4 text-honey-light" />
                  <span>Chat WhatsApp Resmi</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
