import { ArrowUp } from 'lucide-react'
import { identity } from '../../data/profile'
import { useLang } from '../../hooks/useLang'
import { useMode } from '../../hooks/useMode'

export function Footer() {
  const year = new Date().getFullYear()
  const { profile } = useLang()
  const { isDev } = useMode()

  // Recruiter: o rodapé faz parte da própria página minimalista
  if (!isDev) return null

  return (
    <footer className={isDev ? 'border-t-2 border-border bg-surface-raised' : ''}>
      <div
        className={`mx-auto flex w-full flex-col items-center justify-between gap-4 py-8 sm:flex-row ${isDev ? 'max-w-5xl px-6' : 'max-w-2xl border-t border-border px-5'}`}
      >
        <p className="text-sm text-ink-muted">
          © {year} {identity.name} · {profile.ui.madeWith}
        </p>
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors hover:text-accent"
        >
          <ArrowUp size={14} aria-hidden />
          {profile.ui.backToTop}
        </a>
      </div>
    </footer>
  )
}
