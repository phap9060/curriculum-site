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

export type ExpertiseIcon = 'chart' | 'gauge' | 'layers' | 'shield' | 'flask' | 'users'

export interface ExpertiseItem {
  icon: ExpertiseIcon
  title: string
  /** Nível de 0 a 100 exibido como barra de stat */
  stat: number
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

/** Carta do hero ("Quem é esse dev?"). */
export interface CardInfo {
  question: string
  reveal: string
  hide: string
  answer: string
  species: string
  types: string[]
  fields: { label: string; value: string }[]
}

/** Textos fixos da interface (navegação, botões, rótulos de acessibilidade). */
export interface UiStrings {
  sections: {
    expertise: string
    experience: string
    education: string
    projects: string
    skills: string
    contact: string
  }
  available: string
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
  contact: {
    recruiter: { title: string; subtitle: string }
    dev: { title: string; subtitle: string }
  }
}
