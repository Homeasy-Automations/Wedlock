'use client';

import { cn } from '@/lib/utils';

export interface EventDetailsValues {
  eventDate: string;
  city: string;
  guests: string;
  budget: string;
  message: string;
}

interface EventDetailsProps {
  values: EventDetailsValues;
  errors: Record<string, string>;
  onChange: (patch: Partial<EventDetailsValues>) => void;
}

const budgets = [
  'Under ₹10 lakh',
  '₹10 – 30 lakh',
  '₹30 lakh – 1 crore',
  '₹1 crore +',
  'Prefer to discuss',
];

const guestShortcuts = [50, 100, 200, 400, 800];

export default function EventDetails({ values, errors, onChange }: EventDetailsProps) {
  const today = new Date().toISOString().split('T')[0];

  return (
    <div>
      <p className="font-allura text-3xl leading-none text-gold sm:text-4xl">The shape of the day</p>
      <h2 className="mt-3 font-display text-2xl font-medium text-ink sm:text-3xl">Tell us about your celebration</h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="eventDate" className="input-label">
            Tentative date
          </label>
          <input
            id="eventDate"
            type="date"
            min={today}
            value={values.eventDate}
            onChange={(e) => onChange({ eventDate: e.target.value })}
            className={cn('input', errors.eventDate && 'border-burgundy')}
          />
          {errors.eventDate && <p className="input-error">{errors.eventDate}</p>}
        </div>

        <div>
          <label htmlFor="city" className="input-label">
            City / destination <span className="text-gold">*</span>
          </label>
          <input
            id="city"
            type="text"
            placeholder="Kolkata, Udaipur, Tuscany…"
            value={values.city}
            onChange={(e) => onChange({ city: e.target.value })}
            className={cn('input', errors.city && 'border-burgundy')}
          />
          {errors.city && <p className="input-error">{errors.city}</p>}
        </div>

        <div>
          <label htmlFor="guests" className="input-label">
            Approximate guests
          </label>
          <input
            id="guests"
            type="number"
            min={1}
            max={200000}
            placeholder="e.g. 200"
            value={values.guests}
            onChange={(e) => onChange({ guests: e.target.value })}
            className={cn('input', errors.guests && 'border-burgundy')}
          />
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {guestShortcuts.map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => onChange({ guests: String(g) })}
                className={cn(
                  'rounded-full border px-3 py-1 text-[11px] font-semibold transition-colors',
                  values.guests === String(g)
                    ? 'border-ink bg-ink text-cream'
                    : 'border-ink/15 text-ink/55 hover:border-ink/40 hover:text-ink',
                )}
              >
                {g}
              </button>
            ))}
          </div>
          {errors.guests && <p className="input-error">{errors.guests}</p>}
        </div>

        <div>
          <label htmlFor="budget" className="input-label">
            Indicative budget
          </label>
          <select
            id="budget"
            value={values.budget}
            onChange={(e) => onChange({ budget: e.target.value })}
            className="input"
          >
            <option value="">Select a range</option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="input-label">
          Anything we should know? <span className="font-normal text-ink/40">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={4}
          maxLength={1200}
          placeholder="The occasion, the mood, the must-haves, the person it is all for…"
          value={values.message}
          onChange={(e) => onChange({ message: e.target.value })}
          className="input resize-none"
        />
      </div>
    </div>
  );
}
