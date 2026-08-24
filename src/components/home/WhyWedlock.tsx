'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Compass, Sparkles, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    icon: Compass,
    title: 'One team, end to end',
    body: 'No juggling five agencies. Planning, design, production and hospitality sit at the same table from day one — yours.',
  },
  {
    icon: ShieldCheck,
    title: 'Radical transparency',
    body: 'A shared planning portal shows every quote, vendor and decision. Your money goes where you can see it.',
  },
  {
    icon: Sparkles,
    title: 'Design-led, never template-led',
    body: 'Every celebration starts from a blank page and your family’s story — not from last season’s moodboard.',
  },
  {
    icon: HeartHandshake,
    title: 'Hospitality in our bones',
    body: 'We were raised in Indian family culture: elders first, every guest personally hosted, nobody a ticket number.',
  },
];

export default function WhyWedlock() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 top-6 select-none font-sacramento text-[11rem] leading-none text-gold/10"
      >
        why
      </span>
      <div className="container-x relative">
        <div className="max-w-2xl">
          <p className="eyebrow text-ink/55">Why Wedlock</p>
          <h2 className="mt-3 font-display text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl">
            Families don’t hire us for events.{' '}
            <span className="font-beau text-gold">They hire us for peace of mind.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-2xl border border-ink/10 bg-base p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[0_24px_50px_-24px_rgba(42,33,28,0.4)]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-ink">
                <r.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold text-ink">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{r.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
