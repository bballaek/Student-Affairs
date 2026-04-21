"use client";

import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { BadgeDollarSign, Building2, HelpingHand, Utensils, Award, LifeBuoy, Trophy } from 'lucide-react';

export default function ScholarshipCards() {
  const { t } = useLanguage();

  const cards = [
    { icon: BadgeDollarSign, title: 'scholarships.s1.h4', desc: 'scholarships.s1.p', badge: 'scholarships.s1.badge' },
    { icon: Building2, title: 'scholarships.s2.h4', desc: 'scholarships.s2.p', badge: 'scholarships.s2.badge' },
    { icon: HelpingHand, title: 'scholarships.s3.h4', desc: 'scholarships.s3.p', badge: 'scholarships.s3.badge' },
    { icon: Utensils, title: 'scholarships.s4.h4', desc: 'scholarships.s4.p', badge: 'scholarships.s4.badge' },
    { icon: Award, title: 'scholarships.s5.h4', desc: 'scholarships.s5.p', badge: 'scholarships.s5.badge' },
    { icon: LifeBuoy, title: 'scholarships.s6.h4', desc: 'scholarships.s6.p', badge: 'scholarships.s6.badge' },
    { icon: Trophy, title: 'scholarships.s7.h4', desc: 'scholarships.s7.p', badge: 'scholarships.s7.badge' },
  ];

  return (
    <section id="welfare-scholarships" className="py-20 bg-gray-50 border-y border-gray-100 relative scroll-mt-32">
      <div className="container mx-auto px-4 md:px-8 max-w-[1280px] relative z-10">
        <h2 className="text-center font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-16">
          {t('scholarships.h2')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 mx-auto bg-primary/5 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon className="w-10 h-10" />
                </div>
                <h4 className="font-heading font-bold text-xl text-gray-900 mb-3">
                  {t(card.title)}
                </h4>
                <p className="font-sans text-gray-600 text-sm leading-relaxed">
                  {t(card.desc)}
                </p>
                <div className="mt-5">
                  <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                    {t(card.badge)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
