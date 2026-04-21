"use client";

import * as React from "react";

import StatCard from "@/components/admin/dashboard/StatCard";
import ChartCard from "@/components/admin/dashboard/ChartCard";
import RecentDocuments from "@/components/admin/dashboard/RecentDocuments";
import PeopleTable from "@/components/admin/dashboard/PeopleTable";
import { mockDashboardStats } from "@/mock-data/dashboard";

export default function DashboardContent() {
  return (
    <div className="w-full overflow-y-auto overflow-x-hidden p-4 h-full">
      <div className="mx-auto w-full space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {mockDashboardStats.map((stat) => (
            <StatCard
              key={stat.id}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard />
          <RecentDocuments />
        </div>

        <PeopleTable />
      </div>
    </div>
  );
}

