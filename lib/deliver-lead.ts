import "server-only";
import { site } from "@/lib/site";

export type LeadField = [label: string, value: string];

export type DeliveryResult =
  | { ok: true; devLogged?: boolean }
  | { ok: false; message: string };

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const fallback = (lead: string) =>
  `${lead} Please call ${site.phone} or email ${site.email}.`;

/**
 * Single place where website leads leave the app. Today it emails via Resend
 * (RESEND_API_KEY, QUOTE_TO_EMAIL, QUOTE_FROM_EMAIL). To send leads to a CRM or
 * another backend instead, replace the body of this function.
 *
 * Without a key: logs to the server console in development; in production the
 * visitor is asked to call or email, so no request is silently dropped.
 */
export async function deliverLead({
  subject,
  fields,
  replyTo,
}: {
  subject: string;
  fields: LeadField[];
  replyTo?: string;
}): Promise<DeliveryResult> {
  const filled = fields.filter(([, v]) => v);
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.info(`[${subject} — email delivery not configured]\n${filled.map(([k, v]) => `  ${k}: ${v}`).join("\n")}`);
      return { ok: true, devLogged: true };
    }
    return { ok: false, message: fallback("Online requests are temporarily unavailable.") };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.QUOTE_FROM_EMAIL ?? `${site.name} Website <onboarding@resend.dev>`,
      to: [process.env.QUOTE_TO_EMAIL ?? site.email],
      reply_to: replyTo || undefined,
      subject,
      text: filled.map(([k, v]) => `${k}: ${v}`).join("\n"),
      html: `<table cellpadding="6">${filled
        .map(([k, v]) => `<tr><th align="left" valign="top">${escapeHtml(k)}</th><td>${escapeHtml(v).replace(/\n/g, "<br>")}</td></tr>`)
        .join("")}</table>`,
    }),
  });

  if (!res.ok) {
    console.error("Lead email failed", res.status, await res.text().catch(() => ""));
    return { ok: false, message: fallback("We couldn't send your request.") };
  }
  return { ok: true };
}
