"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { activityItems } from "@/content/activities";
import { useLanguage } from "../i18n/LanguageContext";
import Reveal from "../ui/Reveal";
// Intentionally no kicker here (per design)

export default function NewsSection() {
  const { t, lang } = useLanguage();

  const cards = useMemo(() => {
    const sorted = [...activityItems].sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""));
    return sorted.slice(0, 4);
  }, []);

  return (
    <section id="news" className="py-20 lg:py-28 bg-white relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-[1280px] relative z-10">
        <Reveal>
          <div className="flex items-end gap-5 mb-10">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 leading-tight whitespace-nowrap">
              {t("index.news.h2")}
            </h2>
            <div className="flex-1 border-b border-gray-300 mb-2" />
            <Link
              href="/activities"
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-black text-white !text-white hover:!text-white visited:!text-white font-heading font-normal text-sm hover:bg-gray-900 transition-colors whitespace-nowrap group"
            >
              <span className="text-white !text-white">ดูทั้งหมด</span>
              <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
            </Link>
          </div>
        </Reveal>

        {/* 4-card grid like Public Relations cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {cards.map((item, i) => (
            <Reveal key={item.slug} delayMs={i * 80}>
              <Link
                href={`/activities/${item.slug}`}
                className="group relative bg-white shadow-[0_2px_15px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden block"
                aria-label={lang === "th" ? item.titleTh : item.titleEn}
              >
                <div className="absolute inset-0">
                  <Image
                    src={item.coverImage}
                    alt={lang === "th" ? item.titleTh : item.titleEn}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
                </div>

                <div className="relative z-10 flex flex-col justify-end min-h-[280px] p-5">
                  <span className="font-sans text-white/90 text-[13px] font-medium">{lang === "th" ? item.dateTh : item.dateEn}</span>
                  <h3 className="mt-2 font-heading font-semibold text-white text-lg leading-snug line-clamp-2">
                    {lang === "th" ? item.titleTh : item.titleEn}
                  </h3>
                  <div className="mt-4">
                    <span className="inline-flex items-center gap-2 text-white font-sans font-semibold text-[14px] hover:gap-3 transition-all duration-300">
                      <span>{lang === "th" ? "\u0E2D\u0E48\u0E32\u0E19\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21" : "Read more"}</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Mobile view all button */}
        <Reveal delayMs={80}>
          <div className="mt-10 text-center md:hidden">
            <Link
              href="/activities"
              className="inline-flex items-center justify-center w-full bg-black py-4 text-white !text-white hover:!text-white visited:!text-white active:bg-gray-900 font-heading font-normal group"
            >
              <span className="text-white !text-white">ดูทั้งหมด</span>
              <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
