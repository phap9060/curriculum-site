import { useCallback, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { ModeContext } from './mode-context'
import type { Mode } from './mode-context'

const STORAGE_KEY = 'portfolio-mode'

function getInitialMode(): Mode {
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored === 'dev' ? 'dev' : 'recruiter'
}

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>(getInitialMode)

  useEffect(() => {
    // Modo dev usa o tema dark; modo recruiter usa o tema light (padrão).
    document.documentElement.classList.toggle('dark', mode === 'dev')
    document.documentElement.dataset.mode = mode
    localStorage.setItem(STORAGE_KEY, mode)
  }, [mode])

  const toggleMode = useCallback(() => {
    setMode((current) => (current === 'dev' ? 'recruiter' : 'dev'))
  }, [])

  const value = useMemo(
    () => ({ mode, isDev: mode === 'dev', setMode, toggleMode }),
    [mode, toggleMode],
  )

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>
}
