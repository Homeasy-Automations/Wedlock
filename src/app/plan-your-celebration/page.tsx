import type { Metadata } from 'next';
import { Suspense } from 'react';
import { buildMetadata } from '@/lib/seo';
import CelebrationForm from '@/components/enquiry/CelebrationForm';
import AnimatedText from '@/components/ui/AnimatedText';

export const metadata: Metadata = buildMetadata({
  title: 'Plan Your Celebration',
  description:
    'Tell Wedlock what you are celebrating — occasion, city, guests and dreams — and a celebration director will respond within 24 hours with a plan.',
  path: '/plan-your-celebration',
});

interface PlanPageProps {
  searchParams?: { occasion?: string; service?: string; city?: string };
}

function PlanIntro() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="font-sacramento text-5xl leading-tight text-gold">What are you celebrating?</p>
      <AnimatedText
        text="Three small steps to a celebration plan."
        as="h1"
        delay={0.2}
        className="mt-5 font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl"
      />
      <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-ink/60 sm:text-base">
        No obligation, no brochures — just a thoughtful conversation with a celebration director
        who has done this 650 times.
      </p>
    </div>
  );
}

export default function PlanYourCelebrationPage({ searchParams }: PlanPageProps) {
  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-36 sm:pb-28 sm:pt-44">
        <span
          aria-hidden
          className="pointer-events-none absolute -right-16 bottom-0 select-none font-sacramento text-[18vw] leading-none text-gold/[0.06]"
        >
          celebrate
        </span>
        <div className="container-x relative">
          <PlanIntro />
          <div className="mx-auto mt-14 max-w-3xl rounded-[2rem] border border-ink/10 bg-base p-6 shadow-[0_40px_90px_-50px_rgba(42,33,28,0.5)] sm:p-10 lg:p-12">
            <Suspense>
              <CelebrationForm
                initialOccasion={searchParams?.occasion}
                initialService={searchParams?.service}
                initialCity={searchParams?.city}
              />
            </Suspense>
          </div>
          <p className="mt-10 text-center text-[11px] font-bold uppercase tracking-[0.35em] text-ink/40">
            Plan · Design · Produce · Execute
          </p>
        </div>
      </section>
    </>
  );
}
