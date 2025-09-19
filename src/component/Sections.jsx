import React from 'react';
import { personalInfo, skills, experience, projects } from './PortfolioData';
import AnimatedElement from './AnimatedElement';
import FloatingParticles from './FloatingParticles';

const Sections = () => {
  return (
    <div>
      {/* About Section */}
      <section id="about" className="relative py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <AnimatedElement>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
            </div>
          </AnimatedElement>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <AnimatedElement delay={200}>
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  {personalInfo.aboutDescription}
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-gray-400">{personalInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">📱</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p className="text-gray-400">{personalInfo.phone}</p>
                  </div>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={400}>
              <div className="grid grid-cols-2 gap-6">
                {Object.entries(personalInfo.aboutStats).map(([key, value], idx) => (
                  <div key={idx} className="group relative p-8 rounded-2xl bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative">
                      <p className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                        {value}
                      </p>
                      <p className="text-gray-300 font-medium capitalize">
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

      {/* Skills Section */}
      <section id="skills" className="relative py-24 bg-gradient-to-br from-black to-gray-900 overflow-hidden">
        <FloatingParticles />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <AnimatedElement>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                My <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, idx) => (
              <AnimatedElement key={idx} delay={idx * 100}>
                <div className="group relative p-8 rounded-2xl bg-gray-800/40 backdrop-blur-lg border border-gray-700 hover:bg-gray-700/40 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
                      <span className="text-cyan-400 font-bold">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-3 mb-4 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    
                    <p className="text-gray-400 text-sm">{skill.projects} projects</p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedElement>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Work <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
            </div>
          </AnimatedElement>

          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <AnimatedElement key={idx} delay={idx * 200}>
                <div className="group relative">
                  <div className="flex">
                    <div className="flex flex-col items-center mr-8">
                      <div className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                      {idx < experience.length - 1 && (
                        <div className="w-0.5 h-24 bg-gradient-to-b from-cyan-500 to-blue-500 mt-4"></div>
                      )}
                    </div>
                    
                    <div className="flex-1 bg-gray-800/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-700">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative">
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                        <p className="text-cyan-400 font-semibold mb-1">{exp.company}</p>
                        <p className="text-gray-400 text-sm mb-4">{exp.period} | {exp.location}</p>
                        <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, tid) => (
                            <span key={tid} className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/30">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24 bg-gradient-to-br from-black to-gray-900 overflow-hidden">
        <FloatingParticles />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <AnimatedElement>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <AnimatedElement key={idx} delay={idx * 200}>
                <div className="group relative bg-gray-800/40 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:bg-gray-700/40 transition-all duration-500 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                      <span className="text-white text-xl">🚀</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 4).map((tech, tid) => (
                        <span key={tid} className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm font-medium">
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between text-gray-400 text-sm">
                      <span>{project.duration}</span>
                      <span className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sections;