export interface Service {
  slug: string;
  index: string;
  title: string;
  description: string;
  points: string[];
  image: string;
}

export const services: Service[] = [
  {
    slug: 'event-planning',
    index: '01',
    title: 'Planning & Curation',
    description:
      'The invisible architecture of a great celebration — budgets, timelines, venue shortlists and vendor curation, all visible to you through a shared planning portal.',
    points: [
      'Dedicated celebration director from day one',
      'Transparent budget tracking & vendor negotiations',
      'Venue scouting across India and 40+ international destinations',
    ],
    image: 'https://wedlock.co.in/wp-content/uploads/2024/05/Wedding-Planner-scaled.jpg',
  },
  {
    slug: 'decor-and-styling',
    index: '02',
    title: 'Décor & Styling',
    description:
      'Floral architecture, tablescapes, lighting ceilings and environments designed from a single creative brief — then prototyped before a single flower is cut.',
    points: [
      'Moodboards, 3D walkthroughs & material libraries',
      'In-house styling studio with fabrication partners',
      'Floral design, furniture, linen, candlelight & scent',
    ],
    image: 'https://wedlock.co.in/wp-content/uploads/2024/05/20230217_185854-1-scaled.jpg',
  },
  {
    slug: 'entertainment',
    index: '03',
    title: 'Entertainment',
    description:
      'Sufi ensembles to headline DJs, illusionists to dhol troupes — entertainment programmed to the emotional arc of your evening, not just the playlist.',
    points: [
      'Curated live acts, bands, DJs & specialty performers',
      'Choreography direction for family performances',
      'Show-calling and stage management on the night',
    ],
    image: 'https://wedlock.co.in/wp-content/uploads/2024/05/2-1.jpg',
  },
  {
    slug: 'hospitality',
    index: '04',
    title: 'Hospitality & Guest Experience',
    description:
      'Room blocks, airport assists, welcome hampers, RSVP desks and elderly care — the machinery that makes three hundred guests feel personally hosted.',
    points: [
      'Travel desk, rooming & logistics management',
      'Concierge gifting & welcome experiences',
      'On-ground hospitality teams at every venue',
    ],
    image: 'https://wedlock.co.in/wp-content/uploads/2024/05/3-1.jpg',
  },
  {
    slug: 'artist-and-celebrity',
    index: '05',
    title: 'Artist & Celebrity Management',
    description:
      'From Bollywood vocalists to celebrated anchors and international acts — we negotiate, contract, brief and manage talent so the performance is the only thing you notice.',
    points: [
      'Direct relationships with artist agencies & managements',
      'Contracts, riders, travel & rehearsal coordination',
      'Stage, sound & security per artist specification',
    ],
    image: 'https://wedlock.co.in/wp-content/uploads/2024/05/201A2415-Photography-scaled.jpg',
  },
  {
    slug: 'production',
    index: '06',
    title: 'Production & Technical',
    description:
      'Staging, light design, sound engineering, LED architecture, power, rain plans and run-of-show — the discipline that makes magic look effortless.',
    points: [
      'Technical drawings, rigging plots & power management',
      'Light & sound design with broadcast-grade crews',
      'Weather contingencies and on-day command centres',
    ],
    image: 'https://wedlock.co.in/wp-content/uploads/2024/05/Destination-Wedding-scaled.jpg',
  },
];
