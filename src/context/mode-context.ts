import { createContext } from 'react'

export type Mode = 'recruiter' | 'dev'

export interface ModeContextValue {
  mode: Mode
  isDev: boolean
  setMode: (mode: Mode) => void
  toggleMode: () => void
}

export const ModeContext = createContext<ModeContextValue | null>(null)
