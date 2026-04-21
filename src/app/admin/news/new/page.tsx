import { NewsEditor } from "@/components/admin/news/NewsEditor";
import type { NewsItem } from "@/mock-data/news";

export default function AdminNewsNewPage() {
  const empty: NewsItem = {
    id: "news_new",
    slug: "",
    title: "",
    category: "Announcement",
    status: "draft",
    updatedAt: new Date().toISOString(),
    author: "Admin",
    excerpt: "",
    content: "",
  };

  return <NewsEditor item={empty} mode="new" />;
}

