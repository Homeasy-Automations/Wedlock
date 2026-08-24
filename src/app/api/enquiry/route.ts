import { NextResponse } from 'next/server';
import { validateEnquiry } from '@/lib/validations';
import type { EnquiryResponse } from '@/types/enquiry';

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    const res: EnquiryResponse = { ok: false, message: 'Invalid request body.' };
    return NextResponse.json(res, { status: 400 });
  }

  const { ok, errors, data } = validateEnquiry(body);

  if (!ok) {
    const res: EnquiryResponse = {
      ok: false,
      message: 'Please fix the highlighted fields and try again.',
      errors,
    };
    return NextResponse.json(res, { status: 422 });
  }

  // In production: persist to CRM / send notification email here.
  // The enquiry is intentionally logged server-side for the demo build.
  console.info('[wedlock/enquiry] received:', {
    occasion: data.occasion,
    subService: data.subService,
    city: data.city,
    guests: data.guests,
    budget: data.budget,
    name: data.name,
    email: data.email,
    phone: data.phone,
    eventDate: data.eventDate,
    source: data.source,
  });

  const reference = `WED-${new Date().getFullYear()}-${Math.random()
    .toString(36)
    .slice(2, 7)
    .toUpperCase()}`;

  const res: EnquiryResponse = {
    ok: true,
    reference,
    message:
      data.source === 'contact'
        ? 'Thank you — the celebration desk will reply within one working day.'
        : 'Thank you! A celebration director will reach out within 24 hours.',
  };
  return NextResponse.json(res, { status: 200 });
}

export async function GET() {
  return NextResponse.json(
    { ok: false, message: 'Use POST to submit an enquiry.' },
    { status: 405 },
  );
}
