import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { articles } from '@/data/journal';
import AnimatedText from '@/components/ui/AnimatedText';
import ArticleHero from '@/components/journal/ArticleHero';
import ArticleGrid from '@/components/journal/ArticleGrid';
import FinalCTA from '@/components/home/FinalCTA';

export const metadata: Metadata = buildMetadata({
  title: 'Journal — Stories, Guides & Trends from the Atelier',
  description:
    'Real wedding features, destination planning guides, décor trends and behind-the-scenes notes from the Wedlock celebration desk.',
  path: '/journal',
});

export default function JournalPage() {
  const sorted = [...articles].sort((a, b) => (a.date < b.date ? 1 : -1));
  const featured = sorted.find((a) => a.featured) ?? sorted[0];
  const rest = sorted.filter((a) => a.slug !== featured.slug);

  return (
    <>
      <section className="pb-14 pt-36 sm:pt-44">
        <div className="container-x">
          <p className="font-sacramento text-5xl leading-none text-gold">The Wedlock Journal</p>
          <AnimatedText
            text="Notes from the celebration desk."
            as="h1"
            delay={0.2}
            className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-6xl"
          />
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/65 sm:text-lg">
            Real celebrations we produced, planning blueprints we actually use, and the trends our
            design studio is betting on this season.
          </p>

          <div className="mt-12">
            <ArticleHero article={featured} variant="featured" />
          </div>
        </div>
      </section>

      <section className="container-x pb-24 sm:pb-32">
        <ArticleGrid articles={rest} />
      </section>

      <FinalCTA />
    </>
  );
}
