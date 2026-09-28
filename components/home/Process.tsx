import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const steps = [
  {
    title: "Consultation",
    body: "We learn about your property, event, or community — your concerns, schedule, and expectations.",
  },
  {
    title: "Site Assessment",
    body: "Our team evaluates vulnerabilities and designs a coverage plan with clear post orders.",
  },
  {
    title: "Deployment",
    body: "Briefed, uniformed officers take post, backed by supervision and consistent reporting.",
  },
  {
    title: "Ongoing Review",
    body: "We check in regularly and refine coverage as your needs evolve.",
  },
];

export function Process() {
  return (
    <section aria-labelledby="process-heading" className="border-t border-gold/10 bg-coal py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          id="process-heading"
          eyebrow="How We Work"
          title={
            <>
              From first call to <span className="text-gold-gradient italic">first shift.</span>
            </>
          }
        />
        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 120} className="relative">
              <div className="flex items-center gap-4">
                <span className="font-display text-5xl font-semibold text-gold-gradient">0{i + 1}</span>
                <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-gold/50 to-transparent" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-wide text-white">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-mist">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
