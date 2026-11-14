import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Wand2 } from 'lucide-react';
import { StudioBearMark } from './CraftIcons';

export const Hero: React.FC = () => {
  return (
    <section
      id="beranda"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-cream-soft bg-paper-grain flex items-center"
    >
      {/* Ambient Warm Atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 w-[36rem] h-[36rem] rounded-full bg-beige/60 blur-3xl opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-16 w-[28rem] h-[28rem] rounded-full bg-honey/15 blur-3xl opacity-50"
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

          {/* Right Column: Clean & Modern Boutique Plush Showcase (No awkward arch cutoffs) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Primary Showcase Card */}
              <div className="relative rounded-3xl overflow-hidden bg-cream border border-cocoa/15 shadow-editorial aspect-[4/5]">
                <img
                  src="/images/Chibi Blue-Haired Plush in Cozy Craft Setting.png"
                  alt="Boneka handmade plush karakter chibi Honey by S Craft di meja kerja studio"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-104"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent pointer-events-none" />

                {/* Craftsmanship Note */}
                <div className="absolute inset-x-5 bottom-5 flex items-center justify-between text-cream">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-honey-light">
                      Milo the Royal Chibi
                    </span>
                    <p className="font-serif text-lg font-medium">Custom Character Plush</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-cream-soft/90 text-espresso text-[10px] font-mono font-semibold uppercase tracking-wider shadow-sm">
                    Hand-stitched
                  </span>
                </div>
              </div>

              {/* Floating Small Complementary Photo */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: 4 }}
                animate={{ opacity: 1, y: 0, rotate: 3 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="hidden sm:block absolute -bottom-6 -left-7 w-44 bg-cream p-2.5 rounded-2xl border border-cocoa/20 shadow-editorial z-20"
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-beige">
                  <img
                    src="/images/Fluffy Smiling Bunny Plush Held by Hand.png"
                    alt="Kelinci fluffy handmade lembut"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-hand text-sm text-cocoa mt-1.5 text-center">
                  Super soft & huggable 🤎
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
