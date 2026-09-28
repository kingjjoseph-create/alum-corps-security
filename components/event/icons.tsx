import type { JSX, SVGProps } from "react";
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
import type { EventServiceId } from "@/lib/event";

type Props = SVGProps<SVGSVGElement>;

const icons: Record<EventServiceId, (p: Props) => JSX.Element> = {
  "entrance-exit-control": DoorIcon,
  "credential-verification": IdCardIcon,
  "crowd-management": UsersIcon,
  "vip-areas": CrownIcon,
  "bag-checkpoint-support": BagIcon,
  "perimeter-security": FenceIcon,
  "parking-control": ParkingIcon,
  "emergency-coordination": SirenIcon,
  "incident-documentation": ClipboardIcon,
};

export function EventServiceIcon({ id, ...props }: Props & { id: EventServiceId }) {
  const Icon = icons[id];
  return <Icon {...props} />;
}
