import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { getCelebration } from '@/data/celebrations';
import { getTestimonialsByCategory } from '@/data/testimonials';
import CelebrationHero from '@/components/celebrations/CelebrationHero';
import CelebrationGrid from '@/components/celebrations/CelebrationGrid';
import CelebrationProcess from '@/components/celebrations/CelebrationProcess';
import CelebrationCTA from '@/components/celebrations/CelebrationCTA';
import Testimonials from '@/components/home/Testimonials';
import AnimatedText from '@/components/ui/AnimatedText';

export const metadata: Metadata = buildMetadata({
  title: 'Engagement Celebrations',
  description:
    'Engagement ceremonies, roka, ring ceremonies, pre-wedding celebrations, cocktail evenings, sangeet, mehendi, haldi, engagement parties, décor & production and entertainment — by Wedlock.',
  path: '/celebrations/engagements',
});

export default function EngagementsPage() {
  const celebration = getCelebration('engagements');
  const items = getTestimonialsByCategory('engagements', 4);

  return (
    <div style={{ ['--cat' as string]: celebration.accent } as React.CSSProperties}>
      <CelebrationHero celebration={celebration} />

      <section className="py-24 sm:py-32">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="font-allura text-4xl leading-none text-cat">The opening act of forever</p>
            <AnimatedText
              text="Eleven services for the season of promises."
              as="h2"
              className="mt-4 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl"
            />
            <p className="mt-4 text-base leading-relaxed text-ink/60">
              From a quiet roka at home to a full pre-wedding calendar — each service can stand
              alone or roll forward into your wedding plan with the same team.
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
      <Testimonials items={items} eyebrowScript="Promise-season memories" />
      <CelebrationCTA celebration={celebration} />
    </div>
  );
}
