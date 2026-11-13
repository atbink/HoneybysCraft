import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl, WA_TEMPLATES, WA_DISPLAY_PHONE } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.94 }}
            className="mb-3 w-72 sm:w-80 bg-cream-soft border border-cocoa/20 shadow-editorial p-4 rounded-sm text-espresso"
          >
            <div className="flex items-center justify-between pb-2 border-b border-cocoa/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-cocoa">
                  Honeybys Studio Online
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Tutup pop-up chat"
                className="text-warmbrown hover:text-cocoa p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="mt-2.5 font-sans text-xs sm:text-sm text-espresso/85 leading-relaxed">
              Halo! 🧸 Punya sketsa atau ide karakter yang mau dibikin boneka?
              Ngobrol langsung dengan pengrajin kami via WhatsApp yuk.
            </p>

            <a
              href={getWhatsAppUrl(WA_TEMPLATES.general())}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3.5 w-full inline-flex items-center justify-center gap-2 bg-cocoa text-cream py-2.5 px-4 rounded-full font-sans text-xs font-semibold uppercase tracking-wider shadow-sm hover:bg-cocoa-deep transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-honey-light" />
              <span>Buka Chat ({WA_DISPLAY_PHONE})</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Buka bantuan WhatsApp Honeybys.craft"
        className="group relative flex items-center gap-2.5 bg-cocoa hover:bg-cocoa-deep text-cream px-4 py-3 rounded-full shadow-tactile border border-cream/20 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
        </span>
        <MessageCircle className="w-5 h-5 text-honey-light" />
        <span className="font-mono text-xs uppercase tracking-wider font-semibold hidden sm:inline-block">
          Konsultasi WA
        </span>
      </button>
    </div>
  );
};
