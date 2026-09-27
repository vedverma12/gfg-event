import type { Metadata } from "next";
import { Cpu, HeartHandshake, Lightbulb, Trophy } from "lucide-react";
import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About the mission",
  description: "Discover the idea behind CODE: INFINITY, a 24-hour student hackathon hosted at Bennett University.",
};

const highlights = [
  { title: "Build under pressure", copy: "A full day to move from a sharp problem to a demo people can actually try.", icon: Cpu, color: "#d0021b" },
  { title: "Room to explore", copy: "Six tracks keep the brief broad enough for original thinking and focused enough to ship.", icon: Lightbulb, color: "#f2c230" },
  { title: "Learn in the room", copy: "Mentor checkpoints and practical sessions help teams make better decisions as they build.", icon: HeartHandshake, color: "#3db562" },
  { title: "Show the work", copy: "Bring your solution to the demo floor, share what you learned, and celebrate the people who made it.", icon: Trophy, color: "#b33dc6" },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="The mission" number="01" title={<>Built in a day.<br /><span className="text-marvel-red">Remembered longer.</span></>}>
        CODE: INFINITY is a 24-hour hackathon by the GeeksforGeeks Student Chapter at Bennett University. A focused day to collaborate, experiment, and make a first version real.
      </PageIntro>

      <section className="page-shell pb-20 sm:pb-28">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ title, copy, icon: Icon, color }, index) => (
            <Reveal key={title} delay={index * 0.06}>
              <article className="h-full min-h-[245px] border border-white/10 bg-background-surface p-6 transition duration-300 hover:-translate-y-1" style={{ borderTopColor: color }}>
                <Icon size={22} style={{ color }} />
                <h2 className="mt-9 text-sm font-semibold">{title}</h2>
                <p className="mt-3 text-xs leading-6 text-white/55">{copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10">
        <div className="absolute inset-y-0 right-0 w-full md:w-1/2">
          <Image src="/images/about-glow.jpg" alt="Abstract light moving through a dark atmosphere" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent md:bg-gradient-to-l md:from-[#0a0a0f]/10 md:to-[#0a0a0f]" />
        </div>
        <div className="page-shell relative grid gap-12 py-20 sm:py-28 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="eyebrow">A story in six colors</p>
            <h2 className="display-heading mt-5 text-5xl leading-[.95] sm:text-7xl">One universe.<br />Many ways to<br /><span className="text-marvel-gold">change it.</span></h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="body-copy">Inspired by the idea of a universe held in balance by six forces, the event translates that narrative into six technology tracks: Space for AI and ML, Mind for education, Reality for immersive computing, Power for sustainability, Time for finance, and Soul for health.</p>
            <p className="body-copy mt-5">The reference is thematic, not a replica. Instead of a final battle, the challenge is constructive: bring different skills into one room, choose a problem with human stakes, and use 24 hours to make a useful first move.</p>
            <p className="mt-8 border-l border-marvel-red pl-5 font-display text-2xl uppercase leading-tight text-white sm:text-3xl">Assemble. Build.<br />Snap your idea into reality.</p>
          </Reveal>
        </div>
      </section>

      <section className="page-shell flex flex-col items-start justify-between gap-6 py-16 sm:flex-row sm:items-center sm:py-20">
        <div><p className="eyebrow">Your move</p><h2 className="display-heading mt-3 text-4xl sm:text-5xl">Find your track.</h2></div>
        <a href="/tracks" className="button-primary">Explore the six tracks <span aria-hidden="true">↗</span></a>
      </section>
    </>
  );
}