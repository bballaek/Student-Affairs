import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { getActivityBySlug, type ActivityCategory } from "@/content/activities";
import { getSiteUrl, SITE_TITLE } from "@/lib/site";
import NewsShareBar from "@/components/news/NewsShareBar";
import { renderArticleBlocks } from "@/lib/article-blocks";

type Props = {
  params: Promise<{ slug: string }>;
};

function categoryLabelTh(category: ActivityCategory) {
  switch (category) {
    case "news":
      return "ข่าวสาร";
    case "highlights":
      return "ไฮไลท์";
    case "calendar":
      return "ปฏิทินกิจกรรม";
    case "student":
      return "กิจกรรมนิสิต";
    case "announcements":
      return "ประกาศคณะ";
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getActivityBySlug(slug);
  if (!item) return { title: "ไม่พบข้อมูล" };

  const base = new URL(getSiteUrl());
  const url = new URL(`/activities/${item.slug}`, base);
  const title = item.titleTh;
  const description = item.excerptTh;
  const images = [{ url: item.coverImage, width: 1200, height: 630, alt: item.titleTh }];

  return {
    title,
    description,
    alternates: { canonical: url.pathname },
    openGraph: {
      type: "article",
      url: url.toString(),
      siteName: SITE_TITLE,
      title,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [item.coverImage],
    },
  };
}

export default async function ActivityDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getActivityBySlug(slug);
  if (!item) notFound();

  const body = item.bodyTh?.trim() ? item.bodyTh : item.excerptTh;

  return (
    <article className="container mx-auto px-4 md:px-8 py-10 max-w-[980px]">
      <nav aria-label="Breadcrumb" className="mb-6">
        <div className="inline-flex items-center rounded-full border border-gray-200 bg-primary/10 px-3 py-1.5 text-sm text-gray-700">
          <Link href="/" className="inline-flex items-center gap-1.5 hover:text-primary">
            <Home className="size-4" />
          </Link>
          <ChevronRight className="size-4 text-gray-400 mx-1" />
          <Link href="/activities" className="hover:text-primary font-medium">
            ประชาสัมพันธ์
          </Link>
          <ChevronRight className="size-4 text-gray-400 mx-1" />
          <span className="font-medium text-gray-900 line-clamp-1">{item.titleTh}</span>
        </div>
      </nav>

      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
        <Image src={item.coverImage} alt={item.titleTh} fill className="object-cover" priority />
      </div>

      <header className="mt-6">
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
          <time dateTime={item.publishedAt} className="font-medium">
            {item.dateTh}
          </time>
          <span className="text-gray-300">•</span>
          <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
            {categoryLabelTh(item.category)}
          </span>
        </div>

        <h1 className="mt-3 font-heading font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-gray-900">
          {item.titleTh}
        </h1>

        <NewsShareBar title={item.titleTh} path={`/activities/${slug}`} />
      </header>

      <section aria-label="Content">{renderArticleBlocks(body)}</section>
    </article>
  );
}

