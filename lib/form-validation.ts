/** Shared server-side helpers for the site's form actions. */

/** Read a trimmed, length-capped string field from submitted form data. */
export const field = (data: FormData, key: string, max = 200) => String(data.get(key) ?? "").trim().slice(0, max);

/** Return `value` only if it is one of the allowed options; otherwise "". */
export const oneOf = (value: string, options: readonly string[]) => (options.includes(value) ? value : "");

export const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
export const isPhone = (value: string) => value.replace(/\D/g, "").length >= 10;

/** True when the hidden anti-spam field was filled in — only bots do that. */
export const isBot = (data: FormData) => field(data, "company_website") !== "";

export const messages = {
  name: "Please enter your name.",
  email: "Please enter a valid email address.",
  phone: "Please enter a valid phone number.",
  summary: "Please correct the highlighted fields.",
} as const;
