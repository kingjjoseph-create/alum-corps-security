import {
  BagIcon,
  ClipboardIcon,
  CrownIcon,
  DoorIcon,
  FenceIcon,
  IdCardIcon,
  ParkingIcon,
  SirenIcon,
  UsersIcon,
} from "@/components/Icons";

/** Content for the Event Security page. */

export const eventServices = [
  {
    id: "entrance-exit-control",
    icon: DoorIcon,
    title: "Entrance & Exit Control",
    summary: "Orderly, efficient ingress and egress that keeps lines moving and every access point accounted for.",
    details: ["Staffed gates and doors", "Re-entry and capacity management", "Controlled egress at close"],
  },
  {
    id: "credential-verification",
    icon: IdCardIcon,
    title: "Credential Verification",
    summary: "Tickets, wristbands, badges, and guest lists checked consistently at every controlled point.",
    details: ["Ticket and wristband checks", "Staff, vendor, and media credentials", "Guest-list and ID verification"],
  },
  {
    id: "crowd-management",
    icon: UsersIcon,
    title: "Crowd Management",
    summary: "Trained officers who read the room, manage density, and de-escalate before issues grow.",
    details: ["Queue and density monitoring", "Stage-front and high-traffic posts", "Professional de-escalation"],
  },
  {
    id: "vip-areas",
    icon: CrownIcon,
    title: "VIP Areas",
    summary: "Discreet, polished protection for VIP lounges, green rooms, backstage, and distinguished guests.",
    details: ["VIP, backstage, and green-room posts", "Restricted-area access control", "Guest and talent escorts"],
  },
  {
    id: "bag-checkpoint-support",
    icon: BagIcon,
    title: "Bag & Checkpoint Support",
    summary: "Courteous, consistent screening that enforces your event's prohibited-items policy.",
    details: ["Bag checks at entry points", "Prohibited-item enforcement", "Support for wanding or screening lanes"],
  },
  {
    id: "perimeter-security",
    icon: FenceIcon,
    title: "Perimeter Security",
    summary: "Fence lines, back-of-house, and load-in areas secured to prevent unauthorized entry.",
    details: ["Fence-line and perimeter patrols", "Back-of-house and load-in control", "Overnight site and equipment watch"],
  },
  {
    id: "parking-control",
    icon: ParkingIcon,
    title: "Parking Control",
    summary: "Directed, safe traffic flow from arrival to departure — for guests, vendors, and VIPs.",
    details: ["Lot and garage direction", "Reserved and VIP parking enforcement", "Pedestrian safety at crossings"],
  },
  {
    id: "emergency-coordination",
    icon: SirenIcon,
    title: "Emergency Coordination",
    summary: "A clear chain of command and communication with venue staff, medical teams, and first responders.",
    details: ["Pre-event emergency planning", "Radio communication and command post", "Evacuation and shelter support"],
  },
  {
    id: "incident-documentation",
    icon: ClipboardIcon,
    title: "Incident Documentation",
    summary: "Accurate, timely reports of every incident — delivered to you after the event.",
    details: ["Written incident reports", "Ejection and injury documentation", "Post-event summary for organizers"],
  },
] as const;

export type EventServiceId = (typeof eventServices)[number]["id"];

export const eventLifecycle = [
  {
    phase: "Before",
    title: "Plan & Prepare",
    items: [
      "Site walkthrough and risk assessment",
      "Security plan, post map, and staffing levels",
      "Coordination with organizers, venue, and vendors",
      "Officer briefing on policies and credentials",
    ],
  },
  {
    phase: "During",
    title: "Protect & Respond",
    items: [
      "Entry, credential, and checkpoint operations",
      "Crowd, VIP, and perimeter coverage",
      "Supervisor on site with radio communication",
      "Immediate incident response and escalation",
    ],
  },
  {
    phase: "After",
    title: "Clear & Report",
    items: [
      "Controlled egress and parking dispersal",
      "Venue sweep and site handover",
      "Incident reports and documentation",
      "Debrief to refine future events",
    ],
  },
];

export const eventTypes = [
  "Concerts & Festivals",
  "Corporate Events & Conferences",
  "Galas & Fundraisers",
  "Weddings & Private Celebrations",
  "Sporting Events",
  "Community & Civic Events",
  "Trade Shows & Expos",
  "Nightlife & Venue Events",
];
