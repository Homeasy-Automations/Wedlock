'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Send } from 'lucide-react';
import type { EnquiryResponse } from '@/types/enquiry';

export default function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState<EnquiryResponse | null>(null);

  const set = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setErrors({});
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, source: 'contact' }),
      });
      const json: EnquiryResponse = await res.json();
      if (json.ok) {
        setDone(json);
      } else {
        setErrors(json.errors ?? { message: json.message ?? 'Please review the form.' });
      }
    } catch {
      setErrors({ message: 'Something went wrong — please email hello@wedlock.in directly.' });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="rounded-[2rem] border border-ink/10 bg-white/60 p-7 sm:p-9">
      <AnimatePresence mode="wait">
        {done?.ok ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-8 text-center"
          >
            <p className="font-sacramento text-5xl text-gold">Thank you!</p>
            <h3 className="mt-3 font-display text-2xl font-medium text-ink">Message received.</h3>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ink/60">
              Reference <span className="font-semibold text-ink">№ {done.reference}</span> — we will
              reply within one working day, usually much faster.
            </p>
          </motion.div>
        ) : (
          <motion.form key="form" exit={{ opacity: 0, y: -12 }} onSubmit={submit} noValidate>
            <p className="font-allura text-3xl text-gold">Say hello</p>
            <h3 className="mt-2 font-display text-2xl font-medium text-ink">Quick enquiry</h3>
            <div className="mt-6 space-y-5">
              <div>
                <label htmlFor="c-name" className="input-label">Name *</label>
                <input id="c-name" className="input" value={values.name} onChange={set('name')} placeholder="Full name" />
                {errors.name && <p className="input-error">{errors.name}</p>}
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-email" className="input-label">Email *</label>
                  <input id="c-email" type="email" className="input" value={values.email} onChange={set('email')} placeholder="you@example.com" />
                  {errors.email && <p className="input-error">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="c-phone" className="input-label">Phone *</label>
                  <input id="c-phone" type="tel" className="input" value={values.phone} onChange={set('phone')} placeholder="+91 98XXX XXXXX" />
                  {errors.phone && <p className="input-error">{errors.phone}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="c-message" className="input-label">What are you celebrating?</label>
                <textarea
                  id="c-message"
                  rows={4}
                  className="input resize-none"
                  value={values.message}
                  onChange={set('message')}
                  placeholder="A wedding in Udaipur this winter, roughly 300 guests…"
                />
                {errors.message && <p className="input-error">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-ink px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-cream transition-colors hover:bg-espresso disabled:opacity-60"
              >
                {sending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Send message <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
