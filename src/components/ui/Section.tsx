import type { ReactNode } from 'react'
import { useMode } from '../../hooks/useMode'

interface SectionProps {
  id: string
  /** Número exibido antes do título (como o número de uma entrada de catálogo) */
  index: number
  title: string
  children: ReactNode
}

/** Wrapper padrão de seção: número grande, título em fonte display e régua. */
export function Section({ id, index, title, children }: SectionProps) {
  const { isDev } = useMode()
  const number = String(index).padStart(2, '0')

  return (
    <section id={id} className="mx-auto w-full max-w-5xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mb-10 flex items-end gap-3 sm:gap-4">
        <span className="font-display text-4xl leading-none font-extrabold text-accent sm:text-5xl">
          {isDev ? `>${number}` : `Nº${number}`}
        </span>
        <h2 className="font-display text-3xl leading-none font-extrabold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <span className="mb-1.5 h-0.5 flex-1 bg-border" aria-hidden />
      </div>
      {children}
    </section>
  )
}
