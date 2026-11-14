import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { getWhatsAppUrl, WA_TEMPLATES } from '../utils/whatsapp';

export const CustomPlushCTA: React.FC = () => {
  return (
    <section
      id="custom-plush"
      aria-label="Pemesanan Karakter Custom"
      className="relative py-20 lg:py-28 bg-cream bg-paper-grain border-t border-cocoa/10 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl bg-beige/60 border border-cocoa/15 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-editorial grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Subtle Accent Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full bg-honey/15 blur-3xl"
          />

          {/* Left Text Block (7 cols) */}
          <div className="lg:col-span-7 z-10">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-honey-dark mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CUSTOM MADE FOR YOU</span>
            </div>

            {/* Short Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso tracking-[-0.025em] leading-[1.08]">
              Have Your Own Character in Mind?
            </h2>

            {/* One Short Paragraph */}
            <p className="mt-4 font-sans text-sm sm:text-base lg:text-lg text-espresso/80 leading-relaxed max-w-xl">
              Bawa sketsa di kertas, ilustrasi karakter OC, anabul kesayangan, atau sosok idol
              ke studio kami. Kami merancang polanya dari nol menjadi boneka handmade yang bisa kamu peluk.
            </p>

            {/* Single Clear CTA Button */}
            <div className="mt-8">
              <a
                href={getWhatsAppUrl(WA_TEMPLATES.customPlush())}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="WHATSAPP"
                className="group inline-flex items-center gap-3 bg-cocoa text-cream px-8 py-4 rounded-full font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] shadow-tactile hover:bg-cocoa-deep transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 text-honey-light" />
                <span>Start Your Custom Plush</span>
                <ArrowRight className="w-4 h-4 text-honey-light transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Visual Block (5 cols) */}
          <div className="lg:col-span-5 relative z-10">
            <div className="relative rounded-2xl overflow-hidden bg-cream border border-cocoa/15 shadow-sm aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="/images/plush-after.png"
                alt="Hasil kreasi boneka kustom handmade Honey by S Craft"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-cream-soft/90 backdrop-blur-sm text-[10px] font-mono font-medium text-cocoa">
                ✦ 100% Custom Pattern & Tailoring
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
