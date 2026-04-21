"use client";

import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Mail, MapPin } from 'lucide-react';

export default function ContactInfo() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      <h2
        className="font-heading font-bold text-3xl md:text-4xl text-gray-900 leading-tight"
        dangerouslySetInnerHTML={{ __html: t('contact.info.h2') }}
      />

      <p className="mt-4 font-sans text-gray-600 text-base md:text-lg leading-relaxed">
        {t('contact.info.p')}
      </p>

      <div className="mt-8 space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <Mail className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="font-heading font-bold text-gray-900 text-base md:text-lg">
              {t('contact.email.h4')}
            </div>
            <a
              href="mailto:studentaffairs.edu@chula.ac.th"
              className="mt-1 block font-sans text-gray-700 hover:text-primary transition-colors break-all"
            >
              studentaffairs.edu@chula.ac.th
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center text-gold shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="font-heading font-bold text-gray-900 text-base md:text-lg">
              {t('contact.location.h4')}
            </div>
            <address
              className="mt-1 font-sans text-gray-700 not-italic leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t('contact.location.p') }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
