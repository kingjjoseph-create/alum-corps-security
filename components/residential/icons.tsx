import type { JSX, SVGProps } from "react";
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
import type { ResidentialPropertyId, ResidentialServiceKey } from "@/lib/residential";

type Props = SVGProps<SVGSVGElement>;
type IconComponent = (p: Props) => JSX.Element;

const propertyIcons: Record<ResidentialPropertyId, IconComponent> = {
  "gated-communities": GateIcon,
  condominiums: BuildingIcon,
  "apartment-communities": ApartmentIcon,
  "private-estates": HomeIcon,
  "active-adult-communities": UsersIcon,
  "seasonal-properties": SunIcon,
};

const serviceIcons: Record<ResidentialServiceKey, IconComponent> = {
  gatehouse: GateIcon,
  patrol: CarIcon,
  concierge: BadgeIcon,
  amenity: WavesIcon,
  parking: ParkingIcon,
  response: UsersIcon,
  checks: KeyIcon,
  reporting: ClipboardIcon,
};

export function PropertyIcon({ id, ...props }: Props & { id: ResidentialPropertyId }) {
  const Icon = propertyIcons[id];
  return <Icon {...props} />;
}

export function ResidentialServiceIcon({ name, ...props }: Props & { name: ResidentialServiceKey }) {
  const Icon = serviceIcons[name];
  return <Icon {...props} />;
}
