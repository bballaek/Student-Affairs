"use client";

import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import Reveal from "../ui/Reveal";

export default function AboutPreview() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-8 max-w-[1280px] py-16 md:py-20">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-normal text-gray-900 text-3xl md:text-4xl leading-tight">
              กลุ่มภารกิจกิจการนิสิต
            </h2>
            <p
              className="mt-5 font-sans text-gray-700 text-base md:text-lg leading-relaxed"
              style={{ fontFamily: 'ChulaLongkorn, var(--font-sans)' }}
            >
              {t('index.about.p')}
            </p>
          </div>
        </Reveal>
      </div>

    </section>
  );
}
