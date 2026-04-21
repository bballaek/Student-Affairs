"use client";

import React from "react";
import { useLanguage } from "@/components/i18n/LanguageContext";
import PageHeader from "@/components/ui/PageHeader";
import ActivityCards from "@/components/activities/ActivityCards";

export default function ActivitiesClient() {
  const { t, lang } = useLanguage();

  return (
    <>
      <PageHeader
        title={t("activities.h1")}
        subtitle={t("activities.subdesc")}
        breadcrumbItems={[{ label: t("activities.breadcrumb.current") }]}
        subnavItems={[
          { label: lang === "th" ? "ทั้งหมด" : t("activities.cat.all"), href: "#activities-all" },
          { label: lang === "th" ? "ข่าวสาร" : t("activities.cat.news"), href: "#activities-news" },
          { label: "Highlights", href: "#activities-highlights" },
          { label: lang === "th" ? "กิจกรรมนิสิต" : t("activities.cat.student"), href: "#activities-student" },
          { label: lang === "th" ? "ประกาศคณะ" : t("activities.cat.announcements"), href: "#activities-announcements" },
          { label: lang === "th" ? "ปฏิทินกิจกรรม" : t("activities.cat.calendar"), href: "#activities-calendar" },
        ]}
      />
      <ActivityCards />
    </>
  );
}

