import type { MouseEvent } from 'react'
import { useLang } from '../../hooks/useLang'
import { useMode } from '../../hooks/useMode'
import { buildHref } from '../../lib/route'
import { cn } from '../../lib/cn'
import type { Lang } from '../../data/types'

/** Clique normal troca sem recarregar; Ctrl/Cmd/clique do meio abre o link normalmente. */
function isPlainClick(event: MouseEvent<HTMLAnchorElement>) {
  return event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey
}

const options: { value: Lang; label: string; name: string }[] = [
  { value: 'pt', label: 'PT', name: 'Português' },
  { value: 'en', label: 'EN', name: 'English' },
]

/** Controle segmentado que alterna o idioma (português/inglês). Cada opção é um link (`?lg=pt`). */
export function LangToggle({ variant = 'pill' }: { variant?: 'pill' | 'text' }) {
  const { lang, setLang, profile } = useLang()
  const { mode } = useMode()

  // Texto puro (modo recruiter): "PT / EN", o idioma ativo em tinta cheia.
  if (variant === 'text') {
    return (
      <div role="group" aria-label={profile.ui.langToggle} className="flex items-center gap-1.5 text-[13px]">
        {options.map(({ value, label, name }, index) => {
          const isActive = lang === value
          return (
            <span key={value} className="flex items-center gap-1.5">
              {index > 0 && (
                <span aria-hidden className="text-border">
                  /
                </span>
              )}
              <a
                href={buildHref({ lang: value, mode })}
                hrefLang={value === 'pt' ? 'pt-BR' : 'en'}
                lang={value}
                title={name}
                aria-label={name}
                aria-current={isActive ? 'page' : undefined}
                onClick={(event) => {
                  if (!isPlainClick(event)) return
                  event.preventDefault()
                  setLang(value)
                }}
                className={cn(
                  'cursor-pointer transition-colors',
                  isActive ? 'font-medium text-ink' : 'text-ink-muted hover:text-ink',
                )}
              >
                {label}
              </a>
            </span>
          )
        })}
      </div>
    )
  }

  return (
    <div
      role="group"
      aria-label={profile.ui.langToggle}
      className="flex items-center rounded-full border-2 border-border bg-surface-raised p-0.5 shadow-card-sm"
    >
      {options.map(({ value, label, name }) => {
        const isActive = lang === value
        return (
          <a
            key={value}
            href={buildHref({ lang: value, mode })}
            hrefLang={value === 'pt' ? 'pt-BR' : 'en'}
            lang={value}
            title={name}
            aria-label={name}
            aria-current={isActive ? 'page' : undefined}
            onClick={(event) => {
              if (!isPlainClick(event)) return
              event.preventDefault()
              setLang(value)
            }}
            className={cn(
              'cursor-pointer rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors',
              isActive ? 'bg-accent text-accent-contrast' : 'text-ink-muted hover:text-ink',
            )}
          >
            {label}
          </a>
        )
      })}
    </div>
  )
}
