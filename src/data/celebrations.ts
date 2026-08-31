import type { Celebration, CelebrationCategory } from '@/types/celebration';
import { weddingServices } from './weddings';
import { birthdayServices } from './birthdays';
import { anniversaryServices } from './anniversaries';
import { engagementServices } from './engagements';
import { familyPrivateServices } from './familyPrivate';

export const celebrations: Celebration[] = [
  {
    id: 'weddings',
    index: '01',
    name: 'Weddings',
    shortName: 'Weddings',
    tagline: 'The biggest yes of your life, produced flawlessly.',
    description:
      'From the roka to the reception, we plan, design, produce and execute weddings that feel inevitable — every ritual honoured, every guest enchanted. Destination weddings are our signature.',
    heroKicker: 'Two families. One flawless production.',
    heroImage: '/images/weddings/wedding1.webp',
    heroVideo: '/videos/stage-decor4.mp4',
    accent: '#C9A24B',
    accentInk: '#6B5420',
    href: '/celebrations/weddings',
    subServices: weddingServices,
    processNotes: {
      plan: 'Budgets, guest-mapping, venue shortlists and a master timeline your whole family can see.',
      design: 'Moodboards, 3D walkthroughs and décor languages for sangeet, mehendi, haldi, wedding and reception.',
      produce: 'Vendors booked, artists confirmed, hospitality desks staffed — everything contracted and rehearsed.',
      execute: 'A command centre on-site, cue sheets for every ritual and a team that has done this 650 times.',
    },
  },
  {
    id: 'birthdays',
    index: '02',
    name: 'Birthdays',
    shortName: 'Birthdays',
    tagline: 'Another year, another reason to gather.',
    description:
      'From a one-year-old’s enchanted forest to a 75th black-tie dinner — we produce birthdays with the same rigour as our biggest weddings.',
    heroKicker: 'Make a wish. We’ll handle the rest.',
    heroImage: '/images/birthdays/birthday1.png',
    heroVideo: '/videos/stage-decor1.mp4',
    accent: '#E2725B',
    accentInk: '#7A3121',
    href: '/celebrations/birthdays',
    subServices: birthdayServices,
    processNotes: {
      plan: 'Theme, guest list and budget aligned in the first meeting — surprises included, secrets kept.',
      design: 'Concept art for cake tables, entry moments and photo corners that will own your feed.',
      produce: 'Entertainers booked, menus tasted, custom builds fabricated in our partner workshops.',
      execute: 'We run the floor while you run the party — reveal, cake, candles, confetti, perfect.',
    },
  },
  {
    id: 'anniversaries',
    index: '03',
    name: 'Anniversaries',
    shortName: 'Anniversaries',
    tagline: 'Honouring the years between then and now.',
    description:
      'Silver jubilees, golden jubilees, vow renewals and quiet romantic dinners — celebrations of staying power, designed with tenderness.',
    heroKicker: 'Every year, a chapter worth staging.',
    heroImage: '/images/anniversaries/anniversary1.png',
    heroVideo: '/videos/wedding4.mp4',
    accent: '#D98A90',
    accentInk: '#8A4B52',
    href: '/celebrations/anniversaries',
    subServices: anniversaryServices,
    processNotes: {
      plan: 'We interview the couple (or conspire with the family) to find the story the evening should tell.',
      design: 'Photo journeys, era-specific music and a palette drawn from a lifetime together.',
      produce: 'Venues, tributes, performances and family speeches rehearsed in secret when needed.',
      execute: 'A seamless evening where the couple simply relives it all — we handle absolutely everything else.',
    },
  },
  {
    id: 'engagements',
    index: '04',
    name: 'Engagements',
    shortName: 'Engagements',
    tagline: 'The first celebration of forever.',
    description:
      'Rokas, ring ceremonies, cocktail evenings and every pre-wedding function — the opening act of your wedding story, produced to set the tone.',
    heroKicker: 'Before the vows, the promise.',
    heroImage: '/images/engagements/engagement1.webp',
    heroVideo: '/videos/stage-decor3.mp4',
    accent: '#8E3B47',
    accentInk: '#5C242D',
    href: '/celebrations/engagements',
    subServices: engagementServices,
    processNotes: {
      plan: 'Both families aligned on rituals, scale and style — one clear plan everyone approves.',
      design: 'Ring moments, stages and lounges designed to photograph beautifully from every seat.',
      produce: 'Catering, couture-friendly logistics and entertainment locked weeks before the day.',
      execute: 'Cue-perfect ceremonies — the ring, the applause, the first dance — without a visible wire.',
    },
  },
  {
    id: 'family-private',
    index: '05',
    name: 'Family & Private',
    shortName: 'Family & Private',
    tagline: 'The occasions that don’t need an excuse.',
    description:
      'Reunions, house parties, dinner celebrations and life’s quiet milestones — intimate productions for the people who matter most.',
    heroKicker: 'Small rooms. Enormous memories.',
    heroImage: '/images/family-private/family1.png',
    heroVideo: '/videos/stage-decor5.mp4',
    accent: '#7C8B6F',
    accentInk: '#46523D',
    href: '/celebrations/family-private',
    subServices: familyPrivateServices,
    processNotes: {
      plan: 'A short call, a few questions — we shape scale, venue and flow around your family’s rhythm.',
      design: 'Tablescapes, menus and mood tailored to the occasion, never over-done, never under-done.',
      produce: 'Chefs, grill carts, florals and playlists quietly arranged behind the scenes.',
      execute: 'You host; we disappear into the walls — and reappear only to clear up at the end.',
    },
  },
];

export function getCelebration(id: CelebrationCategory) {
  return celebrations.find((c) => c.id === id)!;
}

export function getCelebrationBySlug(slug: string) {
  return celebrations.find((c) => c.id === slug);
}

export const occasionOptions = celebrations.map((c) => ({
  id: c.id,
  name: c.name,
  tagline: c.tagline,
  accent: c.accent,
  image: c.heroImage,
  subServices: c.subServices.map((s) => ({ slug: s.slug, title: s.title })),
}));
