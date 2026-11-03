import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-border bg-surface-raised p-6 shadow-sm transition-colors hover:border-accent/60',
        className,
      )}
    >
      {children}
    </div>
  )
}
