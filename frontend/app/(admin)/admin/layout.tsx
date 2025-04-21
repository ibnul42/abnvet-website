// app/admin/layout.tsx
import AdminSidebar from "@/components/AdminSidebar";
import type { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-[calc(100vh-116px)] flex overflow-hidden">
      {/* Sidebar */}
      <AdminSidebar />
      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">{children}</main>
    </div>
  );
}
