type UsageCardProps = {
  label: string;
  value: string;
};

export default function UsageCard({ label, value }: UsageCardProps) {
  return (
    <div className="rounded-lg border p-4">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="mt-1 text-xl font-semibold">{value}</p>
    </div>
  );
}
