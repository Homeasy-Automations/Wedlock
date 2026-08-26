import type { EventItem } from '@/types/event';

export const events: EventItem[] = [
  {
    slug: 'aisha-arjun-udaipur',
    title: 'Aisha & Arjun — A Palace Wedding',
    category: 'weddings',
    categoryLabel: 'Wedding',
    location: 'City Palace complex & lakefront lawns, Udaipur',
    city: 'Udaipur, Rajasthan',
    year: 2025,
    guests: 320,
    summary:
      'Three days, four venues, one lakeside pheras-at-sunset — a destination wedding that moved 320 guests through Udaipur like a well-kept secret.',
    editorial:
      'A three-day arc across the City Palace and the lake — engineered so 320 guests only ever felt the romance, never the logistics.',
    story: [
      'Aisha and Arjun wanted a wedding that felt like a journey, not a schedule. Wedlock designed a three-day arc: a mehendi in a haveli courtyard drenched in marigold, a sangeet on a mirrored stage by the lake, and pheras timed to the minute the sun touched the Aravallis.',
      'Our destination desk managed 41 room allocations across two hotels, six charter coaches and a hospitality lounge that never ran out of chai. The couple’s only job, as planned, was to show up glowing.',
    ],
    heroImage: 'https://wedlock.co.in/wp-content/uploads/2024/03/4.jpg',
    heroVideo: '/videos/wedding3.mp4',
    gallery: [
      'https://wedlock.co.in/wp-content/uploads/2024/03/5.jpg',
      'https://wedlock.co.in/wp-content/uploads/2024/03/6.jpg',
      'https://wedlock.co.in/wp-content/uploads/2024/03/7.jpg',
      'https://wedlock.co.in/wp-content/uploads/2024/03/15.jpg',
    ],
    highlights: [
      { icon: 'venue', title: 'Venue & Décor', description: 'A haveli courtyard dressed in marigold, a mirrored lakeside stage and a sunset-timed mandap — three venues styled as one continuous story.' },
      { icon: 'guest', title: 'Guest Experience', description: '41 room allocations, six charter coaches and a hospitality lounge that never ran dry — every one of 320 guests moved without a single question asked.' },
      { icon: 'production', title: 'Production & Timing', description: 'Pheras choreographed to the minute the sun touched the Aravallis, run off a single master cue-sheet across four venues.' },
    ],
    tags: ['Destination Wedding', 'Palace', 'Multi-day'],
    featured: true,
  },
  {
    slug: 'mehta-golden-jubilee-mumbai',
    title: 'The Mehta Golden Jubilee',
    category: 'anniversaries',
    categoryLabel: 'Anniversary',
    location: 'Ballroom, South Mumbai',
    city: 'Mumbai, Maharashtra',
    year: 2025,
    guests: 260,
    summary:
      'Fifty years of marriage celebrated by four generations — a gold-drenched evening with a live orchestra playing the songs of 1975.',
    editorial:
      'Fifty years, rebuilt for one night — a ballroom turned into 1975, complete with the songs, the car and four generations of witnesses.',
    story: [
      'The Mehta children came to us with one instruction: “Make it feel like 1975 looked.” We rebuilt their parents’ wedding era with sepia photo corridors, a vintage car entry and a 26-foot gallery wall tracing five decades of family life.',
      'The couple renewed their vows with 37 grandchildren and great-grandchildren as witnesses. There was not a dry eye in the ballroom — ours included.',
    ],
    heroImage: 'https://picsum.photos/seed/wedlock-anniversary-mehta-hero/1200/900',
    heroVideo: '/videos/wedding4.mp4',
    gallery: [
      'https://picsum.photos/seed/wedlock-anniversary-mehta-1/1200/900',
      'https://picsum.photos/seed/wedlock-anniversary-mehta-2/1200/900',
      'https://picsum.photos/seed/wedlock-anniversary-mehta-3/1200/900',
      'https://picsum.photos/seed/wedlock-anniversary-mehta-4/1200/900',
    ],
    highlights: [
      { icon: 'design', title: 'Design & Styling', description: 'Sepia photo corridors and a 26-foot gallery wall traced five decades of family life, anchoring the ballroom in a single unbroken timeline.' },
      { icon: 'entertainment', title: 'Entertainment', description: 'A live orchestra relearned the exact songs of 1975 for the vow renewal, note for note, era for era.' },
      { icon: 'guest', title: 'Guest Experience', description: '37 grandchildren and great-grandchildren seated as witnesses to a vow renewal built entirely around them.' },
    ],
    tags: ['Golden Jubilee', '50th Anniversary'],
    featured: true,
  },
  {
    slug: 'zaras-enchanted-first-kolkata',
    title: 'Zara’s Enchanted First Birthday',
    category: 'birthdays',
    categoryLabel: 'Birthday',
    location: 'Private lawn & conservatory, Ballygunge',
    city: 'Kolkata, West Bengal',
    year: 2025,
    guests: 140,
    summary:
      'A storybook first birthday — a hand-built enchanted forest, butterfly releases and a smash cake under a canopy of a thousand paper blooms.',
    editorial:
      'A garden that felt invented for one afternoon — a walk-through enchanted forest built for a one-year-old and photographed for a lifetime.',
    story: [
      'For Zara’s first birthday, her parents asked for “a garden that feels invented.” Our fabrication team built a walk-through enchanted forest with moss tunnels, talking tree animatronics and a butterfly conservatory that opened at golden hour.',
      'Adults got a prosecco garden; the under-fives got a bubble orchestra. The smash cake moment was photographed from four angles — as it should be.',
    ],
    heroImage: 'https://picsum.photos/seed/wedlock-birthday-zara-hero/1200/900',
    heroVideo: '/videos/stage-decor1.mp4',
    gallery: [
      'https://picsum.photos/seed/wedlock-birthday-zara-1/1200/900',
      'https://picsum.photos/seed/wedlock-birthday-zara-2/1200/900',
      'https://picsum.photos/seed/wedlock-birthday-zara-3/1200/900',
      'https://picsum.photos/seed/wedlock-birthday-zara-4/1200/900',
    ],
    highlights: [
      { icon: 'design', title: 'Design & Fabrication', description: 'A hand-built enchanted forest with moss tunnels, talking tree animatronics and a butterfly conservatory timed to open at golden hour.' },
      { icon: 'guest', title: 'Guest Experience', description: 'A prosecco garden for the adults and a bubble orchestra for the under-fives — two celebrations running in parallel, seamlessly.' },
      { icon: 'production', title: 'Production & Photography', description: 'The smash cake moment was rigged and photographed from four angles simultaneously — one shot, no second takes possible.' },
    ],
    tags: ["Kids' Birthday", 'Themed', 'First Birthday'],
    featured: true,
  },
  {
    slug: 'kabir-ananya-roka-delhi',
    title: 'Kabir & Ananya — Roka to Ring',
    category: 'engagements',
    categoryLabel: 'Engagement',
    location: 'Heritage haveli, Chattarpur',
    city: 'New Delhi, Delhi',
    year: 2024,
    guests: 180,
    summary:
      'A roka at noon, a ring ceremony by candlelight — one heritage haveli, two completely different moods, a single seamless day.',
    editorial:
      'One heritage haveli, two completely different moods, a single seamless day — a jasmine-soaked roka that became an art-deco ring ceremony by dark.',
    story: [
      'The brief was contrast: a morning roka soaked in jasmine, banana leaf and temple bells, followed by an art-deco ring ceremony after dark. Our crew executed a full venue transformation in under five hours — a flip we rehearsed three times off-site.',
      'The ring exchange happened under a suspended garden of 4,000 tuberoses. The groom’s grandmother called it “a film set with feelings.” We framed the quote.',
    ],
    heroImage: 'https://picsum.photos/seed/wedlock-engagement-kabir-hero/1200/900',
    heroVideo: '/videos/stage-decor3.mp4',
    gallery: [
      'https://picsum.photos/seed/wedlock-engagement-kabir-1/1200/900',
      'https://picsum.photos/seed/wedlock-engagement-kabir-2/1200/900',
      'https://picsum.photos/seed/wedlock-engagement-kabir-3/1200/900',
      'https://picsum.photos/seed/wedlock-engagement-kabir-4/1200/900',
    ],
    highlights: [
      { icon: 'venue', title: 'Venue Transformation', description: 'A full venue flip — from a jasmine-and-temple-bell roka to an art-deco ring ceremony — executed in under five hours, rehearsed three times off-site.' },
      { icon: 'design', title: 'Design & Styling', description: '4,000 suspended tuberoses formed a garden ceiling for the ring exchange, replacing the morning\'s banana-leaf and marigold palette entirely.' },
      { icon: 'hospitality', title: 'Hospitality', description: 'Guests transitioned from a noon ceremony to a candlelit evening without ever leaving the property, catered as two distinct experiences.' },
    ],
    tags: ['Roka', 'Ring Ceremony', 'Venue Flip'],
  },
  {
    slug: 'kapoor-reunion-kasauli',
    title: 'The Kapoor Family Reunion',
    category: 'family-private',
    categoryLabel: 'Family & Private',
    location: 'Mountain estate, Kasauli',
    city: 'Kasauli, Himachal Pradesh',
    year: 2024,
    guests: 68,
    summary:
      'Sixty-eight Kapoors from five countries, one mountain estate, three days of food, walks and stories that had waited eight years.',
    editorial:
      'Sixty-eight Kapoors from five countries, one mountain estate, and eight years of distance closed in three carefully unhurried days.',
    story: [
      'After eight years scattered across the globe, the Kapoor family wanted a reunion that didn’t feel like a conference. We structured three days around shared rituals — chai mornings, a family Olympics, a heritage recipe cook-off judged by the eldest aunt.',
      'Every evening ended around a bonfire with a curated family slideshow. Our favourite deliverable: a printed reunion newspaper, The Kapoor Chronicle, distributed at farewell brunch.',
    ],
    heroImage: 'https://picsum.photos/seed/wedlock-family-kapoor-hero/1200/900',
    heroVideo: '/videos/stage-decor5.mp4',
    gallery: [
      'https://picsum.photos/seed/wedlock-family-kapoor-1/1200/900',
      'https://picsum.photos/seed/wedlock-family-kapoor-2/1200/900',
      'https://picsum.photos/seed/wedlock-family-kapoor-3/1200/900',
      'https://picsum.photos/seed/wedlock-family-kapoor-4/1200/900',
    ],
    highlights: [
      { icon: 'guest', title: 'Guest Experience', description: 'Three days structured around shared rituals — chai mornings, a family Olympics and a heritage cook-off judged by the eldest aunt.' },
      { icon: 'design', title: 'Design & Keepsakes', description: 'A printed reunion newspaper, The Kapoor Chronicle, chronicled the weekend and was distributed at farewell brunch as a keepsake.' },
      { icon: 'hospitality', title: 'Hospitality', description: 'Every evening closed around a bonfire with a curated family slideshow, timed for guests arriving across five countries and time zones.' },
    ],
    tags: ['Reunion', 'Multi-day', 'Mountain'],
  },
  {
    slug: 'tuscan-i-do-florence',
    title: "A Tuscan 'I Do'",
    category: 'weddings',
    categoryLabel: 'Wedding',
    location: '16th-century vineyard villa, Chianti',
    city: 'Tuscany, Italy',
    year: 2024,
    guests: 60,
    summary:
      'Sixty guests flown to Chianti for a villa wedding — pheras under cypress trees, a nine-course Italian-Indian feast and dancing until the vineyard lights went out.',
    editorial:
      'Pheras under cypress trees, a maharaj flown from London, and a menu that placed truffle risotto beside Kolkata biryani without blinking.',
    story: [
      'Cross-cultural weddings are where our destination desk shines: a Hindu ceremony with a maharaj flown from London, an Italian string quartet learning “Lagna Geet,” and a menu that placed truffle risotto beside Kolkata-style biryani without blinking.',
      'We navigated venue permits, a 14-item customs manifest and one very stressed mother-of-the-bride. The bride later wrote: “It felt like the whole world conspired for us.” That’s the job.',
    ],
    heroImage: 'https://wedlock.co.in/wp-content/uploads/2024/03/16.jpg',
    heroVideo: '/videos/wedding1.mp4',
    gallery: [
      'https://wedlock.co.in/wp-content/uploads/2024/03/17.jpg',
      'https://wedlock.co.in/wp-content/uploads/2024/03/18.jpg',
      'https://wedlock.co.in/wp-content/uploads/2024/03/19.jpg',
      'https://wedlock.co.in/wp-content/uploads/2024/03/DSC03554-scaled.jpg',
    ],
    highlights: [
      { icon: 'venue', title: 'Venue & Permits', description: 'A 16th-century vineyard villa in Chianti secured and permitted for a Hindu ceremony — navigated alongside a 14-item customs manifest.' },
      { icon: 'entertainment', title: 'Entertainment', description: 'An Italian string quartet learned to play \'Lagna Geet\' for the processional, blending two musical traditions into one ceremony.' },
      { icon: 'hospitality', title: 'Hospitality & Catering', description: 'A nine-course Italian-Indian feast served to 60 flown-in guests, closing with dancing until the vineyard lights went out.' },
    ],
    tags: ['Destination Wedding', 'International', 'Intimate'],
    featured: true,
  },
  {
    slug: 'sixty-and-glorious-alibaug',
    title: '60 & Glorious',
    category: 'birthdays',
    categoryLabel: 'Birthday',
    location: 'Beachfront villa, Alibaug',
    city: 'Alibaug, Maharashtra',
    year: 2024,
    guests: 90,
    summary:
      'A 60th birthday staged as a three-decade musical — cocktails in the 80s, dinner in the 90s and a dance floor that never left the 2000s.',
    editorial:
      'A 60th birthday staged as a three-decade musical — cocktails in the 80s, dinner in the 90s, and a dance floor that never left the 2000s.',
    story: [
      'The birthday boy’s children wanted his life told through music. We zoned the villa into decades — each with its own playlist, signature cocktail and décor language — and guests physically travelled through his story as the night progressed.',
      'A surprise set by his college band (reunited after 33 years) closed the evening. Production note: hiding a five-piece band in a beach villa is harder than it sounds.',
    ],
    heroImage: 'https://picsum.photos/seed/wedlock-birthday-sixty-hero/1200/900',
    heroVideo: '/videos/stage-decor6.mp4',
    gallery: [
      'https://picsum.photos/seed/wedlock-birthday-sixty-1/1200/900',
      'https://picsum.photos/seed/wedlock-birthday-sixty-2/1200/900',
      'https://picsum.photos/seed/wedlock-birthday-sixty-3/1200/900',
      'https://picsum.photos/seed/wedlock-birthday-sixty-4/1200/900',
    ],
    highlights: [
      { icon: 'design', title: 'Design & Zoning', description: 'The villa was zoned into three decades, each with its own playlist, signature cocktail and décor language, guiding guests physically through the story.' },
      { icon: 'entertainment', title: 'Entertainment', description: 'The birthday boy\'s college band reunited after 33 years for a surprise closing set, rehearsed and hidden without his knowledge.' },
      { icon: 'production', title: 'Production', description: 'Concealing a five-piece band and their equipment inside a beach villa for a live surprise reveal — quietly, one of our hardest production briefs.' },
    ],
    tags: ['Milestone Birthday', 'Themed', 'Surprise'],
  },
  {
    slug: 'sangeet-under-stars-goa',
    title: 'Sangeet Under the Stars',
    category: 'weddings',
    categoryLabel: 'Wedding',
    location: 'Private beach estate, Candolim',
    city: 'Goa',
    year: 2023,
    guests: 240,
    summary:
      'A barefoot sangeet on Goan sand — neon installations, a percussion circle and fireworks reflected in the Arabian Sea.',
    editorial:
      'A barefoot sangeet on Goan sand, built to feel nothing like a ballroom — neon installations, a percussion circle and fireworks in the Arabian Sea.',
    story: [
      'The family asked for a sangeet that “didn’t feel like a ballroom with sand in it.” We built an open-air stage on the high-tide line, rigged 1,200 festoon bulbs into a wave-shaped canopy and flew in a dhol troupe to back the family performances.',
      'Rain threatened at hour —2; our weather plan (a transparent marquee kept on standby rig) stayed in the truck. The stars did their part.',
    ],
    heroImage: 'https://wedlock.co.in/wp-content/uploads/2024/03/DSC03569-scaled.jpg',
    heroVideo: '/videos/wedding2.mp4',
    gallery: [
      'https://wedlock.co.in/wp-content/uploads/2024/03/DSC04334-scaled.jpg',
      'https://wedlock.co.in/wp-content/uploads/2024/03/DSC04664-1-scaled.jpg',
      'https://wedlock.co.in/wp-content/uploads/2024/03/image0.jpeg',
      'https://wedlock.co.in/wp-content/uploads/2024/05/image0.jpeg',
    ],
    highlights: [
      { icon: 'venue', title: 'Venue & Décor', description: 'An open-air stage rigged directly on the high-tide line, with 1,200 festoon bulbs woven into a wave-shaped canopy above the dance floor.' },
      { icon: 'entertainment', title: 'Entertainment', description: 'A dhol troupe flown in to back live family performances, anchoring the night\'s percussion around the couple\'s own sangeet acts.' },
      { icon: 'production', title: 'Production & Contingency', description: 'A transparent marquee stayed rigged and ready as a two-minute weather contingency — never deployed, but ready the entire evening.' },
    ],
    tags: ['Sangeet', 'Beach', 'Destination Wedding'],
  },
  {
    slug: 'silver-soiree-bengaluru',
    title: 'The Silver Soirée',
    category: 'anniversaries',
    categoryLabel: 'Anniversary',
    location: 'Glass pavilion, Whitefield',
    city: 'Bengaluru, Karnataka',
    year: 2023,
    guests: 150,
    summary:
      'A 25th anniversary in a rain-washed glass pavilion — silver foliage, a string quartet and a midnight vow renewal neither spouse saw coming.',
    editorial:
      'A 25th anniversary rebuilt as a walk-through wedding album — every photograph re-staged, twenty-five years later, in the same sari and sherwani.',
    story: [
      'The couple’s three daughters secretly rebuilt their parents’ wedding album as a walk-through installation — every photograph re-staged with the same sari, the same sherwani, twenty-five years later.',
      'When the couple reached the final frame, the pavilion curtains parted to reveal a mandap dressed in silver rajnigandha. He said yes again. So did she.',
    ],
    heroImage: 'https://picsum.photos/seed/wedlock-anniversary-silver-hero/1200/900',
    heroVideo: '/videos/stage-decor4.mp4',
    gallery: [
      'https://picsum.photos/seed/wedlock-anniversary-silver-1/1200/900',
      'https://picsum.photos/seed/wedlock-anniversary-silver-2/1200/900',
      'https://picsum.photos/seed/wedlock-anniversary-silver-3/1200/900',
      'https://picsum.photos/seed/wedlock-anniversary-silver-4/1200/900',
    ],
    highlights: [
      { icon: 'design', title: 'Design & Styling', description: 'The couple\'s original wedding album was re-staged frame by frame as a walk-through installation, ending at a silver-dressed mandap.' },
      { icon: 'guest', title: 'Guest Experience', description: 'The couple\'s three daughters secretly co-produced the surprise reveal with our team, kept from both parents until the final frame.' },
      { icon: 'production', title: 'Production', description: 'A midnight vow renewal was staged behind parting curtains inside a glass pavilion, cued precisely to the final photograph of the installation.' },
    ],
    tags: ['Silver Jubilee', 'Vow Renewal', 'Surprise'],
  },
  {
    slug: 'proposal-to-party-jaipur',
    title: 'Proposal to Party',
    category: 'engagements',
    categoryLabel: 'Engagement',
    location: 'Stepwell venue & rooftop, Amer',
    city: 'Jaipur, Rajasthan',
    year: 2023,
    guests: 120,
    summary:
      'A proposal staged at a 300-year-old stepwell at dusk — followed by an engagement party that was waiting upstairs all along.',
    editorial:
      'A proposal staged at a 300-year-old stepwell at dusk, with an entire engagement party waiting upstairs the whole time.',
    story: [
      'The groom-to-be had one request: “She should not suspect a thing until the last second.” We staged a fake heritage walk, positioned 40 guests in hidden galleries around the stepwell, and cued a lone sarangi player at the moment of the question.',
      'Her “yes” was answered by 40 people applauding from stone balconies — and a rooftop engagement party that started ninety seconds later. Planning the deception took six weeks. Worth every minute.',
    ],
    heroImage: 'https://picsum.photos/seed/wedlock-engagement-jaipur-hero/1200/900',
    heroVideo: '/videos/stage-decor2.mp4',
    gallery: [
      'https://picsum.photos/seed/wedlock-engagement-jaipur-1/1200/900',
      'https://picsum.photos/seed/wedlock-engagement-jaipur-2/1200/900',
      'https://picsum.photos/seed/wedlock-engagement-jaipur-3/1200/900',
      'https://picsum.photos/seed/wedlock-engagement-jaipur-4/1200/900',
    ],
    highlights: [
      { icon: 'venue', title: 'Venue & Concealment', description: '40 guests were positioned in hidden stepwell galleries, with a lone sarangi player cued to the exact moment of the question.' },
      { icon: 'production', title: 'Production & Secrecy', description: 'A fake heritage walk was staged to disguise the proposal setup — six weeks of planning went into a deception that lasted only minutes.' },
      { icon: 'guest', title: 'Guest Experience', description: 'A rooftop engagement party began ninety seconds after the proposal, fully staged and ready the instant the answer came.' },
    ],
    tags: ['Proposal', 'Engagement Party', 'Surprise'],
  },
  {
    slug: 'nanis-eightieth-kolkata',
    title: 'Nani’s Eightieth',
    category: 'family-private',
    categoryLabel: 'Family & Private',
    location: 'Ancestral home courtyard, North Kolkata',
    city: 'Kolkata, West Bengal',
    year: 2023,
    guests: 110,
    summary:
      'Four generations returned to the old family home — an evening of adda, Tagore songs and 110 people eating dinner off shakha pola plates in the courtyard.',
    editorial:
      'Four generations returned to a courtyard she hadn\'t entered in a decade — restored, lit, and filled with her own recipes and her own people.',
    story: [
      'The family asked us to celebrate in the crumbling courtyard their Nani hadn’t entered in a decade. We restored and lit the space, tracked down her long-lost childhood neighbour, and staged a “memory lane” of keepsakes from every decade of her life — her first radio, her wedding shakha, a 1962 calendar from her college.',
      'Dinner was strictly her recipes, cooked by two of her original kitchen helpers we located in Shantiniketan. She cried. We had budgeted for exactly one tissue-box per table. We under-budgeted.',
    ],
    heroImage: 'https://picsum.photos/seed/wedlock-family-nani-hero/1200/900',
    heroVideo: '/videos/stage-decor.mp4',
    gallery: [
      'https://picsum.photos/seed/wedlock-family-nani-1/1200/900',
      'https://picsum.photos/seed/wedlock-family-nani-2/1200/900',
      'https://picsum.photos/seed/wedlock-family-nani-3/1200/900',
      'https://picsum.photos/seed/wedlock-family-nani-4/1200/900',
    ],
    highlights: [
      { icon: 'venue', title: 'Venue Restoration', description: 'A decade-neglected ancestral courtyard was restored and lit specifically for the evening, returning it to how she remembered it.' },
      { icon: 'design', title: 'Design & Keepsakes', description: 'A \'memory lane\' staged her life decade by decade — her first radio, her wedding shakha, a 1962 college calendar — each object sourced by our team.' },
      { icon: 'hospitality', title: 'Hospitality', description: 'Dinner was cooked strictly to her own recipes by two of her original kitchen helpers, located and flown in from Shantiniketan.' },
    ],
    tags: ['Milestone', 'Heritage Home', 'Intimate'],
  },
  {
    slug: 'vows-by-backwaters-kerala',
    title: 'Vows by the Backwaters',
    category: 'weddings',
    categoryLabel: 'Wedding',
    location: 'Backwater resort & houseboats, Kumarakom',
    city: 'Kumarakom, Kerala',
    year: 2022,
    guests: 150,
    summary:
      'A wedding dramatised by water — vows on a floating mandap, guests arriving by houseboat and a sadhya lunch for 150 under coconut palms.',
    editorial:
      'A wedding dramatised entirely by water — vows on a floating mandap, houseboats as guest transfers, and a monsoon shower the couple calls a blessing.',
    story: [
      'The couple, both marine architects, wanted water in every frame. We engineered a floating mandap (load-tested with actual priests), coordinated eleven houseboats as guest transfers and negotiated with 40 coconut palms for shade rights.',
      'A sudden monsoon shower hit mid-ceremony; our crew had umbrellas matched to the décor palette distributed in 90 seconds. The photographs turned out better because of the rain — the couple calls it “the blessing we didn’t plan.”',
    ],
    heroImage: 'https://wedlock.co.in/wp-content/uploads/2024/05/image1.jpeg',
    heroVideo: '/videos/wedding3.mp4',
    gallery: [
      'https://wedlock.co.in/wp-content/uploads/2024/05/image2.jpeg',
      'https://wedlock.co.in/wp-content/uploads/2024/05/DSC04668-scaled.jpg',
      'https://wedlock.co.in/wp-content/uploads/2024/05/A50A0632-scaled.jpg',
      'https://wedlock.co.in/wp-content/uploads/2024/05/A50A1680-scaled.jpg',
    ],
    highlights: [
      { icon: 'venue', title: 'Venue Engineering', description: 'A floating mandap was load-tested with the actual officiating priests before the ceremony, anchored on the backwaters for the vows.' },
      { icon: 'guest', title: 'Guest Experience', description: 'Eleven houseboats were coordinated as guest transfers, moving 150 guests across the backwaters without a single delayed arrival.' },
      { icon: 'production', title: 'Production & Contingency', description: 'A sudden monsoon shower mid-ceremony was met with décor-matched umbrellas distributed to every guest in under 90 seconds.' },
    ],
    tags: ['Destination Wedding', 'Backwaters', 'Monsoon'],
  },
];

export function getEventBySlug(slug: string) {
  return events.find((e) => e.slug === slug);
}

export function getRelatedEvents(slug: string, count = 3) {
  const current = getEventBySlug(slug);
  const pool = events.filter((e) => e.slug !== slug);
  const same = pool.filter((e) => e.category === current?.category);
  const rest = pool.filter((e) => e.category !== current?.category);
  return [...same, ...rest].slice(0, count);
}
