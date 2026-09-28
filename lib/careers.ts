/** Content and settings for the Careers page. */

/**
 * Online applications stay OFF until a secure backend is configured for
 * applicant data (license numbers, resumes). While false, the form is shown
 * but locked, and nothing can be submitted. See README → "Enabling online
 * applications" before changing this.
 */
export const applicationsEnabled = false;

export const positions = [
  { title: "Unarmed Security Officer", note: "Class “D” license" },
  { title: "Armed Security Officer", note: "Class “D” and “G” licenses" },
  { title: "Event Security Staff", note: "Flexible, event-based shifts" },
  { title: "Mobile Patrol Officer", note: "Valid driver’s license required" },
  { title: "Site Supervisor", note: "Leadership experience preferred" },
];

export const reasonsToJoin = [
  {
    title: "A Standard Worth Wearing",
    body: "Represent a company known for professionalism, discipline, and respect — on every post.",
  },
  {
    title: "Varied Assignments",
    body: "Commercial, residential, and event work, so you can grow your skills across environments.",
  },
  {
    title: "Flexible Scheduling",
    body: "Full-time, part-time, and event-based shifts to fit your availability.",
  },
  {
    title: "Supportive Supervision",
    body: "Clear post orders, responsive supervisors, and leadership that stays involved.",
  },
];

export const requirements = [
  "At least 18 years of age",
  "Florida Class “D” Security Officer License (or application in progress)",
  "Class “G” Statewide Firearm License for armed positions",
  "Professional appearance and clear communication",
  "Reliable transportation to your assigned post",
  "Ability to pass a background check",
];

export const hiringSteps = [
  { title: "Apply", body: "Share your experience, licensing, and availability." },
  { title: "Review", body: "Our team reviews your qualifications and licensing status." },
  { title: "Interview", body: "Meet with our team to discuss assignments and expectations." },
  { title: "Onboard", body: "Complete orientation, receive your post orders, and get to work." },
];

// Form options
export const licenseStatuses = [
  "Active Class “D” license",
  "Active Class “D” and “G” licenses",
  "License application in progress",
  "Not yet licensed",
] as const;

export const credentialOptions = ["Unarmed", "Armed", "Both"] as const;

export const experienceOptions = ["Less than 1 year", "1–2 years", "3–5 years", "6–10 years", "10+ years"] as const;

export const availabilityOptions = [
  "Full-time",
  "Part-time",
  "Weekdays",
  "Weeknights",
  "Weekends",
  "Overnight",
] as const;

export const assignmentOptions = [
  "Commercial",
  "Residential",
  "Event",
  "Mobile Patrol",
  "Access Control",
  "Construction & Industrial",
] as const;
