"use client";

import * as React from "react";
import Link from "next/link";
import { format } from "date-fns";
import { th } from "date-fns/locale";
import {
  ArrowLeft,
  Bold,
  ChevronDown,
  Code,
  Eye,
  ImagePlus,
  Italic,
  Link2,
  Plus,
  Save,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/admin/ui/button";
import { Input } from "@/components/admin/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/admin/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { slugify } from "@/lib/slug";
import type { NewsItem, NewsStatus } from "@/mock-data/news";

function statusPill(status: NewsStatus) {
  const base = "inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium";
  switch (status) {
    case "published":
      return `${base} border-emerald-200 bg-emerald-50 text-emerald-700`;
    case "draft":
      return `${base} border-amber-200 bg-amber-50 text-amber-700`;
    case "archived":
      return `${base} border-border bg-muted text-muted-foreground`;
  }
}

export function NewsEditor({
  item,
  mode = "edit",
}: {
  item: NewsItem;
  mode?: "edit" | "new";
}) {
  const [tab, setTab] = React.useState<"content" | "seo" | "slug">("content");
  const [slug, setSlug] = React.useState(item.slug);
  const [slugTouched, setSlugTouched] = React.useState(false);
  const [title, setTitle] = React.useState(item.title);
  const [excerpt, setExcerpt] = React.useState(item.excerpt);
  const [status, setStatus] = React.useState<NewsStatus>(item.status);
  const [category, setCategory] = React.useState(item.category);
  const [categories, setCategories] = React.useState<Array<NewsItem["category"] | string>>([
    "Announcement",
    "Activity",
    "General",
  ]);
  const [coverImage, setCoverImage] = React.useState<string | undefined>(item.coverImage);
  const [content, setContent] = React.useState(item.content);
  const [seoTitle, setSeoTitle] = React.useState("");
  const [seoDescription, setSeoDescription] = React.useState("");

  const fileInputId = React.useId();

  const updatedLabel =
    mode === "new"
      ? "—"
      : format(new Date(item.updatedAt), "d MMM yyyy, HH:mm", { locale: th });

  const onPickCover = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === "string") setCoverImage(result);
    };
    reader.readAsDataURL(file);
  };

  const controlBase =
    "h-11 w-full rounded-lg border border-input bg-background px-4 text-sm shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]";

  React.useEffect(() => {
    if (mode !== "new") return;
    if (slugTouched) return;
    const next = slugify(title);
    setSlug(next);
  }, [mode, slugTouched, title]);

  const tabButton = (key: "content" | "seo" | "slug", label: string) => {
    const active = tab === key;
    return (
      <button
        key={key}
        type="button"
        onClick={() => setTab(key)}
        className={[
          "px-3 py-2 text-sm font-medium transition-colors",
          "border-b-2 -mb-px",
          active
            ? "border-foreground text-foreground"
            : "border-transparent text-muted-foreground hover:text-foreground",
        ].join(" ")}
      >
        {label}
      </button>
    );
  };

  return (
    <div className="w-full overflow-y-auto overflow-x-hidden p-4 h-full">
      <div className="mx-auto w-full max-w-none space-y-4">
        <div className="flex items-center gap-3">
          <Button asChild variant="ghost" size="icon-sm">
            <Link href="/admin/news" aria-label="Back to News">
              <ArrowLeft className="size-4" />
            </Link>
          </Button>

          <div className="min-w-0">
            <div className="text-sm text-muted-foreground truncate">
              News /{" "}
              <span className="font-mono">{mode === "new" ? "new" : item.id}</span>
            </div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg md:text-xl font-semibold tracking-tight truncate">
                {title?.trim() ? title : mode === "new" ? "New News" : item.title}
              </h2>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-2 shrink-0">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 gap-2">
                  <span className={cn(statusPill(status))}>{status}</span>
                  <span className="text-muted-foreground">Status</span>
                  <ChevronDown className="size-4 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44">
                <DropdownMenuItem onClick={() => setStatus("draft")}>
                  <span className={cn(statusPill("draft"))}>draft</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatus("published")}>
                  <span className={cn(statusPill("published"))}>published</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatus("archived")}>
                  <span className={cn(statusPill("archived"))}>archived</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => setStatus((s) => (s === "draft" ? "published" : "draft"))}
                >
                  Toggle draft/published
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {slug?.trim() ? (
              <Button asChild variant="outline" size="sm" className="h-8 gap-2">
                <a
                  href={`/news/${slug.trim()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Eye className="size-4" />
                  Preview
                </a>
              </Button>
            ) : (
              <Button variant="outline" size="sm" className="h-8 gap-2" disabled>
                <Eye className="size-4" />
                Preview
              </Button>
            )}

            <Button size="sm" className="h-8 gap-2 bg-black text-white hover:bg-gray-900">
              <Save className="size-4" />
              Save
            </Button>
          </div>
        </div>

        <div className="border-b border-border">
          <div className="flex items-center gap-6">
            {tabButton("content", "Content")}
            {tabButton("seo", "SEO")}
            {tabButton("slug", "Slug")}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            {tab === "content" ? (
              <div className="rounded-xl border border-border bg-card">
                <div className="border-b border-border p-4">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="lg:col-span-2">
                      <label className="text-xs font-medium text-muted-foreground">Title</label>
                      <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className={cn(controlBase, "mt-1")}
                      />
                    </div>
                    <div className="lg:col-span-1">
                      <label className="text-xs font-medium text-muted-foreground">Category</label>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button
                            type="button"
                            className={cn(
                              controlBase,
                              "mt-1 flex items-center justify-between gap-2 text-left font-normal"
                            )}
                          >
                            <span className="truncate">{category}</span>
                            <ChevronDown className="size-4 text-muted-foreground shrink-0" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          align="end"
                          className="w-64 rounded-xl p-0 shadow-lg"
                        >
                          {categories.map((c) => (
                            <DropdownMenuItem
                              key={c}
                              onClick={() => setCategory(c as never)}
                              className="px-4 py-2.5"
                            >
                              {c}
                            </DropdownMenuItem>
                          ))}
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            className="px-4 py-2.5"
                            onClick={() => {
                              const name = window.prompt("New Category name")?.trim();
                              if (!name) return;
                              setCategories((prev) =>
                                prev.includes(name) ? prev : [...prev, name]
                              );
                              setCategory(name as never);
                            }}
                          >
                            + New Category
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>

                  <div className="mt-3">
                    <label className="text-xs font-medium text-muted-foreground">Excerpt</label>
                    <textarea
                      value={excerpt}
                      onChange={(e) => setExcerpt(e.target.value)}
                      rows={2}
                      className="mt-1 w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                    <div className="mt-2 text-xs text-muted-foreground">
                      Last updated: {updatedLabel} • Author: {item.author}
                    </div>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">Content</label>
                    <div className="mt-2 flex items-center gap-1 text-muted-foreground">
                      <Button
                        type="button"
                        variant="secondary"
                        size="sm"
                        className="h-8 gap-2 mr-1"
                        onClick={() => {
                          // placeholder for block insert menu (will be wired to editor later)
                          window.alert("Add block (placeholder)");
                        }}
                      >
                        <Plus className="size-4" />
                        Add
                      </Button>
                      <Button type="button" variant="ghost" size="icon-sm" aria-label="Bold">
                        <Bold className="size-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        aria-label="Italic"
                      >
                        <Italic className="size-4" />
                      </Button>
                      <Button type="button" variant="ghost" size="icon-sm" aria-label="Code">
                        <Code className="size-4" />
                      </Button>
                      <Button type="button" variant="ghost" size="icon-sm" aria-label="Link">
                        <Link2 className="size-4" />
                      </Button>
                      <Button type="button" variant="ghost" size="icon-sm" aria-label="Image">
                        <ImagePlus className="size-4" />
                      </Button>
                    </div>
                    <textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      rows={14}
                      className="mt-1 w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Write your news content…"
                    />
                  </div>
                </div>
              </div>
            ) : tab === "seo" ? (
              <div className="rounded-xl border border-border bg-card">
                <div className="border-b border-border p-4">
                  <div className="text-sm font-medium">SEO</div>
                  <div className="text-xs text-muted-foreground">
                    Meta title/description สำหรับการแชร์และการค้นหา
                  </div>
                </div>
                <div className="p-4 space-y-4">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">
                      SEO Meta title
                    </label>
                    <Input
                      value={seoTitle}
                      onChange={(e) => setSeoTitle(e.target.value)}
                      placeholder="Optional"
                      className="mt-2 h-11 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">
                      SEO Meta description
                    </label>
                    <textarea
                      value={seoDescription}
                      onChange={(e) => setSeoDescription(e.target.value)}
                      rows={4}
                      placeholder="Optional"
                      className="mt-2 w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-xl border border-border bg-card">
                <div className="border-b border-border p-4">
                  <div className="text-sm font-medium">Slug</div>
                  <div className="text-xs text-muted-foreground">ส่วนท้ายของ URL</div>
                </div>
                <div className="p-4">
                  <label className="text-xs font-medium text-muted-foreground">Slug</label>
                  <input
                    value={slug}
                    onChange={(e) => {
                      setSlugTouched(true);
                      setSlug(e.target.value);
                    }}
                    placeholder="example-news-slug"
                    className={cn(controlBase, "mt-2")}
                  />
                  <div className="mt-2 text-xs text-muted-foreground">
                    URL: <span className="font-mono">/news/{slug}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <div className="rounded-xl border border-border bg-card">
                <div className="p-4">
                  <label className="text-xs font-medium text-muted-foreground">Featured Image</label>
                  <div className="mt-2 rounded-lg border border-input bg-background overflow-hidden">
                    <div className="aspect-[16/9] w-full bg-muted relative">
                      {coverImage ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={coverImage} alt="Cover" className="h-full w-full object-cover" />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center text-sm text-muted-foreground">
                          No cover image
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2 p-2">
                      <input
                        id={fileInputId}
                        type="file"
                        accept="image/*"
                        className="sr-only"
                        onChange={onPickCover}
                      />
                      <Button asChild size="sm" variant="secondary" className="h-8">
                        <label htmlFor={fileInputId} className="cursor-pointer">
                          <ImagePlus className="size-4 mr-2" />
                          Upload cover
                        </label>
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 text-destructive hover:text-destructive"
                        disabled={!coverImage}
                        onClick={() => setCoverImage(undefined)}
                      >
                        <Trash2 className="size-4 mr-2" />
                        Remove
                      </Button>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">Recommended 1600×600</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

