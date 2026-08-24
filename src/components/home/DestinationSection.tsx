import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';
import ImageReveal from '@/components/ui/ImageReveal';
import AnimatedText from '@/components/ui/AnimatedText';
import MagneticButton from '@/components/ui/MagneticButton';
import { destinations } from '@/data/destinations';

export default function DestinationSection() {
  const featured = destinations.filter((d) => d.featured);

  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 grid grid-cols-2 gap-5 lg:order-1">
          <ImageReveal
            src="https://wedlock.co.in/wp-content/uploads/2024/04/20230217_213554-1-682x1024.jpg"
            alt="Palace destination wedding venue in Udaipur"
            className="aspect-[3/4] rounded-2xl"
            sizes="(max-width: 1024px) 50vw, 25vw"
          />
          <ImageReveal
            src="https://wedlock.co.in/wp-content/uploads/2024/04/A50A1563-819x1024.jpg"
            alt="Vineyard villa destination wedding in Tuscany"
            className="mt-10 aspect-[3/4] rounded-2xl"
            delay={0.15}
            sizes="(max-width: 1024px) 50vw, 25vw"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="font-dancing text-4xl leading-none text-gold">Destination Weddings</p>
          <AnimatedText
            text="Your celebration, staged somewhere unforgettable."
            as="h2"
            className="mt-5 font-display text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl"
          />
          <p className="mt-6 text-base leading-relaxed text-ink/65 sm:text-lg">
            Our signature craft. A dedicated destination desk scouts venues, manages guest travel,
            builds local vendor ecosystems and rehearses every transition — in 40+ cities and 14
            countries so far. All your family has to do is arrive and be applauded.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {featured.map((d) => (
              <Link
                key={d.slug}
                href={`/destinations/${d.slug}`}
                className="group inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-base px-4 py-2 text-xs font-semibold text-ink/75 transition-colors hover:border-gold hover:bg-gold hover:text-ink"
              >
                <MapPin className="h-3.5 w-3.5" />
                {d.name}
              </Link>
            ))}
            <Link
              href="/destinations"
              className="group inline-flex items-center gap-1 rounded-full px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-ink/60 transition-colors hover:text-gold"
            >
              All destinations
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-10">
            <MagneticButton href="/plan-your-celebration?occasion=weddings&service=destination-weddings" variant="ink" size="md">
              Plan a destination wedding
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
