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