import { useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { LangContext } from './lang-context'
import { profiles } from '../data/profile'
import type { Lang } from '../data/types'

const STORAGE_KEY = 'portfolio-lang'

/** Idioma salvo pelo visitante; senão, inglês (padrão). */
function getInitialLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'pt' || stored === 'en') return stored
  } catch {
    // localStorage indisponível: usa o padrão
  }
  return 'en'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang)
  const profile = profiles[lang]

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    document.title = profile.meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', profile.meta.description)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // sem persistência
    }
  }, [lang, profile])

  const value = useMemo(() => ({ lang, setLang, profile }), [lang, profile])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}
