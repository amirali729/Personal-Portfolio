import React, { memo } from 'react';
import { personalInfo, skills, experience, projects } from './PortfolioData';
import AnimatedElement from './AnimatedElement';
import FloatingParticles from './FloatingParticles';

const Sections = memo(() => {
  return (
    <div>
      {/* About Section - Fully Responsive */}
      <section 
        id="about" 
        className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden"
        aria-labelledby="about-heading"
      >
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement>
            <header className="text-center mb-12 sm:mb-16">
              <h2 id="about-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" aria-hidden="true"></div>
            </header>
          </AnimatedElement>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
            <AnimatedElement delay={200}>
              <div className="space-y-6 sm:space-y-8">
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                  {personalInfo.aboutDescription}
                </p>
                <div className="space-y-4 sm:space-y-6" role="list" aria-label="Contact information">
                  <div className="flex items-center space-x-4" role="listitem">
                    <div 
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0"
                      aria-hidden="true"
                    >
                      <span className="text-white font-bold text-lg sm:text-xl">📧</span>
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-white text-sm sm:text-base">Email</p>
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className="text-gray-400 text-sm sm:text-base break-all hover:text-cyan-400 transition-colors duration-300"
                        aria-label={`Send email to ${personalInfo.email}`}
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4" role="listitem">
                    <div 
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0"
                      aria-hidden="true"
                    >
                      <span className="text-white font-bold text-lg sm:text-xl">📱</span>
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-white text-sm sm:text-base">Phone</p>
                      <a 
                        href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                        className="text-gray-400 text-sm sm:text-base hover:text-cyan-400 transition-colors duration-300"
                        aria-label={`Call ${personalInfo.phone}`}
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={400}>
              <div className="grid grid-cols-2 gap-4 sm:gap-6" role="list" aria-label="Statistics">
                {Object.entries(personalInfo.aboutStats).map(([key, value], idx) => (
                  <div key={idx} className="group relative p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500" role="listitem">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>
                    <div className="relative">
                      <p className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                        {value}
                      </p>
                      <p className="text-gray-300 font-medium capitalize text-xs sm:text-sm lg:text-base leading-tight">
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Skills Section - Fully Responsive */}
      <section 
        id="skills" 
        className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-black to-gray-900 overflow-hidden"
        aria-labelledby="skills-heading"
      >
        <FloatingParticles />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement>
            <header className="text-center mb-12 sm:mb-16">
              <h2 id="skills-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                My <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" aria-hidden="true"></div>
            </header>
          </AnimatedElement>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" role="list" aria-label="Technical skills">
            {skills.map((skill, idx) => (
              <AnimatedElement key={idx} delay={idx * 100}>
                <article className="group relative p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gray-800/40 backdrop-blur-lg border border-gray-700 hover:bg-gray-700/40 transition-all duration-500" role="listitem">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>
                  <div className="relative">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 leading-tight pr-2">{skill.name}</h3>
                      <span className="text-cyan-400 font-bold text-sm sm:text-base flex-shrink-0" aria-label={`${skill.level} percent proficiency`}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2.5 sm:h-3 mb-4 overflow-hidden" role="progressbar" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100} aria-label={`${skill.name} proficiency`}>
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    
                    <p className="text-gray-400 text-sm">{skill.projects} projects</p>
                  </div>
                </article>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section - Fully Responsive */}
      <section 
        id="experience" 
        className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-900 to-black"
        aria-labelledby="experience-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement>
            <header className="text-center mb-12 sm:mb-16">
              <h2 id="experience-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Work <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" aria-hidden="true"></div>
            </header>
          </AnimatedElement>

          <div className="space-y-8 sm:space-y-12" role="list" aria-label="Work experience">
            {experience.map((exp, idx) => (
              <AnimatedElement key={idx} delay={idx * 200}>
                <article className="group relative" role="listitem">
                  <div className="flex">
                    <div className="flex flex-col items-center mr-6 sm:mr-8" aria-hidden="true">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                      {idx < experience.length - 1 && (
                        <div className="w-0.5 h-20 sm:h-24 bg-gradient-to-b from-cyan-500 to-blue-500 mt-4"></div>
                      )}
                    </div>
                    
                    <div className="flex-1 bg-gray-800/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-700">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>
                      <div className="relative">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">{exp.title}</h3>
                        <p className="text-cyan-400 font-semibold mb-1 text-base sm:text-lg">{exp.company}</p>
                        <p className="text-gray-400 text-sm mb-4 sm:mb-6">
                          <time>{exp.period}</time> | {exp.location}
                        </p>
                        <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">{exp.description}</p>
                        
                        <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
                          {exp.technologies.map((tech, tid) => (
                            <span key={tid} className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-full text-xs sm:text-sm font-medium border border-cyan-500/30" role="listitem">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Fully Responsive */}
      <section 
        id="projects" 
        className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-black to-gray-900 overflow-hidden"
        aria-labelledby="projects-heading"
      >
        <FloatingParticles />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement>
            <header className="text-center mb-12 sm:mb-16">
              <h2 id="projects-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" aria-hidden="true"></div>
            </header>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8" role="list" aria-label="Featured projects">
            {projects.map((project, idx) => (
              <AnimatedElement key={idx} delay={idx * 200}>
                <article className="group relative bg-gray-800/40 backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700 hover:bg-gray-700/40 transition-all duration-500 hover:scale-105" role="listitem">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>
                  <div className="relative">
                    <div 
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300"
                      aria-hidden="true"
                    >
                      <span className="text-white text-lg sm:text-xl" role="img" aria-label="rocket">🚀</span>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight">{project.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Technologies used">
                      {project.tech.slice(0, 4).map((tech, tid) => (
                        <span key={tid} className="px-2 py-1 sm:px-3 bg-gray-700 text-gray-200 rounded-full text-xs sm:text-sm font-medium" role="listitem">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-2 py-1 sm:px-3 bg-gray-700 text-gray-200 rounded-full text-xs sm:text-sm font-medium" role="listitem">
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between text-gray-400 text-xs sm:text-sm">
                      <span>
                        <time>{project.duration}</time>
                      </span>
                      <span className="flex items-center">
                        <div className={`w-2 h-2 bg-red-400 rounded-full mr-2`} aria-hidden="true"></div>
                        <span aria-label={`Project status: ${project.status}`}>{project.status}</span>
                      </span>
                    </div>
                  </div>
                </article>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>
      

     
    </div>
  );
});

Sections.displayName = 'Sections';

export default Sections;