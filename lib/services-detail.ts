/** Detail content for specialized services that live on the Services overview page. */

export const specializedServices = [
  {
    id: "mobile-patrol",
    title: "Mobile Patrol",
    summary:
      "Cost-effective coverage for properties that don't need a full-time post. Patrol officers conduct scheduled and randomized checks, respond to issues, and document every visit.",
    points: [
      "Scheduled and randomized patrol checks",
      "Lock-up, unlock, and perimeter checks",
      "Alarm and incident response support",
      "Documented reports for every visit",
    ],
  },
  {
    id: "access-control",
    title: "Access Control",
    summary:
      "Every person and vehicle entering your property verified and logged — at gatehouses, lobbies, loading docks, and event entrances.",
    points: [
      "Gatehouse and lobby operations",
      "Visitor, vendor, and contractor verification",
      "Vehicle checks and entry logs",
      "Credential and guest-list enforcement",
    ],
  },
  {
    id: "property-protection",
    title: "Property Protection",
    summary:
      "Visible deterrence and vigilant observation for vacant buildings, construction sites, and facilities with high-value assets.",
    points: [
      "Theft and vandalism deterrence",
      "Vacant property and after-hours watch",
      "Equipment and materials protection",
      "Hazard and maintenance issue reporting",
    ],
  },
] as const;
