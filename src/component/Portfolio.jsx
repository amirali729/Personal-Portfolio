import React, { useState, useEffect } from 'react';
import { personalInfo, navigationItems } from './PortfolioData';
import Hero from './Hero';
import Sections from './Sections';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black font-sans w-full overflow-x-hidden">
      {/* Enhanced Responsive Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md shadow-2xl border-b border-gray-800'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="flex flex-col items-center justify-center w-10 h-10 sm:w-12 sm:h-12 transform hover:scale-110 transition-transform duration-300">
              {/* Yellow Triangle Logo */}
              <div className="mb-1">
                <svg width="16" height="13" sm:width="20" sm:height="16" viewBox="0 0 24 20" fill="none" className="w-4 h-3 sm:w-5 sm:h-4">
                  <path d="M12 0L24 20H0L12 0Z" fill="#FFD700"/>
                  <path d="M12 6L6 16H18L12 6Z" fill="#1F2937"/>
                </svg>
              </div>
              {/* AMIR Text */}
              <div className="text-[8px] sm:text-[10px] font-bold text-green-400 tracking-wider">
                AMIR
              </div>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold transition-colors duration-300 text-white">
                {personalInfo.name}
              </div>
              <div className="text-[10px] sm:text-xs transition-colors duration-300 text-gray-400">
                {personalInfo.title}
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`relative font-medium py-2 transition-colors duration-300 text-sm xl:text-base ${
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

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
              Contact
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:text-cyan-400 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Contact Button */}
          <button className="hidden lg:block px-4 py-2 xl:px-6 xl:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold text-sm xl:text-base overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 group relative">
            <span className="relative z-10">Let's Talk</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-4 sm:px-6 py-4 bg-black/95 backdrop-blur-md border-t border-gray-800">
            <div className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left py-2 px-3 rounded-lg transition-colors duration-300 ${
                    activeSection === item.toLowerCase()
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Other Sections */}
      <Sections />

      {/* Enhanced Responsive Footer */}
      <footer className="relative bg-gray-900 overflow-hidden w-full">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <div className="flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 transform hover:scale-110 transition-transform duration-300">
                {/* Yellow Triangle Logo */}
                <div className="mb-2">
                  <svg width="28" height="22" sm:width="32" sm:height="26" viewBox="0 0 24 20" fill="none" className="w-7 h-6 sm:w-8 sm:h-7">
                    <path d="M12 0L24 20H0L12 0Z" fill="#FFD700"/>
                    <path d="M12 6L6 16H18L12 6Z" fill="#1F2937"/>
                  </svg>
                </div>
                {/* AMIR Text */}
                <div className="text-xs sm:text-sm font-bold text-green-400 tracking-wider">
                  AMIR
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Let's Build Something Amazing</h3>
              <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                Ready to turn your ideas into reality? I'm always excited to work on new projects and collaborate with amazing people.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6 sm:pt-8 space-y-4 md:space-y-0">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="flex flex-col items-center justify-center w-8 h-10 sm:w-10 sm:h-12">
                  {/* Yellow Triangle Logo */}
                  <div className="mb-1">
                    <svg width="14" height="11" sm:width="16" sm:height="13" viewBox="0 0 24 20" fill="none" className="w-3.5 h-3 sm:w-4 sm:h-3.5">
                      <path d="M12 0L24 20H0L12 0Z" fill="#FFD700"/>
                      <path d="M12 6L6 16H18L12 6Z" fill="#1F2937"/>
                    </svg>
                  </div>
                  {/* AMIR Text */}
                  <div className="text-[7px] sm:text-[8px] font-bold text-green-400 tracking-wider">
                    AMIR
                  </div>
                </div>
                <div>
                  <div className="font-bold text-white text-sm sm:text-base">{personalInfo.name}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{personalInfo.title}</div>
                </div>
              </div>

              <div className="text-center md:text-right">
                <p className="text-gray-400 mb-1 text-xs sm:text-sm">© 2025 {personalInfo.name}. All rights reserved.</p>
                <p className="text-[10px] sm:text-xs text-gray-500">Crafted with precision and passion for excellence</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;