"use client";

import * as React from "react";
import { CheckSquare, File, FileText, Mail, Search, Upload } from "lucide-react";

import { Input } from "@/components/admin/ui/input";
import { mockDashboardDocuments } from "@/mock-data/dashboard";

const iconMap = {
  files: FileText,
  mail: Mail,
  checklist: CheckSquare,
  file: File,
} as const;

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 1).toUpperCase();
  return (parts[0].slice(0, 1) + parts[1].slice(0, 1)).toUpperCase();
}

export default function RecentDocuments() {
  const [q, setQ] = React.useState("");
  const docs = React.useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return mockDashboardDocuments;
    return mockDashboardDocuments.filter((d) => d.name.toLowerCase().includes(query));
  }, [q]);

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card max-h-[400px] flex flex-col">
      <div className="flex items-center justify-between px-4 pt-[15px] pb-4 flex-wrap gap-2">
        <h2 className="text-[15px] font-normal text-foreground tracking-[-0.45px]">
          Recent Documents
        </h2>

        <div className="relative">
          <Search className="absolute left-2 top-1/2 size-4 -translate-y-1/2 text-muted-foreground z-10" />
          <Input
            placeholder="Search files..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="h-7 w-[140px] sm:w-[180px] md:w-[235px] pl-8 pr-2 text-sm text-muted-foreground rounded-md"
          />
        </div>
      </div>

      <div className="px-[14px] pb-4 overflow-y-auto flex-1">
        <div className="space-y-[8px]">
          {docs.map((doc) => {
            const Icon = iconMap[doc.icon] ?? FileText;
            return (
              <div
                key={doc.id}
                className="relative h-[46px] rounded-[10px] border border-border bg-sidebar hover:bg-sidebar-accent px-[7px]"
              >
                <div className="grid h-full items-center gap-2 sm:gap-3 md:gap-4 overflow-hidden grid-cols-1 sm:grid-cols-[minmax(0,1fr)_minmax(120px,auto)] md:grid-cols-[minmax(0,1fr)_minmax(140px,auto)_minmax(110px,auto)] lg:grid-cols-[minmax(0,1fr)_minmax(160px,auto)_minmax(130px,auto)_minmax(70px,auto)]">
                  <div className="flex items-center gap-2 min-w-0 overflow-hidden">
                    <div className="flex size-8 items-center justify-center rounded-[6px] border border-border bg-background shrink-0">
                      <Icon className="size-[18px] text-muted-foreground" />
                    </div>
                    <p className="text-[15px] font-normal text-foreground tracking-[-0.45px] truncate min-w-0">
                      {doc.name}
                    </p>
                  </div>

                  <div className="hidden sm:flex items-center gap-2 min-w-0 overflow-hidden">
                    <div className="size-[26px] rounded-full border border-border bg-background flex items-center justify-center text-[12px] text-muted-foreground shrink-0">
                      {initials(doc.author)}
                    </div>
                    <span className="text-[15px] font-normal text-foreground tracking-[-0.45px] whitespace-nowrap truncate min-w-0">
                      {doc.author}
                    </span>
                  </div>

                  <div className="hidden md:flex items-center gap-2 min-w-0 overflow-hidden">
                    <Upload className="size-4 text-muted-foreground shrink-0" />
                    <span className="text-[14px] font-normal text-muted-foreground tracking-[-0.42px] whitespace-nowrap truncate min-w-0">
                      {doc.uploadedAt}
                    </span>
                  </div>

                  <div className="hidden lg:flex items-center min-w-0 overflow-hidden">
                    <span className="text-[15px] font-normal text-muted-foreground tracking-[-0.45px] whitespace-nowrap truncate min-w-0">
                      {doc.size}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-card to-transparent rounded-br-xl rounded-bl-xl" />
    </div>
  );
}

