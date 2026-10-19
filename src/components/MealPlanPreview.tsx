import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CalendarDays, 
  ShoppingBag, 
  Utensils, 
  Check, 
  ArrowRight, 
  Clock, 
  Leaf, 
  Sparkles 
} from 'lucide-react';
import { CHECKOUT_URL } from './Header';

interface DayPlan {
  day: string;
  breakfast: string;
  lunch: string;
  dinner: string;
  snack: string;
  heartBonus: string;
}

const SAMPLE_WEEK: DayPlan[] = [
  {
    day: 'Tag 1 · Montag',
    breakfast: 'Warmer Hafer-Zimt-Porridge mit gehackten Walnüssen & Heidelbeeren',
    lunch: 'Bunter Kichererbsen-Salat mit Gurke, Tomaten, Petersilie & kaltgepresstem Olivenöl',
    dinner: 'Gedämpftes Lachsfilet (oder Tofu) auf mediterranem Ofengemüse mit Kräutern',
    snack: '1 Handvoll ungesalzene Mandeln & grüner Tee',
    heartBonus: 'Reich an Beta-Glucanen und Omega-3',
  },
  {
    day: 'Tag 2 · Dienstag',
    breakfast: 'Vollkornbrot mit reifer Avocado, Zitronenspritzer & Chiasamen',
    lunch: 'Linsen-Gemüse-Eintopf mit Kurkuma, Karotten und frischem Spinat',
    dinner: 'Quinoa-Bowl mit geröstetem Brokkoli, Kürbiskernen und Zitronen-Tahini-Dressing',
    snack: 'Apfelschnitze mit 1 TL Mandelmus',
    heartBonus: 'Phytosterine zur Senkung der Cholesterinaufnahme',
  },
  {
    day: 'Tag 3 · Mittwoch',
    breakfast: 'Beeren-Smoothie-Bowl mit Haferflocken, Leinsamen & Sojajoghurt',
    lunch: 'Mediterraner Thunfisch- oder Bohnensalat mit roten Zwiebeln & Kapern',
    dinner: 'Gebackene Süßkartoffel gefüllt mit schwarzen Bohnen, Mais & frischem Koriander',
    snack: 'Karotten- und Gurkensticks mit hausgemachtem Hummus',
    heartBonus: 'Maximale lösliche Ballaststoffe zur LDL-Bindung',
  },
  {
    day: 'Tag 4 · Donnerstag',
    breakfast: 'Gekochtes Ei auf Dinkelvollkorn-Toast mit Tomatenscheiben & Basilikum',
    lunch: 'Würzige Rote-Linsen-Suppe mit frischem Ingwer & Vollkorn-Croutons',
    dinner: 'Pfannengerührtes Wok-Gemüse mit Edamame, Pilzen & braunem Naturreis',
    snack: 'Walnusskerne mit getrockneten Pflaumen',
    heartBonus: 'Einfach ungesättigte Fettsäuren & Antioxidantien',
  },
];

const SHOPPING_CATEGORIES = [
  {
    title: 'Frischeabteilung & Gemüse',
    items: ['Avocados', 'Spinat & Rucola', 'Brokkoli & Blumenkohl', 'Heidelbeeren / Himbeeren', 'Zitronen & Knoblauch'],
  },
  {
    title: 'Hülsenfrüchte & Vollkorn',
    items: ['Feine zarte Haferflocken', 'Kichererbsen & Linsen', 'Schwarze Bohnen', 'Dinkelvollkornbrot', 'Quinoa oder Naturreis'],
  },
  {
    title: 'Gesunde Fette & Öle',
    items: ['Natives Olivenöl Extra (kaltgepresst)', 'Leinöl (für kalte Speisen)', 'Rapsöl zum sanften Braten'],
  },
  {
    title: 'Nüsse, Samen & Kerne',
    items: ['Walnusskerne', 'Ungesalzene Mandeln', 'Geschrotete Leinsamen', 'Kürbiskerne & Chiasamen'],
  },
];

export const MealPlanPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'plan' | 'shopping' | 'recipes'>('plan');
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  const selectedDay = SAMPLE_WEEK[selectedDayIndex];

  return (
    <section id="wochenplan" className="py-24 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12 text-left"
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2.5">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-100/80 border border-emerald-300/50">
              03. Das Praxispaket
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Konkrete Unterstützung</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            Der fertige 7-Tage-Plan & die Einkaufsliste
          </h2>
          <p className="mt-4 text-lg text-stone-700 leading-relaxed">
            Kein mühsames Überlegen, keine komplizierten Nährwert-Berechnungen. Sie schlagen das E-Book auf und wissen an jedem Wochentag genau, was Sie essen und wie Sie einkaufen.
          </p>
        </motion.div>

        {/* Tab Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-center gap-2 p-1.5 bg-stone-200/80 backdrop-blur-md rounded-2xl max-w-md mb-10 border border-stone-300/70"
        >
          <button
            onClick={() => setActiveTab('plan')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 text-xs sm:text-sm font-bold rounded-xl transition-all ${
              activeTab === 'plan'
                ? 'bg-white text-stone-900 shadow-sm ring-1 ring-stone-900/5'
                : 'text-stone-600 hover:text-stone-950'
            }`}
          >
            <CalendarDays className="w-4 h-4 text-emerald-700" />
            <span>7-Tage-Plan</span>
          </button>

          <button
            onClick={() => setActiveTab('shopping')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 text-xs sm:text-sm font-bold rounded-xl transition-all ${
              activeTab === 'shopping'
                ? 'bg-white text-stone-900 shadow-sm ring-1 ring-stone-900/5'
                : 'text-stone-600 hover:text-stone-950'
            }`}
          >
            <ShoppingBag className="w-4 h-4 text-amber-700" />
            <span>Einkaufsliste</span>
          </button>

          <button
            onClick={() => setActiveTab('recipes')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 text-xs sm:text-sm font-bold rounded-xl transition-all ${
              activeTab === 'recipes'
                ? 'bg-white text-stone-900 shadow-sm ring-1 ring-stone-900/5'
                : 'text-stone-600 hover:text-stone-950'
            }`}
          >
            <Utensils className="w-4 h-4 text-emerald-700" />
            <span>Rezept-Ideen</span>
          </button>
        </motion.div>

        {/* Tab Content 1: 7-Tage Plan */}
        <AnimatePresence mode="wait">
          {activeTab === 'plan' && (
            <motion.div 
              key="tab-plan"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              
              {/* Day Selector Buttons */}
              <div className="lg:col-span-4 space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-2 block">
                  Tage zur Auswahl (Auszug):
                </span>
                {SAMPLE_WEEK.map((item, idx) => (
                  <button
                    key={item.day}
                    onClick={() => setSelectedDayIndex(idx)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${
                      selectedDayIndex === idx
                        ? 'bg-white border-emerald-700 shadow-md ring-2 ring-emerald-700/20 text-stone-900'
                        : 'bg-white/70 backdrop-blur-xs border-stone-200/80 text-stone-600 hover:bg-white hover:border-stone-300'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-bold text-stone-900">{item.day}</div>
                      <div className="text-xs text-stone-500 truncate max-w-[210px] mt-0.5">
                        {item.lunch}
                      </div>
                    </div>
                    <div className={`w-2.5 h-2.5 rounded-full transition-colors ${selectedDayIndex === idx ? 'bg-emerald-600 ring-4 ring-emerald-100' : 'bg-stone-300'}`} />
                  </button>
                ))}

                <div className="pt-2 text-xs text-stone-500 italic">
                  + Weitere 3 Tage sowie flexible Tausch-Optionen im vollständigen E-Book!
                </div>
              </div>

              {/* Selected Day Full Card */}
              <div className="lg:col-span-8 bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-9 border border-stone-200/90 shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-stone-200/70">
                  <div>
                    <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                      Tagesübersicht
                    </span>
                    <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-stone-900">
                      {selectedDay.day}
                    </h3>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold border border-emerald-300/60 flex items-center gap-1.5 shadow-xs">
                    <Leaf className="w-3.5 h-3.5 text-emerald-700" />
                    <span>{selectedDay.heartBonus}</span>
                  </div>
                </div>

                {/* Meals */}
                <div className="mt-6 space-y-4">
                  
                  <div className="p-4 rounded-2xl bg-stone-50/90 border border-stone-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-emerald-200 transition-colors">
                    <div className="flex items-start gap-3">
                      <span className="px-2.5 py-1 bg-stone-200 text-stone-900 text-xs font-bold rounded-lg shrink-0">
                        Frühstück
                      </span>
                      <p className="text-sm text-stone-800 font-medium">
                        {selectedDay.breakfast}
                      </p>
                    </div>
                    <span className="text-xs text-stone-400 shrink-0">ca. 5 Min.</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50/90 border border-stone-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-emerald-200 transition-colors">
                    <div className="flex items-start gap-3">
                      <span className="px-2.5 py-1 bg-emerald-100 text-emerald-900 text-xs font-bold rounded-lg shrink-0">
                        Mittagessen
                      </span>
                      <p className="text-sm text-stone-800 font-medium">
                        {selectedDay.lunch}
                      </p>
                    </div>
                    <span className="text-xs text-emerald-800 font-medium shrink-0">Ideal to-go</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50/90 border border-stone-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-emerald-200 transition-colors">
                    <div className="flex items-start gap-3">
                      <span className="px-2.5 py-1 bg-stone-200 text-stone-900 text-xs font-bold rounded-lg shrink-0">
                        Abendessen
                      </span>
                      <p className="text-sm text-stone-800 font-medium">
                        {selectedDay.dinner}
                      </p>
                    </div>
                    <span className="text-xs text-stone-400 shrink-0">Warm & bekömmlich</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-start gap-3">
                      <span className="px-2.5 py-1 bg-amber-200/80 text-amber-950 text-xs font-bold rounded-lg shrink-0">
                        Herz-Snack
                      </span>
                      <p className="text-sm text-stone-800 font-medium">
                        {selectedDay.snack}
                      </p>
                    </div>
                    <span className="text-xs text-amber-800 font-semibold shrink-0">Gegen Heißhunger</span>
                  </div>

                </div>

                <div className="mt-8 pt-6 border-t border-stone-200/70 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-stone-500">
                    Alle Mengenangaben, Nährwert-Erklärungen und Alternativen direkt im E-Book.
                  </span>
                  <a
                    href={CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-700 underline"
                  >
                    <span>Gesamten 7-Tage-Plan sichern</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </motion.div>
          )}

          {/* Tab Content 2: Einkaufsliste */}
          {activeTab === 'shopping' && (
            <motion.div 
              key="tab-shopping"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              
              <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-stone-200 shadow-xl">
                <img
                  src="/src/assets/images/meal_plan_shopping_guide_1792155493284.jpg"
                  alt="Wochenplan und Einkaufsliste"
                  className="w-full h-84 object-cover block"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="lg:col-span-7 bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-9 border border-stone-200/90 shadow-xl">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">
                  <ShoppingBag className="w-4 h-4" />
                  <span>Stressfrei Einkaufen</span>
                </div>
                <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-stone-900 mb-3">
                  Die praxiserprobte Supermarkt-Einkaufsliste
                </h3>
                <p className="text-sm text-stone-600 mb-6 leading-relaxed">
                  Kein langes Suchen vor dem Regal. Die Liste ist nach gewohnten Supermarkt-Gängen geordnet, sodass Sie in wenigen Minuten alle Zutaten für die ganze Woche beisammen haben – ohne teure exotische Spezialprodukte.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SHOPPING_CATEGORIES.map((cat) => (
                    <div key={cat.title} className="p-4 rounded-2xl bg-stone-50/80 border border-stone-200/80">
                      <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2.5">
                        {cat.title}
                      </h4>
                      <ul className="space-y-2 text-xs text-stone-700">
                        {cat.items.map((it) => (
                          <li key={it} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[2.5]" />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          )}

          {/* Tab Content 3: Rezepte */}
          {activeTab === 'recipes' && (
            <motion.div 
              key="tab-recipes"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-7 border border-stone-200/80 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-full border border-emerald-200">
                    Frühstück & Energie
                  </span>
                  <h4 className="font-serif-title text-xl font-bold text-stone-900 mt-4 mb-2.5">
                    Herz-Vital Hafer-Zimt-Bowl
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    Haferflocken liefern den löslichen Ballaststoff Beta-Glucan, der nachweislich Gallensäuren im Darm bindet und den Körper anregt, überschüssiges Cholesterin abzubauen.
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 5 Minuten</span>
                  <span className="text-emerald-700 font-bold">Ballaststoff-Star</span>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-7 border border-stone-200/80 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100/80 px-2.5 py-1 rounded-full border border-amber-200">
                    Mittagessen & Büro
                  </span>
                  <h4 className="font-serif-title text-xl font-bold text-stone-900 mt-4 mb-2.5">
                    Linsen-Walnuss-Salat
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    Knackige Walnusskerne mit Alpha-Linolensäure (pflanzliche Omega-3-Fettsäure) vereint mit sättigenden Berglinsen und einem frischen Zitronen-Olivenöl-Dressing.
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 15 Minuten</span>
                  <span className="text-amber-700 font-bold">Perfekt to go</span>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-7 border border-stone-200/80 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-800 bg-stone-200/80 px-2.5 py-1 rounded-full border border-stone-300">
                    Abendessen & Genuss
                  </span>
                  <h4 className="font-serif-title text-xl font-bold text-stone-900 mt-4 mb-2.5">
                    Mediterranes Ofengemüse mit Kräuter-Dip
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    Buntes Gemüse, reich an schützenden Polyphenolen, schonend im Ofen mit reichlich nativem Olivenöl extra geröstet – lecker, sättigend und herzschonend.
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 20 Minuten</span>
                  <span className="text-stone-800 font-bold">Familienfreundlich</span>
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
