"use client";

import { useState, useEffect } from "react";

import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <main className="">
      <div className="dark:bg-boxdark-2 dark:text-bodydark">
        <div className=" flex ">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-auto">
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main>
              <div className=" p-4 md:p-6 2xl:p-10 q">
                {children}
              </div>
            </main>
          </div>
        </div>
      </div>
    </main>
  );
}
