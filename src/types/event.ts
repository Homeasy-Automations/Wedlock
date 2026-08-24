import type { CelebrationCategory } from './celebration';

export interface EventItem {
  slug: string;
  title: string;
  category: CelebrationCategory;
  categoryLabel: string;
  location: string;
  city: string;
  year: number;
  guests: number;
  summary: string;
  story: string[];
  heroImage: string;
  gallery: string[];
  tags: string[];
  featured?: boolean;
}
