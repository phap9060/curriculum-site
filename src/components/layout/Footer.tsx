import { ArrowUp } from 'lucide-react'
import { profile } from '../../data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-ink-muted">
          © {year} {profile.name} · Feito com React, TypeScript e Tailwind CSS
        </p>
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors hover:text-accent"
        >
          <ArrowUp size={14} aria-hidden />
          Voltar ao topo
        </a>
      </div>
    </footer>
  )
}
