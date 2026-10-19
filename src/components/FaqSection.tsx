import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { CHECKOUT_URL } from './Header';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'Wie und wann erhalte ich das E-Book nach der Bezahlung?',
    answer: 'Direkt nach erfolgreicher Bestätigung Ihrer Zahlung über den Zahlungsanbieter Hotmart erhalten Sie eine E-Mail mit Ihrem persönlichen Download-Link. Sie können das E-Book sofort als PDF-Datei herunterladen und ohne jede Wartezeit mit dem Lesen beginnen.',
  },
  {
    question: 'Auf welchen Geräten kann ich das E-Book lesen?',
    answer: 'Das Buch ist im universellen PDF-Format gestaltet. Sie können es bequem auf Ihrem Smartphone (iOS & Android), Tablet (z.B. iPad), Laptop, Desktop-PC oder sogar ausdrucken, wenn Sie gedruckte Unterlagen bevorzugen. Sie benötigen keinen speziellen eReader.',
  },
  {
    question: 'Brauche ich teure exotische Nahrungsergänzungsmittel oder Superfoods?',
    answer: 'Nein, keineswegs! Der gesamte Leitfaden und der 7-Tage-Plan basieren auf ganz normalen, erschwinglichen Lebensmitteln aus dem handelsüblichen Supermarkt oder Discounter: Haferflocken, Hülsenfrüchte (Linsen, Bohnen, Kichererbsen), Nüsse, Samen, Gemüse und hochwertiges kaltgepresstes Olivenöl.',
  },
  {
    question: 'Ist der Leitfaden auch für Berufstätige und Familien geeignet?',
    answer: 'Ja, absolut. Der Leitfaden wurde speziell dafür konzipiert, Zeit zu sparen: Die Rezepte sind schnell zubereitet (viele in 10 bis 20 Minuten), die Gerichte lassen sich hervorragend vorkochen oder als Lunchbox ins Büro mitnehmen, und der strukturierte Einkaufszettel erspart langes Suchen.',
  },
  {
    question: 'Muss ich mich nun streng vegan oder vegetarisch ernähren?',
    answer: 'Nein. Obwohl pflanzliche Lebensmittel wie Hafer, Nüsse und Hülsenfrüchte eine Schlüsselrolle spielen, zeigt das Buch auch, wie magerer Fisch (reich an schützenden Omega-3-Fettsäuren) oder Eier in Maßen optimal in einen herzgesunden Alltag passen. Es geht um Balance und gesunde Ergänzungen, nicht um dogmatische Verbote.',
  },
  {
    question: 'Ersetzt der Ratgeber eine ärztliche Behandlung oder Medikamente?',
    answer: 'Nein. Dieses Buch dient rein der Gesundheitsförderung, Information und Prävention. Es ersetzt keinesfalls den individuellen ärztlichen Rat, eine Diagnose oder eine vom Arzt verordnete Therapie (wie z.B. Cholesterinsenker). Sprechen Sie vor größeren Ernährungsumstellungen oder bei Vorerkrankungen immer mit Ihrer behandelnden Ärztin oder Ihrem Arzt.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300/60 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-2.5">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
            <span>Häufig gestellte Fragen</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Antworten auf Ihre wichtigsten Fragen
          </h2>
          <p className="mt-3 text-stone-600 text-base">
            Hier finden Sie alle Details zu Lieferung, Format, Inhalten und Anwendung im Alltag.
          </p>
        </motion.div>

        {/* Accordion with Scroll Animation */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white/95 backdrop-blur-md rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-semibold text-stone-900 text-base hover:text-emerald-900 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-title text-lg sm:text-xl">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-emerald-100 text-emerald-800' : 'text-stone-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 pt-1 text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Reminder with 26,36 € price and Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center bg-gradient-to-r from-emerald-900 via-stone-900 to-emerald-950 text-white border border-stone-800 rounded-3xl p-7 sm:p-10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 max-w-xl mx-auto">
            <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-white mb-2.5">
              Bereit für ein herzgesünderes Leben?
            </h3>
            <p className="text-sm text-stone-300 mb-6 leading-relaxed">
              Laden Sie „Cholesterin neu denken" jetzt für nur <strong>26,36 €</strong> herunter und starten Sie noch heute mit dem 7-Tage-Plan.
            </p>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 transition-all text-sm sm:text-base shadow-lg shadow-emerald-950/40"
            >
              <span>Jetzt E-Book für 26,36 € sichern</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
