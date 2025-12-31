"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { copyStatusClasses } from "@/lib/constants";
import { useCopy } from "@/hooks/use-copy";

export default function UuidGenerator() {
  const [uuid, setUuid] = useState("");
  const { status, statusMessage, copy, resetStatus } = useCopy({
    messages: { copied: "UUID Copied" },
  });

  const generateUuid = () => {
    setUuid(crypto.randomUUID());
    resetStatus();
  };

  const copyToClipboard = () => {
    copy(uuid);
  };

  return (
    <Card className="max-w-xl">
      <CardHeader>
        <CardTitle>UUID Generator</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <Input value={uuid} placeholder="Generated UUID will appear here" readOnly />

        <div className="flex gap-2 items-center">
          <Button onClick={generateUuid}>Generate</Button>
          <Button variant="secondary" onClick={copyToClipboard} disabled={!uuid}>
            Copy
          </Button>
          <Badge
            aria-live="polite"
            className={`text-xs font-medium transition-all duration-300 ease-in-out border-transparent ${copyStatusClasses[status]}`}
          >
            {statusMessage}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
