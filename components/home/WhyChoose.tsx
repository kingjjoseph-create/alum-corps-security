import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

const pillars = [
  {
    title: "Licensed & Accountable",
    body: `A Florida-licensed security agency (#${site.license}) operating to state standards, with clear accountability at every post.`,
  },
  {
    title: "Professional Officers",
    body: "Well-presented, courteous officers who represent your organization as well as they protect it.",
  },
  {
    title: "Tailored Security Plans",
    body: "Every engagement begins with an assessment and custom post orders — never a one-size-fits-all template.",
  },
  {
    title: "Supervision & Reporting",
    body: "Active supervision and consistent reporting, so you always know what is happening on site.",
  },
  {
    title: "Executive Involvement",
    body: "Our leadership stays engaged with every client relationship, from first consultation to final shift.",
  },
];

export function WhyChoose() {
  return (
    <section
      id="why-alum-corps"
      aria-labelledby="why-heading"
      className="relative overflow-hidden border-y border-gold/15 bg-coal py-28 sm:py-36"
    >
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_65%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-36">
            <SectionHeading
              id="why-heading"
              eyebrow="Why Alum Corps"
              title={
                <>
                  A higher standard of <span className="text-gold-gradient italic">discipline.</span>
                </>
              }
              intro="Security is only as strong as the people who deliver it. We pair professional officers with the structure, supervision, and leadership that keep standards high on every shift."
            />
            <Reveal delay={150}>
              <figure className="mt-12 border-l-2 border-gold pl-6">
                <blockquote className="font-display text-2xl leading-snug text-white/85 italic">
                  &ldquo;Our clients should never have to wonder whether their post is covered — or how well.&rdquo;
                </blockquote>
                <figcaption className="mt-4 label-caps">
                  The Alum Corps Standard
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        <ol className="lg:col-span-7 lg:col-start-6">
          {pillars.map((p, i) => (
            <Reveal
              as="li"
              key={p.title}
              delay={i * 80}
              className="group grid grid-cols-[auto_1fr] gap-x-8 border-t border-white/10 py-10 last:border-b sm:gap-x-12"
            >
              <span className="font-display text-5xl leading-none font-semibold text-gold/40 transition-colors duration-500 group-hover:text-gold sm:text-6xl">
                0{i + 1}
              </span>
              <div>
                <h3 className="text-xl font-semibold tracking-wide text-white">{p.title}</h3>
                <p className="mt-3 max-w-lg leading-relaxed text-mist">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
