"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { SidebarTrigger } from "@/components/admin/ui/sidebar";
import { Input } from "@/components/admin/ui/input";
import { ThemeToggle } from "@/components/admin/ThemeToggle";

export default function AdminHeader() {
  const pathname = usePathname() || "/admin";

  const title = (() => {
    if (pathname === "/admin") return "Welcome back 👋";
    if (pathname.startsWith("/admin/news")) return "News";
    if (pathname.startsWith("/admin/activities")) return "Activities";
    if (pathname.startsWith("/admin/schedule")) return "Schedule";
    if (pathname.startsWith("/admin/settings")) return "Settings";
    return "Dashboard";
  })();

  return (
    <div className="w-full sticky top-0 z-10 flex items-center justify-between border-b border-border/60 bg-background px-3 py-2.5 sm:px-4 sm:py-3 md:px-7">
      <div className="flex items-center gap-2 min-w-0 flex-1">
        <SidebarTrigger className="shrink-0" />
        <h1 className="text-base sm:text-xl md:text-2xl font-medium text-foreground truncate">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 shrink-0">
        <div className="hidden md:block relative w-64 lg:w-80">
          <Search className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input type="search" placeholder="Search..." className="pl-8 h-9" />
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
}

