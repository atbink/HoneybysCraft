import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, X, MessageCircle, Heart, Check } from 'lucide-react';
import { PLUSH_CHARACTERS, PlushCharacter } from '../data/content';
import { getWhatsAppUrl, WA_TEMPLATES } from '../utils/whatsapp';

export const CharacterCollection: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<PlushCharacter | null>(null);

  return (
    <section
      id="characters"
      aria-label="Koleksi Karakter Boneka Handmade"
      className="relative py-20 lg:py-32 bg-cream bg-linen-weave border-t border-cocoa/10 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-honey-dark mb-2.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>KOLEKSI KARAKTER HANDMADE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-espresso tracking-[-0.025em] leading-[1.05]">
              Meet Our Characters.
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-espresso/75 max-w-md">
            Setiap karakter memiliki kepribadian, pola manual, dan sentuhan bordir unik.
            Pilih teman favoritmu atau jadikan inspirasi untuk custom idemu.
          </p>
        </motion.div>

        {/* Clean Character Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PLUSH_CHARACTERS.map((char, idx) => (
            <motion.article
              key={char.id}
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: (idx % 3) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group bg-cream-soft rounded-2xl overflow-hidden border border-cocoa/15 shadow-sm hover:shadow-editorial hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Character Photo Frame */}
                <div className="relative aspect-[4/3] overflow-hidden bg-beige">
                  <img
                    src={char.image}
                    alt={char.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-600 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-cream/90 backdrop-blur-sm text-[10px] font-mono font-semibold uppercase tracking-wider text-cocoa border border-cocoa/10">
                    {char.category}
                  </div>
                </div>

                {/* Info Block */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-espresso group-hover:text-cocoa transition-colors">
                      {char.name}
                    </h3>
                  </div>

                  <p className="font-mono text-xs text-honey-dark font-medium mb-2.5 flex items-center gap-1.5">
                    <Heart className="w-3 h-3 fill-honey-dark/20 text-honey-dark" />
                    <span>{char.personality}</span>
                  </p>

                  <p className="font-sans text-sm text-espresso/75 leading-relaxed">
                    {char.shortDesc}
                  </p>
                </div>
              </div>

              {/* Card Action */}
              <div className="p-5 sm:p-6 pt-0">
                <button
                  type="button"
                  onClick={() => setSelectedCharacter(char)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-cocoa/20 bg-cream hover:bg-cocoa hover:text-cream text-espresso font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Character Details Modal */}
      <AnimatePresence>
        {selectedCharacter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCharacter(null)}
            className="fixed inset-0 z-50 bg-espresso/50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 16 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-cream-soft rounded-2xl border border-cocoa/20 shadow-editorial overflow-hidden grid grid-cols-1 sm:grid-cols-2"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedCharacter(null)}
                aria-label="Tutup detail karakter"
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-cream/90 border border-cocoa/20 flex items-center justify-center text-espresso hover:bg-cocoa hover:text-cream transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Image side */}
              <div className="relative aspect-square sm:aspect-auto sm:h-full bg-beige">
                <img
                  src={selectedCharacter.image}
                  alt={selectedCharacter.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content side */}
              <div className="p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-honey-dark font-medium">
                    {selectedCharacter.category} · {selectedCharacter.size}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-espresso mt-1">
                    {selectedCharacter.name}
                  </h3>
                  <p className="font-hand text-lg text-cocoa mt-0.5">
                    {selectedCharacter.personality}
                  </p>

                  <p className="font-sans text-xs sm:text-sm text-espresso/80 mt-3 leading-relaxed">
                    {selectedCharacter.shortDesc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-cocoa/10 space-y-1.5">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-warmbrown font-semibold block">
                      Spesifikasi Kerajinan:
                    </span>
                    {selectedCharacter.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-espresso/85">
                        <Check className="w-3.5 h-3.5 text-honey-dark shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-cocoa/10">
                  <a
                    href={getWhatsAppUrl(WA_TEMPLATES.character(selectedCharacter.name))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-cocoa text-cream py-3 px-5 rounded-full font-sans text-xs font-semibold uppercase tracking-wider hover:bg-cocoa-deep transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 text-honey-light" />
                    <span>Pesan Karakter Ini via WA</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
