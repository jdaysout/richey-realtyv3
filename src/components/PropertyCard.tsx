import React, { memo } from 'react';
import { Bed, Bath, Square, MapPin, ArrowRight, Check } from 'lucide-react';

interface PropertyCardProps {
  image: string;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  amenities: string[];
}

const PropertyCard = memo(function PropertyCard({
  image,
  title,
  price,
  location,
  beds,
  baths,
  sqft,
  amenities,
}: PropertyCardProps) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold">{price}</span>
              <button className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-colors duration-200">
                <span>View Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <Bed className="w-4 h-4 mr-1" />
                <span>{beds} Beds</span>
              </div>
              <div className="flex items-center">
                <Bath className="w-4 h-4 mr-1" />
                <span>{baths} Baths</span>
              </div>
              <div className="flex items-center">
                <Square className="w-4 h-4 mr-1" />
                <span>{sqft} sqft</span>
              </div>
            </div>
          </div>
        </div>
        {/* Price tag */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900 shadow-lg transform -translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          {price}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
          {title}
        </h3>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mt-4">
          {amenities.slice(0, 3).map((amenity) => (
            <span
              key={amenity}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700"
            >
              <Check className="w-3 h-3 mr-1" />
              {amenity}
            </span>
          ))}
          {amenities.length > 3 && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700">
              +{amenities.length - 3} more
            </span>
          )}
        </div>
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-900">{beds}</div>
            <div className="text-xs text-gray-500">Bedrooms</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-900">{baths}</div>
            <div className="text-xs text-gray-500">Bathrooms</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-900">{sqft}</div>
            <div className="text-xs text-gray-500">Sq Ft</div>
          </div>
        </div>
      </div>
    </div>
  );
})

export default PropertyCard;