import React from 'react';
import { ArrowRight, BarChart2, Home, Users } from 'lucide-react';

export default function AIServices() {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Streamlined Buying, Selling, and Renting',
      description:
        'Our advanced tools ensure every step of your journey is efficient and stress-free, providing a seamless experience from start to finish.',
    },
    {
      icon: <BarChart2 className="w-8 h-8" />,
      title: 'Data-Driven Insights for Smarter Decisions',
      description:
        'We analyze market trends and property data to provide clear, actionable insights that empower you to make confident real estate decisions.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'The Perfect Blend of Tech and Expertise',
      description:
        'While we utilize cutting-edge tools behind the scenes, our focus remains on delivering a personalized experience that puts your needs first.',
    },
  ];

  return (
    <section id="ai-services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Redefining Real Estate with a Forward-Thinking Approach
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Leverage innovative tools and technology for a seamless real estate experience
              that puts you in control of your journey.
            </p>

            <div className="space-y-12">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-6 transition-all duration-300 hover:translate-x-2"
                >
                  <div className="flex-shrink-0 p-4 bg-black text-white rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300 bg-black text-white hover:bg-gray-800 hover:scale-105"
              >
                Let's Make Your Move Seamless
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Modern luxury real estate"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}