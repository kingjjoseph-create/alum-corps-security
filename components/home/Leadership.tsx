import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { leadership } from "@/lib/site";

export function Leadership() {
  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
      className="relative border-y border-gold/15 bg-coal py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeading
              id="leadership-heading"
              eyebrow="Leadership"
              title={
                <>
                  Executive leadership, <span className="text-gold-gradient italic">personally accountable.</span>
                </>
              }
            />
          </div>
          <Reveal className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-mist">
              Alum Corps Security is led by an executive team that stays directly involved in operations, standards, and
              every client relationship.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {leadership.map((person, i) => (
            <Reveal as="li" key={person.name} delay={i * 120} className="group">
              {/* Portrait frame — replace the monogram with an <Image fill> headshot when available. */}
              <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-gradient-to-b from-graphite via-coal to-ink transition-colors duration-500 group-hover:border-gold/40">
                <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-30 [mask-image:linear-gradient(to_top,black,transparent)]" />
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_bottom,rgb(222_173_47/0.18),transparent_70%)]" />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center font-display text-[7rem] font-semibold text-gold-gradient opacity-80 transition-transform duration-700 group-hover:scale-105"
                >
                  {person.initials}
                </span>
                <span className="absolute top-5 left-5 border border-gold/40 bg-ink/60 px-3 py-1 text-xs font-semibold tracking-[0.3em] text-gold backdrop-blur-sm">
                  {person.title}
                </span>
              </div>
              <div className="mt-6 flex items-start gap-4">
                <span aria-hidden="true" className="mt-4 h-px w-8 bg-gold transition-all duration-500 group-hover:w-12" />
                <div>
                  <h3 className="font-display text-3xl font-semibold text-white">{person.name}</h3>
                  <p className="mt-1 text-xs font-semibold tracking-[0.28em] text-mist uppercase">{person.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
