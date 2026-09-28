"use server";

import { deliverLead } from "@/lib/deliver-lead";

export type QuoteState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "phone" | "service", string>>;
  values?: Record<string, string>;
};

const field = (data: FormData, key: string, max = 200) => String(data.get(key) ?? "").trim().slice(0, max);

/** Handles the short quote form on the homepage and service pages. Delivery: see lib/deliver-lead.ts. */
export async function submitQuote(_prev: QuoteState, data: FormData): Promise<QuoteState> {
  // Honeypot: real visitors never fill this hidden field.
  if (field(data, "company_website")) return { status: "success" };

  const quote = {
    name: field(data, "name", 120),
    company: field(data, "company", 160),
    email: field(data, "email", 160),
    phone: field(data, "phone", 40),
    service: field(data, "service", 80),
    location: field(data, "location", 160),
    message: field(data, "message", 3000),
  };

  const errors: QuoteState["errors"] = {};
  if (!quote.name) errors.name = "Please enter your name.";
  if (!quote.email && !quote.phone) errors.email = "Please provide an email or phone number.";
  if (quote.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(quote.email)) errors.email = "Please enter a valid email.";
  if (quote.phone && quote.phone.replace(/\D/g, "").length < 10) errors.phone = "Please enter a valid phone number.";
  if (!quote.service) errors.service = "Please select a service.";
  if (Object.keys(errors).length) {
    return { status: "error", message: "Please correct the highlighted fields.", errors, values: quote };
  }

  const result = await deliverLead({
    subject: `Quote request: ${quote.service} — ${quote.name}`,
    replyTo: quote.email,
    fields: [
      ["Name", quote.name],
      ["Company", quote.company],
      ["Email", quote.email],
      ["Phone", quote.phone],
      ["Service", quote.service],
      ["Location", quote.location],
      ["Details", quote.message],
    ],
  });

  if (!result.ok) return { status: "error", message: result.message, values: quote };
  return {
    status: "success",
    message: result.devLogged ? "Development mode: request logged to the server console." : undefined,
  };
}
