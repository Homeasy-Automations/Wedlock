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
  title: 'Birthday Celebrations',
  description:
    "Kids' birthdays, milestone birthdays, adult birthdays, surprise celebrations, themed parties, private celebrations, entertainment, décor & styling and guest experience — produced by Wedlock.",
  path: '/celebrations/birthdays',
});

export default function BirthdaysPage() {
  const celebration = getCelebration('birthdays');
  const items = getTestimonialsByCategory('birthdays', 4);

  return (
    <div style={{ ['--cat' as string]: celebration.accent } as React.CSSProperties}>
      <CelebrationHero celebration={celebration} />

      <section className="py-24 sm:py-32">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="font-allura text-4xl leading-none text-cat">One to one hundred candles</p>
            <AnimatedText
              text="Nine ways we make a year worth celebrating."
              as="h2"
              className="mt-4 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl"
            />
            <p className="mt-4 text-base leading-relaxed text-ink/60">
              From enchanted first birthdays to black-tie 75ths — pick a service below and we will
              shape it around the guest of honour, or hand us the whole evening from surprise to cake.
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
      <Testimonials items={items} eyebrowScript="Birthday stories from our hosts" />
      <CelebrationCTA celebration={celebration} />
    </div>
  );
}
