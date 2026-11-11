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
      'Portfólio de Pedro Henrique Assunção Pereira — Engenheiro de Software Sênior que atua no front-end e no back-end: React, Node.js, sistemas distribuídos, mensageria, performance e visualização de dados.',
  },
  role: 'Engenheiro de Software Sênior | Front-end e back-end | React | Node.js | Sistemas distribuídos',
  location: 'Teresina, PI — Brasil · Remoto',
  cvUrl: `${import.meta.env.BASE_URL}cv-pt.pdf`,
  cvFileName: 'Pedro-Henrique-Assuncao-Curriculo.pdf',

  ui: {
    sections: {
      now: 'Agora',
      expertise: 'Especialidades',
      experience: 'Experiência',
      education: 'Formação',
      projects: 'Projetos',
      skills: 'Skills',
      contact: 'Contato',
    },
    available: 'Disponível para oportunidades',
    sayHi: 'diga oi',
    stack: 'Stack',
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

  minimal: {
    intro:
      'Construo produtos de ponta a ponta: sistemas distribuídos no back-end com Node.js e mensageria, e interfaces rápidas e ricas em dados com React e TypeScript.',
    now: 'Atualmente Full Stack Engineer na Vetta, em um produto internacional da indústria siderúrgica que lida com milhões de pontos de dados.',
  },

  card: {
    question: 'Quem é esse dev?',
    reveal: 'Revelar',
    hide: 'Esconder de novo',
    answer: 'É o Pedro Henrique!',
    species: 'Engenheiro de Software Sênior',
    types: ['Front-end', 'Back-end', 'Dados', 'IA', 'RAG', 'LLM', 'MCP'],
    fields: [
      { label: 'Região', value: 'Teresina, BR' },
      { label: 'Em produção desde', value: '2021' },
      { label: 'Idiomas', value: 'PT · EN' },
      { label: 'Modelo', value: 'Remoto' },
    ],
    tabs: {
      info: 'Info',
      stats: 'Stats',
      evolution: 'Evolução',
      moves: 'Golpes',
      items: 'Itens',
      training: 'Treino',
      log: 'Log',
    },
    labels: {
      baseStats: 'Status base',
      total: 'Total',
      pickStage: 'Toque num estágio para ver os detalhes',
      stack: 'Stack',
      links: 'Conectar',
    },
    navHint: '◀ ▶ abas · ▲ ▼ rolar · A CV · B GitHub',
  },

  hero: {
    recruiter: {
      headline: 'Engenheiro de Software Sênior que entrega de ponta a ponta — das interfaces em React aos sistemas distribuídos no back-end.',
      pitch:
        'Engenheiro de software desde 2021, construindo de ponta a ponta produtos de alta complexidade e alto volume de dados e acessos. No back-end, trabalho com sistemas distribuídos: microsserviços em Node.js, APIs REST, mensageria (SQS, Kafka, RabbitMQ), serverless na AWS e observabilidade com logs, métricas e alertas (Datadog, New Relic). No front-end, defino arquitetura, otimizo performance (Core Web Vitals) e construo interfaces ricas em gráficos com React e TypeScript. Atuo entre a estratégia e a execução, garanto qualidade com testes automatizados e colaboro de perto com produto, design e engenharia.',
      stats: [
        { value: '5+', label: 'anos construindo software em produção' },
        { value: '1M+', label: 'pontos de dados renderizados simultaneamente' },
        { value: '3', label: 'empresas, de e-commerce à indústria' },
      ],
    },
    dev: {
      pitch:
        'Engenheiro de software sênior em produção desde 2021, nos dois lados da stack. Back: microsserviços em Node.js, APIs REST, mensageria com SQS, Kafka e RabbitMQ, AWS Lambda/EC2 e observabilidade. Front: React, TypeScript, gráficos com milhões de pontos, Core Web Vitals, micro frontends e Next.js (CSR/SSR/SSG). Tudo coberto por testes no CI/CD.',
      terminalLines: [
        { command: 'whoami', output: 'pedro — engenheiro de software sênior · front-end + back-end' },
        { command: 'cat backend.txt', output: 'node.js · microsserviços · apis rest · sqs · kafka · rabbitmq · aws' },
        { command: 'cat frontend.txt', output: 'react · next.js · typescript · react native · dataviz' },
        { command: 'cat focus.txt', output: 'performance · arquitetura · sistemas distribuídos · dataviz · segurança' },
        { command: 'cat testing.txt', output: 'jest · vitest · testing library · cypress · playwright' },
        { command: 'cat languages.txt', output: 'pt-BR nativo · inglês avançado' },
        { command: 'uptime', output: '5+ anos em produção, de Teresina a produto internacional' },
      ],
    },
  },

  expertise: [
    {
      icon: 'server',
      title: 'Back-end e sistemas distribuídos',
      stat: 88,
      recruiter:
        'Serviços confiáveis e escaláveis: microsserviços, APIs e mensageria assíncrona, monitorados em produção.',
      dev: 'Microsserviços em Node.js, APIs REST, mensageria com SQS, Kafka e RabbitMQ, serverless na AWS (Lambda, EC2) e observabilidade com logs, métricas e alertas.',
    },
    {
      icon: 'chart',
      title: 'Front-end e visualização de dados',
      stat: 95,
      recruiter:
        'Interfaces responsivas e acessíveis e gráficos interativos que deixam dados complexos legíveis, mesmo com milhões de pontos na tela.',
      dev: 'React, TypeScript e Next.js; bibliotecas de componentes reutilizáveis e gráficos interativos renderizando milhões de pontos simultâneos.',
    },
    {
      icon: 'layers',
      title: 'Arquitetura',
      stat: 88,
      recruiter:
        'Defino a arquitetura e os planos de evolução de sistemas de alta complexidade, no front-end e no back-end.',
      dev: 'Micro frontends, microsserviços, system design, integração entre camadas, ADRs e SDD.',
    },
    {
      icon: 'gauge',
      title: 'Performance',
      stat: 92,
      recruiter:
        'Produtos rápidos e escaláveis: acompanho Core Web Vitals e ataco gargalos em toda a stack, junto a backend e infra.',
      dev: 'Code splitting, lazy loading, memoization, CSR/SSR/SSG com Next.js e diagnóstico de gargalos full stack com Datadog e New Relic.',
    },
    {
      icon: 'shield',
      title: 'Qualidade e segurança',
      stat: 88,
      recruiter:
        'Testes automatizados integrados ao CI/CD e proteção de fluxos sensíveis e dados de usuários, em conformidade com a LGPD.',
      dev: 'Jest, Vitest, React Testing Library, Cypress e Playwright no CI/CD; OWASP Top 10 (XSS, CSRF, CSP), autenticação/autorização e gestão de segredos.',
    },
    {
      icon: 'users',
      title: 'Liderança técnica',
      stat: 85,
      recruiter:
        'Conduzo diagnósticos e refatorações, influencio decisões com produto e negócio e oriento devs mais juniores.',
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
              'Engenharia full stack em produto internacional da indústria siderúrgica que processa milhões de pontos de dados simultaneamente.',
            highlights: [
              'Atuo na integração com o back-end via APIs REST, microsserviços e mensageria (SQS, Kafka, RabbitMQ), diagnosticando gargalos com observabilidade de logs, métricas e alertas',
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
          'SPA em React com design tokens semânticos em CSS custom properties. Contextos de modo e de idioma alternam tema, conteúdo e textos de cada seção, controlados pela query string da URL (?lg=pt&mode=dev), para que cada visão possa ser compartilhada.',
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
      { category: 'Back-end', items: ['Node.js', 'Microsserviços', 'APIs REST', 'Mensageria', 'AWS', 'Serverless'] },
      { category: 'Front-end', items: ['React', 'Next.js', 'TypeScript', 'React Native', 'Visualização de dados'] },
      { category: 'Arquitetura & Performance', items: ['Sistemas distribuídos', 'Micro Frontends', 'System Design', 'Core Web Vitals', 'Observabilidade'] },
      { category: 'Qualidade', items: ['Automação de testes', 'Cypress', 'Playwright', 'Jest', 'CI/CD'] },
      { category: 'Liderança', items: ['Code reviews', 'Mentoria', 'Diagnósticos técnicos', 'Instrutor de React'] },
      { category: 'Idiomas', items: ['Português nativo', 'Inglês avançado'] },
    ],
    dev: [
      { category: 'Back-end', items: ['Node.js', 'APIs REST', 'Microsserviços', 'AWS Lambda', 'EC2'] },
      { category: 'Mensageria', items: ['SQS', 'Kafka', 'RabbitMQ'] },
      { category: 'Front-end', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'React Native', 'HTML5', 'CSS3', 'SASS', 'Styled Components'] },
      { category: 'Estado', items: ['TanStack Query', 'Redux', 'Zustand'] },
      { category: 'Arquitetura', items: ['Sistemas distribuídos', 'Micro Frontends', 'System Design', 'ADRs', 'SDD', 'PWAs'] },
      { category: 'Performance', items: ['Core Web Vitals', 'Code splitting', 'Lazy loading', 'Memoization', 'CSR / SSR / SSG'] },
      { category: 'Testes', items: ['Jest', 'Vitest', 'React Testing Library', 'Cypress', 'Playwright'] },
      { category: 'Segurança', items: ['OWASP Top 10', 'XSS', 'CSRF', 'CSP', 'LGPD'] },
      { category: 'Observabilidade & CI/CD', items: ['Datadog', 'New Relic', 'Logs, métricas e alertas', 'CI/CD'] },
    ],
  },

  contact: {
    recruiter: {
      title: 'Vamos conversar?',
      subtitle: 'Estou aberto a novas oportunidades. Respondo em até 24h.',
    },
    dev: {
      title: '$ ping pedro',
      subtitle: 'Aberto a projetos, code reviews e boas conversas sobre software.',
    },
  },
}
