export type CopyStatus = "idle" | "copied" | "error";

export const COPY_STATUS_RESET_MS = 2500;

export const copyStatusClasses: Record<CopyStatus, string> = {
  idle: "opacity-0 translate-y-1 pointer-events-none",
  copied: "bg-emerald-100 text-emerald-700 opacity-100 translate-y-0",
  error: "bg-rose-100 text-rose-700 opacity-100 translate-y-0",
};

export const defaultCopyStatusMessages: Record<CopyStatus, string> = {
  idle: "",
  copied: "Copied",
  error: "Copy failed",
};
