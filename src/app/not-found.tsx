import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto max-w-lg px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">404</p>
      <h1 className="mt-2 font-heading text-2xl font-bold text-gray-900">ไม่พบหน้านี้</h1>
      <p className="mt-3 text-sm text-gray-600">
        ลิงก์อาจผิดหรือหน้าถูกย้ายแล้ว ลองกลับไปหน้าหลักหรือใช้เมนูด้านบน
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:opacity-95"
      >
        กลับหน้าหลัก
      </Link>
    </div>
  );
}
