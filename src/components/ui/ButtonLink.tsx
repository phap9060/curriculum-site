import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'outline'
  children: ReactNode
}

/** Link com aparência de botão "apertável" (sombra chapada que afunda no clique). */
export function ButtonLink({ variant = 'primary', className, children, ...props }: ButtonLinkProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center gap-2 rounded-xl border-2 border-border px-5 py-2.5 text-sm font-bold shadow-card-sm transition-transform duration-150 hover:-translate-y-0.5 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none',
        variant === 'primary' && 'bg-accent text-accent-contrast',
        variant === 'outline' && 'bg-surface-raised text-ink',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}
