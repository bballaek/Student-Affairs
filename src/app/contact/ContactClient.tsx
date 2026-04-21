"use client";

import React from "react";
import { useLanguage } from "@/components/i18n/LanguageContext";
import PageHeader from "@/components/ui/PageHeader";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactClient() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader title={t("contact.h1")} subtitle={t("contact.subdesc")} breadcrumbItems={[{ label: t("contact.breadcrumb.current") }]} />

      <section className="py-16 md:py-20 bg-white relative overflow-hidden border-b border-gray-100">
        <div aria-hidden className="absolute top-0 right-0 w-72 h-72 bg-gold/10 rounded-full blur-[90px] pointer-events-none" />
        <div aria-hidden className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[90px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 max-w-[1280px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-[400px] border-t border-gray-100 bg-gray-50">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1937.892691515222!2d100.52841443834371!3d13.738090544521798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2992dcc630001%3A0xeab49cc1baef0f5f!2z4LiE4LiT4Liw4LiE4Lijุศาสตร4LmM!5e0!3m2!1sth!2sth!4v1700000000000!5m2!1sth!2sth"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps - Faculty of Education, Chulalongkorn University"
        ></iframe>
      </section>
    </>
  );
}

