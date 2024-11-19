import React from 'react';
import { ArrowRight, Compass, Mail, Search } from 'lucide-react';

export default function Properties() {
  return (
    <section id="properties" className="relative min-h-screen py-24 bg-gradient-to-b from-gray-50 to-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Discover Your Dream Home
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Search properties across Los Angeles, Huntington Beach, and Newport Beach
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <a
              href="https://www.compass.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300 bg-black text-white hover:bg-gray-800 hover:scale-105"
            >
              <Search className="w-5 h-5 mr-2" />
              Explore Properties
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href="#contact"
              className="group w-full inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300 bg-white text-black border-2 border-black hover:bg-gray-100 hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Compass Private Exclusives Card */}
        <div className="mt-24 bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
          <div className="grid md:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <Compass className="w-8 h-8" />
                <span className="text-xl font-medium">Compass Private Exclusives</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Get Early Access to Off-Market Properties
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Discover exclusive listings before they hit the market and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.compass.com/private-exclusives/agents/jared-richey/#buyers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg bg-black text-white hover:bg-gray-800 transition-all duration-300"
                >
                  View Private Exclusives
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a
                  href="https://www.compass.com/homes-for-sale/los-angeles-raymondville-tx/locations=13970/mapview=33.7650221,-117.3705719,33.2715619,-118.2110261/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg border-2 border-black text-black hover:bg-gray-100 transition-all duration-300"
                >
                  Coming Soon Listings
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Luxury Property"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <div className="text-sm font-medium mb-2">Featured Property</div>
                <div className="text-2xl font-bold">Premium Listings</div>
              </div>
            </div>
          </div>
        </div>

        {/* Help Link */}
        <div className="mt-12 text-center">
          <a
            href="https://www.compass.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 hover:underline transition-colors duration-300 text-sm inline-flex items-center"
          >
            Not sure where to start? Browse Compass tools
            <ArrowRight className="ml-1 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}