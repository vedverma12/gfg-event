"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { galleryImages } from "@/lib/event-data";

export function GalleryGrid() {
  const [active, setActive] = useState<number | null>(null);

  const change = useCallback((direction: number) => {
    setActive((current) => current === null ? null : (current + direction + galleryImages.length) % galleryImages.length);
  }, []);

  useEffect(() => {
    if (active === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") change(1);
      if (event.key === "ArrowLeft") change(-1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, change]);

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {galleryImages.map((image, index) => (
          <motion.button key={image.src} type="button" onClick={() => setActive(index)} whileHover={{ y: -4 }} className={`group relative min-h-[280px] overflow-hidden border border-white/10 text-left ${index === 1 || index === 2 ? "lg:mt-12" : ""}`} aria-label={`Open image: ${image.label}`}>
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover grayscale-[35%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/90 via-[#0a0a0f]/10 to-transparent" />
            <span className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 text-xs font-semibold uppercase tracking-[0.1em]">
              {image.label}<ArrowRight size={15} className="shrink-0 text-marvel-gold transition group-hover:translate-x-1" />
            </span>
            <span className="absolute left-4 top-4 text-[9px] font-semibold tracking-[0.16em] text-white/65">0{index + 1} / 04</span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div className="fixed inset-0 z-[70] grid place-items-center bg-black/95 p-4 sm:p-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)} role="dialog" aria-modal="true" aria-label={galleryImages[active].label}>
            <button type="button" aria-label="Close gallery image" onClick={() => setActive(null)} className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center border border-white/20 bg-black/30"><X size={19} /></button>
            <button type="button" aria-label="Previous image" onClick={(event) => { event.stopPropagation(); change(-1); }} className="absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center border border-white/20 bg-black/30 sm:left-7"><ArrowLeft size={18} /></button>
            <motion.figure key={galleryImages[active].src} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="relative h-[75vh] w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
              <Image src={galleryImages[active].src} alt={galleryImages[active].alt} fill sizes="100vw" className="object-contain" />
              <figcaption className="absolute -bottom-8 left-0 text-[10px] uppercase tracking-[0.14em] text-white/60">{galleryImages[active].label}</figcaption>
            </motion.figure>
            <button type="button" aria-label="Next image" onClick={(event) => { event.stopPropagation(); change(1); }} className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center border border-white/20 bg-black/30 sm:right-7"><ArrowRight size={18} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}