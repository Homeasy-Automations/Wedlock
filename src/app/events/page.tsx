import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { events } from '@/data/events';
import { isValidOccasion } from '@/lib/validations';
import AnimatedText from '@/components/ui/AnimatedText';
import EventFilter from '@/components/events/EventFilter';
import EventGrid from '@/components/events/EventGrid';
import FinalCTA from '@/components/home/FinalCTA';

export const metadata: Metadata = buildMetadata({
  title: 'Events — Real Wedlock Productions',
  description:
    'A portfolio of real celebrations produced by Wedlock — palace weddings, milestone birthdays, golden jubilees, surprise engagements and family reunions across India and abroad.',
  path: '/events',
});

interface EventsPageProps {
  searchParams?: { category?: string };
}

export default function EventsPage({ searchParams }: EventsPageProps) {
  const category = searchParams?.category ?? 'all';
  const active = isValidOccasion(category) ? category : 'all';
  const filtered = active === 'all' ? events : events.filter((e) => e.category === active);

  const counts = events.reduce<Record<string, number>>((acc, e) => {
    acc[e.category] = (acc[e.category] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <>
      <section className="pb-10 pt-36 sm:pt-44">
        <div className="container-x">
          <p className="font-dancing text-4xl leading-none text-gold sm:text-5xl">Proof, not promises</p>
          <AnimatedText
            text="Celebrations we have actually produced."
            as="h1"
            delay={0.2}
            className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-6xl"
          />
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/65 sm:text-lg">
            Every entry below is a true Wedlock production — real families, real venues, real weather.
            Filter by occasion and step inside the stories.
          </p>

          <div className="mt-10">
            <EventFilter active={active} counts={counts} />
          </div>
        </div>
      </section>

      <section className="container-x pb-24 sm:pb-32">
        <EventGrid events={filtered} />
        {filtered.length === 0 && (
          <p className="py-16 text-center text-sm text-ink/50">
            No events in this category yet — check back soon.
          </p>
        )}
      </section>

      <FinalCTA />
    </>
  );
}
