'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  delay?: number;
  stagger?: number;
}

/** Staggered word-reveal for headlines and section titles. */
export default function AnimatedText({
  text,
  as: Tag = 'h2',
  className,
  delay = 0,
  stagger = 0.045,
}: AnimatedTextProps) {
  const reduce = useReducedMotion();
  const words = text.split(' ');

  if (reduce) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={cn('inline-block', className)} aria-label={text}>
      {words.map((word, i) => {
        // Playfair Display's "&" glyph is drawn much taller than a normal
        // capital letter (it's an ornate "et" ligature), so the tight
        // overflow-hidden slide-mask below clips its top off. Fade it in
        // instead of sliding it, so it never needs to be masked.
        if (word === '&') {
          return (
            <span key={`${word}-${i}`} className="inline-block align-bottom">
              <motion.span
                className="inline-block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-8% 0px' }}
                transition={{ duration: 0.5, delay: delay + i * stagger, ease: 'easeOut' }}
              >
                {word}
              </motion.span>
              {i < words.length - 1 ? <span aria-hidden>&nbsp;</span> : null}
            </span>
          );
        }

        return (
          <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
            <motion.span
              className="inline-block will-change-transform"
              initial={{ y: '112%', rotate: 2 }}
              whileInView={{ y: '0%', rotate: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.72, delay: delay + i * stagger, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 ? <span aria-hidden>&nbsp;</span> : null}
          </span>
        );
      })}
    </Tag>
  );
}
