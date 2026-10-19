import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Download, Smartphone, Laptop, Check } from 'lucide-react';

interface BookMockupProps {
  className?: string;
  size?: 'normal' | 'large';
}

export const BookMockup: React.FC<BookMockupProps> = ({ className = '', size = 'normal' }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      {/* Decorative ambient aura behind book */}
      <div 
        className="absolute -inset-6 bg-gradient-to-tr from-amber-300/30 via-emerald-200/40 to-emerald-400/20 rounded-full blur-3xl -z-10 pointer-events-none transform -rotate-3 animate-pulse-glow"
      />

      {/* 3D Realistic Book Display with slow subtle float */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative group perspective-1000 max-w-[340px] sm:max-w-[400px] w-full animate-float-slow"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-stone-900/25 border border-stone-200/70 bg-white transition-transform duration-500 group-hover:scale-[1.01]">
          {/* Subtle glossy reflection line across the cover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none z-10" />
          
          <img
            src="/src/assets/images/ebook_cover_showcase_1792155492820.jpg"
            alt="Buchcover Cholesterin neu denken - Der wissenschaftlich fundierte Leitfaden für eine herzgesunde Ernährung"
            className="w-full h-auto object-cover block"
            loading="eager"
            referrerPolicy="no-referrer"
          />

          {/* Bottom badge overlay inside card */}
          <div className="p-3.5 bg-stone-900/90 backdrop-blur-md text-white flex items-center justify-between text-xs border-t border-stone-700/50">
            <div className="flex items-center gap-1.5 font-medium">
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>Digitales E-Book (PDF)</span>
            </div>
            <span className="text-amber-300 font-semibold text-xs">
              Sofortiger Download
            </span>
          </div>
        </div>

        {/* Small floating feature pill */}
        <div className="absolute -bottom-3 -right-3 sm:-right-5 bg-white border border-stone-200 shadow-lg rounded-xl px-3.5 py-2 flex items-center gap-2 z-20">
          <div className="w-6 h-6 rounded-md bg-emerald-100 flex items-center justify-center text-emerald-700">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </div>
          <div className="text-left">
            <div className="text-[11px] font-bold text-stone-900 uppercase tracking-wider">Inklusive</div>
            <div className="text-xs text-stone-600 font-medium">7-Tage-Plan & Einkaufsliste</div>
          </div>
        </div>
      </motion.div>

      {/* Device compatibility indicators */}
      <div className="mt-6 flex items-center gap-4 text-xs text-stone-500 font-medium">
        <span className="flex items-center gap-1">
          <Smartphone className="w-3.5 h-3.5 text-stone-400" /> Smartphone
        </span>
        <span aria-hidden="true" className="text-stone-300">·</span>
        <span className="flex items-center gap-1">
          <Laptop className="w-3.5 h-3.5 text-stone-400" /> Tablet & PC
        </span>
        <span aria-hidden="true" className="text-stone-300">·</span>
        <span className="text-emerald-700 font-semibold">Kein eReader nötig</span>
      </div>
    </div>
  );
};
