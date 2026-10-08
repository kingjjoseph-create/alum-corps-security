"use server";

import { deliverLead } from "@/lib/deliver-lead";
import { field, isBot, isEmail, isPhone, messages } from "@/lib/form-validation";

export type QuoteState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "phone" | "service", string>>;
  values?: Record<string, string>;
};


/** Handles the short quote form on the homepage and service pages. Delivery: see lib/deliver-lead.ts. */
export async function submitQuote(_prev: QuoteState, data: FormData): Promise<QuoteState> {
  // Honeypot: real visitors never fill this hidden field.
  if (isBot(data)) return { status: "success" };

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
  if (!quote.name) errors.name = messages.name;
  if (!quote.email && !quote.phone) errors.email = "Please provide an email or phone number.";
  if (quote.email && !isEmail(quote.email)) errors.email = messages.email;
  if (quote.phone && !isPhone(quote.phone)) errors.phone = messages.phone;
  if (!quote.service) errors.service = "Please select a service.";
  if (Object.keys(errors).length) {
    return { status: "error", message: messages.summary, errors, values: quote };
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
