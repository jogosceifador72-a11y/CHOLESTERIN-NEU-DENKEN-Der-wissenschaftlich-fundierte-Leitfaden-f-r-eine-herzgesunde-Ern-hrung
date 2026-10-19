import React from 'react';
import { motion } from 'motion/react';
import { Check, X, ShieldAlert, Sparkles } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  return (
    <section id="fuer-wen" className="py-24 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

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
              04. Transparenz & Eignung
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Entscheidungshilfe</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            Ist dieser Leitfaden das Richtige für Sie?
          </h2>
          <p className="mt-4 text-lg text-stone-700 leading-relaxed">
            Wir möchten, dass Sie genau wissen, was Sie erwartet. Ehrliche Orientierung statt falscher Heilversprechen:
          </p>
        </motion.div>

        {/* Side-by-Side Comparison with Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* FÜR SIE */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="bg-white/95 backdrop-blur-md rounded-3xl p-7 sm:p-9 border-2 border-emerald-600/30 shadow-xl shadow-emerald-950/5 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-100/60 rounded-bl-full pointer-events-none" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-5 border border-emerald-300/60 shadow-xs">
                <Check className="w-3.5 h-3.5 stroke-[3] text-emerald-700" />
                <span>Für Sie geeignet, wenn Sie …</span>
              </div>

              <h3 className="font-serif-title text-2xl font-bold text-stone-900 mb-5">
                Eine einfache, alltagstaugliche Lösung suchen
              </h3>

              <ul className="space-y-4 text-sm text-stone-700">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>
                    Ihre Ernährung <strong>ohne Komplikationen und ohne quälende Verbote</strong> herzgesund gestalten möchten.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>
                    <strong>Einsteiger sind</strong> und eine klare, verlässliche Orientierung im Dschungel der Ernährungstrends und Laborbegriffe brauchen.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>
                    Eine <strong>praxisnahe Methode suchen</strong>, die Sie sofort bei Ihrem nächsten Supermarkt-Besuch umsetzen können.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>
                    Ihr Herz und Ihre Blutgefäße langfristig und nachhaltig schützen wollen.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-emerald-100 text-xs font-bold text-emerald-800 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Praxiserprobt & sofort digital verfügbar</span>
            </div>
          </motion.div>

          {/* NICHT FÜR SIE */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="bg-stone-100/90 backdrop-blur-md rounded-3xl p-7 sm:p-9 border border-stone-300/80 shadow-md flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200 text-stone-700 text-xs font-bold uppercase tracking-wider mb-5 border border-stone-300">
                <X className="w-3.5 h-3.5 stroke-[3]" />
                <span>Nicht für Sie geeignet, wenn Sie …</span>
              </div>

              <h3 className="font-serif-title text-2xl font-bold text-stone-900 mb-5">
                Wunder erwarten oder nur Theorie lesen wollen
              </h3>

              <ul className="space-y-4 text-sm text-stone-600">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>
                    Unrealistische <strong>„Wunderergebnisse" über Nacht erwarten</strong>, ohne selbst auch nur eine einzige Gewohnheit oder Zutat im Alltag umzustellen.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>
                    <strong>Lange, trockene akademische Theorien</strong> und biochemische Formeln einem direkten, leicht lesbaren Handlungsleitfaden vorziehen.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>
                    Auf der Suche nach einer kurzzeitigen Hunger-Diät sind statt nach einer dauerhaft angenehmen Ernährungsweise.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-stone-200 text-xs text-stone-500">
              Klarheit spart Zeit: Ehrliche Inhalte für echte Menschen.
            </div>
          </motion.div>

        </div>

        {/* Wichtiger Hinweis Box with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-amber-100/80 backdrop-blur-md border border-amber-300/80 rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row items-start gap-4 shadow-md"
        >
          <div className="w-11 h-11 rounded-2xl bg-amber-200/90 flex items-center justify-center text-amber-900 shrink-0">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div className="space-y-1 text-sm text-stone-800">
            <h4 className="font-bold text-stone-900 text-base">
              Wichtiger medizinischer Hinweis:
            </h4>
            <p className="text-stone-700 leading-relaxed text-xs sm:text-sm">
              Dieses E-Book dient der allgemeinen Information, Prävention und Orientierung und ersetzt keinesfalls den ärztlichen Rat, eine individuelle Diagnose oder eine verordnete Therapie. Besprechen Sie geplante Veränderungen bei bestehenden Vorerkrankungen oder Medikamenteneinnahme stets mit Ihrer behandelnden Ärztin oder Ihrem behandelnden Arzt.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
