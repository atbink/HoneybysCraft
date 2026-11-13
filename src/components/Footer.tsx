import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl, WA_TEMPLATES, WA_DISPLAY_PHONE } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-espresso text-cream border-t border-cream/10">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-22">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-cream/10">
          {/* Brand Column (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <a
              href="#beranda"
              className="inline-block font-serif text-3xl sm:text-4xl font-bold tracking-tight text-cream"
            >
              HONEYBYS<span className="text-honey">.</span>CRAFT
            </a>

            <p className="font-serif italic text-xl sm:text-2xl text-beige leading-snug max-w-sm">
              Made from imagination.
              <br />
              Made to be loved.
            </p>

            <p className="font-sans text-sm text-cream/70 max-w-md leading-relaxed">
              Studio boneka handmade kustom yang mengubah karakter original,
              ilustrasi pribadi, memori berharga, dan maskot menjadi karya fisik yang
              bisa kamu dekap dan pajang dengan bangga.
            </p>
          </div>

          {/* Navigation Column (3 cols) */}
          <div className="md:col-span-3 space-y-3.5">
            <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-honey-light font-semibold">
              Navigasi
            </h3>
            <ul className="space-y-2 font-sans text-sm text-cream/80">
              {[
                { label: 'Beranda', href: '#beranda' },
                { label: 'Kategori Produk', href: '#produk' },
                { label: 'Cara Pesan', href: '#cara-pesan' },
                { label: 'Galeri Karya', href: '#galeri' },
                { label: 'FAQ', href: '#faq' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-honey-light transition-colors inline-flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column (3 cols) */}
          <div className="md:col-span-3 space-y-3.5">
            <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-honey-light font-semibold">
              Hubungi Studio
            </h3>
            <ul className="space-y-2.5 font-sans text-sm text-cream/80">
              <li>
                <a
                  href={getWhatsAppUrl(WA_TEMPLATES.general())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-1 border-b border-cream/10 hover:border-honey-light transition-colors"
                >
                  <div>
                    <span className="block font-medium text-honey-light group-hover:text-cream transition-colors">
                      WhatsApp Resmi
                    </span>
                    <span className="font-mono text-[10.5px] text-cream/70">
                      {WA_DISPLAY_PHONE}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-cream/50 group-hover:text-honey-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/honeybys.craft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-1 border-b border-cream/10 hover:border-honey-light transition-colors"
                >
                  <div>
                    <span className="block font-medium text-cream group-hover:text-honey-light transition-colors">
                      Instagram
                    </span>
                    <span className="font-mono text-[10.5px] text-cream/55">
                      @honeybys.craft
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-cream/50 group-hover:text-honey-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com/@honeybys.craft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-1 border-b border-cream/10 hover:border-honey-light transition-colors"
                >
                  <div>
                    <span className="block font-medium text-cream group-hover:text-honey-light transition-colors">
                      TikTok
                    </span>
                    <span className="font-mono text-[10.5px] text-cream/55">
                      @honeybys.craft
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-cream/50 group-hover:text-honey-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-cream/60">
          <p>© 2026 Honeybys.craft · Studio Boneka Kustom Handmade</p>
          <p className="text-beige">Dibuat dengan cinta & kehangatan 🤎</p>
        </div>
      </div>
    </footer>
  );
};
