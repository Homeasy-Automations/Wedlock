'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, CalendarHeart } from 'lucide-react';
import type { EnquiryPayload } from '@/types/enquiry';
import { celebrations } from '@/data/celebrations';
import { titleCase } from '@/lib/utils';

interface SuccessStateProps {
  reference: string;
  payload: EnquiryPayload;
}

export default function SuccessState({ reference, payload }: SuccessStateProps) {
  const occasion = celebrations.find((c) => c.id === payload.occasion);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-lg text-center"
    >
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.15 }}
        className="mx-auto flex h-20 w-20 items-center justify-center rounded-full"
        style={{ backgroundColor: occasion?.accent ?? '#C9A24B' }}
      >
        <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none" aria-hidden>
          <motion.path
            d="M7 17l6 6 12-13"
            stroke="#FBF6F0"
            strokeWidth={3.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.45, duration: 0.5, ease: 'easeOut' }}
          />
        </svg>
      </motion.div>

      <p className="mt-8 font-sacramento text-5xl text-gold">Wonderful!</p>
      <h2 className="mt-3 font-display text-3xl font-medium text-ink">
        Your celebration is already on our desk.
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-ink/65">
        Thank you, {payload.name.split(' ')[0]}. A celebration director will reach you on{' '}
        <span className="font-semibold text-ink">{payload.phone}</span> within 24 hours to begin
        the conversation.
      </p>

      <div className="mt-8 rounded-2xl border border-ink/10 bg-white/60 p-6 text-left">
        <p className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.2em] text-ink/45">
          Your enquiry
          <span className="text-gold">№ {reference}</span>
        </p>
        <dl className="mt-4 space-y-2.5 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-ink/50">Occasion</dt>
            <dd className="font-semibold text-ink">
              {occasion?.name ?? titleCase(payload.occasion)}
              {payload.subService ? ` · ${titleCase(payload.subService)}` : ''}
            </dd>
          </div>
          {payload.eventDate && (
            <div className="flex justify-between gap-4">
              <dt className="text-ink/50">Tentative date</dt>
              <dd className="font-semibold text-ink">{payload.eventDate}</dd>
            </div>
          )}
          <div className="flex justify-between gap-4">
            <dt className="text-ink/50">City</dt>
            <dd className="font-semibold text-ink">{payload.city}</dd>
          </div>
          {payload.guests ? (
            <div className="flex justify-between gap-4">
              <dt className="text-ink/50">Guests</dt>
              <dd className="font-semibold text-ink">~{payload.guests.toLocaleString('en-IN')}</dd>
            </div>
          ) : null}
          {payload.budget && (
            <div className="flex justify-between gap-4">
              <dt className="text-ink/50">Budget</dt>
              <dd className="font-semibold text-ink">{payload.budget}</dd>
            </div>
          )}
        </dl>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-cream transition-colors hover:bg-espresso"
        >
          <Home className="h-4 w-4" /> Back home
        </Link>
        <Link
          href="/events"
          className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-ink transition-colors hover:border-ink"
        >
          <CalendarHeart className="h-4 w-4" /> Browse real events
        </Link>
      </div>
      <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.3em] text-ink/40">
        Plan · Design · Produce · Execute
      </p>
    </motion.div>
  );
}
