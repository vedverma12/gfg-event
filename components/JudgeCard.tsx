import { ArrowUpRight, UserRound } from "lucide-react";
import type { judges } from "@/lib/event-data";
import { Reveal } from "@/components/Reveal";

type Judge = (typeof judges)[number];

export function JudgeCard({ judge, index }: { judge: Judge; index: number }) {
  return (
    <Reveal delay={(index % 3) * 0.07}>
      <article className="group relative overflow-hidden border border-white/10 bg-background-surface p-5 transition duration-300 hover:-translate-y-1" style={{ borderColor: `${judge.color}55` }}>
        <div className="absolute inset-x-0 top-0 h-px opacity-60" style={{ backgroundColor: judge.color }} />
        <div className="relative mx-auto grid aspect-square max-w-[250px] place-items-center overflow-hidden rounded-full border border-white/15 bg-[#101016] shadow-[0_0_36px_var(--judge-glow)]" style={{ "--judge-glow": `${judge.color}33` } as React.CSSProperties}>
          <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(circle at 50% 25%, ${judge.color}, transparent 68%)` }} />
          <UserRound size={76} strokeWidth={0.8} className="relative text-white/40 transition duration-500 group-hover:scale-110 group-hover:text-white/75" />
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-semibold uppercase tracking-[0.18em]" style={{ color: judge.color }}>{judge.initials}</span>
        </div>
        <div className="mt-5 flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl uppercase leading-none">{judge.name}</h3>
            <p className="mt-2 text-[9px] leading-5 text-white/50">{judge.role}</p>
          </div>
          <ArrowUpRight size={15} className="shrink-0 text-white/30 transition group-hover:text-white" />
        </div>
        <p className="mt-4 border-t border-white/10 pt-3 text-[9px] uppercase tracking-[0.1em] text-white/35">Profile announcement pending</p>
      </article>
    </Reveal>
  );
}