import React, { useState, useEffect } from 'react';
import { Home, Building2, Users, Mail, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { name: 'Home', icon: <Home className="w-5 h-5" /> },
    { name: 'Properties', icon: <Building2 className="w-5 h-5" /> },
    { name: 'About', icon: <Users className="w-5 h-5" /> },
    { name: 'Contact', icon: <Mail className="w-5 h-5" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => 
        document.getElementById(item.name.toLowerCase().replace(' ', '-'))
      );
      
      const currentSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-white">Richey Realty</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const sectionId = item.name.toLowerCase().replace(' ', '-');
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={item.name}
                  href={`#${sectionId}`}
                  className={`group flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-all duration-300
                    ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                >
                  {item.icon}
                  <span className="relative">
                    {item.name}
                    <span 
                      className={`absolute bottom-0 left-1/2 h-0.5 bg-white transform -translate-x-1/2 transition-all duration-300
                        ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                    />
                  </span>
                </a>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-black/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const sectionId = item.name.toLowerCase().replace(' ', '-');
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={item.name}
                  href={`#${sectionId}`}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300
                    ${isActive 
                      ? 'text-white bg-white/20' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}