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
  title: 'Family & Private Celebrations',
  description:
    'Family gatherings, reunions, private parties, house parties, dinner celebrations, surprise celebrations, themed parties, intimate gatherings, milestones and special family occasions — by Wedlock.',
  path: '/celebrations/family-private',
});

export default function FamilyPrivatePage() {
  const celebration = getCelebration('family-private');
  const items = getTestimonialsByCategory('family-private', 4);

  return (
    <div style={{ ['--cat' as string]: celebration.accent } as React.CSSProperties}>
      <CelebrationHero celebration={celebration} />

      <section className="py-24 sm:py-32">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="font-allura text-4xl leading-none text-cat">The occasions that need no excuse</p>
            <AnimatedText
              text="Ten ways we gather families beautifully."
              as="h2"
              className="mt-4 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl"
            />
            <p className="mt-4 text-base leading-relaxed text-ink/60">
              Intimate does not mean improvised. Choose any service below and we will bring the same
              design rigour we give our largest weddings — scaled to your living room, lawn or lakeside.
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
      <Testimonials items={items} eyebrowScript="From our family books" />
      <CelebrationCTA celebration={celebration} />
    </div>
  );
}
