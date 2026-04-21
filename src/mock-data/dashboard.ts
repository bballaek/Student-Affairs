export type DashboardStat = {
  id: string;
  title: string;
  value: string;
  icon: "users" | "clipboard" | "wallet" | "invoice";
};

export type DashboardChartPoint = {
  month: string;
  newLeads: number;
  replied: number;
};

export type DashboardDocument = {
  id: string;
  name: string;
  icon: "files" | "mail" | "checklist" | "file";
  author: string;
  uploadedAt: string;
  size: string;
};

export type DashboardPerson = {
  id: string;
  name: string;
  type: string;
  email: string;
  followUp: string;
  status: "active" | "offline" | "away";
  score: number;
  source: string;
  website: string;
};

export const mockDashboardStats: DashboardStat[] = [
  { id: "s1", title: "Total Users", value: "1,245", icon: "users" },
  { id: "s2", title: "Pending Requests", value: "28", icon: "clipboard" },
  { id: "s3", title: "Budget Used", value: "฿ 128,400", icon: "wallet" },
  { id: "s4", title: "Invoices", value: "14", icon: "invoice" },
];

export const mockDashboardChart: DashboardChartPoint[] = [
  { month: "Jun", newLeads: 420, replied: 280 },
  { month: "Jul", newLeads: 520, replied: 310 },
  { month: "Aug", newLeads: 610, replied: 360 },
  { month: "Sep", newLeads: 720, replied: 420 },
  { month: "Oct", newLeads: 810, replied: 500 },
  { month: "Nov", newLeads: 930, replied: 620 },
];

export const mockDashboardDocuments: DashboardDocument[] = [
  {
    id: "d1",
    name: "ประกาศทุนการศึกษา_ภาคต้น_2569.pdf",
    icon: "files",
    author: "Admin",
    uploadedAt: "18 เม.ย. 2569",
    size: "1.2 MB",
  },
  {
    id: "d2",
    name: "แบบฟอร์มคำร้องกิจการนิสิต.docx",
    icon: "file",
    author: "Staff",
    uploadedAt: "17 เม.ย. 2569",
    size: "320 KB",
  },
  {
    id: "d3",
    name: "อีเมลแจ้งกำหนดการประชุม.eml",
    icon: "mail",
    author: "Staff",
    uploadedAt: "16 เม.ย. 2569",
    size: "48 KB",
  },
  {
    id: "d4",
    name: "Checklist_งานกิจกรรม.xlsx",
    icon: "checklist",
    author: "Admin",
    uploadedAt: "15 เม.ย. 2569",
    size: "540 KB",
  },
];

export const mockDashboardPeople: DashboardPerson[] = [
  {
    id: "p1",
    name: "อัปเดตกำหนดการอบรมอาสาสมัคร (Draft)",
    type: "Activity",
    email: "student1@chula.ac.th",
    followUp: "—",
    status: "away",
    score: 86,
    source: "Web",
    website: "edu.chula.ac.th",
  },
  {
    id: "p2",
    name: "ประกาศเปิดรับสมัครภารกิจนิสิต (รอบที่ 1)",
    type: "Announcement",
    email: "student2@chula.ac.th",
    followUp: "—",
    status: "active",
    score: 92,
    source: "Admin",
    website: "edu.chula.ac.th",
  },
  {
    id: "p3",
    name: "ประกาศปิดรับสมัครชั่วคราวเพื่อปรับปรุงระบบ",
    type: "Announcement",
    email: "student3@chula.ac.th",
    followUp: "—",
    status: "offline",
    score: 64,
    source: "Admin",
    website: "edu.chula.ac.th",
  },
  {
    id: "p4",
    name: "แนวทางการยื่นเอกสารและการอนุมัติภารกิจนิสิต",
    type: "General",
    email: "student4@chula.ac.th",
    followUp: "—",
    status: "active",
    score: 73,
    source: "Web",
    website: "edu.chula.ac.th",
  },
];

