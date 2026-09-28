export const contactTopics = [
  "Request a security quote",
  "Existing client support",
  "Employment inquiry",
  "General question",
] as const;

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "phone" | "topic" | "message", string>>;
  values?: Record<string, string>;
};
