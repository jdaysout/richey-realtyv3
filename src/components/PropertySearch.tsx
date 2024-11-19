import React, { useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { FilterOptions } from '../types/property';

interface PropertySearchProps {
  searchQuery: string;
  filters: FilterOptions;
  onSearchChange: (query: string) => void;
  onFilterChange: (name: keyof FilterOptions, value: string | string[]) => void;
}

export default function PropertySearch({
  searchQuery,
  filters,
  onSearchChange,
  onFilterChange,
}: PropertySearchProps) {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  const priceRanges = [
    { label: 'Any Price', value: '' },
    { label: 'Under $2M', value: '0-2000000' },
    { label: '$2M - $3M', value: '2000000-3000000' },
    { label: '$3M - $4M', value: '3000000-4000000' },
    { label: '$4M+', value: '4000000-999999999' },
  ];

  const amenityOptions = [
    'Open Floor Plan',
    'Pool',
    'Large Lot',
    'Home Office',
    'Smart Home Technology',
    'Gated Community',
  ];

  const handleAmenityChange = (amenity: string) => {
    const updatedAmenities = filters.amenities.includes(amenity)
      ? filters.amenities.filter((a) => a !== amenity)
      : [...filters.amenities, amenity];
    onFilterChange('amenities', updatedAmenities);
  };

  const clearAmenities = () => {
    onFilterChange('amenities', []);
  };

  return (
    <div className="max-w-4xl mx-auto mb-12 space-y-4">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search properties by title or location..."
          className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <select
          value={filters.priceRange}
          onChange={(e) => onFilterChange('priceRange', e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          {priceRanges.map((range) => (
            <option key={range.value} value={range.value}>
              {range.label}
            </option>
          ))}
        </select>

        <select
          value={filters.beds}
          onChange={(e) => onFilterChange('beds', e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Any Beds</option>
          {[3, 4, 5, 6].map((num) => (
            <option key={num} value={num}>
              {num}+ Beds
            </option>
          ))}
        </select>

        <select
          value={filters.baths}
          onChange={(e) => onFilterChange('baths', e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Any Baths</option>
          {[2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}+ Baths
            </option>
          ))}
        </select>
      </div>

      <div className="relative">
        <button
          onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
          className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300"
        >
          <SlidersHorizontal className="w-5 h-5" />
          <span>Advanced Filters</span>
          {filters.amenities.length > 0 && (
            <span className="ml-2 bg-white text-black px-2 py-0.5 rounded-full text-sm">
              {filters.amenities.length}
            </span>
          )}
        </button>

        {showAdvancedFilters && (
          <div className="absolute left-0 right-0 mt-2 p-6 bg-white rounded-lg shadow-xl border border-gray-200 z-20">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Preferred Amenities</h3>
              {filters.amenities.length > 0 && (
                <button
                  onClick={clearAmenities}
                  className="flex items-center text-sm text-gray-600 hover:text-gray-900"
                >
                  <X className="w-4 h-4 mr-1" />
                  Clear all
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {amenityOptions.map((amenity) => (
                <label
                  key={amenity}
                  className="flex items-center space-x-3 group cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={filters.amenities.includes(amenity)}
                    onChange={() => handleAmenityChange(amenity)}
                    className="w-5 h-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="text-gray-700 group-hover:text-gray-900">
                    {amenity}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {filters.amenities.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {filters.amenities.map((amenity) => (
            <span
              key={amenity}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800"
            >
              {amenity}
              <button
                onClick={() => handleAmenityChange(amenity)}
                className="ml-2 text-gray-500 hover:text-gray-700"
              >
                <X className="w-4 h-4" />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}