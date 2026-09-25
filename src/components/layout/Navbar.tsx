'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

import { ChevronDown, Menu } from 'lucide-react';

import { cn } from '@/lib/utils';

import { celebrations } from '@/data/celebrations';

import MagneticButton from '@/components/ui/MagneticButton';

import MobileMenu from './MobileMenu';

const navLinks = [
  { label: 'Events', href: '/events' },
  { label: 'Services', href: '/services' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Journal', href: '/journal' },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const isDarkHero =
    !scrolled &&
    (pathname === '/' ||
      pathname.startsWith('/celebrations') ||
      pathname.startsWith('/events') ||
      pathname.startsWith('/services') ||
      pathname.startsWith('/destinations'));

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-base/90 py-3 shadow-[0_8px_30px_-18px_rgba(42,33,28,0.35)] backdrop-blur-xl'
            : isDarkHero
              ? 'bg-gradient-to-b from-black/80 via-black/35 to-transparent py-5'
              : 'bg-transparent py-5',
        )}
      >
        <nav className="container-x flex items-center justify-between gap-6">
          <Link
            href="/"
            aria-label="Wedlock — home"
            className="group flex items-baseline gap-1.5"
          >
            <span
              className={cn(
                'font-sacramento text-[2.5rem] leading-none transition-colors duration-500',
                !scrolled
                  ? 'text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] group-hover:text-gold'
                  : 'text-ink group-hover:text-gold',
              )}
            >
              Wedlock
            </span>
            <span
              className={cn(
                'mb-1 inline-block h-2 w-2 rounded-full transition-all duration-500',
                !scrolled
                  ? 'bg-gold shadow-[0_0_12px_rgba(201,162,75,0.9)]'
                  : 'bg-gold shadow-[0_0_8px_rgba(201,162,75,0.6)]',
              )}
              aria-hidden
            />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {/* Celebrations dropdown */}
            <div className="group relative">
              <button
                className={cn(
                  'flex items-center gap-1 rounded-full px-4 py-2 text-[13.5px] font-semibold tracking-wide transition-colors duration-500',
                  isActive('/celebrations')
                    ? 'text-gold font-bold drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]'
                    : !scrolled
                      ? 'text-white hover:text-gold drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]'
                      : 'text-ink/80 hover:text-ink',
                )}
                aria-haspopup="true"
              >
                Celebrations
                <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
              </button>

              <div className="invisible absolute left-1/2 top-full w-[22rem] -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="overflow-hidden rounded-2xl border border-ink/10 bg-base p-2.5 shadow-[0_30px_60px_-20px_rgba(42,33,28,0.4)]">
                  {celebrations.map((c) => (
                    <Link
                      key={c.id}
                      href={c.href}
                      onClick={(e) => e.currentTarget.blur()}
                      className="group/item flex items-center gap-3.5 rounded-xl px-4 py-3 transition-colors hover:bg-cream"
                    >
                      <span
                        className="h-2 w-2 shrink-0 rounded-full"
                        style={{ backgroundColor: c.accent }}
                        aria-hidden
                      />

                      <span className="flex-1">
                        <span className="block text-sm font-semibold text-ink">
                          {c.name}
                        </span>

                        <span className="block text-xs text-ink/50">
                          {c.subServices.length} signature services
                        </span>
                      </span>

                      <span className="text-ink/30 transition-transform duration-300 group-hover/item:translate-x-1">
                        →
                      </span>
                    </Link>
                  ))}

                  <div className="mt-1 border-t border-ink/10 pt-1">
                    <Link
                      href="/celebrations"
                      onClick={(e) => e.currentTarget.blur()}
                      className="block rounded-xl px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-gold transition-colors hover:bg-cream"
                    >
                      All celebrations
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  'rounded-full px-4 py-2 text-[13.5px] font-semibold tracking-wide transition-colors duration-500',
                  isActive(l.href)
                    ? 'text-gold font-bold drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]'
                    : !scrolled
                      ? 'text-white hover:text-gold drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]'
                      : 'text-ink/80 hover:text-ink',
                )}
              >
                {l.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className={cn(
                'rounded-full px-4 py-2 text-[13.5px] font-semibold tracking-wide transition-colors duration-500',
                isActive('/contact')
                  ? 'text-gold font-bold drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]'
                  : !scrolled
                    ? 'text-white hover:text-gold drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]'
                    : 'text-ink/80 hover:text-ink',
              )}
            >
              Contact
            </Link>
          </div>

          <div className="hidden lg:block">
            <MagneticButton
              href="/plan-your-celebration"
              variant={isDarkHero ? 'gold' : 'ink'}
              size="sm"
              className={cn(
                'font-bold transition-all duration-500',
                isDarkHero
                  ? 'shadow-[0_4px_20px_rgba(201,162,75,0.45)] hover:shadow-[0_4px_28px_rgba(201,162,75,0.7)]'
                  : 'shadow-md',
              )}
            >
              Plan Your Celebration
            </MagneticButton>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/plan-your-celebration"
              className={cn(
                'hidden rounded-full px-4 py-2 text-xs font-bold tracking-wide transition-all duration-500 sm:block shadow-md',
                isDarkHero
                  ? 'bg-gold text-ink hover:bg-cream shadow-[0_2px_12px_rgba(201,162,75,0.4)]'
                  : 'bg-ink text-cream hover:bg-espresso',
              )}
            >
              Plan Your Celebration
            </Link>

            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={cn(
                'flex h-11 w-11 items-center justify-center rounded-full backdrop-blur-md transition-all duration-500 shadow-md',
                !scrolled
                  ? 'border border-white/20 bg-black/40 text-white hover:bg-black/60 hover:text-gold'
                  : 'border border-ink/15 bg-base/70 text-ink hover:bg-base',
              )}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}