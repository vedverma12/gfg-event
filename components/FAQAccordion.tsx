"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  { question: "How large can a team be?", answer: "The working team-size guideline is 2–4 participants. The organizers will confirm the final rule in the official registration details." },
  { question: "Who can participate?", answer: "The event is intended for college students. Eligibility, team composition, and any campus-specific requirements will be confirmed by the GFG Student Chapter before registration closes." },
  { question: "What should I bring?", answer: "Bring your laptop, charger, student ID, and anything you need to work comfortably for 24 hours. Venue access, meals, and equipment details will be shared with registered teams." },
  { question: "Do we need to arrive with a finished idea?", answer: "No. Come ready to explore a track and build during the event. Final rules about pre-existing code and project submissions will be shared in the challenge brief." },
];

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {faqs.map((faq, index) => (
        <div key={faq.question}>
          <button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? null : index)} className="flex w-full items-center justify-between gap-6 py-5 text-left">
            <span className="text-xs font-semibold sm:text-sm">{faq.question}</span>
            <ChevronDown size={17} className={`shrink-0 text-marvel-gold transition-transform ${open === index ? "rotate-180" : ""}`} />
          </button>
          <AnimatePresence initial={false}>
            {open === index && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><p className="max-w-3xl pb-5 pr-8 text-xs leading-6 text-white/55">{faq.answer}</p></motion.div>}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}