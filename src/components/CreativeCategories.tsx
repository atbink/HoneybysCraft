import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { CREATIVE_MOODBOARD, CreativeMoodItem } from '../data/content';
import { getWhatsAppUrl, WA_TEMPLATES } from '../utils/whatsapp';
import { renderMoodboardIcon } from './CraftIcons';

interface CreativeCategoriesProps {
  onStartWithInspiration?: (inspirationTitle: string) => void;
}

export const CreativeCategories: React.FC<CreativeCategoriesProps> = () => {
  const [selectedItem, setSelectedItem] = useState<CreativeMoodItem>(
    CREATIVE_MOODBOARD[0]
  );

  return (
    <section
      aria-label="Moodboard Kategori Kreasi"
      className="relative py-24 lg:py-36 bg-cream-soft bg-paper-grain overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Monumental Headline with Dynamic Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: '-40px' }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto mb-16 lg:mb-22"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-beige/70 border border-cocoa/15 font-mono text-xs uppercase tracking-[0.2em] text-cocoa mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-honey-dark" />
            <span>MOODBOARD KREATIF · BERBAGAI ARCHETYPE KARAKTER</span>
          </motion.div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[4rem] text-espresso tracking-[-0.03em] leading-[1.02]">
            IF YOU CAN IMAGINE IT,
            <span className="block italic font-normal text-cocoa mt-1">
              WE CAN MAKE IT HUGGABLE.
            </span>
          </h2>

          <p className="mt-5 font-sans text-base sm:text-lg text-espresso/80 max-w-2xl mx-auto leading-relaxed">
            Pilih atau sentuh kartu moodboard di bawah ini untuk melihat bagaimana kami
            menyesuaikan pemilihan kain, detail bordir, dan proporsi jahitannya.
          </p>
        </motion.div>

        {/* Studio Pinboard Collage with Playful Angular Settling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8 items-stretch">
          {CREATIVE_MOODBOARD.map((item, idx) => {
            const isSelected = selectedItem.id === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 56,
                  scale: 0.92,
                  rotate: idx % 2 === 0 ? -3 : 3,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true, amount: 0.16, margin: '-30px' }}
                transition={{
                  duration: 0.7,
                  delay: (idx % 3) * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseEnter={() => setSelectedItem(item)}
                onClick={() => setSelectedItem(item)}
                data-cursor="LIHAT"
                className={`group cursor-pointer relative bg-cream p-4 sm:p-5 border transition-all duration-400 ${
                  item.rotation
                } hover:rotate-0 hover:z-20 hover:scale-[1.025] ${
                  isSelected
                    ? 'border-cocoa shadow-editorial z-10 ring-1 ring-cocoa/30'
                    : 'border-cocoa/15 shadow-paper'
                }`}
              >
                {/* Masking Tape Decor popping in */}
                <motion.div
                  aria-hidden="true"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: (idx % 3) * 0.12 + 0.25 }}
                  className="masking-tape absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-5"
                />

                {/* Image Frame */}
                <div className="relative aspect-[16/11] overflow-hidden bg-beige">
                  <motion.img
                    initial={{ scale: 1.08 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: 'easeOut', delay: (idx % 3) * 0.1 }}
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 via-transparent to-transparent" />

                  {/* Category Pill */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-cream-soft/95 text-espresso font-mono text-[11px] font-semibold tracking-wider uppercase shadow-sm">
                      <span className="text-honey-dark">{renderMoodboardIcon(item.id, 'w-3.5 h-3.5')}</span>
                      <span>{item.title}</span>
                    </span>
                  </div>
                </div>

                {/* Moodboard Details */}
                <div className="pt-4">
                  <p className="font-serif text-lg font-medium text-espresso group-hover:text-cocoa transition-colors">
                    {item.subtitle}
                  </p>
                  <p className="mt-2 font-sans text-xs sm:text-sm text-warmbrown leading-relaxed">
                    {item.craftNotes}
                  </p>

                  <div className="mt-4 pt-3 border-t border-dashed border-cocoa/15 flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-cocoa/80 truncate">
                      {item.fabricRecipe}
                    </span>
                    <a
                      href={getWhatsAppUrl(WA_TEMPLATES.moodboard(item.title))}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="shrink-0 inline-flex items-center gap-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-honey-dark hover:text-cocoa transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Chat WA</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Moodboard Note Box */}
        <motion.div
          key={selectedItem.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mt-14 p-6 sm:p-8 bg-beige/65 border border-cocoa/15 rounded-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-sm"
        >
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-cocoa font-medium">
              <span className="text-honey-dark">{renderMoodboardIcon(selectedItem.id, 'w-4 h-4')}</span>
              <span>CATATAN WORKSHOP: {selectedItem.title}</span>
            </div>
            <p className="font-serif text-xl sm:text-2xl text-espresso">
              {selectedItem.craftNotes}
            </p>
            <p className="font-mono text-xs text-warmbrown">
              Rekomendasi Bahan & Tekstur: {selectedItem.fabricRecipe}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={getWhatsAppUrl(WA_TEMPLATES.moodboard(selectedItem.title))}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center justify-center gap-2.5 bg-cocoa text-cream px-6 py-3.5 rounded-full font-sans text-xs font-semibold uppercase tracking-[0.14em] hover:bg-cocoa-deep transition-all shadow-tactile hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4 text-honey-light" />
              <span>KONSULTASI GAYA INI VIA WA</span>
              <ArrowRight className="w-4 h-4 text-honey-light" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
