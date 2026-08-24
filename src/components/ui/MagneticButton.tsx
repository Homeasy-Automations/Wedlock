'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useSpring, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'gold' | 'ink' | 'light' | 'cat' | 'outline-light';
  size?: 'sm' | 'md' | 'lg';
  strength?: number;
  className?: string;
  children: React.ReactNode;
}

const variants = {
  gold: 'bg-gold text-ink hover:bg-cream',
  ink: 'bg-ink text-cream hover:bg-espresso',
  light: 'bg-cream text-ink hover:bg-gold',
  cat: 'btn-cat text-base hover:brightness-110',
  'outline-light': 'border border-cream/50 text-cream hover:bg-cream hover:text-ink',
};

const sizes = {
  sm: 'px-5 py-2.5 text-xs',
  md: 'px-8 py-4 text-sm',
  lg: 'px-10 py-[1.15rem] text-base',
};

/** Cursor-follow magnetic wrapper for primary CTAs. */
export default function MagneticButton({
  href,
  onClick,
  type = 'button',
  variant = 'gold',
  size = 'md',
  strength = 0.28,
  className,
  children,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useSpring(0, { stiffness: 180, damping: 14, mass: 0.25 });
  const y = useSpring(0, { stiffness: 180, damping: 14, mass: 0.25 });

  const handleMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * (strength * 1.4));
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const cls = cn(
    'relative z-10 inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full font-semibold tracking-wide transition-colors duration-300',
    variants[variant],
    sizes[size],
    className,
  );

  const inner = href ? (
    <Link href={href} className={cls}>
      {children}
    </Link>
  ) : (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="inline-block"
    >
      {inner}
    </motion.div>
  );
}
