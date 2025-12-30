"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import {
  COPY_STATUS_RESET_MS,
  CopyStatus,
  copyStatusClasses,
  defaultCopyStatusMessages,
} from "./copy-status";

export default function UuidGenerator() {
  const [uuid, setUuid] = useState("");
  const [status, setStatus] = useState<CopyStatus>("idle");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const resetStatus = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setStatus("idle"), COPY_STATUS_RESET_MS);
  };

  const generateUuid = () => {
    setUuid(crypto.randomUUID());
    setStatus("idle");
  };

  const copyToClipboard = async () => {
    if (!uuid) return;
    try {
      await navigator.clipboard.writeText(uuid);
      setStatus("copied");
    } catch (error) {
      setStatus("error");
      console.log("Error copying UUID ", error);
    } finally {
      resetStatus();
    }
  };

  const statusMessage =
    status === "idle" ? "\u00A0" : { ...defaultCopyStatusMessages, copied: "UUID copied" }[status];

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
            {/* Use a fallback character to maintain height when text is empty */}
            {statusMessage}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
