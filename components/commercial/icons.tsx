import type { JSX, SVGProps } from "react";
import {
  ApartmentIcon,
  BadgeIcon,
  BuildingIcon,
  CarIcon,
  ClipboardIcon,
  EyeIcon,
  FactoryIcon,
  HardHatIcon,
  KeyIcon,
  ParkingIcon,
  RadioIcon,
  SolarIcon,
  StoreIcon,
  WarehouseIcon,
} from "@/components/Icons";
import type { CommercialSectorId, commercialToolkit } from "@/lib/commercial";

type Props = SVGProps<SVGSVGElement>;

const sectorIcons: Record<CommercialSectorId, (p: Props) => JSX.Element> = {
  "construction-sites": HardHatIcon,
  "solar-sites": SolarIcon,
  warehouses: WarehouseIcon,
  offices: BuildingIcon,
  retail: StoreIcon,
  "apartment-communities": ApartmentIcon,
  "parking-areas": ParkingIcon,
  industrial: FactoryIcon,
};

const toolkitIcons: Record<(typeof commercialToolkit)[number]["key"], (p: Props) => JSX.Element> = {
  officers: BadgeIcon,
  patrol: CarIcon,
  access: KeyIcon,
  loss: EyeIcon,
  reporting: RadioIcon,
  plans: ClipboardIcon,
};

export function SectorIcon({ id, ...props }: Props & { id: CommercialSectorId }) {
  const Icon = sectorIcons[id];
  return <Icon {...props} />;
}

export function ToolkitIcon({ name, ...props }: Props & { name: keyof typeof toolkitIcons }) {
  const Icon = toolkitIcons[name];
  return <Icon {...props} />;
}
