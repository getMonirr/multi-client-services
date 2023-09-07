"use client";
import React, { useEffect, useState } from "react";
import DashboardSideBar from "../leftSidebar/DashboardSideBar";
import TopNavbar from "../topNavbar/TopNavbar";

const DashboardLayouts = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex bg-multi-icon-bg">
      {/* sidebar  */}
      <DashboardSideBar
        isSidebarVisible={isSidebarVisible}
        toggleSidebar={toggleSidebar}
      />
      <div className="flex-1 bg-multi-icon-bg sm:ml-[240px]">
        <TopNavbar toggleSidebar={toggleSidebar} />
        <div className=" bg-multi-icon-bg w-full min-h-screen mt-[100px]">
          <div className="bg-white m-8 p-4 rounded-lg">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayouts;
