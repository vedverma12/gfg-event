"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import type { tracks } from "@/lib/event-data";

type Track = (typeof tracks)[number];

export function TrackCard({ track, index = 0 }: { track: Track; index?: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.06 }}
      whileHover={{ y: -5, rotateX: 1, rotateY: -0.7 }}
      className="group relative min-h-[380px] overflow-hidden border border-white/10 bg-background-surface text-left [transform-style:preserve-3d]"
      style={{ borderColor: open ? track.color : undefined }}
    >
      <Image src={track.image} alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover opacity-45 transition duration-700 group-hover:scale-105 group-hover:opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-[#0a0a0f]/5" />
      <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: track.color }} />
      <div className="relative flex min-h-[380px] flex-col justify-between p-6 sm:p-7">
        <div className="flex items-start justify-between">
          <span className="grid h-12 w-12 place-items-center border text-xl" style={{ borderColor: `${track.color}88`, color: track.color, backgroundColor: `${track.color}18` }}>{track.icon}</span>
          <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/55">Stone 0{index + 1}</span>
        </div>
        <div>
          <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.19em]" style={{ color: track.color }}>{track.stone} stone · {track.field}</p>
          <h3 className="display-heading text-4xl uppercase sm:text-5xl">{track.stone}</h3>
          <p className="mt-3 max-w-sm text-xs leading-6 text-white/65">{track.description}</p>
          <AnimatePresence initial={false}>
            {open && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                <p className="mt-4 border-t border-white/15 pt-4 text-[11px] leading-6 text-white/75">{track.challenge}</p>
              </motion.div>
            )}
          </AnimatePresence>
          <button type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)} className="mt-5 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-white transition hover:text-marvel-gold">
            {open ? "Close challenge" : "View challenge"} {open ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          </button>
        </div>
      </div>
    </motion.article>
  );
}