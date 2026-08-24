import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { articles, getArticleBySlug, getRelatedArticles } from '@/data/journal';
import { siteConfig } from '@/lib/seo';
import ArticleHero from '@/components/journal/ArticleHero';
import ArticleCard from '@/components/journal/ArticleCard';
import MagneticButton from '@/components/ui/MagneticButton';

interface JournalDetailProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: JournalDetailProps): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return { title: 'Article not found' };
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `${siteConfig.url}/journal/${article.slug}` },
  };
}

export default function JournalDetailPage({ params }: JournalDetailProps) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const related = getRelatedArticles(article.slug, 3);

  return (
    <>
      <ArticleHero article={article} variant="detail" />

      {/* Body */}
      <div className="container-x py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-ink/45">
            <Link href="/journal" className="transition-colors hover:text-gold">
              Journal
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gold">{article.category}</span>
          </nav>

          <p className="mb-10 font-display text-2xl font-medium leading-relaxed text-ink">
            {article.excerpt}
          </p>

          <div className="article-body">
            {article.body.map((section, i) => (
              <section key={i}>
                {section.heading && <h3>{section.heading}</h3>}
                {section.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
                {section.quote && (
                  <blockquote className="my-12 border-l-2 border-gold pl-8">
                    <p className="font-beau text-3xl leading-snug text-ink">{section.quote}</p>
                  </blockquote>
                )}
              </section>
            ))}
          </div>

          {/* Author footer */}
          <div className="mt-14 flex items-center justify-between rounded-2xl border border-ink/10 bg-cream px-7 py-6">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/45">Written by</p>
              <p className="mt-1 font-display text-xl font-medium text-ink">{article.author}</p>
            </div>
            <p className="font-sacramento text-4xl text-ink/50">Wedlock</p>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-ink/10 py-20 sm:py-24">
        <div className="container-x">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="font-dancing text-3xl text-gold">Further reading</p>
              <h2 className="mt-2 font-display text-3xl font-medium text-ink">More from the journal</h2>
            </div>
            <Link
              href="/journal"
              className="hidden text-xs font-bold uppercase tracking-[0.2em] text-ink/50 transition-colors hover:text-gold sm:block"
            >
              All stories →
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {related.map((a, i) => (
              <ArticleCard key={a.slug} article={a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="grain relative bg-ink py-20 text-center">
        <div className="container-x relative z-[2]">
          <p className="font-sacramento text-5xl text-gold">Inspired?</p>
          <h2 className="mx-auto mt-4 max-w-xl font-display text-3xl font-medium text-cream sm:text-4xl">
            Let’s write your family’s chapter next.
          </h2>
          <div className="mt-8 flex justify-center">
            <MagneticButton href="/plan-your-celebration" variant="gold" size="lg">
              Plan Your Celebration
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
