import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    label: 'Call Me',
    value: '+1 (714) 585-3444',
    href: 'tel:+17145853444',
    type: 'phone'
  },
  {
    icon: <Mail className="w-6 h-6" />,
    label: 'Email Me',
    value: 'jared.richey@compass.com',
    href: 'mailto:jared.richey@compass.com',
    type: 'email'
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    label: 'Office',
    value: '1600 Newport Center Dr Ste 250\nNewport Beach, CA 92660',
    href: 'https://maps.google.com/?q=1600+Newport+Center+Dr+Ste+250+Newport+Beach+CA+92660',
    type: 'address'
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Ready to start your real estate journey? Let's discuss how we can help you
              achieve your real estate goals with our innovative approach and proven expertise.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                target={info.type === 'address' ? '_blank' : undefined}
                rel={info.type === 'address' ? 'noopener noreferrer' : undefined}
                className="group flex flex-col items-center justify-start p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex-shrink-0 p-4 bg-white text-black rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm font-medium text-gray-400 mb-2">{info.label}</p>
                  <p className="text-lg text-white group-hover:text-gray-300 transition-colors duration-300 whitespace-pre-line">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}