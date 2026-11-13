import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, WA_TEMPLATES } from '../utils/whatsapp';

interface FinalCTAProps {}

export const FinalCTA: React.FC<FinalCTAProps> = () => {
  return (
    <section
      aria-label="Ajakan Mulai Pemesanan Kustom"
      className="relative py-28 lg:py-40 overflow-hidden bg-espresso text-cream"
    >
      {/* Background Image of Plush Family with dynamic parallax zoom */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.15, opacity: 0.2 }}
          whileInView={{ scale: 1.05, opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          src="/images/final-cta-family.png"
          alt="Koleksi keluarga boneka handmade dan maskot buatan tangan di studio Honeybys"
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
        {/* Warm Cinematic Studio Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-cocoa-deep/85 to-espresso/80" />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block font-hand text-2xl sm:text-3xl text-honey-light mb-3"
          >
            Imajinasi unikmu pantas memiliki wujud nyata di dunia
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-semibold text-cream tracking-[-0.025em] leading-[1.02]"
          >
            PUNYA KARAKTER
            <span className="block italic font-normal text-beige mt-1">
              DI DALAM KEPALA?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.26 }}
            className="mt-5 font-sans text-base sm:text-lg lg:text-xl text-cream/85 max-w-xl mx-auto leading-relaxed"
          >
            Yuk, wujudkan ide kamu jadi sesuatu yang bisa beneran dipeluk erat.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={getWhatsAppUrl(WA_TEMPLATES.finalCta())}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="WHATSAPP"
              className="group inline-flex items-center gap-3.5 bg-cream text-espresso hover:bg-honey hover:text-cream-soft px-10 py-4.5 rounded-full font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.16em] shadow-editorial transition-all duration-300 hover:scale-[1.025]"
            >
              <MessageCircle className="w-4 h-4 text-cocoa group-hover:text-cream-soft transition-colors" />
              <span>CHAT WHATSAPP SEKARANG</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </motion.div>

          {/* Trust Notes */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-12 pt-8 border-t border-cream/15 flex flex-wrap items-center justify-center gap-x-8 gap-y-2.5 font-mono text-xs uppercase tracking-[0.18em] text-beige"
          >
            <span>✦ TANPA MINIMUM ORDER</span>
            <span>✦ 100% POLA KHUSUS IDEMU</span>
            <span>✦ DIJAHIT DENGAN PENUH HATI</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
