export interface Property {
  id: number;
  image: string;
  title: string;
  price: string;
  priceValue: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  amenities: string[];
}

export interface FilterOptions {
  priceRange: string;
  beds: string;
  baths: string;
  amenities: string[];
}