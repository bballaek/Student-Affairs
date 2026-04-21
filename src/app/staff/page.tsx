import type { Metadata } from "next";
import StaffClient from "./StaffClient";

export const metadata: Metadata = {
  title: "บุคลากร",
};

export default function StaffPage() {
  return <StaffClient />;
}
