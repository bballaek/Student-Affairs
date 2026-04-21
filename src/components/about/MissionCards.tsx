"use client";

import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Flag, Shield, Users, Trophy } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

export default function MissionCards() {
  const { t } = useLanguage();

  const cards = [
    { icon: Flag, title: 'about.mcard1.h3', desc: 'about.mcard1.p' },
    { icon: Shield, title: 'about.mcard2.h3', desc: 'about.mcard2.p' },
    { icon: Users, title: 'about.mcard3.h3', desc: 'about.mcard3.p' },
    { icon: Trophy, title: 'about.mcard4.h3', desc: 'about.mcard4.p' },
  ];

  return (
    <section id="about-mission" className="py-20 lg:py-32 bg-white scroll-mt-32">
      <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
        <SectionHeading className="mb-16" title={t('about.mission.h2')} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 mx-auto bg-primary/5 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-4">
                  {t(card.title)}
                </h3>
                <p className="font-sans text-gray-600 text-sm leading-relaxed">
                  {t(card.desc)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
