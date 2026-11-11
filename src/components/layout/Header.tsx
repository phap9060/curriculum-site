import { useMode } from '../../hooks/useMode'
import { useLang } from '../../hooks/useLang'
import { identity } from '../../data/profile'
import { ModeToggle } from '../ui/ModeToggle'
import { LangToggle } from '../ui/LangToggle'

export function Header() {
  const { isDev } = useMode()
  const { profile } = useLang()
  const { sections } = profile.ui

  const navLinks = [
    { href: '#especialidades', label: sections.expertise },
    { href: '#experiencia', label: sections.experience },
    { href: '#formacao', label: sections.education },
    { href: '#projetos', label: sections.projects },
    { href: '#skills', label: sections.skills },
    { href: '#contato', label: sections.contact },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-6">
        <a href="#top" className="shrink-0 text-lg font-bold tracking-tight">
          {isDev && <span className="font-mono text-accent">~/</span>}
          {identity.name}
          <span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-5 lg:flex" aria-label={profile.ui.mainNav}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <LangToggle />
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
