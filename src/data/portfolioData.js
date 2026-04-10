export const profile = {
  name: import.meta.env.VITE_FULL_NAME || 'MD Ehteshamul Haque',
  location: import.meta.env.VITE_LOCATION || 'New Delhi, India',
  role: 'Backend Developer | Python | FastAPI | MySQL',
  photo: import.meta.env.VITE_PROFILE_PHOTO || '/profile-photo.svg',
  tagline:
    'I engineer backend systems that stay fast under pressure, scale with confidence, and remain easy to maintain.',
  objective:
    'Build resilient, data-intensive backend services with reliable APIs, measurable latency improvements, and production-grade observability.',
  email: import.meta.env.VITE_CONTACT_EMAIL || 'backend.engineer@example.com',
  github:
    import.meta.env.VITE_GITHUB_PROFILE || 'https://github.com/your-username',
  linkedin:
    import.meta.env.VITE_LINKEDIN_PROFILE ||
    'https://www.linkedin.com/in/your-linkedin-handle/',
  twitter:
    import.meta.env.VITE_TWITTER_PROFILE || 'https://x.com/your-handle',
  leetcode:
    import.meta.env.VITE_LEETCODE_PROFILE || 'https://leetcode.com/u/your-handle/',
  githubUsername: import.meta.env.VITE_GITHUB_USERNAME || 'your-username',
  resumeFile: import.meta.env.VITE_RESUME_FILE || '/resume.txt',
}

export const resumeHighlights = [
  {
    title: 'Core Focus',
    detail: 'Backend services, API architecture, and reliable data workflows.',
  },
  {
    title: 'Engineering Strength',
    detail: 'Latency optimization, SQL performance tuning, and secure auth patterns.',
  },
  {
    title: 'Delivery Style',
    detail: 'Metrics-driven improvements, clean code, and production-readiness.',
  },
]

export const careerTimeline = [
  {
    phase: 'Foundation',
    period: '2024',
    summary: 'Built core programming discipline in Python, SQL, and data modeling.',
  },
  {
    phase: 'Backend Training',
    period: '2025',
    summary: 'Implemented FastAPI services, auth modules, and production-style API contracts.',
  },
  {
    phase: 'Applied Projects',
    period: '2025-2026',
    summary: 'Delivered latency, reconciliation, and pricing engines with measurable impact.',
  },
  {
    phase: 'Scaling Focus',
    period: 'Now',
    summary: 'Focusing on reliable backend architecture, observability, and system design depth.',
  },
]

export const skills = {
  Languages: ['Python', 'SQL'],
  Backend: ['FastAPI'],
  Database: ['MySQL'],
  Tools: ['Git', 'GitHub', 'VS Code'],
  Concepts: ['REST APIs', 'Authentication', 'System Design Basics'],
}

export const projects = [
  {
    id: 'api-optimizer',
    title: 'API Optimizer / API Latency Reducer',
    challenge:
      'API response times spiked under burst traffic, causing failed retries and poor user experience.',
    solution:
      'Introduced Redis-backed response caching, SQL query tuning, and asynchronous background jobs for expensive endpoints.',
    stack: ['Python', 'FastAPI', 'MySQL', 'Redis'],
    features: [
      'Adaptive caching for read-heavy endpoints',
      'Connection pooling and slow query elimination',
      'Per-endpoint observability with P95/P99 tracking',
    ],
    metrics: [
      'P95 latency reduced from 680ms to 210ms',
      'Throughput increased by 2.3x during peak hours',
      'Error rate dropped by 41% under load',
    ],
    github:
      import.meta.env.VITE_PROJECT1_GITHUB ||
      'https://github.com/backend-engineer/api-optimizer',
    demo: 'https://demo.example.com/api-optimizer',
  },
  {
    id: 'payment-recon',
    title: 'Payment Reconciliation Engine (Fintech)',
    challenge:
      'Mismatched records across payment gateway, bank settlement, and internal ledger delayed finance close cycles.',
    solution:
      'Built an event-driven reconciliation pipeline with deterministic matching rules, exception queues, and audit trails.',
    stack: ['Python', 'FastAPI', 'MySQL', 'RabbitMQ'],
    features: [
      'Rule-based reconciliation with tolerance windows',
      'Idempotent replay for failed events',
      'Admin dashboard for mismatch triage',
    ],
    metrics: [
      'Daily reconciliation time reduced from 4h to 45m',
      'Auto-matched transactions increased to 97.4%',
      'Manual ops workload reduced by 68%',
    ],
    github:
      import.meta.env.VITE_PROJECT2_GITHUB ||
      'https://github.com/backend-engineer/payment-reconciliation-engine',
    demo: '',
  },
  {
    id: 'dynamic-pricing',
    title: 'Dynamic Pricing Engine',
    challenge:
      'Static pricing failed to account for demand patterns and inventory risk, hurting conversion and margin.',
    solution:
      'Implemented a rules + signals engine with configurable pricing policies and near-real-time recalculation APIs.',
    stack: ['Python', 'FastAPI', 'MySQL'],
    features: [
      'Configurable pricing strategies per segment',
      'Demand and inventory-aware adjustments',
      'Explainable price decision logs for auditability',
    ],
    metrics: [
      'Conversion uplift of 13%',
      'Margin improvement of 8.7%',
      'Price update cycle reduced from 30m to 2m',
    ],
    github:
      import.meta.env.VITE_PROJECT3_GITHUB ||
      'https://github.com/backend-engineer/dynamic-pricing-engine',
    demo: 'https://demo.example.com/dynamic-pricing',
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
  'Solved 300+ algorithmic problems across LeetCode and HackerRank.',
  'Built multiple backend projects focused on performance and reliability.',
  'Completed backend development certifications in API design and databases.',
]

export const certifications = [
  {
    title: 'Backend Development Foundations',
    courseTitle: 'LinkedIn Learning - Backend Development Foundations',
    issuer: 'LinkedIn Learning',
    year: '2026',
    issuedOn: 'Jan 2026',
    badge: 'LINKEDIN',
    level: 'Professional',
    credentialId: 'LI-2026-BE-FOUND',
    verifyUrl: '',
    credential: 'Certificate covering backend architecture fundamentals and API lifecycle best practices.',
  },
  {
    title: 'NIIT Foundation Program',
    courseTitle: 'NIIT Foundation Program in Software Engineering',
    issuer: 'NIIT Foundation',
    year: '2025',
    issuedOn: 'Sep 2025',
    badge: 'NIIT',
    level: 'Advanced',
    credentialId: 'NIIT-FND-2025',
    verifyUrl: '',
    credential: 'Core software engineering foundation with problem solving and programming discipline.',
  },
  {
    title: 'Backend Internship Training Certificate',
    courseTitle: 'Internshala - Programming with Python Training',
    issuer: 'Internshala',
    year: '2025',
    issuedOn: 'Dec 2025',
    badge: 'INTERNSHALA',
    level: 'Professional',
    credentialId: 'INT-PY-2025',
    verifyUrl: '',
    credential: 'Practical backend implementation exposure including APIs, validation, and project workflows.',
  },
  {
    title: 'API Development and FastAPI Projects',
    courseTitle: 'Udemy - FastAPI: Build APIs with Python',
    issuer: 'Udemy',
    year: '2025',
    issuedOn: 'Nov 2025',
    badge: 'UDEMY',
    level: 'Professional',
    credentialId: 'UDEMY-FASTAPI-2025',
    verifyUrl: '',
    credential: 'Hands-on project-based certification for API development, routing, and endpoint design.',
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
