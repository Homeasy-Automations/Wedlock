import MagneticButton from '@/components/ui/MagneticButton';
import AnimatedText from '@/components/ui/AnimatedText';
import type { Celebration } from '@/types/celebration';

export default function CelebrationCTA({ celebration }: { celebration: Celebration }) {
  return (
    <section
      className="relative overflow-hidden py-24 text-center sm:py-32"
      style={{
        ['--cat' as string]: celebration.accent,
        background: `linear-gradient(140deg, #241C15 0%, color-mix(in srgb, ${celebration.accent} 30%, #241C15) 100%)`,
      } as React.CSSProperties}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-sacramento text-[22vw] leading-none text-cream/[0.05]"
      >
        {celebration.shortName.split(' ')[0]}
      </span>
      <div className="container-x relative z-10 mx-auto max-w-2xl">
        <p className="font-allura text-4xl leading-none sm:text-5xl" style={{ color: celebration.accent }}>
          What are you celebrating?
        </p>
        <AnimatedText
          text={`Let’s design your ${celebration.shortName.toLowerCase()} together.`}
          as="h2"
          className="mt-5 font-display text-4xl font-medium leading-[1.1] tracking-tight text-cream sm:text-5xl"
        />
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-cream/70">
          Share the occasion, the city and the dream — a celebration director replies within 24 hours.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href={`/plan-your-celebration?occasion=${celebration.id}`} variant="cat" size="lg">
            Plan Your Celebration
          </MagneticButton>
          <MagneticButton href="/events" variant="outline-light" size="lg">
            See it in real events
          </MagneticButton>
        </div>
        <p className="mt-10 text-[11px] font-bold uppercase tracking-[0.35em] text-cream/40">
          Plan · Design · Produce · Execute
        </p>
      </div>
    </section>
  );
}
