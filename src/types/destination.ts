export interface DestinationVenue {
  name: string;
  type: string;
  capacity: string;
}

export interface DestinationReason {
  title: string;
  text: string;
}

export interface Destination {
  slug: string;
  name: string;
  country: string;
  region: string;
  tagline: string;
  description: string;
  bestSeason: string;
  idealGuests: string;
  access: string;
  heroImage: string;
  gallery: string[];
  why: DestinationReason[];
  venues: DestinationVenue[];
  featured?: boolean;
}
