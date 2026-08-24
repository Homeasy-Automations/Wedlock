import type { Metadata } from 'next';
import { buildMetadata, siteConfig } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'How Wedlock Celebrations Pvt. Ltd. collects, uses, stores and protects your personal information.',
  path: '/privacy',
});

const sections = [
  {
    title: '1. Who we are',
    body: [
      'Wedlock ("Wedlock", "we", "us"), headquartered at 208-A, Kaushalya Estate, Dak Bunglow Road, Patna, Bihar, India, operates the website wedlock.co.in and the celebration-planning services described on it.',
      'We are the data controller for personal information you share with us through this website, our enquiry forms, calls, WhatsApp conversations and planning engagements.',
    ],
  },
  {
    title: '2. Information we collect',
    body: [
      'Enquiry details you provide: your name, email address, phone number, the occasion you are planning, preferred city or destination, tentative dates, approximate guest count, budget range and any message you send us.',
      'Planning information: during an engagement we may collect family preferences, dietary and accessibility requirements, travel details of guests, and event documents — only as needed to produce your celebration.',
      'Technical data: when you browse our website we may collect standard analytics information such as pages visited, approximate region, device type and referral source. We do not run invasive cross-site tracking.',
      'Media: photographs and videos from events we produce are collected through the professional crew engaged for your celebration.',
    ],
  },
  {
    title: '3. How we use your information',
    body: [
      'To respond to your enquiry and begin a planning conversation — typically a call or WhatsApp message within 24 hours.',
      'To prepare proposals, budgets, venue options and design concepts tailored to your celebration.',
      'To plan, produce and execute events you engage us for, including coordination with venues and vendors on your behalf.',
      'To maintain our relationship history so returning families never need to re-introduce themselves.',
      'To comply with legal, taxation and accounting obligations under Indian law.',
    ],
  },
  {
    title: '4. What we never do',
    body: [
      'We never sell, rent or trade your personal information to third parties.',
      'We never share your details with vendors, venues or artists without your knowledge and consent.',
      'We never publish photographs, guest names or event details from your celebration in our portfolio, website or social media without explicit written permission from you.',
      'We do not send marketing communications to enquiry contacts unless you opt in, and every message includes a one-click way to stop hearing from us.',
    ],
  },
  {
    title: '5. Sharing with vendors and partners',
    body: [
      'Producing a celebration requires sharing limited information with venues, hotels, travel partners, airlines and artists — for example, guest names for rooming lists or flight manifests.',
      'Such sharing is limited to what is operationally necessary, covered by confidentiality expectations, and done with your knowledge as part of the planning process.',
    ],
  },
  {
    title: '6. Data storage and security',
    body: [
      'Enquiry and client records are stored on access-controlled systems hosted with reputable providers. Access within Wedlock is limited to team members working on your celebration.',
      'While no system can guarantee absolute security, we maintain administrative and technical safeguards appropriate for the sensitivity of family and event data, and we review them periodically.',
    ],
  },
  {
    title: '7. How long we keep your data',
    body: [
      'Enquiry information that does not proceed to an engagement is retained for up to 24 months so we can pick up the conversation if you return, then deleted or anonymised.',
      'Engagement records are retained for the duration required by Indian accounting and contract law, after which personal data is removed or anonymised.',
    ],
  },
  {
    title: '8. Your rights',
    body: [
      'You may request a copy of the personal information we hold about you, ask us to correct inaccuracies, or ask us to delete your information where it is no longer needed.',
      'To exercise any of these rights, write to us at the address below and we will respond within 30 days.',
      'You may also opt out of any optional communication at any time simply by replying "stop" or emailing us.',
    ],
  },
  {
    title: '9. Cookies and analytics',
    body: [
      'This website may use privacy-respecting analytics to understand which pages are useful to visitors. You can browse the entire site, including all content, without accepting any non-essential cookies.',
    ],
  },
  {
    title: '10. Changes to this policy',
    body: [
      'We may update this policy from time to time. Material changes will be indicated by updating the date below and, where appropriate, notified on this page before taking effect.',
    ],
  },
  {
    title: '11. Contact',
    body: [
      `For any privacy question or request: ${siteConfig.email}, or write to Wedlock, 208-A, Kaushalya Estate, Dak Bunglow Road, Patna, Bihar, India.`,
      `You may also call the celebration desk at ${siteConfig.phone} (Mon–Sat, 10 am–8 pm IST).`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section className="pb-24 pt-36 sm:pb-32 sm:pt-44">
      <div className="container-x max-w-3xl">
        <p className="font-beau text-4xl leading-none text-gold">Your trust, in writing</p>
        <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-ink/50">
          Effective date: 1 August 2026 · Applies to wedlock.in and all Wedlock planning engagements.
        </p>

        <p className="mt-8 rounded-2xl border border-gold/30 bg-gold/10 p-6 text-sm leading-relaxed text-ink/70">
          The short version, because legal pages should still be honest: we collect only what a
          thoughtful planner genuinely needs, we never sell it, we never publish your celebration
          without permission, and you can ask us to forget you at any time. The long version follows.
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
