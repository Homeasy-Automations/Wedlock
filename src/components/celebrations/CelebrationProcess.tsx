'use client';

import { motion } from 'framer-motion';
import type { Celebration } from '@/types/celebration';

const stepLabels = [
  { key: 'plan', n: '01', title: 'Plan' },
  { key: 'design', n: '02', title: 'Design' },
  { key: 'produce', n: '03', title: 'Produce' },
  { key: 'execute', n: '04', title: 'Execute' },
] as const;

export default function CelebrationProcess({ celebration }: { celebration: Celebration }) {
  return (
    <section
      className="py-20 sm:py-28"
      style={{ ['--cat' as string]: celebration.accent, backgroundColor: `color-mix(in srgb, ${celebration.accent} 7%, #F8EBEB)` } as React.CSSProperties}
    >
      <div className="container-x">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-allura text-4xl leading-none text-cat">How your {celebration.shortName.toLowerCase()} unfolds</p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              Plan · Design · Produce · Execute
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink/60">
            The Wedlock method, tuned specifically to {celebration.name.toLowerCase()}.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {stepLabels.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl border border-ink/10 bg-base p-7"
            >
              <span
                className="absolute left-7 top-0 h-1 w-10 -translate-y-1/2 rounded-full"
                style={{ backgroundColor: celebration.accent }}
                aria-hidden
              />
              <p className="font-sacramento text-5xl" style={{ color: celebration.accent }}>
                {s.n}
              </p>
              <h3 className="mt-4 font-display text-2xl font-medium text-ink">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{celebration.processNotes[s.key]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
