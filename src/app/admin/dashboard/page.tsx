"use client"; // Đánh dấu đây là Client Component

import React, { useState } from "react";
import SalesPerformance from "../../../../components/SalesPerformance";
import StatCard from "../../../../components/StatCard";

const Dashboard = () => {
  // Giữ tiêu đề đồng nhất giữa server và client
  const title = "Bảng điều khiển quản trị";

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <StatCard title="Total Sales" value="$9,328.55" growth="+15.6%" />
        <StatCard title="Visitors" value="12,302" growth="+12.7%" />
        <StatCard title="Orders" value="963" growth="-12.7%" />
      </div>
      <SalesPerformance />
    </div>
  );
};

export default Dashboard;
