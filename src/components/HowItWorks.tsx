import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Scissors, Heart, Sparkles } from 'lucide-react';
import { SIMPLE_STEPS } from '../data/content';

export const HowItWorks: React.FC = () => {
  const getStepIcon = (icon: 'concept' | 'customize' | 'craft') => {
    switch (icon) {
      case 'concept':
        return <Palette className="w-6 h-6 text-honey-dark" />;
      case 'customize':
        return <Scissors className="w-6 h-6 text-honey-dark" />;
      case 'craft':
        return <Heart className="w-6 h-6 text-honey-dark" />;
    }
  };

  return (
    <section
      id="how-it-works"
      aria-label="Cara Pemesanan Boneka"
      className="relative py-20 lg:py-28 bg-cream-soft bg-paper-grain border-t border-cocoa/10 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-14 lg:mb-18"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-honey-dark mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PROSES SEDERHANA</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-espresso tracking-[-0.025em] leading-[1.05]">
            How It Works.
          </h2>
          <p className="mt-3.5 font-sans text-sm sm:text-base text-espresso/75 leading-relaxed">
            Hanya butuh 3 langkah sederhana untuk membawa imajinasimu menjadi boneka fisik yang nyata.
          </p>
        </motion.div>

        {/* 3 Steps Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {SIMPLE_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 35, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: idx * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative bg-cream p-7 sm:p-8 rounded-2xl border border-cocoa/15 shadow-sm hover:shadow-editorial hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Step Pill */}
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-honey-dark px-3 py-1 rounded-full bg-beige/60 border border-cocoa/10 mb-5">
                Langkah {step.number}
              </span>

              {/* Visual Icon Illustration */}
              <div className="w-16 h-16 rounded-2xl bg-cream-soft border border-cocoa/15 flex items-center justify-center shadow-sm mb-6">
                {getStepIcon(step.icon)}
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl font-semibold text-espresso mb-2">
                {step.title}
              </h3>

              {/* Short Description */}
              <p className="font-sans text-sm text-espresso/75 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
