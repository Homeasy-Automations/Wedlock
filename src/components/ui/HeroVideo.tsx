interface HeroVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

/**
 * Full-bleed autoplay/loop/muted background video used inside hero sections.
 * Drop-in replacement for the old `<Image fill .../>` background layer —
 * ken-burns / parallax wrappers around it keep working unchanged since this
 * just fills its parent like the image did.
 */
export default function HeroVideo({ src, poster, className }: HeroVideoProps) {
  return (
    <video
      className={className ?? 'h-full w-full object-cover'}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
