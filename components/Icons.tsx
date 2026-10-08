import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const ShieldIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6l-8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </Base>
);

export const BuildingIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16" />
    <path d="M15 9h4a1 1 0 0 1 1 1v11" />
    <path d="M3 21h18M8 8h3M8 12h3M8 16h3" />
  </Base>
);

export const HomeIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="m3 11 9-7 9 7" />
    <path d="M5 10v10h14V10" />
    <path d="M10 20v-5h4v5" />
  </Base>
);

export const TicketIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 6h18v4a2 2 0 0 0 0 4v4H3v-4a2 2 0 0 0 0-4V6Z" />
    <path d="M15 6v12" strokeDasharray="2 2" />
  </Base>
);

export const BadgeIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="9" r="5" />
    <path d="m9 13.5-1.5 7.5 4.5-2.5 4.5 2.5-1.5-7.5" />
  </Base>
);

export const TargetIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="0.5" fill="currentColor" />
  </Base>
);

export const ClipboardIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="5" y="4" width="14" height="17" rx="1.5" />
    <path d="M9 4V3h6v1M9 10h6M9 14h6M9 18h3" />
  </Base>
);

export const RadioIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="6" y="8" width="12" height="13" rx="1.5" />
    <path d="M9 8 15 3M9 13h6M9 17h2" />
  </Base>
);


export const UsersIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
    <path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6" />
  </Base>
);

export const PhoneIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  </Base>
);

export const MailIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="5" width="18" height="14" rx="1.5" />
    <path d="m3 7 9 6 9-6" />
  </Base>
);

export const FaxIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M7 9V3h10v6" />
    <rect x="3" y="9" width="18" height="9" rx="1.5" />
    <path d="M7 14h10v7H7z" />
  </Base>
);

export const ArrowRightIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Base>
);

export const ChevronDownIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="m6 9 6 6 6-6" />
  </Base>
);

export const MenuIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Base>
);

export const CloseIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Base>
);

export const CheckIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="m5 12 5 5L20 7" />
  </Base>
);

export const StoreIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 10v10h16V10M3 6l1.5-3h15L21 6v1.5a2.5 2.5 0 0 1-4.5 1.5 2.5 2.5 0 0 1-4.5 0 2.5 2.5 0 0 1-4.5 0A2.5 2.5 0 0 1 3 7.5V6Z" />
    <path d="M10 20v-5h4v5" />
  </Base>
);

export const HardHatIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 17h18M5 17v-3a7 7 0 0 1 14 0v3" />
    <path d="M10 7.5V5h4v2.5" />
  </Base>
);

export const HotelIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 20V9l9-5 9 5v11" />
    <path d="M3 20h18M8 20v-6h8v6M8 11h.01M12 11h.01M16 11h.01" />
  </Base>
);

export const HeartPulseIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M20 8.5C20 5.5 17.8 4 15.8 4 14 4 12.8 5 12 6.2 11.2 5 10 4 8.2 4 6.2 4 4 5.5 4 8.5 4 13 12 20 12 20s8-7 8-11.5Z" />
    <path d="M4.5 12H9l1.5-2.5 2 5 1.5-2.5h5" />
  </Base>
);

export const MusicIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M9 18V5l11-2v13" />
    <circle cx="6.5" cy="18" r="2.5" />
    <circle cx="17.5" cy="16" r="2.5" />
  </Base>
);

export const GraduationIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="m2 9 10-5 10 5-10 5L2 9Z" />
    <path d="M6 11v5c3 2.5 9 2.5 12 0v-5M22 9v6" />
  </Base>
);

export const ChurchIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 2v4M10 4h4M6 21V11l6-4 6 4v10" />
    <path d="M3 21h18M10 21v-4a2 2 0 0 1 4 0v4" />
  </Base>
);

export const KeyIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="8" cy="15" r="4" />
    <path d="m11 12 9-9M17 6l2 2M15 8l2 2" />
  </Base>
);

export const TruckIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M2 6h11v10H2zM13 10h4l4 4v2h-8" />
    <circle cx="6" cy="18" r="2" />
    <circle cx="17" cy="18" r="2" />
  </Base>
);

export const CarIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 16v-4l2-5h12l2 5v4H4Z" />
    <path d="M4 12h16" />
    <circle cx="7.5" cy="16.5" r="1.5" />
    <circle cx="16.5" cy="16.5" r="1.5" />
  </Base>
);

export const SolarIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 14h16l-2.5-8h-11L4 14Z" />
    <path d="M12 6v8M5.5 10h13M9 6l-1 8M15 6l1 8M12 14v4M8 21h8M12 18v3" />
  </Base>
);

export const FactoryIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 21V10l5 3V10l5 3V10l5 3V4h3v17H3Z" />
    <path d="M7 17h2M12 17h2M17 17h1" />
  </Base>
);

export const ApartmentIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 21h18M5 21V7l7-4 7 4v14" />
    <path d="M9 10h.01M15 10h.01M9 14h.01M15 14h.01M10 21v-4h4v4" />
  </Base>
);

export const WarehouseIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 21V9l9-5 9 5v12" />
    <path d="M7 21v-8h10v8M7 16h10" />
  </Base>
);

export const ParkingIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M10 17V7h3a3 3 0 0 1 0 6h-3" />
  </Base>
);

export const EyeIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
  </Base>
);

export const DoorIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 21h16M6 21V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v17" />
    <path d="M13 12h.01M19 8l2 2-2 2M21 10h-4" />
  </Base>
);

export const IdCardIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="5" width="18" height="14" rx="1.5" />
    <circle cx="9" cy="11" r="2" />
    <path d="M5.5 16a3.5 3.5 0 0 1 7 0M15 10h3M15 13h3" />
  </Base>
);

export const CrownIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="m3 8 4.5 4L12 5l4.5 7L21 8l-2 10H5L3 8Z" />
    <path d="M5 21h14" />
  </Base>
);

export const BagIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 8h14l-1 13H6L5 8Z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    <path d="m10 14 1.5 1.5L15 12" />
  </Base>
);

export const FenceIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 21V6l2-2 2 2v15M10 21V6l2-2 2 2v15M17 21V6l2-2 2 2v15" />
    <path d="M2 10h20M2 16h20" />
  </Base>
);

export const SirenIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M7 18v-5a5 5 0 0 1 10 0v5" />
    <path d="M4 21h16M5 18h14M12 3v2M4.2 6.2l1.4 1.4M19.8 6.2l-1.4 1.4" />
  </Base>
);

export const GateIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 21V5M21 21V5M3 9h18M3 17h18" />
    <path d="M7 9v8M11 9v8M15 9v8M19 9v8" />
  </Base>
);

export const SunIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </Base>
);

export const WavesIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M2 8c2 0 2-1.5 4-1.5S8 8 10 8s2-1.5 4-1.5S16 8 18 8s2-1.5 4-1.5" />
    <path d="M2 13c2 0 2-1.5 4-1.5S8 13 10 13s2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5" />
    <path d="M2 18c2 0 2-1.5 4-1.5S8 18 10 18s2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5" />
  </Base>
);
