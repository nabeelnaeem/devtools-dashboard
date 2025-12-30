import DashboardLayout from "@/components/layout/dashboard-layout";
import PageHeader from "@/components/page/page-header";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <PageHeader title="Dashboard" description="Overview of your developer tools and usage." />

      <div className="text-sm text-muted-foreground">
        Select a tool from the sidebar to get started.
      </div>
    </DashboardLayout>
  );
}
