export const SITE_TITLE = "กลุ่มภารกิจกิจการนิสิต คณะครุศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย";

export function getSiteUrl() {
  // Best-effort base URL for metadata (Open Graph/Twitter)
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/+$/, "");
  return "http://localhost:3000";
}

