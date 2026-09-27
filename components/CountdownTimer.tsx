"use client";

import { useEffect, useState } from "react";

const eventStart = new Date("2026-11-15T09:00:00+05:30").getTime();

export function CountdownTimer({ compact = false }: { compact?: boolean }) {
  const [remaining, setRemaining] = useState(eventStart - Date.now());

  useEffect(() => {
    const timer = window.setInterval(() => setRemaining(eventStart - Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const totalSeconds = Math.max(0, Math.floor(remaining / 1000));
  const units = [
    { label: "Days", value: Math.floor(totalSeconds / 86400) },
    { label: "Hours", value: Math.floor((totalSeconds % 86400) / 3600) },
    { label: "Minutes", value: Math.floor((totalSeconds % 3600) / 60) },
    { label: "Seconds", value: totalSeconds % 60 },
  ];

  return (
    <div aria-label="Countdown to 15 November 2026, 9 AM India time" className={`grid grid-cols-4 ${compact ? "gap-2" : "gap-3 sm:gap-4"}`}>
      {units.map(({ label, value }) => (
        <div key={label} className={`border border-white/10 bg-white/[0.025] text-center ${compact ? "px-2 py-3" : "px-2 py-4 sm:px-4 sm:py-5"}`}>
          <span className={`block font-display leading-none tabular-nums ${compact ? "text-2xl sm:text-3xl" : "text-3xl sm:text-5xl"}`}>{String(value).padStart(2, "0")}</span>
          <span className="mt-2 block text-[8px] font-semibold uppercase tracking-[0.16em] text-white/45 sm:text-[9px]">{label}</span>
        </div>
      ))}
    </div>
  );
}