'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import AnimatedText from '@/components/ui/AnimatedText';
import ImageReveal from '@/components/ui/ImageReveal';
import { formatDate } from '@/lib/utils';
import type { Article } from '@/types/journal';

interface ArticleHeroProps {
  article: Article;
  variant?: 'featured' | 'detail';
}

export default function ArticleHero({ article, variant = 'featured' }: ArticleHeroProps) {
  if (variant === 'detail') {
    return (
      <header className="pt-32 sm:pt-40">
        <div className="container-x mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <p className="font-alex text-4xl text-gold">{article.category}</p>
            <AnimatedText
              text={article.title}
              as="h1"
              delay={0.15}
              stagger={0.05}
              className="mt-5 font-display text-4xl font-medium leading-[1.12] tracking-tight text-ink sm:text-5xl"
            />
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink/50">
              <span>{article.author}</span>
              <span className="h-1 w-1 rounded-full bg-gold" aria-hidden />
              <span>{formatDate(article.date)}</span>
              <span className="h-1 w-1 rounded-full bg-gold" aria-hidden />
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> {article.readTime}
              </span>
            </div>
          </motion.div>
        </div>
        <div className="container-x mt-12">
          <ImageReveal
            src={article.heroImage}
            alt={article.title}
            className="mx-auto aspect-[16/8] max-h-[560px] w-full max-w-6xl rounded-[2rem]"
            priority
            sizes="(max-width: 1280px) 100vw, 1152px"
          />
        </div>
      </header>
    );
  }

  // Featured hero for the journal index
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-ink">
      <div className="grid lg:grid-cols-2">
        <div className="relative z-10 flex flex-col justify-center gap-5 p-8 py-14 sm:p-14">
          <p className="font-allura text-4xl leading-none text-gold">Featured story</p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl font-medium leading-tight text-cream sm:text-4xl lg:text-[2.6rem]"
          >
            {article.title}
          </motion.h2>
          <p className="text-sm leading-relaxed text-cream/70 sm:text-base">{article.excerpt}</p>
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/50">
            <span className="rounded-full border border-gold/50 px-3 py-1 text-gold">{article.category}</span>
            <span>{formatDate(article.date)}</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> {article.readTime}
            </span>
          </div>
          <div className="mt-3">
            <a
              href={`/journal/${article.slug}`}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-bold tracking-wide text-ink transition-colors hover:bg-cream"
            >
              Read the feature
            </a>
          </div>
        </div>
        <div className="relative min-h-[20rem] lg:min-h-[28rem]">
          <Image
            src={article.heroImage}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/40 to-transparent lg:from-ink/60" aria-hidden />
        </div>
      </div>
    </section>
  );
}
