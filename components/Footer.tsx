import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, Camera } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      <Image src="/images/footer-bg.jpg" alt="" fill sizes="100vw" className="object-cover opacity-[0.14]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/85 via-[#0a0a0f]/75 to-[#0a0a0f]/95" />
      <div className="page-shell relative grid gap-12 py-16 md:grid-cols-[1.2fr_.8fr_.8fr] md:py-20">
        <div>
          <p className="eyebrow">GeeksforGeeks Student Chapter</p>
          <Link href="/" className="mt-4 block font-display text-4xl uppercase leading-none sm:text-5xl">CODE: INFINITY</Link>
          <p className="mt-4 max-w-sm text-xs leading-6 text-white/55">Bennett University · Greater Noida<br />Assemble. Build. Snap Your Idea Into Reality.</p>
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">Explore</p>
          <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3 text-xs text-white/70">
            <Link href="/about" className="hover:text-marvel-gold">The mission</Link>
            <Link href="/tracks" className="hover:text-marvel-gold">Six tracks</Link>
            <Link href="/schedule" className="hover:text-marvel-gold">Schedule</Link>
            <Link href="/gallery" className="hover:text-marvel-gold">Gallery</Link>
            <Link href="/judges" className="hover:text-marvel-gold">Judges</Link>
            <Link href="/register" className="hover:text-marvel-gold">Register</Link>
          </div>
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">Find the chapter</p>
          <div className="mt-5 flex gap-3">
            <a href="https://www.instagram.com/geeksforgeeks_bu?stkn=MW16NDByN2d5eG51eQ==" target="_blank" rel="noreferrer" aria-label="GeeksforGeeks on Instagram" className="grid h-10 w-10 place-items-center border border-white/15 text-white/75 transition hover:border-marvel-gold hover:text-marvel-gold"><Camera size={16} /></a>
            <a href="https://www.linkedin.com/company/gfg-bu/home/" target="_blank" rel="noreferrer" aria-label="GeeksforGeeks on LinkedIn" className="grid h-10 w-10 place-items-center border border-white/15 text-white/75 transition hover:border-marvel-gold hover:text-marvel-gold"><BriefcaseBusiness size={16} /></a>
            <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noreferrer" aria-label="GeeksforGeeks website" className="grid h-10 w-10 place-items-center border border-white/15 text-white/75 transition hover:border-marvel-gold hover:text-marvel-gold"><ArrowUpRight size={16} /></a>
          </div>
          <a href="mailto:geeksforgeeks@bennett.edu.in" className="mt-5 inline-block text-xs text-white/60 transition hover:text-marvel-gold">Contact the organizers</a>
        </div>
      </div>
      <div className="page-shell relative flex flex-col justify-between gap-3 border-t border-white/10 py-5 text-[9px] uppercase tracking-[0.12em] text-white/35 sm:flex-row">
        <span>© 2026 GFG Student Chapter · Bennett University</span>
        <span>Independent student event · Not affiliated with any film studio</span>
      </div>
    </footer>
  );
}