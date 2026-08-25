'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import AnimatedText from '@/components/ui/AnimatedText';
import HeroVideo from '@/components/ui/HeroVideo';
import { celebrations } from '@/data/celebrations';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '18%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '45%']);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink">
      {/* Background media — scroll parallax + slow ken burns */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <div className={reduce ? 'absolute inset-0' : 'absolute inset-0 animate-kenburns'}>
          <HeroVideo
            src="/videos/wedding1.mp4"
            poster="https://wedlock.co.in/wp-content/uploads/2024/04/image0-1024x682.jpeg"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/25" />
        <div className="absolute inset-0 bg-[radial-gradient(75%_60%_at_50%_80%,transparent_0%,rgba(42,33,28,0.55)_100%)]" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ y: contentY, opacity: fade }} className="container-x relative z-10 pb-28 pt-60 sm:pb-32">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="font-allura text-4xl leading-none text-gold sm:text-5xl md:text-6xl"
        >
          What are you celebrating?
        </motion.p>

        <h1 className="mt-6 max-w-4xl font-display text-[2.9rem] font-medium leading-[1.02] tracking-tight text-cream sm:text-7xl md:text-[5.4rem]">
          <AnimatedText text="Celebrations." delay={0.55} stagger={0.08} as="span" className="block" />
          <AnimatedText text="Thoughtfully produced." delay={0.8} stagger={0.06} as="span" className="block text-cream/90" />
        </h1>

        {/* <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.8 }}
          className="mt-7 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg"
        >
          Weddings, birthdays, anniversaries, engagements and the gatherings in between —
          planned, designed, produced and executed by one obsessive team, across 40+ cities
          and 14 countries.
        </motion.p> */}

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="/plan-your-celebration" variant="gold" size="lg">
            Plan Your Celebration
          </MagneticButton>
          <MagneticButton href="/celebrations" variant="outline-light" size="lg">
            Explore Celebrations
          </MagneticButton>
        </motion.div>

        {/* Category quick links */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.55, duration: 1 }}
          className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3"
        >
          {celebrations.map((c, i) => (
            <Link
              key={c.id}
              href={c.href}
              className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-cream/60 transition-colors hover:text-gold"
            >
              <span className="font-display normal-case tracking-normal" style={{ color: c.accent }}>
                0{i + 1}
              </span>
              <span className="link-underline">{c.shortName}</span>
            </Link>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 right-8 z-10 hidden flex-col items-center gap-2 text-cream/50 md:flex"
        aria-hidden
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] [writing-mode:vertical-rl]">Scroll</span>
        <motion.span animate={reduce ? undefined : { y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </motion.div>
    </section>
  );
}
