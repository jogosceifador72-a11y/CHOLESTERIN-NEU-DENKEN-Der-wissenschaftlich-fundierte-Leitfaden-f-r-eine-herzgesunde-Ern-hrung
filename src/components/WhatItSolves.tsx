import React from 'react';
import { motion } from 'motion/react';
import { 
  Check, 
  Sparkles, 
  AlertTriangle, 
  Heart, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import { CHECKOUT_URL } from './Header';

export const WhatItSolves: React.FC = () => {
  return (
    <section id="was-loest-es" className="py-24 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-gradient-to-bl from-emerald-100/50 to-amber-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-stone-200/50 to-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14 text-left"
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2.5">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-100/80 border border-emerald-300/50">
              02. Alltags-Hürden beseitigt
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Konkrete Lösungen</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            Schluss mit Verwirrung: Was dieses E-Book für Sie löst
          </h2>
          <p className="mt-4 text-lg text-stone-700 leading-relaxed">
            Die meisten Menschen scheitern nicht an mangelnder Motivation, sondern an widersprüchlichen Ratschlägen. Dieses Buch räumt die 3 größten Hürden endgültig aus Ihrem Alltag:
          </p>
        </motion.div>

        {/* 3 Main Solved Problems Grid with High-End Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left: 3 Big Pillars with Scroll Animations */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Hürde 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-stone-200/80 shadow-md hover:shadow-xl hover:border-emerald-300 transition-all relative overflow-hidden group"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-800 shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
                    Problem gelöst #1: Keine Ratlosigkeit am Esstisch
                  </div>
                  <h3 className="font-serif-title text-xl font-bold text-stone-900 mb-2">
                    Nie wieder: „Was darf ich denn überhaupt noch essen?”
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Statt sich auf Verbote zu fokussieren, lernen Sie die wahren Helden Ihrer Herzgesundheit kennen: Entdecken Sie, wie <strong>Haferflocken, Hülsenfrüchte, Nüsse und kaltgepresstes Olivenöl</strong> Ihre Arterien schützen und Ihren LDL-Spiegel messbar entlasten – und wie Sie diese Zutaten köstlich zubereiten.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hürde 2 */}
            <motion.div 
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-stone-200/80 shadow-md hover:shadow-xl hover:border-amber-300 transition-all relative overflow-hidden group"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-800 shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">
                    Problem gelöst #2: Mythen-Check
                  </div>
                  <h3 className="font-serif-title text-xl font-bold text-stone-900 mb-2">
                    Glasklare Ordnung bei Fetten, Eiern und Zucker
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Sind Eier nun gefährlich oder gesund? Was unterscheidet LDL- und HDL-Partikel? Wo verstecken sich gefährliche Transfette in vermeintlich „gesunden” Produkten, und wie wirken <strong>Phytosterine</strong> wie ein natürlicher Cholesterin-Filter im Darm? Sie erhalten fundierte, einfache Klarheit.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hürde 3 */}
            <motion.div 
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-stone-200/80 shadow-md hover:shadow-xl hover:border-stone-400 transition-all relative overflow-hidden group"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-stone-200/70 border border-stone-300 flex items-center justify-center text-stone-800 shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-600 uppercase tracking-wider mb-1">
                    Problem gelöst #3: Einkaufs-Souveränität
                  </div>
                  <h3 className="font-serif-title text-xl font-bold text-stone-900 mb-2">
                    Keine Zeit- und Geldverschwendung im Supermarkt
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Verhindern Sie typische Fehlkäufe: Lernen Sie die Zutatenliste und Nährwerttabellen in unter 10 Sekunden richtig zu entschlüsseln. Meiden Sie die <strong>3 häufigsten Stolperfallen</strong>, die den Cholesterinspiegel heimlich in die Höhe treiben.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right: High-Res Ingredients Photography & Outcome Card */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl overflow-hidden border border-stone-200/90 shadow-xl bg-white/95"
            >
              <img
                src="/src/assets/images/mediterranean_heart_foods_1792155492675.jpg"
                alt="Herzgesunde Lebensmittel: Hafer, Nüsse, Linsen, Avocado und Olivenöl"
                className="w-full h-64 sm:h-72 object-cover block"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="p-5 bg-white">
                <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
                  Evidenzbasierte Herzernährung
                </div>
                <h4 className="font-serif-title text-lg font-bold text-stone-900 mb-1">
                  Die Kraft natürlicher Pflanzenstoffe
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Beta-Glucan aus Hafer, gesunde einfach ungesättigte Fettsäuren aus Oliven und Avocados sowie lösliche Ballaststoffe aus Hülsenfrüchten bilden das Fundament.
                </p>
              </div>
            </motion.div>

            {/* The Outcome Result Box */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-gradient-to-br from-stone-950 via-stone-900 to-emerald-950 text-white rounded-2xl p-6 sm:p-7 shadow-xl border border-stone-800 relative overflow-hidden"
            >
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-amber-300 uppercase mb-2">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Ihr konkretes Ergebnis</span>
              </div>
              <h4 className="font-serif-title text-xl font-bold mb-2.5">
                Sicherheit und Genuss bei jeder Mahlzeit
              </h4>
              <p className="text-sm text-stone-300 leading-relaxed mb-4">
                Nach der Lektüre wissen Sie genau, wie Sie Ihren Alltag herzgesund gestalten – ohne quälende Zweifel, ohne Verzicht und mit einfachen Rezepten, die der ganzen Familie schmecken.
              </p>
              <div className="pt-3 border-t border-stone-800 text-xs text-stone-400 flex items-center justify-between">
                <span>Inkl. fertigem 7-Tage-Plan</span>
                <span className="text-emerald-400 font-bold">100% praxisnah</span>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Die 3 häufigsten Stolperfallen (Educational Value Section) with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/90 backdrop-blur-md rounded-3xl border border-stone-200/90 p-6 sm:p-9 shadow-lg"
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-100 border border-amber-300/60">
              Vorschau aus Kapitel 2
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Typische Fehler</span>
          </div>
          <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-stone-900 mb-5">
            Die 3 häufigsten Stolperfallen, die das E-Book aufdeckt:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-1">
            
            <div className="p-5 rounded-2xl bg-stone-50/80 border border-stone-200/80 hover:border-rose-300 transition-colors">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-xs mb-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Stolperfalle #1</span>
              </div>
              <h4 className="font-bold text-stone-900 text-sm mb-1.5">
                Versteckte Transfette in Fertigprodukten
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Als „pflanzlich gehärtet" getarnte Fette in Gebäck und Snacks, die das schädliche LDL massiv anheben.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50/80 border border-stone-200/80 hover:border-amber-300 transition-colors">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-xs mb-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Stolperfalle #2</span>
              </div>
              <h4 className="font-bold text-stone-900 text-sm mb-1.5">
                Die Fett-Angst & die Zucker-Falle
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                „Light"-Produkte, bei denen gesundes Fett gestrichen, aber durch isolierte Stärken und Glukosesirup ersetzt wurde.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50/80 border border-stone-200/80 hover:border-emerald-300 transition-colors">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs mb-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Stolperfalle #3</span>
              </div>
              <h4 className="font-bold text-stone-900 text-sm mb-1.5">
                Ballaststoff-Mangel im Alltag
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Der Körper benötigt täglich lösliche Ballaststoffe, um Cholesterin aus dem Blutkreislauf natürlich abzutransportieren.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
