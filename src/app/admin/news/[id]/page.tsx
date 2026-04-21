import { mockNews } from "@/mock-data/news";

export default async function AdminNewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = mockNews.find((n) => n.id === id);

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="text-sm text-muted-foreground">News / {id}</div>
      <h2 className="mt-2 text-xl font-semibold tracking-tight">
        {item?.title ?? "Not found"}
      </h2>
      <p className="mt-3 whitespace-pre-wrap text-sm text-muted-foreground">
        {item?.content ?? "—"}
      </p>
    </div>
  );
}

