'use client';

import { motion, AnimatePresence } from 'framer-motion';
import EventCard from './EventCard';
import type { EventItem } from '@/types/event';

export default function EventGrid({ events }: { events: EventItem[] }) {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" key={events.map((e) => e.slug).join('-')}>
        {events.map((event, i) => (
          <EventCard key={event.slug} event={event} index={i} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
