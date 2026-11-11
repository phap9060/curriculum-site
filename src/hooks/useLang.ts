import { useContext } from 'react'
import { LangContext } from '../context/lang-context'

export function useLang() {
  const context = useContext(LangContext)

  if (!context) {
    throw new Error('useLang deve ser usado dentro de <LangProvider>')
  }

  return context
}
