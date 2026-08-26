import type { CelebrationCategory } from './celebration';

export type WedlockTouchIcon = 'venue' | 'guest' | 'design' | 'entertainment' | 'production' | 'hospitality';

export interface EventHighlight {
  icon: WedlockTouchIcon;
  title: string;
  description: string;
}

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
  editorial: string;
  story: string[];
  heroImage: string;
  heroVideo?: string;
  gallery: string[];
  tags: string[];
  highlights: EventHighlight[];
  featured?: boolean;
}
