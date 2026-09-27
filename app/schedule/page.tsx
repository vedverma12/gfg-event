import type { Metadata } from "next";
import { Clock3 } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { TimelineItem } from "@/components/TimelineItem";
import { schedule } from "@/lib/event-data";

export const metadata: Metadata = {
  title: "24-hour schedule",
  description: "Follow the CODE: INFINITY hackathon timeline from check-in to demos and closing ceremony.",
};

export default function SchedulePage() {
  return (
    <>
      <PageIntro eyebrow="The 24-hour flow" number="03" title={<>Every hour<br /><span className="text-marvel-red">moves the story.</span></>}>
        From the first briefing to the last demo, the day is structured to leave room for focus, feedback, and a little midnight momentum.
      </PageIntro>
      <section className="page-shell grid gap-14 pb-24 sm:pb-32 lg:grid-cols-[.7fr_1.3fr]">
        <aside className="h-fit border border-white/10 bg-background-surface p-6 lg:sticky lg:top-28">
          <Clock3 size={20} className="text-marvel-gold" />
          <p className="mt-7 font-display text-4xl uppercase leading-none">15—16 Nov</p>
          <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50">09:00 AM · 24 hours · IST</p>
          <div className="my-6 border-t border-white/10" />
          <p className="text-xs leading-6 text-white/55">Venue<br /><span className="text-white/85">Innovation Lab, Bennett University<br />Greater Noida</span></p>
          <p className="mt-5 text-[9px] leading-5 text-white/35">Session timings are a working schedule and may be adjusted by the event team.</p>
        </aside>
        <div className="relative border-l border-white/10 pl-0">
          {schedule.map((item, index) => <TimelineItem key={`${item.day}-${item.time}`} item={item} index={index} />)}
        </div>
      </section>
    </>
  );
}