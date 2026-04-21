"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Newspaper,
  Activity,
  CalendarDays,
  FileText,
  Info,
  FolderKanban,
  Users,
  Settings,
  PlusCircle,
  ChevronDown,
  ChevronRight,
  User,
  LogIn,
  LogOut,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/admin/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/admin/ui/dropdown-menu";
import { Button } from "@/components/admin/ui/button";

type Item = {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  match?: (pathname: string) => boolean;
};

export default function AdminSidebar() {
  const pathname = usePathname() || "";

  const isAuthenticated = true;
  const user = {
    name: "Admin",
    email: "studentaffairs.edu@chula.ac.th",
  };

  const primaryItems: Item[] = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard, match: (p) => p === "/admin" },
    { href: "/admin/news", label: "News", icon: Newspaper, match: (p) => p.startsWith("/admin/news") },
    { href: "/admin/activities", label: "Activities", icon: Activity, match: (p) => p.startsWith("/admin/activities") },
    { href: "/admin/schedule", label: "Schedule", icon: CalendarDays, match: (p) => p.startsWith("/admin/schedule") },
  ];

  const managerItems: Item[] = [
    { href: "/admin/manager/pages", label: "Pages", icon: FileText, match: (p) => p.startsWith("/admin/manager/pages") },
    { href: "/admin/manager/information", label: "Information", icon: Info, match: (p) => p.startsWith("/admin/manager/information") },
    { href: "/admin/manager/project", label: "Project", icon: FolderKanban, match: (p) => p.startsWith("/admin/manager/project") },
    { href: "/admin/manager/staff", label: "Staff", icon: Users, match: (p) => p.startsWith("/admin/manager/staff") },
  ];

  const settingItems: Item[] = [
    { href: "/admin/settings/user", label: "User", icon: Settings, match: (p) => p.startsWith("/admin/settings/user") },
  ];

  return (
    <Sidebar className="lg:border-r-0!" collapsible="offcanvas">
      <SidebarHeader className="pb-0">
        <div className="px-2 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 w-full">
              <Image
                src="/logo.png"
                alt="SA-EDU CMS"
                className="size-7 object-contain"
                width={28}
                height={28}
              />
              <div className="min-w-0">
                <div className="font-semibold leading-5 truncate">SA-EDU CMS</div>
                <div className="text-xs text-muted-foreground leading-4 truncate">
                  กลุ่มภารกิจกิจการนิสิต
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full h-11 justify-between rounded-lg shadow-none bg-background border-border/60"
                  size="sm"
                >
                  <span className="flex items-center gap-2">
                    <PlusCircle className="size-5" />
                    <span className="text-[16px] font-semibold">New</span>
                  </span>
                  <ChevronDown className="size-5 opacity-80" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64" align="start">
                <DropdownMenuItem asChild>
                  <Link href="/admin/news/new" className="flex items-center gap-3">
                    <Newspaper className="size-5" />
                    <span>News</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/admin/activities" className="flex items-center gap-3">
                    <Activity className="size-5" />
                    <span>Activities</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/admin/schedule" className="flex items-center gap-3">
                    <CalendarDays className="size-5" />
                    <span>Schedule</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {primaryItems.map((item) => {
                const Icon = item.icon;
                const isActive = item.match?.(pathname) ?? pathname === item.href;
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className="h-9 text-[15px] text-muted-foreground"
                      tooltip={item.label}
                    >
                      <Link href={item.href}>
                        <Icon className="size-[18px]" />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel className="h-4 pb-4 pt-2 text-xs text-muted-foreground">
            Manager
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {managerItems.map((item) => {
                const Icon = item.icon;
                const isActive = item.match?.(pathname) ?? pathname === item.href;
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className="h-9 text-[15px] text-muted-foreground"
                      tooltip={item.label}
                    >
                      <Link href={item.href}>
                        <Icon className="size-[18px]" />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel className="h-4 pb-4 pt-2 text-xs text-muted-foreground">
            Setting
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingItems.map((item) => {
                const Icon = item.icon;
                const isActive = item.match?.(pathname) ?? pathname === item.href;
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className="h-9 text-[15px] text-muted-foreground"
                      tooltip={item.label}
                    >
                      <Link href={item.href}>
                        <Icon className="size-[18px]" />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        {isAuthenticated ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-auto w-full justify-start gap-3 rounded-xl px-2 py-2 hover:bg-sidebar-accent"
              >
                <span className="size-10 shrink-0 rounded-full bg-linear-to-br from-fuchsia-500 via-pink-500 to-rose-400" />
                <span className="min-w-0 flex-1 text-left">
                  <span className="block truncate text-sm font-semibold leading-5">
                    {user.name}
                  </span>
                  <span className="block truncate text-xs text-muted-foreground">
                    {user.email}
                  </span>
                </span>
                <ChevronRight className="size-4 shrink-0 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64" align="start">
              <DropdownMenuItem asChild>
                <Link href="/admin/settings/user" className="flex items-center gap-3">
                  <User className="size-5" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/admin/settings" className="flex items-center gap-3">
                  <Settings className="size-5" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link
                  href="/admin/logout"
                  className="flex items-center gap-3 text-destructive focus:text-destructive"
                >
                  <LogOut className="size-5" />
                  <span>Logout</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button
            asChild
            size="sm"
            variant={pathname === "/admin/login" ? "default" : "secondary"}
            className="h-9 w-full justify-start gap-2 rounded-xl"
          >
            <Link href="/admin/login">
              <LogIn className="size-4" />
              <span>Login</span>
            </Link>
          </Button>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}

