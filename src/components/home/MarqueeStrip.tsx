"use client";

import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function MarqueeStrip() {
  const { t } = useLanguage();

  const items = [
    t('index.marquee.insurance'),
    t('index.marquee.service'),
    t('index.marquee.projects'),
  ];

  // Double the array for seamless scrolling
  const marqueeItems = [...items, ...items];

  return (
    <div className="bg-primary text-white py-4 overflow-hidden relative border-y border-white/10 shadow-inner group">
      <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
        {marqueeItems.map((item, index) => (
          <div key={index} className="flex items-center mx-4 md:mx-8">
             <span className="font-heading text-lg md:text-xl font-normal tracking-wide opacity-90">
               {item}
             </span>
             <span className="ml-8 md:ml-16 w-2 h-2 rounded-full bg-gold opacity-50"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
