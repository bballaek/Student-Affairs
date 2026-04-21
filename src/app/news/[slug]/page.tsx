import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { th } from "date-fns/locale";
import { ChevronRight, Home } from "lucide-react";
import { mockNews } from "@/mock-data/news";
import NewsShareBar from "@/components/news/NewsShareBar";
import { renderArticleBlocks } from "@/lib/article-blocks";

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = mockNews.find((n) => n.slug === slug);

  if (!item) {
    return (
      <div className="container mx-auto px-4 md:px-8 py-16">
        <h1 className="text-2xl font-bold">Not found</h1>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 md:px-8 py-10 max-w-[980px]">
      <nav aria-label="Breadcrumb" className="mb-6">
        <div className="inline-flex items-center rounded-full border border-gray-200 bg-primary/10 px-3 py-1.5 text-sm text-gray-700">
          <Link href="/" className="inline-flex items-center gap-1.5 hover:text-primary">
            <Home className="size-4" />
          </Link>
          <ChevronRight className="size-4 text-gray-400 mx-1" />
          <Link href="/news" className="hover:text-primary font-medium">
            ประชาสัมพันธ์
          </Link>
          <ChevronRight className="size-4 text-gray-400 mx-1" />
          <span className="font-medium text-gray-900 line-clamp-1">{item.title}</span>
        </div>
      </nav>

      {item.coverImage ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
          <Image
            src={item.coverImage}
            alt={item.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      ) : null}

      <header className="mt-6">
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
          <time dateTime={item.updatedAt} className="font-medium">
            {format(new Date(item.updatedAt), "d MMM yyyy", { locale: th })}
          </time>
          <span className="text-gray-300">•</span>
          <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
            {item.category}
          </span>
        </div>

        <h1 className="mt-3 font-heading font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-gray-900">
          {item.title}
        </h1>

        <NewsShareBar title={item.title} path={`/news/${slug}`} />
      </header>

      <section aria-label="Content">{renderArticleBlocks(item.content)}</section>
    </article>
  );
}

