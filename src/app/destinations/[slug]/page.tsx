import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CalendarDays, Plane, Users, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { destinations, getDestinationBySlug, getRelatedDestinations } from '@/data/destinations';
import { siteConfig } from '@/lib/seo';
import DestinationHero from '@/components/destinations/DestinationHero';
import DestinationCard from '@/components/destinations/DestinationCard';
import ImageReveal from '@/components/ui/ImageReveal';
import EventGallery from '@/components/events/EventGallery';
import MagneticButton from '@/components/ui/MagneticButton';

interface DestinationDetailProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: DestinationDetailProps): Metadata {
  const d = getDestinationBySlug(params.slug);
  if (!d) return { title: 'Destination not found' };
  return {
    title: `${d.name} Destination Weddings — ${d.tagline}`,
    description: d.description,
    alternates: { canonical: `${siteConfig.url}/destinations/${d.slug}` },
  };
}

export default function DestinationDetailPage({ params }: DestinationDetailProps) {
  const destination = getDestinationBySlug(params.slug);
  if (!destination) notFound();

  const related = getRelatedDestinations(destination.slug, 3);

  return (
    <>
      <DestinationHero
        kicker={`${destination.region} · ${destination.country}`}
        title={`${destination.name}: ${destination.tagline}`}
        description={destination.description}
        image={destination.heroImage}
      />

      {/* Quick facts */}
      <section className="border-b border-ink/10 bg-cream">
        <div className="container-x grid gap-5 py-10 sm:grid-cols-3">
          {[
            { icon: CalendarDays, label: 'Best season', value: destination.bestSeason },
            { icon: Users, label: 'Ideal for', value: destination.idealGuests },
            { icon: Plane, label: 'Getting there', value: destination.access },
          ].map((f) => (
            <div key={f.label} className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink text-gold">
                <f.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/45">{f.label}</p>
                <p className="mt-1 text-sm font-semibold leading-snug text-ink">{f.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why this destination */}
      <section className="container-x py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="font-dancing text-4xl leading-none text-gold">Why {destination.name}?</p>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            What makes it extraordinary for celebrations
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {destination.why.map((w, i) => (
            <div
              key={w.title}
              className={`rounded-2xl border border-ink/10 bg-white/50 p-7 ${i % 3 === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <p className="font-sacramento text-4xl text-gold/80">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="mt-3 font-display text-2xl font-medium text-ink">{w.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60 sm:text-base">{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Venue highlights */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-alex text-4xl leading-none text-gold">Venue highlights</p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              Where we stage celebrations in {destination.name}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/60">
              Our recommendation shortlist is built from real Wedlock productions in{' '}
              {destination.name} — load-tested, light-tested and grandmother-approved.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-ink/10">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-ink text-cream/90">
                    <th className="px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em]">Venue style</th>
                    <th className="px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em]">Type</th>
                    <th className="px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em]">Capacity</th>
                  </tr>
                </thead>
                <tbody>
                  {destination.venues.map((v) => (
                    <tr key={v.name} className="border-t border-ink/10 bg-base/70">
                      <td className="px-5 py-4 font-semibold text-ink">{v.name}</td>
                      <td className="px-5 py-4 text-ink/60">{v.type}</td>
                      <td className="px-5 py-4 font-semibold text-gold">{v.capacity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <ImageReveal
            src={destination.gallery[0]}
            alt={`Celebration venue in ${destination.name}`}
            className="aspect-[4/5] rounded-[2rem]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Gallery */}
      <section className="container-x py-20 sm:py-28">
        <div className="mb-8 flex flex-col gap-2">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-ink/45">
            <Link href="/destinations" className="transition-colors hover:text-gold">Destinations</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gold">{destination.name}</span>
          </nav>
          <h2 className="font-display text-3xl font-medium text-ink">{destination.name}, in frames</h2>
        </div>
        <EventGallery
          images={[destination.heroImage, ...destination.gallery, destination.gallery[1]]}
          title={destination.name}
        />
      </section>

      {/* Enquiry CTA */}
      <section className="grain relative bg-ink py-20 text-center sm:py-24">
        <div className="container-x relative z-[2]">
          <p className="font-sacramento text-5xl text-gold">Pack the lehenga.</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-medium leading-tight text-cream sm:text-4xl">
            Start planning your {destination.name} celebration.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-cream/65">
            Our destination desk replies with venue availability, season guidance and a realistic
            budget shape — within 24 hours.
          </p>
          <div className="mt-8 flex justify-center">
            <MagneticButton
              href={`/plan-your-celebration?occasion=weddings&service=destination-weddings&city=${encodeURIComponent(destination.name)}`}
              variant="gold"
              size="lg"
            >
              Plan Your Celebration
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Related destinations */}
      <section className="container-x py-20 sm:py-24">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-display text-3xl font-medium text-ink">Also on our atlas</h2>
          <Link
            href="/destinations"
            className="hidden text-xs font-bold uppercase tracking-[0.2em] text-ink/50 transition-colors hover:text-gold sm:block"
          >
            All destinations →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {related.map((d, i) => (
            <DestinationCard key={d.slug} destination={d} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
