import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { leadership } from "@/lib/site";

export function Leadership() {
  return (
    <section aria-labelledby="leadership-heading" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          id="leadership-heading"
          align="center"
          eyebrow="Leadership"
          title={
            <>
              Led with <span className="text-gold-gradient italic">integrity.</span>
            </>
          }
          intro="Alum Corps Security is guided by a leadership team personally committed to the safety of every client we serve."
        />

        <ul className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.map((person, i) => (
            <Reveal
              as="li"
              key={person.name}
              delay={i * 120}
              className="group relative border border-white/10 bg-gradient-to-b from-graphite to-coal p-8 text-center transition-all duration-500 hover:border-gold/40 sm:p-10"
            >
              {/* Portrait placeholder — swap for <Image> headshots when available. */}
              <div className="relative mx-auto h-32 w-32">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-dark p-px transition-transform duration-700 group-hover:rotate-45">
                  <div className="h-full w-full rounded-full bg-ink" />
                </div>
                <span
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center font-display text-4xl font-semibold text-gold-gradient"
                >
                  {person.initials}
                </span>
              </div>
              <h3 className="mt-8 font-display text-2xl font-semibold text-white">{person.name}</h3>
              <p className="mt-2 text-xs font-semibold tracking-[0.3em] text-gold uppercase">{person.role}</p>
              <p className="mt-1 text-sm text-mist">{person.title}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
