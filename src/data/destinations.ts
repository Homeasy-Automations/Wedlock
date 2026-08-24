import type { Destination } from '@/types/destination';

export const destinations: Destination[] = [
  {
    slug: 'udaipur',
    name: 'Udaipur',
    country: 'India',
    region: 'Rajasthan',
    tagline: 'The city of lakes, built for weddings.',
    description:
      'Marble palaces on still water, courtyards that seat eight hundred and sunsets that arrive on cue. Udaipur remains India’s most requested wedding destination — and our home turf for destination productions.',
    bestSeason: 'October – March',
    idealGuests: '150 – 800 guests',
    access: 'Direct flights from Delhi, Mumbai, Bengaluru; 45 min from airport to lake district',
    heroImage: 'https://wedlock.co.in/wp-content/uploads/2024/04/20230217_213554-1-682x1024.jpg',
    gallery: [
      'https://wedlock.co.in/wp-content/uploads/2024/04/image0-1024x682.jpeg',
      'https://wedlock.co.in/wp-content/uploads/2024/04/A50A1563-819x1024.jpg',
      'https://wedlock.co.in/wp-content/uploads/2024/04/image2-682x1024.jpeg',
    ],
    why: [
      {
        title: 'Palace venues at every scale',
        text: 'From intimate haveli courtyards for 80 to palace lawns for 1,500, Udaipur offers heritage architecture that needs almost no décor to feel cinematic.',
      },
      {
        title: 'A mature vendor ecosystem',
        text: 'Decades of destination weddings mean trusted local florists, fabricators, sound engineers and priests — all within Wedlock’s vetted network.',
      },
      {
        title: 'Multi-day built into the geography',
        text: 'Lakeside pheras, fort-view sangeets, boat arrivals — the city’s layout turns a wedding week into a moving itinerary without long transfers.',
      },
      {
        title: 'Golden light, eleven months a year',
        text: 'Predictable winters and cobalt skies make outdoor ceremonies dependable — with contingency venues always a corridor away.',
      },
    ],
    venues: [
      { name: 'Lake-facing palace lawns', type: 'Palace', capacity: '400 – 1,500' },
      { name: 'Heritage haveli courtyards', type: 'Heritage residence', capacity: '80 – 300' },
      { name: 'Island & peninsula venues', type: 'Private island', capacity: '150 – 600' },
    ],
    featured: true,
  },
  {
    slug: 'jaipur',
    name: 'Jaipur',
    country: 'India',
    region: 'Rajasthan',
    tagline: 'Pink sandstone, elephant arches, royal scale.',
    description:
      'Jaipur does grandeur without effort — stepwells, forts and city palaces minutes from a major airport. Ideal for large-format weddings and engagement celebrations with a royal register.',
    bestSeason: 'October – March',
    idealGuests: '200 – 1,200 guests',
    access: 'International airport; 30–50 min to venue districts; excellent hotel inventory',
    heroImage: 'https://picsum.photos/seed/wedlock-jaipur/1200/900',
    gallery: [
      'https://picsum.photos/seed/wedlock-jaipur-1/1200/900',
      'https://picsum.photos/seed/wedlock-jaipur-2/1200/900',
      'https://picsum.photos/seed/wedlock-jaipur-3/1200/900',
    ],
    why: [
      { title: 'Royal venues, real infrastructure', text: 'Forts and palaces backed by 5,000+ hotel rooms and a major airport — scale and convenience rarely come together this well.' },
      { title: 'Craft capital of the country', text: 'Block printers, jewellers, blue-pottery studios — guest experiences and gifting with genuine provenance.' },
      { title: 'Spectacle-friendly', text: 'Elephant arches, torch-lit stepwells, cannon-salute welcomes — Jaipur’s venues are built for processions.' },
    ],
    venues: [
      { name: 'Fort & palace ballrooms', type: 'Fort-Palace', capacity: '300 – 2,000' },
      { name: 'Stepwell & baori venues', type: 'Heritage outdoor', capacity: '100 – 350' },
      { name: 'Modern luxury ballrooms', type: '5-star hotel', capacity: '250 – 1,000' },
    ],
    featured: true,
  },
  {
    slug: 'goa',
    name: 'Goa',
    country: 'India',
    region: 'Konkan Coast',
    tagline: 'Barefoot ceremonies, dance floors in the sand.',
    description:
      'Beachfront estates, Portuguese-era chapels and a nightlife engine that runs itself — Goa remains the definitive destination for weddings that end at sunrise.',
    bestSeason: 'November – February',
    idealGuests: '80 – 500 guests',
    access: 'Two airports (GOI & GOX); private transfers 20–70 min by beach belt',
    heroImage: 'https://wedlock.co.in/wp-content/uploads/2024/04/image1-1024x682.jpeg',
    gallery: [
      'https://wedlock.co.in/wp-content/uploads/2024/04/20220123_114444-1024x768.jpg',
      'https://wedlock.co.in/wp-content/uploads/2024/04/20220123_114444-1-1024x768.jpg',
      'https://wedlock.co.in/wp-content/uploads/2024/04/20210701_192754-scaled.jpg',
    ],
    why: [
      { title: 'Sea in every frame', text: 'Cliff-top vows, beach mandaps, boat after-parties — the Arabian Sea becomes your wedding’s recurring character.' },
      { title: 'Entertainment capital', text: 'India’s deepest bench of live acts, DJs and production crews are already based here.' },
      { title: 'Guest-friendly logistics', text: 'Compact geography, endless villas and hotels — moving 300 guests between functions is genuinely easy.' },
    ],
    venues: [
      { name: 'Private beach estates', type: 'Beachfront', capacity: '80 – 400' },
      { name: 'Colonial-era heritage houses', type: 'Heritage villa', capacity: '60 – 250' },
      { name: 'Cliff-top resort lawns', type: 'Resort', capacity: '150 – 800' },
    ],
    featured: true,
  },
  {
    slug: 'kerala',
    name: 'Kerala',
    country: 'India',
    region: 'Malabar Coast',
    tagline: 'Backwaters, houseboats and monsoon-blessed green.',
    description:
      'For couples who want serenity over spectacle — floating mandaps, sadhya feasts on banana leaf and photographs that look painted. Kumarakom and Alleppey are our home waters.',
    bestSeason: 'September – March',
    idealGuests: '60 – 300 guests',
    access: 'Fly into Kochi (COK); backwater venues 90 min by road or jetty',
    heroImage: 'https://picsum.photos/seed/wedlock-kerala/1200/900',
    gallery: [
      'https://picsum.photos/seed/wedlock-kerala-1/1200/900',
      'https://picsum.photos/seed/wedlock-kerala-2/1200/900',
      'https://picsum.photos/seed/wedlock-kerala-3/1200/900',
    ],
    why: [
      { title: 'Water as the venue', text: 'Floating stages, houseboat processions and jetty receptions — a wedding geometry found nowhere else in India.' },
      { title: 'Intimacy by default', text: 'Backwater resorts naturally cap guest counts, keeping celebrations close-knit and deeply personal.' },
      { title: 'An unmatched food story', text: 'Sadhya spreads, coastal kitchens and spice-garden experiences guests will talk about for years.' },
    ],
    venues: [
      { name: 'Backwater resort jetties', type: 'Waterfront', capacity: '60 – 300' },
      { name: 'Heritage tharavad homes', type: 'Traditional estate', capacity: '40 – 150' },
      { name: 'Private houseboat fleets', type: 'On-water', capacity: '20 – 120' },
    ],
  },
  {
    slug: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    region: 'Southeast Asia',
    tagline: 'Cliff-top temples-meet-villas for weddings abroad.',
    description:
      'Our most-booked international destination — Uluwatu cliffs, jungle chapels and private villa estates with Indian-food caterers on speed dial.',
    bestSeason: 'April – October',
    idealGuests: '40 – 200 guests',
    access: 'Fly into Denpasar (DPS) via Singapore/Kuala Lumpur; visa-on-arrival for Indians',
    heroImage: 'https://picsum.photos/seed/wedlock-bali/1200/900',
    gallery: [
      'https://picsum.photos/seed/wedlock-bali-1/1200/900',
      'https://picsum.photos/seed/wedlock-bali-2/1200/900',
      'https://picsum.photos/seed/wedlock-bali-3/1200/900',
    ],
    why: [
      { title: 'World-class villa economy', text: 'Entire estates with private chapels and staff — often at half the cost of an equivalent Indian palace.' },
      { title: 'Indian-wedding ready', text: 'A mature ecosystem of Indian caterers, decorators and priests based permanently on the island.' },
      { title: 'A built-in honeymoon', text: 'Guests extend into holidays effortlessly; the couple disappears into Ubud the morning after.' },
    ],
    venues: [
      { name: 'Uluwatu cliff-top villas', type: 'Private estate', capacity: '40 – 180' },
      { name: 'Jungle river chapels, Ubud', type: 'Resort chapel', capacity: '30 – 120' },
      { name: 'Beach clubs & estates', type: 'Beachfront', capacity: '80 – 250' },
    ],
  },
  {
    slug: 'phuket',
    name: 'Phuket',
    country: 'Thailand',
    region: 'Southeast Asia',
    tagline: 'Andaman-blue backdrops with Thai hospitality.',
    description:
      'Five-star resorts that run like clockwork, private beach buy-outs and extraordinary value — Phuket is the smooth operator of international weddings.',
    bestSeason: 'November – April',
    idealGuests: '60 – 400 guests',
    access: 'Direct flights from major Indian metros; 4–5 hours, no visa hassle',
    heroImage: 'https://picsum.photos/seed/wedlock-phuket/1200/900',
    gallery: [
      'https://picsum.photos/seed/wedlock-phuket-1/1200/900',
      'https://picsum.photos/seed/wedlock-phuket-2/1200/900',
      'https://picsum.photos/seed/wedlock-phuket-3/1200/900',
    ],
    why: [
      { title: 'Resort machinery', text: 'Properties here host Indian weddings weekly — kitchens, banquet teams and decorators already speak the language.' },
      { title: 'Budget-transparent', text: 'Buy-out pricing is clear, inclusions are generous and our Thai partner network keeps surprises at zero.' },
      { title: 'Island-hopping guest experiences', text: 'Phi Phi day trips, night markets and yacht brunches turn the wedding into a group holiday.' },
    ],
    venues: [
      { name: 'Private beach resorts', type: '5-star resort', capacity: '100 – 500' },
      { name: 'Hillside ocean-view decks', type: 'Terrace venue', capacity: '50 – 200' },
      { name: 'Luxury villa compounds', type: 'Private estate', capacity: '40 – 150' },
    ],
  },
  {
    slug: 'tuscany',
    name: 'Tuscany',
    country: 'Italy',
    region: 'Europe',
    tagline: 'Vineyards, villas and la dolce vita.',
    description:
      'Sixteenth-century villas, cypress-lined drives and long-table dinners under plane trees — our European flagship for couples marrying the Indian celebration with Italian romance.',
    bestSeason: 'May – September',
    idealGuests: '40 – 150 guests',
    access: 'Fly into Florence or Pisa; villa estates 40–90 min drive',
    heroImage: 'https://wedlock.co.in/wp-content/uploads/2024/04/A50A2571EDITED.jpg',
    gallery: [
      'https://wedlock.co.in/wp-content/uploads/2024/03/1.jpg',
      'https://wedlock.co.in/wp-content/uploads/2024/03/2.jpg',
      'https://wedlock.co.in/wp-content/uploads/2024/03/3-1.jpg',
    ],
    why: [
      { title: 'A lifestyle, not just a venue', text: 'Wine tastings, truffle hunts, vintage Fiat convoys — the destination itself entertains your guests.' },
      { title: 'Cross-cultural fluency', text: 'Our Europe desk handles permits, Indian menu integration and ceremony requirements most villas have never seen.' },
      { title: 'Photographs beyond description', text: 'Golden-hour light over Chianti hills — the single most-requested backdrop in our enquiry inbox.' },
    ],
    venues: [
      { name: 'Historic vineyard villas', type: 'Private estate', capacity: '40 – 150' },
      { name: 'Medieval borgo villages', type: 'Village buy-out', capacity: '60 – 250' },
      { name: 'Castle estates, Chianti', type: 'Castle', capacity: '80 – 300' },
    ],
  },
  {
    slug: 'dubai',
    name: 'Dubai',
    country: 'UAE',
    region: 'Middle East',
    tagline: 'Skyline ballrooms and desert-gold receptions.',
    description:
      'Three hours from home with zero logistical friction — Dubai offers five-star scale, global-standard production and a skyline that does half the décor for you.',
    bestSeason: 'November – March',
    idealGuests: '100 – 1,000 guests',
    access: 'Direct flights from every Indian metro; visa processed in 3–4 days',
    heroImage: 'https://picsum.photos/seed/wedlock-dubai/1200/900',
    gallery: [
      'https://picsum.photos/seed/wedlock-dubai-1/1200/900',
      'https://picsum.photos/seed/wedlock-dubai-2/1200/900',
      'https://picsum.photos/seed/wedlock-dubai-3/1200/900',
    ],
    why: [
      { title: 'Zero-friction scale', text: 'The world’s most connected airport, hotels for every budget and regulations built for large Indian celebrations.' },
      { title: 'Production-grade venues', text: 'Ballrooms and beach clubs with rigging, power and acoustics that satisfy our most demanding technical riders.' },
      { title: 'Desert & skyline variety', text: 'Welcome dinner in the dunes, sangeet in a ballroom, after-party by the marina — all within 30 minutes.' },
    ],
    venues: [
      { name: 'Skyline ballrooms', type: '5-star hotel', capacity: '200 – 1,500' },
      { name: 'Palm & marina beach clubs', type: 'Beachfront', capacity: '100 – 600' },
      { name: 'Private desert camps', type: 'Desert venue', capacity: '80 – 400' },
    ],
  },
];

export function getDestinationBySlug(slug: string) {
  return destinations.find((d) => d.slug === slug);
}

export function getRelatedDestinations(slug: string, count = 3) {
  const pool = destinations.filter((d) => d.slug !== slug);
  const featured = pool.filter((d) => d.featured);
  const rest = pool.filter((d) => !d.featured);
  return [...featured, ...rest].slice(0, count);
}
