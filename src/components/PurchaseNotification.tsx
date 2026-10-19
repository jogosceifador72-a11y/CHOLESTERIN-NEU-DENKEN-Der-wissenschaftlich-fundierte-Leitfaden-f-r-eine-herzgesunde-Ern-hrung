import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ShieldCheck, X } from 'lucide-react';

interface NotificationData {
  id: number;
  timeAgo: string;
  region: string;
}

const NOTIFICATIONS: NotificationData[] = [
  { id: 1, timeAgo: 'Vor 2 Minuten', region: 'Deutschland' },
  { id: 2, timeAgo: 'Vor 5 Minuten', region: 'Österreich' },
  { id: 3, timeAgo: 'Vor 8 Minuten', region: 'Schweiz' },
  { id: 4, timeAgo: 'Vor 14 Minuten', region: 'Deutschland' },
  { id: 5, timeAgo: 'Vor 19 Minuten', region: 'Deutschland' },
  { id: 6, timeAgo: 'Vor 26 Minuten', region: 'Österreich' },
];

export const PurchaseNotification: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // First appearance after 3 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3200);

    return () => clearTimeout(initialTimer);
  }, [isDismissed]);

  useEffect(() => {
    if (isDismissed || !isVisible) return;

    // Show for 5 seconds, then hide for 6 seconds, then switch to next item
    const hideTimer = setTimeout(() => {
      setIsVisible(false);

      const nextTimer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % NOTIFICATIONS.length);
        setIsVisible(true);
      }, 5000);

      return () => clearTimeout(nextTimer);
    }, 5500);

    return () => clearTimeout(hideTimer);
  }, [isVisible, currentIndex, isDismissed]);

  if (isDismissed) return null;

  const current = NOTIFICATIONS[currentIndex];

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm pointer-events-auto">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3.5 bg-white/95 backdrop-blur-md border border-emerald-900/10 shadow-xl shadow-stone-900/8 rounded-xl p-3.5 pr-8 relative text-stone-900 group"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 text-emerald-600">
              <CheckCircle2 className="w-5 h-5" />
            </div>

            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-xs tracking-tight text-emerald-800">
                  Kauf bestätigt
                </span>
                <span className="text-[11px] text-stone-400">·</span>
                <span className="text-[11px] text-stone-500 font-medium">
                  {current.timeAgo}
                </span>
              </div>
              <p className="text-xs text-stone-700 font-medium mt-0.5">
                Cholesterin neu denken (E-Book PDF)
              </p>
              <div className="flex items-center gap-1 text-[11px] text-stone-400 mt-0.5">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                <span>Verifizierte Transaktion ({current.region})</span>
              </div>
            </div>

            <button
              onClick={() => setIsDismissed(true)}
              aria-label="Benachrichtigung schließen"
              className="absolute top-2 right-2 text-stone-400 hover:text-stone-700 transition-colors p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
