export const OCCASIONS = [
  'weddings',
  'birthdays',
  'anniversaries',
  'engagements',
  'family-private',
] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[0-9][0-9\s().-]{7,16}$/;

export interface ValidationResult {
  ok: boolean;
  errors: Record<string, string>;
  data: {
    occasion: string;
    subService: string;
    eventDate: string;
    city: string;
    guests?: number;
    budget: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    source: string;
  };
}

function s(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

export function isValidOccasion(value: string) {
  return (OCCASIONS as readonly string[]).includes(value);
}

export function validateEnquiry(input: unknown): ValidationResult {
  const raw = (input ?? {}) as Record<string, unknown>;
  const data = {
    occasion: s(raw.occasion).toLowerCase(),
    subService: s(raw.subService).slice(0, 120),
    eventDate: s(raw.eventDate),
    city: s(raw.city),
    guests:
      typeof raw.guests === 'number'
        ? raw.guests
        : s(raw.guests)
          ? Number(s(raw.guests))
          : undefined,
    budget: s(raw.budget).slice(0, 80),
    name: s(raw.name),
    email: s(raw.email),
    phone: s(raw.phone),
    message: s(raw.message).slice(0, 1200),
    source: s(raw.source) || 'plan',
  };

  const errors: Record<string, string> = {};
  const isContact = data.source === 'contact';

  if (data.occasion) {
    if (!isValidOccasion(data.occasion)) errors.occasion = 'Please choose a valid occasion.';
  } else if (!isContact) {
    errors.occasion = 'Please choose an occasion.';
  }

  if (!data.name || data.name.length < 2) errors.name = 'Please share your full name.';
  if (!EMAIL_RE.test(data.email)) errors.email = 'Please enter a valid email address.';
  if (!PHONE_RE.test(data.phone)) errors.phone = 'Please enter a valid phone number.';

  if (!isContact && data.city.length < 2) errors.city = 'Which city are you celebrating in?';

  if (data.guests !== undefined) {
    if (!Number.isFinite(data.guests) || data.guests < 1 || data.guests > 200000) {
      errors.guests = 'Guest count looks off — between 1 and 2,00,000.';
    }
  }

  if (data.eventDate) {
    const d = new Date(data.eventDate);
    if (Number.isNaN(d.getTime())) {
      errors.eventDate = 'That date does not look right.';
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (d < today) errors.eventDate = 'The date should be in the future.';
    }
  }

  return { ok: Object.keys(errors).length === 0, errors, data };
}
