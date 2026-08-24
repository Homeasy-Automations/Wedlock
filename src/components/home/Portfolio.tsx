import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ImageReveal from '@/components/ui/ImageReveal';
import { events } from '@/data/events';

const aspects = ['aspect-[3/4]', 'aspect-[4/3]', 'aspect-[3/4.4]', 'aspect-square', 'aspect-[3/4]', 'aspect-[4/4.6]', 'aspect-[4/3]', 'aspect-[3/4.2]'];

export default function Portfolio() {
  const featured = events.filter((e) => e.featured).concat(events.filter((e) => !e.featured)).slice(0, 8);

  return (
    <section className="py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrowScript="From the portfolio"
          scriptFont="font-alex"
          title="Recent celebrations, real families."
          description="Every event below is a true Wedlock production — the names slightly blessed, the memories entirely factual."
        />

        <div className="mt-14 columns-2 gap-5 md:columns-3 lg:columns-4 [column-fill:balance]">
          {featured.map((e, i) => (
            <div key={e.slug} className="mb-5 break-inside-avoid">
              <Link href={`/events/${e.slug}`} className="group block">
                <ImageReveal
                  src={e.heroImage}
                  alt={e.title}
                  className={`${aspects[i % aspects.length]} rounded-2xl`}
                  imgClassName="transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  delay={(i % 4) * 0.08}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="mt-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">
                    {e.categoryLabel} · {e.city.split(',')[0]}
                  </p>
                  <p className="mt-1 font-display text-lg font-medium leading-snug text-ink transition-colors group-hover:text-espresso">
                    {e.title}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/events"
            className="group inline-flex items-center gap-2 rounded-full border border-ink/25 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream"
          >
            View all events
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
