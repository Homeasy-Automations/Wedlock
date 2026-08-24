'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Testimonial } from '@/data/testimonials';

interface TestimonialsProps {
  items: Testimonial[];
  dark?: boolean;
  eyebrowScript?: string;
}

export default function Testimonials({ items, dark, eyebrowScript = 'Families on Wedlock' }: TestimonialsProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused || items.length < 2) return;
    timer.current = setInterval(() => setIndex((i) => (i + 1) % items.length), 6500);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, items.length]);

  const current = items[index];
  if (!current) return null;

  return (
    <section
      className={cn('py-24 sm:py-32', dark ? 'grain relative bg-ink' : 'bg-base')}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-x relative z-[2] mx-auto max-w-4xl text-center">
        <p className={cn('font-alex text-4xl', dark ? 'text-gold' : 'text-gold')}>{eyebrowScript}</p>
        <Quote
          className={cn('mx-auto mt-8 h-8 w-8 rotate-180', dark ? 'text-gold/40' : 'text-gold/50')}
          aria-hidden
        />

        <div className="relative mt-6 min-h-[15rem] sm:min-h-[12rem]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <p
                className={cn(
                  'font-dancing text-3xl leading-snug sm:text-4xl',
                  dark ? 'text-cream' : 'text-ink',
                )}
              >
                “{current.quote}”
              </p>
              <footer className="mt-8">
                <p className={cn('font-semibold', dark ? 'text-cream' : 'text-ink')}>{current.name}</p>
                <p className={cn('mt-1 text-sm', dark ? 'text-cream/55' : 'text-ink/55')}>
                  {current.detail} · {current.location}
                </p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-5">
          <button
            onClick={() => setIndex((index - 1 + items.length) % items.length)}
            aria-label="Previous testimonial"
            className={cn(
              'flex h-11 w-11 items-center justify-center rounded-full border transition-colors',
              dark
                ? 'border-cream/25 text-cream/70 hover:border-gold hover:text-gold'
                : 'border-ink/20 text-ink/60 hover:border-gold hover:text-gold',
            )}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            {items.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={cn(
                  'h-1.5 rounded-full transition-all duration-400',
                  i === index ? 'w-7 bg-gold' : dark ? 'w-1.5 bg-cream/30' : 'w-1.5 bg-ink/20',
                )}
              />
            ))}
          </div>
          <button
            onClick={() => setIndex((index + 1) % items.length)}
            aria-label="Next testimonial"
            className={cn(
              'flex h-11 w-11 items-center justify-center rounded-full border transition-colors',
              dark
                ? 'border-cream/25 text-cream/70 hover:border-gold hover:text-gold'
                : 'border-ink/20 text-ink/60 hover:border-gold hover:text-gold',
            )}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
