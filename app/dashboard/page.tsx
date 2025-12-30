import PageHeader from "@/components/page/page-header";
import UsageCard from "./_components/usage-card";
import ToolCard from "./_components/tool-card";

export default function DashboardPage() {
  return (
    <>
      <PageHeader title="Dashboard" description="Overview of your developer tools and usage." />

      {/* Usage Placeholders */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <UsageCard label="Files Processed" value="0" />
        <UsageCard label="Active Tools" value="3" />
        <UsageCard label="Current Plan" value="Free" />
      </div>

      {/* Tool Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ToolCard
          title="Excel Parser"
          description="Convert Excel files into JSON format."
          href="/dashboard/excel"
        />

        <ToolCard
          title="Env Tools"
          description="Validate, format, and encrypt environment files."
          href="/dashboard/env"
        />

        <ToolCard
          title="Generators"
          description="Generate UUIDs, keys, and other identifiers."
          href="/dashboard/generators"
        />
      </div>
    </>
  );
}
