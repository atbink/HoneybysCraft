import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle, ArrowRight } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';
import { getWhatsAppUrl, WA_TEMPLATES, WA_DISPLAY_PHONE } from '../utils/whatsapp';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      aria-label="Pertanyaan yang Sering Diajukan"
      className="relative py-24 lg:py-36 bg-cream bg-linen-weave border-t border-cocoa/10"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left 5 Cols: Editorial Intro with Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25, margin: '-40px' }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-honey-dark font-semibold block mb-2.5">
              TANYA JAWAB STUDIO ✦ FAQ
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-espresso tracking-[-0.025em] leading-[1.04]">
              Ada Pertanyaan
              <span className="block italic font-normal text-cocoa">
                Sebelum Mulai Jahit?
              </span>
            </h2>
            <p className="mt-4 font-sans text-base sm:text-lg text-espresso/80 leading-relaxed">
              Hal-hal yang sering ditanyakan seputar pemesanan satu boneka kustom,
              sketsa karakter, hingga pesanan dalam partai besar.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-7 p-6 bg-cream-soft border border-dashed border-cocoa/25 rounded-sm shadow-sm"
            >
              <p className="font-hand text-2xl text-cocoa">
                “Masih ragu apakah sketsamu bisa diwujudkan jadi boneka?”
              </p>
              <p className="font-sans text-sm text-warmbrown mt-1.5 leading-relaxed">
                Kirimkan saja gambarmu ke kami — tim pengrajin kami dengan senang hati
                akan membantu mencari solusi bahan dan teknik terbaiknya.
              </p>
              <div className="mt-4 pt-3 border-t border-cocoa/10">
                <a
                  href={getWhatsAppUrl(WA_TEMPLATES.faq())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-honey-dark hover:text-cocoa transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat WhatsApp ({WA_DISPLAY_PHONE})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right 7 Cols: Clean Editorial Accordion with Cascading Stagger */}
          <div className="lg:col-span-7 divide-y divide-cocoa/15 border-y border-cocoa/15">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15, margin: '-20px' }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="py-6 sm:py-7"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between gap-5 text-left group focus:outline-none"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-honey-dark font-semibold">
                        0{idx + 1}
                      </span>
                      <span className="font-serif text-xl sm:text-2xl font-medium text-espresso group-hover:text-cocoa transition-colors">
                        {item.question}
                      </span>
                    </div>

                    <span
                      className={`mt-1 w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-cocoa text-cream border-cocoa'
                          : 'border-cocoa/25 text-cocoa group-hover:bg-beige'
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 pl-8 sm:pl-9 font-sans text-sm sm:text-base text-warmbrown leading-relaxed">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
