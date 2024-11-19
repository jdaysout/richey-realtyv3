import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

export default function CompassListings() {
  return (
    <div className="mt-24 bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="grid md:grid-cols-2">
        <div className="p-12 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <Compass className="w-8 h-8" />
            <span className="text-xl font-medium">Compass Exclusive</span>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Be the First to Discover
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Stay ahead with Compass's Coming Soon properties and get early access to
            off-market listings before they hit the public market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.compass.com/private-exclusives/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg bg-black text-white hover:bg-gray-800 transition-all duration-300"
            >
              Private Exclusives
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="https://www.compass.com/homes-for-sale/westminster-ca/listing-type=coming-soon/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300"
            >
              Coming Soon Listings
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
        <div className="relative h-64 md:h-auto">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Luxury Property"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <div className="text-sm font-medium mb-2">Compass Exclusive</div>
            <div className="text-2xl font-bold">Premium Properties</div>
          </div>
        </div>
      </div>
    </div>
  );
}