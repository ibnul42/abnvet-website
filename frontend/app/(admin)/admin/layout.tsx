// app/admin/layout.tsx
import type { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-semibold mb-6">Admin</h2>
        <nav className="space-y-4">
          <a href="/admin/dashboard" className="block hover:underline">
            Dashboard
          </a>
          <a href="/admin/profile" className="block hover:underline">
            Profile
          </a>
          <a href="/admin/settings" className="block hover:underline">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">{children}</main>
    </div>
  );
}
