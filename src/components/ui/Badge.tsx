import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import type { BadgeTone } from './badge-tones'

const tones: Record<BadgeTone, string> = {
  neutral: 'bg-surface text-ink',
  accent: 'bg-accent text-accent-contrast',
  accent2: 'bg-accent-2 text-accent-2-contrast',
  accent3: 'bg-accent-3 text-accent-3-contrast',
}

interface BadgeProps {
  children: ReactNode
  /** Usa fonte mono, padrão no modo dev */
  mono?: boolean
  tone?: BadgeTone
  className?: string
}

export function Badge({ children, mono = false, tone = 'neutral', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border-2 border-border px-2.5 py-0.5 text-xs font-semibold',
        tones[tone],
        mono && 'font-mono',
        className,
      )}
    >
      {children}
    </span>
  )
}
