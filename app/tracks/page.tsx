import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { TrackCard } from "@/components/TrackCard";
import { tracks } from "@/lib/event-data";

export const metadata: Metadata = {
  title: "Six tracks",
  description: "Choose from six CODE: INFINITY hackathon tracks: AI/ML, EdTech, AR/VR, sustainability, FinTech, and HealthTech.",
};

export default function TracksPage() {
  return (
    <>
      <PageIntro eyebrow="The six tracks" number="02" title={<>Choose your<br /><span className="text-marvel-red">infinity.</span></>}>
        Each track takes its color from an Infinity Stone and its purpose from a real-world challenge. Tap a card to explore the starter problem statement.
      </PageIntro>
      <section className="page-shell pb-24 sm:pb-32">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track, index) => <TrackCard key={track.stone} track={track} index={index} />)}
        </div>
        <p className="mt-6 max-w-3xl text-[10px] leading-5 text-white/40">Problem statements are starter prompts. Final judging criteria and rules will be announced by the organizers at the event briefing.</p>
      </section>
    </>
  );
}