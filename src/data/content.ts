export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/amaanrahman7' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amaaan/' },
  { label: 'Email', href: 'mailto:amaanrahman9@gmail.com' },
  { label: 'Resume', href: '/amaan-rahman-resume.pdf' },
]

export const BIO =
  "I'm a computer science student from Texas. I'm currently building software at the intersection of AI and product engineering."

export const SKILLS = [
  {
    label: 'Technical Skills',
    items: ['Python', 'Java', 'C++', 'JavaScript', 'SQL', 'MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    label: 'Frameworks',
    items: [
      'React',
      'Flask',
      'Node.js',
      'Django',
      'API Development',
      'REST APIs',
      'AWS',
      'Docker',
      'Kubernetes',
      'System Design',
    ],
  },
  {
    label: 'Data & Analytics',
    items: ['Power BI', 'Tableau', 'A/B Testing', 'KPI Tracking'],
  },
  {
    label: 'Tools',
    items: [
      'Git',
      'Microsoft Suite',
      'JIRA',
      'Figma',
      'Qualtrics',
      'NumPy',
      'Pandas',
      'Agile Methodologies',
      'Market Sizing',
      'Process Redesign',
    ],
  },
]

export const EDUCATION = {
  school: 'Texas Tech University',
  location: 'Lubbock, TX',
  degree: 'B.S. Computer Science',
  minor: 'Minor in Mathematics',
  date: 'December 2026',
}

export const WORK_EXPERIENCE = [
  {
    company: 'Summit Therapeutics',
    location: 'Palo Alto, CA',
    role: 'Software Engineering Intern',
    date: 'May 2026 – August 2026',
    bullets: [
      'Developed an AI-powered ticket orchestration agent using Python, REST APIs, and LLMs to analyze and route 500+ monthly IT support tickets, reducing manual triage effort by 45%.',
      'Built a RAG pipeline by indexing 1,000+ SharePoint documents into a vector database, enabling automated resolution of common support requests and reducing ticket workload by 35%.',
      'Engineered a Microsoft Teams chatbot using backend services and API integrations to provide real-time access to internal documentation, accelerating troubleshooting and knowledge retrieval for IT teams.',
    ],
  },
  {
    company: 'Cisco (Splunk)',
    location: 'Boulder, CO',
    role: 'Software Engineering Intern',
    date: 'May 2025 – August 2025',
    bullets: [
      'Delivered frontend enhancements to Trace View using React and TypeScript, enabling service-aware span highlighting across 4+ entry points, which reduced user navigation time by 30% during trace analysis.',
      'Redesigned filter and search interactions in the APM waterfall view for 10k+ weekly users, improving scroll-to-match behavior and visual alignment, resulting in a 40% reduction in missed trace matches.',
      'Refactored sidebar architecture using modern React patterns to support persistent user preferences and collapsible UI sections, enhancing usability and layout scalability across APM views.',
    ],
  },
  {
    company: 'ITC Limited',
    location: 'Remote',
    role: 'Software Engineering Intern',
    date: 'May 2023 – August 2023',
    bullets: [
      'Developed and integrated a new inventory management module for the agribusiness segment, resulting in a 10% increase in logistics efficiency.',
      "Optimized database queries in the FMCG division's supply chain system, reducing data retrieval times by 25% and enhancing user experience.",
      'Collaborated with the IT team to design and implement a streamlined reporting tool for the hotel segment, improving real-time data accuracy and decision-making efficiency.',
    ],
  },
]

export const LEADERSHIP_EXPERIENCE = [
  {
    company: 'Google Developer Group',
    location: undefined,
    role: 'Vice President',
    date: 'August 2025 – Present',
    bullets: [
      'Directed cross-functional initiatives such as AI chatbot development and web app projects, fostering real-world technical learning and collaboration among members.',
      'Organized and led coding workshops while developing educational resources, resulting in increased student engagement and technical skill-building across the club.',
    ],
  },
]

export const PROJECTS = [
  {
    name: 'Splunk APM Trace View Enhancements',
    date: 'August 2025',
    tech: ['React', 'TypeScript'],
    link: undefined,
    bullets: [
      "Redesigned span highlighting for Splunk's waterfall view to display only the most relevant span, reducing user confusion and improving root cause identification speed.",
      'Implemented distinct visual indicators and auto-scrolling for search/filter matches, enhancing navigation efficiency.',
    ],
  },
  {
    name: 'CampusPlay',
    date: 'August 2025',
    tech: ['React', 'TypeScript', 'Supabase'],
    link: 'https://github.com/amaanrahman7',
    bullets: [
      'Founded and developed CampusPlay, an application that helps Texas Tech students discover and organize pickup games and campus events, improving student engagement and recreation accessibility.',
      'Delivered end-to-end features (authentication, scheduling, matchmaking) with React, TypeScript, and Supabase, enabling 50+ organized pickup games.',
    ],
  },
  {
    name: 'AmaanGPT',
    date: 'September 2024',
    tech: ['LangChain', 'HuggingFace', 'LLaMA-3.1-70b', 'RAG'],
    link: 'https://github.com/amaanrahman7',
    bullets: [
      'Engineered AmaanGPT, an advanced AI chatbot utilizing LangChain, HuggingFace embeddings, and the LLaMA-3.1-70b model, designed for highly accurate, dynamic interactions.',
      'Pioneered the use of Retrieval-Augmented Generation (RAG) to split and analyze PDF documents, enabling precise, context-driven responses.',
    ],
  },
]
