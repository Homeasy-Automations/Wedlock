'use client';

import { useRouter, usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { celebrations } from '@/data/celebrations';
import { AnalyticsEvents, trackEvent } from '@/lib/analytics';

const options = [
  { value: 'all', label: 'All Events' },
  ...celebrations.map((c) => ({ value: c.id, label: c.name })),
];

export default function EventFilter({ active, counts }: { active: string; counts: Record<string, number> }) {
  const router = useRouter();
  const pathname = usePathname();

  const select = (value: string) => {
    if (value === active) return;
    trackEvent(AnalyticsEvents.CategoryView, { category: value, context: 'events_filter' });
    router.replace(value === 'all' ? pathname : `${pathname}?category=${value}`, { scroll: false });
  };

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {options.map((o) => {
        const isActive = active === o.value;
        const count = o.value === 'all' ? undefined : counts[o.value] ?? 0;
        return (
          <button
            key={o.value}
            onClick={() => select(o.value)}
            aria-pressed={isActive}
            className={cn(
              'rounded-full border px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300',
              isActive
                ? 'border-ink bg-ink text-cream'
                : 'border-ink/15 bg-transparent text-ink/60 hover:border-ink/40 hover:text-ink',
            )}
          >
            {o.label}
            {count !== undefined && (
              <span className={cn('ml-2', isActive ? 'text-gold' : 'text-ink/35')}>{count}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
