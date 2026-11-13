import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MoveHorizontal, Sparkles, Check } from 'lucide-react';

export const DesignToPlush: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relX = clientX - rect.left;
    const percentage = Math.max(4, Math.min(96, (relX / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      setIsDragging(false);
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      setSliderPos((prev) => Math.max(5, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPos((prev) => Math.min(95, prev + 5));
    }
  };

  return (
    <section
      aria-label="Perbandingan Sebelum dan Sesudah Desain Jadi Boneka"
      className="relative py-24 lg:py-36 bg-cream bg-linen-weave border-y border-cocoa/10 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-honey-dark font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BUKTI KARYA · SEBELUM & SESUDAH</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-espresso tracking-[-0.025em] leading-[1.04]">
            FROM SCREEN
            <span className="block italic font-normal text-cocoa">
              TO SOMETHING YOU CAN HUG.
            </span>
          </h2>

          <p className="mt-4 font-sans text-base sm:text-lg text-espresso/80 leading-relaxed">
            Referensi dari kamu benar-benar bisa berubah menjadi boneka fisik yang nyata.
            Geser tuas pembanding di bawah untuk melihat transformasi dari gambar 2D ke boneka 3D.
          </p>
        </div>

        {/* 3-Part Visual Story Strip with Cascading Entrance */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-center mb-12">
          {/* LEFT: YOUR IDEA */}
          <motion.div
            initial={{ opacity: 0, x: -36, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2, margin: '-30px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 bg-cream-soft p-6 border border-cocoa/15 shadow-paper"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-cocoa">
                KIRI · IDEMU (2D)
              </span>
              <span className="font-hand text-lg text-warmbrown">
                Langkah 01 Referensi
              </span>
            </div>
            <ul className="space-y-2 font-sans text-sm text-espresso/85">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-honey-dark shrink-0" />
                <span>Sketsa pensil atau coretan buku gambar</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-honey-dark shrink-0" />
                <span>Artwork digital & character turnaround sheet</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-honey-dark shrink-0" />
                <span>Foto anabul kesayangan atau moodboard ide</span>
              </li>
            </ul>
          </motion.div>

          {/* CENTER: ↓ MADE BY HAND */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 flex flex-col items-center justify-center py-4 text-center"
          >
            <div className="w-12 h-12 rounded-full bg-cocoa text-cream flex items-center justify-center shadow-tactile mb-2">
              <ArrowDown className="w-5 h-5 text-honey-light animate-bounce" />
            </div>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-cocoa">
              DIJAHIT DENGAN TANGAN
            </span>
            <span className="font-hand text-xl text-warmbrown mt-0.5">
              Pola manual, bordir presisi, & dakron empuk
            </span>
          </motion.div>

          {/* RIGHT: YOUR PLUSHIE */}
          <motion.div
            initial={{ opacity: 0, x: 36, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2, margin: '-30px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 bg-cocoa text-cream p-6 border border-cocoa shadow-tactile"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-honey-light">
                KANAN · BONEKAMU (3D)
              </span>
              <span className="font-hand text-lg text-beige">
                Karya Jadi Siap Peluk
              </span>
            </div>
            <ul className="space-y-2 font-sans text-sm text-cream/90">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-honey-light shrink-0" />
                <span>Bahan minky & flanel lembut proporsional</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-honey-light shrink-0" />
                <span>Bordir mata bintang & pipi merona presisi</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-honey-light shrink-0" />
                <span>Jubah telinga beruang & tas bintang lepas-pasang</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Draggable Comparison Slider with Dynamic Pop-up */}
        <motion.div
          initial={{ opacity: 0, y: 44, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15, margin: '-30px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto"
        >
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="slider"
            aria-label="Slider perbandingan sebelum dan sesudah dari sketsa ke boneka fisik"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(sliderPos)}
            data-cursor="GESER"
            className="relative aspect-[4/3] sm:aspect-[1451/1084] max-h-[760px] w-full overflow-hidden bg-beige border-2 border-cocoa/20 shadow-editorial select-none cursor-ew-resize focus:outline-none focus:ring-2 focus:ring-honey mx-auto"
          >
            {/* Background Layer: FINISHED 3D PLUSH */}
            <img
              src="/images/plush-after.png"
              alt="Hasil fisik boneka 3D handmade Honeybys.craft lengkap dengan tudung beruang dan tas bintang"
              draggable={false}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* Badge Kanan */}
            <div className="absolute top-4 right-4 z-10 px-3.5 py-1.5 bg-cocoa/90 backdrop-blur-sm text-cream font-mono text-[11px] uppercase tracking-[0.16em] rounded-sm shadow border border-cream/15">
              BONEKA JADI · HASIL 3D
            </div>

            {/* Clipped Layer: 2D SKETCH */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img
                src="/images/sketch-before.png"
                alt="Sketsa referensi pensil dan marker di kertas gambar krem"
                draggable={false}
                style={{
                  transform: 'translate(-1.1%, -1.9%) scale(1.145)',
                  transformOrigin: 'center center',
                }}
                className="absolute inset-0 w-full h-full object-cover will-change-transform"
              />

              {/* Badge Kiri */}
              <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 bg-cream-soft/95 backdrop-blur-sm text-espresso border border-cocoa/20 font-mono text-[11px] uppercase tracking-[0.16em] rounded-sm shadow">
                SKETSA REFERENSI · DESAIN 2D
              </div>
            </div>

            {/* Divider Line & Knob */}
            <div
              className="absolute top-0 bottom-0 z-20 w-0.5 bg-cream-soft shadow-[0_0_12px_rgba(42,33,30,0.45)] pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-cocoa text-cream border-2 border-cream-soft shadow-editorial flex items-center justify-center">
                <MoveHorizontal className="w-5 h-5 text-honey-light" />
              </div>
            </div>
          </div>

          {/* Quick Toggle Controls */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 px-1">
            <p className="font-hand text-xl text-cocoa">
              ← Geser tuas kiri atau kanan untuk melihat detail jahitannya →
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSliderPos(90)}
                className="px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider bg-cream-soft border border-cocoa/20 text-espresso hover:bg-beige transition-colors"
              >
                Lihat Sketsa (2D)
              </button>
              <button
                type="button"
                onClick={() => setSliderPos(50)}
                className="px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider bg-cream-soft border border-cocoa/20 text-espresso hover:bg-beige transition-colors"
              >
                Bagi Dua (50/50)
              </button>
              <button
                type="button"
                onClick={() => setSliderPos(10)}
                className="px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider bg-cocoa text-cream hover:bg-cocoa-deep transition-colors"
              >
                Lihat Boneka Jadi (3D)
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
