import React from 'react';
import { motion } from 'motion/react';
import { Check, ShieldCheck, ArrowRight, BookOpen, Sparkles, Heart } from 'lucide-react';
import { BookMockup } from './BookMockup';
import { CHECKOUT_URL } from './Header';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Dynamic ambient background orbs */}
      <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-gradient-to-br from-amber-200/40 via-emerald-200/30 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 left-5 w-[450px] h-[450px] bg-gradient-to-tr from-emerald-200/40 via-teal-100/30 to-amber-100/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial from-amber-100/20 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial kicker with animated badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-900 mb-5"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300/60 shadow-xs">
            <Heart className="w-3.5 h-3.5 text-emerald-700 fill-emerald-600" />
            <span>Praktischer Ratgeber im PDF-Format</span>
          </span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span className="text-stone-600">Wissenschaftlich fundiert</span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span className="text-stone-600">Sofortiger Zugang per E-Mail</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Value Proposition & CTA */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <h1 className="font-serif-title text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-stone-900 leading-[1.12] tracking-tight">
              Cholesterin neu denken
            </h1>

            <p className="text-lg sm:text-xl font-medium text-stone-800 leading-snug">
              Der wissenschaftlich fundierte Leitfaden für eine herzgesunde Ernährung – mit praxiserprobter Einkaufsliste, alltagstauglichen Rezepten und fertigem 7-Tage-Plan.
            </p>

            <p className="text-stone-600 text-base leading-relaxed max-w-xl">
              Räumen Sie mit den größten Hürden und Mythen rund um Fette, Eier und Zucker auf. Ohne langes Fachchinesisch erhalten Sie die konkreten, wissenschaftlich gesicherten Schritte, um Ihre Blutfettwerte in Ihrem eigenen Tempo positiv zu beeinflussen.
            </p>

            {/* Price block & Primary CTA with lively glowing card */}
            <div className="pt-2">
              <motion.div 
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="bg-white/90 backdrop-blur-md border border-emerald-900/10 rounded-2xl p-6 shadow-xl shadow-stone-900/5 max-w-lg relative overflow-hidden"
              >
                {/* Subtle top accent gradient line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-amber-400 to-emerald-700" />

                <div className="flex items-baseline justify-between mb-4 pb-3 border-b border-stone-200/70">
                  <div>
                    <span className="text-xs text-stone-400 line-through mr-2">Normalpreis: 49,00 €</span>
                    <span className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                      26,36 €
                    </span>
                    <span className="text-xs text-emerald-800 font-semibold ml-2">Einmalzahlung</span>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200/80 shadow-xs">
                    46% Aktionsrabatt
                  </span>
                </div>

                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-800 hover:from-emerald-700 hover:to-emerald-600 active:scale-[0.98] transition-all shadow-lg shadow-emerald-950/20 group text-base"
                >
                  <span>Jetzt E-Book für 26,36 € herunterladen</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </a>

                {/* Trust guarantee points */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                    Sofortiger E-Mail-Download
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                    Sichere Hotmart-Zahlung
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <BookOpen className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                    PDF für Handy, Tablet & PC
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Quick bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-stone-700">
              <div className="flex items-start gap-2.5 bg-white/60 backdrop-blur-xs p-2.5 rounded-xl border border-stone-200/60">
                <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5 stroke-[2.5]" />
                <span className="font-medium">Endlich wissen: „Was darf ich noch essen?”</span>
              </div>
              <div className="flex items-start gap-2.5 bg-white/60 backdrop-blur-xs p-2.5 rounded-xl border border-stone-200/60">
                <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5 stroke-[2.5]" />
                <span className="font-medium">Hafer, Hülsenfrüchte, Nüsse & Olivenöl gezielt nutzen</span>
              </div>
              <div className="flex items-start gap-2.5 bg-white/60 backdrop-blur-xs p-2.5 rounded-xl border border-stone-200/60">
                <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5 stroke-[2.5]" />
                <span className="font-medium">Verwirrung um LDL, HDL & Transfette auflösen</span>
              </div>
              <div className="flex items-start gap-2.5 bg-white/60 backdrop-blur-xs p-2.5 rounded-xl border border-stone-200/60">
                <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5 stroke-[2.5]" />
                <span className="font-medium">Fertiger 7-Tage-Wochenplan & Einkaufsliste</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Visual Focal Carrier with 3D Book Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <BookMockup />
          </motion.div>

        </div>

      </div>
    </section>
  );
};
