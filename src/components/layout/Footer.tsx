import { ArrowUp } from 'lucide-react'
import { identity } from '../../data/profile'
import { useLang } from '../../hooks/useLang'

export function Footer() {
  const year = new Date().getFullYear()
  const { profile } = useLang()

  return (
    <footer className="border-t-2 border-border bg-surface-raised">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
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
