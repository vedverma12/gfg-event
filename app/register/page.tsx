import type { Metadata } from "next";
import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import { CountdownTimer } from "@/components/CountdownTimer";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { registrationUrl } from "@/lib/event-data";

export const metadata: Metadata = {
  title: "Register",
  description: "Save your place at CODE: INFINITY, a 24-hour hackathon at Bennett University on 15 November 2026.",
};

export default function RegisterPage() {
  return (
    <>
      <section className="relative isolate flex min-h-[600px] items-center overflow-hidden border-b border-white/10 sm:min-h-[680px]">
        <Image src="/images/footer-bg.jpg" alt="Dark starfield with distant light" fill priority sizes="100vw" className="-z-20 object-cover opacity-35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/75 to-[#0a0a0f]/35" />
        <div className="page-shell grid w-full gap-12 py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">The next 24 hours start here</p>
            <h1 className="display-heading mt-6 text-[4.5rem] leading-[.85] sm:text-[6.5rem] lg:text-[8rem]">Your idea.<br /><span className="text-marvel-red">Your moment.</span></h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/65">One team, one challenge, one day to build something that matters. Make your move before the signal goes live.</p>
            <a href={registrationUrl} target="_blank" rel="noreferrer" className="button-primary mt-8 !min-h-[60px] !px-7">Register now <ArrowUpRight size={17} /></a>
            <p className="mt-4 text-[9px] uppercase tracking-[0.13em] text-white/40">Registration form placeholder · Replace with the official form link</p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="border border-white/15 bg-[#0a0a0f]/70 p-5 backdrop-blur-sm sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-white/55">The countdown is on</p>
                <span className="h-2 w-2 animate-pulse rounded-full bg-marvel-red shadow-[0_0_14px_rgba(237,29,36,.8)]" />
              </div>
              <div className="mt-6"><CountdownTimer /></div>
              <div className="mt-7 flex gap-3 border-t border-white/10 pt-5">
                <MapPin size={15} className="mt-0.5 shrink-0 text-marvel-gold" />
                <p className="text-[10px] leading-5 text-white/60">15 November 2026 · 9:00 AM onwards<br />Bennett University Innovation Lab, Greater Noida</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-shell grid gap-12 py-20 sm:py-28 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <SectionTitle eyebrow="Before you assemble" title={<>Quick<br />answers.</>}>
            The essentials for getting your team ready.
          </SectionTitle>
        </div>
        <FAQAccordion />
      </section>
    </>
  );
}