import React from 'react';
import { ArrowRight, Paintbrush, Sofa, Hammer, Camera } from 'lucide-react';

export default function CompassConcierge() {
  const services = [
    {
      icon: <Paintbrush className="w-6 h-6" />,
      title: 'Fresh Paint & Repairs',
      description: 'Interior and exterior painting, plus essential repairs to enhance appeal.',
    },
    {
      icon: <Sofa className="w-6 h-6" />,
      title: 'Professional Staging',
      description: 'Expert staging to showcase your home\'s full potential to buyers.',
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: 'Strategic Renovations',
      description: 'Smart upgrades that maximize return on investment.',
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: 'Professional Marketing',
      description: 'High-quality photography and virtual tours to attract buyers.',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Maximize Your Home's Value with Compass Concierge
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Prepare your home for the market with no upfront costs. From staging to renovations,
              we handle it all—paid at closing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-4 transition-all duration-300 hover:translate-x-2"
                >
                  <div className="flex-shrink-0 p-3 bg-black text-white rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://www.compass.com/concierge/jared-richey/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300 bg-black text-white hover:bg-gray-800 hover:scale-105"
            >
              Learn More About Compass Concierge
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Beautifully staged home interior"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-black/20 to-transparent" />
            <img
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Home transformation"
              className="absolute -bottom-8 -right-8 w-48 h-48 object-cover rounded-xl shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}