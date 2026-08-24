'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  delay?: number;
}

/** Scroll-triggered clip-path + scale reveal for imagery across the site. */
export default function ImageReveal({
  src,
  alt,
  className,
  imgClassName,
  sizes = '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw',
  priority,
  delay = 0,
}: ImageRevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={cn('relative overflow-hidden', className)}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={cn('object-cover', imgClassName)} />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ clipPath: 'inset(14% 9% 14% 9%)', opacity: 0.35 }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
      viewport={{ once: true, margin: '-10% 0px -6% 0px' }}
      transition={{ duration: 1.05, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn('relative overflow-hidden', className)}
    >
      <motion.div
        initial={{ scale: 1.18 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: '-10% 0px -6% 0px' }}
        transition={{ duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={cn('object-cover', imgClassName)} />
      </motion.div>
    </motion.div>
  );
}
