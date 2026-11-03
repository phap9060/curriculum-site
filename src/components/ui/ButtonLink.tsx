import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'outline'
  children: ReactNode
}

/** Link com aparência de botão. Use para CTAs que navegam (href). */
export function ButtonLink({ variant = 'primary', className, children, ...props }: ButtonLinkProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-0.5',
        variant === 'primary' && 'bg-accent text-accent-contrast shadow-sm hover:opacity-90',
        variant === 'outline' && 'border border-border bg-surface-raised text-ink hover:border-accent',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}
