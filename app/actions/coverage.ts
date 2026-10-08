"use server";

import {
  armedOptions,
  frequencyOptions,
  securityTypes,
  vehiclePatrolOptions,
  type CoverageField,
  type CoverageState,
} from "@/lib/coverage-form";
import { deliverLead } from "@/lib/deliver-lead";
import { field, isBot, isEmail, isPhone, messages, oneOf } from "@/lib/form-validation";


/** Handles the full Request Security Coverage form. Delivery: see lib/deliver-lead.ts. */
export async function submitCoverageRequest(_prev: CoverageState, data: FormData): Promise<CoverageState> {
  if (isBot(data)) return { status: "success" };

  const v: Record<CoverageField, string> = {
    name: field(data, "name", 120),
    company: field(data, "company", 160),
    email: field(data, "email", 160),
    phone: field(data, "phone", 40),
    location: field(data, "location", 200),
    securityType: oneOf(field(data, "securityType", 60), securityTypes),
    armed: oneOf(field(data, "armed", 20), armedOptions),
    guards: field(data, "guards", 6),
    startDate: field(data, "startDate", 10),
    hours: field(data, "hours", 200),
    frequency: oneOf(field(data, "frequency", 20), frequencyOptions),
    vehiclePatrol: oneOf(field(data, "vehiclePatrol", 20), vehiclePatrolOptions),
    attendance: field(data, "attendance", 9),
    description: field(data, "description", 5000),
  };

  const errors: CoverageState["errors"] = {};
  if (!v.name) errors.name = messages.name;
  if (!isEmail(v.email)) errors.email = messages.email;
  if (!isPhone(v.phone)) errors.phone = messages.phone;
  if (!v.location) errors.location = "Please enter the service location.";
  if (!v.securityType) errors.securityType = "Please select a security type.";
  if (v.guards && !(Number.isInteger(Number(v.guards)) && Number(v.guards) >= 1))
    errors.guards = "Please enter a whole number of guards (1 or more).";
  if (v.attendance && !(Number.isInteger(Number(v.attendance)) && Number(v.attendance) >= 1))
    errors.attendance = "Please enter expected attendance as a whole number.";
  if (v.startDate && Number.isNaN(Date.parse(v.startDate))) errors.startDate = "Please choose a valid date.";
  if (!v.description) errors.description = "Please describe your security needs.";

  if (Object.keys(errors).length) {
    return { status: "error", message: messages.summary, errors, values: v };
  }

  const result = await deliverLead({
    subject: `Security coverage request: ${v.securityType} — ${v.name}`,
    replyTo: v.email,
    fields: [
      ["Name", v.name],
      ["Company / organization", v.company],
      ["Email", v.email],
      ["Phone", v.phone],
      ["Service location", v.location],
      ["Security type", v.securityType],
      ["Armed / unarmed", v.armed],
      ["Number of guards", v.guards],
      ["Start date", v.startDate],
      ["Hours required", v.hours],
      ["Recurring or one-time", v.frequency],
      ["Vehicle patrol required", v.vehiclePatrol],
      ["Event attendance", v.attendance],
      ["Description of security needs", v.description],
    ],
  });

  if (!result.ok) return { status: "error", message: result.message, values: v };
  return {
    status: "success",
    message: result.devLogged ? "Development mode: request logged to the server console." : undefined,
  };
}
