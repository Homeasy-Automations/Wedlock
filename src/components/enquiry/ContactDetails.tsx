'use client';

import { cn } from '@/lib/utils';

export interface ContactDetailsValues {
  name: string;
  email: string;
  phone: string;
}

interface ContactDetailsProps {
  values: ContactDetailsValues;
  errors: Record<string, string>;
  onChange: (patch: Partial<ContactDetailsValues>) => void;
}

export default function ContactDetails({ values, errors, onChange }: ContactDetailsProps) {
  return (
    <div>
      <p className="font-allura text-3xl leading-none text-gold sm:text-4xl">Last step, we promise</p>
      <h2 className="mt-3 font-display text-2xl font-medium text-ink sm:text-3xl">
        Where do we send the celebration plan?
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="input-label">
            Your name <span className="text-gold">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Full name"
            value={values.name}
            onChange={(e) => onChange({ name: e.target.value })}
            className={cn('input', errors.name && 'border-burgundy')}
          />
          {errors.name && <p className="input-error">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="input-label">
            Email <span className="text-gold">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={values.email}
            onChange={(e) => onChange({ email: e.target.value })}
            className={cn('input', errors.email && 'border-burgundy')}
          />
          {errors.email && <p className="input-error">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="input-label">
            Phone / WhatsApp <span className="text-gold">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 98XXX XXXXX"
            value={values.phone}
            onChange={(e) => onChange({ phone: e.target.value })}
            className={cn('input', errors.phone && 'border-burgundy')}
          />
          {errors.phone && <p className="input-error">{errors.phone}</p>}
        </div>
      </div>

      <p className="mt-8 rounded-xl border border-gold/30 bg-gold/10 px-5 py-4 text-xs leading-relaxed text-ink/70">
        A celebration director — a human, not a bot — will call or WhatsApp you within 24 hours.
        Your details stay with Wedlock and are never shared with vendors without your consent.
      </p>
    </div>
  );
}
