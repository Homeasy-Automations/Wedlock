import { Quote } from 'lucide-react';
import type { Testimonial } from '@/data/testimonials';

export default function EventTestimonial({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="rounded-[2rem] bg-ink px-8 py-12 text-center sm:px-16 sm:py-16">
      <Quote className="mx-auto h-8 w-8 rotate-180 text-gold/50" aria-hidden />
      <p className="mx-auto mt-6 max-w-3xl font-dancing text-3xl leading-snug text-cream sm:text-4xl">
        “{testimonial.quote}”
      </p>
      <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-gold">{testimonial.name}</p>
      <p className="mt-1 text-sm text-cream/60">
        {testimonial.detail} · {testimonial.location}
      </p>
    </div>
  );
}
