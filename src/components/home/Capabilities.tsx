'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { services } from '@/data/services';

export default function Capabilities() {
  return (
    <section className="grain relative bg-ink py-24 text-cream sm:py-32">
      <div className="container-x relative z-[2]">
        <SectionHeading
          dark
          eyebrow="Full-stack celebration capability"
          title="Everything a celebration needs — under one roof."
          description="No hand-offs between five agencies. One Wedlock team carries your celebration from first sketch to last applause."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/services#${s.slug}`}
                className="group block overflow-hidden rounded-2xl border border-cream/10 bg-cream/[0.04] transition-colors duration-500 hover:border-gold/40 hover:bg-cream/[0.07]"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1.2s] group-hover:scale-[1.07]"
                  />
                </div>
                <div className="p-6">
                  <p className="font-display text-sm text-gold">{s.index}</p>
                  <div className="mt-2 flex items-center justify-between gap-3">
                    <h3 className="font-display text-2xl font-medium text-cream">{s.title}</h3>
                    <ArrowRight className="h-5 w-5 shrink-0 text-cream/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold" />
                  </div>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-cream/60">{s.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
