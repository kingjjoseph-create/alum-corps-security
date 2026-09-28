import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  id?: string;
};

export function SectionHeading({ eyebrow, title, intro, align = "left", id }: Props) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`eyebrow ${centered ? "justify-center" : ""}`}>{eyebrow}</p>
      <h2
        id={id}
        className="mt-5 font-display text-4xl leading-[1.05] font-semibold text-balance text-white sm:text-5xl"
      >
        {title}
      </h2>
      {intro && <p className="mt-6 text-lg leading-relaxed text-pretty text-mist">{intro}</p>}
    </Reveal>
  );
}
