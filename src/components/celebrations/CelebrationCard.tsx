'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { SubService, CelebrationCategory } from '@/types/celebration';

interface CelebrationCardProps {
  service: SubService;
  category: CelebrationCategory;
  accent: string;
  index: number;
}

export default function CelebrationCard({ service, category, accent, index }: CelebrationCardProps) {
  const href = `/plan-your-celebration?occasion=${category}&service=${service.slug}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-6% 0px' }}
      transition={{ delay: (index % 3) * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={href}
        className="group block overflow-hidden rounded-2xl border border-ink/10 bg-white/50 transition-shadow duration-500 hover:shadow-[0_26px_50px_-26px_rgba(42,33,28,0.45)]"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
          />
          <span
            className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
            style={{ backgroundColor: accent }}
            aria-hidden
          />
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-xl font-semibold leading-snug text-ink">{service.title}</h3>
            <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-ink/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-ink" />
          </div>
          <p className="mt-2 text-sm leading-relaxed text-ink/60 opacity-90 transition-opacity group-hover:opacity-100">
            {service.description}
          </p>
          <p
            className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ color: accent }}
          >
            Plan this with Wedlock →
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
