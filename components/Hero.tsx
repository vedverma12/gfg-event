"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registrationUrl } from "@/lib/event-data";

const titleLines = ["CODE:", "INFINITY"];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: 14,
        scale: 1.08,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(pulseRef.current, {
        scale: 0.72,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative flex min-h-[620px] items-center overflow-hidden bg-[#09090e] sm:min-h-[700px] lg:min-h-[calc(100svh-76px)]">
      <div ref={imageRef} className="absolute inset-0 -top-[8%] h-[116%]">
        <Image src="/images/hero-bg.jpg" alt="Abstract nebula and cosmic energy" fill priority sizes="100vw" quality={88} className="object-cover object-center opacity-55" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#09090e] via-[#09090e]/70 to-[#09090e]/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-[#0a0a0f]/25" />
      <div ref={pulseRef} className="pointer-events-none absolute -right-20 top-1/2 h-[25rem] w-[25rem] -translate-y-1/2 rounded-full border border-marvel-gold/20 shadow-[0_0_100px_rgba(212,175,55,.13),inset_0_0_90px_rgba(237,29,36,.08)] sm:right-[8%] sm:h-[35rem] sm:w-[35rem]">
        <div className="absolute inset-[12%] rounded-full border border-marvel-red/25 shadow-[0_0_55px_rgba(237,29,36,.16)]" />
        <div className="absolute inset-[31%] rounded-full border border-white/10 bg-[#0a0a0f]/15 shadow-[0_0_60px_rgba(108,59,170,.23)]" />
        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-marvel-gold shadow-[0_0_24px_8px_rgba(212,175,55,.44)]" />
      </div>
      <div className="page-shell relative z-10 grid w-full items-end gap-12 py-16 md:grid-cols-[1fr_250px] md:py-24">
        <div className="max-w-4xl">
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="eyebrow">GeeksforGeeks Student Chapter · Bennett University</motion.p>
          <motion.h1 initial="hidden" animate="show" className="display-heading mt-7 text-[4.6rem] leading-[.82] sm:text-[7rem] lg:text-[10rem]">
            {titleLines.map((line, index) => (
              <motion.span
                key={line}
                custom={index}
                variants={{
                  hidden: { opacity: 0, y: 48, clipPath: "inset(0 0 100% 0)" },
                  show: {
                    opacity: 1,
                    y: 0,
                    clipPath: "inset(0 0 0% 0)",
                    transition: { delay: 0.12 + index * 0.13, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className={`block ${index === 1 ? "text-marvel-red" : "text-white"}`}
              >
                {line}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.52, duration: 0.65 }} className="mt-6 max-w-xl text-sm font-medium leading-7 text-white/75 sm:text-base">
            Assemble. Build. Snap Your Idea Into Reality.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.68, duration: 0.6 }} className="mt-8 flex flex-wrap items-center gap-3">
            <a href={registrationUrl} target="_blank" rel="noreferrer" className="button-primary">Register now <ArrowUpRight size={15} /></a>
            <Link href="/tracks" className="button-quiet">Explore the tracks <ArrowUpRight size={14} /></Link>
          </motion.div>
        </div>

        <motion.aside initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.75, duration: 0.7 }} className="hidden border-l border-white/20 pl-5 md:block">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-marvel-gold">The 24-hour mission</p>
          <p className="mt-3 font-display text-3xl uppercase leading-none">15 Nov 2026</p>
          <p className="mt-2 text-xs text-white/60">09:00 AM onwards · IST</p>
          <p className="mt-5 flex items-start gap-2 text-[10px] leading-5 text-white/55"><MapPin size={14} className="mt-0.5 shrink-0 text-marvel-red" /> Innovation Lab<br />Bennett University, Greater Noida</p>
        </motion.aside>
      </div>
      <a href="#mission" aria-label="Scroll to event details" className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-white/45 transition hover:text-white">
        <span>Scroll to explore</span><ArrowDown size={14} className="animate-bounce" />
      </a>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-marvel-gold/60 to-transparent" />
    </section>
  );
}