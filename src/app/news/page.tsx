import Link from "next/link";
import { mockNews } from "@/mock-data/news";

export default function NewsIndexPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12 max-w-[900px]">
      <h1 className="font-heading font-bold text-3xl md:text-4xl text-gray-900">
        News
      </h1>
      <div className="mt-8 space-y-4">
        {mockNews.map((n) => (
          <Link
            key={n.id}
            href={`/news/${n.slug}`}
            className="block rounded-xl border border-gray-200 bg-white p-5 hover:bg-gray-50 transition-colors"
          >
            <div className="font-heading font-bold text-lg text-gray-900">{n.title}</div>
            <div className="mt-1 text-sm text-gray-500">
              {n.category} • {n.author}
            </div>
            <p className="mt-3 text-gray-700 text-sm leading-relaxed">{n.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

