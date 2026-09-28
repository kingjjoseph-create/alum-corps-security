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
    <section id="industries" aria-labelledby="industries-heading" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          id="industries-heading"
          align="center"
          eyebrow="Industries We Protect"
          title={
            <>
              Protecting the places <span className="text-gold-gradient italic">that matter.</span>
            </>
          }
          intro="Every environment carries its own risks and expectations. Our officers are briefed on the protocols, people, and pressures specific to your sector."
        />

        <ul className="mt-16 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map(({ icon: Icon, label }, i) => (
            <Reveal
              as="li"
              key={label}
              delay={(i % 4) * 70}
              className="group flex flex-col items-center gap-5 bg-ink px-4 py-10 text-center transition-colors duration-500 hover:bg-graphite sm:py-12"
            >
              <Icon className="h-9 w-9 text-gold/80 transition-all duration-500 group-hover:-translate-y-1 group-hover:text-gold" />
              <span className="text-sm font-semibold tracking-[0.12em] text-white uppercase sm:text-[0.8125rem]">{label}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
