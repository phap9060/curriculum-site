import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface CardProps {
  children: ReactNode
  className?: string
  id?: string
}

/** Card: fino e sóbrio no recruiter; borda grossa, sombra chapada e hover no dev. */
export function Card({ children, className, id }: CardProps) {
  return (
    <div
      id={id}
      className={cn(
        'rounded-2xl border-2 border-border bg-surface-raised p-6 shadow-card transition-transform duration-200 dark:hover:-translate-y-1',
        className,
      )}
    >
      {children}
    </div>
  )
}
