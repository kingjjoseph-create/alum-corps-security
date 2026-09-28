/** Content for the Commercial Security page. */

export const commercialSectors = [
  {
    id: "construction-sites",
    title: "Construction Sites",
    summary:
      "Active job sites hold high-value tools, materials, and equipment — often behind temporary fencing and left unattended overnight. We secure the site after crews leave and control who comes and goes while work is underway.",
    risks: ["Theft of tools, copper, and materials", "Equipment tampering and vandalism", "Trespass and after-hours liability"],
    coverage: [
      "After-hours and weekend guard posts",
      "Gate, contractor, and delivery control",
      "Perimeter and equipment-yard patrols",
      "Daily activity and incident reports",
    ],
  },
  {
    id: "solar-sites",
    title: "Solar Sites",
    summary:
      "Solar farms span wide, remote acreage with valuable panels, inverters, and copper wiring. We provide coverage through construction, commissioning, and operations — protecting assets that are difficult to watch from a single post.",
    risks: ["Copper wire and component theft", "Panel damage and vandalism", "Unauthorized access across large perimeters"],
    coverage: [
      "Perimeter patrols across large acreage",
      "Entry control for contractors and deliveries",
      "Protection of panels, inverters, and laydown yards",
      "Overnight and weekend coverage",
    ],
  },
  {
    id: "warehouses",
    title: "Warehouses & Distribution",
    summary:
      "High-volume facilities depend on secure docks, yards, and inventory. Our officers keep traffic accountable and deter internal and external theft without slowing down your operation.",
    risks: ["Cargo and inventory theft", "Unverified drivers and vehicles", "After-hours break-ins"],
    coverage: [
      "Truck and driver check-in with gate logs",
      "Dock, yard, and trailer monitoring",
      "Inventory shrink deterrence",
      "After-hours interior and exterior rounds",
    ],
  },
  {
    id: "offices",
    title: "Office Buildings",
    summary:
      "Tenants and visitors expect a professional, welcoming lobby — and a building that is secure. Our officers balance concierge-level courtesy with firm access control.",
    risks: ["Unauthorized building access", "Workplace disturbances", "After-hours intrusion"],
    coverage: [
      "Lobby and concierge-style officers",
      "Visitor and contractor check-in",
      "After-hours building and floor rounds",
      "Emergency response and evacuation support",
    ],
  },
  {
    id: "retail",
    title: "Retail Properties",
    summary:
      "From single storefronts to shopping centers, a visible, professional presence protects merchandise, employees, and customers — and keeps the property inviting.",
    risks: ["Shoplifting and organized retail theft", "Loitering and disturbances", "Parking lot incidents"],
    coverage: [
      "Uniformed, visible deterrence",
      "Loss-prevention support",
      "Parking lot and common-area patrols",
      "Opening and closing escorts",
    ],
  },
  {
    id: "apartment-communities",
    title: "Apartment Communities",
    summary:
      "Multifamily properties need security that residents appreciate and trespassers respect. We protect gates, amenities, and common areas while supporting property management.",
    risks: ["Trespassing and unauthorized guests", "Amenity misuse and after-hours noise", "Vehicle break-ins"],
    coverage: [
      "Gate and access control",
      "Pool, clubhouse, and amenity patrols",
      "Parking enforcement support",
      "Resident issue response and reporting",
    ],
  },
  {
    id: "parking-areas",
    title: "Parking Areas",
    summary:
      "Garages and surface lots are high-risk, low-visibility spaces. Regular patrols and a visible presence reduce break-ins and help people feel safe returning to their vehicles.",
    risks: ["Vehicle break-ins and theft", "Loitering and vagrancy", "Poor lighting and safety hazards"],
    coverage: [
      "Vehicle and foot patrols",
      "Safety escorts on request",
      "Deterrence of loitering and break-ins",
      "Lighting and hazard reporting",
    ],
  },
  {
    id: "industrial",
    title: "Industrial Properties",
    summary:
      "Manufacturing plants, industrial yards, and utility facilities require disciplined access control and constant vigilance. We follow your site's safety rules and credentialing to the letter.",
    risks: ["Unauthorized entry to controlled areas", "Theft of materials and equipment", "Safety and compliance incidents"],
    coverage: [
      "Gatehouse operations and credential checks",
      "Shift-change and vehicle inspections",
      "Perimeter and fence-line patrols",
      "Safety hazard observation and reporting",
    ],
  },
] as const;

export type CommercialSectorId = (typeof commercialSectors)[number]["id"];

export const commercialToolkit = [
  {
    key: "officers",
    title: "Uniformed Security Officers",
    body: "Professional, well-presented officers at dedicated posts — stationary, roving, or concierge-style.",
  },
  {
    key: "patrol",
    title: "Mobile Patrol",
    body: "Scheduled and randomized patrol checks for sites that don't need a full-time post.",
  },
  {
    key: "access",
    title: "Access Control & Gatehouse",
    body: "Verification of every employee, visitor, contractor, and vehicle entering your property.",
  },
  {
    key: "loss",
    title: "Loss Prevention",
    body: "Visible deterrence and observation that reduce theft, shrink, and vandalism.",
  },
  {
    key: "reporting",
    title: "Activity & Incident Reporting",
    body: "Clear, consistent documentation so you always know what happened on every shift.",
  },
  {
    key: "plans",
    title: "Custom Post Orders",
    body: "Written procedures tailored to your site, reviewed with you before the first shift.",
  },
] as const;

export const commercialProcess = [
  { title: "Site Assessment", body: "We walk your property, review past incidents, and identify vulnerabilities." },
  { title: "Security Plan", body: "You receive a coverage recommendation with post orders, schedules, and staffing." },
  { title: "Deployment", body: "Briefed, uniformed officers take post with supervision from day one." },
  { title: "Review & Refine", body: "Regular check-ins and reporting keep coverage aligned as your needs change." },
];
