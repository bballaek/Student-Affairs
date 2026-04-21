"use client";

import React from "react";
import { useLanguage } from "@/components/i18n/LanguageContext";
import PageHeader from "@/components/ui/PageHeader";
import ScholarshipCards from "@/components/scholarships/ScholarshipCards";
import HealthCards from "@/components/scholarships/HealthCards";
import ServiceCards from "@/components/scholarships/ServiceCards";

export default function ScholarshipsClient() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader
        title={t("scholarships.h1")}
        subtitle={t("scholarships.subdesc")}
        breadcrumbItems={[{ label: t("scholarships.breadcrumb.current") }]}
        subnavItems={[
          { label: t("scholarships.h2"), href: "#welfare-scholarships" },
          { label: t("scholarships.health.h2"), href: "#welfare-health" },
          { label: t("scholarships.services.h2"), href: "#welfare-services" },
        ]}
      />
      <ScholarshipCards />
      <HealthCards />
      <ServiceCards />
    </>
  );
}

