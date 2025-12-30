import ThemeToggle from "./theme-toggle";
import UserMenu from "./user-menu";

export default function Header() {
  return (
    <header className="h-14 border-b px-6 flex items-center justify-between">
      <h1 className="text-sm font-medium">Developer Utilities Platform</h1>

      <div className="flex items-center gap-2">
        <ThemeToggle />
        <UserMenu />
      </div>
    </header>
  );
}
