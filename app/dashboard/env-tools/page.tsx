import DashboardLayout from "@/components/layout/dashboard-layout";
import PageHeader from "@/components/page/page-header";

export default function EnvToolsPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title="Environment Tools"
        description="Manage, validate, and secure environment variables."
      />

      <div className="text-sm text-muted-foreground">Tool UI will be added here.</div>
    </DashboardLayout>
  );
}
