import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const CHECKOUT_URL = 'https://pay.hotmart.com/L108024210A';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F0]/90 backdrop-blur-md border-b border-stone-200/90 shadow-xs transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="font-serif-title text-lg md:text-xl font-bold tracking-tight text-stone-900 whitespace-nowrap shrink-0 hover:text-emerald-900 transition-colors"
        >
          CHOLESTERIN NEU DENKEN
        </a>

        {/* Zone 2: 4–5 single-line clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
          <a href="#was-ist-das" className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0">
            Was ist das?
          </a>
          <a href="#was-loest-es" className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0">
            Hürden & Mythen
          </a>
          <a href="#wochenplan" className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0">
            7-Tage-Plan
          </a>
          <a href="#fuer-wen" className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0">
            Für wen geeignet
          </a>
          <a href="#faq" className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0">
            Häufige Fragen
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-emerald-800 to-emerald-700 hover:from-emerald-700 hover:to-emerald-600 active:scale-[0.98] transition-all rounded-lg shadow-sm shadow-emerald-950/20 whitespace-nowrap shrink-0"
          >
            <span>Jetzt sichern · 26,36 €</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </header>
  );
};
