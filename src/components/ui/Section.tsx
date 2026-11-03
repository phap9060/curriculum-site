import type { ReactNode } from 'react'
import { useMode } from '../../hooks/useMode'

interface SectionProps {
  id: string
  title: string
  children: ReactNode
}

/**
 * Wrapper padrão de seção. No modo dev o título ganha prefixo `##` em mono,
 * reforçando a estética de markdown/terminal (veja docs/UI.md).
 */
export function Section({ id, title, children }: SectionProps) {
  const { isDev } = useMode()

  return (
    <section id={id} className="mx-auto w-full max-w-4xl scroll-mt-24 px-6 py-16 sm:py-20">
      <h2 className="mb-10 text-3xl font-bold tracking-tight">
        {isDev && <span className="mr-2 font-mono text-accent">##</span>}
        {title}
      </h2>
      {children}
    </section>
  )
}
