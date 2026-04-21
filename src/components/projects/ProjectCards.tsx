"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

type ProjectCategory = "all" | "employment" | "wellbeing";

type Project = {
  id: string;
  category: Exclude<ProjectCategory, "all">;
  titleTh: string;
  titleEn: string;
  descTh: string;
  descEn: string;
  announceTh: string;
  announceEn: string;
  applyOpenTh: string;
  applyOpenEn: string;
  applyCloseTh: string;
  applyCloseEn: string;
  img: string;
  applyHref?: string; // employment only
};

export default function ProjectCards() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  useEffect(() => {
    const hashToCategory: Record<string, ProjectCategory> = {
      "#projects-all": "all",
      "#projects-employment": "employment",
      "#projects-wellbeing": "wellbeing",
    };

    const applyFromHash = () => {
      const next = hashToCategory[window.location.hash];
      if (next) setActiveCategory(next);
      else setActiveCategory("all");
    };

    applyFromHash();
    window.addEventListener("hashchange", applyFromHash);
    return () => window.removeEventListener("hashchange", applyFromHash);
  }, []);

  const projects: Project[] = useMemo(
    () => [
      {
        id: "employment-parttime",
        category: "employment",
        titleTh:
          "\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E08\u0E49\u0E32\u0E07\u0E19\u0E34\u0E2A\u0E34\u0E15\u0E17\u0E33\u0E07\u0E32\u0E19\u0E1E\u0E34\u0E40\u0E28\u0E29\u0E04\u0E13\u0E30\u0E04\u0E23\u0E38\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C",
        titleEn: "Faculty of Education Part-time Student Employment Project",
        descTh:
          "\u0E40\u0E1B\u0E34\u0E14\u0E23\u0E31\u0E1A\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E19\u0E34\u0E2A\u0E34\u0E15\u0E0A\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19\u0E20\u0E32\u0E22\u0E43\u0E19\u0E04\u0E13\u0E30\u0E2F (\u0E07\u0E32\u0E19\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23/\u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E19\u0E07\u0E32\u0E19/\u0E0A\u0E48\u0E27\u0E22\u0E08\u0E31\u0E14\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21) \u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E23\u0E30\u0E1A\u0E1A\u0E07\u0E32\u0E19\u0E08\u0E23\u0E34\u0E07 \u0E1D\u0E36\u0E01\u0E17\u0E31\u0E01\u0E29\u0E30\u0E01\u0E32\u0E23\u0E2A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E23 \u0E41\u0E25\u0E30\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E40\u0E27\u0E25\u0E32 \u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E07\u0E32\u0E19\u0E44\u0E14\u0E49\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C\u0E25\u0E30 6\u201312 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07 (\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E40\u0E27\u0E25\u0E32\u0E44\u0E14\u0E49) \u0E04\u0E48\u0E32\u0E15\u0E2D\u0E1A\u0E41\u0E17\u0E19\u0E15\u0E32\u0E21\u0E40\u0E01\u0E13\u0E11\u0E4C\u0E21\u0E2B\u0E32\u0E27\u0E34\u0E17\u0E22\u0E32\u0E25\u0E31\u0E22 \u0E23\u0E31\u0E1A\u0E08\u0E33\u0E19\u0E27\u0E19\u0E08\u0E33\u0E01\u0E31\u0E14 \u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32\u0E15\u0E32\u0E21\u0E04\u0E27\u0E32\u0E21\u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E21\u0E02\u0E2D\u0E07\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07\u0E07\u0E32\u0E19",
        descEn:
          "Recruiting students for part-time roles within the faculty (admin/support/event assistant). Gain real work experience, strengthen communication and time-management skills, and earn income while studying. Limited slots.",
        announceTh: "\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 21 \u0E40\u0E21\u0E29\u0E32\u0E22\u0E19 2569",
        announceEn: "Announced: Apr 21, 2026",
        applyOpenTh: "22 \u0E40\u0E21\u0E29\u0E32\u0E22\u0E19 2569",
        applyOpenEn: "Apr 22, 2026",
        applyCloseTh: "3 \u0E1E\u0E24\u0E29\u0E20\u0E32\u0E04\u0E21 2569",
        applyCloseEn: "May 3, 2026",
        img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
        applyHref: "#",
      },
      {
        id: "student-wellbeing",
        category: "wellbeing",
        titleTh: "\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E2A\u0E38\u0E02\u0E20\u0E32\u0E27\u0E30\u0E19\u0E34\u0E2A\u0E34\u0E15",
        titleEn: "Student Wellbeing Development Project",
        descTh:
          "\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E0A\u0E38\u0E14\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E40\u0E2A\u0E23\u0E34\u0E21\u0E2A\u0E38\u0E02\u0E20\u0E32\u0E27\u0E30\u0E19\u0E34\u0E2A\u0E34\u0E15\u0E41\u0E1A\u0E1A\u0E23\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19 \u0E44\u0E14\u0E49\u0E41\u0E01\u0E48 \u0E27\u0E34\u0E23\u0E01\u0E0A\u0E47\u0E2D\u0E1B\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E04\u0E27\u0E32\u0E21\u0E40\u0E04\u0E23\u0E35\u0E22\u0E14, \u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E2D\u0E2D\u0E01\u0E01\u0E33\u0E25\u0E31\u0E07\u0E01\u0E32\u0E22\u0E41\u0E1A\u0E1A\u0E40\u0E1A\u0E32\u0E46, \u0E41\u0E25\u0E30\u0E04\u0E25\u0E34\u0E19\u0E34\u0E01\u0E1B\u0E23\u0E36\u0E01\u0E29\u0E32\u0E40\u0E1A\u0E37\u0E49\u0E2D\u0E07\u0E15\u0E49\u0E19 \u0E40\u0E1B\u0E34\u0E14\u0E23\u0E31\u0E1A\u0E40\u0E2A\u0E19\u0E2D\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21/\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E22\u0E48\u0E2D\u0E22\u0E08\u0E32\u0E01\u0E19\u0E34\u0E2A\u0E34\u0E15\u0E41\u0E25\u0E30\u0E0A\u0E21\u0E23\u0E21 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E48\u0E27\u0E21\u0E02\u0E31\u0E1A\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E2A\u0E38\u0E02\u0E20\u0E32\u0E27\u0E30\u0E43\u0E19\u0E04\u0E13\u0E30\u0E2F",
        descEn:
          "A set of wellbeing initiatives including stress-management workshops, light physical activities, and basic counselling clinics. Students and clubs can propose sub-activities to co-create a healthier community.",
        announceTh: "\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 25 \u0E40\u0E21\u0E29\u0E32\u0E22\u0E19 2569",
        announceEn: "Announced: Apr 25, 2026",
        applyOpenTh: "26 \u0E40\u0E21\u0E29\u0E32\u0E22\u0E19 2569",
        applyOpenEn: "Apr 26, 2026",
        applyCloseTh: "20 \u0E1E\u0E24\u0E29\u0E20\u0E32\u0E04\u0E21 2569",
        applyCloseEn: "May 20, 2026",
        img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
      },
    ],
    []
  );

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <section className="py-16 lg:py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
        <div id="projects-all" className="scroll-mt-32" />

        {/* Anchors for subnav hash links (need real height for scroll-spy) */}
        <div id="projects-employment" className="scroll-mt-32 h-px" />
        <div id="projects-wellbeing" className="scroll-mt-32 h-px" />

        <div className="space-y-5 md:space-y-6">
          {filteredProjects.map((p) => (
            <article
              key={p.id}
              className="bg-white border border-gray-200 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-[280px_1fr]">
                <div className="relative w-full h-[200px] md:h-full bg-gray-100">
                  <Image src={p.img} alt={lang === "th" ? p.titleTh : p.titleEn} fill className="object-cover" />
                </div>

                <div className="p-5 md:p-7">
                  <div className="flex items-center gap-2 text-xs font-sans text-gray-500 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{lang === "th" ? p.announceTh : p.announceEn}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-gray-900 text-xl md:text-2xl leading-snug">
                    {lang === "th" ? p.titleTh : p.titleEn}
                  </h3>
                  <p className="mt-2 font-sans text-gray-600 text-sm md:text-base leading-relaxed">
                    {lang === "th" ? p.descTh : p.descEn}
                  </p>

                  <div className="mt-4 font-sans text-sm text-gray-700">
                    <div className="text-gray-500 text-xs mb-1">
                      {lang === "th"
                        ? "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E23\u0E31\u0E1A\u0E2A\u0E21\u0E31\u0E04\u0E23 - \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E1B\u0E34\u0E14\u0E23\u0E31\u0E1A"
                        : "Application period"}
                    </div>
                    <div>
                      {lang === "th"
                        ? `${p.applyOpenTh} - ${p.applyCloseTh}`
                        : `${p.applyOpenEn} - ${p.applyCloseEn}`}
                    </div>
                  </div>

                  {p.category === "employment" ? (
                    <div className="mt-5">
                      <a
                        href={p.applyHref ?? "#"}
                        className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-white font-sans font-semibold text-sm hover:bg-primary/90 transition-colors"
                      >
                        {lang === "th" ? "\u0E2A\u0E21\u0E31\u0E04\u0E23" : "Apply"}
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
