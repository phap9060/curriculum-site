import { useCallback, useEffect, useMemo } from 'react'
import type { ReactNode } from 'react'
import { ModeContext } from './mode-context'
import type { Mode } from './mode-context'
import { navigate, useRoute } from '../lib/route'

/** Modo vem da URL (`?mode=dev`); sem parâmetro, recruiter (padrão). */
export function ModeProvider({ children }: { children: ReactNode }) {
  const route = useRoute()
  const { mode } = route

  useEffect(() => {
    // A classe `.dark` marca o modo dev (veja index.css e docs/UI.md).
    document.documentElement.classList.toggle('dark', mode === 'dev')
    document.documentElement.dataset.mode = mode
  }, [mode])

  const setMode = useCallback((next: Mode) => navigate({ ...route, mode: next }), [route])
  const toggleMode = useCallback(() => setMode(mode === 'dev' ? 'recruiter' : 'dev'), [mode, setMode])

  const value = useMemo(() => ({ mode, isDev: mode === 'dev', setMode, toggleMode }), [mode, setMode, toggleMode])

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>
}
