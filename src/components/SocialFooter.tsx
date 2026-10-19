import React from 'react';
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  Share2, 
  Heart, 
  ExternalLink,
  ShieldCheck,
  Mail
} from 'lucide-react';

interface SocialLink {
  title: string;
  subtitle: string;
  url: string;
  icon: React.ReactNode;
  colorClass: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    title: 'Instagram',
    subtitle: '@karinzeit',
    url: 'https://www.instagram.com/karinzeit?stkn=NmZiY2VzaW1leXlo',
    icon: <Instagram className="w-4 h-4" />,
    colorClass: 'hover:border-pink-300 hover:text-pink-600 hover:bg-pink-50/50',
  },
  {
    title: 'Facebook Profil',
    subtitle: 'Karin Zeit',
    url: 'https://www.facebook.com/share/1c8J76URqe/',
    icon: <Facebook className="w-4 h-4" />,
    colorClass: 'hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50/50',
  },
  {
    title: 'Facebook Seite',
    subtitle: 'Offizielle Seite',
    url: 'https://www.facebook.com/share/1DzZyfFWRL/',
    icon: <Facebook className="w-4 h-4" />,
    colorClass: 'hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50/50',
  },
  {
    title: 'TikTok',
    subtitle: '@karinzeit',
    url: 'https://www.tiktok.com/@karinzeit',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.37 6.37 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 10.82 4.48 6.3 6.3 0 0 0 1.86-4.5V9.03a8.28 8.28 0 0 0 5.2 1.82V7.4a4.88 4.88 0 0 1-1.43-.71z"/>
      </svg>
    ),
    colorClass: 'hover:border-stone-900 hover:text-stone-900 hover:bg-stone-100',
  },
  {
    title: 'YouTube',
    subtitle: '@karinzeit',
    url: 'https://youtube.com/@karinzeit?si=prrRmxwtRBUQ0sit',
    icon: <Youtube className="w-4 h-4" />,
    colorClass: 'hover:border-red-300 hover:text-red-600 hover:bg-red-50/50',
  },
  {
    title: 'Threads',
    subtitle: '@karinzeit',
    url: 'https://www.threads.com/@karinzeit',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12.186 24C5.586 24 0 18.525 0 12.051 0 5.578 5.586 0 12.186 0c6.48 0 11.83 5.342 11.814 11.823v.228h-3.52v-.228c0-4.606-3.738-8.344-8.294-8.344-4.58 0-8.318 3.738-8.318 8.344 0 4.606 3.738 8.344 8.318 8.344 3.018 0 5.68-1.637 7.158-4.108l3.056 1.77C20.443 21.365 16.634 24 12.186 24zm1.266-7.852a3.864 3.864 0 0 1-3.864-3.864c0-2.134 1.73-3.864 3.864-3.864a3.864 3.864 0 0 1 3.864 3.864c0 2.134-1.73 3.864-3.864 3.864z"/>
      </svg>
    ),
    colorClass: 'hover:border-stone-900 hover:text-stone-900 hover:bg-stone-100',
  },
  {
    title: 'Kwai',
    subtitle: '@kariningrid673',
    url: 'https://k.kwai.com/u/@kariningrid673/NxhDbbCg',
    icon: <Share2 className="w-4 h-4" />,
    colorClass: 'hover:border-amber-400 hover:text-amber-600 hover:bg-amber-50/50',
  },
];

export const SocialFooter: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-200 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-stone-800/80">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif-title text-2xl tracking-tight text-white font-semibold">
                CHOLESTERIN NEU DENKEN
              </span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed max-w-md">
              Der wissenschaftlich fundierte Leitfaden für eine herzgesunde Ernährung im Alltag. Einfach umsetzbare Schritte, verständliche Fakten und alltagstaugliche Rezepte.
            </p>
            <div className="flex items-center gap-3 text-xs text-stone-400 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Sichere Auslieferung via Hotmart · Sofortiger PDF-Zugang</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
                Verbinden & Folgen
              </h3>
              <span className="text-xs text-stone-400">Offizielle Social-Media-Kanäle</span>
            </div>

            {/* Social Buttons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-stone-800/70 border border-stone-700/60 text-stone-300 transition-all duration-200 group ${link.colorClass}`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="shrink-0 text-stone-400 group-hover:text-current transition-colors">
                      {link.icon}
                    </span>
                    <div className="truncate">
                      <div className="text-xs font-medium text-stone-200 group-hover:text-current transition-colors truncate">
                        {link.title}
                      </div>
                      <div className="text-[11px] text-stone-400 truncate">
                        {link.subtitle}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-500 group-hover:text-current opacity-70 group-hover:opacity-100 transition-all shrink-0 ml-1.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Medical disclaimer */}
        <div className="py-8 text-xs text-stone-400 leading-relaxed space-y-2 border-b border-stone-800/80">
          <p className="font-semibold text-stone-300">Medizinischer Hinweis & Haftungsausschluss:</p>
          <p>
            Dieses E-Book und die enthaltenen Empfehlungen dienen ausschließlich Informations- und Bildungszwecken und stellen keinen ärztlichen Rat, keine medizinische Diagnose und keine Behandlung dar. Die Ratschläge ersetzen nicht die Konsultation einer qualifizierten Ärztin oder eines qualifizierten Arztes. Nehmen Sie bei gesundheitlichen Beschwerden oder Fragen zu Ihren Laborwerten stets Rücksprache mit medizinischem Fachpersonal. Setzen Sie verschriebene Medikamente niemals eigenmächtig ab.
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Karin Zeit · Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-6">
            <span>Lieferung: Sofortiger PDF-Download</span>
            <span aria-hidden="true">·</span>
            <span>Abwicklung: Hotmart</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
