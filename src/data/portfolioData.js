export const profile = {
  name: import.meta.env.VITE_FULL_NAME || 'Ehteshamul Haque',
  location: import.meta.env.VITE_LOCATION || 'New Delhi, India',
  role: 'Python Backend Developer | FastAPI, Flask, Django | MySQL, MongoDB | Learning ML & Applied AI',
  photo: import.meta.env.VITE_PROFILE_PHOTO || '/profile-photo.jpg',
  tagline:
    'I build efficient backend systems that improve performance, stay maintainable, and support growth with clean API design.',
  objective:
    'Build scalable backend services and efficient APIs with Python, FastAPI, Flask, and Django, while deepening applied AI knowledge for practical use cases in finance and secure digital systems.',
  email: import.meta.env.VITE_CONTACT_EMAIL || 'ehteshamulhaque736@gmail.com',
  github:
    import.meta.env.VITE_GITHUB_PROFILE || 'https://github.com/Mdehteshamulhaque1',
  linkedin:
    import.meta.env.VITE_LINKEDIN_PROFILE ||
    'https://www.linkedin.com/in/mdehteshamulhaque',
  twitter: import.meta.env.VITE_TWITTER_PROFILE || '',
  leetcode:
    import.meta.env.VITE_LEETCODE_PROFILE || 'https://leetcode.com/u/Mdehteshamulhaque/',
  githubUsername: import.meta.env.VITE_GITHUB_USERNAME || 'Mdehteshamulhaque1',
  resumeFile: import.meta.env.VITE_RESUME_FILE || '/resume.pdf',
}

export const resumeHighlights = [
  {
    title: 'Core Focus',
    detail: 'Python backend development, efficient APIs, and reliable data workflows.',
  },
  {
    title: 'Engineering Strength',
    detail: 'Performance optimization, database handling, and secure service design.',
  },
  {
    title: 'Delivery Style',
    detail: 'Clean architecture, practical problem solving, and recruiter-ready project execution.',
  },
]

export const careerTimeline = [
  {
    phase: 'Foundation',
    period: '2022-2023',
    summary: 'Built programming fundamentals in C, C++, Python, SQL, and data modeling.',
  },
  {
    phase: 'Backend Training',
    period: '2024-2025',
    summary: 'Developed backend services with FastAPI, Flask, and Django using API-first practices.',
  },
  {
    phase: 'Applied Projects',
    period: '2025-2026',
    summary: 'Built performance-focused backend projects and data-processing systems with practical impact.',
  },
  {
    phase: 'Scaling Focus',
    period: 'Now',
    summary: 'Focusing on reliable backend architecture, applied AI learning, and production-ready engineering habits.',
  },
]

export const skills = {
  Languages: ['Python', 'C++', 'C', 'Java (Basic)'],
  Backend: ['FastAPI', 'Flask', 'Django'],
  Database: ['MySQL', 'MongoDB', 'SQL'],
  Tools: ['Git & GitHub', 'VS Code'],
  Concepts: ['REST APIs', 'Authentication', 'DSA'],
}

export const projects = [
  {
    id: 'api-optimizer',
    title: 'API Optimizer',
    challenge:
      'Repeated requests were slowing down API responses and making the backend less efficient under load.',
    solution:
      'Built an optimized FastAPI backend with caching, cleaner request handling, and better database access patterns.',
    stack: ['Python', 'FastAPI', 'MySQL'],
    features: [
      'Implemented caching to reduce redundant processing',
      'Streamlined request handling for faster responses',
      'Designed a scalable backend structure with clean separation of concerns',
    ],
    metrics: [
      'Improved response efficiency for repeated requests',
      'Reduced latency through optimized backend flow',
      'Focused on maintainable, performance-first architecture',
    ],
    github: import.meta.env.VITE_PROJECT1_GITHUB || '',
    demo: '',
  },
  {
    id: 'social-media-analysis',
    title: 'Social Media Analysis System',
    challenge:
      'Raw social media data needed to be processed efficiently so useful trends and user behavior insights could be extracted.',
    solution:
      'Created a backend workflow for collecting, processing, and analyzing social data with a focus on efficiency and readability.',
    stack: ['Python', 'APIs', 'Data Processing'],
    features: [
      'Processed large datasets efficiently',
      'Implemented basic sentiment and trend analysis',
      'Generated meaningful insights from raw data',
    ],
    metrics: [
      'Handled data-heavy workflows with good processing efficiency',
      'Turned raw inputs into actionable analysis outputs',
      'Kept the backend focused on speed and clarity',
    ],
    github: import.meta.env.VITE_PROJECT2_GITHUB || '',
    demo: '',
  },
]

export const experience = [
  {
    company: 'Qspider',
    role: 'Backend Development Training / Internship',
    period: '2025 - 2026',
    work: [
      'Designed RESTful APIs using FastAPI with schema-first validation.',
      'Modeled relational schemas in MySQL for transaction-heavy use cases.',
      'Implemented authentication and role-based access controls for secure endpoints.',
      'Collaborated on deployment checklists, API documentation, and testing workflows.',
    ],
  },
]

export const achievements = [
  'Strengthened DSA problem solving in C++ while building backend-focused projects.',
  'Built APIs and backend systems with a strong focus on performance and clean architecture.',
  'Completed certifications in Java, Python, SQL, cybersecurity awareness, and professional skills.',
]

export const certifications = [
  {
    title: 'Core Java Certification',
    courseTitle: 'Object-Oriented Programming',
    issuer: 'Internshala',
    year: '2023',
    issuedOn: '2023',
    badge: 'JAVA',
    level: 'Basic',
    credentialId: 'INT-JAVA-2023',
    verifyUrl: '',
    credential: 'Formal training in object-oriented programming concepts, core Java syntax, and problem solving.',
  },
  {
    title: 'Python & SQL Professional Course',
    courseTitle: 'QSpiders - Software Testing Training Institute',
    issuer: 'PySpiders',
    year: '2024',
    issuedOn: '2024',
    badge: 'PY-SQL',
    level: 'Professional',
    credentialId: 'PYSQL-2024',
    verifyUrl: '',
    credential: 'Completed Python & SQL training covering programming, database queries, joins, and backend basics.',
  },
  {
    title: 'Cyber Awareness AI (Basic)',
    courseTitle: 'Cybersecurity & AI Awareness',
    issuer: 'Training Program',
    year: '2024',
    issuedOn: '2024',
    badge: 'CYBER',
    level: 'Basic',
    credentialId: 'CYBER-AI-2024',
    verifyUrl: '',
    credential: 'Introductory awareness of cybersecurity practices and responsible AI usage.',
  },
  {
    title: 'Professional Edge Certification',
    courseTitle: 'Soft Skills & Professional Development',
    issuer: 'Professional Development Program',
    year: '2023',
    issuedOn: '2023',
    badge: 'EDGE',
    level: 'Professional',
    credentialId: 'EDGE-2023',
    verifyUrl: '',
    credential: 'Training focused on communication, workplace readiness, and professional growth.',
  },
]

export const architectureBlocks = [
  {
    title: 'API Gateway',
    detail: 'Routing, auth verification, rate limiting, and request tracing.',
  },
  {
    title: 'Service Layer',
    detail: 'FastAPI services with validation, business rules, and async tasks.',
  },
  {
    title: 'Data Layer',
    detail: 'MySQL models, indexes, query optimization, and caching strategy.',
  },
  {
    title: 'Observability',
    detail: 'Centralized logs, metrics dashboards, and alerting thresholds.',
  },
]

export const systemDesigns = [
  {
    name: 'API Optimization System',
    steps: ['Client Request', 'API Gateway', 'FastAPI Service', 'Redis Cache', 'MySQL'],
    explanation:
      'Uses cache-first strategy and query optimization to reduce latency while preserving response consistency.',
  },
  {
    name: 'Payment Reconciliation Engine',
    steps: ['Gateway Events', 'Queue', 'Reconciliation Worker', 'Rule Matcher', 'Audit Ledger'],
    explanation:
      'Ensures deterministic matching and auditable settlement status updates with idempotent reprocessing.',
  },
  {
    name: 'Dynamic Pricing Engine',
    steps: ['Demand Signals', 'Pricing Rules', 'Decision Engine', 'Validation Layer', 'Price API'],
    explanation:
      'Combines demand and inventory signals with rule constraints for explainable near-real-time price updates.',
  },
]

export const performanceData = [
  { name: 'Baseline', latency: 680, throughput: 210, errors: 6.8 },
  { name: 'Optimization', latency: 440, throughput: 320, errors: 4.9 },
  { name: 'Caching', latency: 260, throughput: 430, errors: 3.1 },
  { name: 'Current', latency: 210, throughput: 480, errors: 2.2 },
]

export const blogPosts = [
  {
    title: 'Designing Latency-First APIs in FastAPI',
    summary:
      'A practical framework to identify endpoint bottlenecks and reduce P95 latency with measurable outcomes.',
    readTime: '6 min read',
  },
  {
    title: 'Reconciliation Systems: Deterministic Matching at Scale',
    summary:
      'Patterns for building auditable reconciliation pipelines in fintech environments.',
    readTime: '8 min read',
  },
]
