import type { Profile } from './types'

/*
 * English content. Merged from the résumés:
 *   - Frontend Developer React (Data Visualization & Test Automation)
 *   - Desenvolvedor Front-end Sênior React (Performance e Arquitetura)
 * Keep the same structure as `profile.pt.ts`.
 */
export const profileEn: Profile = {
  meta: {
    title: 'Pedro Henrique — Senior Software Engineer',
    description:
      'Portfolio of Pedro Henrique Assunção Pereira — Senior Software Engineer specialized in React and TypeScript, focused on performance, architecture, data visualization and test automation.',
  },
  role: 'Senior Software Engineer | React | TypeScript | Performance, Architecture & Data Visualization',
  location: 'Teresina, PI — Brazil · Remote',
  cvUrl: `${import.meta.env.BASE_URL}cv-en.pdf`,
  cvFileName: 'Pedro-Henrique-Assuncao-Resume.pdf',

  ui: {
    sections: {
      expertise: 'Expertise',
      experience: 'Experience',
      education: 'Education',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    available: 'Open to opportunities',
    downloadCv: 'Download résumé (PDF)',
    viewProjects: 'view projects',
    madeWith: 'Built with React, TypeScript and Tailwind CSS',
    backToTop: 'Back to top',
    mainNav: 'Main navigation',
    modeToggle: 'Switch display mode',
    langToggle: 'Change language',
    openDemo: 'Open demo of',
    openRepo: 'Open repository of',
    evolution: 'Evolution line',
    stage: 'Stage',
    current: 'Current form',
  },

  card: {
    question: "Who's that dev?",
    reveal: 'Reveal',
    hide: 'Hide again',
    answer: "It's Pedro Henrique!",
    species: 'Senior Software Engineer',
    types: ['Front-end', 'Data', 'Back-end', 'AI', 'RAG', 'LLM', 'MCP'],
    fields: [
      { label: 'Region', value: 'Teresina, BR' },
      { label: 'In production since', value: '2021' },
      { label: 'Languages', value: 'PT · EN' },
      { label: 'Work mode', value: 'Remote' },
    ],
    tabs: { info: 'Info', stats: 'Stats', log: 'Log' },
    navHint: '◀ ▶ navigate · A résumé · B GitHub',
  },

  hero: {
    recruiter: {
      headline: 'Senior Software Engineer specialized in React, performance and data visualization.',
      pitch:
        'Continuous hands-on experience since 2021 with React and TypeScript in production, on highly complex applications with heavy data and traffic. I work between strategy and execution: I define front-end architecture, optimize performance (Core Web Vitals), build chart-heavy interfaces and keep quality high with automated tests, working closely with design, product and backend teams.',
      stats: [
        { value: '5+', label: 'years of React in production' },
        { value: '1M+', label: 'data points rendered simultaneously' },
        { value: '3', label: 'companies, from e-commerce to industry' },
      ],
    },
    dev: {
      pitch:
        'Senior software engineer shipping React and TypeScript to production since 2021. Charts with millions of points, Core Web Vitals, micro frontends, Next.js (CSR/SSR/SSG) and end-to-end tests with Cypress and Playwright in CI/CD.',
      terminalLines: [
        { command: 'whoami', output: 'pedro — senior software engineer · react · typescript' },
        { command: 'cat stack.txt', output: 'react · next.js · typescript · react native · node · aws' },
        { command: 'cat focus.txt', output: 'performance · architecture · dataviz · security' },
        { command: 'cat testing.txt', output: 'jest · vitest · testing library · cypress · playwright' },
        { command: 'cat languages.txt', output: 'portuguese (native) · english (advanced)' },
        { command: 'uptime', output: '5+ years in production, from Teresina to an international product' },
      ],
    },
  },

  expertise: [
    {
      icon: 'chart',
      title: 'Data visualization',
      stat: 95,
      recruiter:
        'Interactive charts that make complex datasets readable and usable, even with millions of points on screen.',
      dev: 'Interactive charts rendering millions of data points simultaneously, with attention to rendering performance, responsiveness and readability.',
    },
    {
      icon: 'gauge',
      title: 'Performance',
      stat: 92,
      recruiter: 'Fast, scalable applications: I track Core Web Vitals and go after loading and rendering bottlenecks.',
      dev: 'Code splitting, lazy loading, memoization, Core Web Vitals and the right choice between CSR, SSR and SSG with Next.js.',
    },
    {
      icon: 'layers',
      title: 'Front-end architecture',
      stat: 88,
      recruiter: 'I define the architecture and evolution plans of highly complex applications, with reusable components.',
      dev: 'Micro frontends, system design, React + TypeScript component libraries, ADRs and SDD.',
    },
    {
      icon: 'flask',
      title: 'Testing & quality',
      stat: 90,
      recruiter: 'I own test automation, integrated into CI/CD to keep quality consistent on every release.',
      dev: 'Jest, Vitest and React Testing Library for unit/component tests; Cypress and Playwright for E2E; all running in CI/CD pipelines.',
    },
    {
      icon: 'shield',
      title: 'Security',
      stat: 80,
      recruiter: 'Protection of sensitive flows and user data, compliant with LGPD (Brazilian data protection law).',
      dev: 'OWASP Top 10 (XSS, CSRF, CSP), authentication and authorization, secrets management and LGPD.',
    },
    {
      icon: 'users',
      title: 'Technical leadership',
      stat: 85,
      recruiter:
        'I lead technical assessments and refactorings, influence decisions with backend, product and business, and mentor junior developers.',
      dev: 'Technical assessments, major refactorings, code reviews, coding standards and mentoring of junior developers.',
    },
  ],

  experience: [
    {
      company: 'Vetta',
      period: 'Feb 2025 — Present',
      location: 'Belo Horizonte, Brazil · Remote',
      roles: [
        {
          title: 'Full Stack Engineer (JavaScript)',
          recruiter: {
            summary:
              'Front-end of an international steel industry product that processes millions of data points simultaneously.',
            highlights: [
              'Build and maintain interactive charts and data visualizations, focused on rendering performance, readability and usability of complex datasets',
              'Develop reusable React and TypeScript components and libraries, translating UI/UX designs into responsive, accessible interfaces',
              'Optimize speed and scalability by tracking Core Web Vitals and diagnose bottlenecks together with the backend team',
              'Own test automation, integrated into CI/CD pipelines to keep quality consistent and reliable',
              'Apply security best practices (OWASP Top 10, LGPD) and protect sensitive flows',
              'Lead technical assessments, major refactorings and application evolution plans, influencing decisions across areas and mentoring junior developers',
            ],
          },
          dev: {
            stack: [
              'React',
              'TypeScript',
              'Next.js',
              'Micro Frontends',
              'TanStack Query',
              'Redux',
              'Zustand',
              'Styled Components',
              'SASS',
              'Cypress',
              'Playwright',
              'Vitest',
            ],
            details: [
              'Interactive charts rendering millions of simultaneous data points in a micro frontend and microservices architecture, following system design principles',
              'Rendering and loading optimized with code splitting, lazy loading and memoization; choosing between CSR, SSR and SSG with Next.js',
              'Security with OWASP Top 10 (XSS, CSRF, CSP), authentication/authorization, LGPD and secrets management',
              'Backend integration through REST APIs, microservices and messaging (SQS, Kafka, RabbitMQ), with observability of logs, metrics and alerts',
              'State with TanStack Query, Redux and Zustand; UI with HTML5, CSS3, SASS and CSS-in-JS',
              'Tests with Jest, Vitest, React Testing Library, Cypress and Playwright in CI/CD and build pipelines',
              'Application evolution documented with ADRs and SDD; code reviews and mentoring of junior developers',
            ],
          },
        },
      ],
    },
    {
      company: 'Raro Labs',
      period: 'May 2022 — Jan 2025',
      location: 'Brazil · Remote',
      summary: {
        recruiter:
          'Almost 3 years across two projects: a large-scale, high-traffic e-commerce platform and a mobile app — plus a stint as a React instructor.',
        dev: 'Almost 3 years at Raro Labs across two projects: Tele Sena (React/Next.js, AWS) and DUcash (React Native).',
      },
      roles: [
        {
          title: 'Full-Stack Developer',
          client: 'Tele Sena',
          period: 'Sep 2023 — Jan 2025',
          recruiter: {
            summary: 'Large-scale, high-traffic online sales platform (e-commerce).',
            highlights: [
              'Built web applications with React and Next.js, with responsive, accessible interfaces and PWAs',
              'Monitored the application in production with Datadog and New Relic, supporting the investigation of performance bottlenecks',
              'Worked from the front end to the cloud with Node.js and AWS, with code reviews and pull requests as a daily practice',
            ],
          },
          dev: {
            stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'AWS Lambda', 'EC2', 'Datadog', 'New Relic'],
            details: [
              'Web applications with React and Next.js using SSR and SSG, accessibility and PWAs',
              'Node.js backend with workloads on AWS Lambda and EC2',
              'Observability and monitoring with Datadog and New Relic to investigate performance bottlenecks',
              'Code review and pull request workflow',
            ],
          },
        },
        {
          title: 'Mobile Developer',
          client: 'DUcash',
          period: 'May 2022 — Aug 2023',
          recruiter: {
            summary: 'Efficient, responsive mobile app built with React Native.',
            highlights: [
              'Developed and evolved the mobile app with a focus on performance and accessibility',
              'Kept delivery quality high with automated tests',
              'Integrated the app with a microservices backend',
            ],
          },
          dev: {
            stack: ['React Native', 'TypeScript', 'React Query', 'Redux', 'Jest', 'React Testing Library'],
            details: [
              'React Native and TypeScript app, with React Query for server state and Redux for global state',
              'Automated tests with Jest and React Testing Library',
              'Integration with microservices via synchronous and asynchronous REST APIs',
            ],
          },
        },
        {
          title: 'Frontend Instructor',
          client: 'Raro Academy',
          period: 'Jun 2023 — Sep 2023',
          recruiter: {
            summary: 'React instructor in a technical web development course.',
            highlights: ['Taught React in a technical course, adapting explanations to different knowledge levels'],
          },
          dev: {
            stack: ['React', 'JavaScript', 'Teaching'],
            details: ['React classes in a technical course, adapting explanations to different levels'],
          },
        },
      ],
    },
    {
      company: 'ConsuTI',
      period: 'Jan 2021 — Mar 2022',
      location: 'Teresina, Brazil',
      roles: [
        {
          title: 'Frontend and Mobile Developer',
          recruiter: {
            summary: 'React web platform and mobile solutions.',
            highlights: [
              'Built a React platform and mobile solutions, with a focus on performance optimization',
              'Collaborated across teams throughout delivery',
            ],
          },
          dev: {
            stack: ['React', 'JavaScript', 'Mobile'],
            details: ['React platform and mobile solutions with complex state management and performance optimization'],
          },
        },
      ],
    },
  ],

  education: [
    {
      title: 'Postgraduate Degree in Software Engineering',
      institution: 'Descomplica Faculdade Digital',
      period: '2023 — 2024',
    },
    {
      title: 'Integrated Technical Course in Web and Mobile Development',
      institution: 'Raro Academy',
      period: '2022',
    },
    {
      title: "Bachelor's Degree in Civil Engineering",
      institution: 'UNINOVAFAPI',
      period: '2015 — 2019',
    },
  ],

  projects: [
    {
      name: 'Résumé Site — this site',
      repoUrl: 'https://github.com/phap9060/curriculum-site',
      recruiter: {
        tagline: 'Personal portfolio with an experience tailored to recruiters and developers.',
        impact: [
          'Two reading modes: executive (recruiter) and technical (dev)',
          'Available in Portuguese and English, with instant language switching',
          'Custom design system with light/dark themes per mode',
        ],
      },
      dev: {
        stack: ['React 19', 'TypeScript', 'Tailwind CSS 4', 'Vite'],
        architecture:
          'React SPA with semantic design tokens in CSS custom properties. Mode and language contexts switch the theme, content and copy of each section, persisted in localStorage.',
      },
    },
    {
      name: 'Sua Pelada — pickup soccer manager',
      repoUrl: 'https://github.com/phap9060/sua-pelada',
      recruiter: {
        tagline: 'App to organize pickup soccer games among friends, from the invite to the champion.',
        impact: [
          'Centralizes attendance confirmation, waiting lists and separate quotas for outfield players and goalkeepers',
          'Draws balanced teams from player ratings and runs tournaments with draft, group stage and knockout',
          'Automates opening and closing of confirmations and keeps a history of titles and group stats',
        ],
      },
      dev: {
        stack: ['React 19', 'TypeScript', 'Mantine', 'TanStack Query', 'Bun', 'Elysia', 'Drizzle ORM', 'PostgreSQL'],
        architecture:
          'Monorepo with a React 19 SPA (Mantine + TanStack Query) and a Bun/Elysia API with JWT authentication. Drizzle ORM on PostgreSQL, a scheduler to open and close confirmations, rating-balanced team draws and tournaments with snake draft, group stage and knockout.',
      },
    },
  ],

  skills: {
    recruiter: [
      { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'React Native', 'Data visualization'] },
      { category: 'Performance & Architecture', items: ['Core Web Vitals', 'Micro Frontends', 'System Design', 'PWAs', 'Accessibility'] },
      { category: 'Quality', items: ['Test automation', 'Cypress', 'Playwright', 'Jest', 'CI/CD'] },
      { category: 'Backend & Cloud', items: ['Node.js', 'AWS', 'REST APIs', 'Observability'] },
      { category: 'Leadership', items: ['Code reviews', 'Mentoring', 'Technical assessments', 'React instructor'] },
      { category: 'Languages', items: ['Portuguese (native)', 'English (advanced)'] },
    ],
    dev: [
      { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'React Native', 'HTML5', 'CSS3', 'SASS', 'Styled Components'] },
      { category: 'State', items: ['TanStack Query', 'Redux', 'Zustand'] },
      { category: 'Performance', items: ['Core Web Vitals', 'Code splitting', 'Lazy loading', 'Memoization', 'CSR / SSR / SSG'] },
      { category: 'Testing', items: ['Jest', 'Vitest', 'React Testing Library', 'Cypress', 'Playwright'] },
      { category: 'Architecture', items: ['Micro Frontends', 'Microservices', 'System Design', 'ADRs', 'SDD', 'PWAs'] },
      { category: 'Security', items: ['OWASP Top 10', 'XSS', 'CSRF', 'CSP', 'LGPD'] },
      { category: 'Backend & Cloud', items: ['Node.js', 'REST APIs', 'AWS Lambda', 'EC2', 'SQS', 'Kafka', 'RabbitMQ'] },
      { category: 'Observability & CI/CD', items: ['Datadog', 'New Relic', 'CI/CD'] },
      { category: 'Languages', items: ['portuguese (native)', 'english (advanced)'] },
    ],
  },

  contact: {
    recruiter: {
      title: "Let's talk?",
      subtitle: "I'm open to new opportunities. I reply within 24 hours.",
    },
    dev: {
      title: '$ ping pedro',
      subtitle: 'Open to projects, code reviews and good conversations about front end.',
    },
  },
}
