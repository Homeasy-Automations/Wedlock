import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import BrandIntro from '@/components/home/BrandIntro';
import Stats from '@/components/home/Stats';
import OccasionSection from '@/components/home/OccasionSection';
import Capabilities from '@/components/home/Capabilities';
import Portfolio from '@/components/home/Portfolio';
import DestinationSection from '@/components/home/DestinationSection';
import ProcessSection from '@/components/home/ProcessSection';
import WhyWedlock from '@/components/home/WhyWedlock';
import Testimonials from '@/components/home/Testimonials';
import JournalPreview from '@/components/home/JournalPreview';
import FinalCTA from '@/components/home/FinalCTA';
import { buildMetadata } from '@/lib/seo';
import { featuredTestimonials } from '@/data/testimonials';

export const metadata: Metadata = buildMetadata({
  title: 'Wedlock — Celebrations. Thoughtfully produced.',
  description:
    'Premium celebration planning & production: weddings, destination weddings, birthdays, anniversaries, engagements and family celebrations across India and 14 countries.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <Stats />
      <OccasionSection />
      <Capabilities />
      <Portfolio />
      <DestinationSection />
      <ProcessSection />
      <WhyWedlock />
      <Testimonials items={featuredTestimonials} dark />
      <JournalPreview />
      <FinalCTA />
    </>
  );
}
