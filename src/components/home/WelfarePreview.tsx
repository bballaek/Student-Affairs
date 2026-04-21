"use client";

import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import Reveal from "../ui/Reveal";

export default function WelfarePreview() {
  const { t } = useLanguage();
  const welfareDesc = t('index.welfare.p');
  const showWelfareDesc = Boolean(welfareDesc) && welfareDesc !== 'index.welfare.p';

  const cards = [
    {
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop",
      title: 'index.welfare.card1.h4',
      desc: 'index.welfare.card1.p',
    },
    {
      image: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?q=80&w=1600&auto=format&fit=crop",
      title: 'index.welfare.card2.h4',
      desc: 'index.welfare.card2.p',
    },
    {
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop",
      title: 'index.welfare.card3.h4',
      desc: 'index.welfare.card3.p',

    },
    {
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop",
      title: 'index.welfare.card4.h4',
      desc: 'index.welfare.card4.p',

    }
  ];

  return (
    <section id="welfare" className="relative overflow-hidden py-14 md:py-16 bg-white border-y border-gray-100">
      {/* Soft orange gradient like reference */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,245,235,1) 0%, rgba(255,230,214,1) 35%, rgba(232,58,0,0.90) 100%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 max-w-[1280px] relative z-10">
        <Reveal>
          <div className="flex items-end gap-5 mb-10">
            <h2 className="font-heading font-normal text-3xl md:text-4xl text-gray-900 leading-tight whitespace-nowrap">
              {t('index.welfare.h2')}
            </h2>
            <div className="flex-1 border-b border-gray-300 mb-2" />
            <Link
              href="/scholarships"
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-black text-white !text-white hover:!text-white visited:!text-white font-heading font-normal text-sm hover:bg-gray-900 transition-colors whitespace-nowrap group"
            >
              <span className="text-white !text-white">{t('index.welfare.seeall')}</span>
              <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
            </Link>
          </div>
        </Reveal>

        {/* Cards like reference screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {cards.map((card, i) => (
            <Link
              key={i}
              href="/scholarships"
              className="group relative overflow-hidden border border-gray-200 bg-gray-900"
              aria-label={t(card.title)}
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={card.image}
                  alt={t(card.title)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/45 backdrop-blur-[3px]" />
              </div>

              {/* Centered text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <h4 className="font-heading font-normal text-white text-xl leading-snug">
                  {t(card.title)}
                </h4>
                <p className="mt-2 font-sans text-white/80 text-sm leading-relaxed line-clamp-2 max-w-[22rem]">
                  {t(card.desc)}
                </p>
              </div>

              {/* Bottom link line */}
              <div className="absolute inset-x-0 bottom-0 px-6 py-4">
                <div className="flex items-center justify-center gap-2 text-white/80 group-hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4" />
                  <span className="font-heading font-normal text-sm">
                    {t('index.welfare.seeall')}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Reveal delayMs={80}>
          <div className="mt-8 flex justify-center md:hidden">
            <Link
              href="/scholarships"
              className="inline-flex items-center justify-center w-full bg-black py-4 text-white !text-white hover:!text-white visited:!text-white active:bg-gray-900 font-heading font-normal group"
            >
              <span className="text-white !text-white">{t('index.welfare.seeall')}</span>
              <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
            </Link>
          </div>
        </Reveal>

        {/* Desktop button is in the header row */}
      </div>
    </section>
  );
}
