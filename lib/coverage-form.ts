/** Options for the Request Security Coverage form, shared by the form UI and server validation. */

export const securityTypes = [
  "Commercial Security",
  "Residential Security",
  "Event Security",
  "Mobile Patrol",
  "Access Control",
  "Property Protection",
  "Other / Not sure",
] as const;

export const armedOptions = ["Unarmed", "Armed", "Not sure"] as const;
export const frequencyOptions = ["Recurring", "One-time"] as const;
export const vehiclePatrolOptions = ["Yes", "No", "Not sure"] as const;

export type CoverageField =
  | "name"
  | "company"
  | "email"
  | "phone"
  | "location"
  | "securityType"
  | "armed"
  | "guards"
  | "startDate"
  | "hours"
  | "frequency"
  | "vehiclePatrol"
  | "attendance"
  | "description";

export type CoverageState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<CoverageField, string>>;
  values?: Partial<Record<CoverageField, string>>;
};
