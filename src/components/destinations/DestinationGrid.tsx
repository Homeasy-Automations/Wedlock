import DestinationCard from './DestinationCard';
import type { Destination } from '@/types/destination';

export default function DestinationGrid({ destinations }: { destinations: Destination[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {destinations.map((d, i) => (
        <div key={d.slug} className={i % 2 === 1 ? 'lg:mt-10' : ''}>
          <DestinationCard destination={d} index={i} />
        </div>
      ))}
    </div>
  );
}
