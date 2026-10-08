"use server";

import { contactTopics, type ContactState } from "@/lib/contact-form";
import { deliverLead } from "@/lib/deliver-lead";
import { field, isBot, isEmail, isPhone, messages, oneOf } from "@/lib/form-validation";


/** Handles the Contact Us form. Delivery: see lib/deliver-lead.ts. */
export async function submitContact(_prev: ContactState, data: FormData): Promise<ContactState> {
  if (isBot(data)) return { status: "success" };

  const v = {
    name: field(data, "name", 120),
    email: field(data, "email", 160),
    phone: field(data, "phone", 40),
    topic: oneOf(field(data, "topic", 60), contactTopics),
    message: field(data, "message", 5000),
  };

  const errors: ContactState["errors"] = {};
  if (!v.name) errors.name = messages.name;
  if (!isEmail(v.email)) errors.email = messages.email;
  if (v.phone && !isPhone(v.phone)) errors.phone = messages.phone;
  if (!v.topic) errors.topic = "Please choose a topic.";
  if (!v.message) errors.message = "Please enter a message.";
  if (Object.keys(errors).length) {
    return { status: "error", message: messages.summary, errors, values: v };
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
