import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { CRAFT_DETAILS } from '../data/content';

export const CraftDetailsGallery: React.FC = () => {
  return (
    <section
      id="craft-details"
      aria-label="Detail Kerajinan & Material"
      className="relative py-20 lg:py-28 bg-cream-soft bg-paper-grain border-t border-cocoa/10 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-honey-dark mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KUALITAS ATELIER</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-espresso tracking-[-0.025em] leading-[1.05]">
            Craft in the Details.
          </h2>
          <p className="mt-3.5 font-sans text-sm sm:text-base text-espresso/75 leading-relaxed">
            Intipan tekstur kain minky, kerapian tusukan sulam, dan ketelitian jahitan tangan kami.
          </p>
        </motion.div>

        {/* Compact 4-Card Visual Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CRAFT_DETAILS.map((detail, idx) => (
            <motion.div
              key={detail.id}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group bg-cream rounded-2xl overflow-hidden border border-cocoa/15 shadow-sm hover:shadow-editorial transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-beige">
                <img
                  src={detail.image}
                  alt={detail.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-106"
                />
              </div>

              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold text-espresso group-hover:text-cocoa transition-colors">
                  {detail.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-espresso/70 mt-1 leading-relaxed">
                  {detail.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
