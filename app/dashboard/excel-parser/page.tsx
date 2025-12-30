import DashboardLayout from "@/components/layout/dashboard-layout";
import PageHeader from "@/components/page/page-header";

export default function ExcelPage() {
  return (
    <DashboardLayout>
      <PageHeader title="Excel Parser" description="Convert Excel files into structured JSON." />

      <div className="text-sm text-muted-foreground">Tool UI will be added here.</div>
    </DashboardLayout>
  );
}
