export type NewsStatus = "draft" | "published" | "archived";

export type NewsItem = {
  id: string;
  slug: string;
  title: string;
  category: "Announcement" | "Activity" | "General";
  status: NewsStatus;
  updatedAt: string; // ISO date
  author: string;
  excerpt: string;
  content: string;
  coverImage?: string;
};

export const mockNews: NewsItem[] = [
  {
    id: "news_001",
    slug: "apply-student-mission-round-1",
    title: "ประกาศเปิดรับสมัครภารกิจนิสิต (รอบที่ 1)",
    category: "Announcement",
    status: "published",
    updatedAt: "2026-04-18T10:30:00.000Z",
    author: "Admin",
    excerpt:
      "เปิดรับสมัครภารกิจนิสิตรอบที่ 1 พร้อมรายละเอียดเงื่อนไขและช่วงเวลาการสมัคร",
    content:
      "ประกาศเปิดรับสมัครภารกิจนิสิต (รอบที่ 1)\n\n- ช่วงเวลารับสมัคร: 20 เม.ย. 2569 – 10 พ.ค. 2569\n- วิธีสมัคร: เข้าสู่ระบบ → เมนู Activities → กด New Activities\n- เอกสารประกอบ: บัตรนิสิต / แบบฟอร์มคำร้อง / หลักฐานกิจกรรม\n\nหมายเหตุ: โปรดตรวจสอบสถานะการอนุมัติในเมนู Schedule และติดตามข่าวสารผ่านหน้า News",
    coverImage:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "news_002",
    slug: "student-mission-approval-guide",
    title: "แนวทางการยื่นเอกสารและการอนุมัติภารกิจนิสิต",
    category: "General",
    status: "published",
    updatedAt: "2026-04-17T04:10:00.000Z",
    author: "Staff",
    excerpt:
      "สรุปขั้นตอนการยื่นเอกสาร, เกณฑ์การพิจารณา และระยะเวลาประมาณการอนุมัติ",
    content:
      "แนวทางการยื่นเอกสารและการอนุมัติภารกิจนิสิต\n\n1) กรอกข้อมูลให้ครบถ้วน\n2) แนบเอกสารประกอบ\n3) รอเจ้าหน้าที่ตรวจสอบ\n4) แจ้งผลผ่านระบบ\n\nระยะเวลาการตรวจสอบโดยเฉลี่ย 3-5 วันทำการ",
  },
  {
    id: "news_003",
    slug: "volunteer-training-schedule-draft",
    title: "อัปเดตกำหนดการอบรมอาสาสมัคร (Draft)",
    category: "Activity",
    status: "draft",
    updatedAt: "2026-04-19T16:05:00.000Z",
    author: "Staff",
    excerpt: "ร่างประกาศกำหนดการอบรมอาสาสมัคร (ยังไม่เผยแพร่)",
    content:
      "กำหนดการอบรมอาสาสมัคร (ร่าง)\n\n- รอบเช้า: 09:00–12:00\n- รอบบ่าย: 13:00–16:00\n\nรายละเอียดสถานที่และการลงทะเบียนจะแจ้งอีกครั้ง",
  },
  {
    id: "news_004",
    slug: "temporary-close-for-maintenance",
    title: "ประกาศปิดรับสมัครชั่วคราวเพื่อปรับปรุงระบบ",
    category: "Announcement",
    status: "archived",
    updatedAt: "2026-03-22T08:00:00.000Z",
    author: "Admin",
    excerpt: "ปิดรับสมัครชั่วคราวเพื่อปรับปรุงระบบและประสิทธิภาพการให้บริการ",
    content:
      "ประกาศปิดรับสมัครชั่วคราว\n\nทีมงานจะทำการปรับปรุงระบบในช่วงเวลาดังกล่าว และจะเปิดให้ใช้งานอีกครั้งเมื่อแล้วเสร็จ",
  },
];

