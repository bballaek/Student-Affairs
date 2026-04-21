"use client";

import React from "react";
import { useLanguage } from "@/components/i18n/LanguageContext";
import PageHeader from "@/components/ui/PageHeader";
import StaffCards from "@/components/staff/StaffCards";

export default function StaffClient() {
  const { t, lang } = useLanguage();

  return (
    <>
      <PageHeader
        title={t("staff.h1")}
        subtitle={t("staff.subdesc")}
        breadcrumbItems={[{ label: t("staff.breadcrumb.current") }]}
        subnavItems={[
          { label: t("staff.cat.all"), href: "#staff-all" },
          { label: lang === "th" ? "คณะผู้บริหาร" : "Executives", href: "#staff-executives" },
          { label: lang === "th" ? "บุคลากร" : "Staff", href: "#staff-staff" },
          { label: t("staff.cat.admin"), href: "#staff-admin" },
          { label: t("staff.cat.welfare"), href: "#staff-welfare" },
          { label: t("staff.cat.development"), href: "#staff-development" },
        ]}
      />
      <StaffCards />
    </>
  );
}

