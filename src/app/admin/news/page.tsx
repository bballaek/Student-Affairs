import { NewsTable } from "@/components/admin/news/NewsTable";
import { mockNews } from "@/mock-data/news";

export default function AdminNewsPage() {
  return (
    <>
      <div>
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">News</h2>
        <p className="text-sm text-muted-foreground">
          Manage announcements and updates.
        </p>
      </div>
      <NewsTable items={mockNews} />
    </>
  );
}

