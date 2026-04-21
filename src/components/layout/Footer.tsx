"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      className="bg-gray-50 border-t border-gray-100 pt-20 relative overflow-hidden font-sans"
      style={{ fontFamily: 'ChulaLongkorn, var(--font-sans)' }}
    >
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-[-10%] w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1280px] py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Contact */}
          <div className="lg:col-span-4">
            <h3 className="font-heading font-bold text-xl text-gray-900 mb-1">
              {t('footer.brand.h3')}
            </h3>
            <p className="font-sans font-normal text-primary text-sm mb-6">
              {t('footer.brand.p')}
            </p>
            <address 
              className="font-sans text-gray-600 text-sm not-italic leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t('footer.address') }}
            />
          </div>

          {/* Services */}
          <div className="lg:col-span-3 lg:ml-auto">
            <h4 className="font-heading font-bold text-lg text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              {t('footer.services')}
            </h4>
            <ul className="flex flex-col gap-3 font-sans font-normal text-sm m-0 p-0 list-none">
              <li><Link href="/scholarships" className="text-gray-600 hover:text-primary transition-colors">{t('footer.services.scholarship')}</Link></li>
              <li><Link href="/scholarships" className="text-gray-600 hover:text-primary transition-colors">{t('footer.services.welfare')}</Link></li>
              <li><Link href="/projects" className="text-gray-600 hover:text-primary transition-colors">{t('footer.services.projects')}</Link></li>
              <li><Link href="/admin" className="text-gray-600 hover:text-primary transition-colors">{t('footer.services.system')}</Link></li>
            </ul>
          </div>

          {/* About */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-lg text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              {t('footer.about')}
            </h4>
            <ul className="flex flex-col gap-3 font-sans font-normal text-sm m-0 p-0 list-none">
              <li><Link href="/about" className="text-gray-600 hover:text-primary transition-colors">{t('footer.about.history')}</Link></li>
              <li><Link href="/staff" className="text-gray-600 hover:text-primary transition-colors">{t('footer.about.staff')}</Link></li>
              <li><Link href="/#news" className="text-gray-600 hover:text-primary transition-colors">{t('footer.about.news')}</Link></li>
            </ul>
          </div>

          {/* Related Links */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-lg text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              {t('footer.links')}
            </h4>
            <ul className="flex flex-col gap-3 font-sans font-normal text-sm m-0 p-0 list-none">
              <li><a href="https://www.edu.chula.ac.th" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">{t('footer.links.edu')}</a></li>
              <li><a href="https://www.chula.ac.th" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">{t('footer.links.chula')}</a></li>
              <li><a href="https://www.reg.chula.ac.th" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">{t('footer.links.reg')}</a></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-primary transition-colors">{t('footer.links.privacy')}</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-100 py-6 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans font-normal text-gray-500">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
