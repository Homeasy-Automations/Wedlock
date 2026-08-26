'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  sub: string;
}

const stats: Stat[] = [
  { value: 650, suffix: '+', label: 'Celebrations Produced', sub: 'weddings, birthdays, jubilees & more' },
  { value: 42, suffix: '', label: 'Cities & Destinations', sub: 'across India and 14 countries' },
  { value: 12, suffix: '+', label: 'Years of Craft', sub: 'since our first Patna wedding, 2014' },
  { value: 250000, suffix: '+', label: 'Guests Hosted', sub: 'every one of them personally' },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setVal(to);
      return;
    }
    let raf: number;
    const start = performance.now();
    const duration = 1900;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, reduce]);

  return (
    <span ref={ref}>
      {val.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="border-b border-ink/10 bg-cream py-16 sm:py-20">
      <div className="container-x grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`text-center ${i > 0 ? 'lg:border-l lg:border-gold/70 lg:pl-6' : ''}`}
          >
            <span className="absolute left-0 top-1 h-full w-px bg-gold" aria-hidden />
            <p className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-ink">{s.label}</p>
            <p className="mt-1 text-xs text-ink/50">{s.sub}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
