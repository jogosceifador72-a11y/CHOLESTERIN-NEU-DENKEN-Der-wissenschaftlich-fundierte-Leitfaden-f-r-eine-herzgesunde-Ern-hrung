import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatIsIt } from './components/WhatIsIt';
import { WhatItSolves } from './components/WhatItSolves';
import { MealPlanPreview } from './components/MealPlanPreview';
import { TargetAudience } from './components/TargetAudience';
import { OfferPricing } from './components/OfferPricing';
import { FaqSection } from './components/FaqSection';
import { SocialFooter } from './components/SocialFooter';
import { PurchaseNotification } from './components/PurchaseNotification';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden text-stone-900 selection:bg-amber-200 selection:text-amber-950">
      
      {/* Dynamic ambient background blobs that flow along the scroll */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-200/25 rounded-full blur-[120px] transform -translate-y-1/2" />
        <div className="absolute top-1/3 right-5 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-[110px]" />
        <div className="absolute top-2/3 left-10 w-[550px] h-[550px] bg-emerald-100/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-1/4 w-[650px] h-[650px] bg-amber-100/25 rounded-full blur-[130px]" />
      </div>

      {/* Fixed/Sticky Navigation */}
      <Header />

      {/* Main Landing Page Content Flow with Scroll Animations */}
      <main className="flex-1">
        {/* 1. Hero Section with 3D Book Mockup & CTA (26,36 €) */}
        <Hero />

        {/* 2. "Was ist das?" - Das Konzept & Format */}
        <WhatIsIt />

        {/* 3. "Was löst es?" - Hürden, Mythen & die 3 Stolperfallen */}
        <WhatItSolves />

        {/* 4. Der 7-Tage-Plan, Rezepte & Supermarkt-Einkaufsliste */}
        <MealPlanPreview />

        {/* 5. "Für wen ist es?" vs. "Nicht für wen ist es?" + Medizinischer Hinweis */}
        <TargetAudience />

        {/* 6. Das Verkaufsangebot & Checkout Box (Hotmart 26,36 €) */}
        <OfferPricing />

        {/* 7. Häufig gestellte Fragen (FAQ) */}
        <FaqSection />
      </main>

      {/* Footer with all requested Social Media Contact Buttons */}
      <SocialFooter />

      {/* Floating Live Purchase Notification on Bottom Left (without names) */}
      <PurchaseNotification />
    </div>
  );
}
