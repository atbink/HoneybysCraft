import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl, WA_TEMPLATES } from '../utils/whatsapp';

export const FinalCTA: React.FC = () => {
  return (
    <section
      aria-label="Ajakan Mulai Pemesanan"
      className="relative py-24 lg:py-32 overflow-hidden bg-espresso text-cream text-center"
    >
      {/* Background Soft Overlay Photo */}
      <div className="absolute inset-0 opacity-25">
        <img
          src="/images/final-cta-family.png"
          alt="Koleksi boneka handmade Honey by S Craft"
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/90 to-espresso" />
      </div>

      <div className="relative z-10 max-w-[800px] mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block font-hand text-2xl sm:text-3xl text-honey-light mb-3">
            Made from imagination, made to be held.
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold text-cream tracking-[-0.025em] leading-[1.05]">
            Your Imagination,
            <span className="block italic font-normal text-beige mt-1">
              Made Huggable.
            </span>
          </h2>

          <p className="mt-5 font-sans text-sm sm:text-base lg:text-lg text-cream/80 max-w-lg mx-auto leading-relaxed">
            Siap mengubah ide, karakter, atau memori berhargamu menjadi boneka fisik yang nyata?
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href={getWhatsAppUrl(WA_TEMPLATES.finalCta())}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="WHATSAPP"
              className="group inline-flex items-center gap-3 bg-cream text-espresso hover:bg-honey hover:text-cream-soft px-9 py-4 rounded-full font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.14em] shadow-tactile transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 text-cocoa group-hover:text-cream-soft transition-colors" />
              <span>Start Your Custom Plush</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-10 pt-6 border-t border-cream/15 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono uppercase tracking-wider text-beige">
            <span>✦ Tanpa Minimum Order</span>
            <span>✦ 100% Pola Khusus</span>
            <span>✦ Konsultasi Gratis</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
