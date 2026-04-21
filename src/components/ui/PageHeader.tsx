'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Breadcrumb from './Breadcrumb';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  breadcrumbItems: { label: string; href?: string }[];
  subnavItems?: { label: string; href: string }[];
}

export default function PageHeader({ title, subtitle, breadcrumbItems, subnavItems }: PageHeaderProps) {
  const hashIds = useMemo(() => {
    if (!subnavItems?.length) return [];
    return subnavItems
      .map((i) => i.href)
      .filter((href) => href.startsWith('#'))
      .map((href) => href.slice(1))
      .filter(Boolean);
  }, [subnavItems]);

  const [activeHash, setActiveHash] = useState<string>(() => {
    if (typeof window === 'undefined') return '';
    return window.location.hash || '';
  });
  const [mobileSubnavOpen, setMobileSubnavOpen] = useState(false);

  const activeLabel = useMemo(() => {
    if (!subnavItems?.length) return '';
    const found = subnavItems.find((i) => i.href === activeHash);
    return found?.label ?? subnavItems[0]?.label ?? '';
  }, [activeHash, subnavItems]);

  useEffect(() => {
    if (!hashIds.length) return;

    const getRootMargin = () => {
      const navbarHeightRaw = getComputedStyle(document.documentElement).getPropertyValue('--navbar-height').trim();
      const navbarHeight = Number.parseFloat(navbarHeightRaw) || 0;
      // Also account for the subnav itself so the active section starts after it.
      const subnavHeight = 56; // ~ py-4 line-height
      const topOffset = navbarHeight + subnavHeight + 8;
      return `-${topOffset}px 0px -60% 0px`;
    };

    const elements = hashIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top ?? 0) - (b.boundingClientRect.top ?? 0));

        if (!visible.length) return;
        const id = (visible[0].target as HTMLElement).id;
        if (id) setActiveHash(`#${id}`);
      },
      { root: null, threshold: [0.15, 0.35, 0.55], rootMargin: getRootMargin() }
    );

    elements.forEach((el) => observer.observe(el));

    const onHashChange = () => setActiveHash(window.location.hash || '');
    window.addEventListener('hashchange', onHashChange);

    return () => {
      window.removeEventListener('hashchange', onHashChange);
      observer.disconnect();
    };
  }, [hashIds]);

  useEffect(() => {
    // Close mobile subnav when navigating to a new hash
    setMobileSubnavOpen(false);
  }, [activeHash]);

  return (
    <>
      <div className="relative overflow-hidden pt-20 md:pt-24 pb-10 md:pb-12">
        {/* Blurred cover image */}
        <div
          aria-hidden
          className="absolute inset-0 scale-110 bg-center bg-cover blur-[5px]"
          style={{ backgroundImage: "url('/img/cover/cover-edu-chula.jpg')" }}
        />

        {/* Dark overlay for text readability */}
        <div aria-hidden className="absolute inset-0 bg-secondary/55" />

        {/* Gradient overlay: #E83A00 -> #FFFFFF, 90deg, 0% -> 90% */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-75"
          style={{
            background:
              "linear-gradient(90deg, rgba(232,58,0,0.85) 0%, rgba(255,255,255,0.55) 90%)",
          }}
        />

        <div className="container mx-auto px-4 md:px-8 max-w-[1280px] relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4 animate-[slideUp_0.6s_ease-out_forwards]">
            {title}
          </h1>
          <p className="font-sans text-gray-300 text-lg max-w-2xl animate-[slideUp_0.6s_ease-out_0.1s_forwards] opacity-0">
            {subtitle}
          </p>
        </div>
      </div>

      {subnavItems && subnavItems.length > 0 ? (
        <div className="sticky top-[var(--navbar-height)] z-40 bg-white/95 backdrop-blur-md border-b border-gray-200">
          <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
            {/* Mobile: accordion menu */}
            <div className="md:hidden py-3">
              <button
                type="button"
                onClick={() => setMobileSubnavOpen((v) => !v)}
                className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-xl px-4 py-3 text-[14px] font-sans text-gray-900"
                aria-expanded={mobileSubnavOpen}
              >
                <span className="truncate">{activeLabel}</span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${mobileSubnavOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileSubnavOpen ? (
                <div className="mt-2 bg-white border border-gray-200 rounded-xl overflow-hidden">
                  {subnavItems.map((item) => {
                    const isActive = activeHash === item.href;
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-3 text-[14px] font-sans transition-colors ${
                          isActive ? 'text-primary bg-primary/5' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </div>
              ) : null}
            </div>

            {/* Desktop: horizontal tabs */}
            <nav className="hidden md:flex items-center gap-8 overflow-x-auto no-scrollbar whitespace-nowrap text-[14px] md:text-[15px]">
              {subnavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`py-4 transition-colors border-b-2 ${
                    activeHash === item.href
                      ? 'text-primary border-primary'
                      : 'text-gray-700 border-transparent hover:text-primary hover:border-primary'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
