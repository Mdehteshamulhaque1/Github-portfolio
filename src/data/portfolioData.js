export const profile = {
  name: import.meta.env.VITE_FULL_NAME || 'Ehteshamul Haque',
  location: import.meta.env.VITE_LOCATION || 'New Delhi, India',
  role: 'Python Backend Engineer | FastAPI · Flask · Django | MySQL · MongoDB | Applied AI',
  photo: import.meta.env.VITE_PROFILE_PHOTO || '/profile-photo.jpg',
  tagline:
    'I build efficient backend systems that improve performance, stay maintainable, and support growth with clean API design.',
  objective:
    'Design and build scalable backend services and efficient APIs with Python, FastAPI, Flask, and Django, applying AI-driven insights for practical use cases in finance and secure digital systems.',
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
  Languages: ['Python', 'C++', 'C'],
  Backend: ['FastAPI', 'Flask', 'Django'],
  Database: ['SQL', 'MySQL', 'MongoDB'],
  Tools: ['Git & GitHub', 'VS Code'],
  Concepts: ['REST APIs', 'Authentication', 'DSA'],
}

export const skillLevels = {
  Python: 88,
  'C++': 72,
  C: 72,
  FastAPI: 82,
  Flask: 70,
  Django: 65,
  SQL: 82,
  MySQL: 80,
  MongoDB: 68,
  'Git & GitHub': 78,
  'VS Code': 75,
  'REST APIs': 84,
  Authentication: 72,
  DSA: 68,
}

export const projects = [
  {
    id: 'payflow',
    title: 'Payflow — Payment Reconciliation Engine',
    category: 'Fintech · Reconciliation',
    icon: 'credit-card',
    flow: ['Gateway Events', 'Queue', 'Reconciliation Worker', 'Rule Matcher', 'Audit Ledger'],
    problem:
      'Payment records from multiple gateways drifted out of sync, forcing slow manual reconciliation, delayed settlements, and gaps in the audit trail.',
    architecture:
      'Gateway events are pushed into a queue, a reconciliation worker picks them up, and a deterministic rule matcher resolves each transaction against settlement rules. Every outcome is written to an auditable ledger so the full lifecycle stays visible and retries never create duplicates.',
    backend: [
      'FastAPI service with Pydantic schema-first validation on ingestion and settlement endpoints',
      'Queue-backed ingestion decouples event producers from the reconciliation worker',
      'Idempotent reprocessing keyed on the event identity — re-runs never duplicate settlements',
      'Deterministic rule matcher resolves by order ID, amount, currency, and timestamp window',
    ],
    database: [
      'MySQL relational schema for transactions, settlement rules, and status history',
      'Indexed high-traffic lookups on order ID and event key to keep matching fast',
      'Audit ledger table records every status change for full traceability',
    ],
    apis: [
      { method: 'POST', path: '/api/events/ingest', detail: 'Accept gateway events into the queue' },
      { method: 'POST', path: '/api/events/reprocess', detail: 'Trigger idempotent reprocessing' },
      { method: 'GET', path: '/api/settlements/{txn_id}', detail: 'Settlement status lookup' },
      { method: 'GET', path: '/api/audit/{txn_id}', detail: 'Full ledger trail for a transaction' },
    ],
    challenges: [
      'Handling duplicate and out-of-order events arriving from multiple gateways',
      'Keeping reconciliation deterministic and verifiable across re-runs',
      'Scaling ingestion without blocking settlement processing',
    ],
    results: [
      'Deterministic matching on every attempt',
      'Zero duplicate settlements via idempotent reprocessing',
      'Auditable trail for every settlement change',
    ],
    stack: ['Python', 'FastAPI', 'MySQL', 'Redis'],
    stackPercentages: [
      { language: 'Python', percentage: 65 },
      { language: 'FastAPI', percentage: 20 },
      { language: 'MySQL', percentage: 10 },
      { language: 'Redis', percentage: 5 },
    ],
    github: import.meta.env.VITE_PROJECT1_GITHUB || '',
    demo: '',
  },
  {
    id: 'infersight',
    title: 'Infersight — Social Media Insights System',
    category: 'Data Processing · Insights',
    icon: 'chart',
    flow: ['Data Ingestion', 'Cleaning & Normalization', 'Sentiment Analysis', 'Trend Aggregation', 'Insights API'],
    problem:
      'Raw social media data needed to be processed efficiently so useful trends, sentiment shifts, and user behavior signals could be extracted at scale.',
    architecture:
      'A staged backend pipeline — ingestion, cleaning and normalization, sentiment analysis, and trend aggregation — turns noisy social data into signals that are exposed through a clean insights API. Each stage is isolated so it can scale or be replaced independently.',
    backend: [
      'Staged Python pipeline separates ingestion, cleaning, and analysis',
      'Text normalization handles casing, whitespace, URLs, and noise before scoring',
      'Sentiment scoring and trend aggregation surface signals from raw posts',
      'Insights API returns processed data as clean, readable outputs',
    ],
    database: [
      'Structured storage for cleaned posts, sentiment scores, and aggregated trends',
      'Batch-friendly writes sized for high-volume ingestion',
      'Pagination-friendly query patterns for the insights API',
    ],
    apis: [
      { method: 'GET', path: '/api/insights/trends', detail: 'Current trending topics and keywords' },
      { method: 'GET', path: '/api/insights/sentiment', detail: 'Sentiment distribution over time' },
      { method: 'GET', path: '/api/insights/posts', detail: 'Paginated cleaned post feed' },
    ],
    challenges: [
      'Handling noisy, unstructured, high-volume input without skewing results',
      'Keeping downstream sentiment scoring consistent after cleaning',
      'Aggregating signals so analysts do not review every raw post',
    ],
    results: [
      'Data-heavy workflows handled efficiently',
      'Raw inputs turned into actionable insights',
      'Backend focused on speed and clarity',
    ],
    stack: ['Python', 'APIs', 'Data Processing'],
    stackPercentages: [
      { language: 'Python', percentage: 75 },
      { language: 'APIs', percentage: 15 },
      { language: 'Data Processing', percentage: 10 },
    ],
    github: import.meta.env.VITE_PROJECT2_GITHUB || '',
    demo: '',
  },
  {
    id: 'api-latency-reducer',
    title: 'API Latency Reducer',
    category: 'API Performance',
    icon: 'zap',
    flow: ['Client Request', 'API Gateway', 'FastAPI Service', 'Redis Cache', 'MySQL'],
    problem:
      'Repeated requests were slowing down API responses and making the backend less efficient under load.',
    architecture:
      'Requests enter through an API gateway, fast reads are served cache-first from Redis, and MySQL is only queried on a cache miss. High-traffic read paths were profiled and tuned so the data layer scales with traffic instead of against it.',
    backend: [
      'Cache-first FastAPI service — repeated reads served from Redis',
      'Streamlined request handling: validation early, redundant processing removed',
      'Split service layer so each endpoint only does the work it needs',
      'Profiled and tuned the highest-traffic read paths',
    ],
    database: [
      'Indexes added where queries scanned too much data',
      'Expensive joins restructured on read-heavy paths',
      'Cache invalidation strategy keeps responses consistent',
    ],
    apis: [
      { method: 'GET', path: '/api/resources', detail: 'Cache-first list endpoint' },
      { method: 'GET', path: '/api/resources/{id}', detail: 'Cached single-resource lookup' },
      { method: 'POST', path: '/api/resources', detail: 'Write-through cache update' },
    ],
    challenges: [
      'Reducing latency without breaking response consistency',
      'Keeping cache and database in sync on writes',
      'Maintaining predictable response times under load',
    ],
    results: [
      'Latency dropped from 680ms to 210ms',
      'Throughput raised from 210 to 480 rps',
      'Error rate cut from 6.8% to 2.2%',
    ],
    stack: ['Python', 'FastAPI', 'MySQL', 'Redis'],
    stackPercentages: [
      { language: 'Python', percentage: 65 },
      { language: 'FastAPI', percentage: 20 },
      { language: 'MySQL', percentage: 10 },
      { language: 'Redis', percentage: 5 },
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
    layers: [
      { tier: 'Ingestion', components: ['Gateway Events', 'Event Queue'] },
      { tier: 'Processing', components: ['Reconciliation Worker', 'Rule Matcher'] },
      { tier: 'Storage', components: ['Audit Ledger', 'MySQL'] },
    ],
    explanation:
      'Ensures deterministic matching and auditable settlement status updates with idempotent reprocessing.',
  },
  {
    name: 'Infersight — Social Insights Pipeline',
    steps: ['Data Ingestion', 'Cleaning & Normalization', 'Sentiment Analysis', 'Trend Aggregation', 'Insights API'],
    layers: [
      { tier: 'Ingestion', components: ['Social Data Sources', 'Data Ingestion'] },
      { tier: 'Processing', components: ['Cleaning & Normalization', 'Sentiment Analysis', 'Trend Aggregation'] },
      { tier: 'Output', components: ['Insights API'] },
    ],
    explanation:
      'Processes raw social media data through a scalable pipeline to surface trends and sentiment signals as actionable insights.',
  },
  {
    name: 'API Latency Reducer',
    steps: ['Client Request', 'API Gateway', 'FastAPI Service', 'Redis Cache', 'MySQL'],
    layers: [
      { tier: 'Entry', components: ['Client Request', 'API Gateway'] },
      { tier: 'Service', components: ['FastAPI Service', 'Redis Cache'] },
      { tier: 'Data', components: ['MySQL'] },
    ],
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

export const aiEngineering = {
  intro:
    'Applied AI and ML fundamentals, used in backend projects and fintech training — built with Python data pipelines and production-minded thinking.',
  areas: [
    {
      icon: 'message',
      title: 'Sentiment Analysis',
      detail:
        'Applied text scoring and classification in the Infersight pipeline to surface sentiment signals from raw social data.',
    },
    {
      icon: 'trend',
      title: 'AI in Fintech',
      detail:
        'Completed LinkedIn Learning AI in Fintech training (4.40 NASBA CPE) covering applied AI in financial workflows.',
    },
    {
      icon: 'pipeline',
      title: 'Data Pipelines for AI',
      detail:
        'Designed staged ingestion, cleaning, and normalization pipelines that prepare raw data for downstream analysis.',
    },
    {
      icon: 'learn',
      title: 'ML Learning Path',
      detail:
        'Actively studying ML fundamentals and applied AI to move from rule-based systems toward model-driven features.',
    },
  ],
  roadmap: [
    {
      step: 'Foundations',
      detail: 'Python, SQL, statistics, and data structuring basics.',
    },
    {
      step: 'ML Fundamentals',
      detail: 'Classification, regression, and evaluation practices.',
    },
    {
      step: 'Applied AI',
      detail: 'Fintech use cases, NLP and sentiment scoring, responsible AI.',
    },
    {
      step: 'Production AI',
      detail: 'Integrating models into FastAPI services with clean pipelines.',
    },
  ],
}

export const blogPosts = [
  {
    title: 'Payflow: Deterministic Payment Reconciliation in Fintech',
    summary:
      'How Payflow ingests gateway events, matches transactions deterministically, and keeps an auditable settlement ledger.',
    readTime: '7 min read',
    body: [
      {
        heading: 'The Problem',
        text: 'Payment records coming from multiple gateways often drift out of sync. The same transaction can appear with different amounts, statuses, or timestamps depending on the source, so teams fall back to slow manual reconciliation. That delays settlements and leaves gaps in the audit trail.',
      },
      {
        heading: 'The Approach',
        text: 'Payflow decouples ingestion from reconciliation. Gateway events are pushed into a queue, a reconciliation worker picks them up, and a rule matcher resolves each transaction against a defined set of settlement rules. Every outcome is written to an audit ledger so the full lifecycle stays visible.',
      },
      {
        heading: 'Deterministic Matching',
        text: 'Matching is rule-based and deterministic: order ID, amount, currency, and a bounded timestamp window define whether two records refer to the same payment. Because the same inputs always produce the same result, reconciliation runs are consistent and easy to verify.',
      },
      {
        heading: 'Idempotent Reprocessing',
        text: 'Retries and re-runs never create duplicates. Each event carries an identity key, and the worker skips events that have already settled. This makes the pipeline safe to re-run during incident recovery or when new matching rules are deployed.',
      },
      {
        heading: 'Outcomes',
        text: 'Deterministic matching on every attempt, zero duplicate settlements thanks to idempotent reprocessing, and a full audit trail for every status change — so settlement teams can trust the numbers and auditors can trace any decision back to the source event.',
      },
    ],
  },
  {
    title: 'Infersight: Turning Raw Social Data into Insights',
    summary:
      'A backend pipeline that collects, cleans, and analyzes social media data to surface trends and sentiment signals.',
    readTime: '6 min read',
    body: [
      {
        heading: 'The Problem',
        text: 'Raw social media data is noisy, unstructured, and high-volume. Posts, comments, and mentions arrive in inconsistent formats, and useful signals — trends and sentiment — are buried under irrelevant content. Processing it efficiently matters as much as analyzing it.',
      },
      {
        heading: 'The Pipeline',
        text: 'Infersight is built as a staged pipeline: data ingestion, cleaning and normalization, sentiment analysis, trend aggregation, and an insights API. Each stage is isolated, so the pipeline can be scaled or replaced without touching the rest of the system.',
      },
      {
        heading: 'Cleaning and Normalization',
        text: 'Incoming text is normalized — casing, whitespace, URLs, and noise tokens are handled before analysis. This keeps downstream scoring consistent and prevents garbage inputs from skewing results.',
      },
      {
        heading: 'Sentiment and Trend Analysis',
        text: 'Cleaned records are scored for sentiment and grouped by recurring topics and keywords. Aggregation surfaces what is trending over time rather than forcing analysts to inspect individual posts.',
      },
      {
        heading: 'Outcomes',
        text: 'Large data-heavy workflows are handled efficiently, raw inputs are turned into actionable insights, and the backend stays focused on speed and clarity — exactly what a fast-moving insights team needs.',
      },
    ],
  },
  {
    title: 'Reducing API Latency: Caching and Query Optimization',
    summary:
      'How caching, cleaner request handling, and better database access patterns cut response latency and raised throughput.',
    readTime: '5 min read',
    body: [
      {
        heading: 'The Problem',
        text: 'Repeated requests were slowing down API responses and making the backend less efficient under load. Each call hit the database even when the answer had been computed moments earlier.',
      },
      {
        heading: 'Cache-First Strategy',
        text: 'A cache-first flow was added: fast reads are served from Redis, and the database is only touched on a miss. Repeating work was eliminated for the most frequent request patterns, which removed the biggest source of latency.',
      },
      {
        heading: 'Cleaner Request Handling',
        text: 'Request handling was streamlined end to end — validation moved earlier, redundant processing was removed, and the service layer was split so each endpoint only did the work it needed. That keeps response times predictable.',
      },
      {
        heading: 'Query Optimization',
        text: 'High-traffic read paths were profiled and tuned: indexes were added where queries scanned too much, and expensive joins were restructured. The result is a database access layer that scales with traffic instead of against it.',
      },
      {
        heading: 'Measured Results',
        text: 'Latency dropped from 680ms to 210ms, throughput climbed from 210 to 480 rps, and the error rate fell from 6.8% to 2.2% — while keeping the architecture maintainable and performance-first.',
      },
    ],
  },
]
