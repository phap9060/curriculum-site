import type { Profile } from './types'

/*
 * Conteúdo em português. Mescla dos currículos:
 *   - Desenvolvedor Front-end Sênior React (Performance e Arquitetura)
 *   - Frontend Developer React (Data Visualization e Test Automation)
 * Mantenha a mesma estrutura de `profile.en.ts`.
 */
export const profilePt: Profile = {
  meta: {
    title: 'Pedro Henrique — Engenheiro de Software Sênior',
    description:
      'Portfólio de Pedro Henrique Assunção Pereira — Engenheiro de Software Sênior especialista em React e TypeScript, com foco em performance, arquitetura, visualização de dados e automação de testes.',
  },
  role: 'Engenheiro de Software Sênior | React | TypeScript | Performance, Arquitetura e Visualização de Dados',
  location: 'Teresina, PI — Brasil · Remoto',
  cvUrl: `${import.meta.env.BASE_URL}cv-pt.pdf`,
  cvFileName: 'Pedro-Henrique-Assuncao-Curriculo.pdf',

  ui: {
    sections: {
      expertise: 'Especialidades',
      experience: 'Experiência',
      education: 'Formação',
      projects: 'Projetos',
      skills: 'Skills',
      contact: 'Contato',
    },
    available: 'Disponível para oportunidades',
    downloadCv: 'Baixar CV (PDF)',
    viewProjects: 'ver projetos',
    madeWith: 'Feito com React, TypeScript e Tailwind CSS',
    backToTop: 'Voltar ao topo',
    mainNav: 'Navegação principal',
    modeToggle: 'Alternar modo de exibição',
    langToggle: 'Alterar idioma',
    openDemo: 'Abrir demo de',
    openRepo: 'Abrir repositório de',
    evolution: 'Linha evolutiva',
    stage: 'Estágio',
    current: 'Forma atual',
  },

  card: {
    question: 'Quem é esse dev?',
    reveal: 'Revelar',
    hide: 'Esconder de novo',
    answer: 'É o Pedro Henrique!',
    species: 'O Engenheiro de Software Sênior',
    types: ['Front-end', 'Dados'],
    fields: [
      { label: 'Região', value: 'Teresina, BR' },
      { label: 'Em produção desde', value: '2021' },
      { label: 'Idiomas', value: 'PT · EN' },
      { label: 'Modelo', value: 'Remoto' },
    ],
  },

  hero: {
    recruiter: {
      headline: 'Engenheiro de Software Sênior, especialista em React, performance e visualização de dados.',
      pitch:
        'Experiência contínua desde 2021 com React e TypeScript em produção, em aplicações de alta complexidade e alto volume de dados e acessos. Atuo entre a estratégia e a execução: defino arquitetura front-end, otimizo performance (Core Web Vitals), construo interfaces ricas em gráficos e garanto qualidade com testes automatizados, junto a design, produto e backend.',
      stats: [
        { value: '5+', label: 'anos com React em produção' },
        { value: '1M+', label: 'pontos de dados renderizados simultaneamente' },
        { value: '3', label: 'empresas, de e-commerce à indústria' },
      ],
    },
    dev: {
      pitch:
        'Engenheiro de software sênior com React e TypeScript em produção desde 2021. Gráficos com milhões de pontos, Core Web Vitals, micro frontends, Next.js (CSR/SSR/SSG) e testes de ponta a ponta com Cypress e Playwright no CI/CD.',
      terminalLines: [
        { command: 'whoami', output: 'pedro — senior software engineer · react · typescript' },
        { command: 'cat stack.txt', output: 'react · next.js · typescript · react native · node · aws' },
        { command: 'cat focus.txt', output: 'performance · arquitetura · dataviz · segurança' },
        { command: 'cat testing.txt', output: 'jest · vitest · testing library · cypress · playwright' },
        { command: 'cat languages.txt', output: 'pt-BR nativo · inglês avançado' },
        { command: 'uptime', output: '5+ anos em produção, de Teresina a produto internacional' },
      ],
    },
  },

  expertise: [
    {
      icon: 'chart',
      title: 'Visualização de dados',
      stat: 95,
      recruiter:
        'Gráficos interativos que tornam conjuntos de dados complexos legíveis e utilizáveis, mesmo com milhões de pontos na tela.',
      dev: 'Charts interativos renderizando milhões de pontos simultâneos, com atenção a performance de renderização, responsividade e legibilidade.',
    },
    {
      icon: 'gauge',
      title: 'Performance',
      stat: 92,
      recruiter:
        'Aplicações rápidas e escaláveis: acompanho Core Web Vitals e ataco gargalos de carregamento e renderização.',
      dev: 'Code splitting, lazy loading, memoization, Core Web Vitals e a estratégia certa entre CSR, SSR e SSG com Next.js.',
    },
    {
      icon: 'layers',
      title: 'Arquitetura front-end',
      stat: 88,
      recruiter:
        'Defino a arquitetura e os planos de evolução de aplicações de alta complexidade, com componentes reutilizáveis.',
      dev: 'Micro frontends, system design, bibliotecas de componentes em React + TypeScript, ADRs e SDD.',
    },
    {
      icon: 'flask',
      title: 'Testes e qualidade',
      stat: 90,
      recruiter:
        'Responsável pela automação de testes, integrada ao CI/CD para manter a qualidade consistente a cada entrega.',
      dev: 'Jest, Vitest e React Testing Library para unidade/componente; Cypress e Playwright para E2E; tudo rodando em pipelines de CI/CD.',
    },
    {
      icon: 'shield',
      title: 'Segurança',
      stat: 80,
      recruiter: 'Proteção de fluxos sensíveis e dados de usuários, em conformidade com a LGPD.',
      dev: 'OWASP Top 10 (XSS, CSRF, CSP), autenticação e autorização, gestão de segredos e LGPD.',
    },
    {
      icon: 'users',
      title: 'Liderança técnica',
      stat: 85,
      recruiter:
        'Conduzo diagnósticos e refatorações, influencio decisões com backend, produto e negócio e oriento devs mais juniores.',
      dev: 'Diagnósticos técnicos, refatorações relevantes, code reviews, padrões de código e mentoria de devs juniores.',
    },
  ],

  experience: [
    {
      company: 'Vetta',
      period: 'Fev 2025 — atual',
      location: 'Belo Horizonte, Brasil · Remoto',
      roles: [
        {
          title: 'Full Stack Engineer (JavaScript)',
          recruiter: {
            summary:
              'Front-end de produto internacional da indústria siderúrgica que processa milhões de pontos de dados simultaneamente.',
            highlights: [
              'Construo e mantenho gráficos e visualizações de dados interativas, com foco em performance de renderização, legibilidade e usabilidade de conjuntos de dados complexos',
              'Desenvolvo componentes e bibliotecas reutilizáveis em React e TypeScript, traduzindo os designs de UI/UX em interfaces responsivas e acessíveis',
              'Otimizo velocidade e escalabilidade acompanhando Core Web Vitals e diagnostico gargalos junto ao time de backend',
              'Sou responsável pela automação de testes, integrada aos pipelines de CI/CD para manter a qualidade consistente',
              'Aplico boas práticas de segurança (OWASP Top 10, LGPD) e proteção de fluxos sensíveis',
              'Conduzo diagnósticos técnicos, refatorações relevantes e planos de evolução da aplicação, influenciando decisões com pessoas de áreas diferentes e orientando devs mais juniores',
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
              'Charts interativos renderizando milhões de pontos de dados simultâneos em arquitetura de micro frontends e microsserviços, com princípios de system design',
              'Renderização e carregamento otimizados com code splitting, lazy loading e memoization; escolha entre CSR, SSR e SSG com Next.js',
              'Segurança com OWASP Top 10 (XSS, CSRF, CSP), autenticação/autorização, LGPD e gestão de segredos',
              'Integração com backend via APIs REST, microsserviços e mensageria (SQS, Kafka, RabbitMQ), com observabilidade de logs, métricas e alertas',
              'Estado com TanStack Query, Redux e Zustand; UI com HTML5, CSS3, SASS e CSS-in-JS',
              'Testes com Jest, Vitest, React Testing Library, Cypress e Playwright em pipelines de CI/CD e build',
              'Evolução da aplicação documentada com ADRs e SDD; code reviews e mentoria de devs juniores',
            ],
          },
        },
      ],
    },
    {
      company: 'Raro Labs',
      period: 'Mai 2022 — Jan 2025',
      location: 'Brasil · Remoto',
      summary: {
        recruiter:
          'Quase 3 anos em dois projetos: um e-commerce de grande porte e alto volume de acessos e um aplicativo mobile — além de atuar como instrutor de React.',
        dev: 'Quase 3 anos na Raro Labs, em dois projetos: Tele Sena (React/Next.js, AWS) e DUcash (React Native).',
      },
      roles: [
        {
          title: 'Desenvolvedor Full-Stack',
          client: 'Tele Sena',
          period: 'Set 2023 — Jan 2025',
          recruiter: {
            summary: 'Plataforma de vendas online de grande porte e alto volume de acessos (e-commerce).',
            highlights: [
              'Construí aplicações web com React e Next.js, com interfaces responsivas, acessíveis e PWAs',
              'Acompanhei a saúde da aplicação em produção com Datadog e New Relic, apoiando a investigação de gargalos de performance',
              'Atuei do frontend à nuvem com Node.js e AWS, com code reviews e pull requests no dia a dia',
            ],
          },
          dev: {
            stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'AWS Lambda', 'EC2', 'Datadog', 'New Relic'],
            details: [
              'Aplicações web com React e Next.js usando SSR e SSG, acessibilidade e PWAs',
              'Backend em Node.js com workloads em AWS Lambda e EC2',
              'Observabilidade e monitoramento com Datadog e New Relic para investigar gargalos de performance',
              'Fluxo de code reviews e pull requests',
            ],
          },
        },
        {
          title: 'Desenvolvedor Mobile',
          client: 'DUcash',
          period: 'Mai 2022 — Ago 2023',
          recruiter: {
            summary: 'Aplicativo mobile eficiente e responsivo em React Native.',
            highlights: [
              'Desenvolvi e evoluí o aplicativo mobile com foco em performance e acessibilidade',
              'Garanti a qualidade das entregas com testes automatizados',
              'Integrei o app a um backend de microsserviços',
            ],
          },
          dev: {
            stack: ['React Native', 'TypeScript', 'React Query', 'Redux', 'Jest', 'React Testing Library'],
            details: [
              'App em React Native e TypeScript, com React Query para estado de servidor e Redux para estado global',
              'Testes automatizados com Jest e React Testing Library',
              'Integração com microsserviços via REST síncrono e assíncrono',
            ],
          },
        },
        {
          title: 'Instrutor Frontend',
          client: 'Raro Academy',
          period: 'Jun 2023 — Set 2023',
          recruiter: {
            summary: 'Instrutor de React em curso técnico de desenvolvimento web.',
            highlights: ['Ensinei React em curso técnico, com explicações adaptadas a diferentes níveis de conhecimento'],
          },
          dev: {
            stack: ['React', 'JavaScript', 'Didática'],
            details: ['Aulas de React em curso técnico, adaptando as explicações a diferentes níveis'],
          },
        },
      ],
    },
    {
      company: 'ConsuTI',
      period: 'Jan 2021 — Mar 2022',
      location: 'Teresina, Brasil',
      roles: [
        {
          title: 'Desenvolvedor Frontend e Mobile',
          recruiter: {
            summary: 'Plataforma web em React e soluções mobile.',
            highlights: [
              'Desenvolvi plataforma em React e soluções mobile, com foco em otimização de performance',
              'Colaborei com diferentes times ao longo das entregas',
            ],
          },
          dev: {
            stack: ['React', 'JavaScript', 'Mobile'],
            details: ['Plataforma em React e soluções mobile com gerenciamento de estado complexo e otimização de performance'],
          },
        },
      ],
    },
  ],

  education: [
    {
      title: 'Pós-graduação em Engenharia de Software',
      institution: 'Descomplica Faculdade Digital',
      period: '2023 — 2024',
    },
    {
      title: 'Curso Técnico Integrado em Desenvolvimento Web e Mobile',
      institution: 'Raro Academy',
      period: '2022',
    },
    {
      title: 'Bacharelado em Engenharia Civil',
      institution: 'UNINOVAFAPI',
      period: '2015 — 2019',
    },
  ],

  projects: [
    {
      name: 'Site Currículo — este site',
      repoUrl: 'https://github.com/phap9060/curriculum-site',
      recruiter: {
        tagline: 'Portfólio pessoal com experiência adaptada para recruiters e devs.',
        impact: [
          'Dois modos de leitura: executivo (recruiter) e técnico (dev)',
          'Disponível em português e inglês, com troca de idioma instantânea',
          'Design system próprio com temas light/dark por modo',
        ],
      },
      dev: {
        stack: ['React 19', 'TypeScript', 'Tailwind CSS 4', 'Vite'],
        architecture:
          'SPA em React com design tokens semânticos em CSS custom properties. Contextos de modo e de idioma alternam tema, conteúdo e textos de cada seção, com persistência em localStorage.',
      },
    },
    {
      name: 'Sua Pelada — gerenciador de peladas',
      repoUrl: 'https://github.com/phap9060/sua-pelada',
      recruiter: {
        tagline: 'Aplicação para organizar peladas entre amigos, do convite ao campeão.',
        impact: [
          'Centraliza confirmação de presença, filas de espera e cotas separadas para linha e goleiros',
          'Sorteia times equilibrados pelas avaliações dos jogadores e organiza campeonatos com draft, grupos e mata-mata',
          'Automatiza a abertura e o fechamento das confirmações e mantém histórico de títulos e estatísticas da turma',
        ],
      },
      dev: {
        stack: ['React 19', 'TypeScript', 'Mantine', 'TanStack Query', 'Bun', 'Elysia', 'Drizzle ORM', 'PostgreSQL'],
        architecture:
          'Monorepo com SPA em React 19 (Mantine + TanStack Query) e API em Bun/Elysia com autenticação JWT. Drizzle ORM sobre PostgreSQL, scheduler para abrir e fechar confirmações, sorteio balanceado por médias de avaliação e campeonatos com draft serpentina, fase de grupos e mata-mata.',
      },
    },
  ],

  skills: {
    recruiter: [
      { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'React Native', 'Visualização de dados'] },
      { category: 'Performance & Arquitetura', items: ['Core Web Vitals', 'Micro Frontends', 'System Design', 'PWAs', 'Acessibilidade'] },
      { category: 'Qualidade', items: ['Automação de testes', 'Cypress', 'Playwright', 'Jest', 'CI/CD'] },
      { category: 'Backend & Cloud', items: ['Node.js', 'AWS', 'APIs REST', 'Observabilidade'] },
      { category: 'Liderança', items: ['Code reviews', 'Mentoria', 'Diagnósticos técnicos', 'Instrutor de React'] },
      { category: 'Idiomas', items: ['Português nativo', 'Inglês avançado'] },
    ],
    dev: [
      { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'React Native', 'HTML5', 'CSS3', 'SASS', 'Styled Components'] },
      { category: 'Estado', items: ['TanStack Query', 'Redux', 'Zustand'] },
      { category: 'Performance', items: ['Core Web Vitals', 'Code splitting', 'Lazy loading', 'Memoization', 'CSR / SSR / SSG'] },
      { category: 'Testes', items: ['Jest', 'Vitest', 'React Testing Library', 'Cypress', 'Playwright'] },
      { category: 'Arquitetura', items: ['Micro Frontends', 'Microsserviços', 'System Design', 'ADRs', 'SDD', 'PWAs'] },
      { category: 'Segurança', items: ['OWASP Top 10', 'XSS', 'CSRF', 'CSP', 'LGPD'] },
      { category: 'Backend & Cloud', items: ['Node.js', 'APIs REST', 'AWS Lambda', 'EC2', 'SQS', 'Kafka', 'RabbitMQ'] },
      { category: 'Observabilidade & CI/CD', items: ['Datadog', 'New Relic', 'CI/CD'] },
      { category: 'Idiomas', items: ['pt-BR nativo', 'inglês avançado'] },
    ],
  },

  contact: {
    recruiter: {
      title: 'Vamos conversar?',
      subtitle: 'Estou aberto a novas oportunidades. Respondo em até 24h.',
    },
    dev: {
      title: '$ ping pedro',
      subtitle: 'Aberto a projetos, code reviews e boas conversas sobre frontend.',
    },
  },
}
