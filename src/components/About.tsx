import React from 'react';
import { TrendingUp, Clock, Home, Award, Users, Building2, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import CountUp from './CountUp';

export default function About() {
  const metrics = [
    {
      icon: <Home className="w-6 h-6" />,
      value: 50,
      suffix: '+',
      label: 'Homes Sold',
      description: 'Successfully closed transactions',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: 110,
      prefix: '$',
      suffix: 'M+',
      label: 'Sales Volume',
      description: 'Total transaction volume',
      decimals: 0,
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: 20,
      suffix: '+',
      label: 'Years of Excellence',
      description: 'Industry experience',
    },
  ];

  const features = [
    {
      title: 'Innovative Technology Integration',
      description: 'Leveraging AI and digital media for enhanced property marketing and data-driven insights',
      icon: <Star className="w-6 h-6" />
    },
    {
      title: 'Cross-Industry Expertise',
      description: 'Combining experience in real estate, customer service, and creative industries for unique solutions',
      icon: <Award className="w-6 h-6" />
    },
    {
      title: 'Client-Centered Approach',
      description: 'Delivering personalized strategies and seamless experiences from start to finish',
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Richey Realty
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Delivering unmatched success and expertise in the luxury real estate market
          </motion.p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Image and Metrics */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://www.compass.com/m/13/9960d9ef-8da4-41d2-ad4b-d2a519040f3e/origin.jpg"
                alt="Jared Richey"
                className="rounded-2xl shadow-2xl object-cover w-full aspect-[3/4] transform hover:scale-[1.02] transition-all duration-500"
              />
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-black rounded-2xl -z-10" />
            </motion.div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-1 gap-6">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-black text-white rounded-lg">
                      {metric.icon}
                    </div>
                    <div>
                      <CountUp
                        end={metric.value}
                        prefix={metric.prefix}
                        suffix={metric.suffix}
                        decimals={metric.decimals}
                      />
                      <div className="text-sm text-gray-600 mt-1">
                        {metric.description}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* About Content */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                At Richey Realty, we are committed to delivering exceptional service in the luxury real estate market of Southern California. Our founder, Jared Richey, is a dynamic professional dedicated to leveraging technology and media to enhance brand visibility and operational efficiency. With expertise in AI-driven workflow optimization, digital media production, and strategic communications, Jared brings a forward-thinking approach to real estate that sets him apart from other agents.
              </p>

              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="group p-6 bg-gray-50 rounded-xl hover:bg-black hover:text-white transition-all duration-300"
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-black text-white group-hover:bg-white group-hover:text-black rounded-lg transition-colors duration-300">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-300">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Mark Todd Partnership Section */}
            <motion.div
              className="bg-black text-white rounded-2xl shadow-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Mark Todd and Associates Partnership</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-8">
                As a key member of Mark Todd and Associates, one of Orange County's premier luxury real estate teams, Richey Realty leverages collective expertise and resources to deliver exceptional results. This strategic partnership combines Mark Todd's decades of market leadership with our innovative approach to create unparalleled value for our clients.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Award className="w-6 h-6 mb-3" />
                  <p className="text-sm">Ranked in the top 1% of Compass teams nationwide</p>
                </div>
                <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Users className="w-6 h-6 mb-3" />
                  <p className="text-sm">Access to an extensive network of luxury real estate professionals</p>
                </div>
                <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <TrendingUp className="w-6 h-6 mb-3" />
                  <p className="text-sm">Combined expertise delivering consistent market-leading results</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}