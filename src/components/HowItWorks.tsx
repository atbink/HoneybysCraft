import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Pencil, Scissors, Sparkles, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const renderStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'sketch':
        return <Pencil className="w-5 h-5" />;
      case 'pattern':
        return <Sparkles className="w-5 h-5" />;
      case 'stitch':
        return <Scissors className="w-5 h-5" />;
      default:
        return <HeartHandshake className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="cara-pesan"
      className="relative py-24 lg:py-36 bg-cream bg-linen-weave border-t border-cocoa/10 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header with Dynamic Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: '-40px' }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-14 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-honey-dark font-semibold">
            <span>DARI IDE SAMPAI BISA DIPELUK ✦</span>
          </div>
          <h2 className="mt-3.5 font-serif text-4xl sm:text-5xl lg:text-6xl text-espresso tracking-[-0.025em] leading-[1.04]">
            Gimana Ide Kamu
            <span className="block italic font-normal text-cocoa">
              Bisa Jadi Nyata.
            </span>
          </h2>
          <p className="mt-4 font-sans text-base sm:text-lg text-espresso/80 leading-relaxed">
            Mulai dari coretan sketsa pensil di buku tulis hingga boneka empuk yang siap
            kamu dekap erat — inilah 4 langkah perjalanan di studio Honeybys.craft.
          </p>
        </motion.div>

        {/* Studio Timeline Architecture */}
        <div className="relative">
          {/* Stitched Thread Connecting Line (Desktop) with Dynamic Draw */}
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: 'easeInOut', delay: 0.2 }}
            style={{ originX: 0 }}
            className="hidden lg:block absolute top-12 left-10 right-10 h-[2px] border-t-2 border-dashed border-cocoa/30 z-0"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-6 relative z-10">
            {PROCESS_STEPS.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 52, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.18, margin: '-30px' }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.14,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onMouseEnter={() => setActiveStep(index)}
                  onClick={() => setActiveStep(index)}
                  className={`group cursor-pointer relative p-7 sm:p-8 transition-all duration-400 border flex flex-col justify-between ${
                    isActive
                      ? 'bg-cream-soft border-cocoa shadow-editorial -translate-y-2'
                      : 'bg-cream-soft/75 border-cocoa/15 hover:bg-cream-soft hover:-translate-y-1'
                  }`}
                >
                  <div>
                    {/* Top Step Number Pill + Tactile Studio Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <motion.span
                        initial={{ scale: 0.85 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.14 + 0.2 }}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-[11px] font-semibold tracking-[0.16em] transition-colors ${
                          isActive
                            ? 'bg-cocoa text-cream shadow-sm'
                            : 'bg-beige text-cocoa'
                        }`}
                      >
                        STEP {step.number}
                      </motion.span>

                      <motion.div
                        whileHover={{ scale: 1.12, rotate: 6 }}
                        transition={{ type: 'spring', stiffness: 350 }}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-sm ${
                          isActive
                            ? 'bg-honey text-cream-soft ring-4 ring-honey/20'
                            : 'bg-beige/80 text-cocoa'
                        }`}
                      >
                        {renderStepIcon(step.iconName)}
                      </motion.div>
                    </div>

                    <span className="font-mono text-[9.5px] uppercase tracking-widest text-warmbrown block mb-1">
                      {step.stageCode}
                    </span>

                    {/* Step Title */}
                    <h3 className="font-serif text-2xl font-semibold text-espresso leading-snug">
                      {step.title}
                    </h3>

                    {/* Tagline */}
                    <p className="mt-1 font-hand text-lg text-cocoa">
                      {step.tagline}
                    </p>

                    {/* Description */}
                    <p className="mt-3 font-sans text-sm sm:text-base text-espresso/80 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Atelier Detail */}
                    <p className="mt-4 pt-3.5 border-t border-dashed border-cocoa/15 font-sans text-xs sm:text-sm text-warmbrown leading-relaxed">
                      {step.atelierDetail}
                    </p>
                  </div>

                  {/* Deliverable Stamp */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.14 + 0.3 }}
                    className="mt-6 pt-3 border-t border-cocoa/10 flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-wider text-cocoa"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-honey-dark shrink-0" />
                    <span>{step.deliverable}</span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
