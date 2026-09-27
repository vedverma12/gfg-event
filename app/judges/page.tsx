import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { JudgeCard } from "@/components/JudgeCard";
import { judges } from "@/lib/event-data";

export const metadata: Metadata = {
  title: "Judges and mentors",
  description: "Meet the experts who will guide and evaluate the six CODE: INFINITY hackathon tracks.",
};

export default function JudgesPage() {
  return (
    <>
      <PageIntro eyebrow="The minds behind the mission" number="04" title={<>Great ideas need<br /><span className="text-marvel-red">good questions.</span></>}>
        Track judges and mentors will be announced closer to the event. Each profile below is reserved for the expert guiding that field.
      </PageIntro>
      <section className="page-shell pb-24 sm:pb-32">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {judges.map((judge, index) => <JudgeCard key={judge.role} judge={judge} index={index} />)}
        </div>
      </section>
      <section className="section-rule page-shell flex flex-col justify-between gap-6 py-14 sm:flex-row sm:items-center">
        <p className="max-w-xl text-xs leading-6 text-white/55">Mentor names, session availability, and judging criteria will be updated here once confirmed by the event organizers.</p>
        <a href="/register" className="button-quiet w-fit">Join the event <span aria-hidden="true">↗</span></a>
      </section>
    </>
  );
}