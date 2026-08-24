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
  title: 'Anniversary Celebrations',
  description:
    'Anniversary celebrations, silver & golden jubilees, milestone anniversaries, vow renewals, surprise celebrations, romantic dinners, décor & styling and entertainment — by Wedlock.',
  path: '/celebrations/anniversaries',
});

export default function AnniversariesPage() {
  const celebration = getCelebration('anniversaries');
  const items = getTestimonialsByCategory('anniversaries', 4);

  return (
    <div style={{ ['--cat' as string]: celebration.accent } as React.CSSProperties}>
      <CelebrationHero celebration={celebration} />

      <section className="py-24 sm:py-32">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="font-allura text-4xl leading-none text-cat">Silver, gold & every year between</p>
            <AnimatedText
              text="Nine ways to honour a love that lasted."
              as="h2"
              className="mt-4 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl"
            />
            <p className="mt-4 text-base leading-relaxed text-ink/60">
              Whether you are the couple, the children or the grandchildren — start with any service
              below and we will build the evening around the story of the years.
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
      <Testimonials items={items} eyebrowScript="Anniversaries, remembered" />
      <CelebrationCTA celebration={celebration} />
    </div>
  );
}
