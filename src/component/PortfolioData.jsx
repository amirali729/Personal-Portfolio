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
  aboutDescription: `“I’m a passionate aspiring full-stack developer with a strong interest in building scalable web applications. I specialize in creating user-centric solutions and am continuously learning modern technologies to solve real-world problems and contribute to business growth.`,

  // Stats for general use
  

  // Stats specifically for about section
  aboutStats: {
    projectsCompleted: "10+",
    yearsExperience: "1+",
    Technologies: "15+",
    Certifications: "5"
  }
};



export const skills = [
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'Node'},
  { name: 'React' },
  { name: 'Next' },
  { name: 'Express'},
  { name: 'MongoDB' }, 
  { name: 'MySQL' }, 
  { name: 'PostgreSQL' }, 
  { name: 'Docker' }, 
  { name: 'AWS' }, 
  { name: 'REST APIs'},
  { name: 'Git'}, 
];

export const experience = [
  {
    title: 'Web developer',
    company: 'CodeAlpha.',
    period: 'Sep 2025 - Present',
    location: 'Karachi, Pakistan',
    description: 'Leading a team of 6 developers in building scalable web applications for e-commerce and fintech clients. Responsible for architecture decisions, code reviews, and mentoring junior developers.',
    technologies: ['React', 'Node.js', 'TypeScript', 'Next.js', 'Git', 'Mongodb']
  },
  {
    title: 'backend developer',
    company: 'Apexcify Techonology',
    period: 'Aug 2025 - Sep 2025',
    location: 'Karachi, Pakistan',
    description: 'Developed and maintained multiple web applications and SaaS platforms. Focused on creating responsive, user-friendly interfaces and robust backend systems.',
    technologies: ['Javascript', 'Node.js', 'Express.js', 'MongoDB', 'Git']
  },
 
];

export const projects = [
  {
    title: 'Youtube Twitter Backend',
    description: 'A web application that connects YouTube and Twitter to simplify content sharing across platforms. The project integrates both APIs to automatically fetch the latest YouTube videos from selected channels and share them on Twitter with customizable messages',
    tech: ['JavaScript', 'Node.js', 'MongoDb','JWT'  ,'Auth','Express.js', 'Git'],
    category: 'Social',
    duration: '3 months',
    status: 'Production',
   
  },
  {
    title: 'AI Multi Model Chat',
    description: 'A web-based interface that enables users to chat simultaneously with multiple AI models, combining different conversational agents in one platform. The application allows users to switch between or compare responses from separate AI models in real time, facilitating richer insights and more versatile interaction.',
    tech: ['React', 'JavaScript', 'Vite', 'Tailwind Css'],
    category: 'LLm',
    duration: '1 months',
    status: 'Production',
  },
  {
    title: 'Job Board Platform Backend',
    description: 'Job Board Platform is a web application that streamlines the recruitment process by bringing together job seekers and employers in an intuitive, user-friendly online marketplace. It allows employers to post job listings with key details while giving candidates a clean interface to search, filter, and apply for roles.',
    tech: ['JavaScript', 'Node.js', 'MongoDb', 'PostMan', 'Rest API'],
    category: 'Job',
    duration: '2 months',
    status: 'Production',

  },
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




