import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { destinations } from '@/data/destinations';
import DestinationHero from '@/components/destinations/DestinationHero';
import DestinationGrid from '@/components/destinations/DestinationGrid';
import FinalCTA from '@/components/home/FinalCTA';

export const metadata: Metadata = buildMetadata({
  title: 'Destination Weddings — Udaipur, Jaipur, Goa, Kerala, Bali, Phuket, Tuscany, Dubai',
  description:
    'Wedlock produces destination weddings across 40+ cities and 14 countries — palaces, backwaters, beaches, vineyards and skylines, with full guest travel and hospitality management.',
  path: '/destinations',
});

export default function DestinationsPage() {
  return (
    <>
      <DestinationHero
        kicker="Destination Weddings"
        title="Somewhere unforgettable is already waiting."
        description="Eight of our most-produced destinations below — and a destination desk that has scouted forty more. Where should your story unfold?"
        image="https://wedlock.co.in/wp-content/uploads/2024/04/A50A1563-819x1024.jpg"
        ctaLabel="Plan a destination wedding"
        ctaHref="/plan-your-celebration?occasion=weddings&service=destination-weddings"
      />

      <section className="container-x py-20 sm:py-28">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-allura text-4xl leading-none text-gold">The atlas</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              Where we have taken celebrations
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink/55">
            Every destination below includes venue intelligence, vendor networks and guest-travel
            playbooks built from real productions.
          </p>
        </div>
        <DestinationGrid destinations={destinations} />
      </section>

      <FinalCTA />
    </>
  );
}
