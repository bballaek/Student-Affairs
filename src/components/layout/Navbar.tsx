"use client";

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Search } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Navbar() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateNavbarHeightVar = () => {
      if (!navRef.current) return;
      document.documentElement.style.setProperty('--navbar-height', `${navRef.current.offsetHeight}px`);
    };

    updateNavbarHeightVar();
    window.addEventListener('resize', updateNavbarHeightVar);
    window.addEventListener('scroll', updateNavbarHeightVar, { passive: true });

    const raf = requestAnimationFrame(updateNavbarHeightVar);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', updateNavbarHeightVar);
      window.removeEventListener('scroll', updateNavbarHeightVar);
    };
  }, [scrolled, mobileMenuOpen, searchOpen]);

  const navLinks = [
    { href: '/about', label: 'nav.about' },
    { href: '/scholarships', label: 'nav.scholarships' },
    { href: '/staff', label: 'nav.staff' },
    { href: '/projects', label: 'nav.projects' },
    { href: '/activities', label: 'nav.activities' },
    { href: '/contact', label: 'nav.contact' },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed w-full z-50 transition-all duration-300 border-b top-0 font-heading ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md py-3 border-gray-100' 
            : 'bg-white py-5 border-gray-100'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
          <div className="flex items-center justify-between">
            
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-2 md:gap-3 no-underline group shrink-0">
              <div className="w-10 h-10 md:w-12 md:h-12 relative transition-transform duration-500 group-hover:scale-105">
                <Image 
                  src="/logo.png" 
                  alt="Faculty of Education Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="hidden sm:flex flex-col border-l border-primary/20 pl-3 md:pl-4 h-10 md:h-12 justify-center">
                <span className="font-heading font-bold text-gray-900 leading-none text-[15px] md:text-[17px] xl:text-xl uppercase tracking-tight whitespace-nowrap">
                  {t('logo.main')}
                </span>
                <span className="text-gray-500 font-heading text-[10px] md:text-[11px] xl:text-sm mt-1 font-medium opacity-80 uppercase tracking-wider whitespace-nowrap">
                  {t('logo.sub')}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-6">
              <ul className="flex items-center gap-0.5 xl:gap-1 m-0 p-0 list-none font-heading text-[15px] xl:text-[16px] font-normal">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`relative px-2.5 xl:px-3 py-3 transition-colors duration-300 uppercase tracking-wide group whitespace-nowrap ${
                          isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'
                        }`}
                      >
                        {t(link.label)}
                        <span className={`absolute bottom-0 left-2.5 xl:left-3 right-2.5 xl:right-3 h-0.5 bg-primary transition-transform duration-300 ${
                          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}></span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Utility Section: Pill Toggle & Search */}
              <div className="flex items-center gap-3 xl:gap-5 ml-1 xl:ml-2 border-l border-gray-100 pl-3 xl:pl-5">
                {/* Pill Language Toggle */}
                <div 
                  className="relative bg-gray-100 hover:bg-gray-200 transition-colors rounded-full p-1 flex items-center cursor-pointer w-[76px] xl:w-[86px] h-8 xl:h-9 shadow-inner group overflow-hidden shrink-0"
                  onClick={() => setLang(lang === 'th' ? 'en' : 'th')}
                >
                  <div 
                    className={`absolute w-[34px] xl:w-[38px] h-6 xl:h-7 bg-white rounded-full shadow-md transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
                      lang === 'en' ? 'translate-x-[34px] xl:translate-x-[40px]' : 'translate-x-0'
                    }`}
                  />
                  <span className={`relative z-10 flex-1 text-center font-bold text-[10px] xl:text-[12px] transition-colors duration-300 ${lang === 'th' ? 'text-primary' : 'text-gray-500'}`}>TH</span>
                  <span className={`relative z-10 flex-1 text-center font-bold text-[10px] xl:text-[12px] transition-colors duration-300 ${lang === 'en' ? 'text-primary' : 'text-gray-500'}`}>EN</span>
                </div>

                <button 
                  onClick={() => setSearchOpen(!searchOpen)}
                  className={`flex items-center justify-center w-8 h-8 xl:w-9 xl:h-9 rounded-full transition-all duration-300 shrink-0 ${
                    searchOpen ? 'bg-primary text-white shadow-md' : 'text-gray-400 hover:text-primary hover:bg-gray-50'
                  }`}
                  aria-label="Search"
                >
                  <Search className="w-4 h-4 xl:w-4.5 xl:h-4.5" />
                </button>
              </div>
            </div>

            {/* Mobile Menu Controls */}
            <div className="lg:hidden flex items-center gap-2 md:gap-3">
              <div 
                className="relative bg-gray-100 rounded-full p-0.5 flex items-center cursor-pointer w-[64px] md:w-[70px] h-7 md:h-8 overflow-hidden shrink-0"
                onClick={() => setLang(lang === 'th' ? 'en' : 'th')}
              >
                <div 
                  className={`absolute w-[28px] md:w-[32px] h-6 md:h-7 bg-white rounded-full shadow-sm transition-all duration-300 ${
                    lang === 'en' ? 'translate-x-[30px] md:translate-x-[32px]' : 'translate-x-0'
                  }`}
                />
                <span className={`relative z-10 flex-1 text-center font-bold text-[9px] md:text-[10px] ${lang === 'th' ? 'text-primary' : 'text-gray-500'}`}>TH</span>
                <span className={`relative z-10 flex-1 text-center font-bold text-[9px] md:text-[10px] ${lang === 'en' ? 'text-primary' : 'text-gray-500'}`}>EN</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-gray-50 rounded-lg text-gray-700 hover:text-primary transition-colors border border-gray-100 shrink-0"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 md:w-6 md:h-6" /> : <Menu className="w-5 h-5 md:w-6 md:h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Overlay */}
        <div 
          className={`absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl transition-all duration-500 origin-top ${
            searchOpen ? 'opacity-100 transform scale-y-100' : 'opacity-0 transform scale-y-0 pointer-events-none'
          }`}
        >
          <div className="container mx-auto px-4 py-8 max-w-[800px]">
            <div className="relative">
              <input 
                type="text" 
                autoFocus={searchOpen}
                placeholder={lang === 'th' ? "พิมพ์สิ่งที่คุณต้องการค้นหา..." : "Type to search..."} 
                className="w-full bg-gray-50 border-gray-200 rounded-xl px-14 py-5 font-sans text-lg focus:ring-2 focus:ring-primary/20 focus:bg-white focus:border-primary outline-none transition-all" 
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
              <button 
                onClick={() => setSearchOpen(false)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden bg-white border-t border-gray-50 overflow-hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? 'max-h-[100vh] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="container mx-auto px-4 py-6 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-6 py-4 rounded-xl font-normal flex items-center justify-between group transition-colors ${
                    isActive ? 'bg-primary/5 text-primary' : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                  }`}
                >
                  <span className="uppercase tracking-wide text-[15px] md:text-[16px]">{t(link.label)}</span>
                  <div className={`w-1.5 h-1.5 rounded-full bg-primary transition-transform duration-300 ${isActive ? 'scale-100' : 'scale-0'}`}></div>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
      
      {/* Spacer to prevent content jump */}
      <div className="h-[var(--navbar-height)]"></div>
    </>
  );
}
