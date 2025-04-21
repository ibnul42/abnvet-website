"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  { name: "Profile", href: "/admin/profile" },
  { name: "Home", href: "/admin/home" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-800 text-white p-4 h-full overflow-auto">
      <h2 className="text-2xl font-semibold mb-6">Admin</h2>
      <nav className="space-y-4">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block hover:underline ${
              pathname === link.href
                ? "text-blue-400 font-semibold"
                : "text-white"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
