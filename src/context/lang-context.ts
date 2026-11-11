import { createContext } from 'react'
import type { Lang, Profile } from '../data/types'

export interface LangContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  /** Conteúdo do site no idioma ativo */
  profile: Profile
}

export const LangContext = createContext<LangContextValue | null>(null)
