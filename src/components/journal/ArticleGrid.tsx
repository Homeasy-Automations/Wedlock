import ArticleCard from './ArticleCard';
import type { Article } from '@/types/journal';

export default function ArticleGrid({ articles }: { articles: Article[] }) {
  return (
    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((a, i) => (
        <ArticleCard key={a.slug} article={a} index={i} />
      ))}
    </div>
  );
}
