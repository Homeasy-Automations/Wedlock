import type { Metadata, Viewport } from 'next';
import {
  Sacramento,
  Alex_Brush,
  Allura,
  Dancing_Script,
  Beau_Rivage,
  Playfair_Display,
  Manrope,
} from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StickyCTA from '@/components/layout/StickyCTA';
import PageTransition from '@/components/ui/PageTransition';
import { defaultMetadata } from '@/lib/seo';

const sacramento = Sacramento({ weight: '400', subsets: ['latin'], variable: '--font-sacramento' });
const alex = Alex_Brush({ weight: '400', subsets: ['latin'], variable: '--font-alex' });
const allura = Allura({ weight: '400', subsets: ['latin'], variable: '--font-allura' });
const dancing = Dancing_Script({ weight: ['400', '600'], subsets: ['latin'], variable: '--font-dancing' });
const beau = Beau_Rivage({ weight: '400', subsets: ['latin'], variable: '--font-beau' });
const display = Playfair_Display({ subsets: ['latin'], variable: '--font-display' });
const body = Manrope({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: '#FBF6F0',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-base">
      <body
        className={`${sacramento.variable} ${alex.variable} ${allura.variable} ${dancing.variable} ${beau.variable} ${display.variable} ${body.variable} font-body`}
      >
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <StickyCTA />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Wedlock',
              slogan: 'Celebrations. Thoughtfully produced.',
              url: 'https://wedlock.co.in',
              email: 'info@wedlock.co.in',
              telephone: '+91 7061528402',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '208-A, Kaushalya Estate, Dak Bunglow Road',
                addressLocality: 'Patna',
                addressRegion: 'Bihar',
                addressCountry: 'IN',
              },
              sameAs: [
                'https://www.facebook.com/WedlockWeddingPlanner/',
                'https://twitter.com/Wedlock_Patna',
                'https://www.instagram.com/wedlockweddings/',
                'https://www.youtube.com/playlist?list=PLl563t1NI8UZgd4A95Q_P9i77d7NpbIM8',
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
