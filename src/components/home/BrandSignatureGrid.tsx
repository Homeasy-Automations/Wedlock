import ImageReveal from '@/components/ui/ImageReveal';
import { GiFlowerTwirl, GiVineFlower, GiLotusFlower, GiFlowerPot, GiFlowers } from 'react-icons/gi';

const topPhotos = [
  {
    src: 'https://wedlock.co.in/wp-content/uploads/2024/05/A50A1680-scaled.jpg',
    alt: 'Aisle styled with sheer drapes and wooden chairs',
  },
  {
    src: 'https://wedlock.co.in/wp-content/uploads/2024/04/A50A2571EDITED.jpg',
    alt: 'Couple sharing a quiet moment on their wedding day',
  },
  {
    src: 'https://wedlock.co.in/wp-content/uploads/2024/03/DSC03554-scaled.jpg',
    alt: 'Tablescape with fine linens and fresh florals',
  },
];

const bottomPhotos = [
  {
    src: 'https://wedlock.co.in/wp-content/uploads/2024/05/DSC04668-scaled.jpg',
    alt: 'Reception hall styled with candlelight and greenery',
  },
  {
    src: 'https://wedlock.co.in/wp-content/uploads/2024/05/A50A0632-scaled.jpg',
    alt: 'Bride and groom walking a sunlit forest path',
  },
  {
    src: 'https://wedlock.co.in/wp-content/uploads/2024/03/DSC04334-scaled.jpg',
    alt: 'Stage and banquet setup with floral centrepieces',
  },
];

/** Layered arrangement of botanical react-icons, styled as a single ornamental mark. */
function FloralCluster({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden>
      <div className="relative h-full w-full text-ink">
        <GiFlowerTwirl className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 opacity-90" />
        <GiVineFlower className="absolute -left-1/2 -top-2 h-[45%] w-[45%] rotate-[-18deg] text-gold" />
        <GiLotusFlower className="absolute -bottom-3 -right-1/2 h-[42%] w-[42%] rotate-[14deg] text-burgundy/80" />
      </div>
    </div>
  );
}

/** Monogram "W" rendered in the brand's serif, paired with a small floral flourish. */
function Monogram() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <span className="font-display text-[9rem] font-medium leading-none text-ink sm:text-[11rem]">
        W
      </span>
      <GiFlowerPot className="absolute h-14 w-14 -translate-y-16 translate-x-10 text-gold/90 sm:h-16 sm:w-16 sm:translate-x-32" />
      <GiFlowers className="absolute h-10 w-10 translate-y-16 -translate-x-16 text-burgundy/70 sm:h-12 sm:w-12 sm:-translate-x-32" />
    </div>
  );
}

export default function BrandSignatureGrid() {
  return (
    <section aria-labelledby="brand-signature-heading" className="bg-cream">
      <div className="grid grid-cols-1 sm:grid-cols-3 object">
        {topPhotos.map((photo) => (
          <ImageReveal
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            className="aspect-[4/3] sm:aspect-[4/2.5]"
            imgClassName="object-top"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3">
        <div className="flex aspect-[4/3] items-center justify-center bg-base sm:aspect-[4/2.5]">
          <Monogram />
        </div>

        <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 bg-ink px-6 py-12 text-center sm:aspect-[4/2.5]">
          <h2
            id="brand-signature-heading"
            className="font-display text-5xl font-medium tracking-tight text-base sm:text-6xl"
          >
            Wedlock
          </h2>
          <p className="font-beau text-2xl text-gold sm:text-3xl">by Eventoss</p>
        </div>

        <div className="flex aspect-[4/3] items-center justify-center bg-base sm:aspect-[4/2.5]">
          <FloralCluster className="h-36 w-36 sm:h-44 sm:w-44" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3">
        {bottomPhotos.map((photo) => (
          <ImageReveal
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            className="aspect-[4/3] sm:aspect-[4/2.5]"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        ))}
      </div>
    </section>
  );
}
