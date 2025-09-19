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

export const education = {
  degree: "Bachelor of Computer Science",
  university: "University of Karachi",
  period: "2014 - 2018",
  gpa: "3.8/4.0",
  specialization: "Software Engineering & Web Development"
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

export const testimonials = [
  {
    name: 'Sarah Ahmed',
    role: 'CTO, Tech Innovations Ltd.',
    content: 'Amir transformed our entire development process. His technical expertise and leadership skills helped us deliver projects 40% faster while maintaining high quality standards.',
    rating: 5,
    company: 'Tech Innovations Ltd.'
  },
  {
    name: 'Michael Khan',
    role: 'Product Manager, Digital Solutions Hub',
    content: 'Working with Amir was exceptional. He consistently delivered complex features ahead of schedule and his attention to detail is remarkable.',
    rating: 5,
    company: 'Digital Solutions Hub'
  },
  {
    name: 'Dr. Fatima Malik',
    role: 'Director, HealthCare Plus',
    content: 'The patient management system Amir built for us has revolutionized our operations. The user experience is fantastic and it\'s incredibly reliable.',
    rating: 5,
    company: 'HealthCare Plus'
  }
];

export const certifications = [
  { 
    name: 'AWS Certified Solutions Architect - Associate', 
    issuer: 'Amazon', 
    year: '2023', 
    badge: 'Cloud Architecture',
    credentialId: 'AWS-SA-2023-001' 
  },
  { 
    name: 'Meta React Developer Certificate', 
    issuer: 'Meta', 
    year: '2022', 
    badge: 'Frontend Development',
    credentialId: 'META-REACT-2022-015' 
  },
  { 
    name: 'Google Cloud Professional Developer', 
    issuer: 'Google Cloud', 
    year: '2023', 
    badge: 'Cloud Development',
    credentialId: 'GCP-DEV-2023-089' 
  }
];

export const socialLinks = {
  github: 'https://github.com/amirali', // Updated to match your profile
  linkedin: 'https://linkedin.com/in/amir-ali-dev', // Updated
  email: 'mailto:amirpech10@gmail.com', // Using your provided email
  resume: '/amir-ali-resume.pdf', // Updated filename
  portfolio: 'https://amirali.dev' // Added portfolio link
};

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

export const seoData = {
  title: "Amir Ali - Full Stack Developer", // Fixed: Updated name
  description: "Experienced full-stack developer from Karachi, Pakistan, specializing in React, Node.js, and cloud architecture. 7+ years of building scalable web applications.",
  keywords: "full stack developer, react developer, node.js, typescript, aws, karachi developer, pakistan developer, web development",
  author: "Amir Ali", // Fixed: Updated name
  url: "https://amirali.dev", // Updated URL
  image: "/amir-ali-og-image.jpg" // Added OG image
};

// Contact information for contact section
export const contactInfo = {
  title: "Let's Work Together",
  subtitle: "I'm always interested in new opportunities and exciting projects.",
  availability: "Available for freelance projects and full-time opportunities",
  responseTime: "Usually responds within 24 hours",
  preferredContact: "email" // or "phone"
};