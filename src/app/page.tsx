import HeroSlider from "@/components/home/HeroSlider";
import AboutPreview from "@/components/home/AboutPreview";
import MarqueeStrip from "@/components/home/MarqueeStrip";
import WelfarePreview from "@/components/home/WelfarePreview";
import NewsSection from "@/components/home/NewsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ภารกิจกิจการนิสิต คณะครุศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย",
  description: "ส่งเสริมกิจกรรมของนิสิต ดูแลสวัสดิการ และระบบดูแลที่ครอบคลุม เพื่อให้นิสิตค้นหาตัวตน พัฒนาความสามารถ และเติบโตอย่างมีคุณภาพ",
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutPreview />
      <WelfarePreview />
      <MarqueeStrip />
      <NewsSection />
    </>
  );
}
