import type { MouseEvent } from 'react'
import { ArrowUpRight, Briefcase, Gamepad2 } from 'lucide-react'
import { useMode } from '../../hooks/useMode'
import { useLang } from '../../hooks/useLang'
import { cn } from '../../lib/cn'
import { buildHref } from '../../lib/route'

/** Clique normal troca sem recarregar; Ctrl/Cmd/clique do meio abre o link normalmente. */
function isPlainClick(event: MouseEvent<HTMLAnchorElement>) {
  return event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey
}

/**
 * Controle segmentado que alterna entre o modo recruiter e o modo dev.
 * Cada opção é um link (`?mode=dev`), então pode ser copiada e compartilhada.
 */
export function ModeToggle({ variant = 'pill' }: { variant?: 'pill' | 'text' }) {
  const { mode, setMode } = useMode()
  const { lang, profile } = useLang()

  // Texto puro (modo recruiter): um único link discreto para o modo fun.
  if (variant === 'text') {
    return (
      <a
        href={buildHref({ lang, mode: 'dev' })}
        aria-label={profile.ui.modeToggle}
        onClick={(event) => {
          if (!isPlainClick(event)) return
          event.preventDefault()
          setMode('dev')
        }}
        className="group flex cursor-pointer items-center gap-0.5 text-[13px] text-ink-muted transition-colors hover:text-ink"
      >
        <span className="font-serif text-[15px] italic">fun mode</span>
        <ArrowUpRight
          size={13}
          aria-hidden
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>
    )
  }

  const options = [
    { value: 'recruiter' as const, label: 'Recruiter', icon: Briefcase },
    { value: 'dev' as const, label: 'Fun', icon: Gamepad2 },
  ]

  return (
    <div
      role="group"
      aria-label={profile.ui.modeToggle}
      className="flex items-center rounded-full border-2 border-border bg-surface-raised p-0.5 shadow-card-sm"
    >
      {options.map(({ value, label, icon: Icon }) => {
        const isActive = mode === value
        return (
          <a
            key={value}
            href={buildHref({ lang, mode: value })}
            aria-current={isActive ? 'page' : undefined}
            aria-label={label}
            onClick={(event) => {
              if (!isPlainClick(event)) return
              event.preventDefault()
              setMode(value)
            }}
            className={cn(
              'flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors',
              isActive ? 'bg-accent text-accent-contrast' : 'text-ink-muted hover:text-ink',
            )}
          >
            <Icon size={14} aria-hidden />
            <span className="hidden sm:inline">{label}</span>
          </a>
        )
      })}
    </div>
  )
}
