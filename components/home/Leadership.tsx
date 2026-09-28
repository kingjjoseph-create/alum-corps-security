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

        <ul className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {leadership.map((person, i) => (
            <Reveal as="li" key={person.name} delay={i * 120}>
              {/* Executive card. When headshots are available, swap the monogram for an <Image>. */}
              <article className="group relative flex h-full flex-col overflow-hidden border border-white/10 bg-gradient-to-b from-graphite to-ink p-8 transition-colors duration-500 hover:border-gold/40 sm:p-9">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-gold-dark via-gold-light to-gold transition-transform duration-500 group-hover:scale-x-100"
                />
                <div className="flex items-center justify-between">
                  <span
                    aria-hidden="true"
                    className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/60 bg-ink font-display text-2xl font-semibold text-gold"
                  >
                    {person.initials}
                  </span>
                  <span className="border border-gold/40 px-3 py-1 text-xs font-semibold tracking-[0.3em] text-gold">
                    {person.title}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-3xl font-semibold text-white">{person.name}</h3>
                <p className="mt-1 text-xs font-semibold tracking-[0.28em] text-mist uppercase">{person.role}</p>
                <span aria-hidden="true" className="mt-6 h-px w-10 bg-gold transition-all duration-500 group-hover:w-16" />
                <p className="mt-6 leading-relaxed text-white/75">{person.focus}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
