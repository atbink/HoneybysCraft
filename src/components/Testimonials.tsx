import React from 'react';
import { motion } from 'framer-motion';
import { Star, Sparkles, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const Testimonials: React.FC = () => {
  return (
    <section
      id="reviews"
      aria-label="Ulasan Pemilik Boneka"
      className="relative py-20 lg:py-28 bg-cream bg-linen-weave border-t border-cocoa/10 overflow-hidden"
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
            <span>KATA MEREKA</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-espresso tracking-[-0.025em] leading-[1.05]">
            Loved by Creators.
          </h2>
          <p className="mt-3.5 font-sans text-sm sm:text-base text-espresso/75 leading-relaxed">
            Cerita hangat dari teman-teman yang telah mendekap karakter impian mereka.
          </p>
        </motion.div>

        {/* Exactly 3 Focused Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: idx * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-cream-soft p-7 sm:p-8 rounded-2xl border border-cocoa/15 shadow-sm hover:shadow-editorial transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-honey text-honey"
                      />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-cocoa/20" />
                </div>

                {/* Highlight Tag */}
                <span className="inline-block font-mono text-[10px] uppercase tracking-wider text-honey-dark bg-beige/70 px-2.5 py-0.5 rounded-sm mb-3">
                  {item.highlight}
                </span>

                {/* Quote */}
                <p className="font-serif text-base sm:text-lg text-espresso/90 leading-relaxed italic">
                  “{item.quote}”
                </p>
              </div>

              {/* Author Details */}
              <div className="mt-6 pt-4 border-t border-cocoa/10">
                <h3 className="font-sans text-sm font-bold text-espresso">
                  {item.name}
                </h3>
                <p className="font-mono text-xs text-warmbrown">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
