"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../i18n/LanguageContext';

export default function IntroSection() {
  const { t } = useLanguage();

  const tagline = String(t('about.intro.h2')).replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

  return (
    <section
      id="about-history"
      className="py-10 md:py-14 bg-primary text-white scroll-mt-32"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/img/chula-faculty-education-hero-desktop-2.jpg"
                  alt="Faculty of Education, Chulalongkorn University"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="font-heading font-bold text-3xl md:text-4xl leading-tight">
              {t('about.h1')}
            </h2>

            <p className="mt-4 md:mt-5 font-sans font-normal text-white/95 text-base md:text-lg leading-relaxed">
              &ldquo; {t('about.intro.p1')} &rdquo;
            </p>

            <div className="mt-8 md:mt-10 flex justify-end">
              <p className="font-heading font-bold text-2xl md:text-3xl leading-snug text-white">
                {tagline || t('about.intro.p2')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
