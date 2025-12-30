import PageHeader from "@/components/page/page-header";
import UuidGenerator from "./_components/uuid-generator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BulkUuidGenerator from "./_components/bulk-uuid-generator";

export default function GeneratorsPage() {
  return (
    <>
      <PageHeader title="Generators" description="Generate UUIDs, keys, and other utilities." />
      <Tabs defaultValue="single" className="max-w-xl">
        <TabsList>
          <TabsTrigger value="single">UUID (Single)</TabsTrigger>
          <TabsTrigger value="bulk">UUID (Bulk)</TabsTrigger>
        </TabsList>

        <TabsContent value="single">
          <UuidGenerator />
        </TabsContent>

        <TabsContent value="bulk">
          <BulkUuidGenerator />
        </TabsContent>
      </Tabs>
    </>
  );
}
