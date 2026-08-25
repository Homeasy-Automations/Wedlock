import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import AnimatedText from '@/components/ui/AnimatedText';
import ImageReveal from '@/components/ui/ImageReveal';
import HeroVideo from '@/components/ui/HeroVideo';
import Stats from '@/components/home/Stats';
import WhyWedlock from '@/components/home/WhyWedlock';
import ProcessSection from '@/components/home/ProcessSection';
import FinalCTA from '@/components/home/FinalCTA';

export const metadata: Metadata = buildMetadata({
  title: 'About — The Wedlock Atelier',
  description:
    'Wedlock is a Patna-based celebration atelier — part of the Eventoss group — producing weddings, destination weddings and family celebrations across Patna, Ranchi, Delhi and beyond.',
  path: '/about',
});

const values = [
  {
    title: 'Family first, always',
    body: 'Every plan starts by asking who the elders are and what will make them comfortable. Indian families are our design brief.',
  },
  {
    title: 'Craft over decoration',
    body: 'We prototype, material-test and rehearse. Nothing at your celebration is untested, from anchor bolts to anchor speeches.',
  },
  {
    title: 'Transparency as policy',
    body: 'One portal, every quote, no hidden margins. You will always know where your money went and why.',
  },
  {
    title: 'Calm is a deliverable',
    body: 'Our clients’ favourite review is not “beautiful” — it is “we never worried once.” That is the real product.',
  },
];

const team = [
  {
    name: 'Advaita Roy',
    role: 'Founder & Head of Destination Desk',
    note: 'Has scouted 40+ wedding destinations and can recite the sunset time of every Udaipur terrace by month.',
    image: 'https://picsum.photos/seed/wedlock-team-advaita/600/800',
  },
  {
    name: 'Ishita Bannerjee',
    role: 'Creative Director',
    note: 'Former textile designer; believes every celebration has one correct palette and it is her job to find it.',
    image: 'https://picsum.photos/seed/wedlock-team-ishita/600/800',
  },
  {
    name: 'Kabir Anand',
    role: 'Head of Production',
    note: 'The man behind the ninety-minute rain flip. Sleeps well during monsoon. Nobody knows how.',
    image: 'https://picsum.photos/seed/wedlock-team-kabir/600/800',
  },
  {
    name: 'Meher Chatterjee',
    role: 'Director, Hospitality & Guest Experience',
    note: 'Runs guest desks like five-star front offices; has never once lost a nani at an airport.',
    image: 'https://picsum.photos/seed/wedlock-team-meher/600/800',
  },
];

const milestones = [
  { year: '2019', text: 'Wedlock is founded out of Patna, built on the lineage of Eventoss, the region\u2019s leading marketing and events agency.' },
  { year: '2021', text: 'A steady run of Patna weddings builds the reputation Wedlock is known for today: comfort matched with grandeur.' },
  { year: '2023', text: 'The destination desk takes shape, taking Wedlock celebrations beyond Bihar for the first time.' },
  { year: '2024', text: 'Five years in, Wedlock has produced some of the region\u2019s most splendid weddings — with teams now active in Patna, Ranchi and Delhi.' },
  { year: 'Today', text: 'Still a hands-on team of planners, stylists and producers turning every dream day into what we call \u201cA Splendid Memoir.\u201d' },
];

export default function AboutPage() {
  return (
    <>
      {/* Story hero */}
      <section className="pb-20 pt-36 sm:pb-28 sm:pt-44">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="font-sacramento text-5xl leading-tight text-gold">The Wedlock Atelier</p>
            <AnimatedText
              text="We exist so your family can be fully present."
              as="h1"
              delay={0.25}
              className="mt-5 font-display text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-6xl"
            />
            <p className="mt-6 text-base leading-relaxed text-ink/65 sm:text-lg">
              A celebration is the one day an entire family gathers in a single frame. Our work is
              to protect that frame — to absorb every logistics problem, vendor wobble and weather
              tantrum so completely that the family inside the frame never feels the wind.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/65 sm:text-lg">
              We are planners, stylists, carpenters, light designers, choreographers, travel agents
              and crisis negotiators. Mostly, we are people who love what a well-produced celebration
              does to a family.
            </p>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <HeroVideo
                src="/videos/stage-decor6.mp4"
                poster="https://wedlock.co.in/wp-content/uploads/2024/04/20210701_192754-scaled.jpg"
                className="h-full w-full rounded-[2rem] object-cover"
              />
            </div>
            <ImageReveal
              src="https://wedlock.co.in/wp-content/uploads/2024/05/20230217_190327-1.jpg"
              alt="Detail of a Wedlock tablescape"
              className="absolute -bottom-10 -right-4 hidden aspect-square w-52 rounded-[1.5rem] border-[6px] border-base shadow-2xl sm:block lg:-right-10 lg:w-64"
              delay={0.25}
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-y border-ink/10 bg-cream py-20 sm:py-28">
        <div className="container-x">
          <p className="font-beau text-4xl leading-none text-gold">How we got here</p>
          <div className="mt-10 grid gap-8 md:grid-cols-3 lg:grid-cols-5">
            {milestones.map((m, i) => (
              <div key={m.year} className="relative pl-5">
                <span className="absolute left-0 top-1.5 h-full w-px bg-gold/50" aria-hidden />
                <span
                  className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-gold"
                  style={{ boxShadow: '0 0 0 4px rgba(201,162,75,0.2)' }}
                  aria-hidden
                />
                <p className="font-display text-3xl font-semibold text-ink">{m.year}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />

      {/* Values */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="font-allura text-4xl leading-none text-gold">What we hold sacred</p>
            <AnimatedText
              text="Four values, non-negotiable since day one."
              as="h2"
              className="mt-4 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl"
            />
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`rounded-2xl border border-ink/10 bg-white/50 p-8 ${i % 2 === 1 ? 'sm:mt-8' : ''}`}
              >
                <p className="font-sacramento text-5xl text-gold/70">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-4 font-display text-2xl font-medium text-ink">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60 sm:text-base">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="font-dancing text-4xl leading-none text-gold">The people behind the curtain</p>
            <AnimatedText
              text="Leadership you will actually meet."
              as="h2"
              className="mt-4 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl"
            />
            <p className="mt-4 text-base leading-relaxed text-ink/60">
              No account managers relaying messages — the people below sit in your first planning
              meeting and stand on your venue floor.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((t) => (
              <div key={t.name} className="group">
                <ImageReveal
                  src={t.image}
                  alt={`${t.name}, ${t.role} at Wedlock`}
                  className="aspect-[3/4] rounded-2xl"
                  imgClassName="transition-transform duration-[1.2s] group-hover:scale-[1.05]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="mt-4">
                  <p className="font-display text-xl font-semibold text-ink">{t.name}</p>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">{t.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/55">{t.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyWedlock />
      <ProcessSection />
      <FinalCTA />
    </>
  );
}
