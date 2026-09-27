import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function PageIntro({ eyebrow, title, children, number }: { eyebrow: string; title: ReactNode; children: ReactNode; number: string }) {
  return (
    <section className="page-shell relative overflow-hidden pb-14 pt-20 sm:pb-20 sm:pt-28">
      <div className="absolute right-0 top-10 hidden select-none font-display text-[15rem] leading-none text-white/[0.025] lg:block">{number}</div>
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display-heading mt-5 max-w-5xl text-balance text-[4rem] sm:text-[6rem] lg:text-[8rem]">{title}</h1>
        <div className="body-copy mt-6 max-w-2xl">{children}</div>
      </Reveal>
    </section>
  );
}