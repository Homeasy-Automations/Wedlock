import Link from 'next/link';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'ink' | 'light' | 'outline' | 'outline-light' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  href?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  className?: string;
  disabled?: boolean;
  external?: boolean;
  children: React.ReactNode;
}

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold tracking-wide transition-all duration-300 disabled:pointer-events-none disabled:opacity-50';

const variants: Record<Variant, string> = {
  primary: 'bg-gold text-ink hover:bg-ink hover:text-cream',
  ink: 'bg-ink text-cream hover:bg-espresso',
  light: 'bg-cream text-ink hover:bg-gold hover:text-ink',
  outline: 'border border-ink/30 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-cream',
  'outline-light':
    'border border-cream/50 bg-transparent text-cream hover:border-cream hover:bg-cream hover:text-ink',
  ghost: 'bg-transparent text-ink underline-offset-4 hover:underline',
};

const sizes: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-xs',
  md: 'px-7 py-3.5 text-sm',
  lg: 'px-9 py-4 text-base',
};

export default function Button({
  href,
  type = 'button',
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  disabled,
  external,
  children,
}: ButtonProps) {
  const cls = cn(base, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
