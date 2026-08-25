'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import AnimatedText from '@/components/ui/AnimatedText';
import MagneticButton from '@/components/ui/MagneticButton';
import HeroVideo from '@/components/ui/HeroVideo';

interface DestinationHeroProps {
  kicker: string;
  title: string;
  description?: string;
  image: string;
  video?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function DestinationHero({
  kicker,
  title,
  description,
  image,
  video,
  ctaLabel,
  ctaHref,
}: DestinationHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '15%']);

  return (
    <section ref={ref} className="relative flex min-h-[72svh] items-end overflow-hidden bg-ink">
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <div className={reduce ? 'absolute inset-0' : 'absolute inset-0 animate-kenburns'}>
          {video ? (
            <HeroVideo src={video} poster={image} />
          ) : (
            <Image src={image} alt={title} fill priority sizes="100vw" className="object-cover" />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/25" />
      </motion.div>

      <div className="container-x relative z-10 pb-16 pt-36">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-dancing text-4xl leading-none text-gold sm:text-5xl"
        >
          {kicker}
        </motion.p>
        <AnimatedText
          text={title}
          as="h1"
          delay={0.45}
          stagger={0.07}
          className="mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-cream sm:text-6xl"
        />
        {description ? (
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-cream/75 sm:text-lg"
          >
            {description}
          </motion.p>
        ) : null}
        {ctaLabel && ctaHref ? (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="mt-8"
          >
            <MagneticButton href={ctaHref} variant="gold" size="md">
              {ctaLabel}
            </MagneticButton>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
