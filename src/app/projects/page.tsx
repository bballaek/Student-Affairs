import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "โครงการ",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
