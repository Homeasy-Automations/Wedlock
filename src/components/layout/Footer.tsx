import Link from 'next/link';
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { celebrations } from '@/data/celebrations';
import { destinations } from '@/data/destinations';
import { siteConfig } from '@/lib/seo';

const explore = [
  { label: 'All Celebrations', href: '/celebrations' },
  { label: 'Events Portfolio', href: '/events' },
  { label: 'Services', href: '/services' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Journal', href: '/journal' },
  { label: 'About Wedlock', href: '/about' },
  { label: 'Plan Your Celebration', href: '/plan-your-celebration' },
  { label: 'Contact', href: '/contact' },
];

const socials = [
  { label: 'Instagram', href: siteConfig.socials.instagram, icon: Instagram },
  { label: 'Facebook', href: siteConfig.socials.facebook, icon: Facebook },
  { label: 'YouTube', href: siteConfig.socials.youtube, icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="grain relative bg-ink text-cream">
      {/* Destination weddings callout */}
      <div className="container-x border-b border-cream/10 py-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-dancing text-3xl text-gold">Destination Weddings</p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-cream/60">
              Palaces, vineyards, backwaters and beaches — our destination desk has produced
              celebrations in 40+ cities and 14 countries. Where should your story unfold?
            </p>
          </div>
          <Link
            href="/destinations"
            className="group inline-flex items-center gap-2 rounded-full border border-gold/60 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            Explore destinations
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* Sitemap */}
      <div className="container-x grid gap-12 py-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="font-sacramento text-5xl text-cream">
            Wedlock<span className="text-gold">.</span>
          </p>
          <p className="mt-4 font-beau text-2xl text-cream/85">{siteConfig.tagline}</p>
          <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-cream/45">
            {siteConfig.process}
          </p>
          <div className="mt-7 flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Celebrations">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-cream/40">Celebrations</p>
          <ul className="mt-5 space-y-2.5">
            {celebrations.map((c) => (
              <li key={c.id}>
                <Link
                  href={c.href}
                  className="group inline-flex items-center gap-2.5 text-sm text-cream/75 transition-colors hover:text-gold"
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: c.accent }} aria-hidden />
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Explore">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-cream/40">Explore</p>
          <ul className="mt-5 space-y-2.5">
            {explore.map((l) => (
              <li key={l.href + l.label}>
                <Link href={l.href} className="text-sm text-cream/75 transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Destinations">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-cream/40">Destinations</p>
          <ul className="mt-5 space-y-2.5">
            {destinations.slice(0, 6).map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/destinations/${d.slug}`}
                  className="text-sm text-cream/75 transition-colors hover:text-gold"
                >
                  {d.name}, {d.country}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/destinations" className="text-sm font-semibold text-gold hover:underline">
                View all destinations →
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Contact strip */}
      <div className="container-x flex flex-col gap-4 border-t border-cream/10 py-6 text-sm text-cream/60 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gold" /> {siteConfig.cities.join(' · ')}
          </span>
          <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 hover:text-gold">
            <Phone className="h-4 w-4 text-gold" /> {siteConfig.phone}
          </a>
          <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 hover:text-gold">
            <Mail className="h-4 w-4 text-gold" /> {siteConfig.email}
          </a>
        </div>
        <p className="font-dancing text-2xl text-gold/90">{siteConfig.prompt}</p>
      </div>

      {/* Legal */}
      <div className="container-x flex flex-col gap-3 border-t border-cream/10 py-6 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Wedlock Wedding Planner. Crafted with care in Patna.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="transition-colors hover:text-gold">
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-gold">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
