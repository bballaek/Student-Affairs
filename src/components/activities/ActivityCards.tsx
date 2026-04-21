"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LayoutGrid } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { activityItems } from "@/content/activities";

type ActivityCategory = "all" | "news" | "highlights" | "calendar" | "student" | "announcements";

type ActivityCard = {
  slug?: string;
  category: Exclude<ActivityCategory, "all">;
  title: string;
  titleEn: string;
  excerpt?: string;
  excerptEn?: string;
  date: string;
  dateEn: string;
  img: string;
  tags?: string[];
};

type CalendarEvent = {
  id: string;
  dateISO: string; // YYYY-MM-DD
  title: string;
  titleEn: string;
  startTime?: string;
  endTime?: string;
  location?: string;
  categoryLabel?: string;
  href?: string;
};

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

function toISODate(d: Date) {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

function startOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function addMonths(d: Date, delta: number) {
  return new Date(d.getFullYear(), d.getMonth() + delta, 1);
}

function daysInMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
}

function thaiMonthName(monthIndex: number) {
  const months = [
    "\u0E21\u0E01\u0E23\u0E32\u0E04\u0E21",
    "\u0E01\u0E38\u0E21\u0E20\u0E32\u0E1E\u0E31\u0E19\u0E18\u0E4C",
    "\u0E21\u0E35\u0E19\u0E32\u0E04\u0E21",
    "\u0E40\u0E21\u0E29\u0E32\u0E22\u0E19",
    "\u0E1E\u0E24\u0E29\u0E20\u0E32\u0E04\u0E21",
    "\u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19",
    "\u0E01\u0E23\u0E01\u0E0E\u0E32\u0E04\u0E21",
    "\u0E2A\u0E34\u0E07\u0E2B\u0E32\u0E04\u0E21",
    "\u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19",
    "\u0E15\u0E38\u0E25\u0E32\u0E04\u0E21",
    "\u0E1E\u0E24\u0E28\u0E08\u0E34\u0E01\u0E32\u0E22\u0E19",
    "\u0E18\u0E31\u0E19\u0E27\u0E32\u0E04\u0E21",
  ];
  return months[monthIndex] ?? "";
}

export default function ActivityCards() {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ActivityCategory>("all");
  const [calendarMonth, setCalendarMonth] = useState<Date>(() => new Date(2026, 1, 1)); // Feb 2026 sample

  useEffect(() => {
    const hashToCategory: Record<string, ActivityCategory> = {
      "#activities-all": "all",
      "#activities-news": "news",
      "#activities-highlights": "highlights",
      "#activities-calendar": "calendar",
      "#activities-student": "student",
      "#activities-announcements": "announcements",
    };

    const applyFromHash = () => {
      const next = hashToCategory[window.location.hash];
      if (next) setActiveCategory(next);
    };

    applyFromHash();
    window.addEventListener("hashchange", applyFromHash);
    return () => window.removeEventListener("hashchange", applyFromHash);
  }, []);

  const calendarEvents: CalendarEvent[] = useMemo(
    () => [
      {
        id: "ev-1",
        dateISO: "2026-02-17",
        title:
          "\u0E02\u0E2D\u0E40\u0E0A\u0E34\u0E0D\u0E19\u0E34\u0E2A\u0E34\u0E15\u0E08\u0E38\u0E2C\u0E32\u0E2F \u0E17\u0E38\u0E01\u0E0A\u0E31\u0E49\u0E19\u0E1B\u0E35 \u0E41\u0E25\u0E30\u0E1C\u0E39\u0E49\u0E17\u0E35\u0E48\u0E2A\u0E19\u0E43\u0E08\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21 \u201C\u0E43\u0E15\u0E49\u0E42\u0E15\u0E4A\u0E30\u0E17\u0E33\u0E07\u0E32\u0E19 \u0E1B\u0E31\u0E08\u0E09\u0E34\u0E21\u0E19\u0E34\u0E40\u0E17\u0E48 \u0E0B\u0E35\u0E0B\u0E31\u0E48\u0E19 2\u201D",
        titleEn: 'Invitation: Join the activity ?Under the Desk: Farewell Season 2?',
        startTime: "11:00",
        endTime: "16:00",
        location: "\u0E2B\u0E2D\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21 Hall of Intania \u0E2D\u0E32\u0E04\u0E32\u0E23 3",
        categoryLabel: "\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21",
      },
      {
        id: "ev-2",
        dateISO: "2026-02-18",
        title:
          "\u0E02\u0E2D\u0E40\u0E0A\u0E34\u0E0D\u0E04\u0E13\u0E32\u0E08\u0E32\u0E23\u0E22\u0E4C\u0E41\u0E25\u0E30\u0E1A\u0E38\u0E04\u0E25\u0E32\u0E01\u0E23 \u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E1E\u0E34\u0E18\u0E35\u0E40\u0E1B\u0E34\u0E14\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23 \u201C\u0E23\u0E27\u0E21\u0E43\u0E08 \u0E40\u0E14\u0E34\u0E19\u2013\u0E27\u0E34\u0E48\u0E07\u201D",
        titleEn: 'Opening ceremony: ?Together Walk?Run? project',
        startTime: "07:30",
        endTime: "09:00",
        location: "\u0E25\u0E32\u0E19\u0E2D\u0E34\u0E19\u0E17\u0E32\u0E40\u0E19\u0E35\u0E22 (\u0E25\u0E32\u0E19\u0E40\u0E01\u0E35\u0E22\u0E23\u0E4C)",
        categoryLabel: "\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21",
      },
      {
        id: "ev-3",
        dateISO: "2026-02-22",
        title: "\u0E02\u0E2D\u0E40\u0E0A\u0E34\u0E0D\u0E1C\u0E39\u0E49\u0E2A\u0E19\u0E43\u0E08\u0E23\u0E48\u0E27\u0E21\u0E07\u0E32\u0E19 CU SEMI TALK",
        titleEn: "Join CU SEMI TALK",
        startTime: "13:00",
        endTime: "15:00",
        location: "\u0E2B\u0E49\u0E2D\u0E07 201A \u0E0A\u0E31\u0E49\u0E19 2 \u0E2D\u0E32\u0E04\u0E32\u0E23\u0E27\u0E34\u0E28\u0E27\u0E2F 100 \u0E1B\u0E35",
        categoryLabel: "\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21",
      },
    ],
    []
  );

  const allCards: ActivityCard[] = useMemo(() => {
    const shareables: ActivityCard[] = activityItems.map((it) => ({
      slug: it.slug,
      category: it.category,
      title: it.titleTh,
      titleEn: it.titleEn,
      excerpt: it.excerptTh,
      excerptEn: it.excerptEn,
      date: it.dateTh,
      dateEn: it.dateEn,
      img: it.coverImage,
      tags: [],
    }));

    // keep other mock items (not shareable yet)
    const extra: ActivityCard[] = [
      {
        category: "announcements",
        title:
          "\u0E40\u0E1B\u0E34\u0E14\u0E23\u0E31\u0E1A\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E19\u0E34\u0E2A\u0E34\u0E15\u0E43\u0E2B\u0E21\u0E48\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1A\u0E31\u0E13\u0E11\u0E34\u0E15\u0E28\u0E36\u0E01\u0E29\u0E32 \u0E1B\u0E23\u0E30\u0E08\u0E33\u0E20\u0E32\u0E04\u0E1B\u0E25\u0E32\u0E22 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2568",
        titleEn: "Open for Graduate Student Applications - Late Semester, Academic Year 2025",
        date: "1 \u0E15\u0E38\u0E25\u0E32\u0E04\u0E21 - 15 \u0E1E\u0E24\u0E28\u0E08\u0E34\u0E01\u0E32\u0E22\u0E19 2568",
        dateEn: "October 1 - November 15, 2025",
        img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
        tags: ["\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E04\u0E13\u0E30", "\u0E23\u0E31\u0E1A\u0E2A\u0E21\u0E31\u0E04\u0E23"],
      },
      {
        category: "highlights",
        title:
          "Highlights: \u0E1A\u0E23\u0E23\u0E22\u0E32\u0E01\u0E32\u0E28\u0E07\u0E32\u0E19\u0E40\u0E1B\u0E34\u0E14\u0E42\u0E25\u0E01\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E19\u0E34\u0E2A\u0E34\u0E15\u0E04\u0E23\u0E38\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C \u0E41\u0E19\u0E30\u0E19\u0E33\u0E0A\u0E21\u0E23\u0E21\u0E15\u0E48\u0E32\u0E07 \u0E46",
        titleEn: "Highlights: Atmosphere of the Education Student Activities Fair",
        date: "15 \u0E2A\u0E34\u0E07\u0E2B\u0E32\u0E04\u0E21 2568",
        dateEn: "August 15, 2025",
        img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
        tags: ["\u0E02\u0E48\u0E32\u0E27\u0E2A\u0E32\u0E23", "\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21"],
      },
      {
        category: "calendar",
        title:
          "\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 \u0E20\u0E32\u0E04\u0E15\u0E49\u0E19 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2569 \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E19\u0E34\u0E2A\u0E34\u0E15\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E34\u0E0D\u0E0D\u0E32\u0E15\u0E23\u0E35",
        titleEn: "Academic Calendar, First Semester, Academic Year 2026 for Undergraduates",
        date: "\u0E01\u0E23\u0E01\u0E0E\u0E32\u0E04\u0E21 - \u0E1E\u0E24\u0E28\u0E08\u0E34\u0E01\u0E32\u0E22\u0E19 2569",
        dateEn: "July - November 2026",
        img: "https://images.unsplash.com/photo-1506784919141-937286392061?q=80&w=2070&auto=format&fit=crop",
        tags: ["\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21"],
      },
      {
        category: "announcements",
        title:
          "\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E04\u0E31\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E38\u0E19\u0E2D\u0E38\u0E14\u0E2B\u0E19\u0E38\u0E19\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 \u0E20\u0E32\u0E04\u0E15\u0E49\u0E19 2569",
        titleEn: "Announcement of Educational Support Scholarship Selection, First Semester 2026",
        date: "30 \u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19 2569",
        dateEn: "June 30, 2026",
        img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
        tags: ["\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E04\u0E13\u0E30", "\u0E17\u0E38\u0E19\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32"],
      },
      {
        category: "highlights",
        title:
          "\u0E2A\u0E31\u0E21\u0E21\u0E19\u0E32\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23: \u0E19\u0E27\u0E31\u0E15\u0E01\u0E23\u0E23\u0E21\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E43\u0E19\u0E28\u0E15\u0E27\u0E23\u0E23\u0E29\u0E17\u0E35\u0E48 21 \u0E41\u0E25\u0E30\u0E17\u0E39\u0E15\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32",
        titleEn: "Academic Seminar: 21st Century Learning Innovation and Education Ambassadors",
        date: "\u0E1E\u0E38\u0E18\u0E17\u0E35\u0E48 18 \u0E21\u0E35\u0E19\u0E32\u0E04\u0E21 2569",
        dateEn: "Wednesday, March 18, 2026",
        img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2069&auto=format&fit=crop",
        tags: ["\u0E02\u0E48\u0E32\u0E27\u0E40\u0E14\u0E48\u0E19", "\u0E2A\u0E31\u0E21\u0E21\u0E19\u0E32"],
      },
    ];

    return [...shareables, ...extra];
  }, []);

  const filteredCards = useMemo(() => {
    if (activeCategory === "all") return allCards;
    return allCards.filter((c) => c.category === activeCategory);
  }, [activeCategory, allCards]);

  const calendarGrid = useMemo(() => {
    const first = startOfMonth(calendarMonth);
    const totalDays = daysInMonth(calendarMonth);
    const startDow = first.getDay(); // 0 = Sun

    const cells: Array<{ day: number | null; dateISO?: string }> = [];
    for (let i = 0; i < startDow; i++) cells.push({ day: null });
    for (let day = 1; day <= totalDays; day++) {
      const d = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth(), day);
      cells.push({ day, dateISO: toISODate(d) });
    }
    while (cells.length % 7 !== 0) cells.push({ day: null });

    const rows: Array<typeof cells> = [];
    for (let i = 0; i < cells.length; i += 7) rows.push(cells.slice(i, i + 7));
    return rows;
  }, [calendarMonth]);

  const eventsByDate = useMemo(() => {
    const map = new Map<string, CalendarEvent[]>();
    for (const ev of calendarEvents) {
      const list = map.get(ev.dateISO) ?? [];
      list.push(ev);
      map.set(ev.dateISO, list);
    }
    return map;
  }, [calendarEvents]);

  const monthEvents = useMemo(() => {
    const y = calendarMonth.getFullYear();
    const m = calendarMonth.getMonth() + 1;
    const prefix = `${y}-${pad2(m)}-`;
    return calendarEvents.filter((ev) => ev.dateISO.startsWith(prefix));
  }, [calendarEvents, calendarMonth]);

  return (
    <section className="pb-20 lg:pb-24 bg-[#F8F8F8] relative overflow-hidden">
      <div className="absolute top-1/4 left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div
        className="absolute bottom-1/4 right-[-10%] w-[40%] h-[40%] bg-gold/5 rounded-full blur-[120px] pointer-events-none animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 md:px-8 max-w-[1280px] relative z-10">
        <div className="pt-10 lg:pt-12" />

        {activeCategory === "calendar" ? (
          <div className="bg-transparent">
            <div className="flex items-center justify-between px-4 md:px-6 py-3 bg-white shadow-sm border border-gray-100">
              <button
                type="button"
                onClick={() => setCalendarMonth((d) => addMonths(d, -1))}
                className="inline-flex items-center gap-2 text-sm font-sans text-gray-700 hover:text-primary"
              >
                <span aria-hidden>{"<"}</span>
                <span>
                  {lang === "th" ? "\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32" : "Previous month"}
                </span>
              </button>

              <div className="font-heading font-semibold text-gray-900">
                {lang === "th"
                  ? `${thaiMonthName(calendarMonth.getMonth())} ${calendarMonth.getFullYear() + 543}`
                  : calendarMonth.toLocaleString("en-US", { month: "long", year: "numeric" })}
              </div>

              <button
                type="button"
                onClick={() => setCalendarMonth((d) => addMonths(d, 1))}
                className="inline-flex items-center gap-2 text-sm font-sans text-gray-700 hover:text-primary"
              >
                <span>{lang === "th" ? "\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E16\u0E31\u0E14\u0E44\u0E1B" : "Next month"}</span>
                <span aria-hidden>{">"}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] mt-4">
              <div className="bg-white shadow-sm border border-gray-100 border-b-0 lg:border-b lg:border-r-0">
                <div className="grid grid-cols-7 bg-primary text-white text-[11px] font-sans">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                    <div key={d} className="px-2 py-2 text-center">
                      {d}
                    </div>
                  ))}
                </div>

                <div className="divide-y divide-gray-100">
                  {calendarGrid.map((row, ridx) => (
                    <div key={ridx} className="grid grid-cols-7">
                      {row.map((cell, cidx) => {
                        const events = cell.dateISO ? eventsByDate.get(cell.dateISO) ?? [] : [];
                        return (
                          <div
                            key={cidx}
                            className={`min-h-[86px] border-r border-gray-100 last:border-r-0 p-2 ${
                              cell.day ? "bg-white" : "bg-gray-50"
                            }`}
                          >
                            {cell.day ? (
                              <>
                                <div className="w-6 h-6 bg-gray-100 text-gray-700 text-[11px] font-sans flex items-center justify-center">
                                  {cell.day}
                                </div>
                                <div className="mt-1 space-y-1">
                                  {events.slice(0, 2).map((ev) => (
                                    <a
                                      key={ev.id}
                                      href={ev.href ?? "#"}
                                      className="block text-[11px] font-sans bg-yellow-100 text-yellow-900 px-2 py-1 truncate hover:bg-yellow-200"
                                    >
                                      {lang === "th" ? ev.title : ev.titleEn}
                                    </a>
                                  ))}
                                </div>
                              </>
                            ) : null}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 md:p-6 bg-white shadow-sm border border-gray-100 lg:border-l-0">
                <div className="font-heading font-semibold text-gray-900 mb-4">
                  {lang === "th" ? "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21" : "Agenda"}
                </div>
                <div className="space-y-4">
                  {monthEvents.length ? (
                    monthEvents.map((ev) => {
                      const [y, m, d] = ev.dateISO.split("-").map((x) => Number(x));
                      const monthName = thaiMonthName((m ?? 1) - 1);
                      const timeText =
                        ev.startTime && ev.endTime
                          ? `${ev.startTime} \u0E16\u0E36\u0E07 ${ev.endTime}`
                          : ev.startTime
                            ? ev.startTime
                            : "";
                      return (
                        <a key={ev.id} href={ev.href ?? "#"} className="block group">
                          <div className="flex gap-3">
                            <div className="w-14 shrink-0 text-center border border-gray-100">
                              <div className="text-xl font-heading font-semibold text-gray-900 leading-none pt-3">{d}</div>
                              <div className="text-xs font-sans text-gray-500 pb-3">
                                {lang === "th" ? monthName : new Date(y, (m ?? 1) - 1, 1).toLocaleString("en-US", { month: "short" })}
                              </div>
                            </div>
                            <div className="flex-1 border-l-2 border-yellow-400 pl-3">
                              <div className="text-xs font-sans text-gray-500 mb-1">
                                {ev.categoryLabel ?? (lang === "th" ? "\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21" : "Calendar")}
                              </div>
                              <div className="font-sans text-sm text-gray-900 group-hover:text-primary transition-colors">
                                {lang === "th" ? ev.title : ev.titleEn}
                              </div>
                              {timeText || ev.location ? (
                                <div className="mt-1 text-[11px] font-sans text-gray-500">
                                  {lang === "th"
                                    ? `${d} ${monthName} ${y + 543}${timeText ? ` ${timeText}` : ""}${ev.location ? ` | \u0E13 ${ev.location}` : ""}`
                                    : `${y}-${pad2(m ?? 1)}-${pad2(d)}${timeText ? ` ${timeText}` : ""}${ev.location ? ` | ${ev.location}` : ""}`}
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </a>
                      );
                    })
                  ) : (
                    <div className="text-sm font-sans text-gray-500">
                      {lang === "th" ? "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E43\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E19\u0E35\u0E49" : "No events this month."}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {filteredCards.length > 0 ? (
              filteredCards.map((card, i) => (
                <Link
                  key={`${card.category}-${i}`}
                  href={card.slug ? `/activities/${card.slug}` : "#"}
                  className="group relative bg-white shadow-[0_2px_15px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden animate-[fadeIn_0.5s_ease-out_forwards] block"
                  style={{ animationDelay: `${i * 0.1}s` }}
                  aria-label={lang === "th" ? card.title : card.titleEn}
                >
                  <div className="absolute inset-0">
                    <Image src={card.img} alt={lang === "th" ? card.title : card.titleEn} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
                  </div>

                  <div className="relative z-10 flex flex-col justify-end min-h-[360px] p-5 lg:p-6">
                    <span className="font-sans text-white/90 text-[13px] md:text-[14px] font-medium">{lang === "th" ? card.date : card.dateEn}</span>
                    <h3 className="mt-2 font-heading font-semibold text-white text-xl lg:text-2xl leading-snug line-clamp-2">
                      {lang === "th" ? card.title : card.titleEn}
                    </h3>
                    <div className="mt-4">
                      <span className="inline-flex items-center gap-2 text-white font-sans font-semibold text-[14px] hover:gap-3 transition-all duration-300">
                        <span>{t("activities.readMore")}</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
                  <LayoutGrid className="w-10 h-10" />
                </div>
                <p className="font-sans text-gray-400 text-lg font-medium italic">{t("activities.empty")}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

