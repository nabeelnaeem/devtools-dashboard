"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";

type CopyStatus = "idle" | "copied" | "error";

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
    timeoutRef.current = setTimeout(() => setStatus("idle"), 2500);
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
    status === "copied" ? "UUID copied" : status === "error" ? "Copy failed" : "";

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
            className={`text-xs font-medium transition-all duration-300 ease-in-out border-transparent
              ${status === "copied" ? "bg-emerald-100 text-emerald-700 opacity-100" : ""}
              ${status === "error" ? "bg-rose-100 text-rose-700 opacity-100" : ""}
              ${status === "idle" ? "opacity-0 translate-y-1 pointer-events-none" : "translate-y-0"}
            `}
          >
            {/* Use a fallback character to maintain height when text is empty */}
            {status === "idle" ? "\u00A0" : statusMessage}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
