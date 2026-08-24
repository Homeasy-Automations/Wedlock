'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, CalendarDays, Users } from 'lucide-react';
import type { Destination } from '@/types/destination';

export default function DestinationCard({ destination, index = 0 }: { destination: Destination; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-6% 0px' }}
      transition={{ delay: (index % 4) * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/destinations/${destination.slug}`} className="group block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-sand">
          <Image
            src={destination.heroImage}
            alt={`${destination.name}, ${destination.country}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" aria-hidden />
          {destination.featured && (
            <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-ink">
              Signature
            </span>
          )}
          <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-base/90 text-ink opacity-0 transition-all duration-300 group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" />
          </span>
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">
              {destination.region} · {destination.country}
            </p>
            <h3 className="mt-1 font-display text-3xl font-medium text-cream">{destination.name}</h3>
            <p className="mt-1.5 font-alex text-xl leading-snug text-cream/80">{destination.tagline}</p>
            <div className="mt-3 flex max-h-0 flex-wrap gap-x-4 gap-y-1 overflow-hidden text-[11px] text-cream/70 opacity-0 transition-all duration-500 group-hover:max-h-16 group-hover:opacity-100">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5 text-gold" /> {destination.bestSeason}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 text-gold" /> {destination.idealGuests}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
