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
import { usePathname } from "next/navigation";

type NavLink = {
  href: string;
  label: string;
  isEnabled: boolean;
  icon: LucideIcon;
};

export default function Sidebar() {
  const navLinks: NavLink[] = [
    { href: "/dashboard", label: "Dashboard", isEnabled: true, icon: LayoutDashboard },
    {
      href: "/dashboard/excel-parser",
      label: "Excel Parser",
      isEnabled: false,
      icon: FileSpreadsheet,
    },
    { href: "/dashboard/env-tools", label: "Env Tools", isEnabled: false, icon: Settings },
    { href: "/dashboard/generators", label: "Generators", isEnabled: false, icon: Key },
  ];

  const pathname = usePathname();
  console.log(pathname);

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
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition
                ${
                  isActive
                    ? "bg-accent text-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
            >
              <link.icon className="h-4 w-4 me-1" />
              {!collapsed && <span>{link.label}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
