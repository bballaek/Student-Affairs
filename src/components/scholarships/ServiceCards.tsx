"use client";

import React, { useId, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { CarFront, ShieldAlert, Bus } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';

export default function ServiceCards() {
  const { t } = useLanguage();
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const cards = [
    { icon: CarFront, title: 'scholarships.sv1.h4', desc: 'scholarships.sv1.p' },
    { icon: ShieldAlert, title: 'scholarships.sv2.h4', desc: 'scholarships.sv2.p' },
    { icon: Bus, title: 'scholarships.sv3.h4', desc: 'scholarships.sv3.p' }
  ];

  return (
    <section
      id="welfare-services"
      className="py-16 md:py-20 bg-white border-t border-gray-100 scroll-mt-32"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-[900px]">
        <h2 className="text-center font-heading font-bold text-3xl md:text-4xl text-gray-900 whitespace-nowrap">
          {t('scholarships.services.h2')}
        </h2>

        <div className="mt-10 md:mt-12 flex flex-col gap-4">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const isOpen = openIndex === i;
            const panelId = `${baseId}-service-${i}`;

            return (
              <div key={i} className="rounded-lg">
                <button
                  type="button"
                  className="group w-full text-left relative rounded-lg bg-[#4a4a4a] border border-white/10 px-6 md:px-8 py-5 md:py-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/20"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex((prev) => (prev === i ? null : i))}
                >
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white/90 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <p className="font-heading font-bold text-white text-xl md:text-2xl leading-snug truncate">
                        {t(card.title)}
                      </p>
                    </div>

                    <div
                      className={[
                        "shrink-0 text-white/90 transition-transform duration-200",
                        "group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                        isOpen ? "rotate-45" : "",
                      ].join(" ")}
                    >
                      <ArrowUpRight className="w-7 h-7 md:w-8 md:h-8" />
                    </div>
                  </div>
                </button>

                <div
                  id={panelId}
                  className={[
                    "overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
                    isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0",
                  ].join(" ")}
                >
                  <div className="mt-2 rounded-lg bg-[#4a4a4a]/10 border border-gray-200 px-6 md:px-8 py-5">
                    <p className="font-sans font-normal text-gray-700 text-sm md:text-base leading-relaxed">
                      {t(card.desc)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
