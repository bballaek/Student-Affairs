import type { Metadata } from "next";
import ActivitiesClient from "./ActivitiesClient";

export const metadata: Metadata = {
  title: "ประชาสัมพันธ์",
};

export default function ActivitiesPage() {
  return <ActivitiesClient />;
}
