"use client";
import { COPY_STATUS_RESET_MS, defaultMessages, FALLBACK_MESSAGE } from "@/lib/constants";
import { CopyStatus, UseCopyOptions, UseCopyReturn } from "@/lib/types/general.types";
import { useEffect, useRef, useState } from "react";

export function useCopy({
  resetDelay = COPY_STATUS_RESET_MS,
  messages = {},
  onError,
}: UseCopyOptions = {}): UseCopyReturn {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const [isCopying, setIsCopying] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const scheduleReset = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setStatus("idle"), resetDelay);
  };

  const resetStatus = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setStatus("idle");
  };

  const copy = async (value?: string | null) => {
    if (!value) return false;

    if (typeof navigator === "undefined" || !navigator.clipboard?.writeText) {
      const err = new Error("Clipboard API is not available in this environment.");
      setStatus("error");
      onError?.(err);
      scheduleReset();
      return false;
    }

    setIsCopying(true);
    try {
      await navigator.clipboard.writeText(value);
      setStatus("copied");
      return true;
    } catch (error) {
      setStatus("error");
      onError ? onError(error) : console.error("Error copying to clipboard", error);
      return false;
    } finally {
      setIsCopying(false);
      scheduleReset();
    }
  };

  const statusMessage =
    status === "idle" ? FALLBACK_MESSAGE : { ...defaultMessages, ...messages }[status];
  return { status, statusMessage, copy, resetStatus, isCopying };
}
