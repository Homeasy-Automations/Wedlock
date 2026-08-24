import Image from 'next/image';
import MagneticButton from '@/components/ui/MagneticButton';
import AnimatedText from '@/components/ui/AnimatedText';
import { siteConfig } from '@/lib/seo';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-40">
      <div className="absolute inset-0">
        <Image
          src="https://wedlock.co.in/wp-content/uploads/2024/04/A50A2571EDITED.jpg"
          alt=""
          fill
          sizes="100vw"
          className="animate-kenburns object-cover"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_50%,transparent_0%,rgba(42,33,28,0.6)_100%)]" />
      </div>

      <div className="container-x relative z-10 mx-auto max-w-3xl text-center">
        <p className="font-sacramento text-5xl leading-tight text-gold sm:text-6xl">
          {siteConfig.prompt}
        </p>
        <AnimatedText
          text="Tell us the occasion. We will handle the magic."
          as="h2"
          className="mt-6 font-display text-4xl font-medium leading-[1.08] tracking-tight text-cream sm:text-5xl"
        />
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/70">
          A short form, a call within 24 hours, and a celebration plan with your name on it.
          That is how every Wedlock story has ever begun.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href="/plan-your-celebration" variant="gold" size="lg">
            Plan Your Celebration
          </MagneticButton>
          <MagneticButton href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} variant="outline-light" size="lg">
            {siteConfig.phone}
          </MagneticButton>
        </div>
        <p className="mt-10 text-[11px] font-bold uppercase tracking-[0.35em] text-cream/40">
          {siteConfig.process}
        </p>
      </div>
    </section>
  );
}
