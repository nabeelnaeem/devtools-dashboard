import Link from "next/link";

type Link = {
  href: string;
  name: string;
  isActive: boolean;
};

export default function Sidebar() {
  const navLinks: Link[] = [
    { href: "/dashboard", name: "Dashboard", isActive: true },
    { href: "#a", name: "Excel Parser", isActive: false },
    { href: "#b", name: "Env Tools", isActive: false },
    { href: "#c", name: "Generators", isActive: false },
  ];

  return (
    <aside className="w-64 border-r bg-background p-4">
      <h2 className="mb-6 text-lg font-semibold">DevTools</h2>
      <nav className="space-y-2">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block text-sm text-muted-foreground ${
              link.isActive ? "hover:text-foreground" : "cursor-default"
            }`}
            aria-disabled={!link.isActive}
            tabIndex={link.isActive ? 0 : -1}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
