"use server";

import { site } from "@/lib/site";

export type QuoteState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "phone" | "service", string>>;
  values?: Record<string, string>;
};

const field = (data: FormData, key: string, max = 200) => String(data.get(key) ?? "").trim().slice(0, max);

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/**
 * Handles homepage quote requests.
 *
 * Delivery: set RESEND_API_KEY (and optionally QUOTE_TO_EMAIL / QUOTE_FROM_EMAIL)
 * to email each request via Resend. Without a key, requests are logged to the
 * server console in development, and production visitors are asked to call or
 * email instead — so no request is ever silently dropped.
 */
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

  const lines = [
    ["Name", quote.name],
    ["Company", quote.company],
    ["Email", quote.email],
    ["Phone", quote.phone],
    ["Service", quote.service],
    ["Location", quote.location],
    ["Details", quote.message],
  ].filter(([, v]) => v);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[quote request — email delivery not configured]", quote);
      return { status: "success", message: "Development mode: request logged to the server console." };
    }
    return {
      status: "error",
      message: `Online requests are temporarily unavailable. Please call ${site.phone} or email ${site.email}.`,
      values: quote,
    };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.QUOTE_FROM_EMAIL ?? `${site.name} Website <onboarding@resend.dev>`,
      to: [process.env.QUOTE_TO_EMAIL ?? site.email],
      reply_to: quote.email || undefined,
      subject: `Quote request: ${quote.service} — ${quote.name}`,
      text: lines.map(([k, v]) => `${k}: ${v}`).join("\n"),
      html: `<table>${lines
        .map(([k, v]) => `<tr><th align="left" valign="top">${k}</th><td>${escapeHtml(v).replace(/\n/g, "<br>")}</td></tr>`)
        .join("")}</table>`,
    }),
  });

  if (!res.ok) {
    console.error("Quote email failed", res.status, await res.text().catch(() => ""));
    return {
      status: "error",
      message: `We couldn't send your request. Please call ${site.phone} or email ${site.email}.`,
      values: quote,
    };
  }

  return { status: "success" };
}
