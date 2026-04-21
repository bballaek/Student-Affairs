"use client";

import React, { useId, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

export default function MissionsGrid() {
  const { t } = useLanguage();
  const baseId = useId();
  const [openNum, setOpenNum] = useState<number | null>(1);

  return (
    <section
      id="about-founding"
      className="py-16 md:py-20 bg-white border-y border-gray-100 scroll-mt-32"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-[900px]">
        <h2 className="text-center font-heading font-bold text-3xl md:text-4xl text-gray-900">
          {t('about.missions.h2')}
        </h2>

        <div className="mt-10 md:mt-12 flex flex-col gap-4">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="rounded-lg">
              <button
                type="button"
                className="group w-full text-left relative rounded-lg bg-[#4a4a4a] px-6 md:px-8 py-5 md:py-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                aria-expanded={openNum === num}
                aria-controls={`${baseId}-mission-${num}`}
                onClick={() => setOpenNum((prev) => (prev === num ? null : num))}
              >
                <div className="flex items-center justify-between gap-6">
                  <p className="font-heading font-bold text-white text-xl md:text-2xl leading-snug">
                    {t(`about.mission${num}.h3`)}
                  </p>

                  <div
                    className={[
                      "shrink-0 text-white/90 transition-transform duration-200",
                      "group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                      openNum === num ? "rotate-45" : "",
                    ].join(" ")}
                  >
                    <ArrowUpRight className="w-7 h-7 md:w-8 md:h-8" />
                  </div>
                </div>
              </button>

              <div
                id={`${baseId}-mission-${num}`}
                className={[
                  "overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
                  openNum === num ? "max-h-48 opacity-100" : "max-h-0 opacity-0",
                ].join(" ")}
              >
                <div className="mt-2 rounded-lg bg-[#4a4a4a]/10 border border-gray-200 px-6 md:px-8 py-5">
                  <p className="font-sans font-normal text-gray-700 text-sm md:text-base leading-relaxed">
                    {t(`about.mission${num}.p`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
