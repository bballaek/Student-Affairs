"use client";

import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Stethoscope, ShieldPlus, Globe } from 'lucide-react';

export default function HealthCards() {
  const { t } = useLanguage();

  const cards = [
    { icon: Stethoscope, title: 'scholarships.h1.h4', desc: 'scholarships.h1.p', badge: 'scholarships.h1.badge' },
    { icon: ShieldPlus, title: 'scholarships.h2.h4', desc: 'scholarships.h2.p', badge: 'scholarships.h2.badge' },
    { icon: Globe, title: 'scholarships.h3.h4', desc: 'scholarships.h3.p', badge: 'scholarships.h3.badge' }
  ];

  return (
    <section
      id="welfare-health"
      className="py-20 bg-white border-b border-gray-100 relative overflow-hidden scroll-mt-32"
    >
      <div
        aria-hidden
        className="absolute -top-24 right-[-10%] w-[420px] h-[420px] bg-emerald-500/10 rounded-full blur-[90px] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 left-[-10%] w-[420px] h-[420px] bg-sky-500/10 rounded-full blur-[90px] pointer-events-none"
      />
      <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
        <h2 className="text-center font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-16">
          {t('scholarships.health.h2')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="group rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_50px_rgba(0,0,0,0.10)] transition-all duration-500 overflow-hidden"
              >
                <div className="p-6 md:p-7">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="min-w-0">
                      <h4 className="font-heading font-bold text-lg md:text-xl text-gray-900 leading-snug">
                        {t(card.title)}
                      </h4>
                      <p className="mt-2 font-sans text-gray-600 text-sm leading-relaxed">
                        {t(card.desc)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold px-4 py-2">
                      {t(card.badge)}
                    </span>
                    <span className="font-heading font-normal text-xs text-gray-500">
                      {t("scholarships.breadcrumb.current")}
                    </span>
                  </div>
                </div>

                <div className="h-1 bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500 opacity-60" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
