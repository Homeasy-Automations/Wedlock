'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Users, ArrowUpRight } from 'lucide-react';
import { formatGuests } from '@/lib/utils';
import type { EventItem } from '@/types/event';

export default function EventCard({ event, index = 0 }: { event: EventItem; index?: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-6% 0px' }}
      transition={{ delay: (index % 3) * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/events/${event.slug}`} className="group block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand sm:aspect-[4/4.6]">
          <Image
            src={event.heroImage}
            alt={event.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent transition-opacity duration-500"
            aria-hidden
          />
          <span className="absolute left-4 top-4 rounded-full bg-base/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-ink backdrop-blur">
            {event.categoryLabel}
          </span>
          <span
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-base/90 text-ink opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100"
            aria-hidden
          >
            <ArrowUpRight className="h-4 w-4" />
          </span>
          <div className="absolute inset-x-0 bottom-0 p-5">
            <h3 className="font-display text-2xl font-medium leading-tight text-cream">{event.title}</h3>
            <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-cream/70">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-gold" />
                {event.city}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 text-gold" />
                {formatGuests(event.guests)} guests
              </span>
              <span>{event.year}</span>
            </div>
            <p className="mt-3 max-h-0 overflow-hidden text-xs leading-relaxed text-cream/70 opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">
              {event.summary}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
