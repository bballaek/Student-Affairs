"use client";

import React from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import { SidebarProvider } from "@/components/admin/ui/sidebar";
import { ThemeProvider } from "@/components/admin/theme-provider";
import AdminThemeScope from "@/components/admin/AdminThemeScope";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <AdminThemeScope />
      <SidebarProvider className="bg-sidebar">
        <AdminSidebar />
        <div className="h-svh overflow-hidden lg:p-2 w-full">
          <div className="lg:border lg:border-border/60 lg:rounded-md overflow-hidden flex flex-col items-center justify-start bg-container h-full w-full bg-background text-foreground lg:shadow-sm">
            <AdminHeader />
            <div className="w-full overflow-y-auto overflow-x-hidden p-4 h-full">
              <div className="mx-auto w-full space-y-6">{children}</div>
            </div>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}

