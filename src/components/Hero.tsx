import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
      duration: 1.5,
      ease: [0.25, 0.1, 0.25, 1],
    }
  }
};

const backgroundVariants = {
  hidden: { 
    scale: 1.1,
    opacity: 0 
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { 
      duration: 2,
      ease: [0.25, 0.1, 0.25, 1],
    }
  }
};

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Image with Overlay */}
      <motion.div 
        className="absolute inset-0 z-0"
        variants={backgroundVariants}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transform-gpu"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=3000&q=100")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 backdrop-blur-[2px]" />
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8"
          variants={fadeInUp}
        >
          Experience Luxury with{' '}
          <span className="bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
            Richey Realty
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
          variants={fadeInUp}
        >
          Delivering unmatched success and expertise in the luxury real estate market
        </motion.p>
        
        <motion.div 
          className="flex flex-col xs:flex-row gap-4 justify-center"
          variants={fadeInUp}
        >
          <motion.a
            href="https://www.compass.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full 
                     bg-black text-white border-2 border-transparent hover:bg-white hover:text-black 
                     transition-all duration-700 group transform-gpu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Properties
            <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-700" />
          </motion.a>
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full 
                     text-white border-2 border-white hover:bg-white hover:text-black 
                     transition-all duration-700 group transform-gpu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
            <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-700" />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}