import ImageReveal from '@/components/ui/ImageReveal';
import AnimatedText from '@/components/ui/AnimatedText';
import Button from '@/components/ui/Button';

const strokes = [
  { n: '650+', l: 'celebrations produced' },
  { n: '03', l: 'cities: Patna, Ranchi, Delhi' },
  { n: '05', l: 'years of craft' },
];

export default function BrandIntro() {
  return (
    <section className="overflow-hidden py-24 sm:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="font-beau text-3xl leading-none text-gold sm:text-4xl">
            A celebration atelier
          </p>
          <AnimatedText
            text="We are the family’s quiet third hand — the one that makes everything happen."
            as="h2"
            className="mt-5 font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl"
          />
          <p className="mt-6 text-base leading-relaxed text-ink/65 sm:text-lg">
            Wedlock began in Patna, carrying the lineage of Eventoss, the region&rsquo;s leading
            marketing agency, into one stubborn belief: a celebration should feel inevitable, not
            assembled. Five years on, we are a studio of planners, designers and production crews
            who treat a 12-guest anniversary dinner with the same rigour as a 1,000-guest wedding.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink/65 sm:text-lg">
            We plan. We design. We produce. We execute. And then — this is the part our clients
            mention in their letters — we vanish into the walls while your family takes all the credit.
          </p>

          <div className="mt-9 flex flex-wrap gap-8">
            {strokes.map((s) => (
              <div key={s.l}>
                <p className="font-display text-4xl font-semibold text-ink">{s.n}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink/50">{s.l}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Button href="/about" variant="outline">
              Our story
            </Button>
            <span className="font-sacramento text-4xl text-ink/70">— The Wedlock Atelier</span>
          </div>
        </div>

        <div className="relative">
          <ImageReveal
            src="https://wedlock.co.in/wp-content/uploads/2024/05/DSC04668-scaled.jpg"
            alt="Wedding mandap designed by Wedlock in antique gold and ivory"
            className="aspect-[4/5] rounded-[2rem]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <ImageReveal
            src="https://wedlock.co.in/wp-content/uploads/2024/05/A50A0632-scaled.jpg"
            alt="Tablescape with candlelight and seasonal florals"
            className="absolute -bottom-10 -left-6 hidden aspect-square w-56 rounded-[1.5rem] border-[6px] border-base shadow-2xl sm:block lg:-left-14 lg:w-72"
            delay={0.25}
          />
          <div className="absolute -right-4 top-8 hidden rotate-90 lg:block" aria-hidden>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-ink/40">
              Plan · Design · Produce · Execute
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
