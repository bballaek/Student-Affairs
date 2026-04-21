"use client";

import * as React from "react";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/admin/ui/table";
import { cn } from "@/lib/utils";
import { mockDashboardPeople, type DashboardPerson } from "@/mock-data/dashboard";

type SortKey = keyof Pick<
  DashboardPerson,
  "name" | "type" | "email" | "followUp" | "status" | "score" | "source" | "website"
>;
type SortDir = "asc" | "desc";

export default function PeopleTable() {
  const [sortKey, setSortKey] = React.useState<SortKey | null>(null);
  const [sortDir, setSortDir] = React.useState<SortDir>("asc");

  const toggle = React.useCallback(
    (k: SortKey) => {
      setSortKey((prev) => {
        if (prev !== k) {
          setSortDir("asc");
          return k;
        }
        if (sortDir === "asc") {
          setSortDir("desc");
          return prev;
        }
        setSortDir("asc");
        return null;
      });
    },
    [sortDir]
  );

  const rows = React.useMemo(() => {
    if (!sortKey) return mockDashboardPeople;
    const dir = sortDir === "asc" ? 1 : -1;
    const copy = [...mockDashboardPeople];
    copy.sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      if (typeof av === "number" && typeof bv === "number") return (av - bv) * dir;
      return String(av).localeCompare(String(bv), undefined, { numeric: true, sensitivity: "base" }) * dir;
    });
    return copy;
  }, [sortDir, sortKey]);

  const SortIcon = ({ k }: { k: SortKey }) => {
    if (sortKey !== k) return <ArrowUpDown className="size-4 text-muted-foreground/70" />;
    return sortDir === "asc" ? (
      <ArrowUp className="size-4 text-foreground/80" />
    ) : (
      <ArrowDown className="size-4 text-foreground/80" />
    );
  };

  const Head = ({ k, label }: { k: SortKey; label: string }) => (
    <button
      type="button"
      onClick={() => toggle(k)}
      className={cn(
        "inline-flex items-center gap-1.5 select-none hover:text-foreground/90",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "rounded-sm -mx-1 px-1"
      )}
    >
      <span>{label}</span>
      <SortIcon k={k} />
    </button>
  );

  return (
    <div className="rounded-xl border border-border bg-card">
      <div className="border-b border-border px-4 py-3">
        <h2 className="text-[15px] font-normal text-foreground tracking-[-0.45px]">
          People
        </h2>
      </div>

      <div className="overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Head k="name" label="Name" />
              </TableHead>
              <TableHead>
                <Head k="type" label="Type" />
              </TableHead>
              <TableHead className="hidden md:table-cell">
                <Head k="email" label="Email" />
              </TableHead>
              <TableHead className="hidden lg:table-cell">
                <Head k="followUp" label="Follow-up" />
              </TableHead>
              <TableHead>
                <Head k="status" label="Status" />
              </TableHead>
              <TableHead className="hidden md:table-cell">
                <Head k="score" label="Score" />
              </TableHead>
              <TableHead className="hidden lg:table-cell">
                <Head k="source" label="Source" />
              </TableHead>
              <TableHead className="hidden lg:table-cell">
                <Head k="website" label="Website" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((p) => (
              <TableRow key={p.id}>
                <TableCell className="font-medium text-foreground">{p.name}</TableCell>
                <TableCell className="text-muted-foreground">{p.type}</TableCell>
                <TableCell className="hidden md:table-cell text-muted-foreground">
                  {p.email}
                </TableCell>
                <TableCell className="hidden lg:table-cell text-muted-foreground">
                  {p.followUp}
                </TableCell>
                <TableCell className="text-foreground">{p.status}</TableCell>
                <TableCell className="hidden md:table-cell text-muted-foreground">
                  {p.score}
                </TableCell>
                <TableCell className="hidden lg:table-cell text-muted-foreground">
                  {p.source}
                </TableCell>
                <TableCell className="hidden lg:table-cell text-muted-foreground">
                  {p.website}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

