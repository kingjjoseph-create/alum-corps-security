import { Reveal } from "@/components/Reveal";

const items = [
  { value: "FL", label: "State-licensed security agency" },
  { value: "3", label: "Core security disciplines" },
  { value: "1:1", label: "Tailored post orders for every client" },
  { value: "Direct", label: "Access to company leadership" },
];

export function TrustBar() {
  return (
    <section aria-label="Company highlights" className="relative border-y border-gold/15 bg-coal">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-white/5 lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal
            key={item.label}
            delay={i * 100}
            className="flex flex-col bg-coal px-6 py-10 text-center lg:py-12"
          >
            <dt className="order-2 mt-2 text-xs tracking-[0.2em] text-mist uppercase">{item.label}</dt>
            <dd className="order-1 font-display text-4xl font-semibold text-gold-gradient sm:text-5xl">{item.value}</dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
