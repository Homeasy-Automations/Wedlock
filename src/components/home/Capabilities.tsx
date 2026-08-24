'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

import Image from 'next/image';

import { AnimatePresence, motion } from 'framer-motion';

import { ArrowUpRight, Check } from 'lucide-react';

import SectionHeading from '@/components/ui/SectionHeading';

import { services } from '@/data/services';

/**
 * The Capability Register — an editorial index/reader-pane layout in place
 * of a repeated card grid. Left: heading + numbered ledger of disciplines.
 * Right: a sticky reader pane that crossfades to whichever discipline is active.
 *
 * Features:
 * - Editorial two-column layout
 * - Image starts at the same level as the heading
 * - Manual service selection
 * - Automatic service rotation every 15 seconds
 * - Mobile expandable service details
 * - Crossfade image/content transitions
 */

export default function Capabilities() {
  const [active, setActive] = useState(0);

  const current = services[active];

  const marqueeRow = services.map((s) => s.title).join('   ·   ');

  /**
   * Automatically change the active service every 15 seconds.
   *
   * The interval is recreated whenever the user manually selects
   * a different service, effectively resetting the 15-second timer.
   */
  useEffect(() => {
    if (services.length <= 1) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % services.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <section className="grain relative overflow-hidden bg-ink py-24 text-cream sm:py-32">
      {/* =========================================================
          MASTHEAD MARQUEE
      ========================================================= */}
      <div className="relative z-[2] mb-16 overflow-hidden border-y border-cream/10 py-3 sm:mb-20">
        <div className="flex w-max animate-marquee items-center gap-0 whitespace-nowrap font-display text-sm uppercase tracking-[0.3em] text-cream/35">
          <span className="px-4">{marqueeRow}</span>
          <span className="px-4">{marqueeRow}</span>
        </div>
      </div>

      <div className="container-x relative z-[2]">
        {/* =========================================================
            MAIN TWO-COLUMN LAYOUT

            LEFT:
            Heading + Service Ledger

            RIGHT:
            Sticky Image / Reader Pane
        ========================================================= */}
        <div className="grid gap-x-12 gap-y-10 lg:grid-cols-12 lg:items-start">

          {/* =====================================================
              LEFT COLUMN — HEADING + LEDGER
          ===================================================== */}
          <div className="lg:col-span-5">

            {/* Section Heading */}
            <SectionHeading
              dark
              eyebrow="Full-stack celebration capability"
              title="Everything a celebration needs — under one roof."
              description="No hand-offs between five agencies. One Wedlock team carries your celebration from first sketch to last applause. Select a discipline to look inside."
            />

            {/* =================================================
                SERVICE LEDGER
            ================================================= */}
            <div className="mt-14 lg:mt-20">
              <ul className="border-t border-cream/10">
                {services.map((s, i) => {
                  const isActive = i === active;

                  return (
                    <li
                      key={s.slug}
                      className="border-b border-cream/10"
                    >
                      <button
                        type="button"
                        onClick={() => setActive(i)}
                        aria-expanded={isActive}
                        className="group flex w-full items-baseline gap-5 py-5 text-left transition-colors sm:py-6"
                      >
                        {/* Number */}
                        <span
                          className={`font-display text-lg transition-colors duration-300 sm:text-xl ${
                            isActive
                              ? 'text-gold'
                              : 'text-cream/30'
                          }`}
                        >
                          {s.index}
                        </span>

                        {/* Title + Mobile Details */}
                        <span className="flex-1">
                          <span
                            className={`block font-display text-2xl font-medium leading-tight transition-colors duration-300 sm:text-3xl ${
                              isActive
                                ? 'text-cream'
                                : 'text-cream/45 group-hover:text-cream/75'
                            }`}
                          >
                            {s.title}
                          </span>

                          {/* =====================================
                              MOBILE-ONLY DETAIL
                          ===================================== */}
                          <AnimatePresence initial={false}>
                            {isActive && (
                              <motion.span
                                key="mobile-detail"
                                initial={{
                                  height: 0,
                                  opacity: 0,
                                }}
                                animate={{
                                  height: 'auto',
                                  opacity: 1,
                                }}
                                exit={{
                                  height: 0,
                                  opacity: 0,
                                }}
                                transition={{
                                  duration: 0.4,
                                  ease: [0.22, 1, 0.36, 1],
                                }}
                                className="block overflow-hidden lg:hidden"
                              >
                                <span className="mt-4 block">

                                  {/* Mobile Image */}
                                  <span className="relative block aspect-[4/3] overflow-hidden rounded-xl">
                                    <Image
                                      src={s.image}
                                      alt={s.title}
                                      fill
                                      sizes="100vw"
                                      className="object-cover"
                                    />
                                  </span>

                                  {/* Mobile Description */}
                                  <span className="mt-4 block text-sm leading-relaxed text-cream/60">
                                    {s.description}
                                  </span>

                                  {/* Mobile Points */}
                                  <span className="mt-4 block space-y-2">
                                    {s.points.map((p) => (
                                      <span
                                        key={p}
                                        className="flex items-start gap-2.5 text-sm text-cream/70"
                                      >
                                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />

                                        {p}
                                      </span>
                                    ))}
                                  </span>

                                  {/* Mobile Link */}
                                  <Link
                                    href={`/services#${s.slug}`}
                                    className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold"
                                  >
                                    Explore this capability

                                    <ArrowUpRight className="h-3.5 w-3.5" />
                                  </Link>
                                </span>
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </span>

                        {/* Arrow Button */}
                        <span
                          aria-hidden
                          className={`hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:flex ${
                            isActive
                              ? 'border-gold bg-gold text-ink'
                              : 'border-cream/20 text-cream/40 group-hover:border-cream/40'
                          }`}
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* =====================================================
              RIGHT COLUMN — DESKTOP READER PANE
          ===================================================== */}
          <div className="hidden lg:col-span-7 lg:block">
            <div className="sticky top-28">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-cream/10">

                {/* ===============================================
                    IMAGE
                =============================================== */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.slug}
                      initial={{
                        opacity: 0,
                        scale: 1.06,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={current.image}
                        alt={current.title}
                        fill
                        sizes="50vw"
                        className="object-cover"
                        priority
                      />

                      {/* Image Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                    </motion.div>
                  </AnimatePresence>

                  {/* Large Number */}
                  <span className="absolute left-6 top-6 font-display text-6xl text-cream/25">
                    {current.index}
                  </span>
                </div>

                {/* ===============================================
                    READER COPY
                =============================================== */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${current.slug}-copy`}
                    initial={{
                      opacity: 0,
                      y: 14,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -8,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="bg-cream/[0.04] p-8"
                  >
                    {/* Title */}
                    <p className="font-display text-2xl font-medium text-cream">
                      {current.title}
                    </p>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-relaxed text-cream/60">
                      {current.description}
                    </p>

                    {/* Points */}
                    <div className="mt-5 space-y-2.5">
                      {current.points.map((p) => (
                        <div
                          key={p}
                          className="flex items-start gap-2.5 text-sm text-cream/70"
                        >
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />

                          {p}
                        </div>
                      ))}
                    </div>

                    {/* Explore Link */}
                    <Link
                      href={`/services#${current.slug}`}
                      className="group mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold"
                    >
                      Explore this capability

                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}