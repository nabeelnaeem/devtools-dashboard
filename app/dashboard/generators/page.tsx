import DashboardLayout from "@/components/layout/dashboard-layout";
import PageHeader from "@/components/page/page-header";

export default function GeneratorsPage() {
  return (
    <DashboardLayout>
      <PageHeader title="Generators" description="Generate UUIDs, keys, and other utilities." />

      <div className="text-sm text-muted-foreground">Tool UI will be added here.</div>
    </DashboardLayout>
  );
}
