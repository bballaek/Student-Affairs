'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../i18n/LanguageContext';
import { Mail, Phone, Search, X } from 'lucide-react';

export default function StaffCards() {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [query, setQuery] = useState('');

  const categoryHashMap = useMemo(
    () => ({
      '#staff-all': 'all',
      '#staff-executives': 'executives',
      '#staff-staff': 'staff',
      '#staff-admin': 'admin',
      '#staff-welfare': 'welfare',
      '#staff-development': 'development',
    }),
    []
  );

  const categoryToHash = useMemo(
    () => ({
      all: '#staff-all',
      executives: '#staff-executives',
      staff: '#staff-staff',
      admin: '#staff-admin',
      welfare: '#staff-welfare',
      development: '#staff-development',
    }),
    []
  );

  useEffect(() => {
    const applyFromHash = () => {
      const hash = window.location.hash;
      const next = (categoryHashMap as Record<string, string>)[hash];
      if (next) setActiveCategory(next);
    };

    applyFromHash();
    window.addEventListener('hashchange', applyFromHash);
    return () => window.removeEventListener('hashchange', applyFromHash);
  }, [categoryHashMap]);

  const staffMembers: Array<{
    id: number;
    category: 'executives' | 'admin' | 'welfare' | 'development';
    name: string;
    nameEn: string;
    role: string;
    roleEn: string;
    email: string;
    phone: string;
    image: string;
    execLayer?: 'dean' | 'viceDean' | 'assistantDean' | 'headOfDepartment';
  }> = [
    {
      id: 1,
      category: 'executives',
      execLayer: 'dean',
      name: 'ศ.ดร.รุ่งเรือง วัฒนกิจ',
      nameEn: 'Prof. Dr. Rungrueang Watthanakit',
      role: 'คณบดี',
      roleEn: 'Dean',
      email: 'rungrueang.w@chula.ac.th',
      phone: '0-2218-2400',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 7,
      category: 'executives',
      execLayer: 'viceDean',
      name: 'รศ.ดร.กวิน สิริประชานุกูล',
      nameEn: 'Assoc. Prof. Dr. Kawin Siriprachanukul',
      role: 'รองคณบดี',
      roleEn: 'Vice Dean',
      email: 'kawin.s@chula.ac.th',
      phone: '0-2218-2450',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 8,
      category: 'executives',
      execLayer: 'viceDean',
      name: 'รศ.ดร.ศิริพงศ์ ปาละวงศ์ ณ อยุธยา',
      nameEn: 'Assoc. Prof. Dr. Siripong Palawong Na Ayutthaya',
      role: 'รองคณบดี',
      roleEn: 'Vice Dean',
      email: 'siripong.p@chula.ac.th',
      phone: '0-2218-2451',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 9,
      category: 'executives',
      execLayer: 'viceDean',
      name: 'ผศ.ดร.ภาณุภัทร วงศ์เก่ง',
      nameEn: 'Asst. Prof. Dr. Panuphat Wongkeng',
      role: 'รองคณบดี',
      roleEn: 'Vice Dean',
      email: 'panuphat.w@chula.ac.th',
      phone: '0-2218-2452',
      image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 10,
      category: 'executives',
      execLayer: 'viceDean',
      name: 'รศ.ดร.สิรีรัตน์ นกสกุล',
      nameEn: 'Assoc. Prof. Dr. Sirirat Noksakul',
      role: 'รองคณบดี',
      roleEn: 'Vice Dean',
      email: 'sirirat.n@chula.ac.th',
      phone: '0-2218-2453',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 11,
      category: 'executives',
      execLayer: 'assistantDean',
      name: 'ผศ.ดร.จิราพร ศรีสยาม',
      nameEn: 'Asst. Prof. Dr. Jirapon Srisayam',
      role: 'ผู้ช่วยคณบดี',
      roleEn: 'Assistant Dean',
      email: 'jirapon.s@chula.ac.th',
      phone: '0-2218-2460',
      image: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 12,
      category: 'executives',
      execLayer: 'assistantDean',
      name: 'ผศ.ดร.ณัฐวุฒิ พงษ์สวัสดิ์',
      nameEn: 'Asst. Prof. Dr. Nattawut Pongsawat',
      role: 'ผู้ช่วยคณบดี',
      roleEn: 'Assistant Dean',
      email: 'nattawut.p@chula.ac.th',
      phone: '0-2218-2461',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 13,
      category: 'executives',
      execLayer: 'assistantDean',
      name: 'ผศ.ดร.ชลธิชา วัฒนา',
      nameEn: 'Asst. Prof. Dr. Chonthicha Wattana',
      role: 'ผู้ช่วยคณบดี',
      roleEn: 'Assistant Dean',
      email: 'chonthicha.w@chula.ac.th',
      phone: '0-2218-2462',
      image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 14,
      category: 'executives',
      execLayer: 'headOfDepartment',
      name: 'รศ.ดร.ปณิธาน สุขุม',
      nameEn: 'Assoc. Prof. Dr. Panitan Sukhum',
      role: 'หัวหน้าภาควิชา',
      roleEn: 'Head of Department',
      email: 'panitan.s@chula.ac.th',
      phone: '0-2218-2470',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 15,
      category: 'executives',
      execLayer: 'headOfDepartment',
      name: 'รศ.ดร.กิตติพงศ์ นาคะ',
      nameEn: 'Assoc. Prof. Dr. Kittipong Naka',
      role: 'หัวหน้าภาควิชา',
      roleEn: 'Head of Department',
      email: 'kittipong.n@chula.ac.th',
      phone: '0-2218-2471',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 16,
      category: 'executives',
      execLayer: 'headOfDepartment',
      name: 'ผศ.ดร.ปิยะดา พิพัฒน์',
      nameEn: 'Asst. Prof. Dr. Piyada Pipat',
      role: 'หัวหน้าภาควิชา',
      roleEn: 'Head of Department',
      email: 'piyada.p@chula.ac.th',
      phone: '0-2218-2472',
      image: 'https://images.unsplash.com/photo-1524503033411-fdbfc0de7a9b?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 17,
      category: 'executives',
      execLayer: 'headOfDepartment',
      name: 'ผศ.ดร.วีรพล ศิริชัย',
      nameEn: 'Asst. Prof. Dr. Weerapol Sirichai',
      role: 'หัวหน้าภาควิชา',
      roleEn: 'Head of Department',
      email: 'weerapol.s@chula.ac.th',
      phone: '0-2218-2473',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 2,
      category: 'admin',
      name: 'นางสาววิมล สุขใจ',
      nameEn: 'Ms. Wimon Sukjai',
      role: 'เจ้าหน้าที่บริหารงานทั่วไป (ชำนาญการ)',
      roleEn: 'General Administration Officer (Professional)',
      email: 'wimon.s@chula.ac.th',
      phone: '0-2218-2401',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop'
    },
    {
      id: 3,
      category: 'welfare',
      name: 'นายสมชาย รักเรียน',
      nameEn: 'Mr. Somchai Rakrian',
      role: 'นักแนะแนวสวัสดิการนิสิต',
      roleEn: 'Student Welfare Guidance Officer',
      email: 'somchai.r@chula.ac.th',
      phone: '0-2218-2405',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 4,
      category: 'welfare',
      name: 'นางสาวกนกพร มีบุญ',
      nameEn: 'Ms. Kanokporn Meeboon',
      role: 'เจ้าหน้าที่ด้านทุนการศึกษา',
      roleEn: 'Scholarship Officer',
      email: 'kanokporn.m@chula.ac.th',
      phone: '0-2218-2406',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop'
    },
    {
      id: 5,
      category: 'development',
      name: 'นายธนา วรวุฒิ',
      nameEn: 'Mr. Thana Worawut',
      role: 'นักวิชาการศึกษา (พัฒนานิสิต)',
      roleEn: 'Education Officer (Student Development)',
      email: 'thana.w@chula.ac.th',
      phone: '0-2218-2410',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 6,
      category: 'development',
      name: 'นางสาวปิยนุช แสนสุข',
      nameEn: 'Ms. Piyanuch Saensuk',
      role: 'ผู้ประสานงานกิจกรรมนิสิตสัมพันธ์',
      roleEn: 'Student Relations Coordinator',
      email: 'piyanuch.s@chula.ac.th',
      phone: '0-2218-2411',
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1974&auto=format&fit=crop'
    }
  ];

  const filteredStaff = useMemo(() => {
    const byCategory =
      activeCategory === 'all'
        ? staffMembers
        : activeCategory === 'executives'
          ? staffMembers.filter((m) => m.category === 'executives')
          : activeCategory === 'staff'
            ? staffMembers.filter((m) => m.category !== 'executives')
          : staffMembers.filter((member) => member.category === activeCategory);

    const q = query.trim().toLowerCase();
    if (!q) return byCategory;

    return byCategory.filter((m) => {
      const hay = `${m.name} ${m.nameEn} ${m.role} ${m.roleEn}`.toLowerCase();
      return hay.includes(q);
    });
  }, [activeCategory, query, staffMembers]);

  const execGroups = useMemo(() => {
    if (activeCategory !== 'executives') return null;
    const dean = filteredStaff.find((m) => m.execLayer === 'dean') ?? null;
    const viceDeans = filteredStaff.filter((m) => m.execLayer === 'viceDean');
    const assistantDeans = filteredStaff.filter((m) => m.execLayer === 'assistantDean');
    const heads = filteredStaff.filter((m) => m.execLayer === 'headOfDepartment');
    const others = filteredStaff.filter((m) => !m.execLayer);
    return { dean, viceDeans, assistantDeans, heads, others };
  }, [activeCategory, filteredStaff]);

  const StaffCard = ({
    member,
    variant = 'default',
  }: {
    member: (typeof staffMembers)[number];
    variant?: 'default' | 'executive';
  }) => {
    const displayName = lang === 'th' ? member.name : member.nameEn;
    const displayRole = lang === 'th' ? member.role : member.roleEn;

    return (
      <div
        className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden h-full w-full max-w-[240px]"
      >
        <div className="relative w-full h-[280px] bg-gray-50">
          <Image src={member.image} alt={displayName} fill className="object-cover" />
        </div>

        <div
          className={`text-center flex flex-col items-center ${
            variant === 'executive' ? 'p-3 sm:p-4 gap-2' : 'p-3 sm:p-4 md:p-5 gap-2.5'
          }`}
        >
          <h3
            className={`font-heading font-semibold text-gray-800 leading-snug tracking-tight whitespace-nowrap overflow-hidden text-ellipsis max-w-full ${
              variant === 'executive'
                ? 'text-[14px] sm:text-[15px] md:text-[16px]'
                : 'text-[14px] sm:text-[15px] md:text-[16px]'
            }`}
          >
            {displayName}
          </h3>

          {variant === 'default' ? (
            <>
              <p className="font-sans text-[12px] sm:text-[13px] md:text-[14px] text-gray-600 leading-snug line-clamp-2">
                {displayRole}
              </p>

              <div className="font-sans text-[12px] sm:text-[13px] md:text-[14px] text-gray-900">
                <span className="text-gray-700">{lang === 'th' ? 'อีเมล' : 'Email'}</span>
                <span className="text-gray-400">{' : '}</span>
                <a className="hover:text-primary transition-colors break-all" href={`mailto:${member.email}`}>
                  {member.email}
                </a>
              </div>
            </>
          ) : null}
        </div>
      </div>
    );
  };

  return (
    <section className="pb-24 lg:pb-32 bg-white relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 right-[-5%] w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-[-5%] w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1280px] relative z-10">
        {/* Anchors for PageHeader subnav */}
        <div id="staff-all" className="scroll-mt-32" />
        <div id="staff-executives" className="scroll-mt-32" />
        <div id="staff-staff" className="scroll-mt-32" />
        <div id="staff-admin" className="scroll-mt-32" />
        <div id="staff-welfare" className="scroll-mt-32" />
        <div id="staff-development" className="scroll-mt-32" />

        {/* Search */}
        <div className="pt-10 pb-10">
          <div className="max-w-xl">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={lang === 'th' ? 'ค้นหาชื่อบุคลากร หรือ ตำแหน่ง…' : 'Search staff name or role…'}
                className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-10 py-2.5 text-[14px] font-sans outline-none focus:ring-2 focus:ring-primary/15 focus:border-primary transition"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full hover:bg-gray-50 flex items-center justify-center text-gray-400 hover:text-gray-600 transition"
                >
                  <X className="w-4 h-4" />
                </button>
              ) : null}
            </div>
          </div>
        </div>

        {activeCategory === 'executives' && execGroups ? (
          <div className="space-y-12">
            {/* Layer 1: Dean */}
            {execGroups.dean ? (
              <div className="text-center">
                <h2 className="font-heading text-xl md:text-2xl text-gray-700 mb-6">
                  {lang === 'th' ? 'คณบดี' : 'Dean'}
                </h2>
                <div className="flex justify-center">
                  <StaffCard member={execGroups.dean} variant="executive" />
                </div>
              </div>
            ) : null}

            {/* Layer 2: Vice Deans */}
            {execGroups.viceDeans.length ? (
              <div>
                <h2 className="text-center font-heading text-xl md:text-2xl text-gray-700 mb-8">
                  {lang === 'th' ? 'รองคณบดี' : 'Vice Deans'}
                </h2>
                <div className="grid grid-cols-[240px] sm:grid-cols-[repeat(2,240px)] lg:grid-cols-[repeat(4,240px)] justify-center gap-3 md:gap-4">
                  {execGroups.viceDeans.map((member) => (
                    <div key={member.id}>
                      <StaffCard member={member} variant="executive" />
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {/* Layer 3: Assistant Deans */}
            {execGroups.assistantDeans.length ? (
              <div>
                <h2 className="text-center font-heading text-xl md:text-2xl text-gray-700 mb-8">
                  {lang === 'th' ? 'ผู้ช่วยคณบดี' : 'Assistant Deans'}
                </h2>
                <div className="grid grid-cols-[240px] sm:grid-cols-[repeat(2,240px)] lg:grid-cols-[repeat(3,240px)] justify-center gap-3 md:gap-4">
                  {execGroups.assistantDeans.map((member) => (
                    <div key={member.id}>
                      <StaffCard member={member} variant="executive" />
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {/* Layer 4: Heads of Department */}
            {execGroups.heads.length ? (
              <div>
                <h2 className="text-center font-heading text-xl md:text-2xl text-gray-700 mb-8">
                  {lang === 'th' ? 'หัวหน้าภาควิชา' : 'Heads of Department'}
                </h2>
                <div className="grid grid-cols-[240px] sm:grid-cols-[repeat(2,240px)] lg:grid-cols-[repeat(4,240px)] justify-center gap-3 md:gap-4">
                  {execGroups.heads.map((member) => (
                    <div key={member.id}>
                      <StaffCard member={member} variant="executive" />
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {/* Others (if any) */}
            {execGroups.others.length ? (
              <div>
                <div className="grid grid-cols-[240px] sm:grid-cols-[repeat(2,240px)] lg:grid-cols-[repeat(3,240px)] xl:grid-cols-[repeat(4,240px)] justify-center gap-3 md:gap-4">
                  {execGroups.others.map((member) => (
                    <div key={member.id}>
                      <StaffCard member={member} />
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ) : (
          /* Default grid for other categories */
          <div className="grid grid-cols-[240px] sm:grid-cols-[repeat(2,240px)] lg:grid-cols-[repeat(3,240px)] xl:grid-cols-[repeat(4,240px)] justify-center gap-3 md:gap-4">
            {filteredStaff.map((member, i) => (
              <div
                key={member.id}
                className="animate-[fadeIn_0.5s_ease-out_forwards]"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <StaffCard member={member} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
