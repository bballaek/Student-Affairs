import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "เกี่ยวกับ",
};

export default function AboutPage() {
  return <AboutClient />;
}
