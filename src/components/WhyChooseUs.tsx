import React from 'react';
import { Home, Lock, MapPin } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Simplified Buying Process',
      description:
        'Experience a streamlined home-buying journey with our innovative platform and expert guidance at every step.',
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Exclusive Access to Private Listings',
      description:
        'Get early access to off-market properties and Compass Private Exclusives before they hit the public market.',
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Expert Local Knowledge',
      description:
        'Benefit from our deep insights into local markets, trends, and exclusive neighborhood opportunities.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Richey Realty
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the perfect blend of technology and personal service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl transition-all duration-300 hover:bg-gray-50 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="p-4 bg-black text-white rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}