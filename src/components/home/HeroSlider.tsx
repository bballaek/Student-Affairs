"use client";

import Link from 'next/link';
import { useLanguage } from '../i18n/LanguageContext';
import ImageSlider from '../ui/ImageSlider';

export default function HeroSlider() {
  const { t } = useLanguage();

  const slides = [
    {
      id: 1,
      image: '/img/slider/1761357946728.jpg',
    },
    {
      id: 2,
      image: '/img/slider/1775089647327-scaled.jpg',
    },
    {
      id: 3,
      image: '/img/slider/HERO-BANNER-3.jpg',
    }
  ];

  return (
    <>
      <div className="relative w-full aspect-[1440/617] max-h-[80vh] overflow-hidden bg-black">
        {/* Reusable Image Slider */}
        <div className="absolute inset-0">
          <ImageSlider
            slides={slides}
            autoPlay={true}
            overlayClassName="bg-secondary/20 backdrop-blur-[0px]"
            slideClassName="bg-black"
            imageClassName="object-contain"
          />
        </div>

        {/* Dynamic Background Effects - Optional, keeping for atmosphere */}
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-primary/20 rounded-full blur-[100px] sm:blur-[120px] animate-[pulse_4s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gold/20 rounded-full blur-[100px] sm:blur-[120px] animate-[pulse_6s_ease-in-out_infinite_alternate]"></div>
        </div>

        {/* Text Content Hidden per user request */}
        {/* 
        <div className="container mx-auto px-4 md:px-8 max-w-[1280px] relative z-20 text-center flex flex-col items-center pointer-events-none">
          ...
        </div>
        */}
      </div>

      {/* Ranking strip under slider */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8 max-w-[1280px] py-6 md:py-7">
          <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-4 sm:gap-8 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 shrink-0">
              <div className="font-heading font-normal text-gray-800 leading-none text-lg sm:text-xl">
                จุฬา
              </div>
              <div className="font-heading font-normal text-gray-800 leading-none text-lg sm:text-xl">
                No.
              </div>
              <div className="font-heading font-normal leading-none text-[44px] sm:text-[56px] text-[#A78A8A]">
                1
              </div>
            </div>

            <div className="font-heading font-normal text-gray-800 text-lg sm:text-xl leading-snug text-center sm:text-left">
              University in Thailand for 15 Consecutive Years
              <br className="hidden sm:block" />
              by QS World University Rankings 2024
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
