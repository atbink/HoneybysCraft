import React from 'react';
import { motion } from 'framer-motion';

export const BrandIntro: React.FC = () => {
  return (
    <section
      aria-label="Tentang Honeybys Craft"
      className="relative py-24 lg:py-36 bg-cream bg-linen-weave border-y border-cocoa/10 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-center">
          {/* Left Column: Layered Editorial Imagery & Handwritten Note */}
          <div className="lg:col-span-6 relative">
            {/* Primary Large Studio Crafting Photo with organic scroll reveal */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -1.5, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25, margin: '-40px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-[90%] sm:w-[84%] bg-cream-soft p-3 sm:p-4 shadow-editorial border border-cocoa/10 clip-atelier-left"
            >
              <div className="aspect-[5/4] overflow-hidden clip-atelier-left bg-beige">
                <motion.img
                  initial={{ scale: 1.08 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: 'easeOut' }}
                  src="/images/atelier-process.png"
                  alt="Tangan artisan sedang menyulam detail ekspresi wajah boneka handmade di meja kayu studio Honeybys"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-104 transition-transform duration-700"
                />
              </div>
              <div className="mt-3 flex items-center justify-between px-1">
                <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-warmbrown">
                  FIG 01. DETAIL JAHITAN MANUAL
                </span>
                <span className="font-hand text-lg text-cocoa">
                  Setiap tusukan benang dengan teliti
                </span>
              </div>
            </motion.div>

            {/* Small Overlapping Photo with playful tilt-in */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.88, rotate: 6 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 2 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="relative sm:absolute -mt-10 sm:mt-0 ml-auto sm:right-2 sm:-bottom-8 w-56 sm:w-64 bg-cream-soft p-3 shadow-editorial border border-cocoa/15 z-10"
            >
              <div
                aria-hidden="true"
                className="masking-tape absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 rotate-1"
              />
              <div className="aspect-[4/3] overflow-hidden bg-beige">
                <img
                  src="/images/Fluffy Smiling Bunny Plush Held by Hand.png"
                  alt="Boneka handmade berbulu halus yang lembut dan hangat digenggam tangan"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-hand text-lg text-cocoa mt-2 text-center">
                Nyata & hangat digenggam 🤎
              </p>
            </motion.div>

            {/* Handwritten Note Ribbon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 sm:mt-12 inline-flex items-center gap-3 px-5 py-2.5 bg-beige/80 border border-dashed border-cocoa/30 rounded-sm -rotate-1 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-honey animate-pulse" />
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-[0.14em] text-cocoa uppercase">
                DARI IDEMU → DIJAHIT DENGAN TANGAN
              </span>
            </motion.div>
          </div>

          {/* Right Column: Editorial Manifesto in Warm Indonesian */}
          <div className="lg:col-span-6 lg:pl-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-honey-dark font-semibold"
            >
              <span>HALO, JIWA KREATIF ✦</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 font-serif text-3xl sm:text-5xl lg:text-[3.25rem] text-espresso leading-[1.08] tracking-[-0.025em]"
            >
              Ada ide yang terlalu berharga
              <span className="block italic font-normal text-cocoa">
                untuk cuma disimpan
              </span>
              di dalam kepala.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.16 }}
              className="mt-6 font-sans text-base sm:text-lg lg:text-xl text-espresso/85 leading-relaxed"
            >
              Di <strong className="font-semibold text-cocoa">Honeybys.craft</strong>, kami mengubah
              karakter, ide, memori, dan desain personalmu menjadi kreasi handmade
              yang benar-benar bisa kamu pegang, pajang, dan peluk.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.24 }}
              className="mt-4 font-sans text-sm sm:text-base text-warmbrown leading-relaxed"
            >
              Ini bukan sekadar membeli mainan pabrikan di toko. Baik itu karakter original (OC)
              yang sudah bertahun-tahun kamu gambar, teman seperjalanan anime atau game,
              sosok idol yang menginspirasi, maupun kado personal untuk sahabat tersayang —
              kami membuat polanya dari nol, memotong kainnya dengan cermat, dan menjahitnya
              dengan penuh kehangatan.
            </motion.p>

            {/* Studio Philosophy Quotation */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 pt-6 border-t border-cocoa/15"
            >
              <p className="font-hand text-2xl sm:text-3xl text-cocoa">
                “Studio boneka kustom tempat imajinasi bermetamorfosis menjadi sesuatu yang nyata dan bisa kamu peluk erat.”
              </p>
              <p className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-warmbrown mt-1.5">
                — FILOSOFI KERAJINAN HONEYBYS.CRAFT
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
