import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';
import { buildMetadata, siteConfig } from '@/lib/seo';
import AnimatedText from '@/components/ui/AnimatedText';
import ContactForm from '@/components/enquiry/ContactForm';

export const metadata: Metadata = buildMetadata({
  title: 'Contact — Talk to a Celebration Director',
  description:
    'Reach the Wedlock celebration desk — Patna HQ, with teams in Ranchi and Delhi. Call, WhatsApp, email or send a quick enquiry.',
  path: '/contact',
});

const studios = [
  { city: 'Patna', role: 'Headquarters', detail: siteConfig.address },
  { city: 'Ranchi', role: 'Regional Office', detail: 'By appointment' },
  { city: 'New Delhi', role: 'North Region Studio', detail: 'By appointment' },
];

const served = ['Patna', 'Ranchi', 'New Delhi', 'Udaipur', 'Jaipur', 'Bengaluru', 'Goa', 'Bali', 'Dubai'];

const socials = [
  { label: 'Instagram', href: siteConfig.socials.instagram, icon: Instagram },
  { label: 'Facebook', href: siteConfig.socials.facebook, icon: Facebook },
  { label: 'YouTube', href: siteConfig.socials.youtube, icon: Youtube },
];

export default function ContactPage() {
  return (
    <>
      <section className="pb-20 pt-36 sm:pb-28 sm:pt-44">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="font-allura text-4xl leading-none text-gold sm:text-5xl">Let’s talk</p>
            <AnimatedText
              text="A conversation is where every celebration begins."
              as="h1"
              delay={0.2}
              className="mt-5 font-display text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-6xl"
            />
            <p className="mt-5 text-base leading-relaxed text-ink/65 sm:text-lg">
              Call, WhatsApp, write — or simply send the quick enquiry and we will call you. Either
              way, a human celebration director answers.
            </p>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            {/* Left: details */}
            <div className="space-y-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="group rounded-2xl border border-ink/10 bg-white/50 p-6 transition-colors hover:border-gold"
                >
                  <Phone className="h-5 w-5 text-gold" />
                  <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.2em] text-ink/45">Call us</p>
                  <p className="mt-1 font-semibold text-ink group-hover:text-espresso">{siteConfig.phones.join(' · ')}</p>
                </a>
                <a
                  href="https://wa.me/917061528402"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-ink/10 bg-white/50 p-6 transition-colors hover:border-gold"
                >
                  <MessageCircle className="h-5 w-5 text-gold" />
                  <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.2em] text-ink/45">WhatsApp</p>
                  <p className="mt-1 font-semibold text-ink group-hover:text-espresso">Chat with the desk</p>
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group rounded-2xl border border-ink/10 bg-white/50 p-6 transition-colors hover:border-gold"
                >
                  <Mail className="h-5 w-5 text-gold" />
                  <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.2em] text-ink/45">Email</p>
                  <p className="mt-1 font-semibold text-ink group-hover:text-espresso">{siteConfig.email}</p>
                </a>
                <div className="rounded-2xl border border-ink/10 bg-white/50 p-6">
                  <Clock className="h-5 w-5 text-gold" />
                  <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.2em] text-ink/45">Desk hours</p>
                  <p className="mt-1 font-semibold text-ink">Mon – Sat, 10 am – 8 pm IST</p>
                </div>
              </div>

              {/* Studios */}
              <div className="rounded-2xl border border-ink/10 bg-white/50 p-6 sm:p-7">
                <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-ink/45">
                  <MapPin className="h-4 w-4 text-gold" /> Our studios
                </p>
                <ul className="mt-5 space-y-4">
                  {studios.map((s) => (
                    <li key={s.city} className="flex items-baseline justify-between gap-4 border-b border-ink/8 pb-4 last:border-0 last:pb-0">
                      <div>
                        <p className="font-semibold text-ink">{s.city}</p>
                        <p className="text-xs text-ink/50">{s.role}</p>
                      </div>
                      <p className="text-right text-xs leading-relaxed text-ink/55">{s.detail}</p>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-ink/45">Cities served</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {served.map((c) => (
                    <span key={c} className="chip">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink/60 transition-colors hover:border-gold hover:text-gold"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
                <p className="ml-1 text-xs text-ink/45">Fresh celebrations, weekly.</p>
              </div>
            </div>

            {/* Right: map panel + form */}
            <div className="space-y-6">
              {/* Map panel (styled, offline-safe) */}
              <div className="relative overflow-hidden rounded-[2rem] border border-ink/10 bg-ink p-7 text-cream">
                <svg viewBox="0 0 560 220" className="absolute inset-0 h-full w-full opacity-25" aria-hidden>
                  <defs>
                    <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
                      <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#C9A24B" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="560" height="220" fill="url(#grid)" />
                </svg>
                <div className="relative">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cream/50">Find us</p>
                  <p className="mt-2 font-display text-2xl font-medium">Patna HQ & Indian network</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {['Patna', 'Ranchi', 'New Delhi'].map((c, i) => (
                      <span key={c} className="inline-flex items-center gap-1.5 rounded-full border border-cream/20 px-3 py-1.5 text-xs text-cream/80">
                        <span
                          className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold"
                          style={{ animationDelay: `${i * 0.4}s` }}
                          aria-hidden
                        />
                        {c}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 text-xs leading-relaxed text-cream/55">
                    25.5941° N, 85.1376° E — drop by for a cup of chai and a very long moodboard.
                  </p>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
