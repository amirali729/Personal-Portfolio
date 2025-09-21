import React, { memo } from 'react';
import { personalInfo } from './PortfolioData';
import AnimatedElement from './AnimatedElement';
import FloatingParticles from './FloatingParticles';

const Hero = memo(() => {
  return (
    <section 
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
      aria-label="Hero section"
    >
      <FloatingParticles />
      
      {/* Animated Background Elements - Responsive sizes */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 sm:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-64 sm:h-64 bg-teal-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 pt-20 sm:pt-32 pb-10 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <AnimatedElement delay={200}>
              <div 
                className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 sm:mb-6"
                role="status"
                aria-label="Availability status"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" aria-hidden="true"></div>
                <span className="text-white/80 text-xs sm:text-sm">{personalInfo.subtitle}</span>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={400}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent leading-tight">
                {personalInfo.name}
              </h1>
            </AnimatedElement>
            
            <AnimatedElement delay={600}>
              <p className="text-lg sm:text-xl md:text-2xl text-cyan-200 mb-6 sm:mb-8 font-light">
                {personalInfo.title}
              </p>
            </AnimatedElement>
            
            <AnimatedElement delay={800}>
              <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed max-w-full sm:max-w-2xl mx-auto lg:mx-0">
                {personalInfo.heroDescription}
              </p>
            </AnimatedElement>
            
            <AnimatedElement delay={1000}>
              <div className="flex flex-row gap-4 sm:gap-6 justify-center lg:justify-start flex-wrap">
                {/* GitHub Circular Button */}
                <a 
                  href="https://github.com/amirali" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:shadow-white/25 hover:scale-110 border border-gray-700 hover:border-gray-500"
                  aria-label="Visit Amir Ali's GitHub profile"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
                  <svg 
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white group-hover:text-gray-200 transition-colors duration-300 relative z-10" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <title>GitHub</title>
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 opacity-0 group-hover:opacity-100" aria-hidden="true"></div>
                </a>
                
                {/* LinkedIn Circular Button */}
                <a 
                  href="https://linkedin.com/in/amir-ali-dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-110 border border-blue-500 hover:border-blue-400"
                  aria-label="Visit Amir Ali's LinkedIn profile"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
                  <svg 
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white group-hover:text-blue-100 transition-colors duration-300 relative z-10" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <title>LinkedIn</title>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <div className="absolute inset-0 rounded-full bg-blue-400/30 scale-0 group-hover:scale-100 transition-transform duration-500 opacity-0 group-hover:opacity-100" aria-hidden="true"></div>
                </a>     
              </div>
            </AnimatedElement>
          </div>

          {/* Profile Image */}
          <AnimatedElement delay={1200}>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative group">
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl sm:blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"
                  aria-hidden="true"
                ></div>
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 sm:border-4 border-gray-700 backdrop-blur-sm">
                  <div 
                    className="w-full h-full bg-gradient-to-br from-cyan-400/20 to-blue-400/20 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl font-bold text-white"
                    role="img"
                    aria-label="Amir Ali profile placeholder"
                  >
                    {personalInfo.initials}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;