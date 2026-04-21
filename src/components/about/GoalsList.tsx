"use client";

import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

export default function GoalsList() {
  const { t } = useLanguage();

  return (
    <section id="about-goals" className="py-16 md:py-20 bg-white border-t border-gray-100 scroll-mt-32">
      <div className="container mx-auto px-4 md:px-8 max-w-[900px]">
        <SectionHeading className="mb-14" title={t('about.goal.h2')} />

        <div className="flex flex-col gap-4">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="group relative overflow-hidden rounded-lg bg-[#4a4a4a] border border-white/10"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/10 via-white/0 to-white/0" />

              <div className="relative flex items-start gap-4 px-6 md:px-8 py-5 md:py-6">
                <div className="shrink-0">
                  <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center">
                    <span className="font-heading font-bold text-white">
                      {num}
                    </span>
                  </div>
                </div>

                <p className="font-heading font-bold text-white text-lg md:text-xl leading-snug flex-1 pr-12">
                  {t(`about.goal${num}`)}
                </p>

                <div className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 text-white/90 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-[calc(50%+2px)]">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
