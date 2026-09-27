import type { Metadata } from "next";
import { ArrowUpRight, Clock3, Gem, Layers3, UsersRound } from "lucide-react";
import Link from "next/link";
import { CountdownTimer } from "@/components/CountdownTimer";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { TrackCard } from "@/components/TrackCard";
import { tracks } from "@/lib/event-data";

export const metadata: Metadata = {
  title: "Home",
  description: "24 hours. Six tracks. One idea worth building. CODE: INFINITY arrives at Bennett University on 15 November 2026.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <section id="mission" className="page-shell section-padding grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
        <Reveal>
          <p className="eyebrow">A 24-hour hackathon</p>
          <h2 className="display-heading mt-5 text-5xl leading-[.95] sm:text-7xl">Ideas don&apos;t<br />wait for <span className="text-marvel-red">permission.</span></h2>
          <p className="body-copy mt-6 max-w-lg">One day. Six challenges. A room full of people ready to make a dent in the universe. CODE: INFINITY brings student builders together at Bennett University to turn ambitious ideas into working prototypes.</p>
          <Link href="/about" className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-marvel-gold hover:text-white">The mission brief <ArrowUpRight size={14} /></Link>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="border border-white/10 bg-background-surface/70 p-5 sm:p-7">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <span className="text-[9px] font-semibold uppercase tracking-[0.17em] text-white/50">Time until the first signal</span>
              <span className="text-[9px] uppercase tracking-[0.15em] text-marvel-gold">15 Nov · 09:00 IST</span>
            </div>
            <CountdownTimer compact />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-4">
            {[
              { icon: Clock3, value: "24", label: "Hours" },
              { icon: Layers3, value: "06", label: "Tracks" },
              { icon: UsersRound, value: "TBA", label: "Builder capacity" },
              { icon: Gem, value: "TBA", label: "Prize pool" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="bg-[#0a0a0f] p-4 sm:p-5">
                <Icon size={15} className="text-marvel-gold" />
                <p className="mt-4 font-display text-3xl leading-none">{value}</p>
                <p className="mt-2 text-[8px] font-medium uppercase tracking-[0.12em] text-white/45">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section-rule section-padding">
        <div className="page-shell">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionTitle eyebrow="Six stones. Six challenges." title={<>Choose your<br />universe.</>}>
              Every track is a different lens on the future. Find the problem that pulls you in, then build something worth showing.
            </SectionTitle>
            <Link href="/tracks" className="button-quiet w-fit">All six tracks <ArrowUpRight size={14} /></Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {tracks.slice(0, 3).map((track, index) => <TrackCard key={track.stone} track={track} index={index} />)}
          </div>
        </div>
      </section>

      <section className="section-rule overflow-hidden py-10">
        <div className="flex min-w-max animate-[marquee_32s_linear_infinite] items-center gap-8 px-8 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
          {Array.from({ length: 2 }).map((_, index) => <span key={index} className="flex items-center gap-8">ASSEMBLE <span className="text-marvel-red">✦</span> BUILD <span className="text-marvel-gold">✦</span> SNAP YOUR IDEA INTO REALITY <span className="text-stone-time">✦</span> 15 NOVEMBER 2026 <span className="text-marvel-red">✦</span></span>)}
        </div>
      </section>
    </>
  );
}