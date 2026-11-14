import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, HeartHandshake, Smile, Sliders, ShieldCheck } from 'lucide-react';
import { WHY_US_POINTS } from '../data/content';

export const WhyChooseUs: React.FC = () => {
  const getFeatureIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <HeartHandshake className="w-5 h-5 text-honey-light" />;
      case 1:
        return <Smile className="w-5 h-5 text-honey-light" />;
      case 2:
        return <Sliders className="w-5 h-5 text-honey-light" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-honey-light" />;
    }
  };

  return (
    <section
      id="why-us"
      aria-label="Keunggulan Honey by S Craft"
      className="relative py-20 lg:py-28 bg-cocoa text-cream overflow-hidden"
    >
      {/* Subtle Grain Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(#F7F0E6 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-honey-light mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NILAI KERAJINAN KAMI</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold text-cream tracking-[-0.025em] leading-[1.05]">
            Why Honey by S Craft?
          </h2>
          <p className="mt-3.5 font-sans text-sm sm:text-base text-cream/75 leading-relaxed">
            Kualitas artisan buatan tangan yang membedakan kami dari boneka pabrikan massal.
          </p>
        </motion.div>

        {/* Exactly 4 Concise Value Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US_POINTS.map((point, idx) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 32, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="p-6 sm:p-7 rounded-2xl bg-cocoa-deep/50 border border-cream/10 hover:border-cream/25 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-cream/10 border border-cream/15 flex items-center justify-center mb-5">
                  {getFeatureIcon(idx)}
                </div>

                <span className="font-mono text-[9px] uppercase tracking-widest text-honey-light/90 block mb-2">
                  {point.badge}
                </span>

                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-cream mb-2.5">
                  {point.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-cream/75 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
