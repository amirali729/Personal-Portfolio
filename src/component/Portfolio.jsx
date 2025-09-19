import React, { useState, useEffect } from 'react';
import { personalInfo, navigationItems } from './PortfolioData';
import Hero from './Hero';
import Sections from './Sections';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black font-sans w-full overflow-x-hidden">
      {/* Enhanced Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md shadow-2xl border-b border-gray-800'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-center justify-center w-12 h-12 transform hover:scale-110 transition-transform duration-300">
              {/* Yellow Triangle Logo */}
              <div className="mb-1">
                <svg width="20" height="16" viewBox="0 0 24 20" fill="none">
                  <path d="M12 0L24 20H0L12 0Z" fill="#FFD700"/>
                  <path d="M12 6L6 16H18L12 6Z" fill="#1F2937"/>
                </svg>
              </div>
              {/* AMIR Text */}
              <div className="text-[10px] font-bold text-green-400 tracking-wider">
                AMIR
              </div>
            </div>
            <div>
              <div className="text-xl font-bold transition-colors duration-300 text-white">
                {personalInfo.name}
              </div>
              <div className="text-xs transition-colors duration-300 text-gray-400">
                {personalInfo.title}
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`relative font-medium py-2 transition-colors duration-300 ${
                  activeSection === item.toLowerCase()
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          <button className="group relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25">
            <span className="relative z-10">Let's Talk</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Other Sections */}
      <Sections />

      {/* Enhanced Footer */}
      <footer className="relative bg-gray-900 overflow-hidden w-full">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="flex flex-col items-center justify-center w-20 h-20 mx-auto mb-6 transform hover:scale-110 transition-transform duration-300">
                {/* Yellow Triangle Logo */}
                <div className="mb-2">
                  <svg width="32" height="26" viewBox="0 0 24 20" fill="none">
                    <path d="M12 0L24 20H0L12 0Z" fill="#FFD700"/>
                    <path d="M12 6L6 16H18L12 6Z" fill="#1F2937"/>
                  </svg>
                </div>
                {/* AMIR Text */}
                <div className="text-sm font-bold text-green-400 tracking-wider">
                  AMIR
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Let's Build Something Amazing</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Ready to turn your ideas into reality? I'm always excited to work on new projects and collaborate with amazing people.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-8">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="w-10 h-10 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                  {/* Yellow Triangle Logo */}
                  <svg width="20" height="16" viewBox="0 0 24 20" fill="none">
                    <path d="M12 0L24 20H0L12 0Z" fill="#FFD700"/>
                    <path d="M12 6L6 16H18L12 6Z" fill="#1F2937"/>
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-white">{personalInfo.name}</div>
                  <div className="text-sm text-gray-400">{personalInfo.title}</div>
                </div>
              </div>

              <div className="text-center md:text-right">
                <p className="text-gray-400 mb-2">© 2025 {personalInfo.name}. All rights reserved.</p>
                <p className="text-sm text-gray-500">Crafted with precision and passion for excellence</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;