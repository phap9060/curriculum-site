import { Briefcase, Terminal } from 'lucide-react'
import { useMode } from '../../hooks/useMode'
import { cn } from '../../lib/cn'

/**
 * Controle segmentado que alterna entre o modo recruiter e o modo dev.
 * Cada botão expõe `aria-pressed` para acessibilidade.
 */
export function ModeToggle() {
  const { mode, setMode } = useMode()

  const options = [
    { value: 'recruiter' as const, label: 'Recruiter', icon: Briefcase },
    { value: 'dev' as const, label: 'Dev', icon: Terminal },
  ]

  return (
    <div
      role="group"
      aria-label="Alternar modo de exibição"
      className="flex items-center rounded-full border border-border bg-surface-raised p-1"
    >
      {options.map(({ value, label, icon: Icon }) => {
        const isActive = mode === value
        return (
          <button
            key={value}
            type="button"
            aria-pressed={isActive}
            onClick={() => setMode(value)}
            className={cn(
              'flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors',
              isActive ? 'bg-accent text-accent-contrast' : 'text-ink-muted hover:text-ink',
            )}
          >
            <Icon size={14} aria-hidden />
            {label}
          </button>
        )
      })}
    </div>
  )
}
