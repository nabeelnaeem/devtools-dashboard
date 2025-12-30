"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  COPY_STATUS_RESET_MS,
  CopyStatus,
  copyStatusClasses,
  defaultCopyStatusMessages,
} from "./copy-status";

export default function BulkUuidGenerator() {
  const [count, setCount] = useState(1);
  const [uuids, setUuids] = useState<string[]>([]);
  const [status, setStatus] = useState<CopyStatus>("idle");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleCountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextCount = Math.min(Math.max(Number(e.target.value) || 0, 1), 1000);
    setCount(nextCount);
  };

  const resetStatus = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setStatus("idle"), COPY_STATUS_RESET_MS);
  };

  const handleGenerateUuids = () => {
    const total = Math.min(Math.max(count, 1), 1000);
    setCount(total);
    const list = Array.from({ length: total }, () => crypto.randomUUID());
    setUuids(list);
    setStatus("idle");
  };

  const handleCopyAll = async () => {
    if (uuids.length === 0) return;
    try {
      await navigator.clipboard.writeText(uuids.join("\n"));
      setStatus("copied");
    } catch (error) {
      setStatus("error");
      console.log("Error copying UUID ", error);
    } finally {
      resetStatus();
    }
  };

  const statusMessages = { ...defaultCopyStatusMessages, copied: "UUIDs copied" };
  const statusMessage = status === "idle" ? "\u00A0" : statusMessages[status];

  return (
    <Card className="max-w-xl">
      <CardHeader>
        <CardTitle>Bulk UUID Generator</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <Input
          type="number"
          min={1}
          max={1000}
          value={count}
          placeholder="Number of UUIDs"
          onChange={handleCountChange}
        />
        <div className="flex gap-2 items-center">
          <Button onClick={handleGenerateUuids}>Generate</Button>
          <Button variant="secondary" onClick={handleCopyAll} disabled={uuids.length === 0}>
            Copy All
          </Button>
          <Badge
            aria-live="polite"
            className={`text-xs font-medium transition-all duration-300 ease-in-out border-transparent ${copyStatusClasses[status]}`}
          >
            {statusMessage}
          </Badge>
        </div>

        {uuids.length > 0 && (
          <div className="max-h-48 overflow-auto rounded border p-2 text-sm font-mono">
            {uuids.map((uuid) => (
              <div key={uuid}>{uuid}</div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
