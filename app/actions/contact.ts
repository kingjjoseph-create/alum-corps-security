"use server";

import { contactTopics, type ContactState } from "@/lib/contact-form";
import { deliverLead } from "@/lib/deliver-lead";

const field = (data: FormData, key: string, max = 200) => String(data.get(key) ?? "").trim().slice(0, max);

/** Handles the Contact Us form. Delivery: see lib/deliver-lead.ts. */
export async function submitContact(_prev: ContactState, data: FormData): Promise<ContactState> {
  if (field(data, "company_website")) return { status: "success" }; // honeypot

  const v = {
    name: field(data, "name", 120),
    email: field(data, "email", 160),
    phone: field(data, "phone", 40),
    topic: (contactTopics as readonly string[]).includes(field(data, "topic", 60)) ? field(data, "topic", 60) : "",
    message: field(data, "message", 5000),
  };

  const errors: ContactState["errors"] = {};
  if (!v.name) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) errors.email = "Please enter a valid email address.";
  if (v.phone && v.phone.replace(/\D/g, "").length < 10) errors.phone = "Please enter a valid phone number.";
  if (!v.topic) errors.topic = "Please choose a topic.";
  if (!v.message) errors.message = "Please enter a message.";
  if (Object.keys(errors).length) {
    return { status: "error", message: "Please correct the highlighted fields.", errors, values: v };
  }

  const result = await deliverLead({
    subject: `Website contact: ${v.topic} — ${v.name}`,
    replyTo: v.email,
    fields: [
      ["Name", v.name],
      ["Email", v.email],
      ["Phone", v.phone],
      ["Topic", v.topic],
      ["Message", v.message],
    ],
  });

  if (!result.ok) return { status: "error", message: result.message, values: v };
  return {
    status: "success",
    message: result.devLogged ? "Development mode: message logged to the server console." : undefined,
  };
}
