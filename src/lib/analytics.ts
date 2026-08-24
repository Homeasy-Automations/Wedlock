type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

/**
 * Lightweight analytics shim — pushes to a dataLayer when present
 * (GTM/GA4 ready) and logs locally during development.
 */
export function trackEvent(event: string, payload: AnalyticsPayload = {}) {
  if (typeof window === 'undefined') return;
  const win = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
  if (Array.isArray(win.dataLayer)) {
    win.dataLayer.push({ event, ...payload });
  }
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.info(`[analytics] ${event}`, payload);
  }
}

export const AnalyticsEvents = {
  EnquiryStarted: 'enquiry_started',
  EnquiryStep: 'enquiry_step',
  EnquirySubmitted: 'enquiry_submitted',
  CategoryView: 'category_view',
  DestinationView: 'destination_view',
} as const;
