import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <p className="text-muted-foreground">Landing page (we’ll build this later)</p>
      <p>
        <Link href="/dashboard">
          <Button>Go to Dashboard</Button>
        </Link>
      </p>
    </main>
  );
}
