import { MapPin, Users, Palette, Music2, Sparkles, UtensilsCrossed } from 'lucide-react';
import type { EventHighlight, WedlockTouchIcon } from '@/types/event';

const ICONS: Record<WedlockTouchIcon, typeof MapPin> = {
  venue: MapPin,
  guest: Users,
  design: Palette,
  entertainment: Music2,
  production: Sparkles,
  hospitality: UtensilsCrossed,
};

export default function WedlockTouch({ highlights }: { highlights: EventHighlight[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-3">
      {highlights.map((h) => {
        const Icon = ICONS[h.icon];
        return (
          <div key={h.title} className="rounded-2xl border border-ink/10 bg-cream p-6">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-base text-gold">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <p className="mt-4 font-display text-lg font-medium text-ink">{h.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">{h.description}</p>
          </div>
        );
      })}
    </div>
  );
}
