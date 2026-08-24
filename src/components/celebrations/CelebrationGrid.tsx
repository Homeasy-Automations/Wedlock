import CelebrationCard from './CelebrationCard';
import type { SubService, CelebrationCategory } from '@/types/celebration';

interface CelebrationGridProps {
  services: SubService[];
  category: CelebrationCategory;
  accent: string;
}

/** Full sub-service grid — every service rendered as its own rich image card. */
export default function CelebrationGrid({ services, category, accent }: CelebrationGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => (
        <CelebrationCard
          key={service.slug}
          service={service}
          category={category}
          accent={accent}
          index={i}
        />
      ))}
    </div>
  );
}
