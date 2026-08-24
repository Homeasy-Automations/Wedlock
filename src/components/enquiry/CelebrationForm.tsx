'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { validateEnquiry } from '@/lib/validations';
import { AnalyticsEvents, trackEvent } from '@/lib/analytics';
import { occasionOptions } from '@/data/celebrations';
import type { EnquiryPayload, EnquiryResponse } from '@/types/enquiry';
import OccasionSelector from './OccasionSelector';
import EventDetails, { type EventDetailsValues } from './EventDetails';
import ContactDetails, { type ContactDetailsValues } from './ContactDetails';
import SuccessState from './SuccessState';

interface CelebrationFormProps {
  initialOccasion?: string;
  initialService?: string;
  initialCity?: string;
}

const steps = [
  { id: 'occasion', label: 'The Occasion' },
  { id: 'details', label: 'The Details' },
  { id: 'contact', label: 'The Contact' },
];

const stepFields: Record<number, string[]> = {
  0: ['occasion'],
  1: ['city', 'eventDate', 'guests', 'message'],
  2: ['name', 'email', 'phone'],
};

export default function CelebrationForm({
  initialOccasion = '',
  initialService = '',
  initialCity = '',
}: CelebrationFormProps) {
  const validInitial = occasionOptions.some((o) => o.id === initialOccasion) ? initialOccasion : '';
  const validSub = occasionOptions
    .find((o) => o.id === validInitial)
    ?.subServices.some((s) => s.slug === initialService)
    ? initialService
    : '';

  const [step, setStep] = useState(0);
  const [occasion, setOccasion] = useState(validInitial);
  const [subService, setSubService] = useState(validSub);
  const [details, setDetails] = useState<EventDetailsValues>({
    eventDate: '',
    city: initialCity,
    guests: '',
    budget: '',
    message: '',
  });
  const [contact, setContact] = useState<ContactDetailsValues>({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<EnquiryResponse | null>(null);
  const [serverError, setServerError] = useState('');

  const payload: EnquiryPayload = useMemo(
    () => ({
      occasion,
      subService: subService || undefined,
      eventDate: details.eventDate || undefined,
      city: details.city,
      guests: details.guests ? Number(details.guests) : undefined,
      budget: details.budget || undefined,
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      message: details.message || undefined,
      source: 'plan',
    }),
    [occasion, subService, details, contact],
  );

  const stepErrorKeys = (i: number, all: Record<string, string>) =>
    Object.fromEntries(Object.entries(all).filter(([k]) => stepFields[i].includes(k)));

  const validateStep = (i: number) => {
    const { errors: all } = validateEnquiry(payload);
    const scoped = stepErrorKeys(i, all);
    setErrors((prev) => {
      const cleaned = { ...prev };
      stepFields[i].forEach((k) => delete cleaned[k]);
      return { ...cleaned, ...scoped };
    });
    return Object.keys(scoped).length === 0;
  };

  const goNext = () => {
    if (!validateStep(step)) return;
    if (step === 0) trackEvent(AnalyticsEvents.EnquiryStarted, { occasion });
    trackEvent(AnalyticsEvents.EnquiryStep, { step: step + 1 });
    setStep((s) => Math.min(2, s + 1));
  };

  const goBack = () => setStep((s) => Math.max(0, s - 1));

  const submit = async () => {
    const { ok, errors: all } = validateEnquiry(payload);
    if (!ok) {
      setErrors(all);
      for (const [i, fields] of Object.entries(stepFields)) {
        if (fields.some((f) => all[f])) {
          setStep(Number(i));
          break;
        }
      }
      return;
    }
    setSubmitting(true);
    setServerError('');
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json: EnquiryResponse = await res.json();
      if (json.ok) {
        trackEvent(AnalyticsEvents.EnquirySubmitted, { occasion, reference: json.reference });
        setResult(json);
        setStep(3);
      } else {
        if (json.errors) {
          setErrors(json.errors);
          for (const [i, fields] of Object.entries(stepFields)) {
            if (fields.some((f) => json.errors?.[f])) {
              setStep(Number(i));
              break;
            }
          }
        }
        setServerError(json.message ?? 'Something went wrong. Please try again.');
      }
    } catch {
      setServerError('Our celebration desk seems offline for a moment. Please try again — or call us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {step < 3 && (
        <div className="mb-10">
          <div className="flex items-center justify-between">
            {steps.map((s, i) => (
              <div key={s.id} className="flex flex-1 items-center last:flex-none">
                <button
                  type="button"
                  onClick={() => i < step && setStep(i)}
                  className={cn(
                    'flex items-center gap-3 text-left',
                    i < step && 'cursor-pointer',
                  )}
                >
                  <span
                    className={cn(
                      'flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-bold transition-all duration-300',
                      i < step
                        ? 'border-gold bg-gold text-ink'
                        : i === step
                          ? 'border-ink bg-ink text-cream'
                          : 'border-ink/20 text-ink/40',
                    )}
                  >
                    {i + 1}
                  </span>
                  <span
                    className={cn(
                      'hidden text-[11px] font-bold uppercase tracking-[0.16em] sm:block',
                      i === step ? 'text-ink' : 'text-ink/40',
                    )}
                  >
                    {s.label}
                  </span>
                </button>
                {i < steps.length - 1 && (
                  <span
                    className={cn(
                      'mx-3 h-px flex-1 transition-colors duration-500 sm:mx-5',
                      i < step ? 'bg-gold' : 'bg-ink/15',
                    )}
                    aria-hidden
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {step === 0 && (
            <OccasionSelector
              selected={occasion}
              subService={subService}
              error={errors.occasion}
              onSelect={(o) => {
                setOccasion(o);
                setSubService('');
                setErrors((p) => ({ ...p, occasion: '' }));
              }}
              onSelectSub={setSubService}
            />
          )}
          {step === 1 && (
            <EventDetails
              values={details}
              errors={errors}
              onChange={(patch) => setDetails((d) => ({ ...d, ...patch }))}
            />
          )}
          {step === 2 && (
            <ContactDetails
              values={contact}
              errors={errors}
              onChange={(patch) => setContact((c) => ({ ...c, ...patch }))}
            />
          )}
          {step === 3 && result?.reference && (
            <SuccessState reference={result.reference} payload={payload} />
          )}
        </motion.div>
      </AnimatePresence>

      {step < 3 && (
        <div className="mt-10 flex items-center justify-between gap-4 border-t border-ink/10 pt-7">
          <button
            type="button"
            onClick={goBack}
            disabled={step === 0}
            className={cn(
              'inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] transition-colors',
              step === 0 ? 'pointer-events-none opacity-0' : 'text-ink/60 hover:text-ink',
            )}
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>

          {serverError && <p className="input-error text-center">{serverError}</p>}

          {step < 2 ? (
            <button
              type="button"
              onClick={goNext}
              className="inline-flex items-center gap-2.5 rounded-full bg-ink px-8 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-cream transition-colors hover:bg-espresso"
            >
              Continue <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={submit}
              disabled={submitting}
              className="inline-flex items-center gap-2.5 rounded-full bg-gold px-8 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-ink transition-colors hover:bg-ink hover:text-cream disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                </>
              ) : (
                'Send my enquiry'
              )}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
