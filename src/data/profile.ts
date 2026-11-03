/*
 * ============================================================================
 * ÚNICA FONTE DE VERDADE DO CONTEÚDO DO SITE
 * ----------------------------------------------------------------------------
 * Edite APENAS este arquivo para personalizar todo o site. Cada bloco tem
 * uma versão `recruiter` (resumida, focada em impacto e resultados) e uma
 * versão `dev` (detalhes técnicos, stack e arquitetura).
 *
 * Conteúdo gerado a partir de: Pedro_Henrique_Assuncao_Pereira_Curriculo_ATS_PT-BR.pdf
 * ============================================================================
 */

export interface SocialLinks {
  email: string
  linkedin: string
  github: string
}

export interface Stat {
  value: string
  label: string
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  recruiter: {
    /** Frase-resumo da contribuição, focada em negócio */
    summary: string
    /** Conquistas orientadas a resultado */
    highlights: string[]
  }
  dev: {
    stack: string[]
    /** Decisões técnicas, arquitetura, desafios de engenharia */
    details: string[]
  }
}

export interface Project {
  name: string
  liveUrl?: string
  repoUrl?: string
  recruiter: {
    tagline: string
    impact: string[]
  }
  dev: {
    stack: string[]
    architecture: string
  }
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface EducationItem {
  title: string
  institution: string
  period: string
}

const projects: Project[] = [
  {
    name: 'Site Currículo — este site',
    repoUrl: 'https://github.com/phap9060/curriculum-site',
    recruiter: {
      tagline: 'Portfólio pessoal com experiência adaptada para recruiters e devs.',
      impact: [
        'Dois modos de leitura: executivo (recruiter) e técnico (dev)',
        'Design system próprio com temas light/dark por modo',
      ],
    },
    dev: {
      stack: ['React 19', 'TypeScript', 'Tailwind CSS 4', 'Vite'],
      architecture:
        'SPA em React com design tokens semânticos em CSS custom properties. Contexto de modo alterna tema light/dark e o conteúdo de cada seção, com persistência em localStorage.',
    },
  },
  // TODO: substitua o projeto abaixo por um projeto real seu.
  {
    name: 'Seu próximo projeto aqui',
    repoUrl: 'https://github.com/phap9060',
    recruiter: {
      tagline: 'Descreva o problema que o projeto resolve e para quem.',
      impact: ['Liste resultados mensuráveis: usuários, tempo economizado, conversão...'],
    },
    dev: {
      stack: ['Stack', 'Do', 'Projeto'],
      architecture: 'Descreva a arquitetura, decisões técnicas e trade-offs do projeto.',
    },
  },
]

export const profile = {
  name: 'Pedro Henrique',
  fullName: 'Pedro Henrique Assunção Pereira',
  role: 'Desenvolvedor Frontend | React | TypeScript | Next.js',
  location: 'Teresina, PI — Brasil',
  /** O CV em PDF está em `public/cv.pdf` */
  cvUrl: `${import.meta.env.BASE_URL}cv.pdf`,
  social: {
    email: 'phap9060@gmail.com',
    linkedin: 'https://linkedin.com/in/phap9060',
    github: 'https://github.com/phap9060',
  } satisfies SocialLinks,

  hero: {
    recruiter: {
      headline: 'Desenvolvedor Frontend especialista em React, com experiência em produtos de larga escala.',
      pitch: 'Experiência contínua em React desde 2021, com atuação em aplicações web em produção, Next.js, TypeScript, APIs REST, micro frontends e arquitetura de sistemas. Atualmente trabalho em produto internacional da indústria siderúrgica que processa milhões de pontos de dados, com foco em performance, confiabilidade e escalabilidade.',
      stats: [
        { value: '5+', label: 'anos com React em produção' },
        { value: '4', label: 'empresas' },
        { value: '1M+', label: 'pontos de dados processados' },
      ] satisfies Stat[],
    },
    dev: {
      headline: '$ whoami',
      pitch: 'Frontend engineer com 5+ anos de React em produção. Micro frontends, serverless na AWS e performance em produto que processa milhões de pontos de dados simultâneos.',
      terminalLines: [
        { command: 'whoami', output: 'pedro — frontend engineer' },
        { command: 'cat stack.txt', output: 'react · next.js · typescript · node · aws' },
        { command: 'uptime', output: '5+ anos em produção, de Teresina a produto internacional' },
      ],
    },
  },

  experience: [
    {
      company: 'Vetta',
      role: 'Full Stack Engineer',
      period: 'Fev 2025 — atual',
      location: 'Belo Horizonte, Brasil',
      recruiter: {
        summary: 'Engenharia em produto internacional da indústria siderúrgica usado em larga escala.',
        highlights: [
          'Atuo em produto que processa milhões de pontos de dados simultâneos, com foco em performance de frontend e backend',
          'Contribuo para sistemas em produção com foco em confiabilidade, escalabilidade e eficiência',
          'Uso de IA, Harness e Tool Calling nos workflows de engenharia, acelerando a entrega do time',
        ],
      },
      dev: {
        stack: ['JavaScript', 'React', 'Node.js', 'Micro Frontends', 'Microsserviços', 'Harness'],
        details: [
          'Arquitetura baseada em micro frontends e microsserviços com princípios de system design',
          'Otimização de performance full stack para processamento de milhões de pontos de dados',
          'CI/CD com Harness e uso de IA/Tool Calling no fluxo de engenharia',
        ],
      },
    },
    {
      company: 'Raro : Tele-Sena',
      role: 'Desenvolvedor Full-Stack',
      period: 'Mai 2022 — Dez 2023',
      location: 'Brasil',
      recruiter: {
        summary: 'Plataforma web interna em React integrada a backend de microsserviços.',
        highlights: [
          'Desenvolvi plataforma web interna em ReactJS integrada a backend baseado em microsserviços',
          'Documentei APIs com Swagger, facilitando integração e onboarding de novos desenvolvedores',
        ],
      },
      dev: {
        stack: ['React', 'TypeScript', 'React Query', 'Styled Components', 'NestJS', 'SQL Server', 'AWS'],
        details: [
          'Formulários complexos com Formik + Yup e cache de servidor com React Query',
          'Serviços com Express/TypeORM e integração com endpoints síncronos e assíncronos',
          'APIs documentadas com Swagger em arquitetura de microsserviços',
        ],
      },
    },
    {
      company: 'Raro : Mlearn',
      role: 'Desenvolvedor Frontend e Mobile',
      period: 'Jan 2024 — Ago 2024',
      location: 'Brasil',
      recruiter: {
        summary: 'Interfaces web e apps mobile com foco na experiência do usuário.',
        highlights: [
          'Construí interfaces web modernas em React com foco em UX',
          'Desenvolvi aplicações eficientes e responsivas em React Native',
          'Participei de ponta a ponta: planejamento, design, implementação e manutenção, em equipes multidisciplinares',
        ],
      },
      dev: {
        stack: ['React', 'React Native', 'TypeScript'],
        details: [
          'Componentização e gerenciamento de estado em apps React Native',
          'Colaboração com equipes multidisciplinares do design à entrega',
        ],
      },
    },
    {
      company: 'Raro : Zelo',
      role: 'Desenvolvedor Full-Stack',
      period: 'Set 2024 — Jan 2025',
      location: 'Brasil',
      recruiter: {
        summary: 'Aplicações server e serverless, do frontend à nuvem.',
        highlights: [
          'Desenvolvi aplicações server e serverless com Node.js, React/Next.js e Flutter',
          'Contribuí para arquiteturas de micro frontends e integração entre camadas frontend e backend',
        ],
      },
      dev: {
        stack: ['Node.js', 'Next.js', 'Flutter', 'AWS Lambda', 'EC2'],
        details: [
          'Aplicações serverless com AWS Lambda e workloads em EC2',
          'Integração ponta a ponta entre frontend e backend em soluções full-stack',
        ],
      },
    },
    {
      company: 'Raro Academy',
      role: 'Instrutor Frontend',
      period: 'Jun 2023 — Set 2023',
      location: 'Brasil',
      recruiter: {
        summary: 'Instrutor de React em curso técnico de desenvolvimento web.',
        highlights: [
          'Ensinei React em curso técnico, oferecendo suporte individualizado aos alunos',
          'Adaptei explicações para diferentes níveis de conhecimento',
        ],
      },
      dev: {
        stack: ['React', 'JavaScript', 'Didática'],
        details: [
          'Preparação de material e exercícios práticos de React',
          'Mentoria individual para alunos em diferentes níveis de conhecimento',
        ],
      },
    },
    {
      company: 'ConsuTI',
      role: 'Desenvolvedor Frontend e Mobile',
      period: 'Jan 2021 — Mar 2022',
      location: 'Teresina, Brasil',
      recruiter: {
        summary: 'Primeira posição profissional: plataforma React e soluções mobile.',
        highlights: [
          'Desenvolvi plataforma baseada em React e contribuí para soluções frontend e mobile',
          'Otimizei performance e gerenciei estado complexo com requisitos dinâmicos',
        ],
      },
      dev: {
        stack: ['React', 'React Native', 'JavaScript'],
        details: [
          'Gerenciamento de estado complexo e integração de módulos',
          'Otimização de performance em colaboração com múltiplas áreas',
        ],
      },
    },
  ] satisfies ExperienceItem[],

  education: [
    {
      title: 'Pós-graduação em Engenharia de Software',
      institution: 'Descomplica Faculdade Digital',
      period: '2023 — 2024',
    },
    {
      title: 'Curso Técnico em Desenvolvimento Web e Mobile',
      institution: 'Raro Academy',
      period: '2022',
    },
    {
      title: 'Bacharelado em Engenharia Civil',
      institution: 'UNINOVAFAPI',
      period: '2015 — 2019',
    },
  ] satisfies EducationItem[],

  projects,

  skills: {
    recruiter: [
      { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'React Native'] },
      { category: 'Backend & Cloud', items: ['Node.js', 'NestJS', 'AWS', 'Serverless'] },
      { category: 'Colaboração', items: ['Instrutor de React', 'Documentação de APIs', 'Times multidisciplinares', 'Ciclo completo de desenvolvimento'] },
    ] satisfies SkillGroup[],
    dev: [
      { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'React Query', 'Styled Components', 'React Native'] },
      { category: 'Formulários', items: ['Formik', 'Yup'] },
      { category: 'Backend', items: ['Node.js', 'NestJS', 'Express', 'TypeORM', 'Swagger', 'APIs REST'] },
      { category: 'Arquitetura & Cloud', items: ['Micro Frontends', 'System Design', 'AWS Lambda', 'EC2', 'Serverless'] },
      { category: 'Dados', items: ['PostgreSQL', 'SQL Server'] },
    ] satisfies SkillGroup[],
  },

  contact: {
    recruiter: {
      title: 'Vamos conversar?',
      subtitle: 'Estou aberto a novas oportunidades. Respondo em até 24h úteis.',
    },
    dev: {
      title: '$ ping pedro',
      subtitle: 'Aberto a projetos, code reviews e boas conversas sobre frontend.',
    },
  },
} as const
