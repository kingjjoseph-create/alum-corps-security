import { BadgeIcon, ClipboardIcon, ClockIcon, RadioIcon, ShieldIcon, UsersIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

const reasons = [
  {
    icon: ShieldIcon,
    title: "Licensed & Accountable",
    body: `A Florida-licensed security agency (#${site.license}) operating to state standards, with clear accountability at every post.`,
  },
  {
    icon: BadgeIcon,
    title: "Professional Officers",
    body: "Well-presented, courteous officers who represent your brand as well as they protect your property.",
  },
  {
    icon: ClipboardIcon,
    title: "Tailored Security Plans",
    body: "Every engagement starts with a site assessment and custom post orders — never a one-size-fits-all template.",
  },
  {
    icon: RadioIcon,
    title: "Clear Communication",
    body: "Consistent reporting and a direct line to supervisors, so you always know what is happening on site.",
  },
  {
    icon: ClockIcon,
    title: "Responsive Scheduling",
    body: "Flexible coverage for ongoing contracts, short-term needs, and one-time events — scaled to fit.",
  },
  {
    icon: UsersIcon,
    title: "Leadership That Shows Up",
    body: "Our executive team stays involved with every client relationship, from first call to final shift.",
  },
];

export function WhyChoose() {
  return (
    <section aria-labelledby="why-heading" className="relative overflow-hidden border-y border-gold/10 bg-coal py-24 sm:py-32">
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          id="why-heading"
          align="center"
          eyebrow="Why Choose Alum Corps"
          title={
            <>
              A higher standard of <span className="text-gold-gradient italic">discipline.</span>
            </>
          }
          intro="Security is only as strong as the people who deliver it. We pair trained, professional officers with the structure and oversight that keep standards high on every shift."
        />

        <ul className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, body }, i) => (
            <Reveal as="li" key={title} delay={(i % 3) * 100} className="group bg-coal p-8 transition-colors duration-500 hover:bg-graphite sm:p-10">
              <Icon className="h-9 w-9 text-gold transition-transform duration-500 group-hover:scale-110" />
              <h3 className="mt-6 text-lg font-semibold tracking-wide text-white">{title}</h3>
              <p className="mt-3 leading-relaxed text-mist">{body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
