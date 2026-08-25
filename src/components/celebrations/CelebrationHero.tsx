'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import AnimatedText from '@/components/ui/AnimatedText';
import MagneticButton from '@/components/ui/MagneticButton';
import HeroVideo from '@/components/ui/HeroVideo';
import type { Celebration } from '@/types/celebration';

export default function CelebrationHero({ celebration }: { celebration: Celebration }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '16%']);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[88svh] items-end overflow-hidden bg-ink"
      style={{ ['--cat' as string]: celebration.accent } as React.CSSProperties}
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <div className={reduce ? 'absolute inset-0' : 'absolute inset-0 animate-kenburns'}>
          {celebration.heroVideo ? (
            <HeroVideo src={celebration.heroVideo} poster={celebration.heroImage} />
          ) : (
            <Image
              src={celebration.heroImage}
              alt={`${celebration.name} — a Wedlock celebration`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          )}
        </div>
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, rgba(24,18,14,0.92) 0%, color-mix(in srgb, ${celebration.accent} 12%, transparent) 60%, rgba(24,18,14,0.35) 100%)`,
          }}
          aria-hidden
        />
      </motion.div>

      <div className="container-x relative z-10 pb-20 pt-36">
        <motion.nav
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          aria-label="Breadcrumb"
          className="mb-8 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-cream/50"
        >
          <Link href="/celebrations" className="transition-colors hover:text-gold">
            Celebrations
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span style={{ color: celebration.accent }}>{celebration.name}</span>
        </motion.nav>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="font-beau text-3xl leading-none sm:text-4xl"
              style={{ color: celebration.accent }}
            >
              {celebration.heroKicker}
            </motion.p>
            <div className="mt-4 flex items-baseline gap-4">
              <span className="font-sacramento text-5xl text-cream/40">{celebration.index}</span>
              <AnimatedText
                text={celebration.name}
                as="h1"
                delay={0.5}
                stagger={0.09}
                className="font-display text-6xl font-medium tracking-tight text-cream sm:text-8xl"
              />
            </div>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg"
            >
              {celebration.tagline} {celebration.description}
            </motion.p>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="flex shrink-0 flex-col items-start gap-5"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-cream/50">
              {celebration.subServices.length} signature services
            </p>
            <MagneticButton href={`/plan-your-celebration?occasion=${celebration.id}`} variant="cat" size="md">
              Plan your {celebration.shortName.toLowerCase()}
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
