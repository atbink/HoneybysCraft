import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl, WA_TEMPLATES, WA_DISPLAY_PHONE } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-espresso text-cream border-t border-cream/10">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-14 lg:py-18">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-cream/10 items-start">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <a
              href="#beranda"
              className="inline-block font-serif text-2xl sm:text-3xl font-bold tracking-tight text-cream"
            >
              HONEY BY S CRAFT<span className="text-honey">.</span>
            </a>
            <p className="font-hand text-xl text-beige">
              Your Imagination, Made Huggable.
            </p>
            <p className="font-sans text-xs sm:text-sm text-cream/70 max-w-sm leading-relaxed">
              Studio kerajinan boneka plush handmade kustom. Mengubah karakter kesayangan,
              ilustrasi digital, dan memori menjadi karya fisik yang siap didekap.
            </p>
          </div>

          {/* Quick Navigation (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-honey-light font-semibold">
              Navigasi Halaman
            </h3>
            <ul className="grid grid-cols-2 gap-2 font-sans text-xs sm:text-sm text-cream/80">
              {[
                { label: 'Koleksi Karakter', href: '#characters' },
                { label: 'Cara Pesan', href: '#how-it-works' },
                { label: 'Kenapa Kami', href: '#why-us' },
                { label: 'Custom Plush', href: '#custom-plush' },
                { label: 'Detail Jahitan', href: '#craft-details' },
                { label: 'Ulasan Pembeli', href: '#reviews' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-honey-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-honey-light font-semibold">
              Hubungi Kami
            </h3>
            <ul className="space-y-2 font-sans text-xs sm:text-sm text-cream/80">
              <li>
                <a
                  href={getWhatsAppUrl(WA_TEMPLATES.general())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:text-honey-light transition-colors group"
                >
                  <span>WhatsApp: {WA_DISPLAY_PHONE}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-cream/50 group-hover:text-honey-light transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/honeybys.craft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:text-honey-light transition-colors group"
                >
                  <span>Instagram: @honeybys.craft</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-cream/50 group-hover:text-honey-light transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com/@honeybys.craft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:text-honey-light transition-colors group"
                >
                  <span>TikTok: @honeybys.craft</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-cream/50 group-hover:text-honey-light transition-colors" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-cream/50">
          <p>© {new Date().getFullYear()} Honey by S Craft. All rights reserved.</p>
          <p>Handmade with love in Indonesia 🧸</p>
        </div>
      </div>
    </footer>
  );
};
