import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Heart, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, WA_TEMPLATES } from '../utils/whatsapp';
import { StudioBearMark } from './CraftIcons';

interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 600], [0, 36]);
  const yPolaroid = useTransform(scrollY, [0, 600], [0, -20]);

  return (
    <section
      id="beranda"
      className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-cream-soft bg-paper-grain flex items-center"
    >
      {/* Ambient Warm Craft Studio Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 right-0 w-[42rem] h-[42rem] rounded-full bg-beige/65 blur-3xl opacity-75"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-20 w-[30rem] h-[30rem] rounded-full bg-honey/15 blur-3xl opacity-60"
      />

      {/* Decorative Hand-Stitched Thread Curve */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-20 w-full h-[520px] text-warmbrown/15 hidden md:block"
        viewBox="0 0 1440 520"
        fill="none"
      >
        <motion.path
          d="M-30 380 C 240 430, 480 110, 840 230 C 1110 320, 1260 150, 1500 200"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="7 7"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      </svg>

      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Monumental Editorial Typographic Composition (7 cols) */}
          <div className="lg:col-span-7 z-10">
            {/* Atelier Badge Strip */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex flex-wrap items-center gap-x-3.5 gap-y-1.5 px-4 py-2 rounded-full bg-cream/90 border border-cocoa/15 shadow-sm mb-6"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-cocoa font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-honey" />
                HANDMADE DENGAN CINTA
              </span>
              <span className="text-honey">•</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-cocoa font-medium">
                100% POLA CUSTOM
              </span>
              <span className="text-honey">•</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-honey-dark font-bold">
                TANPA MINIMUM ORDER
              </span>
            </motion.div>

            {/* Monumental Editorial Headline */}
            <div className="relative">
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-espresso tracking-[-0.035em] leading-[0.94]"
              >
                <span className="block text-[2.75rem] sm:text-[4.2rem] xl:text-[5.25rem] font-semibold uppercase">
                  YOUR IMAGINATION,
                </span>
                <span className="block text-[2.45rem] sm:text-[3.8rem] xl:text-[4.65rem] italic font-normal text-cocoa mt-1 sm:mt-2">
                  Made Huggable.{' '}
                  <StudioBearMark className="inline-block w-10 h-10 sm:w-14 sm:h-14 xl:w-16 xl:h-16 align-middle ml-1 -mt-2 drop-shadow-sm" />
                </span>
              </motion.h1>

              {/* Hand-drawn Star Accent */}
              <motion.svg
                aria-hidden="true"
                animate={{ rotate: [0, 8, -4, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden sm:block absolute -top-5 right-6 lg:right-12 w-8 h-8 text-honey"
                viewBox="0 0 36 36"
                fill="none"
              >
                <path
                  d="M18 2L21.2 13.5L33 15.8L22.5 21.6L24.2 33.5L16.2 24.4L4.5 27.2L11.8 17.5L6.5 7.2L16.8 12.2L18 2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </div>

            {/* Natural Indonesian Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18 }}
              className="mt-6 sm:mt-7 font-sans text-base sm:text-lg lg:text-xl text-espresso/85 max-w-xl leading-relaxed"
            >
              Punya karakter favorit atau desain sendiri? Yuk, wujudkan jadi sesuatu
              yang bisa kamu peluk. Dibuat manual satu per satu dengan penuh ketelitian
              di studio kami.
            </motion.p>

            {/* Handwritten Whisper */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.28 }}
              className="mt-3.5 flex items-center gap-2 text-warmbrown font-hand text-xl sm:text-2xl"
            >
              <span>Dari coretan sketsa di kertasmu → jadi boneka hangat di pelukanmu</span>
            </motion.div>

            {/* Tactile CTAs with Direct WhatsApp Integration */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25 }}
              className="mt-8 sm:mt-9 flex flex-wrap items-center gap-3.5"
            >
              <a
                href={getWhatsAppUrl(WA_TEMPLATES.hero())}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="WHATSAPP"
                className="group inline-flex items-center justify-center gap-3 bg-cocoa text-cream px-8 py-4 rounded-full font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] shadow-tactile hover:bg-cocoa-deep transition-all duration-300 hover:scale-[1.02] active:scale-[0.99]"
              >
                <MessageCircle className="w-4 h-4 text-honey-light" />
                <span>CERITAIN IDE VIA WHATSAPP</span>
                <ArrowRight className="w-4 h-4 text-honey-light transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>

              <a
                href="#cara-pesan"
                data-cursor="CARA PESAN"
                className="group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-cocoa/25 bg-cream/70 hover:bg-beige/70 text-espresso font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-300"
              >
                <span>CARA PESAN</span>
              </a>

              <a
                href="#galeri"
                data-cursor="LIHAT"
                className="group inline-flex items-center justify-center gap-2 px-5 py-4 text-warmbrown hover:text-cocoa font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] transition-colors"
              >
                <span>LIHAT KARYA</span>
                <span className="w-1.5 h-1.5 rounded-full bg-honey group-hover:scale-150 transition-transform" />
              </a>
            </motion.div>

            {/* Studio Guarantee Footnote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.35 }}
              className="mt-10 pt-5 border-t border-dashed border-cocoa/20 grid grid-cols-3 gap-3 sm:gap-4 max-w-lg"
            >
              <div>
                <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-warmbrown">
                  MINIMAL ORDER
                </p>
                <p className="font-serif text-base sm:text-lg font-semibold text-espresso mt-0.5">
                  Bisa 1 Pcs Saja
                </p>
              </div>
              <div>
                <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-warmbrown">
                  METODE JAHIT
                </p>
                <p className="font-serif text-base sm:text-lg font-semibold text-espresso mt-0.5">
                  Handmade Studio
                </p>
              </div>
              <div>
                <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-warmbrown">
                  KAPASITAS BATCH
                </p>
                <p className="font-serif text-base sm:text-lg font-semibold text-espresso mt-0.5">
                  1 s/d 500+ Pcs
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Layered Editorial Lookbook Visual (5 cols) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              style={{ y: yImage }}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Masking Tape */}
              <div
                aria-hidden="true"
                className="masking-tape absolute -top-3.5 left-1/2 -translate-x-1/2 -rotate-1 z-20 w-32 h-6"
              />

              {/* Main Editorial Arch Image */}
              <div className="relative bg-cream p-3 sm:p-4 pb-7 shadow-editorial border border-cocoa/10 clip-arch">
                <div className="overflow-hidden clip-arch aspect-[4/5] bg-beige relative">
                  <img
                    src="/images/hero-plush.png"
                    alt="Boneka karakter custom buatan tangan Honeybys.craft dengan cardigan rajut madu di meja studio kayu"
                    className="w-full h-full object-cover object-center transform hover:scale-104 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/25 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="mt-3 px-1 flex items-center justify-between">
                  <span className="font-hand text-lg sm:text-xl text-cocoa">
                    No. Arsip 042 — “OC Baret Musim Gugur”
                  </span>
                  <span className="font-mono text-[9.5px] uppercase tracking-wider text-warmbrown">
                    20CM MINKY + RAJUT
                  </span>
                </div>
              </div>

              {/* Overlapping Polaroid of Original Sketch */}
              <motion.div
                style={{ y: yPolaroid }}
                initial={{ opacity: 0, x: -20, rotate: -5 }}
                animate={{ opacity: 1, x: 0, rotate: -4 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="hidden sm:block absolute -bottom-7 -left-8 z-20 w-44 bg-cream-soft p-2.5 shadow-editorial border border-cocoa/15"
              >
                <div className="aspect-square overflow-hidden bg-beige">
                  <img
                    src="/images/sketch-before.png"
                    alt="Sketsa referensi karakter original dari pemesan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-hand text-base text-cocoa text-center mt-1.5 leading-none">
                  1. Sketsa konsep dari kamu
                </p>
              </motion.div>

              {/* Floating Studio Stamp */}
              <div className="absolute -top-4 -right-2 sm:-right-5 z-20 bg-cocoa text-cream px-3.5 py-2.5 rounded-sm shadow-tactile border border-cream/15 max-w-[170px]">
                <div className="flex items-center gap-1.5 text-honey-light font-mono text-[9.5px] uppercase tracking-widest font-semibold">
                  <Heart className="w-3 h-3 fill-honey text-honey" />
                  <span>Studio Note</span>
                </div>
                <p className="font-serif text-xs text-cream/95 mt-1 leading-snug">
                  Warna kain & detail ekspresi dicocokkan langsung dari karaktermu.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
