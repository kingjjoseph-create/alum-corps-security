import {
  ApartmentIcon,
  BadgeIcon,
  BuildingIcon,
  CarIcon,
  ClipboardIcon,
  GateIcon,
  HomeIcon,
  KeyIcon,
  ParkingIcon,
  SunIcon,
  UsersIcon,
  WavesIcon,
} from "@/components/Icons";

/** Content for the Residential Security page. */

export const residentialProperties = [
  {
    id: "gated-communities",
    icon: GateIcon,
    title: "Gated Communities & HOAs",
    summary:
      "The gate sets the tone for the whole community. Our officers verify every visitor and vendor with courtesy, enforce community rules consistently, and keep common areas safe.",
    coverage: ["Gatehouse and visitor management", "Vendor and contractor verification", "Roving patrols of streets and common areas"],
  },
  {
    id: "condominiums",
    icon: BuildingIcon,
    title: "Condominiums & High-Rises",
    summary:
      "Residents expect a secure building and a welcoming lobby. We provide front-desk security that combines concierge-level service with firm access control.",
    coverage: ["Lobby and front-desk officers", "Package-room and garage monitoring", "Stairwell, roof, and floor rounds"],
  },
  {
    id: "apartment-communities",
    icon: ApartmentIcon,
    title: "Apartment Communities",
    summary:
      "Multifamily properties need a visible, respected presence. We deter trespassing and vehicle crime while supporting your leasing and management teams.",
    coverage: ["After-hours patrols", "Amenity and pool monitoring", "Parking enforcement support"],
  },
  {
    id: "private-estates",
    icon: HomeIcon,
    title: "Private Estates",
    summary:
      "For private residences, discretion is everything. Our officers protect your home and family quietly, professionally, and on your schedule.",
    coverage: ["Dedicated residential officers", "Gate and perimeter protection", "Staff, guest, and delivery screening"],
  },
  {
    id: "active-adult-communities",
    icon: UsersIcon,
    title: "55+ & Active Adult Communities",
    summary:
      "Residents value a calm, familiar, and attentive presence. Our officers are patient, approachable, and ready to assist in everyday situations and emergencies.",
    coverage: ["Friendly, consistent officer presence", "Resident assistance and wellness awareness", "Emergency response coordination"],
  },
  {
    id: "seasonal-properties",
    icon: SunIcon,
    title: "Seasonal & Vacant Homes",
    summary:
      "When owners are away for the season, homes are vulnerable. Scheduled checks and documented patrols help catch problems early and deter intruders.",
    coverage: ["Scheduled property checks", "Exterior and entry-point inspections", "Documented reports to the owner"],
  },
] as const;

export type ResidentialPropertyId = (typeof residentialProperties)[number]["id"];

export const residentialServices = [
  { key: "gatehouse", icon: GateIcon, title: "Gatehouse & Visitor Management", body: "Every guest, vendor, and delivery verified and logged." },
  { key: "patrol", icon: CarIcon, title: "Roving & Mobile Patrol", body: "Randomized patrols of streets, garages, and common areas." },
  { key: "concierge", icon: BadgeIcon, title: "Concierge & Front Desk", body: "Professional lobby officers who welcome and protect." },
  { key: "amenity", icon: WavesIcon, title: "Amenity Monitoring", body: "Pools, clubhouses, and fitness areas kept safe and orderly." },
  { key: "parking", icon: ParkingIcon, title: "Parking Enforcement Support", body: "Resident and guest parking rules applied consistently." },
  { key: "response", icon: UsersIcon, title: "Resident Assistance", body: "Courteous help with lockouts, noise, and neighbor concerns." },
  { key: "checks", icon: KeyIcon, title: "Vacant Home Checks", body: "Scheduled inspections while owners are away." },
  { key: "reporting", icon: ClipboardIcon, title: "Reporting to Management", body: "Clear daily and incident reports for boards and managers." },
] as const;

export type ResidentialServiceKey = (typeof residentialServices)[number]["key"];

export const residentialValues = [
  { word: "Discreet", body: "Security that protects without intruding on residents' privacy or daily life." },
  { word: "Courteous", body: "Officers who greet residents warmly and treat every guest with respect." },
  { word: "Vigilant", body: "Constant awareness — on every patrol, at every hour, on every shift." },
  { word: "Accountable", body: "Consistent enforcement of community rules and clear reporting on every incident." },
];

export const managementBenefits = [
  {
    title: "Post orders built around your rules",
    body: "We translate your community's governing documents and policies into clear, written officer procedures.",
  },
  {
    title: "One point of contact",
    body: "A dedicated contact for your board or management office — no call centers, no runaround.",
  },
  {
    title: "Transparent reporting",
    body: "Daily activity and incident reports you can share with your board and residents.",
  },
  {
    title: "Consistent, familiar officers",
    body: "We aim to keep the same officers at your community so residents know who is protecting them.",
  },
];
