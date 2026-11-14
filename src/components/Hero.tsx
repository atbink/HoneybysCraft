import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles, Wand2, Heart } from 'lucide-react';
import { StudioBearMark } from './CraftIcons';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 500], [0, 28]);
  const yPolaroid = useTransform(scrollY, [0, 500], [0, -16]);

  return (
    <section
      id="beranda"
      className="relative pt-32 pb-20 lg:pt-38 lg:pb-28 overflow-hidden bg-cream-soft bg-paper-grain flex items-center"
    >
      {/* Ambient Warm Craft Studio Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 w-[38rem] h-[38rem] rounded-full bg-beige/65 blur-3xl opacity-75"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-16 w-[30rem] h-[30rem] rounded-full bg-honey/15 blur-3xl opacity-50"
      />

      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Clear, uncluttered typographic message */}
          <div className="lg:col-span-7 z-10">
            {/* Studio Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream/90 border border-cocoa/15 shadow-sm mb-5"
            >
              <Sparkles className="w-3.5 h-3.5 text-honey-dark" />
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-cocoa font-medium">
                Honey by S Craft · Handmade Plush Studio
              </span>
            </motion.div>

            {/* Clear Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-espresso tracking-[-0.03em] leading-[1.02]"
            >
              <span className="block text-4xl sm:text-6xl xl:text-[4.25rem] font-semibold">
                Handmade Plush Characters,
              </span>
              <span className="block text-3xl sm:text-5xl xl:text-[3.75rem] italic font-normal text-cocoa mt-2">
                Made from Pure Imagination.
                <StudioBearMark className="inline-block w-9 h-9 sm:w-12 sm:h-12 align-middle ml-2 -mt-1.5 drop-shadow-sm" />
              </span>
            </motion.h1>

            {/* Short Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-6 font-sans text-base sm:text-lg lg:text-xl text-espresso/80 max-w-xl leading-relaxed"
            >
              Kami mengubah karakter orisinal, ilustrasi kesayangan, dan memori berharga
              menjadi boneka plush buatan tangan yang hangat dan siap didekap erat.
            </motion.p>

            {/* Focused 2 CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
            >
              {/* Primary CTA: Explore Characters */}
              <a
                href="#characters"
                data-cursor="EXPLORE"
                className="group inline-flex items-center justify-center gap-2.5 bg-cocoa text-cream px-7 py-4 rounded-full font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] shadow-tactile hover:bg-cocoa-deep transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Characters</span>
                <ArrowDown className="w-4 h-4 text-honey-light transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>

              {/* Secondary CTA: Create Your Own */}
              <a
                href="#custom-plush"
                data-cursor="CUSTOM"
                className="group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-cocoa/25 bg-cream/70 hover:bg-beige/70 text-espresso font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-300"
              >
                <Wand2 className="w-4 h-4 text-honey-dark" />
                <span>Create Your Own</span>
              </a>
            </motion.div>

            {/* Concise Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="mt-10 pt-6 border-t border-cocoa/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono uppercase tracking-wider text-warmbrown"
            >
              <span>✦ 100% Jahit Tangan</span>
              <span>✦ Tanpa Minimum Order</span>
              <span>✦ Bahan Minky & Flanel Lembut</span>
            </motion.div>
          </div>

          {/* Right Column: Centered Plush Visual Inside Editorial Arch Frame */}
          <div className="lg:col-span-5 relative">
            <motion.div
              style={{ y: yImage }}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Masking Tape Decor */}
              <div
                aria-hidden="true"
                className="masking-tape absolute -top-3.5 left-1/2 -translate-x-1/2 -rotate-1 z-20 w-32 h-6"
              />

              {/* Main Editorial Arch Image with Perfectly Centered Doll */}
              <div className="relative bg-cream p-3 sm:p-4 pb-7 shadow-editorial border border-cocoa/10 clip-arch">
                <div className="overflow-hidden clip-arch aspect-[4/5] bg-beige relative">
                  <img
                    src="/images/hero-plush-centered.png"
                    alt="Boneka karakter custom buatan tangan Honeybys.craft dengan cardigan rajut di meja studio kayu"
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

              {/* Overlapping Polaroid of Original Concept Sketch */}
              <motion.div
                style={{ y: yPolaroid }}
                initial={{ opacity: 0, x: -20, rotate: -5 }}
                animate={{ opacity: 1, x: 0, rotate: -4 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="hidden sm:block absolute -bottom-7 -left-7 z-20 w-44 bg-cream-soft p-2.5 shadow-editorial border border-cocoa/15"
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

              {/* Floating Studio Note Stamp */}
              <div className="absolute -top-4 -right-2 sm:-right-4 z-20 bg-cocoa text-cream px-3.5 py-2.5 rounded-sm shadow-tactile border border-cream/15 max-w-[175px]">
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
