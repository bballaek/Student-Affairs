"use client";

import * as React from "react";
import Link from "next/link";
import { format } from "date-fns";
import { th } from "date-fns/locale";
import { ArrowDown, ArrowUp, ArrowUpDown, MoreHorizontal, Plus, Search } from "lucide-react";

import { Button } from "@/components/admin/ui/button";
import { Input } from "@/components/admin/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/admin/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/admin/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import type { NewsItem, NewsStatus } from "@/mock-data/news";

type SortKey = "title" | "category" | "status" | "updatedAt" | "author";
type SortDir = "asc" | "desc";

function statusBadge(status: NewsStatus) {
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

export function NewsTable({ items }: { items: NewsItem[] }) {
  const [query, setQuery] = React.useState("");
  const [sortKey, setSortKey] = React.useState<SortKey | null>(null);
  const [sortDir, setSortDir] = React.useState<SortDir>("asc");

  const toggleSort = React.useCallback((key: SortKey) => {
    setSortKey((prevKey) => {
      // ↕ (none) -> ↑ (asc)
      if (prevKey !== key) {
        setSortDir("asc");
        return key;
      }

      // ↑ -> ↓
      if (sortDir === "asc") {
        setSortDir("desc");
        return prevKey;
      }

      // ↓ -> ↕ (none)
      setSortDir("asc");
      return null;
    });
  }, [sortDir]);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((n) => {
      return (
        n.title.toLowerCase().includes(q) ||
        n.category.toLowerCase().includes(q) ||
        n.status.toLowerCase().includes(q) ||
        n.author.toLowerCase().includes(q)
      );
    });
  }, [items, query]);

  const sorted = React.useMemo(() => {
    if (!sortKey) return filtered;
    const dir = sortDir === "asc" ? 1 : -1;
    const copy = [...filtered];
    copy.sort((a, b) => {
      switch (sortKey) {
        case "updatedAt": {
          const av = new Date(a.updatedAt).getTime();
          const bv = new Date(b.updatedAt).getTime();
          return (av - bv) * dir;
        }
        case "title":
          return a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: "base" }) * dir;
        case "category":
          return a.category.localeCompare(b.category, undefined, { numeric: true, sensitivity: "base" }) * dir;
        case "status":
          return a.status.localeCompare(b.status, undefined, { numeric: true, sensitivity: "base" }) * dir;
        case "author":
          return a.author.localeCompare(b.author, undefined, { numeric: true, sensitivity: "base" }) * dir;
      }
    });
    return copy;
  }, [filtered, sortDir, sortKey]);

  const SortIcon = React.useCallback(
    ({ k }: { k: SortKey }) => {
      if (sortKey !== k) return <ArrowUpDown className="size-4 text-muted-foreground/70" />;
      return sortDir === "asc" ? (
        <ArrowUp className="size-4 text-foreground/80" />
      ) : (
        <ArrowDown className="size-4 text-foreground/80" />
      );
    },
    [sortDir, sortKey]
  );

  const SortHead = React.useCallback(
    ({
      k,
      label,
      className,
    }: {
      k: SortKey;
      label: string;
      className?: string;
    }) => {
      return (
        <button
          type="button"
          onClick={() => toggleSort(k)}
          className={cn(
            "inline-flex items-center gap-1.5 select-none hover:text-foreground/90",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "rounded-sm -mx-1 px-1",
            className
          )}
          aria-label={`Sort by ${label}`}
        >
          <span>{label}</span>
          <SortIcon k={k} />
        </button>
      );
    },
    [SortIcon, toggleSort]
  );

  return (
    <div className="rounded-md border border-border bg-card">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 border-b border-border p-4">
        <div className="flex flex-1 items-center gap-2 sm:gap-4">
          <div className="relative flex-1 min-w-0">
            <Search className="absolute left-2 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search news..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-7 pl-8 w-full rounded-md"
            />
          </div>
        </div>
        <Button
          asChild
          size="sm"
          className="h-7 gap-2 shrink-0 !bg-black !text-white hover:!bg-gray-900"
        >
          <Link href="/admin/news/new">
            <Plus className="size-3.5 text-white" />
            <span className="text-white">New News</span>
          </Link>
        </Button>
      </div>

      <div className="overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <SortHead k="title" label="Title" />
              </TableHead>
              <TableHead className="hidden sm:table-cell">
                <SortHead k="category" label="Category" />
              </TableHead>
              <TableHead>
                <SortHead k="status" label="Status" />
              </TableHead>
              <TableHead className="hidden md:table-cell">
                <SortHead k="updatedAt" label="Updated" />
              </TableHead>
              <TableHead className="hidden md:table-cell">
                <SortHead k="author" label="Author" />
              </TableHead>
              <TableHead className="w-10" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {sorted.length ? (
              sorted.map((n) => (
                <TableRow key={n.id}>
                  <TableCell className="font-medium">
                    <Link
                      href={`/admin/news/${n.id}`}
                      className="hover:underline underline-offset-4"
                    >
                      {n.title}
                    </Link>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">{n.category}</TableCell>
                  <TableCell>
                    <span className={cn(statusBadge(n.status))}>{n.status}</span>
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-muted-foreground">
                    {format(new Date(n.updatedAt), "d MMM yyyy", { locale: th })}
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-muted-foreground">
                    {n.author}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem asChild>
                          <Link href={`/admin/news/${n.id}`}>View</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href={`/admin/news/${n.id}/edit`}>Edit</Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive focus:text-destructive">
                          Archive
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

