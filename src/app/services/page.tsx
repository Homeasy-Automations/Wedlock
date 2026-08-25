import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { services } from '@/data/services';
import AnimatedText from '@/components/ui/AnimatedText';
import ImageReveal from '@/components/ui/ImageReveal';
import HeroVideo from '@/components/ui/HeroVideo';
import FinalCTA from '@/components/home/FinalCTA';

export const metadata: Metadata = buildMetadata({
  title: 'Services — Planning, Décor, Entertainment, Hospitality & Production',
  description:
    'Wedlock capabilities: planning & curation, décor & styling, entertainment, hospitality & guest experience, artist & celebrity management, and production & technical.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <section className="relative flex min-h-[58svh] items-end overflow-hidden bg-ink">
        <div className="absolute inset-0 scale-110">
          <HeroVideo src="/videos/stage-decor.mp4" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/35" />
        <div className="container-x relative z-10 max-w-4xl pb-14 pt-36 sm:pt-44">
          <p className="font-beau text-4xl leading-none text-gold sm:text-5xl">What we bring to your table</p>
          <AnimatedText
            text="One studio. Six disciplines. Zero hand-offs."
            as="h1"
            delay={0.2}
            className="mt-5 font-display text-4xl font-medium leading-[1.08] tracking-tight text-cream sm:text-6xl"
          />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/75 sm:text-lg">
            Every Wedlock celebration draws on the same six in-house capabilities. Engage them
            individually, or — as most families do — as one seamless whole.
          </p>
        </div>
      </section>

      <section className="container-x space-y-20 pb-24 pt-20 sm:space-y-28 sm:pb-32 sm:pt-24">
        {services.map((s, i) => (
          <article
            key={s.slug}
            id={s.slug}
            className={`grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
              i % 2 === 1 ? 'lg:[direction:rtl]' : ''
            }`}
          >
            <div className="[direction:ltr]">
              <ImageReveal
                src={s.image}
                alt={s.title}
                className="aspect-[4/3] rounded-[2rem]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="[direction:ltr]">
              <p className="font-sacramento text-5xl text-gold/80">{s.index}</p>
              <AnimatedText
                text={s.title}
                as="h2"
                className="mt-3 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl"
              />
              <p className="mt-5 text-base leading-relaxed text-ink/65 sm:text-lg">{s.description}</p>
              <ul className="mt-7 space-y-3.5">
                {s.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm text-ink/75 sm:text-base">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <FinalCTA />
    </>
  );
}
