import React from 'react';
import { motion } from 'motion/react';
import { Compass, HeartHandshake, FileText, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export const WhatIsIt: React.FC = () => {
  return (
    <section id="was-ist-das" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section kicker */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14 text-left"
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2.5">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-100/80 border border-emerald-300/50">
              01. Konzept & Inhalt
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Überblick</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            Was ist „Cholesterin neu denken”?
          </h2>
          <p className="mt-4 text-lg text-stone-700 leading-relaxed">
            <strong className="text-stone-900 font-semibold">„Cholesterin neu denken"</strong> ist ein kompakter, praxisorientierter Ratgeber im universellen PDF-Format. Er zeigt Ihnen auf einfache und wissenschaftlich gesicherte Weise, welche Lebensmittel, Fette und Alltagsgewohnheiten Ihre Blutfettwerte nachweislich positiv beeinflussen können.
          </p>
        </motion.div>

        {/* 3 Core Pillars with Scroll Animations & Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5 }}
            className="bg-white/90 backdrop-blur-md rounded-2xl p-7 border border-stone-200/80 shadow-lg shadow-stone-900/5 hover:shadow-xl hover:border-emerald-300/60 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-13 h-13 rounded-xl bg-amber-100/70 border border-amber-200/80 flex items-center justify-center text-amber-800 mb-5 group-hover:scale-105 transition-transform">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif-title text-xl font-bold text-stone-900 mb-2.5">
                Ohne Fachchinesisch
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Vergessen Sie unverständliche Laborberichte und trockene Theorie. Sie erhalten klare, verständliche Antworten darauf, was genau in Ihrem Körper passiert und was heute auf Ihrem Teller landen sollte.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-emerald-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Direkt anwendbare Schritte</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5 }}
            className="bg-white/90 backdrop-blur-md rounded-2xl p-7 border border-stone-200/80 shadow-lg shadow-stone-900/5 hover:shadow-xl hover:border-emerald-300/60 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-13 h-13 rounded-xl bg-emerald-100/70 border border-emerald-200/80 flex items-center justify-center text-emerald-800 mb-5 group-hover:scale-105 transition-transform">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif-title text-xl font-bold text-stone-900 mb-2.5">
                Im eigenen Tempo
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Keine radikalen Verbote oder unrealistische Crash-Diäten. Sie stellen Ihre Ernährung schrittweise und entspannt um – angepasst an Ihren Alltag, Ihre Familie und Ihre Vorlieben.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-emerald-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Dauerhafte Herzgesundheit</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5 }}
            className="bg-white/90 backdrop-blur-md rounded-2xl p-7 border border-stone-200/80 shadow-lg shadow-stone-900/5 hover:shadow-xl hover:border-emerald-300/60 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-13 h-13 rounded-xl bg-stone-200/60 border border-stone-300/80 flex items-center justify-center text-stone-800 mb-5 group-hover:scale-105 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-serif-title text-xl font-bold text-stone-900 mb-2.5">
                Praxis statt graue Theorie
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Der Leitfaden enthält eine alltagstaugliche Einkaufsliste, herzfreundliche Rezepte und einen fertigen 7-Tage-Mahlzeitenplan, damit Sie sofort am nächsten Tag starten können.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-emerald-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Mit Rezepten & Einkaufsliste</span>
            </div>
          </motion.div>

        </div>

        {/* Highlight Banner on Format & Instant Access with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 bg-gradient-to-r from-emerald-900 via-stone-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-9 shadow-xl relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-1.5 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Sofortiger Zugang · Keine Wartezeit
              </span>
              <h4 className="font-serif-title text-xl sm:text-2xl font-bold text-white">
                Lesbar auf all Ihren Geräten – überall offline verfügbar
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Lieferung erfolgt direkt per E-Mail nach Zahlungsbestätigung im universellen PDF-Format für Smartphone, Tablet und PC.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <span className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-xs font-semibold text-white">
                Digitales PDF
              </span>
              <span className="px-4 py-2 rounded-xl bg-amber-400 text-xs font-bold text-stone-950 shadow-md shadow-amber-950/20">
                Sofort-Download
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
