import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A visual field guide to CODE: INFINITY: a night of ideas, energy, and building beyond the expected.",
};

export default function GalleryPage() {
  return (
    <>
      <PageIntro eyebrow="Signals from the universe" number="05" title={<>Ideas have<br /><span className="text-marvel-red">their own light.</span></>}>
        A visual field guide to the atmosphere of CODE: INFINITY. Select any frame to bring it into focus.
      </PageIntro>
      <section className="page-shell pb-24 sm:pb-32">
        <GalleryGrid />
        <p className="mt-6 text-[9px] uppercase tracking-[0.13em] text-white/35">Event photography and recap moments will be added after the hackathon.</p>
      </section>
    </>
  );
}