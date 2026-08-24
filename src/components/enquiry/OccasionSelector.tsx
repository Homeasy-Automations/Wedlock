'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { occasionOptions } from '@/data/celebrations';

interface OccasionSelectorProps {
  selected: string;
  subService: string;
  onSelect: (occasion: string) => void;
  onSelectSub: (sub: string) => void;
  error?: string;
}

export default function OccasionSelector({
  selected,
  subService,
  onSelect,
  onSelectSub,
  error,
}: OccasionSelectorProps) {
  const active = occasionOptions.find((o) => o.id === selected);

  return (
    <div>
      <p className="font-allura text-3xl leading-none text-gold sm:text-4xl">What are you celebrating?</p>
      <h2 className="mt-3 font-display text-2xl font-medium text-ink sm:text-3xl">
        Choose your occasion
      </h2>

      <div className="mt-7 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-5">
        {occasionOptions.map((o, i) => {
          const isActive = selected === o.id;
          return (
            <motion.button
              key={o.id}
              type="button"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              onClick={() => onSelect(o.id)}
              aria-pressed={isActive}
              className={cn(
                'group relative overflow-hidden rounded-2xl border-2 text-left transition-all duration-300',
                isActive
                  ? 'border-transparent shadow-[0_18px_40px_-20px_rgba(42,33,28,0.5)]'
                  : 'border-ink/10 hover:border-ink/25',
              )}
              style={isActive ? { borderColor: o.accent } : undefined}
            >
              <div className="relative aspect-[4/3]">
                <Image src={o.image} alt={o.name} fill sizes="(max-width: 640px) 50vw, 20vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" aria-hidden />
                {isActive && (
                  <span
                    className="absolute right-2.5 top-2.5 flex h-6 w-6 items-center justify-center rounded-full text-base"
                    style={{ backgroundColor: o.accent }}
                    aria-hidden
                  >
                    <Check className="h-3.5 w-3.5" />
                  </span>
                )}
                <span className="absolute inset-x-0 bottom-0 p-3">
                  <span className="block font-display text-base font-semibold leading-tight text-cream">
                    {o.name}
                  </span>
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>
      {error && <p className="input-error">{error}</p>}

      {active && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/55">
            Anything specific in mind? <span className="font-normal text-ink/40">(optional)</span>
          </p>
          <div className="mt-3.5 flex flex-wrap gap-2">
            {active.subServices.map((s) => {
              const isSub = subService === s.slug;
              return (
                <button
                  key={s.slug}
                  type="button"
                  onClick={() => onSelectSub(isSub ? '' : s.slug)}
                  aria-pressed={isSub}
                  className={cn(
                    'rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300',
                    isSub
                      ? 'border-transparent text-base'
                      : 'border-ink/15 bg-white/50 text-ink/65 hover:border-ink/35 hover:text-ink',
                  )}
                  style={isSub ? { backgroundColor: active.accent } : undefined}
                >
                  {s.title}
                </button>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
}
