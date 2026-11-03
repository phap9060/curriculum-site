import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface BadgeProps {
  children: ReactNode
  /** Usa fonte mono — padrão no modo dev */
  mono?: boolean
  className?: string
}

export function Badge({ children, mono = false, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-border bg-surface px-2.5 py-0.5 text-xs font-medium text-ink-muted',
        mono && 'font-mono',
        className,
      )}
    >
      {children}
    </span>
  )
}
