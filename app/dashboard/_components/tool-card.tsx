import { Button } from "@/components/ui/button";
import Link from "next/link";

type ToolCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function ToolCard({ title, description, href }: ToolCardProps) {
  return (
    <div className="rounded-lg border p-4 flex flex-col justify-between">
      <div>
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>

      <Button asChild size="sm" className="mt-4 self-start">
        <Link href={href}>Open</Link>
      </Button>
    </div>
  );
}
