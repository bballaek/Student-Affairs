"use client";

import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function VisionSection() {
  const { t } = useLanguage();

  return (
    <section
      id="about-vision"
      className="py-20 bg-[rgba(232,58,0,0.88)] relative overflow-hidden scroll-mt-32"
    >
      <div className="absolute top-0 right-[-10%] w-96 h-96 bg-white/12 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-[1000px] relative z-10 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-8">
          {t('about.vision.title')}
        </h2>
        <p className="font-sans text-xl md:text-2xl text-white/90 leading-relaxed font-medium">
          &ldquo;{t('about.vision.text')}&rdquo;
        </p>
      </div>
    </section>
  );
}
