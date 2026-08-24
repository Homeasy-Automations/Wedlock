'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Instagram, Facebook, Youtube, ArrowUpRight } from 'lucide-react';
import { celebrations } from '@/data/celebrations';

const quickLinks = [
  { label: 'Events', href: '/events' },
  { label: 'Services', href: '/services' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Journal', href: '/journal' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] flex flex-col bg-ink text-cream"
          role="dialog"
          aria-modal="true"
        >
          <div className="container-x flex items-center justify-between py-5">
            <span className="font-sacramento text-3xl text-cream">
              Wedlock<span className="text-gold">.</span>
            </span>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="container-x flex-1 overflow-y-auto pb-10 no-scrollbar">
            <p className="font-allura text-3xl text-gold">What are you celebrating?</p>

            <div className="mt-6 space-y-1">
              {celebrations.map((c, i) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={c.href}
                    onClick={onClose}
                    className="group flex items-center gap-4 border-b border-cream/10 py-4"
                  >
                    <span className="font-display text-sm" style={{ color: c.accent }}>
                      {c.index}
                    </span>
                    <span className="flex-1 font-display text-2xl font-medium">{c.name}</span>
                    <ArrowUpRight className="h-5 w-5 text-cream/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.45 }}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-3"
            >
              {quickLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={onClose}
                  className="text-sm font-semibold uppercase tracking-[0.18em] text-cream/70 transition-colors hover:text-gold"
                >
                  {l.label}
                </Link>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.45 }}
              className="mt-10"
            >
              <Link
                href="/plan-your-celebration"
                onClick={onClose}
                className="flex w-full items-center justify-center rounded-full bg-gold px-6 py-4 text-sm font-bold tracking-wide text-ink"
              >
                Plan Your Celebration
              </Link>
              <p className="mt-5 text-center text-[11px] uppercase tracking-[0.3em] text-cream/40">
                Plan · Design · Produce · Execute
              </p>
              <div className="mt-6 flex items-center justify-center gap-4 text-cream/60">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gold">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-gold">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-gold">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
