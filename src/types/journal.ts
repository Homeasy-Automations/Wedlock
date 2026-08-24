export type JournalCategory = 'Real Wedding' | 'Planning Guide' | 'Trends' | 'Behind the Scenes';

export interface ArticleSection {
  heading?: string;
  paragraphs: string[];
  quote?: string;
}

export interface Article {
  slug: string;
  title: string;
  category: JournalCategory;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  heroImage: string;
  body: ArticleSection[];
  featured?: boolean;
}
