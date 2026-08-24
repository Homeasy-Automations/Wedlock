import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CalendarDays, ChevronRight, MapPin, Tag, Users } from 'lucide-react';
import { events, getEventBySlug, getRelatedEvents } from '@/data/events';
import { formatGuests } from '@/lib/utils';
import { siteConfig } from '@/lib/seo';
import AnimatedText from '@/components/ui/AnimatedText';
import ImageReveal from '@/components/ui/ImageReveal';
import MagneticButton from '@/components/ui/MagneticButton';
import EventGallery from '@/components/events/EventGallery';
import EventCard from '@/components/events/EventCard';

interface EventDetailProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: EventDetailProps): Metadata {
  const event = getEventBySlug(params.slug);
  if (!event) return { title: 'Event not found' };
  return {
    title: `${event.title} — ${event.categoryLabel} in ${event.city.split(',')[0]}`,
    description: event.summary,
    alternates: { canonical: `${siteConfig.url}/events/${event.slug}` },
  };
}

export default function EventDetailPage({ params }: EventDetailProps) {
  const event = getEventBySlug(params.slug);
  if (!event) notFound();

  const related = getRelatedEvents(event.slug, 3);
  const galleryImages = [event.heroImage, ...event.gallery];

  return (
    <>
      {/* Case-study hero */}
      <section className="pb-0 pt-32 sm:pt-40">
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-ink/45">
            <Link href="/events" className="transition-colors hover:text-gold">
              Events
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gold">{event.categoryLabel}</span>
          </nav>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
            <div>
              <AnimatedText
                text={event.title}
                as="h1"
                className="font-display text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-6xl"
              />
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">{event.summary}</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-cream p-4">
                <MapPin className="h-4 w-4 text-gold" />
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-ink/45">Location</p>
                <p className="mt-1 text-sm font-semibold text-ink">{event.city}</p>
              </div>
              <div className="rounded-2xl bg-cream p-4">
                <Users className="h-4 w-4 text-gold" />
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-ink/45">Guests</p>
                <p className="mt-1 text-sm font-semibold text-ink">{formatGuests(event.guests)}</p>
              </div>
              <div className="rounded-2xl bg-cream p-4">
                <CalendarDays className="h-4 w-4 text-gold" />
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-ink/45">Year</p>
                <p className="mt-1 text-sm font-semibold text-ink">{event.year}</p>
              </div>
              <div className="rounded-2xl bg-cream p-4">
                <Tag className="h-4 w-4 text-gold" />
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-ink/45">Style</p>
                <p className="mt-1 text-sm font-semibold text-ink">{event.tags[0]}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-x mt-10">
          <ImageReveal
            src={event.heroImage}
            alt={event.title}
            className="aspect-[16/8] max-h-[620px] w-full rounded-[2rem]"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* Story */}
      <section className="py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="font-alex text-4xl text-gold">The story</p>
            <p className="mt-4 font-display text-2xl font-medium leading-snug text-ink">
              {event.location}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {event.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            {event.story.map((p, i) => (
              <p key={i} className="mb-5 text-lg leading-relaxed text-ink/75 first:font-display first:text-2xl first:font-medium first:leading-relaxed first:text-ink">
                {p}
              </p>
            ))}
            <p className="mt-8 font-sacramento text-4xl text-ink/60">— produced by Wedlock</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="container-x pb-20 sm:pb-28">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-3xl font-medium text-ink">Inside the celebration</h2>
          <p className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-ink/40 sm:block">
            {galleryImages.length} frames
          </p>
        </div>
        <EventGallery images={galleryImages} title={event.title} />
      </section>

      {/* Related */}
      <section className="border-t border-ink/10 py-20 sm:py-28">
        <div className="container-x">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="font-dancing text-3xl text-gold">Keep wandering</p>
              <h2 className="mt-2 font-display text-3xl font-medium text-ink sm:text-4xl">
                More celebrations like this
              </h2>
            </div>
            <Link
              href="/events"
              className="hidden text-xs font-bold uppercase tracking-[0.2em] text-ink/50 transition-colors hover:text-gold sm:block"
            >
              All events →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((e, i) => (
              <EventCard key={e.slug} event={e} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="grain relative bg-ink py-20 text-center sm:py-28">
        <div className="container-x relative z-[2]">
          <p className="font-sacramento text-5xl text-gold">Your turn.</p>
          <h2 className="mx-auto mt-4 max-w-xl font-display text-3xl font-medium leading-tight text-cream sm:text-4xl">
            Imagine your family’s name on a story like this.
          </h2>
          <div className="mt-8 flex justify-center">
            <MagneticButton
              href={`/plan-your-celebration?occasion=${event.category}&city=${encodeURIComponent(event.city.split(',')[0])}`}
              variant="gold"
              size="lg"
            >
              Plan Your Celebration
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
