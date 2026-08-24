'use client';

import { motion } from 'framer-motion';
import ImageReveal from '@/components/ui/ImageReveal';

const patterns = [
  'sm:col-span-2 sm:row-span-2 aspect-[4/3] sm:aspect-auto',
  'aspect-[4/3] sm:aspect-auto',
  'aspect-[4/3] sm:aspect-auto sm:row-span-2',
  'aspect-[4/3] sm:aspect-auto',
  'aspect-[4/3] sm:aspect-auto sm:col-span-2',
];

/** Asymmetric image-card gallery for event case studies. */
export default function EventGallery({ images, title }: { images: string[]; title: string }) {
  return (
    <div className="grid auto-rows-[180px] gap-4 sm:grid-cols-4 sm:auto-rows-[220px]">
      {images.map((src, i) => {
        const span = patterns[i % patterns.length];
        return (
          <motion.figure
            key={src}
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-6% 0px' }}
            transition={{ delay: (i % 4) * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={span}
          >
            <ImageReveal
              src={src}
              alt={`${title} — gallery image ${i + 1}`}
              className="h-full w-full rounded-2xl"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </motion.figure>
        );
      })}
    </div>
  );
}
