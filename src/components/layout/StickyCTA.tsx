'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

/** Persistent mobile "Plan Your Celebration" button. */
export default function StickyCTA() {
  const pathname = usePathname();
  const hidden = pathname.startsWith('/plan-your-celebration') || pathname.startsWith('/contact');

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ delay: 1.2, type: 'spring', stiffness: 160, damping: 18 }}
          className="fixed inset-x-4 bottom-4 z-40 lg:hidden"
        >
          <Link
            href="/plan-your-celebration"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-ink py-4 text-sm font-bold tracking-wide text-cream shadow-[0_18px_40px_-12px_rgba(42,33,28,0.6)]"
          >
            <Sparkles className="h-4 w-4 text-gold" />
            Plan Your Celebration
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
