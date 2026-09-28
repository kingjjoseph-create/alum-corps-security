import {
  BuildingIcon,
  CarIcon,
  ChurchIcon,
  GraduationIcon,
  HardHatIcon,
  HeartPulseIcon,
  HomeIcon,
  HotelIcon,
  KeyIcon,
  MusicIcon,
  StoreIcon,
  TruckIcon,
} from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const industries = [
  { icon: BuildingIcon, label: "Corporate Offices" },
  { icon: StoreIcon, label: "Retail & Shopping Centers" },
  { icon: HardHatIcon, label: "Construction Sites" },
  { icon: HomeIcon, label: "HOAs & Gated Communities" },
  { icon: KeyIcon, label: "Condominiums & Apartments" },
  { icon: HotelIcon, label: "Hotels & Hospitality" },
  { icon: HeartPulseIcon, label: "Healthcare Facilities" },
  { icon: MusicIcon, label: "Concerts & Festivals" },
  { icon: GraduationIcon, label: "Schools & Campuses" },
  { icon: ChurchIcon, label: "Houses of Worship" },
  { icon: TruckIcon, label: "Warehouses & Logistics" },
  { icon: CarIcon, label: "Parking Facilities" },
];

export function Industries() {
  return (
    <section aria-labelledby="industries-heading" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              id="industries-heading"
              eyebrow="Industries Served"
              title={
                <>
                  Trusted across <span className="text-gold-gradient italic">Florida&rsquo;s</span> key sectors.
                </>
              }
              intro="Each environment carries its own risks and expectations. Our officers are briefed on the specific protocols your industry demands."
            />
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:col-span-8 lg:gap-5">
          {industries.map(({ icon: Icon, label }, i) => (
            <Reveal
              as="li"
              key={label}
              delay={(i % 3) * 80}
              className="group flex flex-col items-start gap-5 border border-white/10 bg-graphite/40 p-6 transition-all duration-500 hover:border-gold/40 hover:bg-graphite sm:p-7"
            >
              <Icon className="h-8 w-8 text-gold/80 transition-colors duration-500 group-hover:text-gold" />
              <span className="font-semibold leading-snug text-white">{label}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
