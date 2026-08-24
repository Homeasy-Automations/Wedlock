'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { celebrations } from '@/data/celebrations';

export default function OccasionSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrowScript="What are you celebrating?"
            title="Five occasions. One devoted team."
            description="Every celebration family has its own rituals, its own rhythm, its own accent. Choose yours — each is a complete universe we know intimately."
          />
          <Link
            href="/celebrations"
            className="group hidden shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-ink/60 transition-colors hover:text-gold md:inline-flex"
          >
            All celebrations
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {celebrations.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={i % 2 === 1 ? 'lg:mt-10' : ''}
            >
              <Link href={c.href} className="group block">
                <div className="relative aspect-[3/4.2] overflow-hidden rounded-2xl bg-sand">
                  <Image
                    src={c.heroImage}
                    alt={`${c.name} celebration by Wedlock`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
                  />
                  <div
                    className="absolute inset-0 opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(to top, rgba(24,18,14,0.85) 0%, rgba(24,18,14,0.15) 55%, transparent 100%)`,
                    }}
                    aria-hidden
                  />
                  <span
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{ backgroundColor: c.accent }}
                    aria-hidden
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="font-display text-xs" style={{ color: c.accent }}>
                      {c.index}
                    </p>
                    <p className="mt-1 font-display text-2xl font-medium leading-tight text-cream">{c.name}</p>
                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-cream/55">
                      {c.subServices.length} signature services
                    </p>
                    <p className="mt-3 max-h-0 overflow-hidden text-xs leading-relaxed text-cream/75 opacity-0 transition-all duration-500 group-hover:max-h-16 group-hover:opacity-100">
                      {c.tagline}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
