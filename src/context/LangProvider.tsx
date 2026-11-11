import { useCallback, useEffect, useMemo } from 'react'
import type { ReactNode } from 'react'
import { LangContext } from './lang-context'
import { profiles } from '../data/profile'
import type { Lang } from '../data/types'
import { navigate, useRoute } from '../lib/route'

/** Idioma vem da URL (`?lg=pt`); sem parâmetro, inglês (padrão). */
export function LangProvider({ children }: { children: ReactNode }) {
  const route = useRoute()
  const { lang } = route
  const profile = profiles[lang]

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    document.title = profile.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', profile.meta.description)
  }, [lang, profile])

  const setLang = useCallback((next: Lang) => navigate({ ...route, lang: next }), [route])

  const value = useMemo(() => ({ lang, setLang, profile }), [lang, setLang, profile])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}
