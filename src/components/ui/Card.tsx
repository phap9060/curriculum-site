import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface CardProps {
  children: ReactNode
  className?: string
  id?: string
}

/** Carta com borda grossa e sombra chapada; levanta levemente no hover. */
export function Card({ children, className, id }: CardProps) {
  return (
    <div
      id={id}
      className={cn(
        'rounded-2xl border-2 border-border bg-surface-raised p-6 shadow-card transition-transform duration-200 hover:-translate-y-1',
        className,
      )}
    >
      {children}
    </div>
  )
}
