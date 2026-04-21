import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/i18n/LanguageContext";
import AppChrome from "@/components/layout/AppChrome";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const SITE_TITLE = "กลุ่มภารกิจกิจการนิสิต คณะครุศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย";

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`,
  },
  description: "ส่งเสริมกิจกรรมของนิสิต ดูแลสวัสดิการ และระบบดูแลที่ครอบคลุม เพื่อให้นิสิตค้นหาตัวตน พัฒนาความสามารถ และเติบโตอย่างมีคุณภาพ",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={cn("font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body className="antialiased font-sans bg-white text-gray-900 flex flex-col min-h-screen">
        <LanguageProvider>
          <AppChrome>{children}</AppChrome>
        </LanguageProvider>
      </body>
    </html>
  );
}
