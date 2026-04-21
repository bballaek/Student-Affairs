import { NewsEditor } from "@/components/admin/news/NewsEditor";
import { mockNews } from "@/mock-data/news";

export default async function AdminNewsEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = mockNews.find((n) => n.id === id);

  if (!item) {
    return (
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="text-sm text-muted-foreground">Not found</div>
        <h2 className="mt-2 text-xl font-semibold tracking-tight">News not found</h2>
      </div>
    );
  }

  return <NewsEditor item={item} />;
}

