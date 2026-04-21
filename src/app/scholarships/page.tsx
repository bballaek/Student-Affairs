import type { Metadata } from "next";
import ScholarshipsClient from "./ScholarshipsClient";

export const metadata: Metadata = {
  title: "สวัสดิการนิสิต",
};

export default function ScholarshipsPage() {
  return <ScholarshipsClient />;
}
