import { Award, DoorOpen, Lightbulb, Rocket, Sparkles, Users, Wrench } from "lucide-react";
import type { schedule } from "@/lib/event-data";
import { Reveal } from "@/components/Reveal";

type ScheduleItem = (typeof schedule)[number];
const icons = { door: DoorOpen, spark: Sparkles, build: Wrench, workshop: Lightbulb, mentor: Users, award: Award };

export function TimelineItem({ item, index }: { item: ScheduleItem; index: number }) {
  const Icon = icons[item.icon] ?? Rocket;

  return (
    <Reveal delay={(index % 2) * 0.06}>
      <article className="relative grid gap-4 border-b border-white/10 py-7 pl-12 sm:grid-cols-[120px_1fr] sm:gap-8 sm:py-8 sm:pl-16">
        <span className="absolute left-0 top-8 grid h-9 w-9 place-items-center border border-marvel-gold/50 bg-[#0a0a0f] text-marvel-gold shadow-[0_0_20px_rgba(212,175,55,.12)] sm:top-9"><Icon size={16} /></span>
        <div>
          <p className="font-display text-3xl leading-none">{item.time}</p>
          <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.17em] text-marvel-gold">{item.day} · IST</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold leading-6 sm:text-base">{item.title}</h3>
          <p className="mt-2 max-w-2xl text-xs leading-6 text-white/55">{item.detail}</p>
        </div>
      </article>
    </Reveal>
  );
}