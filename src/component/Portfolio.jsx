import React, { useState, useEffect, useCallback,useRef } from 'react';
import { personalInfo, navigationItems } from './PortfolioData';
import { Share2 } from 'lucide-react';
import Hero from './Hero';
import Sections from './Sections';
import Navbar from './Navbar';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    const btnRef = useRef(null);
  
    useEffect(() => {
      function handleClick(e) {
        if (
          open &&
          menuRef.current &&
          !menuRef.current.contains(e.target) &&
          btnRef.current &&
          !btnRef.current.contains(e.target)
        ) {
          setOpen(false);
        }
      }
      function handleEsc(e) {
        if (e.key === "Escape") setOpen(false);
      }
      document.addEventListener("mousedown", handleClick);
      document.addEventListener("touchstart", handleClick);
      document.addEventListener("keydown", handleEsc);
      return () => {
        document.removeEventListener("mousedown", handleClick);
        document.removeEventListener("touchstart", handleClick);
        document.removeEventListener("keydown", handleEsc);
      };
    }, [open]);
  // UPDATE HANDLESCROLL
  const handleScroll = useCallback(() => {
    const current = window.scrollY;

    if (current <= 0) {
      setShowNavbar(true);   // show only at top
    } else {
      setShowNavbar(false);  // hide always once scrolled
    }
  }, []);


  useEffect(() => {
    let ticking = false;

    const scrollListener = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    return () => window.removeEventListener('scroll', scrollListener);
  }, [handleScroll]);

  const scrollToSection = useCallback((sectionId) => {
    if (sectionId === 'home') {
      // Scroll to top for home
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 80; // Account for fixed navbar
        const targetPosition = element.offsetTop - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
    setActiveSection(sectionId);
  }, []);

  const handleSectionChange = useCallback((section) => {
    scrollToSection(section);
  }, [scrollToSection]);

  const handleMobileMenuToggle = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const handleMobileMenuClose = useCallback((section) => {
    scrollToSection(section);
    setIsMobileMenuOpen(false);
  }, [scrollToSection]);

  return (
    <div className="min-h-screen bg-black font-sans w-full overflow-x-hidden">
      {/* Enhanced Responsive Navbar with Accessibility */}
      <nav
        className={`
    fixed top-0 w-full z-50 transition-transform duration-300
    ${showNavbar ? 'translate-y-0' : '-translate-y-full'}
    bg-black/20 backdrop-blur-md
  `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div
              className="flex flex-col items-center justify-center w-10 h-10 sm:w-12 sm:h-12 transform hover:scale-110 transition-transform duration-300"
              role="img"
              aria-label="Amir Ali Logo"
            >
              <div className="mb-1">
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 24 20"
                  fill="none"
                  className="w-4 h-3 sm:w-5 sm:h-4"
                >
                  <path d="M12 0L24 20H0L12 0Z" fill="#FFD700" />
                  <path d="M12 6L6 16H18L12 6Z" fill="#1F2937" />
                </svg>
              </div>
              <div className="text-[8px] sm:text-[10px] font-bold text-green-400 tracking-wider">
                AMIR
              </div>
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-white">
                {personalInfo.name}
              </h1>
              <p className="text-[10px] sm:text-xs text-gray-400">
                {personalInfo.title}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item}
                onClick={() => handleSectionChange(item.toLowerCase())}
                className={`relative font-medium py-2 transition-colors duration-300 hover:text-cyan-400 text-sm xl:text-base ${activeSection === item.toLowerCase()
                    ? 'text-cyan-400'
                    : 'text-gray-300'
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
            <button
              onClick={handleMobileMenuToggle}
              className="p-2 text-white hover:text-cyan-400"
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
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
        >
          <div className="px-4 py-4 bg-black/90 backdrop-blur-md border-t border-gray-800">
            {navigationItems.map((item) => (
              <button
                key={item}
                onClick={() => handleMobileMenuClose(item.toLowerCase())}
                className={`text-left py-2 px-3 rounded-lg ${activeSection === item.toLowerCase()
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800'
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main role="main">
        <Hero />
        <Sections />
        <Navbar />

      </main>
            <button
                          ref={btnRef}
                          onClick={() => setOpen((prev) => !prev)}
                          className="md:hidden fixed bottom-4 right-4 z-[9999] bg-black text-white p-3 rounded-full shadow-lg text-xl"
                        >
                          {open ? "✕" : <Share2 className="w-5 h-5" />}
                        </button>
            
                        {/* Mobile Menu */}
                        <div
                          ref={menuRef}
                          className={`md:hidden fixed bottom-20 right-4 z-[9998] transition-all duration-300 ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"
                            }`}
                        >
                          <nav className="flex flex-col gap-3 bg-transparent backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/20">
                            <a className="text-white" href="https://github.com/amirali729" target="_blank">GitHub</a>
                            <a className="text-white" href="https://www.linkedin.com/in/amirali729/" target="_blank">LinkedIn</a>
                            <a className="text-white" href="mailto:amirpech10@gmail.com">Email</a>
                          </nav>
                        </div>
            
                        {/* Desktop Menu */}
                        <div className="hidden md:flex fixed bottom-6 right-6 z-[9999] flex-col gap-3">
                          <a className="text-gray-400 hover:cursor-pointer bg-transparent border border-gray-600 py-1 text-center px-3 rounded-full" href="https://github.com/amirali729">
                            GitHub
                          </a>
                          <a className="text-gray-400 hover:cursor-pointer bg-transparent border border-gray-600 py-1 px-3 text-center rounded-full" href="https://www.linkedin.com/in/amirali729/">
                            LinkedIn
                          </a>
                          <a className="text-gray-400 hover:cursor-pointer bg-transparent border border-gray-600 py-1 text-center rounded-full" href="mailto:amirsimu971@gmail.com">
                            Email
                          </a>
            
                        </div>
      {/* Enhanced Responsive Footer with Accessibility */}
      <footer className="relative bg-gray-900 overflow-hidden  w-full" role="contentinfo">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <div
                className="flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 transform hover:scale-110 transition-transform duration-300"
                role="img"
                aria-label="Amir Ali Logo"
              >
                {/* Yellow Triangle Logo */}
                <div className="mb-2">
                  <svg
                    width="28"
                    height="22"
                    viewBox="0 0 24 20"
                    fill="none"
                    className="w-7 h-6 sm:w-8 sm:h-7"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <title>Triangle Logo</title>
                    <path d="M12 0L24 20H0L12 0Z" fill="#FFD700" />
                    <path d="M12 6L6 16H18L12 6Z" fill="#1F2937" />
                  </svg>
                </div>
                {/* AMIR Text */}
                <div className="text-xs sm:text-sm font-bold text-green-400 tracking-wider" aria-hidden="true">
                  AMIR
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Let's Build Something Amazing</h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                Ready to turn your ideas into reality? I'm always excited to work on new projects and collaborate with amazing people.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6 sm:pt-8 space-y-4 md:space-y-0">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div
                  className="flex flex-col items-center justify-center w-8 h-10 sm:w-10 sm:h-12"
                  role="img"
                  aria-label="Amir Ali Logo"
                >
                  {/* Yellow Triangle Logo */}
                  <div className="mb-1">
                    <svg
                      width="14"
                      height="11"
                      viewBox="0 0 24 20"
                      fill="none"
                      className="w-3.5 h-3 sm:w-4 sm:h-3.5"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <title>Triangle Logo</title>
                      <path d="M12 0L24 20H0L12 0Z" fill="#FFD700" />
                      <path d="M12 6L6 16H18L12 6Z" fill="#1F2937" />
                    </svg>
                  </div>
                  {/* AMIR Text */}
                  <div className="text-[7px] sm:text-[8px] font-bold text-green-400 tracking-wider" aria-hidden="true">
                    AMIR
                  </div>
                </div>
                <div>
                  <p className="font-bold text-white text-sm sm:text-base">{personalInfo.name}</p>
                  <p className="text-xs sm:text-sm text-gray-400">{personalInfo.title}</p>
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