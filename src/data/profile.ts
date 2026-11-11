/*
 * ============================================================================
 * FONTE DE VERDADE DO CONTEÚDO DO SITE
 * ----------------------------------------------------------------------------
 * - `identity`: dados que não mudam com o idioma (nome, links).
 * - `profiles`: todo o conteúdo traduzido, um arquivo por idioma
 *   (`profile.pt.ts` e `profile.en.ts`), com a mesma estrutura (`Profile`).
 *
 * Cada bloco tem uma versão `recruiter` (resumida, focada em impacto) e uma
 * versão `dev` (detalhes técnicos, stack e arquitetura).
 * Os CVs em PDF ficam em `public/cv-pt.pdf` e `public/cv-en.pdf`.
 * ============================================================================
 */
import type { Lang, Profile, SocialLinks } from './types'
import { profilePt } from './profile.pt'
import { profileEn } from './profile.en'

export type * from './types'

export const identity = {
  name: 'Pedro Henrique',
  fullName: 'Pedro Henrique Assunção Pereira',
  social: {
    email: 'phap9060@gmail.com',
    linkedin: 'https://linkedin.com/in/phap9060',
    github: 'https://github.com/phap9060',
    whatsapp: 'https://wa.me/5586994633113',
  } satisfies SocialLinks,
}

export const profiles: Record<Lang, Profile> = {
  pt: profilePt,
  en: profileEn,
}
