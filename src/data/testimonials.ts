import type { CelebrationCategory } from '@/types/celebration';
import { events } from './events';

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  detail: string;
  location: string;
  category: CelebrationCategory;
  eventSlug?: string;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 't-aisha',
    quote:
      'Three hundred guests, three days, four venues — and I never once saw a stressed face holding a clipboard. It felt like Udaipur itself was hosting us.',
    name: 'Aisha & Arjun Malhotra',
    detail: 'Destination wedding, 320 guests',
    location: 'Udaipur',
    category: 'weddings',
    eventSlug: 'aisha-arjun-udaipur',
    featured: true,
  },
  {
    id: 't-mehta',
    quote:
      'They rebuilt 1975 for our parents’ golden jubilee — down to the songs, the car, the jasmine. My mother cried at the entrance and laughed until midnight.',
    name: 'Rohan Mehta',
    detail: 'Golden jubilee, 260 guests',
    location: 'Mumbai',
    category: 'anniversaries',
    eventSlug: 'mehta-golden-jubilee-mumbai',
    featured: true,
  },
  {
    id: 't-priya',
    quote:
      'For my daughter’s first birthday they built an entire enchanted forest on our lawn. Two years later, guests still bring it up at dinner parties.',
    name: 'Priya & Saurav Sen',
    detail: "Kids' birthday, 140 guests",
    location: 'Kolkata',
    category: 'birthdays',
    eventSlug: 'zaras-enchanted-first-kolkata',
    featured: true,
  },
  {
    id: 't-ananya',
    quote:
      'A roka at noon and a ring ceremony under 4,000 tuberoses by night — same venue, two different worlds. We still don’t know how they flipped it in five hours.',
    name: 'Ananya Sharma',
    detail: 'Roka & ring ceremony, 180 guests',
    location: 'New Delhi',
    category: 'engagements',
    eventSlug: 'kabir-ananya-roka-delhi',
    featured: true,
  },
  {
    id: 't-kapoor',
    quote:
      'Sixty-eight Kapoors from five countries and not one logistical wobble in three days. The family newspaper they printed is now a framed heirloom.',
    name: 'Col. Vikram Kapoor (retd.)',
    detail: 'Family reunion, 68 guests',
    location: 'Kasauli',
    category: 'family-private',
    eventSlug: 'kapoor-reunion-kasauli',
    featured: true,
  },
  {
    id: 't-tuscany',
    quote:
      'Truffle risotto beside Kolkata biryani, a maharaj under cypress trees — a cross-cultural wedding in Chianti that our planner treated like a military operation and a poem.',
    name: 'Devika & Lorenzo',
    detail: 'Destination wedding, 60 guests',
    location: 'Tuscany, Italy',
    category: 'weddings',
    eventSlug: 'tuscan-i-do-florence',
  },
  {
    id: 't-sixty',
    quote:
      'They reunited my college band after 33 years and hid a five-piece drum kit in my own beach house. I found out when they started playing. Best shock of my life.',
    name: 'Rajesh Khanna',
    detail: '60th birthday, 90 guests',
    location: 'Alibaug',
    category: 'birthdays',
    eventSlug: 'sixty-and-glorious-alibaug',
  },
  {
    id: 't-goa-sangeet',
    quote:
      'Sand on a stage that never once felt like a compromise. The night we were told to expect rain, we got fireworks reflected in the sea instead.',
    name: 'Farah & Imran Sheikh',
    detail: 'Sangeet, 240 guests',
    location: 'Goa',
    category: 'weddings',
    eventSlug: 'sangeet-under-stars-goa',
  },
  {
    id: 't-silver',
    quote:
      'Our daughters conspired with Wedlock for months and none of us suspected a thing. Renewing our vows at midnight, twenty-five years on — there are no words.',
    name: 'Meera & Anand Krishnan',
    detail: 'Silver jubilee, 150 guests',
    location: 'Bengaluru',
    category: 'anniversaries',
    eventSlug: 'silver-soiree-bengaluru',
  },
  {
    id: 't-proposal',
    quote:
      'She said yes at a 300-year-old stepwell and ninety seconds later there was an entire engagement party on the roof. The deception was flawless.',
    name: 'Aditya Rathore',
    detail: 'Surprise proposal & engagement, 120 guests',
    location: 'Jaipur',
    category: 'engagements',
    eventSlug: 'proposal-to-party-jaipur',
  },
  {
    id: 't-nani',
    quote:
      'They found my mother’s childhood neighbour and her original cook from Shantiniketan. Dinner was her own recipes. We under-budgeted on tissues, exactly as they warned.',
    name: 'The Chatterjee Family',
    detail: '80th birthday gathering, 110 guests',
    location: 'Kolkata',
    category: 'family-private',
    eventSlug: 'nanis-eightieth-kolkata',
  },
  {
    id: 't-kerala-backwaters',
    quote:
      'A floating mandap, eleven houseboats and a monsoon shower that somehow made the photographs better. Our guests still talk about arriving by water.',
    name: 'Meenu & Arun Pillai',
    detail: 'Backwater wedding, 150 guests',
    location: 'Kumarakom',
    category: 'weddings',
    eventSlug: 'vows-by-backwaters-kerala',
  },
];

export function getTestimonialsByCategory(category: CelebrationCategory, count = 3) {
  const mine = testimonials.filter((t) => t.category === category);
  const featured = testimonials.filter((t) => t.featured && t.category !== category);
  return [...mine, ...featured].slice(0, count);
}

export function getTestimonialForEvent(slug: string) {
  return (
    testimonials.find((t) => t.eventSlug === slug) ??
    testimonials.find((t) => t.category === events.find((e) => e.slug === slug)?.category) ??
    null
  );
}

export const featuredTestimonials = testimonials.filter((t) => t.featured);
