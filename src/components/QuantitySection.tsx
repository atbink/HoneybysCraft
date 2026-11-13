import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import { QUANTITY_TIERS } from '../data/content';
import { getWhatsAppUrl, WA_TEMPLATES } from '../utils/whatsapp';

interface QuantitySectionProps {
  onSelectQuantity?: (quantityOption: string) => void;
}

export const QuantitySection: React.FC<QuantitySectionProps> = ({
  onSelectQuantity,
}) => {
  return (
    <section
      aria-label="Pilihan Skala Jumlah Pesanan"
      className="relative py-24 lg:py-36 bg-cream bg-linen-weave border-t border-cocoa/10 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Editorial Heading with Dynamic Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: '-40px' }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 lg:mb-18"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-honey-dark font-semibold block mb-2.5">
              SKALA PRODUKSI FLEKSIBEL ✦
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-espresso tracking-[-0.025em] leading-[1.04]">
              SATU BONEKA SPESIAL
              <span className="block italic font-normal text-cocoa">
                ATAU SATU KELUARGA BESAR.
              </span>
            </h2>
          </div>

          <p className="font-sans text-base sm:text-lg text-espresso/80 max-w-md leading-relaxed">
            Mau bikin satu boneka istimewa untuk diri sendiri, atau memproduksi lini
            maskot lengkap untuk studio dan brand kamu — studio kami siap mewujudkannya.
          </p>
        </motion.div>

        {/* 3 Scale Blocks with Dynamic Stagger */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 sm:gap-8">
          {QUANTITY_TIERS.map((tier, idx) => (
            <motion.div
              key={tier.number}
              initial={{ opacity: 0, y: 56, scale: 0.93 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.18, margin: '-30px' }}
              transition={{
                duration: 0.75,
                delay: idx * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => {
                if (onSelectQuantity) {
                  onSelectQuantity(tier.formValue);
                } else {
                  window.open(getWhatsAppUrl(WA_TEMPLATES.quantity(tier.title)), '_blank');
                }
              }}
              data-cursor="WHATSAPP"
              className={`group cursor-pointer relative p-8 sm:p-10 border transition-all duration-400 flex flex-col justify-between ${
                idx === 1
                  ? 'bg-cocoa text-cream border-cocoa shadow-editorial lg:-translate-y-2.5'
                  : 'bg-cream-soft text-espresso border-cocoa/15 shadow-paper hover:border-cocoa'
              }`}
            >
              <div>
                {/* Top Row: Numeral + Visual Scale Dots */}
                <div className="flex items-start justify-between gap-4 mb-7">
                  <motion.span
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: idx * 0.15 + 0.1 }}
                    className={`font-serif text-5xl sm:text-6xl font-light leading-none ${
                      idx === 1 ? 'text-honey-light' : 'text-cocoa'
                    }`}
                  >
                    {tier.number}
                  </motion.span>

                  {/* Dot visualization with cascading pops */}
                  <div className="flex flex-wrap gap-1.5 max-w-[96px] justify-end pt-1">
                    {Array.from({ length: tier.visualCount }).map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.35,
                          delay: idx * 0.15 + 0.15 + i * 0.04,
                          type: 'spring',
                          stiffness: 300,
                        }}
                        className={`w-2.5 h-2.5 rounded-full ${
                          idx === 1
                            ? 'bg-honey-light/90'
                            : 'bg-cocoa/75 group-hover:bg-honey transition-colors'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Badge */}
                <span
                  className={`inline-block font-mono text-[9.5px] uppercase tracking-[0.16em] px-2.5 py-1 rounded-sm mb-4 ${
                    idx === 1
                      ? 'bg-cream/10 text-honey-light border border-cream/15'
                      : 'bg-beige text-cocoa'
                  }`}
                >
                  {tier.badge}
                </span>

                {/* Tier Title */}
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight">
                  {tier.title}
                </h3>

                {/* Subtitle */}
                <p
                  className={`mt-2.5 font-sans text-sm sm:text-base leading-relaxed ${
                    idx === 1 ? 'text-cream/85' : 'text-espresso/80'
                  }`}
                >
                  {tier.subtitle}
                </p>

                {/* Real Scale Photo Preview with gentle zoom-in */}
                <div className="mt-4 mb-2 overflow-hidden rounded-sm aspect-[16/10] bg-beige/60 border border-cocoa/15 shadow-sm">
                  <motion.img
                    initial={{ scale: 1.08 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: 'easeOut', delay: idx * 0.15 }}
                    src={tier.image}
                    alt={tier.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                  />
                </div>

                {/* Checklist */}
                <ul
                  className={`mt-6 pt-5 border-t border-dashed space-y-2.5 text-xs sm:text-sm ${
                    idx === 1
                      ? 'border-cream/20 text-cream/90'
                      : 'border-cocoa/15 text-espresso/85'
                  }`}
                >
                  {tier.idealFor.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <Check
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          idx === 1 ? 'text-honey-light' : 'text-honey-dark'
                        }`}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 flex items-center justify-between gap-3">
                <a
                  href={getWhatsAppUrl(WA_TEMPLATES.quantity(tier.title))}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] font-semibold transition-colors ${
                    idx === 1 ? 'text-honey-light hover:text-cream' : 'text-cocoa hover:text-honey-dark'
                  }`}
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat WA Skala Ini</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA to WhatsApp */}
        <div className="mt-14 text-center">
          <a
            href={getWhatsAppUrl(WA_TEMPLATES.quantity('Koleksi / Jumlah Pesanan'))}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-cocoa text-cream px-9 py-4 rounded-full font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] shadow-tactile hover:bg-cocoa-deep transition-all duration-300 hover:scale-[1.02]"
          >
            <MessageCircle className="w-4 h-4 text-honey-light" />
            <span>KONSULTASIKAN IDE KAMU VIA WHATSAPP</span>
            <ArrowRight className="w-4 h-4 text-honey-light transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
