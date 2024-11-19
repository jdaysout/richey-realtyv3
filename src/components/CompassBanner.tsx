import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

export default function CompassBanner() {
  return (
    <section className="bg-black py-12 md:py-16">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <Compass className="w-8 h-8" />
              <span className="text-xl font-medium">Compass Exclusive</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Access Private Listings Not Available Anywhere Else
            </h2>
            <p className="text-gray-300 text-base md:text-lg">
              Get early access to off-market properties through Compass's advanced platform
            </p>
          </div>
          <div className="flex flex-col xs:flex-row gap-4 w-full md:w-auto">
            <a
              href="https://www.compass.com/private-exclusives/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full xs:w-auto"
            >
              Explore Private Exclusives
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="https://www.compass.com/homes-for-sale/westminster-ca/listing-type=coming-soon/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full xs:w-auto"
            >
              Coming Soon Listings
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}