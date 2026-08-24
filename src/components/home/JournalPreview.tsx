import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ArticleCard from '@/components/journal/ArticleCard';
import { articles } from '@/data/journal';

export default function JournalPreview() {
  const latest = [...articles]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3);

  return (
    <section className="border-t border-ink/10 py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrowScript="Notes from the atelier"
            scriptFont="font-dancing"
            title="Stories, guides & trends."
            description="Real celebrations we produced, and everything we have learned making them."
          />
          <Link
            href="/journal"
            className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-ink/60 transition-colors hover:text-gold"
          >
            Read the journal
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {latest.map((a, i) => (
            <ArticleCard key={a.slug} article={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
