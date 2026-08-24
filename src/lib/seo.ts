import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Wedlock',
  tagline: 'Celebrations. Thoughtfully produced.',
  prompt: 'What are you celebrating?',
  process: 'Plan · Design · Produce · Execute',
  url: 'https://wedlock.co.in',
  email: 'info@wedlock.co.in',
  phone: '+91 70615 28402',
  phones: ['+91 70615 28404', '+91 70615 28401', '+91 70615 28402'],
  address: '208-A, Kaushalya Estate, Dak Bunglow Road, Patna',
  cities: ['Patna', 'Ranchi', 'Delhi'],
  parentCompany: 'Eventoss',
  yearsInBusiness: 5,
  description:
    'Wedlock is Patna\u2019s premier wedding planning and production house — weddings, destination weddings, birthdays, anniversaries, engagements and family celebrations, crafted across Patna, Ranchi, Delhi and beyond.',
  keywords: [
    'wedding planner Patna',
    'destination weddings',
    'celebration planning',
    'event production',
    'Patna wedding planner',
    'Ranchi wedding planner',
    'luxury weddings',
  ],
  socials: {
    facebook: 'https://www.facebook.com/WedlockWeddingPlanner/',
    twitter: 'https://twitter.com/Wedlock_Patna',
    instagram: 'https://www.instagram.com/wedlockweddings/',
    youtube: 'https://www.youtube.com/playlist?list=PLl563t1NI8UZgd4A95Q_P9i77d7NpbIM8',
  },
};

interface BuildMetaOptions {
  title: string;
  description: string;
  path: string;
}

export function buildMetadata({ title, description, path }: BuildMetaOptions): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} — ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} — ${siteConfig.name}`,
      description,
    },
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
};
