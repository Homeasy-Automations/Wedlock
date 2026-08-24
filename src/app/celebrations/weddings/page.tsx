import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowUpRight } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { getCelebration } from '@/data/celebrations';
import { destinationWeddingsFeature } from '@/data/weddings';
import { getTestimonialsByCategory } from '@/data/testimonials';
import CelebrationHero from '@/components/celebrations/CelebrationHero';
import CelebrationGrid from '@/components/celebrations/CelebrationGrid';
import CelebrationProcess from '@/components/celebrations/CelebrationProcess';
import CelebrationCTA from '@/components/celebrations/CelebrationCTA';
import Testimonials from '@/components/home/Testimonials';
import AnimatedText from '@/components/ui/AnimatedText';
import ImageReveal from '@/components/ui/ImageReveal';
import MagneticButton from '@/components/ui/MagneticButton';

export const metadata: Metadata = buildMetadata({
  title: 'Weddings & Destination Weddings',
  description:
    'Full-service wedding planning, destination weddings, sangeet, mehendi, haldi, cocktail celebrations, receptions, décor, guest experience, hospitality and artist management.',
  path: '/celebrations/weddings',
});

export default function WeddingsPage() {
  const celebration = getCelebration('weddings');
  const feature = destinationWeddingsFeature;
  const items = getTestimonialsByCategory('weddings', 4);

  return (
    <div style={{ ['--cat' as string]: celebration.accent } as React.CSSProperties}>
      <CelebrationHero celebration={celebration} />

      {/* Destination Weddings feature block */}
      <section className="grain relative overflow-hidden bg-ink py-24 text-cream sm:py-32">
        <div className="container-x relative z-[2] grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow text-gold">{feature.kicker}</p>
            <AnimatedText
              text={feature.title}
              as="h2"
              className="mt-4 font-display text-4xl font-medium leading-[1.08] tracking-tight text-cream sm:text-5xl"
            />
            <p className="mt-5 font-beau text-2xl leading-snug text-gold/90">{feature.lede}</p>
            {feature.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 text-sm leading-relaxed text-cream/65 sm:text-base">
                {p}
              </p>
            ))}
            <ul className="mt-8 space-y-3">
              {feature.points.map((pt) => (
                <li key={pt} className="flex items-start gap-3 text-sm text-cream/80">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-ink">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {pt}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <MagneticButton href="/destinations" variant="gold" size="md">
                Explore destinations
              </MagneticButton>
              <MagneticButton
                href="/plan-your-celebration?occasion=weddings&service=destination-weddings"
                variant="outline-light"
                size="md"
              >
                Start planning
              </MagneticButton>
            </div>
          </div>

          <div className="relative">
            <ImageReveal
              src={feature.image}
              alt="Destination wedding at a lakeside palace produced by Wedlock"
              className="aspect-[4/5] rounded-[2rem]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute -bottom-6 -left-4 rounded-2xl border border-cream/15 bg-ink/90 p-5 backdrop-blur sm:-left-10">
              <p className="font-sacramento text-3xl text-gold">14 countries, 42 cities</p>
              <Link
                href="/events?category=weddings"
                className="group mt-1.5 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-cream/60 hover:text-gold"
              >
                See destination weddings we produced
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Full sub-service grid */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="font-allura text-4xl leading-none text-cat">Every function, every detail</p>
            <AnimatedText
              text="Twelve signature wedding services."
              as="h2"
              className="mt-4 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl"
            />
            <p className="mt-4 text-base leading-relaxed text-ink/60">
              Take one, take several, or hand us the whole wedding week — each service below can be
              planned as a standalone production or woven into a single master plan.
            </p>
          </div>
          <div className="mt-12">
            <CelebrationGrid
              services={celebration.subServices}
              category={celebration.id}
              accent={celebration.accent}
            />
          </div>
        </div>
      </section>

      <CelebrationProcess celebration={celebration} />
      <Testimonials items={items} eyebrowScript="Wedding families, in their words" />
      <CelebrationCTA celebration={celebration} />
    </div>
  );
}
