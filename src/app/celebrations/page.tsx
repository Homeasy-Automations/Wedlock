import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { celebrations } from '@/data/celebrations';
import AnimatedText from '@/components/ui/AnimatedText';
import MagneticButton from '@/components/ui/MagneticButton';
import HeroVideo from '@/components/ui/HeroVideo';

export const metadata: Metadata = buildMetadata({
  title: 'Celebrations — Weddings, Birthdays, Anniversaries, Engagements & Family',
  description:
    'Five occasion families, one devoted team: weddings, birthdays, anniversaries, engagements and family & private celebrations — each with its own signature services.',
  path: '/celebrations',
});

export default function CelebrationsHubPage() {
  return (
    <>
      {/* Hub hero */}
      <section className="relative flex min-h-[72svh] items-center overflow-hidden bg-ink">
        <div className="absolute inset-0 scale-110">
          <HeroVideo src="/videos/wedding2.mp4" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/40" />
        <div className="container-x relative z-10 mx-auto max-w-3xl pt-24 text-center">
          <p className="font-allura text-4xl leading-none text-gold sm:text-5xl">
            What are you celebrating?
          </p>
          <AnimatedText
            text="Every occasion, produced like it matters — because it does."
            as="h1"
            delay={0.2}
            className="mt-6 font-display text-4xl font-medium leading-[1.1] tracking-tight text-cream sm:text-6xl"
          />
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
            Five occasion families. Fifty-one signature services. Zero templates. Choose yours below —
            or tell us directly and we will help you find it.
          </p>
        </div>
      </section>

      {/* Category cards */}
      <section className="container-x pb-24 sm:pb-32">
        <div className="space-y-8">
          {celebrations.map((c, i) => (
            <Link
              key={c.id}
              href={c.href}
              className={`group grid overflow-hidden rounded-[2rem] border border-ink/10 bg-white/40 transition-shadow duration-500 hover:shadow-[0_30px_70px_-30px_rgba(42,33,28,0.45)] lg:grid-cols-2 ${
                i % 2 === 1 ? 'lg:[direction:rtl]' : ''
              }`}
            >
              <div className="relative aspect-[16/9] overflow-hidden lg:aspect-auto lg:min-h-[22rem] [direction:ltr]">
                <Image
                  src={c.heroImage}
                  alt={`${c.name} by Wedlock`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.3s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />
                <span
                  className="absolute left-5 top-5 rounded-full px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-ink"
                  style={{ backgroundColor: c.accent }}
                >
                  {c.index} — Signature
                </span>
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12 [direction:ltr]">
                <p className="font-sacramento text-4xl" style={{ color: c.accent }}>
                  {c.index}
                </p>
                <h2 className="mt-2 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
                  {c.name}
                </h2>
                <p className="mt-3 font-alex text-2xl leading-snug text-ink/60">{c.tagline}</p>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink/60 sm:text-base">
                  {c.description}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {c.subServices.slice(0, 4).map((s) => (
                    <span key={s.slug} className="chip">
                      {s.title}
                    </span>
                  ))}
                  <span className="chip border-dashed">+{c.subServices.length - 4} more</span>
                </div>
                <div className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: c.accent }}>
                  Explore {c.shortName.toLowerCase()}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Hub CTA strip */}
        <div className="mt-20 rounded-[2rem] bg-ink px-8 py-14 text-center sm:px-14">
          <p className="font-dancing text-4xl text-gold">Still not sure where you fit?</p>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-cream/70">
            Most celebrations are a blend — an engagement that becomes a family reunion, a birthday
            that becomes a destination weekend. Describe it; we will place it.
          </p>
          <div className="mt-8 flex justify-center">
            <MagneticButton href="/plan-your-celebration" variant="gold" size="lg">
              Plan Your Celebration
            </MagneticButton>
          </div>
          <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.35em] text-cream/40">
            Plan · Design · Produce · Execute
          </p>
        </div>
      </section>
    </>
  );
}
