export type CelebrationCategory =
  | 'weddings'
  | 'birthdays'
  | 'anniversaries'
  | 'engagements'
  | 'family-private';

export interface SubService {
  slug: string;
  title: string;
  description: string;
  image: string;
}

export interface CelebrationProcessStepNotes {
  plan: string;
  design: string;
  produce: string;
  execute: string;
}

export interface Celebration {
  id: CelebrationCategory;
  index: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  heroKicker: string;
  heroImage: string;
  accent: string;
  accentInk: string;
  href: string;
  subServices: SubService[];
  processNotes: CelebrationProcessStepNotes;
}
