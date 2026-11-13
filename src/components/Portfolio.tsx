import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, MessageCircle } from 'lucide-react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/content';
import { getWhatsAppUrl, WA_TEMPLATES } from '../utils/whatsapp';
import { StudioBearMark } from './CraftIcons';

const FILTERS = [
  'SEMUA',
  'BONEKA CUSTOM',
  'KARAKTER',
  'MASKOT',
  'ANIME',
  'ANIMAL',
] as const;

type FilterType = (typeof FILTERS)[number];

interface PortfolioProps {
  onRequestSimilar?: (itemTitle: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('SEMUA');
  const [selectedWork, setSelectedWork] = useState<PortfolioItem | null>(null);

  const filteredItems =
    activeFilter === 'SEMUA'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter(
          (item) =>
            item.filterKey === activeFilter ||
            item.secondaryFilter === activeFilter
        );

  return (
    <section
      id="galeri"
      className="relative py-24 lg:py-36 bg-cream-soft bg-paper-grain overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header & Filter Bar with Dynamic Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: '-40px' }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 lg:mb-18"
        >
          <div>
            <motion.span
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="font-mono text-xs uppercase tracking-[0.22em] text-honey-dark font-semibold block mb-2.5"
            >
              ARSIP KARYA KREATIF · STUDIO SHOWCASE
            </motion.span>
            <div className="flex items-center gap-3">
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-espresso tracking-[-0.025em] leading-none">
                MADE BY HONEYBYS
              </h2>
              <StudioBearMark className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" />
            </div>
            <p className="mt-4 font-sans text-base sm:text-lg text-espresso/80 max-w-xl">
              Sedikit intipan karakter, ilustrasi, dan imajinasi yang sudah kami wujudkan
              menjadi karya fisik yang hangat.
            </p>
          </div>

          {/* Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            role="tablist"
            aria-label="Filter galeri karya"
            className="flex flex-wrap gap-2"
          >
            {FILTERS.map((filter) => {
              const active = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-[0.14em] transition-all duration-300 ${
                    active
                      ? 'bg-cocoa text-cream shadow-tactile'
                      : 'bg-cream text-espresso/80 border border-cocoa/15 hover:bg-beige/60'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Masonry Editorial Gallery with Dynamic Card Reveals */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 items-start"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.article
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.92, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12, margin: '-20px' }}
                exit={{ opacity: 0, scale: 0.92, y: 16 }}
                transition={{
                  duration: 0.6,
                  delay: (idx % 3) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => setSelectedWork(item)}
                data-cursor="DETAIL"
                className="group cursor-pointer bg-cream p-4 border border-cocoa/15 shadow-paper hover:shadow-editorial transition-all duration-400"
              >
                <div className={`relative overflow-hidden bg-beige ${item.aspect}`}>
                  <img
                    src={item.image}
                    alt={`${item.title} — ${item.categoryLabel}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104 group-hover:-translate-y-0.5"
                  />

                  {/* Top Transformation Tag */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-cream-soft/95 backdrop-blur-sm border border-cocoa/15 font-mono text-[9.5px] uppercase tracking-[0.16em] text-cocoa">
                    {item.transformationTag}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex flex-col justify-end p-5 text-cream">
                    <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-honey-light">
                      {item.size} · {item.materials}
                    </p>
                    <p className="font-sans text-sm text-cream/95 mt-1 leading-relaxed">
                      {item.clientStory}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-3.5 pb-1 px-1 flex items-start justify-between gap-3">
                  <div>
                    <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-warmbrown">
                      {item.categoryLabel}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-espresso mt-0.5 group-hover:text-cocoa transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <span className="w-8 h-8 rounded-full border border-cocoa/20 flex items-center justify-center shrink-0 group-hover:bg-cocoa group-hover:text-cream transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedWork(null)}
            className="fixed inset-0 z-50 bg-espresso/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 16 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-cream-soft border border-cocoa/20 shadow-editorial overflow-hidden grid grid-cols-1 md:grid-cols-2"
            >
              <button
                type="button"
                onClick={() => setSelectedWork(null)}
                aria-label="Tutup detail karya"
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-cream-soft/90 border border-cocoa/20 flex items-center justify-center text-espresso hover:bg-cocoa hover:text-cream transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="bg-beige aspect-square md:aspect-auto">
                <img
                  src={selectedWork.image}
                  alt={selectedWork.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-honey-dark font-semibold">
                    {selectedWork.transformationTag}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-semibold text-espresso">
                    {selectedWork.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-warmbrown">
                    {selectedWork.categoryLabel}
                  </p>

                  <p className="mt-4 font-sans text-sm sm:text-base text-espresso/85 leading-relaxed">
                    {selectedWork.clientStory}
                  </p>

                  <div className="mt-6 pt-4 border-t border-dashed border-cocoa/20 space-y-2 font-mono text-xs text-cocoa">
                    <div>
                      <strong className="uppercase">Material:</strong>{' '}
                      {selectedWork.materials}
                    </div>
                    <div>
                      <strong className="uppercase">Dimensi:</strong>{' '}
                      {selectedWork.size}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href={getWhatsAppUrl(WA_TEMPLATES.portfolio(selectedWork.title))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-cocoa text-cream py-3.5 px-5 rounded-full font-sans text-xs font-semibold uppercase tracking-[0.15em] hover:bg-cocoa-deep transition-colors shadow-tactile"
                  >
                    <MessageCircle className="w-4 h-4 text-honey-light" />
                    <span>CHAT WHATSAPP UNTUK KARYA INI</span>
                    <ArrowUpRight className="w-4 h-4 text-honey-light" />
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
