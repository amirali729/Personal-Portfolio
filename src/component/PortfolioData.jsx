// portfolioData.js - Portfolio Configuration Data

export const personalInfo = {
  name: "Amir Ali",
  initials: "AA", // Fixed: Changed from "JD" to match name
  title: "Full Stack Developer", // Fixed: Removed extra space
  subtitle: "Available for new opportunities",
  location: "Pakistan, Karachi",
  email: "amirpech10@gmail.com",
  phone: "0329 2610967",

  // Hero section content
  heroDescription: `Transforming complex business challenges into elegant, scalable solutions. 
    I architect systems 
    that drive growth and deliver exceptional user experiences.`,

  // About section content
  aboutDescription: `I'm a passionate full-stack developer with 7+ years of experience building scalable web applications. 
    I specialize in creating robust, user-centric solutions that solve real-world problems and drive business growth.`,

  // Stats for general use
  stats: {
    projectsCompleted: "65+",
    yearsExperience: "7+",
    usersImpacted: "100K+"
  },

  // Stats specifically for about section
  aboutStats: {
    projectsCompleted: "65+",
    yearsExperience: "7+",
    usersImpacted: "100K+",
    clientSatisfaction: "98%"
  }
};



export const skills = [
  { name: 'React & Next.js Development', level: 95, category: 'Frontend', projects: 35 },
  { name: 'Node.js & Express.js', level: 92, category: 'Backend', projects: 28 },
  { name: 'TypeScript & JavaScript ES6+', level: 94, category: 'Languages', projects: 40 },
  { name: 'MySQL & MongoDB', level: 90, category: 'Database', projects: 30 }, // Fixed: MySQL spelling
  { name: 'GraphQL & REST APIs', level: 91, category: 'API Design', projects: 32 },
  { name: 'Redux & State Management', level: 89, category: 'Frontend', projects: 28 },
  { name: 'Git & GitHub', level: 93, category: 'DevOps', projects: 35 }, // Fixed: GitHub spelling
  { name: 'Team Leadership & Mentoring', level: 92, category: 'Leadership', projects: 15 }
];

export const experience = [
  {
    title: 'Senior Full Stack Developer & Tech Lead',
    company: 'Tech Innovations Ltd.',
    period: 'Jan 2022 - Present',
    location: 'Karachi, Pakistan',
    description: 'Leading a team of 6 developers in building scalable web applications for e-commerce and fintech clients. Responsible for architecture decisions, code reviews, and mentoring junior developers.',
    achievements: [
      'Reduced application load time by 65% through optimization',
      'Led migration to microservices architecture',
      'Implemented automated testing pipeline reducing bugs by 80%',
      'Mentored 8 junior developers',
      'Delivered 25+ major projects on time and within budget'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL', 'Redis', 'GraphQL']
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Hub',
    period: 'Mar 2019 - Dec 2021',
    location: 'Karachi, Pakistan',
    description: 'Developed and maintained multiple web applications and SaaS platforms. Focused on creating responsive, user-friendly interfaces and robust backend systems.',
    achievements: [
      'Built 20+ responsive web applications',
      'Implemented real-time features with WebSockets',
      'Optimized database queries improving performance by 50%',
      'Established coding standards for the development team',
      'Achieved 96% project success rate'
    ],
    technologies: ['React', 'Vue.js', 'Express.js', 'MongoDB', 'Socket.io', 'AWS', 'Jest']
  },
  {
    title: 'Frontend Developer',
    company: 'StartUp Ventures',
    period: 'Jun 2017 - Feb 2019',
    location: 'Karachi, Pakistan',
    description: 'Started as a junior developer and grew into handling complex frontend projects. Collaborated with design teams to create pixel-perfect, interactive user interfaces.',
    achievements: [
      'Developed 15+ responsive web applications',
      'Reduced page load times by 40% through optimization',
      'Implemented modern JavaScript frameworks',
      'Collaborated with UX/UI designers on 20+ projects'
    ],
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'jQuery', 'Bootstrap', 'Sass', 'Webpack']
  }
];

export const projects = [
  {
    title: 'E-Commerce Platform Redesign',
    description: 'Complete overhaul of a legacy e-commerce system serving 50,000+ daily users. Implemented modern architecture with microservices, improved performance, and enhanced user experience.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe API', 'AWS Lambda', 'Docker'],
    category: 'E-Commerce',
    duration: '8 months',
    team: '6 developers',
    impact: '45% increase in sales',
    status: 'Production',
    metrics: { users: '15,000+', uptime: '99.97%', performance: '65% faster checkout' }
  },
  {
    title: 'Healthcare Patient Management System',
    description: 'HIPAA-compliant web application for healthcare providers to manage patient records, appointments, and telemedicine consultations with real-time video calling.',
    tech: ['React', 'TypeScript', 'Express.js', 'MongoDB', 'WebRTC', 'Socket.io', 'AWS S3'],
    category: 'Healthcare',
    duration: '6 months',
    team: '8 developers',
    impact: '60% reduction in admin time',
    status: 'Production',
    metrics: { users: '3,500+', uptime: '99.95%', performance: '70% faster data retrieval' }
  },
  {
    title: 'Financial Dashboard Analytics',
    description: 'Real-time financial analytics dashboard for investment firms with complex data visualization, portfolio tracking, and automated reporting features.',
    tech: ['Next.js', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL', 'Redis', 'Chart.js'],
    category: 'Fintech',
    duration: '5 months',
    team: '4 developers',
    impact: '50% faster decision making',
    status: 'Production',
    metrics: { users: '2,000+', uptime: '99.9%', performance: '3x faster data processing' }
  },
  {
    title: 'Learning Management System',
    description: 'Comprehensive LMS platform for educational institutions with course management, student progress tracking, and interactive learning modules.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'AWS S3', 'Stripe', 'JWT'],
    category: 'Education',
    duration: '7 months',
    team: '5 developers',
    impact: '40% improvement in student engagement',
    status: 'Production',
    metrics: { users: '8,000+', uptime: '99.8%', performance: '55% faster content delivery' }
  }
];







// Navigation items that match your component structure
export const navigationItems = [
  "Home",
  "About", 
  "Skills",
  "Experience",
  "Projects",
  
];

export const footerContent = {
  copyright: "© 2025 Amir Ali. All rights reserved.", // Fixed: Updated name
  subtitle: "Crafted with precision and passion for excellence",
  links: [
    { text: "Privacy Policy", href: "/privacy" },
    { text: "Terms of Service", href: "/terms" },
    { text: "Sitemap", href: "/sitemap" }
  ]
};




