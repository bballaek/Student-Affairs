"use client";

import React from "react";
import { useLanguage } from "@/components/i18n/LanguageContext";
import PageHeader from "@/components/ui/PageHeader";
import ProjectCards from "@/components/projects/ProjectCards";

export default function ProjectsClient() {
  const { t, lang } = useLanguage();

  return (
    <>
      <PageHeader
        title={t("projects.h1")}
        subtitle={t("projects.subdesc")}
        breadcrumbItems={[{ label: t("projects.breadcrumb.current") }]}
        subnavItems={[
          { label: lang === "th" ? "ทั้งหมด" : "All", href: "#projects-all" },
          { label: lang === "th" ? "การจ้างงานนิสิต" : "Student employment", href: "#projects-employment" },
          { label: lang === "th" ? "การพัฒนาสุขภาวะนิสิต" : "Student wellbeing", href: "#projects-wellbeing" },
        ]}
      />
      <ProjectCards />
    </>
  );
}

