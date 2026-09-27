"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Tracks", href: "/tracks" },
  { label: "Schedule", href: "/schedule" },
  { label: "Judges", href: "/judges" },
  { label: "Gallery", href: "/gallery" },
];

export function Navbar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setVisible(current < 48 || current < lastScroll.current || menuOpen);
      lastScroll.current = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <motion.header
        animate={{ y: visible ? 0 : -112, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0a0f]/85 backdrop-blur-xl"
      >
        <div className="page-shell flex h-[76px] items-center justify-between gap-3">
          <Link href="/" aria-label="CODE: INFINITY home" className="group flex min-w-0 shrink items-center gap-2">
            <Image
              src="/images/gfg-logo.png"
              alt="GeeksforGeeks logo"
              width={1920}
              height={979}
              priority
              sizes="(max-width: 640px) 48px, 64px"
              className="h-6 w-12 shrink-0 object-contain transition group-hover:drop-shadow-[0_0_8px_rgba(61,181,98,.45)] sm:h-8 sm:w-16"
            />
            <span className="min-w-0 leading-none">
              <span className="block whitespace-nowrap font-display text-[13px] tracking-wide sm:text-[17px]">CODE: INFINITY</span>
              <span className="mt-1 hidden text-[8px] font-medium uppercase tracking-[0.19em] text-white/50 sm:block">GFG · Bennett University</span>
            </span>
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-6 xl:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`text-[10px] font-semibold uppercase tracking-[0.12em] transition hover:text-marvel-gold ${pathname === link.href ? "text-marvel-gold" : "text-white/70"}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/register" className="button-primary !min-h-[42px] !px-2 !text-[8px] sm:!px-4 sm:!text-[9px]">
              Register <ArrowUpRight size={13} aria-hidden="true" />
            </Link>
            <button
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="grid h-10 w-10 place-items-center border border-white/15 xl:hidden"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-x-0 top-[76px] z-40 overflow-hidden border-b border-white/10 bg-[#0a0a0f]/95 backdrop-blur-xl xl:hidden"
          >
            <div className="page-shell grid grid-cols-2 gap-x-8 gap-y-1 py-5">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="border-b border-white/10 py-4 text-xs uppercase tracking-[0.14em] text-white/75">
                  {link.label}
                </Link>
              ))}
              <Link href="/register" className="col-span-2 mt-3 flex items-center justify-between bg-marvel-red px-4 py-4 text-[10px] font-bold uppercase tracking-[0.15em]">
                Enter the mission <ArrowUpRight size={15} />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      <div className="h-[76px]" aria-hidden="true" />
    </>
  );
}