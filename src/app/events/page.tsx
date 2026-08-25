import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { events } from '@/data/events';
import { isValidOccasion } from '@/lib/validations';
import AnimatedText from '@/components/ui/AnimatedText';
import HeroVideo from '@/components/ui/HeroVideo';
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
      <section className="relative flex min-h-[58svh] items-end overflow-hidden bg-ink">
        <div className="absolute inset-0 scale-110">
          <HeroVideo src="/videos/stage-decor2.mp4" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/35" />
        <div className="container-x relative z-10 pb-14 pt-36 sm:pt-44">
          <p className="font-dancing text-4xl leading-none text-gold sm:text-5xl">Proof, not promises</p>
          <AnimatedText
            text="Celebrations we have actually produced."
            as="h1"
            delay={0.2}
            className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.08] tracking-tight text-cream sm:text-6xl"
          />
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/75 sm:text-lg">
            Every entry below is a true Wedlock production — real families, real venues, real weather.
            Filter by occasion and step inside the stories.
          </p>
        </div>
      </section>

      <section className="container-x pb-10 pt-14 sm:pt-16">
        <EventFilter active={active} counts={counts} />
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
