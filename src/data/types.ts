export type Lang = 'pt' | 'en'

export interface SocialLinks {
  email: string
  linkedin: string
  github: string
  whatsapp: string
}

export interface Stat {
  value: string
  label: string
}

export interface TerminalLine {
  command: string
  output: string
}

export type ExpertiseIcon = 'server' | 'chart' | 'gauge' | 'layers' | 'shield' | 'flask' | 'users'

export interface ExpertiseItem {
  icon: ExpertiseIcon
  title: string
  /** Texto focado em resultado (modo recruiter) */
  recruiter: string
  /** Texto focado em técnica (modo dev) */
  dev: string
}

export interface ExperienceRole {
  title: string
  /** Cliente/produto dentro do grupo (ex.: Tele Sena, DUcash) */
  client?: string
  /** Período específico do cargo; omitido quando a empresa tem um único cargo */
  period?: string
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

export interface ExperienceItem {
  company: string
  /** Período total na empresa/grupo */
  period: string
  location: string
  /** Contexto do período, exibido antes dos cargos */
  summary?: {
    recruiter: string
    dev: string
  }
  roles: ExperienceRole[]
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

/** Abas do aparelho DEV-DEX (modo dev). */
export type DexTab = 'info' | 'evolution' | 'abilities' | 'items' | 'training' | 'habitat' | 'log'

export type HabitatSpot = 'email' | 'linkedin' | 'github' | 'whatsapp'

/** Carta do hero ("Quem é esse dev?"). */
export interface CardInfo {
  question: string
  reveal: string
  hide: string
  answer: string
  species: string
  types: string[]
  fields: { label: string; value: string }[]
  /** Abas do aparelho (modo dev) */
  tabs: Record<DexTab, string>
  /** Rótulos internos da tela */
  labels: {
    highlights: string
    techNotes: string
    pickStage: string
    stack: string
  }
  /** Dica de navegação exibida abaixo da tela */
  navHint: string
  /** Aba Habitat: "onde encontrar esse dev" */
  habitat: {
    title: string
    region: { label: string; value: string }
    spots: { id: HabitatSpot; area: string; note: string }[]
  }
}

/** Textos fixos da interface (navegação, botões, rótulos de acessibilidade). */
export interface UiStrings {
  sections: {
    now: string
    expertise: string
    experience: string
    education: string
    projects: string
    skills: string
    contact: string
  }
  available: string
  /** Link de e-mail no rodapé minimalista ("say hi") */
  sayHi: string
  downloadCv: string
  viewProjects: string
  madeWith: string
  backToTop: string
  mainNav: string
  modeToggle: string
  langToggle: string
  openDemo: string
  openRepo: string
  evolution: string
  stage: string
  current: string
}

export interface Profile {
  meta: { title: string; description: string }
  role: string
  location: string
  cvUrl: string
  cvFileName: string
  ui: UiStrings
  /** Página minimalista do modo recruiter */
  minimal: {
    /** Apresentação curta (1 a 2 frases) */
    intro: string
    /** O que estou fazendo agora */
    now: string
    /** "O que já fiz": uma linha por contribuição, mais as empresas */
    done: {
      title: string
      items: string[]
      companies: string
    }
    /** Fechamento da página: chamada para contato */
    contact: { title: string; text: string }
  }
  card: CardInfo
  hero: {
    recruiter: { headline: string; pitch: string; stats: Stat[] }
    dev: { pitch: string; terminalLines: TerminalLine[] }
  }
  expertise: ExpertiseItem[]
  experience: ExperienceItem[]
  education: EducationItem[]
  projects: Project[]
  skills: { recruiter: SkillGroup[]; dev: SkillGroup[] }
}
