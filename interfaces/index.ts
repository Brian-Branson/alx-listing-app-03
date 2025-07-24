// interfaces/index.ts

export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  amenities: string[];
  id: number;
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
}
export interface PillProps {
  filters: FilterLabel[];
  selectedValue: string;
  onClick: (filter: FilterLabel) => void;
}
export interface FilterLabel {
  label: string;
  value: string;
}