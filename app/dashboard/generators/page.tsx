import PageHeader from "@/components/page/page-header";
import UuidGenerator from "./_components/uuid-generator";

export default function GeneratorsPage() {
  return (
    <>
      <PageHeader title="Generators" description="Generate UUIDs, keys, and other utilities." />

      <UuidGenerator />
    </>
  );
}
