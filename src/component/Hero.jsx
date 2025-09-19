import React from 'react';
import { personalInfo } from './PortfolioData';
import AnimatedElement from './AnimatedElement';
import FloatingParticles from './FloatingParticles';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <FloatingParticles />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center lg:justify-between gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <AnimatedElement delay={200}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-white/80 text-sm">{personalInfo.subtitle}</span>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={400}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
                {personalInfo.name}
              </h1>
            </AnimatedElement>
            
            <AnimatedElement delay={600}>
              <p className="text-xl md:text-2xl text-cyan-200 mb-8 font-light">
                {personalInfo.title}
              </p>
            </AnimatedElement>
            
            <AnimatedElement delay={800}>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-2xl">
                {personalInfo.heroDescription}
              </p>
            </AnimatedElement>
            
            <AnimatedElement delay={1000}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                {/* GitHub Button */}
                <a 
                  href="https://github.com/amirali" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-gray-500/25 flex items-center space-x-3"
                >
                  <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="relative z-10">GitHub</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                
                {/* LinkedIn Button */}
                <a 
                  href="https://linkedin.com/in/amir-ali-dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center space-x-3"
                >
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="relative z-10">LinkedIn</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </AnimatedElement>
          </div>

          {/* Profile Image */}
          <AnimatedElement delay={1200}>
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-700 backdrop-blur-sm">
                  {/* You can replace this with an actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-cyan-400/20 to-blue-400/20 flex items-center justify-center text-6xl font-bold text-white">
                    {personalInfo.initials}
                  </div>
                  {/* For actual image, use this instead:
                  <img
                    src="/profile-pic.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                  */}
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Hero;