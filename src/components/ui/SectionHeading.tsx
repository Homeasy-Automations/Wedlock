import { cn } from '@/lib/utils';
import AnimatedText from './AnimatedText';

interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowScript?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
  scriptFont?: string;
}

export default function SectionHeading({
  eyebrow,
  eyebrowScript,
  title,
  description,
  align = 'left',
  dark,
  className,
  scriptFont = 'font-allura',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrowScript ? (
        <p
          className={cn(
            scriptFont,
            'text-3xl leading-none text-gold sm:text-4xl',
            dark && 'text-gold',
          )}
        >
          {eyebrowScript}
        </p>
      ) : eyebrow ? (
        <p className={cn('eyebrow', dark ? 'text-cream/60' : 'text-ink/55')}>{eyebrow}</p>
      ) : null}
      <AnimatedText
        text={title}
        as="h2"
        className={cn(
          'mt-3 font-display text-4xl font-medium leading-[1.08] tracking-tight text-balance sm:text-5xl',
          dark ? 'text-cream' : 'text-ink',
        )}
      />
      {description ? (
        <p className={cn('mt-4 text-base leading-relaxed sm:text-lg', dark ? 'text-cream/70' : 'text-ink/65')}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
