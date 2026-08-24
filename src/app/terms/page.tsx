import type { Metadata } from 'next';
import { buildMetadata, siteConfig } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Terms & Conditions',
  description: 'The terms governing use of the Wedlock website and engagement of Wedlock celebration-planning services.',
  path: '/terms',
});

const sections = [
  {
    title: '1. About these terms',
    body: [
      'These Terms & Conditions govern your use of wedlock.in (the "Site") and, where relevant, provide the general framework for engaging Wedlock Celebrations Pvt. Ltd. ("Wedlock", "we") for celebration planning and production services.',
      'By using the Site or submitting an enquiry you accept these terms. Specific client engagements are always governed by an individual service agreement signed between you and Wedlock; where that agreement conflicts with this page, the signed agreement prevails.',
    ],
  },
  {
    title: '2. The website and its content',
    body: [
      'All content on the Site — text, design, imagery, animation, and the Wedlock name and tagline "Celebrations. Thoughtfully produced." — is the property of Wedlock or its licensors and is protected by applicable intellectual property law.',
      'Portfolios, event stories and case studies are published with the permission of the families concerned. Names and identifying details may be altered at the family’s request; the productions described are genuine.',
      'You may not reproduce, redistribute or use Site content for commercial purposes without written consent.',
    ],
  },
  {
    title: '3. Enquiries and proposals',
    body: [
      'Submitting an enquiry through the Site does not create a client relationship or any obligation on either party. It begins a conversation.',
      'Proposals, budgets, venue availability and date holds shared during that conversation are indicative until confirmed in a signed service agreement with an accompanying advance.',
      'We reserve the right to decline engagements where we cannot serve a family to our standard — for reasons of scale, dates, geography or principle — and to say so honestly and early.',
    ],
  },
  {
    title: '4. Engagements: the general framework',
    body: [
      'Planning engagements begin with a signed agreement setting out scope, deliverables, timelines, payment schedule and cancellation terms specific to your celebration.',
      'Professional fees are quoted separately from third-party costs (venues, vendors, travel, production materials), which are passed through transparently with documentation.',
      'The creative concepts, designs and plans produced during an engagement are licensed to you for your celebration; they may not be handed verbatim to another producer for execution without our consent.',
    ],
  },
  {
    title: '5. Payments',
    body: [
      'Engagements typically follow a milestone schedule: a confirmation advance, design-stage payments, and a final settlement before the celebration date. Exact schedules are fixed in your agreement.',
      'Vendor advances pass through on documented terms. Where Wedlock contracts vendors on your behalf, we do so under the vendor-payment provisions of your agreement.',
      'Taxes, including GST, are charged as applicable under Indian law.',
    ],
  },
  {
    title: '6. Cancellations, postponements and force majeure',
    body: [
      'Life happens. Your service agreement contains a graduated cancellation schedule reflecting the work already performed and non-recoverable third-party commitments at the time of cancellation.',
      'Events prevented or substantially altered by force majeure — including epidemic, extreme weather, government restriction or civil disruption — are handled under the force majeure clause of your agreement, with rescheduling as the first remedy we pursue.',
      'Weather contingency plans ("plan B") are designed for every outdoor element we produce; the decision framework for invoking them is agreed with you in advance.',
    ],
  },
  {
    title: '7. Our responsibilities and their limits',
    body: [
      'We undertake to deliver services with professional skill, care and the rigour described across this Site.',
      'Wedlock is not liable for the independent acts or omissions of third-party venues, vendors, airlines or authorities, though the entire point of our production discipline is to anticipate, contract and manage them so you never feel the difference.',
      'Nothing in these terms limits liability that cannot lawfully be limited under the laws of India.',
    ],
  },
  {
    title: '8. Conduct and safety',
    body: [
      'We produce celebrations in partnership with your family. We may decline or pause work in situations involving unsafe conditions, unlawful activity or behaviour toward our crew that a reasonable host would not accept at their own table.',
    ],
  },
  {
    title: '9. Governing law',
    body: [
      'These terms and any engagement are governed by the laws of India, with jurisdiction of the courts at Patna, Bihar, unless your service agreement provides otherwise.',
    ],
  },
  {
    title: '10. Contact',
    body: [
      `Questions about these terms: ${siteConfig.email} · ${siteConfig.phone} · Wedlock, 208-A, Kaushalya Estate, Dak Bunglow Road, Patna, Bihar 800001.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <section className="pb-24 pt-36 sm:pb-32 sm:pt-44">
      <div className="container-x max-w-3xl">
        <p className="font-beau text-4xl leading-none text-gold">The fine print, written plainly</p>
        <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
          Terms & Conditions
        </h1>
        <p className="mt-4 text-sm text-ink/50">
          Effective date: 1 August 2026 · Governs use of wedlock.in and the framework of Wedlock engagements.
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-2xl font-medium text-ink">{s.title}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="mt-3 text-[0.95rem] leading-relaxed text-ink/70">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
