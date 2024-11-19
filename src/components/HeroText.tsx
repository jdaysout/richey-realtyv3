import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroText() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white transition-all duration-300 hover:scale-105 hover:text-gray-200">
        Richey Realty: <br />
        <span className="bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
          Bridging Luxury Real Estate & Innovation
        </span>
      </h1>
      
      <p className="mt-8 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light tracking-wide transition-all duration-300 hover:scale-105">
        Modern real estate expertise powered by AI insights
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
        <a
          href="#properties"
          className="group inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full transition-all duration-300 bg-white text-black hover:bg-gray-200 hover:scale-105"
        >
          Explore Properties
          <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
        </a>
        <a
          href="#contact"
          className="group inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white border-2 border-white/20 rounded-full hover:bg-white/10 hover:scale-105 backdrop-blur-sm transition-all duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}