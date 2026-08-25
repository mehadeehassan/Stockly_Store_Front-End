"use client";

import { TrendingUp, ShoppingBag, AlertTriangle, Users } from "lucide-react";
import StatCard from "@components/dashboard/stat-card";
import SalesChart from "@components/dashboard/sales-chart";
import RecentSales from "@components/dashboard/recent-sales";
import TopProducts from "@components/dashboard/top-products";
import LowStockAlerts from "@components/dashboard/low-stock";

export default function DashboardPage() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold text-[#241C14]">
          Good morning, Mehadee !
        </h1>
        <p className="mt-0.5 text-sm text-[#8A7B6C]">
          Here&apos;s what&apos;s happening in your store today.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard
          label="Today's Sales"
          value="৳ 5,421"
          sub="3 transactions today"
          icon={TrendingUp}
          color="#8140DC"
        />
        <StatCard
          label="Total Orders"
          value="3"
          sub="128 all-time"
          icon={ShoppingBag}
          color="#FB6C00"
        />
        <StatCard
          label="Low Stock Items"
          value="4"
          sub="Need attention"
          icon={AlertTriangle}
          color="#C98A1B"
        />
        <StatCard
          label="Total Customers"
          value="4"
          sub="Active customers"
          icon={Users}
          color="#5B7553"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Weekly chart */}
        <SalesChart />

        {/* Low stock alerts */}
        <LowStockAlerts />
      </div>

      {/* Top Products Component */}
      <TopProducts />

      {/* Recent transactions */}
      <RecentSales />
    </div>
  );
}