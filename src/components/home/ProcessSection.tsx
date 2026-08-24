'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    n: '01',
    title: 'Plan',
    body: 'One conversation becomes a blueprint — occasion, guest list, budget, city, season and the feeling you want the evening to leave behind.',
  },
  {
    n: '02',
    title: 'Design',
    body: 'Moodboards, palettes, venues and experiences sketched into a single creative brief — and prototyped until your family says “that’s us.”',
  },
  {
    n: '03',
    title: 'Produce',
    body: 'Vendors contracted, artists rehearsed, florals grown to order. Everything built quietly off-stage while your family simply looks forward to it.',
  },
  {
    n: '04',
    title: 'Execute',
    body: 'Cue sheets, command centres and a floor team that has done this 650+ times. The day unfolds; nobody sees the machinery.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-allura text-4xl leading-none text-gold">How we work</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
              Plan · Design · Produce · Execute
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-ink/60">
            The same four movements run through every Wedlock celebration — whether it is a
            palace wedding for eight hundred or a twelve-chair dinner at home.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-base p-8 transition-colors duration-500 hover:bg-ink"
            >
              <p className="font-sacramento text-5xl text-gold/70 transition-colors duration-500 group-hover:text-gold">
                {s.n}
              </p>
              <h3 className="mt-6 font-display text-3xl font-medium text-ink transition-colors duration-500 group-hover:text-cream">
                {s.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink/60 transition-colors duration-500 group-hover:text-cream/65">
                {s.body}
              </p>
              <span
                className="absolute bottom-0 left-0 h-1 w-0 bg-gold transition-all duration-500 group-hover:w-full"
                aria-hidden
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
