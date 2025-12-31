// use-copy hook
export type UseCopyOptions = {
  resetDelay?: number;
  messages?: Partial<Record<CopyStatus, string>>;
  onError?: (error: unknown) => void;
};

export type UseCopyReturn = {
  status: CopyStatus;
  statusMessage: string;
  copy: (value?: string | null) => Promise<boolean>;
  resetStatus: () => void;
};

export type CopyStatus = "idle" | "copied" | "error";
