"use client";
import Link from "next/link";
import {
  LayoutDashboard,
  FileSpreadsheet,
  Settings,
  Key,
  ChevronLeft,
  LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

type NavLink = {
  href: string;
  label: string;
  isActive: boolean;
  icon: LucideIcon;
};

export default function Sidebar() {
  const navLinks: NavLink[] = [
    { href: "/dashboard", label: "Dashboard", isActive: true, icon: LayoutDashboard },
    { href: "#a", label: "Excel Parser", isActive: false, icon: FileSpreadsheet },
    { href: "#b", label: "Env Tools", isActive: false, icon: Settings },
    { href: "#c", label: "Generators", isActive: false, icon: Key },
  ];

  const [collapsed, setCollapsed] = useState(false);
  return (
    <aside
      className={`border-r bg-background transition-all duration-300
        ${collapsed ? "w-16" : "w-64"}`}
    >
      <div className="flex items-center justify-between p-4">
        {!collapsed && (
          <span className="text-sm font-semibold" onClick={() => setCollapsed(!collapsed)}>
            DevTools
          </span>
        )}
        <Button variant="ghost" size="icon" onClick={() => setCollapsed(!collapsed)}>
          <ChevronLeft
            className={`h-4 w-4 transition-transform ${collapsed ? "rotate-180" : ""}`}
          />
        </Button>
      </div>{" "}
      <nav className="space-y-1 px-2">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
            aria-disabled={!link.isActive}
            tabIndex={link.isActive ? 0 : -1}
          >
            <link.icon className="h-4 w-4 me-1" />
            {!collapsed && <span>{link.label}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
