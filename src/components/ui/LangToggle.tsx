import { useLang } from '../../hooks/useLang'
import { cn } from '../../lib/cn'
import type { Lang } from '../../data/types'

const options: { value: Lang; label: string; name: string }[] = [
  { value: 'pt', label: 'PT', name: 'Português' },
  { value: 'en', label: 'EN', name: 'English' },
]

/** Controle segmentado que alterna o idioma do site (português/inglês). */
export function LangToggle() {
  const { lang, setLang, profile } = useLang()

  return (
    <div
      role="group"
      aria-label={profile.ui.langToggle}
      className="flex items-center rounded-full border-2 border-border bg-surface-raised p-0.5 shadow-card-sm"
    >
      {options.map(({ value, label, name }) => {
        const isActive = lang === value
        return (
          <button
            key={value}
            type="button"
            lang={value}
            title={name}
            aria-label={name}
            aria-pressed={isActive}
            onClick={() => setLang(value)}
            className={cn(
              'cursor-pointer rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors',
              isActive ? 'bg-accent text-accent-contrast' : 'text-ink-muted hover:text-ink',
            )}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
