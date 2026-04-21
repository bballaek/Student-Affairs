"use client";

import React from "react";
import { useLanguage } from "@/components/i18n/LanguageContext";
import PageHeader from "@/components/ui/PageHeader";
import IntroSection from "@/components/about/IntroSection";
import MissionsGrid from "@/components/about/MissionsGrid";
import VisionSection from "@/components/about/VisionSection";
import MissionCards from "@/components/about/MissionCards";
import GoalsList from "@/components/about/GoalsList";

export default function AboutClient() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader
        title={t("about.h1")}
        subtitle={t("about.subdesc")}
        breadcrumbItems={[{ label: t("about.breadcrumb.current") }]}
        subnavItems={[
          { label: "ประวัติคณะ", href: "#about-history" },
          { label: "การก่อตั้งคณะ", href: "#about-founding" },
          { label: "วิสัยทัศน์", href: "#about-vision" },
          { label: "พันธกิจ", href: "#about-mission" },
          { label: "เป้าหมาย", href: "#about-goals" },
        ]}
      />
      <IntroSection />
      <MissionsGrid />
      <VisionSection />
      <MissionCards />
      <GoalsList />
    </>
  );
}

