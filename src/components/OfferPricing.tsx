import React from 'react';
import { motion } from 'motion/react';
import { 
  Check, 
  ArrowRight, 
  Lock, 
  Sparkles, 
  Zap,
  MailCheck,
  ShieldCheck
} from 'lucide-react';
import { CHECKOUT_URL } from './Header';

export const OfferPricing: React.FC = () => {
  return (
    <section id="angebot" className="py-24 bg-gradient-to-b from-stone-950 via-stone-900 to-emerald-950 text-stone-100 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-900/80 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Exklusives Online-Angebot</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Investieren Sie heute in Ihre Herzgesundheit
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            Erhalten Sie sofortigen Zugang zum vollständigen Leitfaden, dem 7-Tage-Plan und allen Praxishilfen für eine einmalige Schutzgebühr.
          </p>
        </motion.div>

        {/* Pricing Card with Scroll Reveal & Hover Depth */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-stone-900/95 backdrop-blur-xl border border-emerald-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-600" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: What's inside */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Das Komplettpaket beinhaltet:
                </span>
                <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-white mt-1">
                  E-Book: Cholesterin neu denken
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-1">
                  Der wissenschaftlich fundierte Leitfaden für eine herzgesunde Ernährung im Alltag.
                </p>
              </div>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-900/80 border border-emerald-500/50 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-sm text-stone-200">
                    <strong>Vollständiges E-Book (PDF)</strong> – Sofort lesbar auf Smartphone, Tablet & Computer
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-900/80 border border-emerald-500/50 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-sm text-stone-200">
                    <strong>Fertiger 7-Tage-Mahlzeitenplan</strong> – Frühstück, Mittag, Abendessen & Snacks
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-900/80 border border-emerald-500/50 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-sm text-stone-200">
                    <strong>Praktische Supermarkt-Einkaufsliste</strong> – Geordnet nach Regalen, zeitsparend
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-900/80 border border-emerald-500/50 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-sm text-stone-200">
                    <strong>Mythen-Entzauberung</strong> – LDL vs. HDL, Eier, Fette & die Wirkung von Phytosterinen
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-900/80 border border-emerald-500/50 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-sm text-stone-200">
                    <strong>Die 3 häufigsten Alltags-Stolperfallen</strong> und wie Sie Etiketten richtig lesen
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-stone-300">
                <span className="flex items-center gap-1.5">
                  <MailCheck className="w-4 h-4 text-emerald-400" />
                  E-Mail-Zustellung direkt nach Kauf
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-amber-400" />
                  Kein Abo, keine Folgekosten
                </span>
              </div>
            </div>

            {/* Right: Checkout Box with Price and Button */}
            <div className="lg:col-span-5 bg-stone-950/90 border border-stone-800 rounded-2xl p-6 sm:p-8 text-center space-y-5 shadow-inner">
              <div>
                <span className="text-xs text-stone-400 line-through">
                  Regulärer Preis: 49,00 €
                </span>
                <div className="mt-1 flex items-baseline justify-center gap-1">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                    26,36 €
                  </span>
                </div>
                <div className="text-xs text-emerald-400 mt-1 font-semibold">
                  Einmalige Zahlung · Inkl. gesetzlicher MwSt.
                </div>
              </div>

              {/* Big CTA */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 transition-all shadow-xl shadow-emerald-950/50 text-base group"
              >
                <span>Jetzt für 26,36 € sichern</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <p className="text-[11px] text-stone-400">
                Klicken Sie auf den Button, um sicher über Hotmart zu bestellen.
              </p>

              {/* Security Badges */}
              <div className="pt-4 border-t border-stone-800 space-y-2 text-xs text-stone-400">
                <div className="flex items-center justify-center gap-2 text-stone-300">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-medium">256-Bit SSL-Verschlüsselung</span>
                </div>
                <div className="flex items-center justify-center gap-4 text-[11px] text-stone-400">
                  <span>Hotmart Secure</span>
                  <span>·</span>
                  <span>Sofortiger Download</span>
                  <span>·</span>
                  <span>100% Sicher</span>
                </div>
              </div>

            </div>

          </div>

        </motion.div>

        {/* Small reassurance note */}
        <div className="mt-8 text-center text-xs text-stone-400">
          Haben Sie Fragen vor dem Kauf? Nutzen Sie die Social-Media-Kontaktbuttons im Seitenende.
        </div>

      </div>
    </section>
  );
};
