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
  twitter: import.meta.env.VITE_TWITTER_PROFILE || 'https://x.com/Mdehteshamulhq',
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
  Database: ['SQL', 'MySQL', 'MongoDB'],
  Tools: ['Git & GitHub', 'VS Code'],
  Concepts: ['REST APIs', 'Authentication', 'DSA'],
}

export const projects = [
  {
    id: 'payflow',
    title: 'Payflow — Payment Reconciliation Engine',
    category: 'Fintech · Reconciliation',
    icon: 'credit-card',
    challenge:
      'Payment records from multiple gateways drifted out of sync, forcing slow manual reconciliation, delayed settlements, and gaps in the audit trail.',
    solution:
      'Built a reconciliation engine that ingests gateway events into a queue, matches transactions deterministically against settlement rules, and writes every outcome to an auditable ledger with idempotent reprocessing.',
    stack: ['Python', 'FastAPI', 'MySQL', 'Redis'],
    stackPercentages: [
      { language: 'Python', percentage: 65 },
      { language: 'FastAPI', percentage: 20 },
      { language: 'MySQL', percentage: 10 },
      { language: 'Redis', percentage: 5 },
    ],
    features: [
      'Deterministic rule-based transaction matching',
      'Queue-backed ingestion for high-volume gateway events',
      'Idempotent reprocessing with a full audit ledger',
      'Clear settlement status updates for every transaction',
    ],
    metrics: [
      'Deterministic matching on every attempt',
      'Zero duplicates via idempotent reprocessing',
      'Auditable trail for every settlement change',
    ],
    github: import.meta.env.VITE_PROJECT1_GITHUB || '',
    demo: '',
  },
  {
    id: 'infersight',
    title: 'Infersight — Social Media Insights System',
    category: 'Data Processing · Insights',
    icon: 'chart',
    challenge:
      'Raw social media data needed to be processed efficiently so useful trends, sentiment shifts, and user behavior signals could be extracted at scale.',
    solution:
      'Created a data-processing backend workflow that collects, cleans, normalizes, and analyzes social data to surface trends and sentiment signals as clear, actionable outputs.',
    stack: ['Python', 'APIs', 'Data Processing'],
    stackPercentages: [
      { language: 'Python', percentage: 75 },
      { language: 'APIs', percentage: 15 },
      { language: 'Data Processing', percentage: 10 },
    ],
    features: [
      'Processed large datasets with efficient pipelines',
      'Implemented sentiment and trend analysis',
      'Generated meaningful insights from raw data',
      'Clean, readable outputs designed for action',
    ],
    metrics: [
      'Handled data-heavy workflows efficiently',
      'Turned raw inputs into actionable insights',
      'Backend focused on speed and clarity',
    ],
    github: import.meta.env.VITE_PROJECT2_GITHUB || '',
    demo: '',
  },
  {
    id: 'api-latency-reducer',
    title: 'API Latency Reducer',
    category: 'API Performance',
    icon: 'zap',
    challenge:
      'Repeated requests were slowing down API responses and making the backend less efficient under load.',
    solution:
      'Built an optimized FastAPI backend with caching, cleaner request handling, and better database access patterns to cut latency and raise throughput.',
    stack: ['Python', 'FastAPI', 'MySQL', 'Redis'],
    stackPercentages: [
      { language: 'Python', percentage: 65 },
      { language: 'FastAPI', percentage: 20 },
      { language: 'MySQL', percentage: 10 },
      { language: 'Redis', percentage: 5 },
    ],
    features: [
      'Implemented caching to reduce redundant processing',
      'Streamlined request handling for faster responses',
      'Query optimization on high-traffic read paths',
      'Scalable backend with clean separation of concerns',
    ],
    metrics: [
      'Reduced latency through optimized backend flow',
      'Improved response efficiency for repeated requests',
      'Maintainable, performance-first architecture',
    ],
    github:
      import.meta.env.VITE_PROJECT3_GITHUB ||
      'https://github.com/Mdehteshamulhaque1/API-Latency-reducer.git',
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
  {
    category: 'DSA Problems Solved',
    items: [
      'Strengthened problem-solving skills in python while developing backend-focused applications and REST APIs.',
    ],
  },
  {
    category: 'Backend Engineering Projects',
    items: [
      'Built projects focused on API optimization, monitoring systems, authentication, and database integration.',
    ],
  },
  {
    category: 'Python & FastAPI Development',
    items: [
      'Focused on scalable backend architecture, performance optimization, and clean API design.',
    ],
  },
  {
    category: 'Continuous Technical Growth',
    items: [
      'Actively improving SQL, System Design, DevOps fundamentals, and real-world development skills.',
    ],
  },
]

export const certifications = [
  {
    title: 'Python & SQL Professional Course',
    courseTitle: 'QSpiders - Software Testing Training Institute',
    issuer: 'PySpiders',
    year: '2024',
    issuedOn: '2024',
    badge: 'PY-SQL',
    level: 'Professional',
    credentialId: 'PYSQL-2024',
    logo: 'qspiders',
    verifyUrl: '',
    credential: 'Completed Python & SQL training covering programming, database queries, joins, and backend basics.',
  },
  {
    title: 'Learning AI in Fintech Essential Training',
    courseTitle: 'AI for Business · FinTech · Artificial Intelligence',
    issuer: 'LinkedIn Learning',
    year: '2026',
    issuedOn: 'May 19, 2026',
    badge: 'FIN-AI',
    level: 'Professional',
    credentialId: '48341e7c6096fe10d5ec5e627479cf90bcbe8cbaad01955b7732af016d2a7c07',
    logo: 'linkedin',
    verifyUrl: '',
    credential: 'Completed LinkedIn Learning training on AI for Business, FinTech, and Artificial Intelligence with Shea Hanson, earning 4.40 NASBA CPE credits (Registry ID #140940).',
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
    name: 'Payflow — Payment Reconciliation',
    steps: ['Gateway Events', 'Queue', 'Reconciliation Worker', 'Rule Matcher', 'Audit Ledger'],
    explanation:
      'Ensures deterministic matching and auditable settlement status updates with idempotent reprocessing.',
  },
  {
    name: 'Infersight — Social Insights Pipeline',
    steps: ['Data Ingestion', 'Cleaning & Normalization', 'Sentiment Analysis', 'Trend Aggregation', 'Insights API'],
    explanation:
      'Processes raw social media data through a scalable pipeline to surface trends and sentiment signals as actionable insights.',
  },
  {
    name: 'API Latency Reducer',
    steps: ['Client Request', 'API Gateway', 'FastAPI Service', 'Redis Cache', 'MySQL'],
    explanation:
      'Uses cache-first strategy and query optimization to reduce latency while preserving response consistency.',
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
