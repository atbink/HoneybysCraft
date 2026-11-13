import React from 'react';
import { motion } from 'framer-motion';
import { WHY_CHOOSE_FEATURES } from '../data/content';

export const WhyChooseUs: React.FC = () => {
  return (
    <section
      aria-label="Alasan Memilih Honeybys"
      className="relative py-24 lg:py-36 bg-cocoa text-cream overflow-hidden"
    >
      {/* Subtle Grain Texture on Deep Chocolate */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.065]"
        style={{
          backgroundImage:
            'radial-gradient(#F7F0E6 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Top Editorial Header with Dynamic Stagger */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: '-40px' }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-14 lg:pb-18 border-b border-cream/15"
        >
          <div>
            <motion.span
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="font-mono text-xs uppercase tracking-[0.22em] text-honey-light block mb-2.5"
            >
              KEUNGGULAN STUDIO ✦
            </motion.span>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-semibold text-cream tracking-[-0.025em] leading-none">
              WHY HONEYBYS?
            </h2>
          </div>

          <p className="font-sans text-base sm:text-lg text-cream/80 max-w-md leading-relaxed">
            Didedikasikan untuk para kreator, ilustrator, fandom, pecinta karakter,
            maupun brand kreatif — tanpa syarat kuota minimum pabrik yang kaku.
          </p>
        </motion.div>

        {/* Four Architectural Feature Columns with Cascading Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-cream/15 border-b border-cream/15">
          {WHY_CHOOSE_FEATURES.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 44, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.18, margin: '-30px' }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative py-10 sm:py-12 md:px-7 lg:px-8 first:md:pl-0 last:md:pr-0 hover:bg-cocoa-deep/50 transition-colors duration-400 flex flex-col justify-between"
            >
              <div>
                {/* Big Number + Badge */}
                <div className="flex items-start justify-between gap-3 mb-6 sm:mb-8">
                  <motion.span
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.12 + 0.15 }}
                    className="font-serif text-6xl sm:text-7xl font-light text-honey-light/85 group-hover:text-honey-light group-hover:translate-x-1 transition-all duration-300 leading-none"
                  >
                    {feature.number}
                  </motion.span>
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] px-2.5 py-1 rounded-sm bg-cream/10 text-cream/90 border border-cream/15">
                    {feature.badge}
                  </span>
                </div>

                {/* Feature Title */}
                <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-honey-light">
                  {feature.title}
                </h3>

                {/* Big Indonesian Statement */}
                <p className="mt-4 font-serif text-2xl sm:text-3xl text-cream leading-[1.15] whitespace-pre-line">
                  {feature.indonesianLead}
                </p>
              </div>

              {/* Natural Indonesian Supporting Text */}
              <div className="mt-8 pt-5 border-t border-dashed border-cream/20">
                <p className="font-sans text-sm text-beige leading-relaxed">
                  {feature.indonesianSub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
