'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import type { Article } from '@/types/journal';

export default function ArticleCard({ article, index = 0 }: { article: Article; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-6% 0px' }}
      transition={{ delay: (index % 3) * 0.09, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/journal/${article.slug}`} className="group block">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-sand">
          <Image
            src={article.heroImage}
            alt={article.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
          />
          <span className="absolute left-4 top-4 rounded-full bg-base/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-ink backdrop-blur">
            {article.category}
          </span>
        </div>
        <div className="mt-5">
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/45">
            <span>{formatDate(article.date)}</span>
            <span className="h-1 w-1 rounded-full bg-gold" aria-hidden />
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3 w-3" /> {article.readTime}
            </span>
          </div>
          <h3 className="mt-2.5 font-display text-2xl font-medium leading-snug text-ink transition-colors group-hover:text-espresso">
            {article.title}
          </h3>
          <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-ink/60">{article.excerpt}</p>
          <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Read the story →
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
