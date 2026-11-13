import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, MessageCircle } from 'lucide-react';
import { PRODUCT_CATEGORIES, ProductCategory } from '../data/content';
import { getWhatsAppUrl, WA_TEMPLATES } from '../utils/whatsapp';

interface ProductCategoriesProps {
  onSelectCategory?: (categoryOption: string) => void;
}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({
  onSelectCategory,
}) => {
  const [activeHover, setActiveHover] = useState<string | null>(null);

  return (
    <section
      id="produk"
      className="relative py-24 lg:py-36 bg-cream-soft bg-paper-grain overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Editorial Section Header with Dynamic Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: '-40px' }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 lg:mb-20"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-honey-dark mb-3"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>KATALOG STUDIO · 06 KATEGORI UTAMA</span>
            </motion.div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-espresso tracking-[-0.025em] leading-[1.02]">
              BISA BIKIN <span className="italic font-normal text-cocoa">APA AJA?</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-sans text-base sm:text-lg text-espresso/80 leading-relaxed">
              Dari satu boneka istimewa sampai koleksi lengkap, imajinasimu yang jadi
              panduannya. Pilih kategori di bawah untuk mulai berdiskusi dengan kami.
            </p>
          </div>
        </motion.div>

        {/* Asymmetrical Studio Lookbook Grid with Dynamic Scroll Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-y-16">
          {PRODUCT_CATEGORIES.map((category: ProductCategory, index: number) => {
            const isHovered = activeHover === category.id;
            return (
              <motion.article
                key={category.id}
                initial={{ opacity: 0, y: 48, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.18, margin: '-30px' }}
                transition={{
                  duration: 0.7,
                  delay: (index % 3) * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseEnter={() => setActiveHover(category.id)}
                onMouseLeave={() => setActiveHover(null)}
                onClick={() => {
                  if (onSelectCategory) {
                    onSelectCategory(category.formOption);
                  } else {
                    window.open(getWhatsAppUrl(WA_TEMPLATES.category(category.title)), '_blank');
                  }
                }}
                data-cursor="WHATSAPP"
                className={`group cursor-pointer flex flex-col ${category.offsetClass}`}
              >
                {/* Top Number + Dimension Meta with subtle pop-in */}
                <div className="flex items-center justify-between mb-2.5 px-1">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-warmbrown font-medium">
                    PLATE {category.number}
                  </span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index % 3) * 0.12 + 0.2 }}
                    className="font-mono text-[10.5px] text-cocoa/80 bg-beige/70 px-2 py-0.5 rounded-sm"
                  >
                    {category.dimensions}
                  </motion.span>
                </div>

                {/* Editorial Visual Container with zoom-settling reveal */}
                <div
                  className={`relative overflow-hidden bg-beige border border-cocoa/15 shadow-editorial ${category.cropClass} ${category.aspectClass}`}
                >
                  <motion.img
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.95, ease: 'easeOut', delay: (index % 3) * 0.1 }}
                    src={category.image}
                    alt={`${category.title} — ${category.tagline}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104"
                  />

                  {/* Gentle Cinematic Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-espresso/10 to-transparent opacity-65 group-hover:opacity-80 transition-opacity duration-400" />

                  {/* Material Swatch Tags */}
                  <div className="absolute inset-x-3.5 bottom-3.5 flex flex-wrap gap-1.5">
                    {category.materials.map((mat, mIdx) => (
                      <motion.span
                        key={mat}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: (index % 3) * 0.12 + 0.25 + mIdx * 0.05 }}
                        className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider bg-cream-soft/90 text-espresso backdrop-blur-sm rounded-sm"
                      >
                        {mat}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Typography Block Below Image */}
                <div className="pt-4 px-1 flex items-start justify-between gap-4 border-b border-cocoa/15 pb-4">
                  <div className="transition-transform duration-300 ease-out group-hover:translate-x-1 flex-1">
                    <h3 className="font-serif text-2xl sm:text-[1.65rem] font-semibold text-espresso group-hover:text-cocoa transition-colors">
                      {category.title}
                    </h3>
                    <p className="font-sans text-sm sm:text-base font-medium text-cocoa mt-0.5">
                      {category.tagline}
                    </p>
                    <p className="font-sans text-xs sm:text-sm text-warmbrown mt-1.5 leading-relaxed">
                      {category.editorialNote}
                    </p>

                    <div className="mt-3 flex items-center gap-3">
                      <a
                        href={getWhatsAppUrl(WA_TEMPLATES.category(category.title))}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-honey-dark hover:text-cocoa transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Chat WA Kategori Ini</span>
                      </a>
                    </div>
                  </div>

                  {/* Tactile Arrow Button linking directly to WhatsApp */}
                  <a
                    href={getWhatsAppUrl(WA_TEMPLATES.category(category.title))}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Chat WhatsApp seputar ${category.title}`}
                    className={`mt-1 w-10 h-10 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isHovered
                        ? 'bg-cocoa text-cream border-cocoa translate-x-0.5 -translate-y-0.5 shadow-sm'
                        : 'bg-cream text-espresso border-cocoa/20'
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
